---
title:  "Structural optimizations in SPR-KKR and VASP"
mathjax: true
layout: post
categories:
  - github
  - website
---

The Vienna Ab initio Simulation Package and the Munich Spin-Polarized Relativistic Korringa-Kohn-Rostoker package use different approaches to calculate the ground state energy of a structure. Even without an ionic relaxation is still important to perform an electronic relaxation before we calculate some of its properties such as its exchange–correlation energies. Beyond that, we can compare the obtained results to the well known experimental properties of the crystalline structure. Variations of 1% from -10% to +10% of the experimental [Keshavarz et al.](https://doi.org/10.1016/j.jallcom.2018.07.298) volume and c/a were applied using SPR-KKR. The LDA functional (at the left) could not predict the ground state. Trying the GGA functional (at the right) we reach the conclusion that SPR-KKR amy not be tthe best option to optimize the D0$$_{19}$$ Fe$$_{2}$$MnGe structure

<p align="center">
  <img src="/assets/SPRKKR_LDA.jpg" width="49%" />
  <img src="/assets/SPRKKR_PBE.jpg" width="49%" /> 
  <caption style="text-align:center">My savings</caption>
</p>

<p align="center">
  <img src="/assets/VASP_LDA.jpg" width="49%" />
  <img src="/assets/VASP_PBE.jpg" width="49%" /> 
</p>

Structural optimizations with (a) SPR-KKR with LDA (b) SPR-KKR with GGA (c) VASP with LDA (d) VASP with GGA

The figure shows SPR-KKR structural parameters optimization above and VASP below. At left, optimizations were made using LDA and at right using GGA. With SPR-KKR no energy minimum was found, however with VASP absolute minimums were found to (0.86,1.00) and (0.96,1.00) with LDA and GGA, respectively. While c/a is approximately equal to the experimental one reported by [Keshavarz et al.](https://doi.org/10.1016/j.jallcom.2018.07.298), volume is too far away from it in the LDA case. Therefore, the optimized volumes are V$^{GGA}$=96.1\AA$^{3}$ and V$^{LDA}$=86.1 \AA$^{3}$. 
