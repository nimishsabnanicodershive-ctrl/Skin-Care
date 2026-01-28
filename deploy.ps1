# PowerShell Deployment script for Lumina Skin Care app

Write-Host "Starting deployment process..." -ForegroundColor Green

# Ensure we're on the correct branch
git checkout main

# Add all changes
git add .

# Commit changes
$commitMessage = Read-Host "Enter commit message"
git commit -m $commitMessage

# Push to GitHub
git push origin main

Write-Host "Code successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "Now you can deploy to Vercel by:" -ForegroundColor Yellow
Write-Host "1. Going to https://vercel.com/" -ForegroundColor White
Write-Host "2. Connecting your GitHub repository" -ForegroundColor White
Write-Host "3. Adding your environment variables if needed" -ForegroundColor White
Write-Host "4. Clicking deploy" -ForegroundColor White

Write-Host ""
Write-Host "Alternatively, you can use the Vercel CLI:" -ForegroundColor Yellow
Write-Host "1. Install: npm i -g vercel" -ForegroundColor White
Write-Host "2. Login: vercel login" -ForegroundColor White
Write-Host "3. Link project: vercel link" -ForegroundColor White
Write-Host "4. Deploy: vercel --prod" -ForegroundColor White