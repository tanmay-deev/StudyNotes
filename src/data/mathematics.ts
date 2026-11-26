import { TopicNote } from "./types";

export const mathematicsNotes: TopicNote[] = [
  {
    slug: "limits-continuity-and-derivatives",
    subject: "mathematics",
    classLevel: "Class 11",
    eyebrow: "CALCULUS FOUNDATIONS STUDY GUIDE",
    title: "Limits, Continuity, and First Principles of Derivatives",
    summary:
      "Left- and right-hand limits, standard algebraic and trigonometric limits, continuity criteria, and derivative rules from first principles.",
    sections: [
      {
        heading: "1. Introduction: Meaning of a Limit",
        blocks: [
          {
            type: "paragraph",
            html: "A limit describes the value that a function f(x) approaches as x gets arbitrarily close to a point <em>a</em>, regardless of whether f(a) itself is defined. The two-sided limit lim<sub>x→a</sub> f(x) = L exists if and only if the Left-Hand Limit (LHL) and Right-Hand Limit (RHL) are finite and equal:",
          },
          {
            type: "formula",
            html: "lim<sub>x → a⁻</sub> f(x) = lim<sub>x → a⁺</sub> f(x) = L",
          },
          {
            type: "paragraph",
            html: "When direct substitution yields an indeterminate form such as <strong>0/0</strong> or <strong>∞/∞</strong>, simplify by factoring, rationalizing radicals, or applying standard limit identities.",
          },
        ],
      },
      {
        heading: "2. Standard Limit Identities",
        blocks: [
          {
            type: "table",
            headers: ["Category", "Standard Limit Formula", "Condition / Note"],
            rows: [
              [
                "Algebraic Power",
                "lim<sub>x→a</sub> (x<sup>n</sup> − a<sup>n</sup>) / (x − a) = <strong>n a<sup>n−1</sup></strong>",
                "Valid for any rational n",
              ],
              [
                "Trigonometric (Sine)",
                "lim<sub>x→0</sub> (sin x) / x = <strong>1</strong>",
                "Angle x MUST be in <strong>radians</strong>",
              ],
              [
                "Trigonometric (Tangent)",
                "lim<sub>x→0</sub> (tan x) / x = <strong>1</strong>",
                "Also lim<sub>x→0</sub> (1 − cos x) / x<sup>2</sup> = 1/2",
              ],
              [
                "Exponential & Log",
                "lim<sub>x→0</sub> (e<sup>x</sup> − 1) / x = <strong>1</strong> &nbsp;|&nbsp; lim<sub>x→0</sub> ln(1 + x) / x = <strong>1</strong>",
                "lim<sub>x→0</sub> (a<sup>x</sup> − 1) / x = ln a",
              ],
            ],
          },
        ],
      },
      {
        heading: "3. Continuity and Derivative by First Principles",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                label: "Continuity at x = a:",
                html: "A function f is continuous at x = a iff <strong>lim<sub>x→a⁻</sub> f(x) = lim<sub>x→a⁺</sub> f(x) = f(a)</strong>.",
              },
              {
                label: "First Principles Definition of Derivative:",
                html: "The instantaneous rate of change (slope of the tangent line) at x is defined as:",
              },
            ],
          },
          {
            type: "formula",
            html: "f'(x) = lim<sub>h → 0</sub> [ f(x + h) − f(x) ] / h",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Product Rule:",
                html: "(u · v)' = u' v + u v'",
              },
              {
                label: "Quotient Rule:",
                html: "(u / v)' = (u' v − u v') / v<sup>2</sup>",
              },
              {
                label: "Worked Example:",
                html: "Evaluate lim<sub>x→0</sub> (sin 5x) / (3x) = (5/3) · lim<sub>x→0</sub> (sin 5x)/(5x) = (5/3) × 1 = <strong>5/3</strong>.",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Every differentiable function is necessarily continuous, but a continuous function need not be differentiable (for example, f(x) = |x| is continuous at x = 0, yet has a sharp corner and no derivative there).",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Limits formalize the behavior of functions near critical points and form the logical bedrock on which differential and integral calculus are built.",
          },
        ],
      },
    ],
  },
  {
    slug: "permutations-combinations-and-binomial-theorem",
    subject: "mathematics",
    classLevel: "Class 11",
    eyebrow: "ALGEBRA & COMBINATORICS STUDY GUIDE",
    title: "Permutations, Combinations, and the Binomial Theorem",
    summary:
      "Fundamental counting principle, ordered arrangements vs. unordered selections, circular permutations, general binomial term, and middle terms.",
    sections: [
      {
        heading: "1. Introduction: Fundamental Principle of Counting",
        blocks: [
          {
            type: "paragraph",
            html: "Combinatorics counts discrete arrangements and selections systematically without enumerating every outcome:",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Multiplication Principle (AND):",
                html: "If task A can occur in <em>m</em> ways and an independent task B can follow in <em>n</em> ways, both tasks together occur in <strong>m × n</strong> ways.",
              },
              {
                label: "Addition Principle (OR — Mutually Exclusive):",
                html: "If either task A (m ways) or task B (n ways) can occur exclusively, there are <strong>m + n</strong> ways.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Permutations vs. Combinations",
        blocks: [
          {
            type: "table",
            headers: ["Concept", "Formula", "When to Use"],
            rows: [
              [
                "<strong>Permutation (Order Matters)</strong>",
                "<sup>n</sup>P<sub>r</sub> = n! / (n − r)!",
                "Arranging r distinct objects from n (ranks, codes, seating)",
              ],
              [
                "<strong>Combination (Order Irrelevant)</strong>",
                "<sup>n</sup>C<sub>r</sub> = n! / [ r! (n − r)! ]",
                "Choosing a committee/team of r objects from n",
              ],
              [
                "<strong>Permutations with Alike Objects</strong>",
                "n! / (p! q! r!)",
                "Arranging n letters where p, q, r letters repeat (e.g., MISSISSIPPI)",
              ],
              [
                "<strong>Circular Permutation</strong>",
                "(n − 1)! &nbsp;or&nbsp; (n − 1)!/2",
                "Round table seating; divide by 2 for flip-symmetric necklaces",
              ],
            ],
          },
          {
            type: "bullets",
            items: [
              {
                label: "Useful Combination Identities:",
                html: "<sup>n</sup>C<sub>r</sub> = <sup>n</sup>C<sub>n−r</sub>, and Pascal's identity <strong><sup>n</sup>C<sub>r</sub> + <sup>n</sup>C<sub>r−1</sub> = <sup>n+1</sup>C<sub>r</sub></strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Binomial Theorem for Positive Integral Index",
        blocks: [
          {
            type: "paragraph",
            html: "For any positive integer n, the expansion of (a + b)<sup>n</sup> has <strong>n + 1</strong> terms with symmetric binomial coefficients:",
          },
          {
            type: "formula",
            html: "(a + b)<sup>n</sup> = Σ<sub>r=0 to n</sub> <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup> &nbsp;&nbsp;|&nbsp;&nbsp; General Term T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Middle Term(s):",
                html: "If n is <strong>even</strong>, there is one middle term: T<sub>(n/2)+1</sub>. If n is <strong>odd</strong>, there are two middle terms: T<sub>(n+1)/2</sub> and T<sub>(n+3)/2</sub>.",
              },
              {
                label: "Sum of Coefficients:",
                html: "Setting x = 1 in (1 + x)<sup>n</sup> gives <sup>n</sup>C<sub>0</sub> + <sup>n</sup>C<sub>1</sub> + ... + <sup>n</sup>C<sub>n</sub> = <strong>2<sup>n</sup></strong>.",
              },
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Ask one question first: <em>Does swapping two chosen items create a new outcome?</em> If YES → use Permutation (<sup>n</sup>P<sub>r</sub>). If NO → use Combination (<sup>n</sup>C<sub>r</sub>). Remember: <sup>n</sup>P<sub>r</sub> = <sup>n</sup>C<sub>r</sub> × r!",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Combinatorial counting and binomial expansions form the direct toolkit for probability theory, series approximations, and discrete algebra.",
          },
        ],
      },
    ],
  },
  {
    slug: "matrices-determinants-and-linear-systems",
    subject: "mathematics",
    classLevel: "Class 12",
    eyebrow: "LINEAR ALGEBRA STUDY GUIDE",
    title: "Matrices, Determinants, and Solving Linear Systems",
    summary:
      "Matrix operations, transpose properties, minors and cofactors, adjoint and inverse of a matrix, and consistency criteria for AX = B.",
    sections: [
      {
        heading: "1. Introduction: Matrix Operations and Special Matrices",
        blocks: [
          {
            type: "paragraph",
            html: "A matrix A = [a<sub>ij</sub>]<sub>m×n</sub> is a rectangular array of m rows and n columns. Matrix multiplication AB is defined only when the number of columns of A equals the number of rows of B, and is generally <strong>non-commutative (AB ≠ BA)</strong>.",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Transpose Properties:",
                html: "(A')' = A, (A + B)' = A' + B', and reversal law <strong>(AB)' = B' A'</strong>.",
              },
              {
                label: "Symmetric & Skew-Symmetric Matrices:",
                html: "A square matrix is symmetric if A' = A and skew-symmetric if A' = −A (all main-diagonal entries of a skew-symmetric matrix are zero). Every square matrix splits uniquely as <strong>A = ½(A + A') + ½(A − A')</strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "2. Determinants, Adjoint, and Matrix Inverse",
        blocks: [
          {
            type: "paragraph",
            html: "Every square matrix A of order n has a scalar determinant |A|. The cofactor of element a<sub>ij</sub> is A<sub>ij</sub> = (−1)<sup>i+j</sup> M<sub>ij</sub>, and the <strong>adjoint</strong> adj(A) is the transpose of the cofactor matrix.",
          },
          {
            type: "formula",
            html: "A · adj(A) = |A| · I<sub>n</sub> &nbsp;&nbsp;|&nbsp;&nbsp; A<sup>−1</sup> = (1 / |A|) · adj(A) &nbsp;(provided |A| ≠ 0)",
          },
          {
            type: "bullets",
            items: [
              {
                label: "Essential Determinant Identities (order n):",
                html: "|k A| = <strong>k<sup>n</sup> |A|</strong>, &nbsp;|AB| = |A| |B|, &nbsp;|adj(A)| = <strong>|A|<sup>n−1</sup></strong>, &nbsp;and |A<sup>−1</sup>| = 1 / |A|.",
              },
              {
                label: "Inverse Reversal Law:",
                html: "<strong>(AB)<sup>−1</sup> = B<sup>−1</sup> A<sup>−1</sup></strong>.",
              },
            ],
          },
        ],
      },
      {
        heading: "3. Consistency of Linear Systems (AX = B)",
        blocks: [
          {
            type: "table",
            headers: ["Condition on |A|", "Condition on (adj A)·B", "Nature of Solution"],
            rows: [
              [
                "<strong>|A| ≠ 0</strong> (Non-singular)",
                "Any B",
                "Consistent with <strong>Unique Solution: X = A<sup>−1</sup> B</strong>",
              ],
              [
                "<strong>|A| = 0</strong> (Singular)",
                "(adj A)·B ≠ O",
                "<strong>Inconsistent</strong> (No solution)",
              ],
              [
                "<strong>|A| = 0</strong> (Singular)",
                "(adj A)·B = O",
                "Consistent with <strong>Infinitely many solutions</strong> (or no solution in degenerate cases)",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "For a 2×2 matrix [[a, b], [c, d]], get adj(A) instantly by <strong>swapping the main diagonal (a ↔ d)</strong> and <strong>negating the off-diagonal (−b, −c)</strong>, then divide by (ad − bc) for A<sup>−1</sup>.",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Matrices and determinants compactly represent simultaneous linear equations, geometric transformations, and computer graphics operations using clean algebraic rules.",
          },
        ],
      },
    ],
  },
  {
    slug: "definite-and-indefinite-integration-techniques",
    subject: "mathematics",
    classLevel: "Class 12",
    eyebrow: "INTEGRAL CALCULUS STUDY GUIDE",
    title: "Indefinite and Definite Integration Techniques",
    summary:
      "Integration by substitution, partial fractions, integration by parts (ILATE), King's property of definite integrals, and even/odd symmetry.",
    sections: [
      {
        heading: "1. Introduction: Antiderivatives and Fundamental Theorem",
        blocks: [
          {
            type: "paragraph",
            html: "Integration reverses differentiation (indefinite integral ∫ f(x) dx = F(x) + C) and computes signed area under a curve over an interval [a, b] via the Second Fundamental Theorem of Calculus:",
          },
          {
            type: "formula",
            html: "∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a) &nbsp;&nbsp;where F'(x) = f(x)",
          },
        ],
      },
      {
        heading: "2. Three Core Indefinite Integration Methods",
        blocks: [
          {
            type: "subheading",
            text: "Method A: Substitution",
          },
          {
            type: "paragraph",
            html: "Look for an inner function g(x) whose derivative g'(x) appears as a factor. Set t = g(x) and dt = g'(x) dx to convert ∫ f(g(x)) g'(x) dx into ∫ f(t) dt. In definite integrals, always update the lower and upper limits to t-values!",
          },
          {
            type: "subheading",
            text: "Method B: Integration by Parts (ILATE Rule)",
          },
          {
            type: "formula",
            html: "∫ u · v dx = u ∫ v dx − ∫ [ (du/dx) · (∫ v dx) ] dx",
          },
          {
            type: "paragraph",
            html: "Choose the first function <strong>u</strong> following <strong>I–L–A–T–E</strong> priority: <strong>I</strong>nverse trig → <strong>L</strong>ogarithmic → <strong>A</strong>lgebraic → <strong>T</strong>rigonometric → <strong>E</strong>xponential. Also note the shortcut: <strong>∫ e<sup>x</sup> [f(x) + f'(x)] dx = e<sup>x</sup> f(x) + C</strong>.",
          },
          {
            type: "subheading",
            text: "Method C: Partial Fractions",
          },
          {
            type: "paragraph",
            html: "For proper rational functions P(x)/Q(x) (degree P < degree Q), decompose into simple fractions such as A/(x − a) + B/(x − b) or (Ax + B)/(x<sup>2</sup> + bx + c) before integrating term by term.",
          },
        ],
      },
      {
        heading: "3. Power Properties of Definite Integrals",
        blocks: [
          {
            type: "table",
            headers: ["Property Name", "Formula", "Typical Use Case"],
            rows: [
              [
                "<strong>King's Property</strong>",
                "∫<sub>a</sub><sup>b</sup> f(x) dx = ∫<sub>a</sub><sup>b</sup> f(a + b − x) dx",
                "Add original + transformed integral (2I) to cancel complex denominators",
              ],
              [
                "<strong>Zero-to-a Rule</strong>",
                "∫<sub>0</sub><sup>a</sup> f(x) dx = ∫<sub>0</sub><sup>a</sup> f(a − x) dx",
                "Classic integrals like ∫<sub>0</sub><sup>π/2</sup> sin<sup>n</sup>x / (sin<sup>n</sup>x + cos<sup>n</sup>x) dx = π/4",
              ],
              [
                "<strong>Even / Odd Symmetry</strong>",
                "∫<sub>−a</sub><sup>a</sup> f(x) dx = 2 ∫<sub>0</sub><sup>a</sup> f(x) dx (even) &nbsp;|&nbsp; <strong>0</strong> (odd)",
                "Always check f(−x) first when limits are symmetric [−a, a]",
              ],
            ],
          },
          {
            type: "callout",
            title: "Quick Summary Rule:",
            html: "Before expanding any definite integral, check two quick wins in order: (1) Are limits symmetric [−a, a]? Test even/odd! (2) Does replacing x with (a + b − x) simplify or match the denominator? Apply King's Property!",
          },
        ],
      },
      {
        heading: "4. Conclusion",
        blocks: [
          {
            type: "paragraph",
            html: "Combining substitution, ILATE integration by parts, and definite integral symmetry properties solves nearly every Class 12 calculus integral cleanly and reliably.",
          },
        ],
      },
    ],
  },
];
