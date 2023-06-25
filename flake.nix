{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachSystem [ "x86_64-linux" ] (system:
      let
        pkgs = import nixpkgs { inherit system; };
        node = pkgs.nodejs-18_x;
        src = pkgs.lib.cleanSource ./.;

        packageJson = pkgs.lib.sourceByRegex ./. [
          "^package.json$"
          "^package-lock.json$"
        ];

        npm-install = pkgs.writeShellApplication {
          name = "npm-install";
          runtimeInputs = [ node pkgs.coreutils pkgs.bash ];
          text = ''
            export HOME=$PWD # npm will modify $HOME

            cp ${packageJson}/* .
            chmod 0644 package*.json
            npm clean-install

            mv node_modules "''${out:?}"
          '';
        };

        nodeModules = pkgs.stdenv.mkDerivation {
          name = "hackerinnen-list-node-modules";
          builder = "${npm-install}/bin/npm-install";
          outputHashMode = "recursive";
          outputHash = "sha256-0hjl9at0YydZetZBgQLzzA/OqBeLXL1nAE8YX/m+7m8=";
        };
      in {
        # Building the website requires network access not available in a Nix
        # build sandbox. Therefore the package is not the static website
        # itself, but a script building the website. We still try to minimize
        # side effects outside our build directory.
        packages.build = pkgs.writeShellApplication {
          name = "build-hackerinnen-website";
          runtimeInputs = [ node ];
          text = ''
            export PATH=${nodeModules}/.bin:$PATH
            export ASTRO_TELEMETRY_DISABLED=1

            dest_dir=$(realpath "$1")
            if [[ ! -d "$dest_dir" ]]; then
              echo "$dest_dir does not exist, aborting."
              exit 1
            fi

            cd "$(mktemp -d)"
            cp -r "${src}" src/
            chmod u+w src/

            # Running Astro changes the node_modules/ directory, so we have to
            # copy it instead of merely creating a symlink.
            cp -r "${nodeModules}" src/node_modules
            chmod -R u+w src/

            cd src/
            npm run build

            mv dist/* "$dest_dir"
          '';
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [
            node
            pkgs.just
          ];
        };
      }
    );
}
