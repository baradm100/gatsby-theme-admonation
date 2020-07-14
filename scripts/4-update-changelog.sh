#!/bin/bash 
set -e
set -o pipefail
export tag_name="$(cat ./theme/package.json | jq -r .version)"

echo "Updating the changelog"
node ./scripts/helper/changelogUpdater.js $tag_name $GITHUB_SERVER_URL $GITHUB_REPOSITORY

echo "Cleaning changelog file..."
npm run prettier:changelog
