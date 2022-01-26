---
title:  "Our New Post"
mathjax: true
layout: post
categories:
  - github
  -  website
---


<figure>
  <img src="{{site.url}}/assets/smear_fccNi_.eps" alt="my alt text"/>
  <figcaption>Figure 1.1: This is my caption text.</figcaption>
</figure>

Solarized dark                      |  Solarized Ocean                    | Solarized light                   |
:----------------------------------:|:------------------------------------:-----------------------------------:
![title](/assets/smear_fccNi_.eps)  |  ![title](/assets/smear_hcpCo_.eps) |![title](/assets/smear_bccFe_.eps) |

{:.mycenter}
That is, while there is value in the items on
the right, we value the items on the left more.

<style>
.mycenter {
    text-align:center;
}
</style>

![title](/assets/smear_fccNi_.eps)![title](/assets/smear_hcpCo_.eps)![title](/assets/smear_bccFe_.eps)

![title](/assets/Birch-Murnaghan.png)

<p align="center">
  <img src="/assets/smear_fccNi_.eps" width="32%" />
  <img src="/assets/smear_hcpCo_.eps" width="32%" /> 
  <img src="/assets/smear_bccFe_.eps" width="32%" />
<br>
  <figcaption> Figure 1.1: This is my caption text.</figcaption>
</p>


\section{Convergence studies}

The Birch-Murnaghan equation of state was used in order to determines the lattice parameter which would minimize the ground state energy \cite{1947PhRv...71..809B, 1944PNAS...30..244M}. 


$$E(V)=E_0+\frac{9V_0B_0}{16}\Bigg\{\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^3B'_0+\Bigg[\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}-1\Bigg]^2\Bigg[6-4\Bigg(\frac{V_0}{V}\Bigg)^\frac{2}{3}\Bigg] \Bigg\}$$


Here, the fit parameters $E_0$, $V_0$, $B_0$ and $B'_0$ are the energy at the minimum, the equilibrium volume, the bulk modulus at the equilibrium and the derivative of the bulk modulus with respect to pressure, respectively. The bulk modulus is the relative change in the volume of a material provoked by an increase in pressure uniformly over all their surfaces.

$$B_0=\pdv{P}{V} \Bigg|_{V=V_0}=V_0\pdv{^2E}{V^2} \Bigg|_{V=V_0}$$


First calculations were performed using the Vienna Ab-initio package (VASP) with the GGA functional parameterized by Perdew-Burke-Ernzerhof (PBE) \cite{PhysRevLett.77.3865} and the LDA functional parameterized by Ceperley-Alder (CA) \cite{PhysRevLett.45.566}. A k-mesh of $11\times11\times11$ was used to integrate the density of states and a fixed 500 eV plane-wave kinetic energy cutoff was set on the calculation. The electrons considered as valence were $3p^{6}3d^{7}4s^{1}$ for Fe,  $3p^{6}3d^{8}4s^{1}$ for Co (Co) and $$3p^{6}3d^{9}4s^{1}$$ for Ni. Tetrahedron method with Bl$$\"o$$chl corrections \cite{PhysRevB.49.16223} was used since it provides highly accurate descriptions for bulk materials, according to Kresse et al. \cite{Kresse2018}. The convergence criteria for total energy was $10^{-6}$ eV for each self-consistent cycle. Table \ref{table:idk} shows the experimental lattice parameters used to perform each calculation and reports the volume (\AA$^3$/atom), Birch-Murnaghan modulus (GPa) and magnetic moment ($\mu_B$/atom) obtained. Other computational studies on this three ferromagnetic metals already had been performed and compared to its experimental ones. Our calculations seems to agree with both studies. GGA functional seems to be a better representation of the volume. Although LDA underestimates the volume of the three ferromagnets, it over estimates the bulk modulus, not being a better representation than GGA again. On the other side, LDA seems to represent better the magnetic moment of face-centered cubic (fcc) Nickel and body-centered cubic (bcc) Iron while the hexagonal close-packed (hcp) Cobalt is better represented by the GGA functional calculation.

## Table

| Title 1          | Title 2          | Title 3         | Title 4         |
|------------------|------------------|-----------------|-----------------|
| First entry      | Second entry     | Third entry     | Fourth entry    |
| Fifth entry      | Sixth entry      | Seventh entry   | Eight entry     |
| Ninth entry      | Tenth entry      | Eleventh entry  | Twelfth entry   |
| Thirteenth entry | Fourteenth entry | Fifteenth entry | Sixteenth entry |

<style type="text/css">
.tg  {border:none;border-collapse:collapse;border-spacing:0;}
.tg td{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;
  padding:10px 5px;word-break:normal;}
.tg th{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-3xi5{background-color:#ffffff;border-color:inherit;text-align:center;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-3xi5" colspan="2"></th>
    <th class="tg-3xi5">Volume (\AA^3/atom)</th>
    <th class="tg-3xi5">B_0 (GPa)</th>
    <th class="tg-3xi5">mag. moment (\mu_B/atom)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-3xi5">bcc Fe</td>
    <td class="tg-3xi5">PBE</td>
    <td class="tg-3xi5">11.44, 11.35\tnote{a}</td>
    <td class="tg-3xi5">166.9, 197.7\tnote{a}</td>
    <td class="tg-3xi5">2.20, 2.20\tnote{a}</td>
  </tr>
  <tr>
    <td class="tg-3xi5" rowspan="2"></td>
    <td class="tg-3xi5">LDA</td>
    <td class="tg-3xi5">10.47, 10.36\tnote{a}</td>
    <td class="tg-3xi5">202.1, 253.3\tnote{a}</td>
    <td class="tg-3xi5">1.96, 1.95\tnote{a}</td>
  </tr>
  <tr>
    <td class="tg-3xi5">experimental</td>
    <td class="tg-3xi5">11.64\tnote{b}</td>
    <td class="tg-3xi5">175.1\tnote{b}</td>
    <td class="tg-3xi5">1.98\tnote{c} , 2.08\tnote{d}, 2.13\tnote{e}</td>
  </tr>
  <tr>
    <td class="tg-3xi5">fcc Ni</td>
    <td class="tg-3xi5">PBE</td>
    <td class="tg-3xi5">10.94, 10.90\tnote{a}</td>
    <td class="tg-3xi5">194.4, 199.8\tnote{a}</td>
    <td class="tg-3xi5">0.62, 0.63\tnote{a}</td>
  </tr>
  <tr>
    <td class="tg-3xi5" rowspan="2"></td>
    <td class="tg-3xi5">LDA</td>
    <td class="tg-3xi5">10.16, 10.06\tnote{a}</td>
    <td class="tg-3xi5">254.2, 253.6\tnote{a}</td>
    <td class="tg-3xi5">0.57, 0.58\tnote{a}</td>
  </tr>
  <tr>
    <td class="tg-3xi5">experimental</td>
    <td class="tg-3xi5">10.81\tnote{b}</td>
    <td class="tg-3xi5">192.5\tnote{b}</td>
    <td class="tg-3xi5">0.52\tnote{d} , 0.55\tnote{f} , 0.57\tnote{e}</td>
  </tr>
  <tr>
    <td class="tg-3xi5">hcp Co</td>
    <td class="tg-3xi5">PBE</td>
    <td class="tg-3xi5">10.83, 10.45\tnote{a}</td>
    <td class="tg-3xi5">202.3, 262.5\tnote{a}</td>
    <td class="tg-3xi5">1.57, 1.61\tnote{a}</td>
  </tr>
  <tr>
    <td class="tg-3xi5" rowspan="2"></td>
    <td class="tg-3xi5">LDA</td>
    <td class="tg-3xi5">9.97, 9.99\tnote{a}</td>
    <td class="tg-3xi5">245.0, 237.6\tnote{a}</td>
    <td class="tg-3xi5">1.47, 1.49\tnote{a}</td>
  </tr>
  <tr>
    <td class="tg-3xi5">experimental</td>
    <td class="tg-3xi5">10.96\tnote{b}</td>
    <td class="tg-3xi5">198.4\tnote{b}</td>
    <td class="tg-3xi5">1.52\tnote{d} , 1.55\tnote{c} , 1.58\tnote{g}</td>
  </tr>
</tbody>
</table>

{% highlight bash %}

function crossProduct {
  declare -a v1=("${!1}")
  declare -a v2=("${!2}") 

#Note:  Can't pass by reference, so the global variable must be used
  vectResult[0]=$(( (v1[1] * v2[2]) - (v1[2] * v2[1]) ))
  vectResult[1]=$(( - ((v1[0] * v2[2]) - (v1[2] * v2[0])) ))
  vectResult[2]=$(( (v1[0] * v2[1]) - (v1[1] * v2[0]) ))

}

function normalize {
  declare -a v1=("${!1}") 

  fMag=`echo "scale=4; sqrt( (${v1[0]}^2) + (${v1[1]}^2) + (${v1[2]}^2) )" | bc -l`

  vectNormal[0]=`echo "scale=4;${v1[0]} / $fMag" | bc -l`
  vectNormal[1]=`echo "scale=4;${v1[1]} / $fMag" | bc -l`
  vectNormal[2]=`echo "scale=4;${v1[2]} / $fMag" | bc -l`

}

vect1[0]=3
vect1[1]=-3
vect1[2]=1

vect2[0]=4
vect2[1]=9
vect2[2]=2

crossProduct vect1[@] vect2[@]
echo ${vectResult[0]} ${vectResult[1]} ${vectResult[2]}

normalize vectResult[@]
echo ${vectNormal[0]} ${vectNormal[1]} ${vectNormal[2]}


{% endhighlight %}



\begin{table}[h!]
\begin{threeparttable}
 \begin{center}
 \begin{tabular}{ c || c c c c } 
  & & Volume (\AA^3/atom) & B_0 (GPa) & mag. moment (\mu_B/atom)   \\ 
 \hline \hline
bcc Fe & PBE & 11.44, 11.35\tnote{a} & 166.9, 197.7\tnote{a} & 2.20, 2.20\tnote{a} \\ 
& LDA & 10.47, 10.36\tnote{a}  & 202.1, 253.3\tnote{a} & 1.96, 1.95\tnote{a}  \\
& experimental & 11.64\tnote{b} & 175.1\tnote{b}  & 1.98\tnote{c} , 2.08\tnote{d}, 2.13\tnote{e}  \\
\hline
fcc Ni & PBE & 10.94, 10.90\tnote{a} & 194.4, 199.8\tnote{a} & 0.62, 0.63\tnote{a} \\
& LDA & 10.16, 10.06\tnote{a} & 254.2, 253.6\tnote{a} & 0.57, 0.58\tnote{a} \\
& experimental & 10.81\tnote{b}  & 192.5\tnote{b} & 0.52\tnote{d} , 0.55\tnote{f} , 0.57\tnote{e} \\
\hline 
hcp Co & PBE & 10.83, 10.45\tnote{a} & 202.3, 262.5\tnote{a} & 1.57, 1.61\tnote{a} \\ 
& LDA & 9.97, 9.99\tnote{a}  & 245.0, 237.6\tnote{a} & 1.47, 1.49\tnote{a} \\
& experimental & 10.96\tnote{b} & 198.4\tnote{b} & 1.52\tnote{d} , 1.55\tnote{c} , 1.58\tnote{g}  \\
\hline 
 \end{tabular}
 \begin{tablenotes}[para,flushleft]
     \item[a] Ref. \cite{Jonsson}
     \item[b] Ref. \cite{doi:10.1080/10408436.2013.772503} 
     \item[c] Ref. \cite{PhysRevLett.75.152}
     \item[d] Ref. \cite{PhysRev.184.492}
     \item[e] Ref. \cite{LandoltBornstein1997:sm_lbs_978-3-540-44932-4_11}
     \item[f] Ref. \cite{doi:10.1063/1.1708323}
     \item[g] Ref. \cite{PhysRev.136.A195}
   \end{tablenotes}
\caption{Birch-Murnaghan fitted values}
\label{table:idk}
 \end{center}
 \end{threeparttable}
\end{table}


  
Although the previous results are close either to the previous computational studies or experimental results, there are some details in first principle calculations that need a higher attention in order to get the desired results. One of the first things to check is the number of the k-points. The k-points number has an influence both in the structural and in magnetic properties, so first of all the energy has to converge with respect to the mesh size (N). 

\begin{figure}[h]
\centering
\includegraphics[width=.5\textwidth]{energy_kpoints.eps}\hfill
%\includegraphics[width=.33\textwidth]{mag_kpoints.eps}\hfill
\includegraphics[width=.5\textwidth]{cpu_norma_kpoints.eps}
\caption{Left: Energy variation per atom (eV) as a function of mesh size (N). Right: Normalized cpu time as a function of mesh size (N).}
\label{fig:kpoints}
\end{figure}

Figure \ref{fig:kpoints} shows at the left the variation of the energy per atom (eV) as a function of the mesh size (N) in a logarithmic scale. At the right, the cpu times increases exponentially with the mesh size. The optimization of the energy will have an impact in the cpu time required to perform the calculations which means that that is not enough to look at the figure of the variation of the energy per atom and select 10$^{-4}$ or 10$^{-6}$ as a criteria to chose the mesh grid. The sampling of the Brillouin zone relies on its symmetry. Therefore, a more appropriate grid for hexagonal close-packed should be selected according to its dimensions. This fact can have an impact on cpu time. As k-points convergence, cut-off energies should be one of the first things to check. Figure \ref{fig:cutoff} shows the dependence of the energy per atom (eV) as a function of the cut-off energy (eV) in a logarithmic scale.

%The whole energy integration is performed inside the Brillouin zone, thus k-points outside will cost additional cpu time. 


\begin{figure}[h]
\centering
\includegraphics[width=.49\textwidth]{energy_cutoff.eps}\hfill
% \includegraphics[width=.5\textwidth]{mag_cutoff.eps}
\caption{Energy variation per atom (eV) as a function of the cut-off energy (eV)}
\label{fig:cutoff}
\end{figure}

The variation of energy per atom in respect to the number of k-points or cut-off energy is important, however those variations  calculations are not enough to define the accuracy of the magnetic properties. Figure \ref{fig:magprop} shows how the magnetic moment ($\mu_B$) changes in respect to the number of the k-points (at left) and the cut-off energy set (at right). 

\begin{figure}[h]
\centering
\includegraphics[width=.49\textwidth]{mag_kpoints.eps}\hfill
\includegraphics[width=.49\textwidth]{mag_cutoff_.eps}
\caption{Left: Magnetic Moment variation per atom ($\mu_B$) as a function of mesh size (N). Right: Magnetic Moment variation per atom ($\mu_B$) as a function of the cut-off energy (eV).}
\label{fig:magprop}
\end{figure}

\newpage

An energy and a magnetic moment variation per atom of 10$^{-4}$ (0.1 meV) and 10$^{-2}$ (0.01 $\mu_B$) is acceptable for our purposes here. Figures \ref{fig:kpoints} and \ref{fig:cutoff} help us to select the mesh sizes and cut-off energies desired. Then, figure \ref{fig:magprop} confirms that those values respect our criteria for magnetic moment variations. 
As seen in table \ref{table:idk}, exchange correlation functionals display an important role on structural and magnetic properties. Figure \ref{fig:XC} shows a result from a fast calculation performed with a mesh grid $5\times5\times5$  and a cut-off energy of 350 eV.

\begin{figure}[h]
\centering
\advance\leftskip-0.45cm
\includegraphics[width=.36\textwidth]{bcc_Fe_LDA.eps}\hfill
\includegraphics[width=.36\textwidth]{fcc_Ni_LDA.eps}\hfill
\includegraphics[width=.36\textwidth]{hcp_Co_LDA.eps}\hfill
\advance\rightskip-0.8cm
\caption{Structural differences resulted from different functional approaches}
\label{fig:XC}
\end{figure}

The exchange-correlation functionals play an important role on determining the structural dimensions of the selected structures. Figure \ref{fig:XC} shows again the GGA tends to overestimate the volume obtained with LDA. On the other side, potentials are also of a huge importance. According to Kresse et al. \cite{Kresse2018}, the semi-core \textit{s} and \textit{p} states should be treated as valence states for \textit{d}-elements (Fe, Ni and Co). Although reliable results can be achieved if the semi-core states are kept frozen. As long as it does not take too much computational time the first option is always preferred. A fast calculation involving all available pseudopotentials was performed using GGA. Figure \ref{fig:Pseudopotentials} shows that the pseudopotential choice has implication on the energy per atom.

\begin{figure}[h]
\centering
\advance\leftskip-0.45cm
\includegraphics[width=.36\textwidth]{Fe_pseudo.eps}\hfill
\includegraphics[width=.36\textwidth]{Ni_pseudo.eps}\hfill
\includegraphics[width=.36\textwidth]{Co_pseudo.eps}\hfill
\advance\rightskip-0.8cm
\caption{Peudopotentials implications on the energy per atom (eV)}
\label{fig:Pseudopotentials}
\end{figure}

The extensions \_\textit{sv} and \_\textit{pv} mean that \textit{s} and \textit{p} semi-core states are treated as valence states. Other particularities such as Wigner-Seitz radius, the minimum and maximum energy for which the density of states is calculated are important to determine whether or not a pseudopotential is a good choice. 

% \clearpage

The right choice of the smearing method should contemplate a correct description of the properties of the system. Figure \ref{fig:smear} shows Gaussian smearing (0), Fermi smearing ($-1$) and Tetrahedron method with Bl\"ochl corrections ($-5$) for each one of the structures previously considered. Structural properties are not changed by the method choice. However, the total energy per atom can slightly vary. 

\begin{figure}[h]
\centering
\advance\leftskip-0.45cm
\includegraphics[width=.36\textwidth]{smear_bccFe_.eps}\hfill
\includegraphics[width=.36\textwidth]{smear_fccNi_.eps}\hfill
\includegraphics[width=.36\textwidth]{smear_hcpCo_.eps}\hfill
\advance\rightskip-0.8cm
\caption{Smearing implications on the energy per atom (eV)}
\label{fig:smear}
\end{figure}

Experimentally it is known how those metals are ordered, however it is of good sense to confirm it. Figure \ref{fig:struct} shows the optimization of the lattice considering three of the most common crystal structures: body-centered cubic, face-centered cubic and hexagonal close-packed. As expected bcc Fe, fcc Ni and hcp Co are the most stable crystal systems. 

\begin{figure}[h!]
\centering
\advance\leftskip-0.45cm
\includegraphics[width=.36\textwidth]{struct_Fe.eps}\hfill
\includegraphics[width=.36\textwidth]{struct_Ni.eps}\hfill
\includegraphics[width=.36\textwidth]{struct_Co.eps}\hfill
\advance\rightskip-0.8cm
\caption{Crystal structures of Fe, Ni and Co}
\label{fig:struct}
\end{figure}

Another thing worth verifying is their ferromagnetism. Therefore, figure \ref{fig:structure} shows us that those metals are confirmed experimentally to be ferromagnets (FM). Antiferromagnetic (AFM) and non-magnetic (NM) configurations seems to be less stable.

\begin{figure}[h]
\centering
\advance\leftskip-0.45cm
\includegraphics[width=.36\textwidth]{bccFe_M.eps}\hfill
\includegraphics[width=.36\textwidth]{fccNi_M.eps}\hfill
\includegraphics[width=.36\textwidth]{hcpCo_M.eps}\hfill
\advance\rightskip-0.8cm
\caption{Magnetic properties of Fe, Ni and Co}
\label{fig:structure}
\end{figure}

{% highlight bash %}

# Create .pot SCF.inp and JXC.inp D019 Fe2MnGe
SPRPATH=/home/mcardoso

function crossProduct {
    local -n v1=$1
    local -n v2=$2
    local result=()

    # You should remain to use bc because Bash only does integers. 
    result+=($( echo "(${v1[1]} * ${v2[2]}) - (${v1[2]} * ${v2[1]}) " | bc ))
    result+=($( echo "-((${v1[0]} * ${v2[2]}) - (${v1[2]} * ${v2[0]}))" | bc ))
    result+=($( echo "(${v1[0]} * ${v2[1]}) - (${v1[1]} * ${v2[0]})" | bc ))
    echo "${result[@]}"
}

# elements
ele_1=Fe
ele_2=Mn
ele_3=Ge

# Experimental Lattice Parameters (angstrom [Å]) (Zhang)
a_exp=`echo "5.22"|bc -l`
echo $a_exp
b_exp=`echo "sqrt(3)*${a_exp}"|bc -l`
echo $b_exp
c_exp=`echo "4.24"|bc -l`
echo $c_exp

# Experimental Lattice Parameters (atomic units of length [a.u.])
a_exp=`echo "1.8897259885789*${a_exp}"|bc -l`
echo $a_exp
b_exp=`echo "1.8897259885789*${b_exp}"|bc -l`
echo $b_exp
c_exp=`echo "1.8897259885789*${c_exp}"|bc -l`
echo $c_exp

# V_exp was divided by 3
v_exp=`echo "(${a_exp})^2*${c_exp}*sqrt(3)/2"|bc -l` 
echo $v_exp

# Experimental Lattice ratios
ba_exp=$(echo "${b_exp}/${a_exp}"|bc -l)
echo $ba_exp
ca_exp=$(echo "${c_exp}/${a_exp}"|bc -l)
echo $ca_exp

for i in 0.90 0.92 0.94 0.96 0.98 1.00; do

# New Volume
v=`echo "${i}*${v_exp}"|bc -l`
echo $v
mkdir v=${i}v_exp
cd v=${i}v_exp 

for j in 1.00; do

# New ratio c/a
ca=`echo "${j}*${ca_exp}"|bc -l`
echo $ca
mkdir ca=${j}ca_exp
cd ca=${j}ca_exp

# New lattice parameters
a=`echo "e((1/3)*l((2*${v})/(${ca}*sqrt(3))))"|bc -l`
echo $a
b=`echo "sqrt(3)*${a}"|bc -l`
echo $b
c=`echo " ${ca}*${a}"|bc -l`
echo $c

# ratio b/a
ba=`echo "${ba_exp}"|bc -l`
echo $ba

declare -A arr
# first vector
arr1[0,0]=0.5
arr1[0,1]=`echo "0.5*${ba}"|bc`
arr1[0,2]=0
#second vector
arr2[1,0]=-0.5
arr2[1,1]=`echo "0.5*${ba}"|bc`
arr2[1,2]=0
#third vector
arr3[2,0]=0
arr3[2,1]=0
arr3[2,2]=${ca}
echo "${arr1[0,0]} ${arr1[0,1]} ${arr1[0,2]}"  # example

vectResult=($(crossProduct arr2 arr3))
echo ${vectResult[0]} ${vectResult[1]} ${vectResult[2]}

dotProduct=$(echo "${arr1[0,0]}*${vectResult[0]}+${arr1[0,1]}*${vectResult[1]}+${arr1[0,2]}*${vectResult[2]}"|bc -l)
echo $dotProduct

pi=`echo "scale=10; 4*a(1)" | bc -l`

echo $pi

rws=`echo "e((1/3)*l((${dotProduct}*${a}^3)*(3/(8*4*${pi}))))"|bc -l`

echo $rws

rmt=`echo "0.85 * $rws"| bc`
echo $rmt

dx=`echo "l($rws / 0.000001) / 720.0" | bc -l`;
echo $dx
# Cartesian sites 1st  and 2nd  were placed directly but there is an expression that defines
# its positions https://www.cryst.ehu.es/cgi-bin/cryst/programs/nph-wp-list 
# and M.J. Mehl et al. / Computational Materials Science 136 (2017) S1–S828
# however it does not depends on a or c, 2nd depends only on the ratio b/a and a constant

{% endhighlight %}
