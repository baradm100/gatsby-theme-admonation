#!/bin/bash
set -e
set -o pipefail

echo "Install theme packages"
cd theme
npm install

echo "Install repo packages"
cd ..
npm install
