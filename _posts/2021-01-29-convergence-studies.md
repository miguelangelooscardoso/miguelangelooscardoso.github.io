---
title:  "Convergence studies"
mathjax: true
layout: post
categories:
  - github
  - website
---

Figure 1. shows a result from a fast calculation performed with a mesh grid 5 × 5 × 5 and a cut-off energy of 350 eV.

<p align="center">
  <img src="/assets/bcc_Fe_LDA.eps" width="32%" />
  <img src="/assets/fcc_Ni_LDA.eps" width="32%" /> 
  <img src="/assets/hcp_Co_LDA.eps" width="32%" />
</p>

{:.mycenter}
Figure 1. Structural differences resulted from different functional approaches.

<style>
.mycenter {
    text-align:center;
}
</style>

The exchange-correlation functionals play an important role on determining the structural dimensions of the selected structures. Figure 3.4 shows again the GGA tends to overestimate the volume obtained with LDA. On the other side, potentials are also of a huge importance. According to Kresse et al. [11], the semi-core s and p states should be treated as valence states for d-elements (Fe, Ni and Co). Although reliable results can be achieved if the semi- core states are kept frozen. As long as it does not take too much computational time the first option is always preferred. A fast calculation involving all available pseudopotentials was performed using GGA. Figure 3.5 shows that the pseudopotential choice has implication on the energy per atom.

<p align="center">
  <img src="/assets/Fe_pseudo.eps" width="32%" />
  <img src="/assets/Ni_pseudo.eps" width="32%" /> 
  <img src="/assets/Co_pseudo.eps" width="32%" />
</p>

{:.mycenter}
Figure 2. Peudopotentials implications on the energy per atom (eV).

<style>
.mycenter {
    text-align:center;
}
  
The extensions sv and pv mean that s and p semi-core states are treated as valence states. Other particularities such as Wigner-Seitz radius, the minimum and maximum energy for which the density of states is calculated are important to determine whether or not a pseudopotential is a good choice. 

The right choice of the smearing method should contemplate a correct description of the properties of the system. Figure 3.6 shows Gaussian smearing (0), Fermi smearing (−1) and Tetrahedron method with Bl ̈ochl corrections (−5) for each one of the structures previously considered. Structural properties are not changed by the method choice. However, the total energy per atom can slightly vary.  
  