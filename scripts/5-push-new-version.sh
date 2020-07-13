#!/bin/bash 
set -e
set -o pipefail

export tag_name="$(cat ./theme/package.json | jq -r .version)"

echo "Commiting and pushing the changes..."
git checkout master
git add package.json CHANGELOG.md theme/package.json
git commit -nm "[CI] Update theme to $tag_name"
git push

echo "Publishing the package..."
cd theme
# npm publish --access public