# 🎨 Pixel Art Guide for Bakersfield Chamber Site

## Why Pixel Art Works for This Project

✅ **Unique Identity**: Stands out from typical corporate chamber sites
✅ **Memorable**: Visitors will remember your creative approach
✅ **Still Professional**: When done right, pixel art can be clean and modern
✅ **Meets Requirements**: All rubric items still satisfied
✅ **Learning Opportunity**: Practice your pixel art skills on a real project

## 🖼️ Priority Pixel Art Assets

### 1. Business Member Images (Directory Page - CURRENT PRIORITY)

Create 400x300px pixel art images for each of the 9 businesses:

#### **Valley Strong Credit Union**
- **Theme**: Bank building
- **Colors**: Blues (#0066b2), white, gold accents
- **Elements**: Building facade, dollar sign, vault door
- **Style**: Simple, geometric bank building

#### **Dignity Health Memorial Hospital**
- **Theme**: Hospital building
- **Colors**: White, red cross, light blues
- **Elements**: Hospital building, red cross symbol, ambulance
- **Style**: Clean medical facility

#### **Kern Oil & Refining Co.**
- **Theme**: Oil derrick/refinery
- **Colors**: Dark greens, browns, industrial grays
- **Elements**: Oil derrick (Bakersfield is famous for these!), oil barrel
- **Style**: Industrial, iconic Bakersfield imagery

#### **Rabobank**
- **Theme**: Bank/Agricultural
- **Colors**: Orange (#ed6c00), white
- **Elements**: Bank building with agricultural elements (wheat, barn)
- **Style**: Modern bank with farm connection

#### **The Padre Hotel**
- **Theme**: Historic hotel building
- **Colors**: Browns, golds, warm tones
- **Elements**: Art deco building, vintage signage, palm trees
- **Style**: 1920s architecture vibe

#### **Bolthouse Farms**
- **Theme**: Carrots/farming
- **Colors**: Orange (#ff6b35), greens
- **Elements**: Giant carrot, farm field, produce
- **Style**: Bright, agricultural

#### **Bakersfield Sound**
- **Theme**: Music venue/guitar
- **Colors**: Gold (#d4a574), reds
- **Elements**: Electric guitar, musical notes, stage
- **Style**: Country music heritage

#### **Grimmway Farms**
- **Theme**: Carrot farm
- **Colors**: Green (#228b22), orange
- **Elements**: Carrot fields, tractor, produce
- **Style**: Large-scale agriculture

#### **McCarthy Building Companies**
- **Theme**: Construction
- **Colors**: Dark blue (#003d6b), yellow
- **Elements**: Crane, building under construction, hard hat
- **Style**: Professional construction

## 🛠️ Recommended Pixel Art Tools

### Free & Easy (Start Here):
1. **Piskel** (https://www.piskelapp.com/) - Browser-based, perfect for beginners
2. **Lospec Pixel Editor** (https://lospec.com/pixel-editor/) - Simple, online
3. **Pixilart** (https://www.pixilart.com/) - Online with community

### Desktop (More Features):
4. **Aseprite** ($19.99, industry standard) - Best for serious pixel art
5. **Krita** (Free) - Full art program with pixel art tools
6. **GIMP** (Free) - Can be configured for pixel art

## 📐 Technical Specifications

### For Business Images:
- **Canvas Size**: 400x300 pixels
- **Color Palette**: 8-16 colors per image (keep it simple!)
- **File Format**: PNG (supports transparency)
- **File Size Target**: Under 30KB each
- **Naming**: Same as current (valley-strong.jpg → valley-strong.png)

### For Logo (Optional):
- **Canvas Size**: 64x64 pixels
- **Format**: PNG with transparency
- **Style**: Circular or square with rounded corners

### For Icons (Future):
- **Canvas Size**: 32x32 or 48x48 pixels
- **Format**: PNG
- **Use**: Navigation, weather, decorative elements

## 🎨 Pixel Art Best Practices

### 1. Start Simple
- Use basic shapes: rectangles, circles, triangles
- Focus on recognizable silhouettes
- Don't add too much detail at first

### 2. Limited Color Palette
- Choose 8-16 colors per image
- Use your site colors: #0066b2 (blue), #d4a574 (gold), etc.
- Create a palette and stick to it

### 3. Dithering (Optional)
- Use checkerboard patterns to create texture
- Great for shading and gradients
- Don't overuse - can look messy

### 4. Outlines
- 1-2 pixel black or dark outlines make shapes pop
- Or use "sel-out" (selective outlining) for modern look
- No outlines = flat, modern style

### 5. Anti-Aliasing
- NO anti-aliasing! Keep edges crisp
- This is why we added `image-rendering: pixelated` to CSS

## 🚀 Quick Start Workflow

### Using Piskel (Easiest for Beginners):

1. **Go to** https://www.piskelapp.com/
2. **Set canvas size**: 400x300 (Tools → Resize)
3. **Choose your colors**: Click color palette
4. **Draw your image**:
   - Use Pen tool for individual pixels
   - Use Rectangle/Circle tools for shapes
   - Use Fill tool for large areas
5. **Export**: File → Export → PNG
6. **Save to**: `c:\Users\Burdi\WDD_231\chamber\images\`

### Example: Valley Strong Credit Union

```
Step 1: Draw building outline (blue rectangle)
Step 2: Add windows (white squares)
Step 3: Add door (darker blue)
Step 4: Add "VALLEY STRONG" text (white pixels)
Step 5: Add sky background (light blue)
Step 6: Export as valley-strong.png
```

## 🎯 Bakersfield-Specific Elements to Include

Your pixel art should celebrate Bakersfield's identity:

1. **Oil Derricks** - Bakersfield's iconic oil industry
2. **Agriculture** - Central Valley farming (carrots, grapes)
3. **Mountains** - Sierra Nevada in the background
4. **Sun** - Warm California sunshine
5. **Country Music** - Bakersfield Sound heritage
6. **Desert/Farming Mix** - Unique landscape

## 🔄 Alternative: Simple Pixel Art Style

If creating detailed images feels overwhelming, try this **ultra-simple approach**:

### Minimalist Icons (200x200px):
- **Bank**: Simple building shape with $ symbol
- **Hospital**: Red cross on white background
- **Oil**: Single oil derrick silhouette
- **Hotel**: Building with "HOTEL" sign
- **Farm**: Carrot icon
- **Music**: Guitar silhouette
- **Construction**: Hard hat or crane

This takes 5-10 minutes per image but still gives unique pixel art charm!

## 📝 File Conversion Checklist

Once you create your pixel art:

- [ ] Export as PNG (not JPG - better for pixel art)
- [ ] Name files correctly (match JSON data)
- [ ] Save to `chamber/images/` folder
- [ ] Update JSON if changing file extensions (`.jpg` → `.png`)
- [ ] Test in browser to see how they look
- [ ] Check file sizes (should be small!)

## 🎨 Color Palette Suggestion

Use these Bakersfield-themed colors:

```css
/* Primary Colors (from your site) */
#0066b2 - Bright Blue (sky, water)
#003d6b - Dark Blue (shadows, depth)
#d4a574 - Gold (sun, wheat)

/* Bakersfield Colors */
#ff6b35 - Orange (sunset, carrots, agriculture)
#228b22 - Green (crops, farms)
#8b4513 - Brown (oil, earth, buildings)
#f7931e - Golden Yellow (California sun)
#cd7f32 - Bronze (industry)

/* Supporting */
#ffffff - White (buildings, highlights)
#2c2c2c - Dark Gray (outlines, text)
#f5f5f5 - Light Gray (backgrounds)
```

## 🌟 Examples to Inspire You

Search these for inspiration:
- "pixel art building" - For business structures
- "pixel art oil derrick" - Bakersfield's iconic imagery
- "pixel art farm" - Agricultural elements
- "16-bit city" - Cityscape ideas
- "pixel art icons" - Simple icon style

## ✅ Next Steps

1. **Start with ONE image** - Pick an easy one (maybe Bolthouse = carrot icon)
2. **Get feedback** - See if the style works
3. **Create remaining 8 images** - Keep consistent style
4. **Replace files in chamber/images/** folder
5. **Test the directory page** - See them all together
6. **Adjust as needed** - Refine based on how they look

## 💡 Pro Tip

Your CSS is now set up with `image-rendering: pixelated` which prevents the browser from smoothing/blurring your pixel art. This ensures your pixels stay crisp and chunky!

## 🎓 Learning Resources

- **Lospec Tutorials**: https://lospec.com/pixel-art-tutorials
- **Pixel Art for Beginners**: Search YouTube
- **r/PixelArt**: Reddit community for feedback
- **Pixel Art Class**: https://blog.studiominiboss.com/pixelart

---

**Remember**: The goal is to add personality while maintaining professionalism. Basic, clean pixel art with recognizable symbols will work better than trying to create complex masterpieces. Have fun with it! 🎨✨
