# Deployment Guide

## Deploying to Railway

Railway is a modern platform that makes deploying full-stack applications simple. Follow these steps to deploy your AI Image Generator.

### Step-by-Step Instructions

#### 1. Prerequisites
- GitHub account
- Railway account (sign up at [railway.app](https://railway.app))
- OpenAI API key ([get one here](https://platform.openai.com/api-keys))

#### 2. Push Your Code to GitHub

Make sure your latest changes are pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

#### 3. Deploy to Railway

**Option A: Using Railway Dashboard**

1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `OptionsTradingUni/ImageProducer`
5. Railway will automatically detect your Node.js project

**Option B: Using Railway CLI**

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

#### 4. Configure Environment Variables

In the Railway dashboard:
1. Go to your project
2. Click on "Variables" tab
3. Add the following variable:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key

Railway automatically sets:
- `PORT` (uses Railway's assigned port)
- `NODE_ENV=production`

#### 5. Monitor Deployment

Railway will:
1. Install dependencies (`npm install`)
2. Build your application (`npm run build`)
3. Start your server (`npm start`)
4. Assign a public URL

#### 6. Access Your Application

Once deployed, Railway provides:
- A public URL: `https://your-app-name.up.railway.app`
- Automatic HTTPS
- Custom domain support (optional)

### Build Configuration

Your project includes a `railway.json` file that configures:
- **Builder**: Nixpacks (Railway's default)
- **Build Command**: `vite build && node scripts/build.js`
  - Builds the frontend with Vite
  - Bundles the backend with esbuild (custom script handles ES module compatibility)
- **Start Command**: `npm start`
- **Restart Policy**: Restarts on failure (max 10 retries)

**Note**: The custom build script (`scripts/build.js`) ensures compatibility with ES modules by properly handling `import.meta.dirname` during the build process. This is required for the production bundle to work correctly.

### Troubleshooting

**Build Fails?**
- Check Railway logs for specific errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**App Not Starting?**
- Check that `OPENAI_API_KEY` is set
- Review application logs in Railway dashboard
- Ensure PORT is not hardcoded (use `process.env.PORT`)

**502 Bad Gateway?**
- App may still be starting (wait 30-60 seconds)
- Check if the health check endpoint is responding
- Review logs for startup errors

### Custom Domain (Optional)

To use your own domain:
1. Go to Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Monitoring & Scaling

Railway provides:
- **Logs**: Real-time application logs
- **Metrics**: CPU, memory, and network usage
- **Auto-scaling**: Automatic scaling based on traffic
- **Pricing**: Pay only for what you use

### Cost Estimates

Railway offers:
- **Free tier**: $5 credit per month
- **Pay-as-you-go**: ~$0.000463 per GB-second

For a typical AI image app:
- Estimated: $5-20/month depending on traffic
- More with heavy OpenAI API usage

### Alternative Deployment Options

If you prefer other platforms:
- **Vercel**: Good for frontend-heavy apps
- **Render**: Similar to Railway
- **Fly.io**: Global edge deployment
- **Replit**: Quick deployment with built-in editor

---

## Deploying to Other Platforms

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Note**: Configure build settings:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Render

1. Connect GitHub repository
2. Select "Web Service"
3. Build Command: `npm run build`
4. Start Command: `npm start`
5. Add environment variables

---

For support, open an issue on GitHub or contact the maintainers.
