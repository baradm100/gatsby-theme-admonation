#!/bin/bash
set -e
set -o pipefail

echo "Install theme packages"
cd theme
npm install

echo "Install repo packages"
cd ..
npm install

echo "Setting git config"
git config --global user.name "github-actions[bot]"
git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
