+++
date = '2025-10-04T15:00:28+08:00'
draft = true
title = 'De novo design of phospho-tyrosine peptide binders'
authors = ["Michael Yu"]
categories = ["literature review"]
tags = ["antibody", "de novo design"]
description = "daily summary of latest AIDD literature"
+++

## 1. Research Summary

### Research Group
This work was led by researchers from the **Institute for Protein Design** at the **University of Washington**, with key contributors including David Baker (a corresponding author and leader in computational protein design), Frank DiMaio, and a large team of scientists. The group has extensive expertise in de novo protein design, as evidenced by their development of tools like Rosetta, RoseTTAFold, and RFdiffusion.

### Main Points
- **Problem**: Phosphorylation is a critical post-translational modification (PTM) in cell signaling, but designing specific binders to phosphorylated targets (especially in unstructured regions) is extremely challenging
- **Solution**: Developed **RoseTTAFold Diffusion 2 for Molecular Interfaces (RFD2-MI)**, a deep learning framework for de novo design of protein binders
- **Targets**: Applied to phosphotyrosine (pY) sites on three clinically relevant targets:
  - **CD3ε** (T-cell receptor)
  - **EGFR** (cancer oncogene) 
  - **INSR** (insulin receptor)
- **Results**: Designed binders showed:
  - High affinity (Kd values from nM to μM range)
  - Specificity for phosphorylated targets over non-phosphorylated versions
  - Sequence specificity (no binding to other phosphopeptides)
- **Validation**: X-ray crystal structures closely matched computational models (low RMSD)

## 2. Key Innovations

- **First general method** for de novo design of phospho-specific binders
- **RFD2-MI framework** with 1D conditioning features (hotspot masks, secondary structure cues)
- **Handles intrinsic disorder** by co-diffusing binder and flexible peptide target
- **Novel binding motifs** beyond natural phospho-binding domains (e.g., SH2 domains)
- **Dual specificity**: Distinguishes both phosphorylation status and sequence context

## 3. Potential Applications

- **Basic Research & Diagnostics**: Create specific reagents to detect and manipulate phosphorylation events in living cells
- **Targeted Therapeutics**: Develop drugs targeting pathogenic phospho-sites (e.g., cancer, diabetes)
- **Platform Technology**: Generalizable to other PTMs (methylation, acetylation, ubiquitination)
- **Protein Engineering**: Accelerate protein design for biocatalysis, biosensing, and biomaterials

## 4. Key Terminology

| Term | Definition |
|------|------------|
| **De novo design** | Designing proteins "from scratch" without copying natural templates |
| **Post-Translational Modification (PTM)** | Chemical modifications added after protein synthesis (e.g., phosphorylation) |
| **Phosphotyrosine (pY)** | Tyrosine residue with added phosphate group |
| **RoseTTAFold Diffusion (RFD2)** | Deep learning algorithm using diffusion process for structure generation |
| **Hotspot Mask** | Computational label identifying critical target residues for binding |
| **Biolayer Interferometry (BLI)** | Technique measuring real-time binding interactions to determine affinity |
| **Dissociation Constant (Kd)** | Measure of binding affinity (lower = tighter binding) |
| **Yeast Surface Display** | Screening technique displaying protein variants on yeast surface |
| **Root-Mean-Square Deviation (RMSD)** | Measure of structural similarity between models |
| **AlphaFold3 (AF3)** | AI system for predicting protein complex structures |
| **LigandMPNN** | AI tool for designing protein sequences optimized for function |
