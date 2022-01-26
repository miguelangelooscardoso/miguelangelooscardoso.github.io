---
title:  "Our New Post"
mathjax: true
layout: post
categories:
  - github
  - website
---

The Birch-Murnaghan equation of state was used in order to determines the lattice parameter which would minimize the ground state energy \cite{1947PhRv...71..809B, 1944PNAS...30..244M}. 

$$ E(V)=E_0+\frac{9V_0B_0}{16}\Bigg\{\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^3B'_0+\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^2\Bigg[6-4\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}\Bigg] \Bigg\}$$


Here, the fit parameters $$E_0$$, $$V_0$$, $$B_0$$ and $$B'_0$$ are the energy at the minimum, the equilibrium volume, 
the bulk modulus at the equilibrium and the derivative of the bulk modulus with respect to pressure, respectively. 
The bulk modulus is the relative change in the volume of a material provoked by an increase in pressure uniformly over all their surfaces.

$$B_0=\pdv{P}{V} \Bigg|_{V=V_0}=V_0\pdv{^2E}{V^2} \Bigg|_{V=V_0}$$

First calculations were performed using the Vienna Ab-initio package (VASP) with the GGA functional parameterized by Perdew-Burke-Ernzerhof (PBE) 
\cite{PhysRevLett.77.3865} and the LDA functional parameterized by Ceperley-Alder (CA) \cite{PhysRevLett.45.566}. 
A k-mesh of $$11\times11\times11$$ was used to integrate the density of states and a fixed 500 eV plane-wave kinetic energy cutoff was set on the calculation. 
The electrons considered as valence were $$3p^{6}3d^{7}4s^{1}$$ for Fe,  $$3p^{6}3d^{8}4s^{1}$$ for Co (Co) and $$3p^{6}3d^{9}4s^{1}$$ for Ni. 
Tetrahedron method with Bl\"ochl corrections \cite{PhysRevB.49.16223} was used since it provides highly accurate descriptions for bulk materials, 
according to Kresse et al. \cite{Kresse2018}. The convergence criteria for total energy was $$10^{-6}$$ eV for each self-consistent cycle. 
Table \ref{table:idk} shows the experimental lattice parameters used to perform each calculation and reports the volume ($$\AA^3$$/atom), 
Birch-Murnaghan modulus (GPa) and magnetic moment ($$\mu_B$$/atom) obtained. 
Other computational studies on this three ferromagnetic metals already had been performed and compared to its experimental ones. 
Our calculations seems to agree with both studies. GGA functional seems to be a better representation of the volume. 
Although LDA underestimates the volume of the three ferromagnets, it over estimates the bulk modulus, not being a better representation than GGA again. 
On the other side, LDA seems to represent better the magnetic moment of face-centered cubic (fcc) Nickel and body-centered cubic (bcc) Iron while the hexagonal close-packed (hcp) Cobalt is better represented by the GGA functional calculation.
