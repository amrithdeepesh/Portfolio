---
name: Obsidian Pipeline
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2eb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e0e2eb'
  inverse-on-surface: '#2d3037'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#aec6ff'
  on-secondary: '#002e6b'
  secondary-container: '#508eff'
  on-secondary-container: '#00275e'
  tertiary: '#faf3ff'
  on-tertiary: '#3c0091'
  tertiary-container: '#e1d2ff'
  on-tertiary-container: '#6d3bd7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#aec6ff'
  on-secondary-fixed: '#001a43'
  on-secondary-fixed-variant: '#004397'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#10131a'
  on-background: '#e0e2eb'
  surface-variant: '#32353c'
typography:
  headline-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  stat-counter:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-impact, cinematic portfolio tailored for modern data engineering and distributed systems architecture. It captures the precision of mission-critical data pipelines and the sophistication of deep-tech computing.

The aesthetic fuses **Cinematic Minimalism** with **Cybernetic Precision**:
- **Tone:** Authoritative, high-performance, calculated, and immersive.
- **Target Audience:** Engineering directors, quantitative recruiters, distributed systems leads, and technical founders.
- **Visual Direction:** Layered dark canvas foundations (carbon to deep obsidian), energized by luminous cyan logic vectors and controlled ultraviolet pulses. Structural elements utilize subtle hairline borders (1px), subdued ambient lighting, and frosted telemetry panels to evoke an advanced observability dashboard rather than a standard personal resume.

## Colors

The palette operates in strict dark mode, built around infinite depths punctuated by electric logic signals:

- **Canvas & Dark Surfaces:**
  - `Canvas / Deep Obsidian`: `#05070A` (base view level)
  - `Surface / Midnight Carbon`: `#080B11` (primary content background)
  - `Surface / Elevated Glass`: `#0F1724` with variable alpha (cards, overlays, floating monitors)
  - `Surface / Interactive Hover`: `#172338`
- **Signal & Neon Hierarchy:**
  - `Primary / Electric Cyan` (`#00F0FF`): Active data streams, high-priority CTAs, primary execution indicators.
  - `Secondary / Signal Blue` (`#0070F3`): System connections, link anchors, pipeline node transitions.
  - `Tertiary / Cyber Violet` (`#8B5CF6`): Secondary tags, schema signatures, cluster metadata.
  - `Accent / Pulsar Magenta` (`#7928CA`): Rare callouts, benchmark peaks, and dynamic gradient endpoints.
- **Data & Text Contrast:**
  - `Text Primary`: `#F1F5F9` (96% contrast on dark base)
  - `Text Secondary`: `#94A3B8` (metadata, descriptions, labels)
  - `Text Code Muted`: `#64748B` (comments, structural syntax tokens)
  - `Border / Glow Accent`: `rgba(0, 240, 255, 0.2)`
  - `Border / Subdued Glass`: `rgba(255, 255, 255, 0.08)`

## Typography

Typography establishes an intentional contrast between technological engineering discipline and human-readable interfaces:

- **Headings (Space Grotesk):** Geometric proportions with sculpted ink traps give headlines a distinct architectural presence. Kerning should remain slightly tightened (`-0.02em` to `-0.04em`) to maintain density.
- **Body Copy (Plus Jakarta Sans):** Chosen for optimal legibility at micro and standard sizes against high-contrast, dark glass backgrounds.
- **Telemetry, Code & Metrics (JetBrains Mono):** Reserved for pipeline specs, database execution metrics, DAG statuses, and code snippets. All caps labels (`label-caps`) enforce telemetry styling using positive letter tracking.

## Layout & Spacing

The layout operates on a disciplined 12-column responsive fluid grid with strict mathematical cadence:

- **Grid Architecture:**
  - **Desktop (≥ 1200px):** 12 columns, max container width of `1280px`, `1.5rem` gutters, and `3rem` canvas margins.
  - **Tablet (768px - 1199px):** 8 columns, `1.5rem` gutters, and `2rem` canvas margins.
  - **Mobile (< 768px):** 4 columns, `1rem` gutters, and `1.25rem` outer canvas margins.
- **Vertical Cadence & Sectioning:**
  - Major portfolio sections (e.g., Architecture Showcase, Benchmarks, Interactive Terminal) utilize `5rem` to `7rem` vertical separation to let luminous components breathe against the midnight canvas.
  - Component internals strictly adhere to 4px/8px incremental tokens (`space-xs` through `space-xl`).
- **Data Flow Containers:** Complex schemas (DAG visualizations, database pipelines) break into full container widths with horizontal panning support enabled for small viewports.

## Elevation & Depth

Visual hierarchy uses translucent atmospheric strata, optical edge-refractions, and backplane glows:

- **Layer 0 (Background Horizon):** Pure `#05070A` overlaid with a faint geometric blueprint grid (`1px` lines spaced `40px` apart, color `rgba(255, 255, 255, 0.02)`).
- **Layer 1 (Sub-surface Panels):** Background `#080B11` with `border: 1px solid rgba(255, 255, 255, 0.05)`.
- **Layer 2 (Glassmorphic Interface Cards):**
  - Background: `rgba(15, 23, 36, 0.65)`.
  - Backdrop Filter: `blur(16px) saturate(180%)`.
  - Edge Outline: `1px solid rgba(255, 255, 255, 0.09)`.
  - Shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.6)`.
- **Layer 3 (Neon Active State & Hover):**
  - Edge Glow: `1px solid rgba(0, 240, 255, 0.5)`.
  - Ambient Shadow: `0 0 24px -4px rgba(0, 240, 255, 0.25), 0 16px 40px -8px rgba(0, 0, 0, 0.8)`.
- **Layer 4 (Modals & Command Palettes):**
  - Background: `rgba(10, 14, 23, 0.92)`.
  - Backdrop Filter: `blur(24px)`.
  - Top border linear highlight: `1px solid linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)`.

## Shapes

The design embraces technical, angular precision via **Soft (Level 1)** rounding:
- Base interactive elements (buttons, inputs, metric tiles) use `0.25rem` (4px).
- Surface containers and data cards use `rounded-lg` (`0.5rem` / 8px).
- Floating terminal modals and code playgrounds use `rounded-xl` (`0.75rem` / 12px).
- Pipeline node dots, status pulses, and icon container badges may apply complete spherical border radii (`9999px`) where circular geometry represents network nodes or state indicators.

## Components

### Buttons
- **Primary Cyber Button:**
  - Base: High-contrast Electric Cyan background (`#00F0FF`), dark slate text (`#05070A`), `font-weight: 600`, `roundedness: 4px`.
  - Shadow: `0 0 18px rgba(0, 240, 255, 0.35)`.
  - Hover: Background escalates to pure white (`#FFFFFF`), shadow intensifies to `0 0 28px rgba(0, 240, 255, 0.6)`.
- **Secondary Ghost Terminal Button:**
  - Base: `rgba(15, 23, 36, 0.6)`, 1px border `rgba(255, 255, 255, 0.12)`, text `#F1F5F9`.
  - Hover: Border color snaps to `#0070F3`, text turns `#00F0FF`, background fills to `rgba(0, 112, 243, 0.1)`.

### Architecture & Pipeline Cards
- Enclosed with the Layer 2 glassmorphic style.
- Includes a top right monospaced badge showing ingestion latency or cluster runtimes.
- Hover reveals a localized 1px moving gradient border tracing the perimeter and a subtle cyan ambient backplane glow.

### Interactive Telemetry & Chips
- **Pipeline Status Badges:** Monospace text in all-caps (`label-caps`).
  - Active: Text `#00F0FF`, background `rgba(0, 240, 255, 0.08)`, 1px border `rgba(0, 240, 255, 0.25)`. A 6px circular dot pulses on the left edge.
  - Processing: Text `#8B5CF6`, background `rgba(139, 92, 246, 0.08)`, border `rgba(139, 92, 246, 0.25)`.
- **Tech Stack Chips:** Crisp 4px radius pill, dark carbon background, subtle border, accompanied by monochrome vector icons (e.g., Apache Spark, Kafka, Snowflake, Rust, DBT, Kubernetes).

### Code & Execution Terminal
- Header contains simulated traffic lights styled as minimal circular indicators (carbon, slate, cyan).
- Background: Deep Obsidian `#05070A`.
- Left-aligned line numbers in `#64748B`.
- Integrated copy action with instant feedback (`[COPIED]` in `#00F0FF`).

### Metrics & Benchmark Panels
- Composed of large JetBrains Mono stat digits (`stat-counter`) in neon gradients (cyan to signal blue).
- Paired with micro data labels (`label-caps`) displaying throughput metrics (e.g., `1.2M EPS`, `p99 < 12ms`, `TB/day`).