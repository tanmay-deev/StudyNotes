import { TopicNote } from "./types";

export const chemistryNotes: TopicNote[] = [
  {
    slug: "magnetic-nature-and-electronic-structure",
    subject: "chemistry",
    classLevel: "Class 11",
    eyebrow: "INORGANIC CHEMISTRY STUDY GUIDE",
    title: "Magnetic Nature and Electronic Structure of Chemical Species",
    summary:
      "Paramagnetism, diamagnetism, Hund's rule, the three-case framework for atoms, covalent molecules, and ionic salts, spin-only magnetic moment, and MO bond order.",
    pdfPath: "/pdfs/mag-nature-and-electronic-structure.pdf",
    pdfTitle: "Magnetic Nature and Electronic Structure of Chemical Species (Original PDF)",
    sections: [
      {
        heading: "1. Introduction: Origin of Magnetism in Matter",
        blocks: [
          {
            type: "paragraph",
            html: "Every electron within an atom or molecule behaves like a microscopic bar magnet because of its intrinsic spin angular momentum and orbital motion. When an external magnetic field is applied to a chemical substance, the net response of all its electrons determines how the substance interacts with that field.",
          },
          {
            type: "paragraph",
            html: "Chemical species fall into two primary magnetic categories based on electron pairing:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Paramagnetic Species:",
                html: "Substances containing one or more unpaired electrons. Their individual magnetic dipoles align with an applied magnetic field, producing a weak net attraction into the field.",
              },
              {
                label: "Diamagnetic Species:",
                html: "Substances in which every electron is spin-paired. Opposite spins cancel each other's permanent magnetic moments, causing the substance to experience a slight repulsion from an external magnetic field.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Related Foundation: Electron Spin, Orbital Filling, and Hund's Rule",
        blocks: [
          {
            type: "paragraph",
            html: "Before evaluating complex molecules or solid salts, one must understand how electrons occupy atomic subshells. Three fundamental principles govern ground-state electron arrangements in isolated atoms and monatomic ions:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Aufbau Principle:",
                html: "Electrons fill available atomic orbitals in order of increasing energy, starting from the lowest-energy shell (1s, 2s, 2p, 3s, 3p, 4s, 3d, and onward).",
              },
              {
                label: "Pauli Exclusion Principle:",
                html: "A single atomic orbital can hold at most two electrons, and those two electrons must have opposite spins (+1/2 and −1/2).",
              },
              {
                label: "Hund's Rule of Maximum Multiplicity:",
                html: "Within degenerate orbitals of the same subshell (such as the three 2p orbitals or five 3d orbitals), electrons occupy separate orbitals with parallel spins before any pairing occurs.",
              },
            ],
          },
          {
            type: "paragraph",
            html: "In transition metals, removing electrons to form cations always takes electrons from the outermost valence shell (such as 4s) before removing electrons from the inner (n − 1)d subshell. Applying this removal order accurately is essential for determining unpaired electron counts in metal ions.",
          },
        ],
      },
      {
        heading: "3. Three-Case Framework for Determining Magnetic Nature",
        blocks: [
          {
            type: "paragraph",
            html: "To determine whether any chemical species is paramagnetic or diamagnetic quickly and systematically, classify the substance into one of three cases based on its structure and apply the corresponding rule:",
          },
          {
            type: "subheading",
            text: "Case I: Single Atom or Single Ion (Electronic Configuration Method)",
          },
          {
            type: "paragraph",
            html: "Write down the ground-state electronic configuration (E.C.) of the isolated atom or monatomic ion and check the electron pairing in its orbitals:",
          },
          {
            type: "bullets",
            items: [
              {
                html: "<strong>Unpaired Electron(s) Present → Paramagnetic (Para)</strong>",
              },
              {
                html: "<strong>All Electrons Paired (Zero Unpaired) → Diamagnetic (Dia)</strong>",
              },
              {
                label: "Worked Examples:",
                html: "",
                subItems: [
                  {
                    html: "<strong>Zn<sup>2+</sup> (Z = 30):</strong> 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>10</sup> → All electrons paired → <strong>Dia</strong>",
                  },
                  {
                    html: "<strong>Mn<sup>2+</sup> (Z = 25):</strong> [Ar] 3d<sup>5</sup> → 5 unpaired electrons → <strong>Para</strong>",
                  },
                  {
                    html: "<strong>Br<sup>−</sup> (Z = 35):</strong> [Ar] 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> → All electrons paired → <strong>Dia</strong>",
                  },
                  {
                    html: "<strong>Cr<sup>3+</sup> (Z = 24):</strong> [Ar] 3d<sup>3</sup> → 3 unpaired electrons → <strong>Para</strong>",
                  },
                ],
              },
            ],
          },
          {
            type: "subheading",
            text: "Case II: Covalent Molecules (Odd / Even Electron Count Method)",
          },
          {
            type: "paragraph",
            html: "For covalent molecules, count the total number of electrons in the molecule and apply the odd/even electron rule across two sub-categories:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "(A) Molecular Orbital Theory (MOT) Examples (Z = 1 to 10 / 20 e⁻ systems):",
                html: "",
                subItems: [
                  {
                    html: "Odd number of electrons → <strong>Paramagnetic (Para)</strong>",
                  },
                  {
                    html: "Even number of electrons → <strong>Diamagnetic (Dia)</strong>, <em>except</em> <strong>10 e<sup>−</sup></strong> and <strong>16 e<sup>−</sup></strong> species, which are <strong>Paramagnetic (Para)</strong>",
                  },
                  {
                    html: "<strong>Worked Examples:</strong> N<sub>2</sub> (14 e<sup>−</sup>, even → <strong>Dia</strong>), F<sub>2</sub> (18 e<sup>−</sup>, even → <strong>Dia</strong>), NO (15 e<sup>−</sup>, odd → <strong>Para</strong>), C<sub>2</sub><sup>−</sup> (13 e<sup>−</sup>, odd → <strong>Para</strong>), B<sub>2</sub> (10 e<sup>−</sup>, exception → <strong>Para</strong>), O<sub>2</sub> (16 e<sup>−</sup>, exception → <strong>Para</strong>)",
                  },
                ],
              },
              {
                label: "(B) Non-MOT / General Covalent Molecules:",
                html: "",
                subItems: [
                  {
                    html: "Odd number of electrons → <strong>Paramagnetic (Para)</strong>",
                  },
                  {
                    html: "Even number of electrons → <strong>Diamagnetic (Dia)</strong>, <em>except</em> <strong>S<sub>2</sub> → Paramagnetic (Para)</strong> (due to 2 unpaired valence electrons in its π* orbitals)",
                  },
                  {
                    html: "<strong>Worked Examples:</strong> NH<sub>3</sub> (10 e<sup>−</sup>, even → <strong>Dia</strong>), CO<sub>2</sub> (22 e<sup>−</sup>, even → <strong>Dia</strong>), ClO<sub>2</sub> (33 e<sup>−</sup>, odd → <strong>Para</strong>), C<sub>2</sub>H<sub>6</sub> (18 e<sup>−</sup>, even → <strong>Dia</strong>), S<sub>2</sub> (32 e<sup>−</sup>, exception → <strong>Para</strong>)",
                  },
                ],
              },
            ],
          },
          {
            type: "subheading",
            text: "Case III: Ionic Compounds (Cation & Anion Electron Count Method)",
          },
          {
            type: "paragraph",
            html: "For an ionic compound, split the formula into its constituent cation and anion and check the electronic configuration / electron count of both ions separately:",
          },
          {
            type: "bullets",
            items: [
              {
                html: "<strong>If an odd number of electrons (or unpaired e<sup>−</sup>) is present in either ion → Paramagnetic (Para)</strong>",
              },
              {
                html: "<strong>If an even number of paired electrons is present in both ions → Diamagnetic (Dia)</strong>",
              },
            ],
          },
          {
            type: "table",
            headers: [
              "Ionic Compound",
              "Cation Electron Check",
              "Anion Electron Check",
              "Magnetic Nature",
            ],
            rows: [
              [
                "<strong>Na<sub>2</sub>O<sub>2</sub></strong> (Sodium peroxide)",
                "Na<sup>+</sup> = 10 e<sup>−</sup> (even, paired)",
                "O<sub>2</sub><sup>2−</sup> = 18 e<sup>−</sup> (even, paired)",
                "<strong>Dia</strong> (even e<sup>−</sup> in both ions)",
              ],
              [
                "<strong>KO<sub>2</sub></strong> (Potassium superoxide)",
                "K<sup>+</sup> = 18 e<sup>−</sup> (even, paired)",
                "O<sub>2</sub><sup>−</sup> = 17 e<sup>−</sup> (odd e<sup>−</sup>)",
                "<strong>Para</strong> (odd e<sup>−</sup> in anion)",
              ],
              [
                "<strong>Al<sub>2</sub>S<sub>3</sub></strong> (Aluminum sulfide)",
                "Al<sup>3+</sup> = 10 e<sup>−</sup> (even, paired)",
                "S<sup>2−</sup> = 18 e<sup>−</sup> (even, paired)",
                "<strong>Dia</strong> (even e<sup>−</sup> in both ions)",
              ],
              [
                "<strong>FeCl<sub>2</sub></strong> (Iron(II) chloride)",
                "Fe<sup>2+</sup> = 24 e<sup>−</sup> ([Ar] 3d<sup>6</sup>, unpaired)",
                "Cl<sup>−</sup> = 18 e<sup>−</sup> (even, paired)",
                "<strong>Para</strong> (unpaired e<sup>−</sup> in cation)",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Single atom/ion → check E.C. for unpaired e<sup>−</sup>; Covalent molecule → odd e<sup>−</sup> = Para, even e<sup>−</sup> = Dia (except MOT 10 e<sup>−</sup>, 16 e<sup>−</sup>, and S<sub>2</sub>); Ionic compound → check both cation and anion separately.",
          },
        ],
      },
      {
        heading: "4. Related Extension: Spin-Only Magnetic Moment and Bond Order",
        blocks: [
          {
            type: "paragraph",
            html: "Determining whether a species is paramagnetic leads directly to two quantitative calculations widely used in chemical analysis:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Spin-Only Magnetic Moment (μ):",
                html: "For atoms and first-row transition metal ions, the magnitude of paramagnetism depends on the number of unpaired electrons (<em>n</em>) and is expressed in Bohr Magnetons (BM) by the relation:",
              },
            ],
          },
          {
            type: "formula",
            html: "μ = √(n(n + 2)) BM",
          },
          {
            type: "paragraph",
            html: "For example, Fe<sup>3+</sup> ([Ar] 3d<sup>5</sup>) has n = 5 unpaired electrons, yielding μ = √(5 × 7) = √35 ≈ 5.92 BM, whereas a diamagnetic ion with n = 0 gives μ = 0 BM.",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Molecular Orbital Bond Order:",
                html: "In diatomic species, the same molecular orbital occupancy that reveals unpaired electrons also defines bond order as half the difference between bonding electrons (N<sub>b</sub>) and antibonding electrons (N<sub>a</sub>):",
              },
            ],
          },
          {
            type: "formula",
            html: "Bond Order = (N<sub>b</sub> − N<sub>a</sub>) / 2",
          },
          {
            type: "paragraph",
            html: "Comparing O<sub>2</sub><sup>+</sup> (15 e<sup>−</sup>, bond order 2.5, paramagnetic), O<sub>2</sub> (16 e<sup>−</sup>, bond order 2.0, paramagnetic), O<sub>2</sub><sup>−</sup> (17 e<sup>−</sup>, bond order 1.5, paramagnetic), and O<sub>2</sub><sup>2−</sup> (18 e<sup>−</sup>, bond order 1.0, diamagnetic) shows how adding antibonding electrons simultaneously reduces bond strength and alters magnetic behavior.",
          },
        ],
      },
      {
        heading: "5. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Magnetic behavior bridges microscopic electronic structure and observable physical properties. By separating isolated ions, covalent molecules, and ionic salts into distinct analytical pathways—and combining electron-pairing checks with magnetic moment and bond-order formulas—students can systematically predict both magnetic character and bond stability across diverse inorganic compounds.",
          },
        ],
      },
    ],
  },
  {
    slug: "chemical-equilibrium-and-le-chateliers-principle",
    subject: "chemistry",
    classLevel: "Class 11",
    eyebrow: "PHYSICAL CHEMISTRY STUDY GUIDE",
    title: "Chemical Equilibrium and Le Chatelier's Principle",
    summary:
      "Dynamic equilibrium, Law of Mass Action, relationship between Kp and Kc, reaction quotient Q, and predicting shifts under stress.",
    sections: [
      {
        heading: "1. Introduction: Nature of Dynamic Equilibrium",
        blocks: [
          {
            type: "paragraph",
            html: "In a reversible chemical reaction conducted inside a closed vessel, reactants convert into products (forward reaction) while products simultaneously regenerate reactants (backward reaction). Chemical equilibrium is reached when the rate of the forward reaction equals the rate of the reverse reaction.",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Dynamic Character:",
                html: "Both forward and backward reactions continue at the molecular level, yet macroscopic concentrations, pressure, and color remain constant with time.",
              },
              {
                label: "Thermodynamic Criterion:",
                html: "At constant temperature and pressure, the Gibbs free energy change of the reaction reaches zero (ΔG = 0).",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Equilibrium Constants: Kc, Kp, and Reaction Quotient",
        blocks: [
          {
            type: "paragraph",
            html: "For a general gaseous reversible reaction aA(g) + bB(g) ⇌ cC(g) + dD(g), the Law of Mass Action defines the equilibrium constant in terms of molar concentrations (K<sub>c</sub>) or partial pressures (K<sub>p</sub>):",
          },
          {
            type: "formula",
            html: "K<sub>c</sub> = ([C]<sup>c</sup> [D]<sup>d</sup>) / ([A]<sup>a</sup> [B]<sup>b</sup>) &nbsp;&nbsp;|&nbsp;&nbsp; K<sub>p</sub> = K<sub>c</sub> (RT)<sup>Δn<sub>g</sub></sup>",
          },
          {
            type: "paragraph",
            html: "Here Δn<sub>g</sub> = (moles of gaseous products) − (moles of gaseous reactants). Pure solids and pure liquids have constant active mass taken as unity and are omitted from K<sub>c</sub> and K<sub>p</sub> expressions.",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Q < K:",
                html: "Too many reactants relative to equilibrium → reaction proceeds in the <strong>forward direction</strong>.",
              },
              {
                label: "Q = K:",
                html: "System is at <strong>dynamic equilibrium</strong>; no net change occurs.",
              },
              {
                label: "Q > K:",
                html: "Too many products relative to equilibrium → reaction shifts in the <strong>reverse direction</strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Le Chatelier's Principle: Predicting Equilibrium Shifts",
        blocks: [
          {
            type: "paragraph",
            html: "When an external stress (change in concentration, pressure, volume, or temperature) is applied to a system at equilibrium, the system adjusts itself in the direction that counteracts the imposed change.",
          },
          {
            type: "table",
            headers: ["Applied Disturbance", "Direction of Shift", "Effect on K"],
            rows: [
              [
                "Increase reactant concentration",
                "Shifts <strong>forward</strong> (consumes added reactant)",
                "Unchanged",
              ],
              [
                "Increase pressure (decrease volume)",
                "Shifts toward side with <strong>fewer gas moles</strong>",
                "Unchanged",
              ],
              [
                "Increase temperature (Endothermic, ΔH > 0)",
                "Shifts <strong>forward</strong> (absorbs added heat)",
                "<strong>Increases</strong>",
              ],
              [
                "Increase temperature (Exothermic, ΔH < 0)",
                "Shifts <strong>backward</strong> (opposes heating)",
                "<strong>Decreases</strong>",
              ],
              [
                "Addition of catalyst",
                "<strong>No shift</strong> (speeds both directions equally)",
                "Unchanged",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Only <strong>temperature</strong> changes the numerical value of K<sub>c</sub> or K<sub>p</sub>. Changes in concentration, pressure, or volume shift the equilibrium position while keeping K constant.",
          },
        ],
      },
      {
        heading: "4. Industrial Application: Haber's Process",
        blocks: [
          {
            type: "paragraph",
            html: "Ammonia synthesis, N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) (ΔH = −92.4 kJ/mol), shows Δn<sub>g</sub> = 2 − 4 = −2. High pressure (~200 atm) favors the side with fewer gas moles (NH<sub>3</sub>). Because the reaction is exothermic, low temperature favors higher yield, but an optimum temperature (~700 K) with an iron catalyst is used to maintain a practical reaction rate.",
          },
        ],
      },
      {
        heading: "5. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Combining quantitative K<sub>p</sub>/K<sub>c</sub> calculations with qualitative Le Chatelier analysis allows chemists to control reaction yields both in laboratory mixtures and large-scale chemical manufacturing.",
          },
        ],
      },
    ],
  },
  {
    slug: "electrochemistry-nernst-equation-and-galvanic-cells",
    subject: "chemistry",
    classLevel: "Class 12",
    eyebrow: "PHYSICAL CHEMISTRY STUDY GUIDE",
    title: "Electrochemistry: Nernst Equation and Galvanic Cells",
    summary:
      "Galvanic cell representation, standard electrode potentials, Nernst equation at 298 K, Gibbs energy relation, and Faraday's laws of electrolysis.",
    sections: [
      {
        heading: "1. Introduction: Galvanic Cells and Electrode Potentials",
        blocks: [
          {
            type: "paragraph",
            html: "A galvanic (voltaic) cell converts the chemical energy of a spontaneous redox reaction directly into electrical work. It consists of two half-cells linked externally by a conducting wire and internally by a salt bridge.",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Anode (Left, Negative):",
                html: "Site of <strong>oxidation</strong> (loss of electrons). Example in Daniell cell: Zn(s) → Zn<sup>2+</sup>(aq) + 2e<sup>−</sup>.",
              },
              {
                label: "Cathode (Right, Positive):",
                html: "Site of <strong>reduction</strong> (gain of electrons). Example: Cu<sup>2+</sup>(aq) + 2e<sup>−</sup> → Cu(s).",
              },
              {
                label: "Salt Bridge Role:",
                html: "Maintains electrical neutrality in both half-cells by supplying inert ions (such as KCl or KNO<sub>3</sub>) and completes the internal circuit.",
              },
            ],
          },
          {
            type: "formula",
            html: "E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>",
          },
        ],
      },
      {
        heading: "2. The Nernst Equation (Non-Standard Conditions)",
        blocks: [
          {
            type: "paragraph",
            html: "When ion concentrations are not 1 M or gas pressures are not 1 bar, the cell potential depends on the reaction quotient Q through the Nernst equation:",
          },
          {
            type: "formula",
            html: "E<sub>cell</sub> = E°<sub>cell</sub> − (0.0591 / n) log<sub>10</sub> Q &nbsp;&nbsp;(at 298 K)",
          },
          {
            type: "subheading",
            text: "Worked Example: Daniell Cell at Non-Standard Concentrations",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Cell Representation:",
                html: "Zn(s) | Zn<sup>2+</sup>(0.1 M) || Cu<sup>2+</sup>(0.01 M) | Cu(s), with E°<sub>cell</sub> = 1.10 V and n = 2.",
              },
              {
                label: "Reaction Quotient:",
                html: "Q = [Zn<sup>2+</sup>] / [Cu<sup>2+</sup>] = 0.1 / 0.01 = 10.",
              },
              {
                label: "Calculation:",
                html: "E<sub>cell</sub> = 1.10 − (0.0591 / 2) log<sub>10</sub>(10) = 1.10 − 0.02955 = <strong>1.070 V</strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Gibbs Energy, Equilibrium Constant, and Electrolysis",
        blocks: [
          {
            type: "paragraph",
            html: "Electrical work links electrochemistry directly to chemical thermodynamics and quantitative electrolysis:",
          },
          {
            type: "table",
            headers: ["Concept", "Mathematical Relation", "Key Condition / Meaning"],
            rows: [
              [
                "Gibbs Free Energy",
                "ΔG° = −n F E°<sub>cell</sub>",
                "Spontaneous when E°<sub>cell</sub> > 0 (ΔG° < 0); F = 96487 C/mol",
              ],
              [
                "Equilibrium Constant",
                "E°<sub>cell</sub> = (0.0591 / n) log<sub>10</sub> K<sub>c</sub>",
                "At equilibrium, E<sub>cell</sub> = 0 and Q = K<sub>c</sub>",
              ],
              [
                "Faraday's First Law",
                "w = Z · I · t = (M · I · t) / (n · F)",
                "Mass deposited is proportional to total charge Q = I · t",
              ],
              [
                "Kohlrausch's Law",
                "Λ°<sub>m</sub>(A<sub>x</sub>B<sub>y</sub>) = x λ°<sub>+</sub> + y λ°<sub>−</sub>",
                "Limiting molar conductivity equals sum of ionic contributions",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Use <strong>LOAN</strong> for galvanic cells: <strong>L</strong>eft = <strong>O</strong>xidation = <strong>A</strong>node = <strong>N</strong>egative. Always use standard <em>reduction</em> potentials in E°<sub>cell</sub> = E°<sub>right</sub> − E°<sub>left</sub>.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Electrochemistry unifies redox reactivity, thermodynamic spontaneity, and quantitative charge transfer. Mastering E°<sub>cell</sub>, the Nernst equation, and Faraday's laws enables accurate prediction of battery voltages, corrosion tendencies, and electrolytic yields.",
          },
        ],
      },
    ],
  },
  {
    slug: "coordination-compounds-cft-and-nomenclature",
    subject: "chemistry",
    classLevel: "Class 12",
    eyebrow: "INORGANIC CHEMISTRY STUDY GUIDE",
    title: "Coordination Compounds: Nomenclature and Crystal Field Theory",
    summary:
      "Werner's theory, IUPAC naming rules, spectrochemical series, octahedral and tetrahedral crystal field splitting, and color/magnetism of complexes.",
    sections: [
      {
        heading: "1. Introduction: Structure of Coordination Entities",
        blocks: [
          {
            type: "paragraph",
            html: "Coordination compounds consist of a central metal atom or ion (usually a d-block transition metal acting as a Lewis acid) bonded via coordinate covalent bonds to surrounding ions or neutral molecules called ligands (Lewis bases).",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Primary Valency (Werner's Theory):",
                html: "Ionizable valency corresponding to the oxidation state of the central metal ion, satisfied by negative ions.",
              },
              {
                label: "Secondary Valency:",
                html: "Non-ionizable valency equal to the <strong>coordination number (CN)</strong>, fixed for a given metal and directional in space (giving octahedral, tetrahedral, or square planar geometry).",
              },
            ],
          },
        ],
      },
      {
        heading: "2. IUPAC Nomenclature Rules",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                label: "Order of Ions:",
                html: "Name the cation first, followed by the anion (whether complex or simple).",
              },
              {
                label: "Inside the Coordination Sphere:",
                html: "List ligands in <strong>alphabetical order</strong> (ignoring prefixes di-, tri-, bis-, tris-) before naming the central metal atom.",
              },
              {
                label: "Anionic Complex Ending:",
                html: "If the coordination sphere carries a net negative charge, the metal name ends in <strong>-ate</strong> (e.g., ferrate, cuprate, cobaltate) followed by its oxidation state in Roman numerals.",
              },
              {
                label: "Worked Examples:",
                html: "",
                subItems: [
                  {
                    html: "<strong>[Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub>:</strong> Pentaamminechloridocobalt(III) chloride",
                  },
                  {
                    html: "<strong>K<sub>4</sub>[Fe(CN)<sub>6</sub>]:</strong> Potassium hexacyanidoferrate(II)",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "3. Crystal Field Theory (CFT) and Splitting",
        blocks: [
          {
            type: "paragraph",
            html: "In Crystal Field Theory, ligands are treated as point charges that lift the five-fold degeneracy of metal d-orbitals. In an <strong>octahedral field</strong>, ligands approach along the x, y, and z axes, raising the energy of the e<sub>g</sub> orbitals (d<sub>x²−y²</sub>, d<sub>z²</sub>) and lowering the t<sub>2g</sub> orbitals (d<sub>xy</sub>, d<sub>yz</sub>, d<sub>xz</sub>) by a total separation Δ<sub>o</sub>.",
          },
          {
            type: "formula",
            html: "Δ<sub>t</sub> = (4 / 9) Δ<sub>o</sub>",
          },
          {
            type: "table",
            headers: ["Condition", "Ligand Type", "Electron Filling (d⁴ to d⁷)", "Complex Spin Type"],
            rows: [
              [
                "Δ<sub>o</sub> > P (pairing energy)",
                "Strong field (CN<sup>−</sup>, CO, en)",
                "Electrons pair in t<sub>2g</sub> first",
                "<strong>Low-spin</strong> (fewer unpaired e<sup>−</sup>)",
              ],
              [
                "Δ<sub>o</sub> < P (pairing energy)",
                "Weak field (I<sup>−</sup>, Br<sup>−</sup>, Cl<sup>−</sup>, F<sup>−</sup>, H<sub>2</sub>O)",
                "Electrons enter e<sub>g</sub> before pairing",
                "<strong>High-spin</strong> (more unpaired e<sup>−</sup>)",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Check the ligand's position in the spectrochemical series (I<sup>−</sup> < Br<sup>−</sup> < Cl<sup>−</sup> < F<sup>−</sup> < H<sub>2</sub>O < NH<sub>3</sub> < en < CN<sup>−</sup> < CO). Strong-field ligands yield large Δ<sub>o</sub> and low-spin complexes; d–d transitions across Δ<sub>o</sub> produce the characteristic colors of transition metal complexes.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Coordination chemistry explains the vivid colors, magnetic moments, and geometries of transition metal complexes—from industrial catalysts to biological centers like hemoglobin and chlorophyll.",
          },
        ],
      },
    ],
  },
];
