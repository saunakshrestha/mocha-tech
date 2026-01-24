# Netlify Deployment Guide

This guide explains how to deploy the Mocha Tech Next.js application on Netlify.

## Prerequisites

- A Netlify account (sign up at https://netlify.com)
- This repository connected to your Netlify account

## Configuration

The repository includes a `netlify.toml` file that configures the deployment settings:

- **Build command**: `pnpm install && pnpm run build` - Installs dependencies and builds the Next.js app
- **Publish directory**: `.next` - The output directory for Next.js builds
- **Netlify Plugin**: `@netlify/plugin-nextjs` - Automatically handles Next.js routing and prevents 404 errors

## Deployment Steps

1. **Connect Repository to Netlify**:
   - Log in to your Netlify account
   - Click "Add new site" > "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select the `saunakshrestha/mocha-tech` repository

2. **Configure Build Settings** (if not auto-detected):
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file should automatically configure these settings

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Your site will be available at a Netlify subdomain (e.g., `your-site.netlify.app`)

## Fixing 404 Errors

The `@netlify/plugin-nextjs` plugin automatically handles:
- Client-side routing for Next.js App Router
- API routes
- Dynamic routes
- Image optimization
- Internationalization (if configured)

This prevents common 404 errors when navigating directly to routes or refreshing pages.

## Custom Domain (Optional)

To use a custom domain:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS settings

## Environment Variables

If your application uses environment variables:
1. Go to Site settings > Environment variables
2. Add your variables (e.g., API keys, database URLs)
3. Redeploy your site for the changes to take effect

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are listed in `package.json`
- Verify that the build command works locally

### 404 Errors Persist
- Ensure `@netlify/plugin-nextjs` is installed during build
- Check that `netlify.toml` is in the root of your repository
- Verify the publish directory is set to `.next`

### Missing Environment Variables
- Add required environment variables in Netlify dashboard
- Prefix browser-accessible variables with `NEXT_PUBLIC_`

## Resources

- [Netlify Next.js Documentation](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [@netlify/plugin-nextjs](https://github.com/netlify/netlify-plugin-nextjs)
