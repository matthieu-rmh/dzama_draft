# Design System Document: The Amber & Charcoal Editorial

## 1. Overview & Creative North Star: "The Distilled Narrative"
This design system is built to evoke the same patience and craftsmanship found in a cellar-aged reserve. Our Creative North Star is **"The Distilled Narrative."** We are moving away from the "busy" nature of traditional e-commerce and toward a high-end editorial experience. 

The layout should feel like a premium lifestyle magazine. We break the "template" look by utilizing **intentional asymmetry**—for example, overlapping a high-resolution product shot with a floating text block—and favoring **generous white space (or "dark space")** to let products breathe. Every interaction must feel heavy, deliberate, and expensive.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in the deep, nocturnal tones of `surface` (#07151b), punctuated by the liquid warmth of `primary_container` (#ffc600).

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Traditional lines are too "clinical" for a luxury brand. Boundaries must be defined solely through background color shifts or tonal transitions.
*   *Example:* A product description section using `surface_container_low` (#0f1d24) sitting directly against a `surface` (#07151b) background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. To create depth without shadows:
*   **Base:** `surface` (#07151b)
*   **Elevated Content:** `surface_container` (#132128)
*   **Interactive Cards:** `surface_container_high` (#1e2c33)
*   **Floating Elements:** `surface_container_highest` (#29373e)

### The "Glass & Gradient" Rule
To add visual "soul," use a subtle linear gradient on primary CTAs: transitioning from `primary_fixed_dim` (#f6bf00) to `primary` (#ffe8b7) at a 45-degree angle. For floating navigation or shopping cart overlays, use **Glassmorphism**: `surface_container_highest` at 80% opacity with a `20px` backdrop-blur.

---

## 3. Typography: The Marriage of Heritage and Precision
We use a high-contrast typographic pairing to signal authority and modernity.

*   **Display & Headlines (Noto Serif):** This is our heritage voice. Use `display-lg` for hero statements and brand storytelling. The serif conveys the "aged" quality of the product.
*   **Titles & Body (Manrope):** A clean, modern sans-serif that ensures legibility in technical product specs and shopping flows. Use `body-lg` for product descriptions to maintain a premium feel.
*   **Label & Utility (Manrope):** Use `label-md` in all-caps with `0.1rem` letter spacing for price tags and category headers to create a "boutique" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, we do not "lift" objects with harsh shadows; we "layer" them with light.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_lowest` (#031016) card on a `surface_container_low` (#0f1d24) section to create a soft, natural "recessed" look.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Quick Buy" modal), use an extra-diffused shadow: `offset: 0 20px, blur: 40px, color: rgba(0, 0, 0, 0.4)`. The shadow must feel like ambient room light, never a "drop shadow."
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#4f4632) at **15% opacity**. 100% opaque borders are strictly forbidden.

---

## 5. Components

### Buttons
*   **Primary:** Background: Gradient (`primary_fixed_dim` to `primary`). Text: `on_primary` (#3e2e00). Shape: `md` (0.375rem). No border.
*   **Secondary (The "Ghost"):** Background: Transparent. Border: `outline` (#9b8f78) at 30% opacity. Text: `primary`.
*   **Tertiary:** Text-only with an underline that appears on hover, using `primary_container` (#ffc600).

### Product Grids & Cards
*   **Rule:** Forbid the use of divider lines between items.
*   **Execution:** Use `spacing-8` (2.75rem) between cards. Product images should be set against `surface_container_low` (#0f1d24) backgrounds to create a subtle "container-less" frame.

### Luxury Brand Storytelling Sections
*   Use a "Broken Grid" layout. Place a `display-md` headline overlapping a large image by `spacing-10`.
*   Use `surface_bright` (#2d3b42) for pull-quotes to break the dark monotone of the background.

### Input Fields
*   **Style:** Underline-only style using `outline_variant` (#4f4632). 
*   **Focus State:** The underline transitions to `primary` (#ffe8b7) with a subtle glow (2px blur).

---

## 6. Do's and Don'ts

### Do:
*   **Do** use `spacing-24` (8.5rem) for vertical section padding to create a "high-end gallery" feel.
*   **Do** use `secondary_container` (#0164b4) sparingly as a "cooling" accent color for specialized labels (e.g., "Limited Edition" or "Aged 20 Years").
*   **Do** ensure all product photography is desaturated or tonally adjusted to match the `surface` palette.

### Don't:
*   **Don't** use pure white (#FFFFFF) for body text; use `on_surface_variant` (#d3c5ab) to reduce eye strain and maintain the "amber" warmth.
*   **Don't** use standard `lg` or `xl` roundedness for buttons. Stick to `md` (0.375rem) to keep the look sophisticated and sharp.
*   **Don't** use dividers. If content needs separation, use a `surface-container` background shift or a `spacing-12` gap.