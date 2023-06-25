help:
    just --list

build:
    nix run .#build -- dist
