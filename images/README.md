# Antigravity AI Images

This directory contains image assets for the Antigravity AI website.

## Required Images

### 1. Video Poster Image
**Filename**: `video-poster.jpg`
- **Purpose**: Thumbnail shown before video plays
- **Dimensions**: 1920x1080 pixels (16:9 ratio)
- **Format**: JPG (optimized) or PNG
- **File Size**: < 500KB

### 2. Open Graph Image
**Filename**: `og-image.jpg`
- **Purpose**: Preview image when shared on social media
- **Dimensions**: 1200x630 pixels (1.91:1 ratio)
- **Format**: JPG or PNG
- **File Size**: < 1MB
- **Requirements**:
  - Include Antigravity AI branding
  - Clear, readable text
  - High contrast

### 3. Twitter Card Image
**Filename**: `twitter-image.jpg`
- **Purpose**: Preview image for Twitter shares
- **Dimensions**: 1200x675 pixels (16:9 ratio)
- **Format**: JPG or PNG
- **File Size**: < 5MB

## Optional Images

### Product Screenshots
- Feature demonstrations
- UI examples
- Before/after comparisons

### Icons and Logos
- High-resolution logo variants
- App icons for different platforms

## Image Optimization

### Compress Images
```bash
# Using ImageOptim (macOS)
imageoptim image.jpg

# Using command line tools
# For JPEG
jpegoptim --max=85 image.jpg

# For PNG
optipng -o7 image.png

# Using modern formats
# Convert to WebP
cwebp -q 85 image.jpg -o image.webp
```

### Responsive Images
Consider creating multiple sizes for responsive design:
- Small: 640px width
- Medium: 1024px width
- Large: 1920px width

## Design Guidelines

### Brand Colors
- Primary: #4285f4 (Google Blue)
- Secondary: #34a853 (Google Green)
- Accent: #fbbc04 (Google Yellow)
- Background: #ffffff, #f8f9fa

### Typography
- Headlines: Google Sans
- Body: Roboto

### Style
- Clean, modern aesthetic
- Generous whitespace
- Professional and trustworthy
- Technology-forward

## Creating Placeholder Images

If you don't have images yet, create placeholders:

```bash
# Using ImageMagick
convert -size 1920x1080 -background "#4285f4" -fill white \
  -gravity center -pointsize 72 \
  label:"Antigravity AI" video-poster.jpg

convert -size 1200x630 -background "#4285f4" -fill white \
  -gravity center -pointsize 48 \
  label:"Antigravity AI\nAI-Powered IDE" og-image.jpg
```

Or use online tools:
- [Placeholder.com](https://placeholder.com/)
- [Canva](https://www.canva.com/)
- [Figma](https://www.figma.com/)

## File Structure

```
images/
├── README.md (this file)
├── video-poster.jpg (required)
├── og-image.jpg (required)
├── twitter-image.jpg (required)
├── screenshots/ (optional)
│   ├── feature-1.jpg
│   ├── feature-2.jpg
│   └── ...
└── logos/ (optional)
    ├── logo.svg
    ├── logo-dark.svg
    └── logo-light.svg
```

## Performance Checklist

- [ ] All images compressed and optimized
- [ ] File sizes within recommended limits
- [ ] Correct dimensions for each use case
- [ ] Alt text added in HTML (for accessibility)
- [ ] Modern formats (WebP, AVIF) provided where supported
- [ ] Lazy loading implemented for below-fold images

## Accessibility

When adding images to HTML:

```html
<!-- Good example -->
<img 
  src="/images/video-poster.jpg" 
  alt="Antigravity AI interface showing autonomous agent coding"
  width="1920" 
  height="1080"
  loading="lazy"
>
```

Always include:
- Descriptive `alt` text
- `width` and `height` attributes (prevents layout shift)
- `loading="lazy"` for images below the fold

## Current Status

**Status**: ⚠️ Placeholders Needed

Create and add the following images:
1. video-poster.jpg
2. og-image.jpg  
3. twitter-image.jpg

---

For questions, refer to the main README.md in the project root.

