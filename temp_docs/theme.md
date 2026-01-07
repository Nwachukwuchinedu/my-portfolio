# Addendum: Light/Dark Theme Toggle Specification

## Design System Extension: Light Mode Palette

### Color Palette (Light Mode)

**Primary Palette:**
- `#FFFFFF` — Pure White (backgrounds)
- `#F5F5F5` — Soft Gray (elevated surfaces, cards)
- `#0A0A0A` — Deep Black (primary text)
- `#525252` — Charcoal (secondary text)

**Accent System (Adjusted for Light):**
- `#0891B2` — Cyan Deep (primary accent, maintains contrast)
- `#7C3AED` — Violet Depth (unchanged, works in both modes)
- `#059669` — Success Green Dark (metrics, positive indicators)

**Gradient Definitions (Light):**
- **Hero Gradient:** `linear-gradient(135deg, #7C3AED 0%, #0891B2 100%)` at 15% opacity
- **Glass Gradient:** `linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 100%)`

### Glassmorphism (Light Mode)

**Card Treatment:**
```
background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.01))
backdrop-filter: blur(24px) saturate(180%)
border: 1px solid rgba(0,0,0,0.06)
box-shadow: 0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)
```

**Noise Overlay (Light):**
- SVG noise texture at 1.5% opacity (reduced), blend mode: multiply
- Maintains texture without overwhelming bright background

---

## Implementation Approach

### Toggle Component Specifications

**Position:** Fixed top-right corner, 40px from top, 80px from right edge

**Design:**
- Pill-shaped toggle (width: 64px, height: 32px)
- Glass morphism background matching current theme
- Icon transition: Sun ☀️ (light mode) ↔ Moon 🌙 (dark mode)
- Smooth slide animation (400ms cubic-bezier(0.4, 0, 0.2, 1))

**Interaction:**
- Magnetic hover effect (subtle pull toward cursor within 50px)
- Haptic feedback suggestion: Brief scale pulse on click (1.0 → 1.1 → 1.0)
- Keyboard accessible: Tab focus, Enter/Space to toggle

### Theme Persistence

**Storage:** localStorage key: `theme-preference`
**Default Behavior:** Respect system preference on first visit
```javascript
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
```

### CSS Implementation Strategy

**Recommended: CSS Variables + data attribute**

```css
:root[data-theme="light"] {
  --color-bg: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-text-primary: #0A0A0A;
  --color-text-secondary: #525252;
  --color-accent: #0891B2;
}

:root[data-theme="dark"] {
  --color-bg: #050505;
  --color-surface: #0A0A0A;
  --color-text-primary: #E8E8E8;
  --color-text-secondary: #6B6B6B;
  --color-accent: #00E5FF;
}
```

**Tailwind Configuration:**
Extend with custom color definitions that reference CSS variables

### Transition Behavior

**Page-wide theme switch:**
- Transition duration: 400ms
- Transition property: `background-color, color, border-color, box-shadow`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Exclude from transition: `transform, opacity` (preserve animation performance)

**Special Considerations:**
- 3D elements: Adjust lighting intensity (rim lights should be more subtle in light mode)
- Code blocks: Separate syntax highlighting themes (dark: One Dark Pro, light: GitHub Light)
- Images with transparency: Add subtle background to prevent floating appearance in light mode

---

## Visual Adjustments Per Mode

### Typography Contrast (Light Mode)
- Slightly increase body text weight: 400 → 450
- Reduce heading weight for optical balance: 700 → 600 for some headers

### Shadow System (Light Mode)
**Card Shadows:**
```
Light Mode: 0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)
Dark Mode: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)
```

### Border Adjustments
- Light mode borders: More visible (1px solid rgba(0,0,0,0.08))
- Dark mode borders: Subtle glow effect maintained

---

## User Experience Note

The theme toggle should feel like a **premium feature**, not an afterthought. The transition should be smooth enough that users enjoy switching between modes to see the design system adapt. Both modes should feel equally polished—not "dark mode as an add-on" but as two perfectly balanced expressions of the same design language.