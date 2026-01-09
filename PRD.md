# Planning Guide

A professional chiropractic assessment tool that enables chiropractors to visually select vertebral subluxations on an anatomically accurate spine diagram and generate comprehensive care recommendations with detailed nerve function correlations.

**Experience Qualities**: 
1. **Clinical Precision** - The interface should convey medical accuracy and professionalism, instilling confidence in practitioners through anatomically correct representations and scientifically-backed nerve function data.
2. **Intuitive Efficiency** - Chiropractors should be able to quickly document patient conditions through direct visual selection, minimizing administrative overhead while maximizing assessment accuracy.
3. **Educational Clarity** - The tool should serve as both a documentation system and an educational resource, clearly communicating the relationship between spinal subluxations, nerve functions, and patient symptoms.

**Complexity Level**: **Light Application (multiple features with basic state)**
This application requires interactive selection, dynamic data display, and form management, but remains focused on a single workflow - from assessment to care plan generation. The state management is straightforward with selected vertebrae and care plan details.

## Essential Features

### Interactive Spine Diagram
- **Functionality**: Anatomically accurate SVG representation of the entire spine (C1-C7, T1-T12, L1-L5, Sacrum, Coccyx) where each vertebra is a clickable element with realistic bone structure including vertebral body, transverse processes, and spinal canal
- **Purpose**: Enable rapid, intuitive documentation of subluxation locations through direct visual selection with anatomical accuracy that mirrors actual spinal structure
- **Trigger**: Chiropractor clicks/taps on any vertebra in the spine diagram
- **Progression**: Click vertebra → Vertebra highlights in red with gradient → Selection stored in assessment → Vertebra can be clicked again to deselect
- **Success criteria**: Each vertebra can be independently selected/deselected, visual feedback is immediate, multiple vertebrae can be selected simultaneously, vertebrae show anatomically correct sizing (cervical smallest, lumbar largest) and proper spinal curvature (cervical lordosis, thoracic kyphosis, lumbar lordosis)

### Subluxation Summary Report
- **Functionality**: Dynamic report displaying all selected vertebrae with corresponding nerve functions and potential symptoms
- **Purpose**: Provide comprehensive clinical documentation and patient education material
- **Trigger**: Automatically updates as vertebrae are selected/deselected
- **Progression**: Vertebra selected → Report section appears → Displays vertebra label (e.g., "C1") → Lists associated nerve functions → Lists potential symptoms
- **Success criteria**: Report updates in real-time, information is anatomically accurate, data is clearly organized by vertebra level

### Three-Stage Care Plan Generator
- **Functionality**: Form allowing chiropractors to create structured treatment plans with three distinct phases
- **Purpose**: Standardize care recommendations and set clear patient expectations
- **Trigger**: Chiropractor completes subluxation assessment and proceeds to care planning
- **Progression**: Navigate to care plan section → For each stage (Initial, Corrective, Wellness): Select frequency (sessions per week) → Select duration (weeks or months) → Review complete care plan
- **Success criteria**: All three stages can be configured independently, dropdown selections are clinically relevant, care plan is stored with assessment

### Assessment Persistence
- **Functionality**: Save and retrieve patient assessments including selected vertebrae and care plans
- **Purpose**: Maintain patient records across sessions and enable progress tracking
- **Trigger**: Assessment data is automatically saved as changes are made
- **Progression**: Chiropractor makes selections → Data persists to storage → On return visit, previous assessment can be loaded
- **Success criteria**: Data persists between sessions, no data loss occurs, retrieval is seamless

## Edge Case Handling

- **No Subluxations Selected**: Display helpful prompt encouraging practitioner to select affected vertebrae before viewing report
- **Incomplete Care Plan**: Allow saving partial care plans, highlight incomplete stages visually
- **Clear All Selections**: Provide easy reset button to start new assessment without page reload
- **Mobile/Touch Input**: Ensure vertebrae are large enough for precise touch selection (minimum 44px touch targets)
- **Invalid Frequency Combinations**: Validate that frequency/duration combinations are clinically reasonable

## Design Direction

The design should evoke **clinical professionalism with modern accessibility** - think medical software that feels refined, trustworthy, and efficient. The aesthetic should bridge the gap between clinical precision and user-friendly design, avoiding sterile hospital software while maintaining appropriate medical gravitas. Color choices should support anatomical accuracy (realistic bone tones for unselected state, clear red for subluxations) while the overall interface feels contemporary and purposeful.

## Color Selection

The color scheme emphasizes **medical trust with anatomical realism** - professional enough for clinical use while remaining inviting and modern, with realistic bone gradients for authenticity.

- **Primary Color**: Deep Teal `oklch(0.45 0.12 210)` - Conveys medical professionalism and trustworthiness, used for primary actions and key interface elements
- **Secondary Colors**: 
  - Bone Beige Gradient - Natural vertebra color in unselected state using realistic bone tones from `oklch(0.92 0.02 70)` to `oklch(0.85 0.025 65)` creating dimensional depth
  - Clinical Gray `oklch(0.96 0.005 240)` - Background panels and secondary surfaces
- **Accent Color**: Vibrant Orange `oklch(0.68 0.18 45)` - Attention-grabbing highlight for CTAs and important interactive elements like "Generate Care Plan"
- **Subluxation Red Gradient**: From `oklch(0.60 0.22 25)` to `oklch(0.50 0.22 25)` - Clear, medically-appropriate red gradient for selected vertebrae indicating subluxation with dimensional appearance
- **Foreground/Background Pairings**: 
  - Primary Teal `oklch(0.45 0.12 210)`: White text `oklch(1 0 0)` - Ratio 7.2:1 ✓
  - Accent Orange `oklch(0.68 0.18 45)`: White text `oklch(1 0 0)` - Ratio 5.1:1 ✓
  - Background `oklch(0.98 0.002 240)`: Foreground `oklch(0.2 0.015 240)` - Ratio 14.8:1 ✓
  - Subluxation Red `oklch(0.55 0.22 25)`: White text `oklch(1 0 0)` - Ratio 4.9:1 ✓

## Font Selection

Typography should balance **medical authority with modern readability** - professional enough for clinical documentation while remaining highly legible across all device sizes.

- **Primary Font**: **Inter** for UI elements and body text - highly legible, professional, with excellent number rendering for clinical data
- **Display Font**: **Bricolage Grotesque** for headings - distinctive character that adds personality while maintaining professionalism

- **Typographic Hierarchy**: 
  - H1 (App Title): Bricolage Grotesque Bold/32px/tight letter spacing/-0.02em
  - H2 (Section Headers): Bricolage Grotesque SemiBold/24px/normal/leading-tight
  - H3 (Subsection Headers): Inter SemiBold/18px/normal/leading-snug
  - Body (Clinical Text): Inter Regular/16px/normal/leading-relaxed (1.6)
  - Small (Labels): Inter Medium/14px/normal/tracking-tight
  - Vertebra Labels: Inter Bold/14px/uppercase/tracking-wide

## Animations

Animations should **enhance clinical workflow efficiency** while providing satisfying visual feedback. Keep transitions purposeful and quick to maintain professional pace.

- **Vertebra Selection**: Smooth color transition to red gradient with subtle glow effect on selection
- **Vertebra Hover**: 150ms scale animation (1.0 → 1.05) with enhanced drop shadow for depth
- **Report Updates**: 200ms fade-in for new report sections appearing when vertebrae are selected
- **Care Plan Accordion**: 300ms smooth expansion/collapse for stage details
- **Button Interactions**: 100ms color/shadow transition on hover, 80ms scale-down (0.98) on press for tactile feedback
- **Page Transitions**: 250ms slide-fade between assessment and care plan views
- **Success Confirmations**: Gentle 300ms bounce animation when care plan is saved

## Component Selection

- **Components**: 
  - **Card** - Primary container for spine diagram, summary report, and care plan sections with subtle shadow elevation
  - **Button** - Primary actions (Generate Care Plan, Save Assessment, Clear Selections) with variant states
  - **Badge** - Vertebra labels and status indicators with rounded styling
  - **Select** - Frequency and duration dropdowns with clear option hierarchy
  - **ScrollArea** - Summary report that may contain many vertebrae selections
  - **Separator** - Visual division between vertebrae sections in report
  - **Accordion** - Three-stage care plan with expandable sections for each phase
  - **Tabs** - Switch between Assessment View and Care Plan View
  - **Alert** - Success/info messages for saved assessments
  
- **Customizations**: 
  - **Custom SVG Spine Component** - Anatomically accurate vertebrae rendered as SVG paths with realistic bone structure including vertebral body, transverse processes, and spinal canal; proper anatomical sizing (cervical 85-100px, thoracic 105-125px, lumbar 110-130px); natural spinal curvature with horizontal offsets simulating cervical lordosis, thoracic kyphosis, and lumbar lordosis; sacrum and coccyx with specialized triangular/tapered shapes
  - **Custom CareStageForm** - Reusable component for each treatment stage with frequency/duration inputs
  
- **States**: 
  - Buttons: Default (teal), Hover (darker teal + shadow), Active (pressed), Disabled (muted)
  - Vertebrae: Default (bone beige gradient with anatomical depth), Hover (scale 1.05 + enhanced shadow), Selected (red gradient with darker stroke), maintain realistic 3D appearance through gradients and shadows
  - Selects: Closed, Open (dropdown visible), Focus (ring), Selected option highlighted
  
- **Icon Selection**: 
  - **First Aid** (medical cross) - Overall app icon/branding
  - **Pulse** - Active assessment indicator
  - **List Checks** - Care plan generation
  - **X Circle** - Clear selections
  - **Check Circle** - Completed stages
  - **Calendar** - Duration selection context
  - **Activity** - Frequency selection context
  
- **Spacing**: 
  - Container padding: `p-6` (24px) for cards on desktop, `p-4` (16px) on mobile
  - Section gaps: `gap-8` (32px) between major sections
  - Form element gaps: `gap-4` (16px) between related inputs
  - Inline spacing: `gap-2` (8px) for label-to-input, `gap-1` (4px) for tight groupings
  
- **Mobile**: 
  - SVG spine diagram scales proportionally maintaining anatomical accuracy, responsive viewBox ensures proper rendering on all screen sizes
  - Summary report becomes fixed-height scrollable area on mobile to preserve viewport
  - Care plan stages always render vertically stacked
  - Tabs become full-width on mobile
  - Touch targets maintained through proper SVG hit areas and hover zones
  - Reduce padding from `p-6` to `p-4` on containers
