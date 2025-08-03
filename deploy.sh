#!/bin/bash

# Dashboard Demo Deployment Script

echo "🚀 Setting up Dashboard Demo for GitHub..."

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Athlete Performance Dashboard Demo

- Complete dashboard with video filtering
- Mock data with 11 sample videos
- Responsive design with black/neon green theme
- Advanced filtering by year, month, week, duration, activity type, status
- Video cards with preview and status indicators
- Bootstrap 5 + Custom CSS styling"

echo "✅ Repository initialized and committed"

echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Run these commands:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "🎯 Your dashboard demo is ready!"
echo "   - Run 'npm start' to start the server"
echo "   - Open http://localhost:5005 to view the dashboard"
echo "   - All features are working with mock data" 