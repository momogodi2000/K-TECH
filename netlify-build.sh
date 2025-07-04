#!/bin/bash

# Netlify Build Script for K-TECH MULTI SERVICES
# This script ensures proper dependency installation and build process

set -e

echo "🚀 Starting K-TECH MULTI SERVICES build process..."

# Install dependencies (including dev dependencies for build)
echo "📦 Installing dependencies..."
npm ci

# Set environment for build
export NODE_ENV=production

# Build the application
echo "🔨 Building application..."
npm run build

echo "✅ Build completed successfully!"

# List build output
echo "📁 Build output:"
ls -la dist/ 