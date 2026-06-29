#!/usr/bin/env bash

set -euo pipefail

remote="origin"
primary_repo="https://github.com/FurqanAfridi/ammarco.com.git"
actions_repo="https://github.com/IsmailofficialGithub/ammarco.com.git"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run this script from inside the ammarco.com Git repository."
  exit 1
fi

if ! git remote get-url "$remote" >/dev/null 2>&1; then
  echo "Git remote '$remote' does not exist."
  exit 1
fi

# Keep fetching from Furqan's repository while pushing to both repositories.
git remote set-url "$remote" "$primary_repo"
git config --unset-all "remote.$remote.pushurl" 2>/dev/null || true
git remote set-url --add --push "$remote" "$primary_repo"
git remote set-url --add --push "$remote" "$actions_repo"

echo "Dual push configured successfully:"
git remote -v
echo
echo "Normal pushes will now update both repositories:"
echo "  git push origin main"
