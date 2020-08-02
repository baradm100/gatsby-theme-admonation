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
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"
