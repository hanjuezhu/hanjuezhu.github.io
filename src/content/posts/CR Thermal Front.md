---
title: Cosmic Ray Mediated Fronts in the Warm-Hot CGM
pubDate: 2024-10-22
modDate: 2024-10-22 22:45
categories: ["Plasma"]
description: "We model transition layers in the circumgalactic medium shaped by cosmic ray heating and compare with observations."
draft: false
pin: true
---

[*The code used to solve the equations and generate plots is available here.*](https://github.com/hanjuezhu/cr-cgm-fronts)

In [*this paper*](https://arxiv.org/abs/2410.17252), we model the transition layers between warm ($10^4$ K) and hot ($10^6$ K) phases of the circumgalactic medium (CGM), focusing on the role of cosmic ray (CR) heating in shaping their thermal and ionization structure. Building on the CR bottleneck picture, we solve 1D steady-state front models that self-consistently include CR heating, radiative cooling, thermal conduction, and gas flow.

The key result is that CR heating strongly influences the width and structure of these transition layers. In particular, we find that:

- When CRs dominate the energy balance near the cloud edge, thermal conduction is required to offset the excess heat and maintain a steady-state front.  
- The resulting fronts are significantly broader than classical evaporative fronts, with more extended temperature gradients and enhanced column densities of intermediate ions like O VI and N V.  
- Static fronts (with zero gas velocity) and evaporative fronts (flow from warm to hot) show qualitatively different internal structure, particularly in the interplay between conduction and enthalpy flux.

We calculate the column densities and diagnostic line ratios (Si IV/C IV, C IV/O VI, N V/O VI) across these models and compare with observations from Wakker et al. (2012). The results show that:

- Most models lie outside the observed range in the Si IV/C IV vs. C IV/O VI parameter space.  
- High magnetic field models reproduce the observed Si IV/C IV ratios but overestimate the C IV/O VI ratios.  
- Models with lower magnetic fields underpredict Si IV/C IV but agree better with C IV/O VI and N V/O VI ratios.  
- A subset of intermediate-field models successfully match both line ratio pairs, although we make no claim for their uniqueness.

This work suggests that CR heating can plausibly explain some observed CGM ionization signatures, particularly in the warm-hot regime, but may require additional processes (e.g., photoionization, turbulent mixing) to reproduce the full suite of observed line ratios. It also highlights the importance of magnetic field strength and CR pressure in regulating thermal structure.

More broadly, these results imply that the thermal structure of the CGM is not solely determined by classical cooling or conduction physics. Instead, CR pressure gradients and associated heating can reshape the interface between gas phases, leaving observable imprints on absorption line spectra. 
