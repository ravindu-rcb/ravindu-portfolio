# Ravindu Chamara Balasooriya - Portfolio Website

A modern, premium-looking developer portfolio website built with vanilla HTML, CSS, and JavaScript. Features a clean, responsive design with dark theme support, smooth animations, and an accessible user experience.

## 🚀 Features

- **Modern Design**: Clean, premium-looking interface with glassmorphism effects and gradient accents
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: Intersection Observer-based scroll animations
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, focus states
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performance**: No heavy frameworks, lightweight and fast-loading
- **Interactive Features**:
  - Scroll spy navigation with active section highlighting
  - Command palette (Ctrl+K / Cmd+K) for quick navigation
  - Project search and filter functionality
  - Skills category filtering
  - Contact form with validation
  - Project modal details
  - Toast notifications

## 📁 Project Structure

```
ravindu-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles (CSS variables, themes, responsive)
├── script.js           # JavaScript functionality
├── data.json           # Projects data (JSON)
├── README.md           # This file
│
└── assets/
    └── img/
        ├── profile-placeholder.png    # Profile image (add your image)
        └── project-placeholder.png    # Project placeholder (optional)
    └── Ravindu_Balasooriya_CV.pdf    # CV file (add your CV)
```

## 🛠️ Setup & Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Local Setup

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd ravindu-portfolio
   ```

2. **Open the project**
   
   **Option A: Direct file opening** (limited functionality)
   - Simply double-click `index.html` to open in your browser
   - Note: Some features may not work due to CORS restrictions (JSON loading)

   **Option B: Using a local server** (recommended)
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   ```
   Then open: `http://localhost:8000`

   **Node.js (with npx):**
   ```bash
   npx serve .
   ```

   **VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Customize content**
   - Replace `assets/img/profile-placeholder.png` with your profile image
   - Add your CV as `assets/Ravindu_Balasooriya_CV.pdf`
   - Update personal information in `index.html`
   - Modify projects in `data.json`

## 📝 Customization

### Updating Personal Information

Edit `index.html` and update:
- Hero section (name, title, description)
- Contact information (email, phone, social links)
- About section content
- Education and certifications

### Adding/Modifying Projects

Edit `data.json` to add or modify projects:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "summary": "Short summary",
      "description": "Full description",
      "technologies": ["Tech1", "Tech2"],
      "github": "https://github.com/user/repo",
      "features": ["Feature 1", "Feature 2"]
    }
  ]
}
```

### Changing Colors & Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    /* ... more variables */
}
```

### Adding Skills

Edit the `skills` object in `script.js`:

```javascript
const skills = {
    all: [
        { name: 'Skill Name', category: 'category' },
        // ...
    ]
};
```

## 🌐 Deployment

### GitHub Pages (Free & Easy)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ravindu-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click Save

3. **Your site will be live at:**
   `https://yourusername.github.io/ravindu-portfolio`

### Netlify

1. **Drag and drop**
   - Go to [Netlify](https://netlify.com)
   - Drag the project folder to the deploy area
   - Your site is live instantly!

2. **Or use Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   netlify deploy --prod
   ```

### Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

### Other Hosting Options

- **Cloudflare Pages**: Connect GitHub repo
- **AWS S3 + CloudFront**: Static hosting
- **Azure Static Web Apps**: Connect GitHub repo
- **Firebase Hosting**: `firebase init hosting` → `firebase deploy`

## 🎨 Design Features

- **Typography**: Inter font family (clean, modern)
- **Colors**: Gradient accents (purple/blue/pink)
- **Effects**: Glassmorphism, soft shadows, smooth transitions
- **Layout**: Max-width container, generous whitespace
- **Animations**: Scroll-triggered reveals, hover effects
- **Responsive**: Mobile-first approach with breakpoints

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip-to-content link
- Proper contrast ratios
- Screen reader friendly
- Reduced motion support

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

## 🎯 Key Sections

1. **Hero**: Introduction, CTA buttons, social links
2. **About**: Personal story, highlight cards
3. **Skills**: Filterable skill chips by category
4. **Experience**: Timeline view of work experience
5. **Projects**: Searchable project cards with modal details
6. **Education**: Education and certifications
7. **Contact**: Contact form and information

## ⌨️ Keyboard Shortcuts

- **Ctrl+K / Cmd+K**: Open command palette
- **Esc**: Close modals/command palette
- **Arrow Keys**: Navigate command palette
- **Enter**: Select command palette item

## 🐛 Troubleshooting

### Projects not loading
- Ensure you're using a local server (not just opening HTML file)
- Check browser console for errors
- Verify `data.json` is valid JSON

### Images not showing
- Check file paths in HTML
- Ensure images are in `assets/img/` folder
- Use correct file extensions

### CV download not working
- Ensure CV file exists at `assets/Ravindu_Balasooriya_CV.pdf`
- Check file name matches exactly (case-sensitive)

### Theme not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio.

## 👤 Author

**Ravindu Chamara Balasooriya**
- Email: ravindubalasooriya.rcb@gmail.com
- GitHub: [@it21348648](https://github.com/it21348648) | [@ravindu-rcb](https://github.com/ravindu-rcb)
- LinkedIn: [ravindu-balasooriya-07ab42215](http://www.linkedin.com/in/ravindu-balasooriya-07ab42215)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Fonts: [Google Fonts](https://fonts.google.com) (Inter, JetBrains Mono)
- Icons: SVG icons embedded directly

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript.
