# WDD 231 - Web Frontend Development I
## Course Home Page

This is your WDD 231 course home page, featuring a responsive design with a hamburger menu, dynamic course filtering, and social media integration.

## 🎯 Assignment Completion Checklist

### Files to Customize:

1. **index.html**
   - [ ] Replace "Your Name" with your actual name (appears in 3 places)
   - [ ] Replace "Your State/Country" with your location (footer)
   - [ ] Update email address in Contact Information section
   - [ ] Update social media links with your actual profiles

2. **images/profile.jpg**
   - [ ] Replace the placeholder SVG with your actual profile photo
   - [ ] Ensure image is optimized (under 125 kB)
   - [ ] Recommended size: 200x200 pixels

3. **images/logo.svg**
   - [ ] Replace with your own SVG logo or icon
   - [ ] You can find free SVG icons at:
     - Bootstrap Icons: https://icons.getbootstrap.com/
     - Font Awesome: https://fontawesome.com/
     - Flowbite Icons: https://flowbite.com/icons/

4. **scripts/courses.js**
   - [ ] Update `completed: true/false` for each course based on your progress
   - [ ] CSE 110, WDD 130, CSE 111, CSE 210, WDD 131 - set to your completion status

5. **styles/style.css**
   - [ ] Optional: Change color scheme by modifying CSS variables in `:root`
   - [ ] Optional: Adjust Google Font in index.html head section

## 🚀 Features Implemented

✅ **Responsive Header**
- SVG logo
- Site name
- Hamburger menu (mobile) / Horizontal navigation (desktop)

✅ **Navigation**
- Home, Chamber, Final project links
- Wayfinding with "current" page highlighting
- Touch-friendly 44px minimum height
- Smooth hover effects

✅ **Main Content**
- About Me section with profile photo
- Dynamic course certificate display
- Filter buttons: All, CSE, WDD courses
- Total credits calculation using reduce()
- Completed courses highlighted with checkmark
- Contact information section

✅ **Footer**
- Social media icons (GitHub, LinkedIn, Discord, Teams)
- Dynamic copyright year
- Last modified date

✅ **JavaScript Features**
- Hamburger menu toggle
- Course filtering with Array.filter()
- Total credits calculation with Array.reduce()
- Dynamic year and last modified date

## 📱 Responsive Design

- **Mobile (320px+)**: Single column, hamburger menu, stacked course cards
- **Tablet (768px+)**: 2-column course grid, horizontal navigation
- **Desktop (1024px+)**: 3-column course grid, expanded layout

## 🎨 Color Scheme

Current colors (customizable in CSS):
- Primary: #4A90E2 (Blue)
- Secondary: #2C5AA0 (Dark Blue)
- Accent: #50C878 (Green)
- Completed: #28a745 (Success Green)

## 🧪 Testing Checklist

Before submitting:
- [ ] Test in Chrome, Firefox, and Edge
- [ ] Verify responsive design (320px to 1200px+)
- [ ] Check DevTools Console for JavaScript errors
- [ ] Run Lighthouse audit (target: 95+ in all categories)
- [ ] Verify no horizontal scrolling
- [ ] Test hamburger menu toggle
- [ ] Test course filtering buttons
- [ ] Verify social media links work
- [ ] Check accessibility with screen reader

## 📦 File Structure

```
wdd231/
├── index.html
├── chamber/
│   └── index.html (placeholder)
├── project/
│   └── index.html (placeholder)
├── images/
│   ├── logo.svg
│   ├── profile.jpg
│   ├── github.svg
│   ├── linkedin.svg
│   ├── discord.svg
│   └── microsoft-teams.svg
├── styles/
│   └── style.css
└── scripts/
    ├── main.js
    └── courses.js
```

## 🔗 Deployment

1. Commit all changes to your GitHub repository
2. Push to GitHub: `git push origin main`
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `https://yourusername.github.io/wdd231`

## 📚 Resources

- [Google Fonts](https://fonts.google.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## ✅ Course Requirements Met

- ✅ Semantic HTML5 structure
- ✅ Custom CSS (no frameworks)
- ✅ Responsive design (320px - 1200px+)
- ✅ CSS Grid and Flexbox layouts
- ✅ Google Fonts API integration
- ✅ Hamburger navigation pattern
- ✅ Wayfinding implementation
- ✅ Touch-friendly 44px targets
- ✅ JavaScript ES6+ features
- ✅ Array methods (filter, reduce)
- ✅ Dynamic content generation
- ✅ Social media integration
- ✅ Accessibility considerations
- ✅ No horizontal scrolling
- ✅ Optimized images

Good luck with your assignment! 🎉
