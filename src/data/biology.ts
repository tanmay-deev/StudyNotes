import { TopicNote } from "./types";

export const biologyNotes: TopicNote[] = [
  {
    slug: "cell-cycle-and-cell-division",
    subject: "biology",
    classLevel: "Class 11",
    eyebrow: "CELL BIOLOGY STUDY GUIDE",
    title: "Cell Cycle and Cell Division: Mitosis and Meiosis",
    summary:
      "Interphase stages (G1, S, G2), equational division (mitosis), reductional division (meiosis), Prophase I sub-stages, and ploidy/DNA tracking.",
    sections: [
      {
        heading: "1. Introduction: Phases of the Eukaryotic Cell Cycle",
        blocks: [
          {
            type: "paragraph",
            html: "Cell division enables growth, tissue repair, and sexual reproduction. A typical dividing human cell completes one full cycle in ~24 hours, spending over 95% of its duration in preparatory <strong>Interphase</strong> before entering <strong>M-phase</strong> (nuclear division + cytokinesis).",
          },
          {
            type: "bullets",
            items: [
              {
                label: "G₁ Phase (Gap 1):",
                html: "Cell is metabolically active, grows in size, and synthesizes RNA and proteins; DNA content remains <strong>2C</strong>.",
              },
              {
                label: "S Phase (Synthesis):",
                html: "DNA replication doubles DNA content from <strong>2C → 4C</strong>, while the chromosome number (2n) remains unchanged. Centrioles duplicate in animal cells.",
              },
              {
                label: "G₂ Phase (Gap 2):",
                html: "Tubulin proteins are synthesized in preparation for spindle formation; cell enters M-phase.",
              },
              {
                label: "G₀ Phase (Quiescent Stage):",
                html: "Metabolically active cells (e.g., adult heart cells) that exit the active cycle unless signaled to divide.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Mitosis (Equational Division) vs. Meiosis (Reductional Division)",
        blocks: [
          {
            type: "table",
            headers: ["Feature", "Mitosis", "Meiosis"],
            rows: [
              [
                "Where it occurs",
                "Somatic (body) cells",
                "Germ cells (meiocytes) during gamete formation",
              ],
              [
                "Daughter Cells Produced",
                "2 genetically identical diploid cells (2n)",
                "4 genetically distinct haploid cells (n)",
              ],
              [
                "Crossing Over",
                "Absent",
                "<strong>Present</strong> (Pachytene of Prophase I)",
              ],
              [
                "Centromere Splitting",
                "Occurs once during Anaphase",
                "Occurs only in <strong>Anaphase II</strong> (not Anaphase I)",
              ],
            ],
          },
        ],
      },
      {
        heading: "3. Five Sub-Stages of Meiotic Prophase I",
        blocks: [
          {
            type: "paragraph",
            html: "Prophase I of Meiosis I is prolonged and generates genetic variation through homologous pairing and recombination:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Leptotene:",
                html: "Chromosomes gradually condense and become visible under a light microscope.",
              },
              {
                label: "Zygotene:",
                html: "Homologous chromosomes pair up via <strong>synapsis</strong>, forming synaptonemal complexes (bivalents / tetrads).",
              },
              {
                label: "Pachytene:",
                html: "<strong>Crossing over</strong> occurs between non-sister chromatids of homologous chromosomes, mediated by the enzyme <em>recombinase</em>.",
              },
              {
                label: "Diplotene:",
                html: "Synaptonemal complex dissolves; homologous chromosomes separate except at X-shaped crossover points called <strong>chiasmata</strong>.",
              },
              {
                label: "Diakinesis:",
                html: "Terminalization of chiasmata completes; nucleolus and nuclear envelope break down.",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Remember Prophase I order with <strong>L-Z-P-D-D</strong> (<em>Lazy Zebra Plays Drums Daily</em>): Leptotene → Zygotene (synapsis) → Pachytene (crossing over) → Diplotene (chiasmata) → Diakinesis (terminalization).",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Mitosis preserves chromosome number across somatic generations, whereas meiosis halves chromosome number and shuffles alleles so fertilization restores diploidy with evolutionary diversity.",
          },
        ],
      },
    ],
  },
  {
    slug: "photosynthesis-in-higher-plants",
    subject: "biology",
    classLevel: "Class 11",
    eyebrow: "PLANT PHYSIOLOGY STUDY GUIDE",
    title: "Photosynthesis in Higher Plants: Light Reaction, C₃, and C₄ Pathways",
    summary:
      "Chloroplast structure, Z-scheme photophosphorylation, chemiosmosis, Calvin cycle (C₃), Hatch-Slack pathway (C₄), and photorespiration.",
    sections: [
      {
        heading: "1. Introduction: Site and Overall Equation of Photosynthesis",
        blocks: [
          {
            type: "paragraph",
            html: "Green plants convert solar energy into chemical bond energy inside chloroplasts. The <strong>thylakoid membranes</strong> harvest light to generate ATP and NADPH, while the surrounding <strong>stroma</strong> uses these products to fix atmospheric CO<sub>2</sub> into sugars.",
          },
          {
            type: "formula",
            html: "6 CO<sub>2</sub> + 12 H<sub>2</sub>O &nbsp;→&nbsp; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 H<sub>2</sub>O + 6 O<sub>2</sub> &nbsp;&nbsp;(Light + Chlorophyll)",
          },
        ],
      },
      {
        heading: "2. Light Reactions: Non-Cyclic vs. Cyclic Photophosphorylation",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                label: "Non-Cyclic Photophosphorylation (Z-Scheme):",
                html: "Involves both <strong>PS II (P680)</strong> and <strong>PS I (P700)</strong> in grana thylakoids. Photolysis of water at PS II releases O<sub>2</sub>, H<sup>+</sup>, and electrons. Produces <strong>ATP, NADPH, and O<sub>2</sub></strong>.",
              },
              {
                label: "Cyclic Photophosphorylation:",
                html: "Involves only <strong>PS I</strong> in stroma lamellae (which lack PS II and NADP reductase). Electrons cycle back to PS I, generating <strong>ATP only</strong> (no O<sub>2</sub> or NADPH).",
              },
              {
                label: "Chemiosmotic Hypothesis:",
                html: "Proton accumulation inside the thylakoid lumen creates a pH/proton gradient; passive outflow through the <strong>CF<sub>0</sub>–CF<sub>1</sub> ATP synthase</strong> drives ATP synthesis in the stroma.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Carbon Fixation: C₃ (Calvin) vs. C₄ (Hatch–Slack) Plants",
        blocks: [
          {
            type: "paragraph",
            html: "The Calvin Cycle operates in all photosynthetic plants across three steps: <strong>Carboxylation</strong> (RuBP + CO<sub>2</sub> via RuBisCO → 2 × 3-PGA), <strong>Reduction</strong> (using ATP and NADPH to form triose phosphate), and <strong>Regeneration</strong> of RuBP. Fixing 1 glucose molecule (6 CO<sub>2</sub>) requires <strong>18 ATP and 12 NADPH</strong>.",
          },
          {
            type: "table",
            headers: ["Characteristic", "C₃ Plants (Wheat, Rice)", "C₄ Plants (Maize, Sugarcane)"],
            rows: [
              [
                "Leaf Anatomy",
                "Normal mesophyll",
                "<strong>Kranz anatomy</strong> (bundle sheath ring around veins)",
              ],
              [
                "Primary CO<sub>2</sub> Acceptor",
                "RuBP (5-carbon ketose)",
                "PEP (3-carbon compound in mesophyll)",
              ],
              [
                "Primary Fixing Enzyme",
                "RuBisCO",
                "<strong>PEPcase</strong> (lacks oxygenase activity)",
              ],
              [
                "First Stable Product",
                "3-PGA (3-carbon)",
                "OAA — Oxaloacetic acid (4-carbon)",
              ],
              [
                "Photorespiration",
                "Present (wastes ATP & CO<sub>2</sub> in heat)",
                "<strong>Negligible / Absent</strong> (high productivity)",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "C₄ plants avoid wasteful photorespiration by spatially separating initial CO<sub>2</sub> capture (PEPcase in mesophyll) from RuBisCO activity (CO<sub>2</sub>-rich bundle sheath cells), costing 30 ATP + 12 NADPH per glucose.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Photosynthesis links photochemical proton gradients with enzymatic carbon fixation, and the evolutionary adaptation of C₄ anatomy explains why tropical grasses thrive under intense light and high temperatures.",
          },
        ],
      },
    ],
  },
  {
    slug: "molecular-basis-of-inheritance",
    subject: "biology",
    classLevel: "Class 12",
    eyebrow: "MOLECULAR GENETICS STUDY GUIDE",
    title: "Molecular Basis of Inheritance: DNA Replication and Transcription",
    summary:
      "Watson-Crick double helix, Chargaff's rules, semi-conservative DNA replication enzymes, transcription unit, genetic code, and Lac Operon.",
    sections: [
      {
        heading: "1. Introduction: Structure of DNA and Central Dogma",
        blocks: [
          {
            type: "paragraph",
            html: "Deoxyribonucleic acid (DNA) is a double-stranded polynucleotide polymer of deoxyribonucleotides linked by 3'→5' phosphodiester bonds. The two chains run antiparallel (5'→3' opposite 3'→5') and are held together by specific hydrogen bonds between purines and pyrimidines:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Base Pairing & Chargaff's Rule:",
                html: "Adenine pairs with Thymine via <strong>2 H-bonds (A = T)</strong>; Guanine pairs with Cytosine via <strong>3 H-bonds (G ≡ C)</strong>. Hence [A] = [T], [G] = [C], and (A + G) / (T + C) = 1.",
              },
              {
                label: "Central Dogma (Francis Crick):",
                html: "Genetic information flows from <strong>DNA → (Transcription) → mRNA → (Translation) → Protein</strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Semi-Conservative DNA Replication",
        blocks: [
          {
            type: "paragraph",
            html: "Meselson and Stahl (1958) proved using heavy nitrogen (<sup>15</sup>N) in <em>E. coli</em> that each daughter DNA molecule retains one parental strand and one newly synthesized strand. DNA-dependent DNA polymerase catalyzes polymerization strictly in the <strong>5' → 3' direction</strong>.",
          },
          {
            type: "table",
            headers: ["Enzyme / Component", "Primary Role at the Replication Fork"],
            rows: [
              [
                "<strong>DNA Helicase</strong>",
                "Unwinds the double helix by breaking hydrogen bonds between base pairs",
              ],
              [
                "<strong>DNA Polymerase III</strong>",
                "Adds dNTPs in 5' → 3' direction using template strand; proofreads errors",
              ],
              [
                "<strong>Leading Strand</strong>",
                "Synthesized <strong>continuously</strong> on the 3' → 5' template strand",
              ],
              [
                "<strong>Lagging Strand</strong>",
                "Synthesized <strong>discontinuously</strong> as Okazaki fragments on the 5' → 3' template",
              ],
              [
                "<strong>DNA Ligase</strong>",
                "Seals nicks by joining Okazaki fragments via phosphodiester bonds",
              ],
            ],
          },
        ],
      },
      {
        heading: "3. Transcription, Genetic Code, and Lac Operon",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                label: "Transcription Unit:",
                html: "Comprises a <strong>Promoter</strong> (5' end of coding strand), <strong>Structural Gene</strong>, and <strong>Terminator</strong>. Only the 3' → 5' <em>template strand</em> is transcribed into mRNA (whose sequence matches the coding strand with U replacing T).",
              },
              {
                label: "Eukaryotic Post-Transcriptional Processing:",
                html: "hnRNA undergoes <strong>splicing</strong> (introns removed, exons joined), <strong>5' capping</strong> (methyl guanosine triphosphate), and <strong>3' tailing</strong> (poly-A tail).",
              },
              {
                label: "Genetic Code Salient Features:",
                html: "Triplet (64 codons: 61 sense + 3 stop codons UAA, UAG, UGA), unambiguous, degenerate (multiple codons per amino acid), commaless, nearly universal, with <strong>AUG</strong> acting as both initiator and Methionine codon.",
              },
              {
                label: "Lac Operon (Inducible Negative Regulation):",
                html: "In <em>E. coli</em>, absence of lactose allows the repressor (from <em>i</em> gene) to bind the operator and block transcription. Lactose (allolactose) acts as an <strong>inducer</strong>, inactivating the repressor so RNA polymerase transcribes <em>lac z, y, a</em>.",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Both DNA Polymerase and RNA Polymerase ALWAYS synthesize new nucleic acid strands in the <strong>5' → 3' direction</strong> by reading the template strand in the <strong>3' → 5' direction</strong>.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "From faithful base-paired replication to regulated operon transcription and triplet translation, molecular genetics reveals how linear nucleotide sequences direct every cellular function.",
          },
        ],
      },
    ],
  },
  {
    slug: "human-health-and-immunity",
    subject: "biology",
    classLevel: "Class 12",
    eyebrow: "HUMAN BIOLOGY STUDY GUIDE",
    title: "Human Health, Immunity, and Antibody Structure",
    summary:
      "Innate vs. acquired immunity, active and passive immunization, B- and T-lymphocytes, H₂L₂ antibody structure, and common human pathogens.",
    sections: [
      {
        heading: "1. Introduction: Innate vs. Acquired Immunity",
        blocks: [
          {
            type: "paragraph",
            html: "Immunity is the overall ability of the host to recognize and eliminate disease-causing pathogens. Human defense operates through two complementary layers:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Innate Immunity (Non-Specific, Present at Birth):",
                html: "Consists of four barriers — <strong>Physical</strong> (skin, mucus), <strong>Physiological</strong> (stomach HCl, tears/lysozyme), <strong>Cellular</strong> (neutrophils, macrophages, NK cells), and <strong>Cytokine</strong> (interferons secreted by virus-infected cells).",
              },
              {
                label: "Acquired Immunity (Pathogen-Specific, Memory-Based):",
                html: "Exhibits a slow primary response on first encounter and a rapid, high-intensity <strong>anamnestic (secondary) response</strong> upon subsequent exposure.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Humoral vs. Cell-Mediated Immunity & Antibody Structure",
        blocks: [
          {
            type: "paragraph",
            html: "Acquired immunity is executed by two classes of lymphocytes originating in bone marrow:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "B-Lymphocytes (Humoral / Antibody-Mediated Immunity):",
                html: "Produce circulating glycoproteins called immunoglobulins (IgA, IgM, IgE, IgG). Each antibody monomer has an <strong>H<sub>2</sub>L<sub>2</sub></strong> Y-shaped structure composed of two Heavy (H) chains and two Light (L) chains joined by disulfide bonds.",
              },
              {
                label: "T-Lymphocytes (Cell-Mediated Immunity — CMI):",
                html: "Mature in the thymus. Helper T-cells stimulate B-cells; Cytotoxic T-cells directly destroy infected cells and mediate <strong>graft rejection</strong> in organ transplants.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Immunity Type", "Mechanism", "Examples"],
            rows: [
              [
                "<strong>Active Immunity</strong>",
                "Host's own immune system produces antibodies (slow, long-lasting memory)",
                "Natural infection recovery; Vaccination (Polio, Hepatitis B)",
              ],
              [
                "<strong>Passive Immunity</strong>",
                "Pre-formed antibodies transferred directly (immediate, short-lived)",
                "Colostrum (<strong>IgA</strong>), Placental <strong>IgG</strong>, Anti-tetanus / Anti-venom serum",
              ],
            ],
          },
        ],
      },
      {
        heading: "3. Lymphoid Organs and Immune Disorders",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                label: "Primary Lymphoid Organs:",
                html: "<strong>Bone marrow</strong> and <strong>Thymus</strong> — sites where immature lymphocytes differentiate into antigen-sensitive cells.",
              },
              {
                label: "Secondary Lymphoid Organs:",
                html: "Spleen, lymph nodes, tonsils, Peyer's patches, and MALT (50% of lymphoid tissue) — sites where lymphocytes interact with antigens and proliferate.",
              },
              {
                label: "Allergy vs. Autoimmunity vs. AIDS:",
                html: "Allergies involve exaggerated <strong>IgE</strong> and mast-cell histamine release; autoimmunity attacks self-cells (e.g., rheumatoid arthritis); HIV retrovirus progressively depletes <strong>Helper T-lymphocytes (CD4<sup>+</sup>)</strong>.",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Key antibody roles: <strong>IgG</strong> crosses the placenta, <strong>IgA</strong> protects infants via mother's colostrum, and <strong>IgE</strong> triggers allergic histamine release.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Understanding innate barriers, B- and T-cell cooperation, and immunological memory explains the scientific basis of vaccination, organ transplant compatibility, and modern disease prevention.",
          },
        ],
      },
    ],
  },
];
