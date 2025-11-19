# Video Assets Directory

This directory contains the demo video for Antigravity AI.

## Video Requirements

### Primary Demo Video

**File**: `demo.mp4`

**Specifications**:
- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) or 3840x2160 (4K)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 30fps or 60fps
- **Bitrate**: 5-10 Mbps for 1080p, 15-25 Mbps for 4K
- **Audio**: AAC codec, 128-192 kbps, stereo
- **Duration**: 1-3 minutes recommended
- **File Size**: Aim for under 50MB for optimal loading

### Thumbnail Image

**File**: Create `/images/video-placeholder.jpg`

**Specifications**:
- **Format**: JPG or PNG
- **Resolution**: 1920x1080
- **Aspect Ratio**: 16:9
- **File Size**: Under 500KB

## How to Add Your Video

1. **Export your video** with the specifications above
2. **Rename it to** `demo.mp4`
3. **Place it in** this directory: `/Users/ryan/Documents/MyCode/antigravity/videos/demo.mp4`
4. **Create a thumbnail** and save it to `/Users/ryan/Documents/MyCode/antigravity/images/video-placeholder.jpg`
5. The video will automatically load on the website

## Video Optimization Tips

### Compression Tools
- **HandBrake**: Free, cross-platform video converter
- **FFmpeg**: Command-line tool for advanced users
- **Adobe Media Encoder**: Professional option

### FFmpeg Command Example
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -vf scale=1920:1080 demo.mp4
```

### Online Tools
- **CloudConvert**: https://cloudconvert.com/
- **Online Video Converter**: https://www.onlinevideoconverter.com/

## Alternative: YouTube Embed

If you prefer to host your video on YouTube:

1. Upload your video to YouTube
2. Get the video ID from the URL (e.g., `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Replace the `<video>` tag in `index.html` with:

```html
<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>
```

## Content Suggestions

Your demo video should showcase:

1. **Opening** (5-10 seconds)
   - Antigravity AI logo/branding
   - Tagline: "Powered by Gemini 3 Pro"

2. **Key Features** (30-60 seconds each)
   - Autonomous planning in action
   - Direct system access (editor, terminal, browser)
   - Self-verification and testing
   - Multi-agent management interface

3. **Real-world Example** (30-45 seconds)
   - Show a complete development task from start to finish
   - Highlight time savings and accuracy

4. **Closing** (5-10 seconds)
   - Call to action: "Get Started at www.genstory.app"
   - Contact information or social media

## Current Status

⚠️ **Placeholder Active**: The website currently shows a placeholder until you add your video file.

Once you add `demo.mp4`, the placeholder will automatically be hidden and your video will display.

## Testing

After adding your video:

1. Start local server: `python3 -m http.server 8080`
2. Visit: `http://localhost:8080`
3. Scroll to the video section
4. Verify video plays correctly
5. Test on mobile devices

## Questions?

For support, visit [www.genstory.app](https://www.genstory.app)
