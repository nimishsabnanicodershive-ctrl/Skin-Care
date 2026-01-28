#!/bin/bash

# Deployment script for Lumina Skin Care app

echo "Starting deployment process..."

# Ensure we're on the correct branch
git checkout main

# Add all changes
git add .

# Commit changes
echo "Enter commit message:"
read commit_message
git commit -m "$commit_message"

# Push to GitHub
git push origin main

echo "Code successfully pushed to GitHub!"
echo "Now you can deploy to Vercel by:"
echo "1. Going to https://vercel.com/"
echo "2. Connecting your GitHub repository"
echo "3. Adding your environment variables if needed"
echo "4. Clicking deploy"

echo ""
echo "Alternatively, you can use the Vercel CLI:"
echo "1. Install: npm i -g vercel"
echo "2. Login: vercel login"
echo "3. Link project: vercel link"
echo "4. Deploy: vercel --prod"