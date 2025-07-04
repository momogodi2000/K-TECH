# K-TECH MULTI SERVICES - Deployment Guide

This guide provides instructions for deploying the K-TECH MULTI SERVICES application to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
- **Pros**: Fast, automatic deployments, great for React apps
- **Cons**: Limited server-side functionality

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project root
3. Follow prompts to connect your GitHub repo
4. Set environment variables in Vercel dashboard

### 2. Netlify
- **Pros**: Free tier, easy setup, form handling
- **Cons**: Build time limits on free tier

**Steps:**
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables

### 3. Docker Deployment
- **Pros**: Consistent environment, scalable
- **Cons**: More complex setup

**Steps:**
1. Build image: `docker build -t k-tech-multi-services .`
2. Run container: `docker run -p 80:80 k-tech-multi-services`

## 📋 Environment Variables

Create a `.env` file in your project root:

```env
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Form (if using Netlify Forms)
NETLIFY_FORMS_ENABLED=true

# API Endpoints (if needed)
VITE_API_URL=https://api.ktech-cm.com

# WhatsApp Business API
VITE_WHATSAPP_NUMBER=+237XXXXXXXXX

# Social Media
VITE_FACEBOOK_URL=https://facebook.com/ktech-cm
VITE_INSTAGRAM_URL=https://instagram.com/ktech-cm
VITE_LINKEDIN_URL=https://linkedin.com/company/ktech-cm
```

## 🔧 Platform-Specific Configuration

### Vercel
- Uses `vercel.json` for configuration
- Automatic HTTPS
- Edge functions support
- Global CDN

### Netlify
- Uses `netlify.toml` for configuration
- Form handling built-in
- Functions support
- Custom domains

### Docker
- Uses `Dockerfile` for containerization
- `docker-compose.yml` for local development
- Nginx for serving static files

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Docker build
npm run docker:build

# Docker run
npm run docker:up
```

## 🔒 Security Headers

The application includes security headers for:
- XSS Protection
- Content Type Options
- Frame Options
- Referrer Policy
- Permissions Policy

## 📱 PWA Configuration

The app is configured as a Progressive Web App with:
- Service Worker for offline functionality
- Web App Manifest
- Install prompts
- Offline caching

## 🚀 GitHub Actions

Automated deployment pipeline includes:
- Testing and linting
- Building application
- Deploying to multiple platforms
- Performance monitoring with Lighthouse

## 📊 Performance Monitoring

### Lighthouse CI
- Automated performance testing
- Accessibility checks
- SEO optimization
- PWA compliance

### Google Analytics
- User behavior tracking
- Performance metrics
- Conversion tracking

## 🔧 Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version (18+)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Environment variables not working**
   - Ensure variables are prefixed with `VITE_`
   - Restart development server
   - Check platform-specific configuration

3. **Service Worker issues**
   - Clear browser cache
   - Unregister old service worker
   - Check manifest.json configuration

4. **Docker build fails**
   - Check Dockerfile syntax
   - Ensure all files are copied
   - Verify nginx.conf configuration

### Performance Optimization

1. **Image optimization**
   - Use WebP format
   - Implement lazy loading
   - Optimize image sizes

2. **Code splitting**
   - Lazy load components
   - Split vendor bundles
   - Use dynamic imports

3. **Caching strategy**
   - Static assets: 1 year
   - HTML: no cache
   - Service worker: no cache

## 📞 Support

For deployment issues:
- Check platform documentation
- Review build logs
- Contact platform support
- Check GitHub Issues

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:
1. Runs tests on pull requests
2. Builds and deploys on main branch
3. Runs performance audits
4. Notifies on deployment status

## 📈 Monitoring

Monitor your deployment with:
- Platform analytics
- Google Analytics
- Error tracking (Sentry)
- Performance monitoring (Lighthouse CI) 