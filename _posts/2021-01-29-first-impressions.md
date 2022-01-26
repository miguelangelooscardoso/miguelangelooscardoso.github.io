---
title:  "First impressions with Fe, Ni, Co"
mathjax: true
layout: post
categories:
  - github
  - website
---

The Birch-Murnaghan equation of state was used in order to determines the lattice parameter which would minimize the ground state energy [Physical Review, 71(11):809–824][Birch] and [Proceedings of the National Academy of Science, 30(9):244–247][Murnaghan].

$$ \scriptsize{E(V)=E_0+\frac{9V_0B_0}{16}\Bigg\{\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^3B'_0+\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^2\Bigg[6-4\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}\Bigg] \Bigg\}}$$ 





Here, the fit parameters E$$_0$$, V$$_0$$, B$$_0$$ and B'$$_0$$ are the energy at the minimum, the equilibrium volume, 
the bulk modulus at the equilibrium and the derivative of the bulk modulus with respect to pressure, respectively. 
The bulk modulus is the relative change in the volume of a material provoked by an increase in pressure uniformly over all their surfaces.

$$ \scriptsize{B_0=\frac{\partial{P}}{\partial{V}} \Bigg|_{V=V_0}=V_0\frac{\partial{^2E}}{\partial{V^2}} \Bigg|_{V=V_0}} $$

First calculations were performed using the Vienna Ab-initio package (VASP) with the GGA functional parameterized by Perdew-Burke-Ernzerhof (PBE) 
[Phys. Rev. Lett., 77:3865–3868][PBE] and the LDA functional parameterized by Ceperley-Alder (CA) [Phys. Rev. Lett., 45:566–569][LDA]. 
A k-mesh of 11$$\times$$11$$\times$$11 was used to integrate the density of states and a fixed 500 eV plane-wave kinetic energy cutoff was set on the calculation. 
The electrons considered as valence were 3p$$^{6}$$3d$$^{7}$$4s$$^{1}$$ for Fe,  3p$$^{6}$$3d$$^{8}$$4s$$^{1}$$ for Co (Co) and 3p$$^{6}$$3d$$^{9}$$4s$$^{1}$$ for Ni. 
Tetrahedron method with Blöch corrections [Phys. Rev. B, 49:16223–16233][Blöch] was used since it provides highly accurate descriptions for bulk materials, 
according to [VASP the GUIDE][VASP]  written by Georg Kresse and Jürgen Furthmüller. The convergence criteria for total energy was 10$$^{-6}$$ eV for each self-consistent cycle. 

Table shows the experimental lattice parameters used to perform each calculation and reports the volume (Å$$^3$$/atom), 
Birch-Murnaghan modulus (GPa) and magnetic moment ($$\mu_B$$/atom) obtained. 
Other computational studies on this three ferromagnetic metals already had been performed and compared to its experimental ones. 
Our calculations seems to agree with both studies. GGA functional seems to be a better representation of the volume. 
Although LDA underestimates the volume of the three ferromagnets, it over estimates the bulk modulus, not being a better representation than GGA again. 
On the other side, LDA seems to represent better the magnetic moment of face-centered cubic (fcc) Nickel and body-centered cubic (bcc) Iron while the hexagonal close-packed (hcp) Cobalt is better represented by the GGA functional calculation.

[Birch]: https://journals.aps.org/pr/abstract/10.1103/PhysRev.71.809
[Murnaghan]:   https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1078704/
[PBE]: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.77.3865
[LDA]: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.45.566
[Blöch]: https://journals.aps.org/prb/abstract/10.1103/PhysRevB.49.16223
[VASP]: http://wolf.ifj.edu.pl/workshop/work2008/tutorial/vasp.pdf
