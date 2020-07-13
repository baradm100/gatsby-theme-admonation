#!/bin/bash 
set -e
set -o pipefail

export NPM_TOKEN="1"
export NODE_AUTH_TOKEN="1"
export GITHUB_REF="refs/tags/v1.0.1"

./scripts/1-validated-params.sh && ./scripts/2-init.sh && ./scripts/3-bump-version.sh && ./scripts/4-update-changelog.sh && ./scripts/5-push-new-version.sh