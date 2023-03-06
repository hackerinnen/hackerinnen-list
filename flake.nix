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
        nodeDeps = (import ./default.nix { inherit pkgs system; }).nodeDependencies;
        src = pkgs.lib.cleanSource ./.;
      in {
        # Building the website requires network access not available in a Nix
        # build sandbox. Therefore the package is not the static website
        # itself, but a script building the website. We still try to minimize
        # side effects outside our build directory.
        packages.default = pkgs.writeShellApplication {
          name = "build-hackerinnen-website";
          runtimeInputs = [ node ];
          text = ''
            export PATH=${nodeDeps}/bin:$PATH
            export ASTRO_TELEMETRY_DISABLED=1

            dest_dir=$(realpath "$1")

            cd "$(mktemp -d)"

            # Running Astro changes the node_modules/ directory.
            cp -r "${src}" src/
            chmod 0755 src/
            cp -r "${nodeDeps}/lib/node_modules" src/
            find src/ -type f -exec chmod 0644 {} \;
            find src/ -type d -exec chmod 0755 {} \;

            cd src/
            npm run build

            mv dist "$dest_dir"
          '';
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [
            node

            pkgs.just
            pkgs.node2nix
          ];
        };
      }
    );
}
