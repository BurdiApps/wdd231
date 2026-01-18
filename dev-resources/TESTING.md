# Testing Checklist for Chamber Directory Page

## Pre-Submission Testing

### 1. Visual Testing
- [ ] Open `chamber/directory.html` in Live Server
- [ ] Test at 320px width (mobile)
- [ ] Test at 768px width (tablet)  
- [ ] Test at 1024px+ width (desktop)
- [ ] Check for horizontal scrolling (should be none)
- [ ] Verify all images load properly
- [ ] Check logo appears correctly

### 2. Functionality Testing
- [ ] Click hamburger menu (mobile view)
- [ ] Navigation menu opens/closes
- [ ] Click "Grid View" button
- [ ] Click "List View" button
- [ ] View switches between grid and list
- [ ] All 9 members display
- [ ] Phone links are clickable
- [ ] Website links open in new tab
- [ ] Footer year shows current year (2026)
- [ ] Footer shows last modified date

### 3. Responsiveness
Mobile (320-639px):
- [ ] 1 column grid
- [ ] Hamburger menu visible
- [ ] Full navigation hidden

Tablet (640-959px):
- [ ] 2 column grid
- [ ] Full navigation visible
- [ ] Hamburger hidden

Desktop (960px+):
- [ ] 3 column grid
- [ ] Full navigation visible
- [ ] Proper spacing and alignment

### 4. Browser DevTools Tests

#### A. Console Check
1. Press F12
2. Go to Console tab
3. Refresh page
4. **Should see:** No red errors
5. **Should see:** Members loading successfully

#### B. Network Check
1. F12 → Network tab
2. Refresh page
3. Look at total page size
4. **Should be:** Under 500 KB

#### C. Lighthouse Audit
1. F12 → Lighthouse tab
2. Select: Mobile
3. Check: Accessibility, Best Practices, SEO
4. Click "Analyze page load"
5. **Target scores:** All 95+

#### D. CSS Overview (Color Contrast)
1. F12 → Three dots (⋮) → More tools → CSS Overview
2. Click "Capture overview"
3. Go to "Colors" section
4. Check "Contrast issues"
5. **Should show:** 0 contrast issues

### 5. HTML Validation
1. Go to: https://validator.w3.org/
2. Select: "Validate by Direct Input"
3. Copy/paste HTML from directory.html
4. OR use: "Validate by URI" after pushing to GitHub
5. **Should show:** No errors

### 6. JSON Validation
1. Open: https://jsonlint.com/
2. Copy/paste content from `data/members.json`
3. Click "Validate JSON"
4. **Should show:** "Valid JSON"

### 7. Accessibility Testing
- [ ] Tab through navigation (keyboard only)
- [ ] Tab to grid/list buttons
- [ ] Tab to all links in members
- [ ] Check focus indicators visible
- [ ] Check ARIA labels present on buttons

### 8. Cross-Browser Testing (Optional)
Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Edge
- [ ] Safari (if available)

## Common Issues & Fixes

### Images Not Loading
- Check file paths are correct
- Verify images exist in `chamber/images/` folder
- Check capitalization matches exactly

### JavaScript Not Working
- Open Console (F12)
- Look for red error messages
- Verify `directory.js` is linked correctly
- Check JSON file path is correct

### Styles Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths
- Verify normalize.css CDN is loading
- Check for CSS syntax errors

### Grid/List Toggle Not Working
- Verify button IDs match JavaScript
- Check container ID is correct
- Look for console errors

### Members Not Displaying
- Check JSON file is valid
- Verify fetch URL is correct
- Look at Network tab for 404 errors
- Check Console for fetch errors

## Final Pre-Push Checklist
- [ ] Update meta author with your full name
- [ ] Update Open Graph URLs with your GitHub username
- [ ] Test all functionality one more time
- [ ] Run Lighthouse audit
- [ ] Check CSS color contrast
- [ ] Validate HTML
- [ ] Take screenshot for documentation
- [ ] Commit and push to GitHub
- [ ] Test live GitHub Pages URL
- [ ] Submit to Canvas

## GitHub Pages URL Format
```
https://YOUR-USERNAME.github.io/wdd231/chamber/directory.html
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Expected Results Summary
✅ No HTML validation errors
✅ No JavaScript console errors  
✅ No color contrast issues
✅ Lighthouse scores 95+ (Accessibility, Best Practices, SEO)
✅ Page weight under 500 KB
✅ Responsive from 320px to desktop
✅ Grid/List toggle working
✅ All 9 members display
✅ Navigation responsive
✅ Footer dates auto-generated

Good luck! 🚀
