---
title:  "Automatic generation of potentials in SPR-KKR"
mathjax: true
layout: post
categories:
  - github
  - website
---
The automatic generation of input files is particularly important when we are performing tens to hundreds or even thousands of calculations. An automation of the disorder on the local Si/Ge of the half-heusler Fe$$_2$$MnSi in the [Munich Korringa-Kohn-Rostoker Package](https://www.ebert.cup.uni-muenchen.de/old/index.php?option=com_remository&Itemid=20&func=startdown&id=51&lang=de) can be expressed as:

{% highlight bash %}

SPRPATH=/home/miguelangelooscardoso

ele_1=Si
ele_2=Ge

for i in {1..9..1}
do
k=$(( 10 - $i ))

conc_2=`echo "0.1 * $i" | bc`
conc_1=`echo "0.1 * $k" | bc`

{% endhighlight %}



The creation of a potencial to perform self-consistent and exchange-correlation calculations is a must. The experimental lattice parameters of Fe$$_2$$MnGe DO$$_{19}$$ obtained experimentally by Zhang et al. in the [Journal of Alloys and Compounds, 352(1):99 – 102, 2003](https://doi.org/10.1016/S0925-8388(02)01116-7) were used to calculate the experimental volume of the cell in atomic units.

<!-- # Create .pot SCF.inp and JXC.inp D019 Fe2MnGe -->

{% highlight bash %}

# Experimental Lattice Parameters (angstrom [Å]) (Zhang)
a_exp=`echo "5.22"|bc -l`
b_exp=`echo "sqrt(3)*${a_exp}"|bc -l`
c_exp=`echo "4.24"|bc -l`

# Experimental Lattice Parameters (atomic units of length [a.u.])
a_exp=`echo "1.8897259885789*${a_exp}"|bc -l`
b_exp=`echo "1.8897259885789*${b_exp}"|bc -l`
c_exp=`echo "1.8897259885789*${c_exp}"|bc -l`

# V_exp was divided by 3
v_exp=`echo "(${a_exp})^2*${c_exp}*sqrt(3)/2"|bc -l` 

# Experimental lattice ratios
ba_exp=$(echo "${b_exp}/${a_exp}"|bc -l)
ca_exp=$(echo "${c_exp}/${a_exp}"|bc -l)

{% endhighlight %}

If we want we can generate a loop to increment or decrement the volume and the ratio c/a from -5% to +5%.

{% highlight bash %}
for i in 0.95 0.96 0.97 0.98 0.99 1.00 1.01 1.02 1.03 1.04 1.05; do

# New Volume
v=`echo "${i}*${v_exp}"|bc -l`

for j in 0.95 0.96 0.97 0.98 0.99 1.00 1.01 1.02 1.03 1.04 1.05; do

# New ratio c/a
ca=`echo "${j}*${ca_exp}"|bc -l`

{% endhighlight %}

After getting a new ratio c/a and volume we can finally calculate the new lattice parametters.

{% highlight bash %}

# New lattice parameters
a=`echo "e((1/3)*l((2*${v})/(${ca}*sqrt(3))))"|bc -l`
b=`echo "sqrt(3)*${a}"|bc -l`
c=`echo " ${ca}*${a}"|bc -l`

# ratio b/a
ba=`echo "${ba_exp}"|bc -l`

{% endhighlight %}

We use a function to specify the primitive lattice vectors expressed in fractional (direct) cartesians.

{% highlight bash %}

declare -A arr
# first vector
arr1[0,0]=0.5
arr1[0,1]=`echo "0.5*${ba}"|bc`
arr1[0,2]=0
# second vector
arr2[1,0]=-0.5
arr2[1,1]=`echo "0.5*${ba}"|bc`
arr2[1,2]=0
# third vector
arr3[2,0]=0
arr3[2,1]=0
arr3[2,2]=${ca}
echo "${arr1[0,0]} ${arr1[0,1]} ${arr1[0,2]}"  

vectResult=($(crossProduct arr2 arr3))
echo ${vectResult[0]} ${vectResult[1]} ${vectResult[2]}

dotProduct=$(echo "${arr1[0,0]}*${vectResult[0]}+${arr1[0,1]}*${vectResult[1]}+${arr1[0,2]}*${vectResult[2]}"|bc -l)

{% endhighlight %}

After a few calculations we are prepared to calculate the Wigner-Seitz radius and muffin tin radius which we will need to perform our self-consistent calculation.

{% highlight bash %}
pi=`echo "scale=10; 4*a(1)" | bc -l`
rws=`echo "e((1/3)*l((${dotProduct}*${a}^3)*(3/(8*4*${pi}))))"|bc -l`
rmt=`echo "0.85 * $rws"| bc`
dx=`echo "l($rws / 0.000001) / 720.0" | bc -l`;

{% endhighlight %}

<!-- # Cartesian sites 1st  and 2nd  were placed directly but there is an expression that defines
# its positions https://www.cryst.ehu.es/cgi-bin/cryst/programs/nph-wp-list 
# and M.J. Mehl et al. / Computational Materials Science 136 (2017) S1–S828
# however it does not depends on a or c, 2nd depends only on the ratio b/a and a constant -->

Shell scripting is a useful tool to automate our calculations. Not only to generate input files but also to gather information from our output files in an efficient way. To have acess to all those scripts you can access my github repository [here](https://github.com/miguelangelooscardoso/crystal-structure-optimisation).
