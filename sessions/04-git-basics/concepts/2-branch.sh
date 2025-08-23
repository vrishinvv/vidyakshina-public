#!/bin/bash
# --------------------------------------------------
# Create & switch branches
# --------------------------------------------------

# Create a new branch called feature-x
git branch feature-x

# Switch to the new branch
git checkout feature-x

echo "✅ Now you are on branch: feature-x"

# List all branches to confirm
git branch

