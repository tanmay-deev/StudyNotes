import { TopicNote } from "./types";

export const physicsNotes: TopicNote[] = [
  {
    slug: "laws-of-motion-and-friction",
    subject: "physics",
    classLevel: "Class 11",
    eyebrow: "CLASSICAL MECHANICS STUDY GUIDE",
    title: "Laws of Motion, Free-Body Diagrams, and Friction",
    summary:
      "Newton's three laws, impulse-momentum theorem, static vs. kinetic friction, banking of roads, and systematic free-body problem solving.",
    sections: [
      {
        heading: "1. Introduction: Force, Inertia, and Newton's Three Laws",
        blocks: [
          {
            type: "paragraph",
            html: "Dynamics connects the motion of bodies to the forces that cause changes in velocity. Sir Isaac Newton summarized classical mechanics in three universal laws valid in inertial reference frames:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "First Law (Law of Inertia):",
                html: "Every body continues in its state of rest or uniform motion in a straight line unless acted upon by a net external unbalanced force.",
              },
              {
                label: "Second Law (Law of Momentum):",
                html: "The rate of change of linear momentum of a body is directly proportional to the net external force and takes place in the direction of that force.",
              },
              {
                label: "Third Law (Action–Reaction):",
                html: "To every action there is an equal and opposite reaction; action and reaction forces always act on <em>two different bodies</em>.",
              },
            ],
          },
          {
            type: "formula",
            html: "F<sub>net</sub> = dp / dt = m · a &nbsp;&nbsp;|&nbsp;&nbsp; Impulse J = F<sub>avg</sub> Δt = Δp",
          },
        ],
      },
      {
        heading: "2. Free-Body Diagram (FBD) Method",
        blocks: [
          {
            type: "paragraph",
            html: "To solve multi-body pulley, wedge, or block problems without error, isolate each object and draw all external forces acting <em>on</em> it:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Step 1 — Identify Forces:",
                html: "Weight (mg downward), Normal reaction (N perpendicular to contact surface), Tension (T pulling along a taut string), and Friction (f parallel to surface opposing relative motion or tendency).",
              },
              {
                label: "Step 2 — Choose Axes:",
                html: "Align one axis along the direction of acceleration (e.g., parallel and perpendicular to an inclined plane of angle θ, where weight resolves into mg sin θ and mg cos θ).",
              },
              {
                label: "Step 3 — Write Equations:",
                html: "Apply ΣF<sub>x</sub> = m a<sub>x</sub> and ΣF<sub>y</sub> = m a<sub>y</sub> for each mass independently.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Friction and Circular Motion on Banked Roads",
        blocks: [
          {
            type: "paragraph",
            html: "Friction arises from microscopic interlocking and electromagnetic adhesion between surfaces in contact. Distinguish carefully between self-adjusting static friction and constant kinetic friction:",
          },
          {
            type: "table",
            headers: ["Type of Friction", "Formula", "Key Behavior"],
            rows: [
              [
                "<strong>Static Friction (f<sub>s</sub>)</strong>",
                "0 ≤ f<sub>s</sub> ≤ μ<sub>s</sub> N",
                "Self-adjusting; matches applied parallel force until impending slip",
              ],
              [
                "<strong>Limiting Friction (f<sub>L</sub>)</strong>",
                "f<sub>L</sub> = μ<sub>s</sub> N",
                "Maximum static friction just before motion starts; tan θ<sub>repose</sub> = μ<sub>s</sub>",
              ],
              [
                "<strong>Kinetic Friction (f<sub>k</sub>)</strong>",
                "f<sub>k</sub> = μ<sub>k</sub> N",
                "Acts during relative sliding; generally μ<sub>k</sub> < μ<sub>s</sub>",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Maximum Safe Speed on a Banked Curve",
          },
          {
            type: "paragraph",
            html: "On a road of radius R banked at angle θ with coefficient of static friction μ<sub>s</sub>, the optimum frictionless speed and maximum safe speed are:",
          },
          {
            type: "formula",
            html: "v<sub>opt</sub> = √(R g tan θ) &nbsp;&nbsp;|&nbsp;&nbsp; v<sub>max</sub> = √[ R g (μ<sub>s</sub> + tan θ) / (1 − μ<sub>s</sub> tan θ) ]",
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Never assume static friction equals μ<sub>s</sub>N automatically! First check if the required force to prevent slipping is less than μ<sub>s</sub>N; if so, f<sub>s</sub> equals only the required force.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Careful free-body isolation combined with accurate static/kinetic friction checks turns every mechanics problem—from connected pulleys to banked highways—into straightforward algebraic equations.",
          },
        ],
      },
    ],
  },
  {
    slug: "thermodynamics-laws-and-heat-engines",
    subject: "physics",
    classLevel: "Class 11",
    eyebrow: "THERMAL PHYSICS STUDY GUIDE",
    title: "Thermodynamics: Laws, Processes, and Carnot Engines",
    summary:
      "Zeroth, First, and Second laws of thermodynamics, isothermal vs. adiabatic processes, Mayer's relation, and Carnot efficiency.",
    sections: [
      {
        heading: "1. Introduction: State Variables and First Law",
        blocks: [
          {
            type: "paragraph",
            html: "Thermodynamics studies the macroscopic exchange of heat and work between a system and its surroundings. Internal energy (U) is a state function that depends solely on temperature for an ideal gas, whereas heat (ΔQ) and work (ΔW) are path-dependent quantities.",
          },
          {
            type: "formula",
            html: "ΔQ = ΔU + ΔW &nbsp;&nbsp;where&nbsp;&nbsp; ΔW = ∫ P dV &nbsp;&nbsp;and&nbsp;&nbsp; ΔU = n C<sub>v</sub> ΔT",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Zeroth Law:",
                html: "If two systems are separately in thermal equilibrium with a third system, they are in thermal equilibrium with each other—defining the concept of <strong>temperature</strong>.",
              },
              {
                label: "Mayer's Relation:",
                html: "For an ideal gas, molar specific heat at constant pressure exceeds that at constant volume by the universal gas constant: <strong>C<sub>p</sub> − C<sub>v</sub> = R</strong>, with adiabatic index γ = C<sub>p</sub> / C<sub>v</sub>.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Comparison of Thermodynamic Processes (Ideal Gas)",
        blocks: [
          {
            type: "table",
            headers: ["Process", "Constant Quantity", "Equation / Relation", "Work Done (ΔW)"],
            rows: [
              [
                "<strong>Isochoric</strong>",
                "Volume (ΔV = 0)",
                "P / T = constant",
                "0 (all heat changes ΔU)",
              ],
              [
                "<strong>Isobaric</strong>",
                "Pressure (ΔP = 0)",
                "V / T = constant",
                "P (V<sub>2</sub> − V<sub>1</sub>) = n R ΔT",
              ],
              [
                "<strong>Isothermal</strong>",
                "Temperature (ΔT = 0)",
                "P V = constant",
                "n R T ln(V<sub>2</sub> / V<sub>1</sub>)",
              ],
              [
                "<strong>Adiabatic</strong>",
                "No heat flow (ΔQ = 0)",
                "P V<sup>γ</sup> = constant",
                "(P<sub>1</sub>V<sub>1</sub> − P<sub>2</sub>V<sub>2</sub>) / (γ − 1)",
              ],
            ],
          },
          {
            type: "paragraph",
            html: "On a P–V indicator diagram, the adiabatic curve is steeper than the isothermal curve at the same point by a factor of γ, because (dP/dV)<sub>adiabatic</sub> = −γ(P/V) whereas (dP/dV)<sub>isothermal</sub> = −(P/V).",
          },
        ],
      },
      {
        heading: "3. Second Law and the Carnot Heat Engine",
        blocks: [
          {
            type: "paragraph",
            html: "The Second Law states that no cyclic heat engine can convert 100% of absorbed heat into mechanical work (Kelvin–Planck statement), and heat cannot spontaneously flow from a colder body to a hotter body without external work (Clausius statement).",
          },
          {
            type: "formula",
            html: "η<sub>Carnot</sub> = 1 − (T<sub>sink</sub> / T<sub>source</sub>) &nbsp;&nbsp;(temperatures in Kelvin)",
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Always convert temperatures to <strong>Kelvin (K = °C + 273.15)</strong> before computing Carnot efficiency or refrigerator COP = T<sub>2</sub> / (T<sub>1</sub> − T<sub>2</sub>). No real engine operating between T<sub>1</sub> and T<sub>2</sub> can exceed η<sub>Carnot</sub>.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Thermodynamic laws govern both energy conservation (First Law) and directional efficiency limits (Second Law), establishing fundamental constraints on every engine, power plant, and refrigeration cycle.",
          },
        ],
      },
    ],
  },
  {
    slug: "electrostatics-gauss-law-and-electric-potential",
    subject: "physics",
    classLevel: "Class 12",
    eyebrow: "ELECTROMAGNETISM STUDY GUIDE",
    title: "Electrostatics: Gauss's Law and Electric Potential",
    summary:
      "Coulomb's law, electric field & flux, symmetric applications of Gauss's law, equipotential surfaces, and parallel-plate capacitors.",
    sections: [
      {
        heading: "1. Introduction: Coulomb's Law and Electric Field",
        blocks: [
          {
            type: "paragraph",
            html: "Electrostatics analyzes stationary electric charges and the fields they establish in space. Between two point charges q<sub>1</sub> and q<sub>2</sub> separated by distance r in vacuum, Coulomb's inverse-square force and the resulting electric field E are:",
          },
          {
            type: "formula",
            html: "F = (1 / 4πε<sub>0</sub>) · (q<sub>1</sub> q<sub>2</sub> / r<sup>2</sup>) &nbsp;&nbsp;|&nbsp;&nbsp; E = F / q<sub>0</sub>",
          },
          {
            type: "paragraph",
            html: "Here 1 / (4πε<sub>0</sub>) ≈ 9 × 10<sup>9</sup> N·m<sup>2</sup>/C<sup>2</sup>. Electric field lines originate on positive charges, terminate on negative charges, never intersect, and are always perpendicular to the surface of a conductor in electrostatic equilibrium.",
          },
        ],
      },
      {
        heading: "2. Gauss's Law and Symmetric Field Formulas",
        blocks: [
          {
            type: "paragraph",
            html: "Gauss's Law states that the net electric flux Φ<sub>E</sub> passing through any closed Gaussian surface equals the total charge enclosed (q<sub>enc</sub>) divided by the permittivity of free space ε<sub>0</sub>:",
          },
          {
            type: "formula",
            html: "Φ<sub>E</sub> = ∮ E · dA = q<sub>enc</sub> / ε<sub>0</sub>",
          },
          {
            type: "table",
            headers: ["Charge Distribution", "Gaussian Surface", "Electric Field Magnitude (E)"],
            rows: [
              [
                "Infinite line charge (linear density λ)",
                "Coaxial cylinder of radius r",
                "E = λ / (2π ε<sub>0</sub> r)",
              ],
              [
                "Infinite plane sheet (surface density σ)",
                "Gaussian pillbox",
                "E = σ / (2 ε<sub>0</sub>) (independent of distance)",
              ],
              [
                "Thin spherical shell (radius R, outside r ≥ R)",
                "Concentric sphere of radius r",
                "E = (1 / 4πε<sub>0</sub>) · (Q / r<sup>2</sup>)",
              ],
              [
                "Thin spherical shell (inside r < R)",
                "Concentric sphere of radius r",
                "<strong>E = 0</strong> (since q<sub>enc</sub> = 0)",
              ],
            ],
          },
        ],
      },
      {
        heading: "3. Electric Potential, Dipoles, and Capacitance",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                label: "Potential vs. Field:",
                html: "Electric potential V is the work done per unit positive test charge brought slowly from infinity. It relates to field by <strong>E = −dV / dr</strong> (field always points toward decreasing potential).",
              },
              {
                label: "Equipotential Surfaces:",
                html: "Surfaces of constant potential require zero work to move a charge along them and are strictly orthogonal to electric field lines.",
              },
              {
                label: "Parallel-Plate Capacitor:",
                html: "With plate area A, separation d, and dielectric constant K, capacitance is <strong>C = K ε<sub>0</sub> A / d</strong>, and stored electrostatic energy is <strong>U = ½ C V<sup>2</sup> = Q<sup>2</sup> / (2C)</strong>.",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Inside any electrostatic conductor, <strong>E = 0</strong> and <strong>V = constant</strong> throughout the volume and surface. When inserting a dielectric slab, check whether the battery stays connected (V constant, Q increases) or disconnected (Q constant, V decreases).",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Gauss's law simplifies highly symmetric field problems in seconds, while electric potential provides a scalar energy framework that makes circuit and capacitor analysis effortless.",
          },
        ],
      },
    ],
  },
  {
    slug: "wave-optics-interference-and-diffraction",
    subject: "physics",
    classLevel: "Class 12",
    eyebrow: "OPTICS STUDY GUIDE",
    title: "Wave Optics: Interference, Diffraction, and Polarization",
    summary:
      "Huygens' principle, coherent sources, Young's Double-Slit Experiment (YDSE), single-slit diffraction minima, and Malus's & Brewster's laws.",
    sections: [
      {
        heading: "1. Introduction: Wavefronts and Huygens' Principle",
        blocks: [
          {
            type: "paragraph",
            html: "When light encounters apertures or obstacles comparable in size to its wavelength (λ ≈ 400–700 nm), ray optics breaks down and wave behavior dominates. Huygens' principle models every point on a primary wavefront as a source of secondary spherical wavelets whose forward envelope defines the new wavefront.",
          },
        ],
      },
      {
        heading: "2. Young's Double-Slit Experiment (YDSE)",
        blocks: [
          {
            type: "paragraph",
            html: "Two coherent monochromatic slits separated by distance d illuminate a screen at distance D (D ≫ d). Superposition of waves with phase difference φ = (2π/λ) Δx produces alternating bright and dark fringes of equal width β:",
          },
          {
            type: "formula",
            html: "I = I<sub>1</sub> + I<sub>2</sub> + 2√(I<sub>1</sub> I<sub>2</sub>) cos φ &nbsp;&nbsp;|&nbsp;&nbsp; Fringe Width β = λ D / d",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Constructive Interference (Bright Fringes):",
                html: "Path difference Δx = n λ (n = 0, ±1, ±2, ...); for equal intensities I<sub>0</sub>, I<sub>max</sub> = 4 I<sub>0</sub>.",
              },
              {
                label: "Destructive Interference (Dark Fringes):",
                html: "Path difference Δx = (n − ½) λ (n = 1, 2, ...); for equal intensities I<sub>0</sub>, I<sub>min</sub> = 0.",
              },
              {
                label: "Medium Effect:",
                html: "Immersing the apparatus in a liquid of refractive index μ shrinks wavelength to λ/μ, reducing fringe width to <strong>β' = β / μ</strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Single-Slit Diffraction vs. Double-Slit Interference",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Double-Slit Interference (YDSE)", "Single-Slit Diffraction (width a)"],
            rows: [
              [
                "Condition for Minima",
                "d sin θ = (n − ½) λ",
                "<strong>a sin θ = n λ</strong> (n = ±1, ±2, ...)",
              ],
              [
                "Central Maximum Width",
                "β = λ D / d (same as all fringes)",
                "<strong>2 λ D / a</strong> (twice the width of secondary maxima)",
              ],
              [
                "Intensity Distribution",
                "All bright fringes have equal intensity",
                "Intensity drops rapidly away from the central maximum",
              ],
            ],
          },
          {
            type: "subheading",
            text: "Polarization of Transverse Light Waves",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Malus's Law:",
                html: "When plane-polarized light of intensity I<sub>0</sub> passes through an analyzer rotated at angle θ to the polarizer pass-axis, transmitted intensity is <strong>I = I<sub>0</sub> cos<sup>2</sup> θ</strong>.",
              },
              {
                label: "Brewster's Law:",
                html: "Reflected light is completely plane-polarized when the angle of incidence equals Brewster's angle i<sub>p</sub>, satisfying <strong>tan i<sub>p</sub> = μ</strong> (reflected and refracted rays are mutually perpendicular).",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Do not swap interference and diffraction formulas! In YDSE, path difference <strong>nλ gives Maxima</strong>; in single-slit diffraction, <strong>a sin θ = nλ gives Minima</strong>.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Interference, diffraction, and polarization provide direct experimental proof of both the wave nature and transverse character of electromagnetic radiation.",
          },
        ],
      },
    ],
  },
];
