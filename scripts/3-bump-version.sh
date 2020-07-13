#!/bin/bash 
set -e
set -o pipefail

test_branch="refs/tags/v1.0.1"
branch_name=${GITHUB_REF##*/}
export tag_name="${branch_name//v}"

echo "Detected the new version: $tag_name"

cd theme

rm -rf *.tgz

echo "Updating to: $tag_name"
echo $(cat package.json | jq ".version=\"$tag_name\"" | jq .) > package.json

echo "Cleaning package file..."
npm run prettier:package

cd ..
