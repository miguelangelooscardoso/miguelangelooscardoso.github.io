---
title:  "Convergence studies"
mathjax: true
layout: post
categories:
  - github
  - website
---

A fast ab initio calculation with the LDA and GGA functionals was performed with a mesh grid 5 × 5 × 5 and a cut-off energy of 350 eV on bcc iron, fcc nickel and hcp cobalt as you can see in the following images.

<p align="center">
   <img src="/assets/Bcc_Fe_LDA.jpg" width="32%" />
   <img src="/assets/Fcc_Ni_LDA.jpg" width="32%" /> 
   <img src="/assets/Hcp_co_LDA.jpg" width="32%" />
</p>



The exchange-correlation functionals play an important role on determining the structural dimensions of the selected structures. The figures bellow show us  again that the GGA functional tends to overestimate the volume obtained compared to the LDA. On the other side, potentials are also of a hugely importance! According to [Kresse et al.](https://www.smcm.iqfr.csic.es/docs/vasp/), the semi-core s and p states should be treated as valence states for d-elements (Fe, Ni and Co). Although reliable results can be achieved if the semi- core states are kept frozen. As long as it does not take too much computational time the first option is always preferred. A fast calculation involving all available pseudopotentials was performed using GGA. The pseudopotential choice has an impact on the energy per atom as we can see bellow.

<p align="center">
  <img src="/assets/Fe_pseudo.jpg" width="32%" />
  <img src="/assets/Ni_pseudo.jpg" width="32%" /> 
  <img src="/assets/Co_pseudo.jpg" width="32%" />
</p>
  
The extensions sv and pv mean that s and p semi-core states are treated as valence states. Other particularities such as Wigner-Seitz radius, the minimum and maximum energy for which the density of states is calculated are important to determine whether or not a pseudopotential is a good choice. 

The right choice of the smearing method should contemplate a correct description of the properties of the system. The following figures show us the Gaussian smearing (0), Fermi smearing (−1) and Tetrahedron method with Blöchl corrections (−5) for each one of the structures previously considered. Structural properties are not changed by the method choice. However, the total energy per atom can slightly vary.  
  
<p align="center">
  <img src="/assets/Smear_bccFe_.jpg" width="32%" />
  <img src="/assets/Smear_fccNi_.jpg" width="32%" /> 
  <img src="/assets/Smear_hcpCo_.jpg" width="32%" />
</p>



Experimentally it is known how those metals are ordered, however it is of good sense to confirm it. The optimization of the lattice considering three of the most common crystal structures: body-centered cubic, face-centered cubic and hexagonal close-packed. As expected bcc Fe, fcc Ni and hcp Co are the most stable crystal systems.  
  
<p align="center">
  <img src="/assets/Struct_Fe.jpg" width="32%" />
  <img src="/assets/Struct_Ni.jpg" width="32%" /> 
  <img src="/assets/Struct_Co.jpg" width="32%" />
</p>


  
Another thing worth verifying is their ferromagnetism. Therefore, those metals are confirmed experimentally to be ferromagnets (FM). Antiferromagnetic (AFM) and non-magnetic (NM) configurations seems to be less stable.
  


<p align="center">
  <img src="/assets/BccFe_M.jpg" width="32%" />
  <img src="/assets/FccNi_M.jpg" width="32%" /> 
  <img src="/assets/HcpCo_M.jpg" width="32%" />
</p>

