---
title:  "First impressions with Fe, Ni, Co"
mathjax: true
layout: post
categories:
  - github
  - website
---

The Birch-Murnaghan equation of state was used in order to determines the lattice parameter which would minimize the ground state energy [Physical Review, 71(11):809–824][Francis-Birch].

$$ \scriptsize{E(V)=E_0+\frac{9V_0B_0}{16}\Bigg\{\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^3B'_0+\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^2\Bigg[6-4\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}\Bigg] \Bigg\}}$$ 





Here, the fit parameters E$$_0$$, V$$_0$$, B$$_0$$ and B$$'_0$$ are the energy at the minimum, the equilibrium volume, 
the bulk modulus at the equilibrium and the derivative of the bulk modulus with respect to pressure, respectively. 
The bulk modulus is the relative change in the volume of a material provoked by an increase in pressure uniformly over all their surfaces.

$$ B_0=\pdv{P}{V} \Bigg |_{V=V_0}=V_0\pdv{^2E}{V^2} \Bigg |_{V=V_0} $$

First calculations were performed using the Vienna Ab-initio package (VASP) with the GGA functional parameterized by Perdew-Burke-Ernzerhof (PBE) 
\cite{PhysRevLett.77.3865} and the LDA functional parameterized by Ceperley-Alder (CA) \cite{PhysRevLett.45.566}. 
A k-mesh of 11$$\times$$11$$\times$$11 was used to integrate the density of states and a fixed 500 eV plane-wave kinetic energy cutoff was set on the calculation. 
The electrons considered as valence were 3p$$^{6}$$3d$$^{7}$$4s$$^{1}$$ for Fe,  3p$$^{6}$$3d$$^{8}$$4s$$^{1}$$ for Co (Co) and 3p$$^{6}$$3d$$^{9}$$4s$$^{1}$$ for Ni. 
Tetrahedron method with Bl$$\ddot{o}$$chl Blöch corrections \cite{PhysRevB.49.16223} was used since it provides highly accurate descriptions for bulk materials, 
according to Kresse et al. \cite{Kresse2018}. The convergence criteria for total energy was 10$$^{-6}$$ eV for each self-consistent cycle. 
Table \ref{table:idk} shows the experimental lattice parameters used to perform each calculation and reports the volume ($$\overset{\lower.5em\circ}{\mathrm{A}}^3$$/atom), 
Birch-Murnaghan modulus (GPa) and magnetic moment ($$\mu_B$$/atom) obtained. 
Other computational studies on this three ferromagnetic metals already had been performed and compared to its experimental ones. 
Our calculations seems to agree with both studies. GGA functional seems to be a better representation of the volume. 
Although LDA underestimates the volume of the three ferromagnets, it over estimates the bulk modulus, not being a better representation than GGA again. 
On the other side, LDA seems to represent better the magnetic moment of face-centered cubic (fcc) Nickel and body-centered cubic (bcc) Iron while the hexagonal close-packed (hcp) Cobalt is better represented by the GGA functional calculation.

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[Francis-Birch]: https://journals.aps.org/pr/abstract/10.1103/PhysRev.71.809
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

Å and ö
