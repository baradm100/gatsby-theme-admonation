#!/bin/bash 
set -e
set -o pipefail

export tag_name="$(cat ./theme/package.json | jq -r .version)"
remote_repo="https://${GITHUB_ACTOR}:${SECRET_GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

echo "Commiting and pushing the changes..."

git config --global user.name "Bar Admoni"
git config --global user.email "badmoni@cisco.com"

git checkout master
git add package.json CHANGELOG.md theme/package.json
git diff
git commit -nm "[CI] Update theme to $tag_name"
git push "$remote_repo" HEAD:master

echo "Publishing the package..."
cd theme
# npm publish --access public
