var relearn_searchindex = [
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Antibody Engineering",
    "uri": "/tags/antibody-engineering/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Blogs",
    "uri": "/blog/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: De Novo Design",
    "uri": "/tags/de-novo-design/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Direct Preference Optimization",
    "uri": "/tags/direct-preference-optimization/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Categories",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Category :: Literature Review",
    "uri": "/categories/literature-review/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Protein Language Models",
    "uri": "/tags/protein-language-models/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Reinforcement Learning",
    "uri": "/tags/reinforcement-learning/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Blogs",
    "content": "1. Summary Original Title: From Supervision to Exploration: What Does Protein Language Model Learn During Reinforcement Learning? Journal: arXiv preprint Publication Date: October 2, 2025 DOI: arXiv:2510.01571v1 Primary Research Group/Institution: Multi-institutional collaboration led by The Chinese University of Hong Kong, Peking University, and Stanford University.\nThis study systematically investigates whether reinforcement learning (RL) can help protein language models (PLMs) discover novel sequence-function relationships beyond their pre-training data. Through experiments across four protein design domains (antimicrobial peptide design, kinase optimization, antibody engineering, and inverse folding), the authors demonstrate that RL improves sampling efficiency but its effectiveness depends on a three-factor interaction: task difficulty, reward model accuracy, and policy capacity.\n2. Background The core scientific problem addresses the fundamental limitations of supervised learning approaches in protein design. Traditional methods struggle with: 1) optimizing complex non-differentiable biological objectives, 2) exploring beyond existing sequence-function mappings, and 3) integrating multi-objective criteria or experimental feedback. While protein language models have shown remarkable success through pre-training, they remain constrained by their training distributions. Reinforcement learning has demonstrated transformative potential in NLP by enabling models to discover emergent capabilities, but its capacity to unlock latent functional patterns in protein space remained underexplored.\n3. Research Methodology The authors employed a comprehensive evaluation framework across four biological systems:\nProtein Inverse Folding: Used InstructPLM-7B as policy model with TM-Score as reward, implementing DPO with regularization Antimicrobial Peptide Design: Employed Amphion-SFT with ApexMIC reward predictor, testing DPO, PPO, and GRPO algorithms Kinase Mutation: Utilized ESM-2 architecture for multi-step mutations with experimental fitness as reward Antibody Optimization: Developed improved ProtAttBA model for binding affinity prediction, using PPO and GRPO The technical approach involved:\nSystematic comparison of RL algorithms (DPO, PPO, GRPO) Introduction of Expansion-Shrinkage Ratio (ESR) metric to quantify knowledge gain/loss Comprehensive evaluation using Pass@k metrics and biological plausibility measures Latent space analysis through UMAP visualizations 4. Innovations Key innovations compared to previous state-of-the-art:\nThree-Factor Framework: First principled framework identifying that RL effectiveness depends on task difficulty, reward accuracy, and policy capacity interaction Expansion-Shrinkage Ratio (ESR): Novel metric to quantify the trade-off between discovering new solutions and forgetting previous knowledge during RL fine-tuning Systematic Cross-Domain Evaluation: First comprehensive study comparing RL effects across multiple protein design tasks using consistent evaluation metrics Improved Reward Modeling: Enhanced antibody binding affinity prediction with combined regression and MLM objectives Task-Specific Algorithm Guidance: Evidence-based recommendations for which RL algorithms work best for different protein design challenges 5. Applications Real-world applications in drug discovery and biological research:\nAccelerated Antibody Optimization: More efficient generation of high-affinity antibody variants for therapeutic development, particularly for cancer and infectious diseases Novel Antimicrobial Peptide Discovery: Design of more potent AMPs to address antibiotic resistance crisis Enzyme Engineering: Optimization of kinase and other enzyme properties for industrial biocatalysis and therapeutic applications De Novo Protein Design: Improved inverse folding for creating proteins with novel functions not found in nature Experimental-Guided Design: Framework for incorporating experimental feedback into computational design pipelines 6. Limitations \u0026 Future Work Acknowledged limitations:\nRL often reduces diversity and novelty while improving specificity Performance heavily dependent on reward model accuracy (e.g., Spearman=0.47 for antibody task) ESR \u003c 1.0 in many cases indicates net knowledge loss during fine-tuning Computationally intensive requiring significant resources Suggested future directions:\nExtend to Diffusion/Flow Matching architectures beyond PLMs Explore protein structure and sequence-structure co-design Incorporate additional RL algorithms (e.g., MCTS) Improve reward model accuracy and robustness Develop better regularization techniques to maintain diversity 7. Jargon Breakdown Protein Language Models (PLMs): AI models trained on protein sequences to understand and generate biologically plausible proteins. Example: ESM-2 or ProtGPT2 that can predict protein function or generate novel sequences.\nReinforcement Learning (RL): Machine learning approach where an agent learns to make decisions by receiving rewards or penalties. Example: Training a model to generate better antibodies by rewarding improved binding affinity.\nDirect Preference Optimization (DPO): RL technique that learns from preference pairs without explicit reward modeling. Example: Showing the model pairs of proteins where one has better activity and learning to prefer it.\nPass@k: Evaluation metric measuring the probability of generating at least one successful sequence in k attempts. Example: Pass@100 = 0.8 means 80% chance of getting a good protein in 100 tries.\nTM-Score: Metric for assessing structural similarity between proteins (1.0 = perfect match). Example: Used to evaluate how well a generated sequence folds into the target structure.\n8. Connections This paper provides a significant incremental improvement to the AIDD field by offering a principled framework for applying RL to protein design. It doesn’t enable fundamentally new capabilities but provides crucial insights into how to effectively use existing RL techniques with PLMs. The research connects to broader AIDD by:\nEstablishing guidelines for when and how to apply RL in protein design pipelines Providing diagnostic tools (like ESR) to evaluate RL training effectiveness Demonstrating the importance of reward model quality in biological applications Offering practical guidance for resource allocation in RL-based protein engineering 9. Note The method presented in this paper has been open-sourced. Implementation is available at github (specific repository URL not provided in the document).",
    "description": "daily summary of latest AIDD literature",
    "tags": [
      "Reinforcement Learning",
      "Protein Language Models",
      "Antibody Engineering",
      "De Novo Design",
      "Direct Preference Optimization"
    ],
    "title": "What Protein Language Models Learn During RL Fine-Tuning",
    "uri": "/blog/20251006/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Fitness Landscape",
    "uri": "/tags/fitness-landscape/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Blogs",
    "content": "1. Summary Paper Title: From Supervision to Exploration: What Does Protein Language Model Learn During Reinforcement Learning?\nJournal: arXiv preprint\nPublish Date: October 2, 2025\nDOI: arXiv:2510.01571v1\nResearch Groups: The Chinese University of Hong Kong, Peking University, Stanford University, University of Pennsylvania, Nanjing University, National University of Singapore, University of Illinois Urbana-Champaign, Toyota Technological Institute at Chicago\nCentral Hypothesis: The study investigates whether reinforcement learning (RL)-enhanced protein language models (PLMs) can transcend their pre-training limitations and identify implicit sequence-structure-function relationships not explicitly encoded in foundational datasets. The researchers hypothesized that RL’s effectiveness is governed by a three-factor interaction: task difficulty, reward model accuracy, and policy capacity.\n2. Innovations Key Technical Innovations:\nThree-Factor Framework: Introduced a novel conceptual framework where RL effectiveness depends on the interaction between task difficulty (ruggedness of fitness landscape), reward accuracy (signal-to-noise ratio), and policy capacity (model size and representational power) Unified Evaluation Protocol: Developed comprehensive evaluation metrics including Expansion-Shrinkage Ratio (ESR) to quantify knowledge gain/loss during RL training Multi-Algorithm Comparison: Systematically compared three RL algorithms (DPO, PPO, GRPO) across diverse protein design tasks Support Metric Analysis: Introduced shrinkage, expansion, and preservation metrics to analyze how RL changes model capabilities Conceptual Innovations:\nBeyond Supervised Learning: Demonstrated that RL enables exploration beyond interpolation within existing sequence-function mappings Task-Dependent RL Efficacy: Showed that RL gains scale when rewards are accurate, policies have sufficient capacity, and tasks present headroom beyond supervised learning Exploration-Exploitation Tradeoff: Provided quantitative evidence of RL’s tendency to focus on high-reward regions at the cost of diversity 3. Applications Drug Discovery Applications:\nAntimicrobial Peptide Design: RL-enhanced models can discover novel AMPs with lower minimum inhibitory concentration (MIC) values, potentially leading to new antibiotics Antibody Optimization: Improved antibody binding affinity through targeted mutations in CDR regions, enabling development of more effective therapeutic antibodies Kinase Engineering: Optimization of enzyme activity for industrial and therapeutic applications through multi-step mutation strategies Biological Research Applications:\nProtein Inverse Folding: More efficient generation of sequences that fold into target structures, accelerating protein design experiments Fitness Landscape Exploration: Systematic exploration of protein sequence spaces to identify functional regions not accessible through supervised learning alone Multi-objective Optimization: Simultaneous optimization of multiple protein properties (e.g., stability, activity, specificity) through reward function design Specific Examples:\nGRPO algorithm discovered AMPs with several-fold higher activity than wild-type RL models achieved pass@k of 1.0 for antibody H3 and L1 sites, indicating perfect sampling efficiency Generated kinase variants with peak fitness scores of 133 compared to 70 for base models 4. Limitations \u0026 Future Work Acknowledged Limitations:\nDiversity Reduction: RL training often reduces sequence diversity as models focus on high-reward regions Reward Model Accuracy: Current reward models have limited accuracy (e.g., Spearman correlation of 0.47 for antibody binding affinity) Policy Capacity Constraints: Suboptimal policy model initialization limits exploration capabilities Task-Specific Challenges: Difficult tasks like antibody H1 and L3 optimization showed limited improvement (convergence to 0.67 pass@k) Future Directions:\nExtended Architectures: Apply framework to Diffusion/Flow Matching models and protein structure-sequence co-design Additional RL Algorithms: Explore Monte Carlo Tree Search (MCTS) and other RL approaches Improved Reward Models: Develop more accurate biological reward functions through better experimental integration Capacity Scaling: Investigate larger policy models to enhance exploration capabilities Real-time Experimental Integration: Incorporate experimental feedback directly into RL loops 5. Jargon Breakdown Protein Language Models (PLMs): AI models trained on protein sequences that learn patterns and relationships in protein data, similar to how ChatGPT understands human language but for proteins.\nReinforcement Learning (RL): A type of machine learning where an AI “agent” learns by trial and error, receiving “rewards” for good actions and “penalties” for bad ones, gradually improving its strategy.\nDirect Preference Optimization (DPO): A method that learns from examples of “good” and “bad” protein sequences without needing explicit scoring, like learning from before/after examples.\nPass@k Metric: Measures how often a model generates at least one good solution in k attempts - higher values mean better efficiency at finding working designs.\nFitness Landscape: A concept imagining protein sequences as a mountainous terrain where “higher” points represent better protein functions, and the challenge is finding the highest peaks.\nExpansion-Shrinkage Ratio (ESR): A score showing whether the model is learning new capabilities (ESR \u003e 1) or forgetting existing ones (ESR \u003c 1) during training.\nTM-Score: A measure of how similar a predicted protein structure is to the target structure, with higher scores indicating better matches.\n6. Connections Relationship to AIDD Field: This research represents a foundational advancement rather than an incremental improvement in AI-driven drug discovery (AIDD). It provides:\nNew Capabilities Enabled:\nSystematic RL Framework: Offers the first principled understanding of when and why RL works for protein design Quantitative Guidance: Provides practical metrics (ESR, support analysis) for evaluating RL effectiveness Exploration Beyond Training Data: Enables discovery of novel protein sequences not accessible through supervised learning alone Broader Impact:\nBridges NLP and Biology: Applies insights from language model RL fine-tuning to biological sequences Standardizes Evaluation: Introduces consistent metrics for comparing different RL approaches Informs Resource Allocation: Guides researchers on whether to prioritize reward model improvement, policy scaling, or algorithm selection Position in AIDD Landscape: This work establishes RL as a necessary complement to supervised learning in protein design, particularly for tasks requiring exploration beyond existing data. It moves the field from ad-hoc RL applications to a principled understanding of reinforcement learning’s capabilities and limitations in biological sequence design.",
    "description": "daily summary of latest AIDD literature",
    "tags": [
      "Reinforcement Learning",
      "Protein Language Models",
      "Antibody Engineering",
      "De Novo Design",
      "Fitness Landscape"
    ],
    "title": "How Reinforcement Learning Unlocks Protein Design Potential",
    "uri": "/blog/20251005/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Protein Language Model",
    "uri": "/tags/protein-language-model/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Blogs",
    "content": "1. Summary A trimodal protein language model enables advanced protein searches. Nat Biotechnol. Published online October 2, 2025. doi:10.1038/s41587-025-02836-0\nResearch Group: Westlake University, Hong Kong University of Science and Technology, and independent researchers\nCentral Hypothesis/Goal: The researchers hypothesized that unifying protein sequence, structure, and natural language function descriptions into a single trimodal language model through contrastive learning would enable comprehensive protein searches across and within modalities, overcoming limitations of traditional single-modality tools and providing more accurate functional predictions.\n2. Innovations Technical Innovations:\nFirst trimodal architecture simultaneously processing sequence (via ESM-2), structure (via Foldseek tokenization + BERT), and natural language function (via PubMedBERT) Contrastive learning framework with eight loss functions (six intermodal alignment + two masked language modeling) Massive training dataset of ~40 million protein-text pairs (10× larger than previous models) Maximum inner-product search (MIPS) algorithm enabling billion-scale database searches in seconds Conceptual Innovations:\nMoves beyond homology-based searching to identify functionally similar proteins regardless of evolutionary relationship Enables natural language queries of protein databases (e.g., “find proteins that bind zinc ions”) Supports nine distinct search modalities (sequence↔structure, sequence↔function, structure↔function) Global representation learning overcomes local similarity constraints of traditional alignment tools 3. Applications Drug Discovery:\nIdentifying novel enzyme variants for therapeutic applications (e.g., discovering improved uracil DNA glycosylase variants for base editing) Finding functionally analogous proteins across species for drug target identification Rapid screening of metagenomic databases for novel bioactive compounds Biological Research:\nAnnotating the ~30% of UniProt proteins currently without functional annotations Identifying convergent evolution cases where different sequences/structures perform similar functions Generating hypotheses for experimental validation (as demonstrated with UDG variant discovery) Supporting protein engineering by finding functional templates for AI-designed sequences Specific Example: Researchers used ProTrek to identify novel uracil DNA glycosylase variants that showed higher editing efficiency and lower indel frequencies than existing thymine base editors (TSBE3EK and gTBE) when fused with spCas9n.\n4. Limitations \u0026 Future Work Acknowledged Limitations:\nUnderrepresentation of some protein families may limit fine-grained predictions Less sensitive to subtle sequence variations (similar to AlphaFold2 limitation) Cannot precisely predict specific quantitative values (e.g., fluorescence wavelengths, stability) without specialized fine-tuning Performance on de novo designed proteins may be limited due to training exclusively on natural proteins Future Directions:\nExpand to encompass entire global protein data (targeting 10 billion protein search capacity) Develop specialized versions for quantitative prediction tasks through fine-tuning Integrate with protein design pipelines for inverse folding tasks Enhance multimodal capabilities with additional data types (e.g., expression, interaction data) 5. Jargon Breakdown Trimodal Language Model: An AI system that can understand and process three different types of information (in this case: protein sequences, 3D structures, and text descriptions) in a unified way.\nContrastive Learning: A training technique where the model learns to bring similar things closer together and push different things apart in its internal representation space.\nMaximum Inner-Product Search (MIPS): A fast algorithm for finding the most similar items in huge databases by calculating mathematical similarities between their numerical representations.\nConvergent Evolution: When different proteins evolve independently to perform similar functions, despite having different sequences and structures.\nHomology-based Searching: The traditional method of finding similar proteins by looking for evolutionary relationships and sequence similarities.\n3Di Sequences: A way of representing protein 3D structures as text-like sequences that can be processed by language models.\n6. Connections Relation to AIDD: ProTrek represents a significant advancement in AI-driven drug discovery by enabling functional protein searching at unprecedented scale and cross-modal flexibility. It bridges the gap between traditional bioinformatics tools and modern natural language processing.\nCapability Assessment: This is not merely an incremental improvement but enables fundamentally new capabilities:\nNatural language querying of protein databases Identification of functionally similar proteins without sequence/structure homology Unified search across sequence, structure, and function modalities Rapid screening of billion-scale protein databases The model serves as both a specialized tool for protein discovery and a general-purpose foundation for downstream AIDD applications, potentially accelerating target identification, lead optimization, and protein engineering pipelines.",
    "description": "daily summary of latest AIDD literature",
    "tags": [
      "Protein Language Model"
    ],
    "title": "ProTrek: Trimodal AI Unlocks Advanced Protein Discovery",
    "uri": "/blog/20251004/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Blogs",
    "content": "1. Summary Paper Title: De novo design of phospho-tyrosine peptide binders\nJournal: bioRxiv (preprint)\nPublish Date: September 30, 2025\nDOI: https://doi.org/10.1101/2025.09.29.678898\nResearch Group/Institution: Institute for Protein Design, University of Washington (Baker Lab)\nCentral Hypothesis/Goal: The researchers hypothesized that their previously developed RoseTTAFold Diffusion 2 (RFD2) framework could be extended to design protein binders that specifically recognize phosphorylated tyrosine (pY) residues in unstructured peptide regions, addressing a major gap in our ability to probe phosphorylation-dependent signaling pathways.\n2. Innovations Key Technical Innovations:\nDevelopment of RFD2 for Molecular Interfaces (RFD2-MI): A specialized version of RFD2 trained on interface-focused datasets with enhanced conditioning capabilities 1D feature conditioning: Incorporation of per-residue features (hotspot masks, secondary structure, solvent accessibility) that guide interface formation during diffusion All-atom diffusion framework: Simultaneous generation of binder backbone and target peptide coordinates with atomic precision Integration with Logos pipeline: Combined approach for designing binders to both structured and disordered regions Conceptual Innovations:\nFirst general framework for designing binders to post-translationally modified proteins (specifically phosphorylated targets) Ability to design specificity for both phosphorylation state AND flanking sequence context (dual specificity) Demonstration that de novo designed proteins can achieve specificity rivaling or exceeding natural binding domains (SH2 domains) 3. Applications Real-World Applications:\nCancer Research \u0026 Therapeutics:\nTargeted inhibition of oncogenic signaling: Designed binders for EGFR pY1068 and pY1173 could disrupt growth factor signaling in cancers Immune modulation: CD3ε pY188 binders could potentially modulate T-cell activation for immunotherapy applications Diabetes Research:\nINSR pY1361 binders could help study insulin receptor signaling dynamics and develop new diabetes therapeutics Basic Research Tools:\nPhosphorylation-specific biosensors for live-cell imaging of signaling events Precision tools for mapping phosphorylation dynamics in specific pathways Reagents that distinguish between closely related phosphosites (overcoming antibody limitations) Drug Discovery:\nStarting points for developing small molecule inhibitors targeting phosphorylation-dependent interactions Modular components for PROTACs or other targeted degradation approaches 4. Limitations \u0026 Future Work Acknowledged Limitations:\nLow success rates (\u003c0.1% of designs were functional binders) Modest binding affinities (best Kd ~577 nM, most in micromolar range) Greater challenge achieving phosphorylation specificity versus sequence specificity Computational expense of the design pipeline Suggested Future Directions:\nOptimize phosphate interaction design to improve affinity and specificity Extend approach to other PTMs (methylation, acetylation, glycosylation) Incorporate multi-modal training data (chemical, structural, dynamic information) Improve success rates through better modeling of desolvation penalties Develop binders that function inside living cells Apply to broader range of therapeutic targets 5. Jargon Breakdown Phosphorylation: A chemical modification where a phosphate group is added to proteins (often to tyrosine, serine, or threonine residues), acting like a molecular switch that turns proteins on/off.\nDe novo design: Creating entirely new protein structures from scratch (not based on existing natural proteins).\nDiffusion model: A type of AI that learns to generate structures by reversing a process of adding noise (similar to how AI image generators work, but for 3D molecular structures).\nPost-translational modification (PTM): Chemical changes to proteins after they’re made by the cell, including phosphorylation, methylation, acetylation, etc.\nHotspot mask: A computational guide that tells the AI which parts of the target are most important for binding.\nBiolayer interferometry (BLI): A technique that measures how strongly two molecules bind together by detecting changes in light interference patterns.\nKd (Dissociation constant): A measure of binding strength - lower numbers mean tighter binding (nM is better than μM).\n6. Connections to AIDD Relationship to AIDD Field: This work represents a significant capability expansion rather than an incremental improvement. While previous AI-driven drug discovery (AIDD) methods could design binders to unmodified proteins, this is the first general approach for designing binders to post-translationally modified targets.\nNew Capabilities Enabled:\nAccess to “undruggable” targets: Many phosphorylation sites occur in disordered regions that lack structured pockets for conventional drug binding Precision targeting: Ability to distinguish between different phosphorylation states of the same protein Novel scaffold generation: Not limited to antibody architectures or natural binding domains Broader Impact: This work bridges the gap between structure-based drug design and PTM biology, enabling systematic targeting of modified protein states that are critical in disease but previously difficult to address. It demonstrates how AI methods can tackle challenges that have resisted conventional approaches, potentially opening up new target classes for therapeutic intervention.",
    "description": "daily summary of latest AIDD literature",
    "tags": [
      "Antibody",
      "De Novo Design"
    ],
    "title": "AI Designs First Phospho-Specific Protein Binders",
    "uri": "/blog/20251003/index.html"
  },
  {
    "breadcrumb": "Learn Latest AIDD \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Antibody",
    "uri": "/tags/antibody/index.html"
  }
]
