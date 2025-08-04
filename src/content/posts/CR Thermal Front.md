---
title: Cosmic Ray Mediated Fronts in the Warm-Hot CGM
pubDate: 2024-10-22
modDate: 2024-10-22 22:45
categories: ["Plasma"]
description: "We model transition layers in the circumgalactic medium shaped by cosmic ray heating and compare with observations."
draft: false
pin: true
---

[*The code used to solve the equations and generate plots is available here.*](https://github.com/hanjuezhu/cr_thermal_front)

In [*this paper*](https://arxiv.org/abs/2410.17252), we model the transition layers between warm ($10^4$ K) and hot ($10^6$ K) phases of the circumgalactic medium (CGM), focusing on the role of cosmic ray (CR) heating in shaping their thermal and ionization structure. Building on the CR bottleneck picture, we solve one-dimensional steady-state front models that self-consistently include CR heating, radiative cooling, thermal conduction, and gas flow.

### The Role of Cosmic Ray Bottlenecks

A central feature of our model is the cosmic ray bottleneck effect, a nonlinear transport phenomenon that occurs when the CR pressure gradient and gas density gradient point in opposite directions along the magnetic field. In such regions, the streaming instability that normally scatters CRs breaks down, allowing the CRs to decouple from the thermal gas. The CR pressure flattens, and CRs effectively accumulate behind the dense cloud. This creates a bottleneck.

This leads to a steepened upstream CR pressure gradient and a surge of localized CR heating concentrated near the cloud boundary. Originally proposed by Skilling (1971) and numerically demonstrated by Wiener et al. (2017), this bottleneck mechanism allows CRs to deposit their energy efficiently at interfaces between dense and diffuse gas, which are exactly the type of transition layers we study.

In our front models, we assume that CRs stream at the Alfvén speed $v_A$, transferring energy to the gas via wave damping. We show that this heating, amplified by bottleneck effects, is strong enough to reshape the thermal structure of the front. However, it cannot act alone. Thermal conduction is required to carry away the excess energy and prevent runaway heating. The result is a broad, steady-state front where energy fluxes - including CR heating, conduction, radiative cooling, and enthalpy flux - self-regulate.

### Key Results

We find that CR heating strongly influences the width and structure of the transition layers. In particular:

- When CRs dominate the energy balance near the cloud edge, thermal conduction is required to offset the excess heat and maintain a steady-state front.
- The resulting fronts are significantly broader than classical evaporative fronts, with more extended temperature gradients and enhanced column densities of intermediate ions like O VI and N V.
- Static fronts (with zero gas velocity) and evaporative fronts (flow from warm to hot) show qualitatively different internal structure, especially in how conduction and enthalpy flux compensate for CR heating.

We also study the dependence on physical parameters such as the magnetic field strength and the CR-to-gas pressure ratio $\alpha$. Stronger magnetic fields, which increase $v_A$, intensify CR heating and modify the spatial scale over which different heating and cooling mechanisms dominate. The bottleneck effect becomes especially important in high-$\alpha$ models, where CR pressure at the cloud edge is large and needs to be redistributed.

### Observational Predictions

We compute column densities and line ratios (Si IV/C IV, C IV/O VI, N V/O VI) across our front models and compare them with Galactic CGM data from Wakker et al. (2012). The results show:

- Most models lie outside the observed range in the Si IV/C IV vs. C IV/O VI parameter space.
- High magnetic field models reproduce the observed Si IV/C IV ratios but overpredict C IV/O VI.
- Lower field models underpredict Si IV/C IV but agree better with C IV/O VI and N V/O VI.
- A subset of intermediate-field models, such as those with $B = 20~\mu$G and $\alpha = 3$, successfully match both line ratio pairs, although we make no claim for their uniqueness.

These discrepancies suggest that CR heating can plausibly explain some observed ionization signatures, especially for transition-temperature ions. However, additional processes such as photoionization or turbulent mixing are likely required to match the full suite of data.

### Broader Implications

Our results demonstrate that the thermal structure of the CGM is not governed solely by classical processes like radiative cooling or conduction. Instead, cosmic ray pressure gradients, particularly in bottleneck regions, can reshape the interface between gas phases. These modified fronts imprint distinctive column densities and ion ratios on the CGM, providing potential observational signatures of CR-regulated dynamics.

This work refines the bottleneck scenario proposed by Wiener et al. (2017) by incorporating thermal conduction and enthalpy flux, revealing the full interplay of heat and momentum transfer in CR-dominated transition layers. It opens the door to further work on CR feedback in multiphase halos, including the role of turbulence, magnetic topology, and front stability.
