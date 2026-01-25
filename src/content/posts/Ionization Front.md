---
title: On the Properties of Cosmological Ionization Fronts
pubDate: 2025-05-01
modDate: 2025-05-01 22:45
categories: ["Reionization"]
description: "We explore the geometry and dynamics of cosmological ionization fronts using CROC simulations, and demonstrate that their statistical properties are well described by an analytic barrier-crossing model applied to the initial Gaussian density field in overdense regions."
draft: false
pin: true
---

In [*this paper*](https://arxiv.org/abs/2504.20046), we study the geometry and dynamics of ionization fronts during reionization using the CROC simulations. By constructing reionization timing maps, we extract front velocities and curvatures across the cosmic volume.


I find it most interesting that the curvature statistics in the simulations are well described by analytical expressions derived from a barrier-crossing model applied to a Gaussian random field (GRF). In particular, the mean Gaussian curvature correlates with the normalized density contrast $\nu = \delta / \sigma_0$, and agrees with the GRF prediction in overdense regions:

$$
\langle K \rangle \propto \nu^2 - 1.
$$

In underdense regions, the analytical model breaks down. The barrier-crossing formalism treats a remaining neutral island at the bottom of a void as an isodensity contour of the field smoothed on scale $R$. In reality, voids are typically ionized by a front that sweeps across the region along directions set by the distribution of ionizing sources and the large-scale radiation field, largely independent of the detailed density structure within the void. Consequently, front geometry there is not tied to isodensity surfaces, and the GRF prediction for $\langle K \rangle$ fails.

The velocity distribution is also compared to predictions from the same barrier-crossing formalism. While the model reproduces the overall shape of the distribution at intermediate and high velocities, it fails to capture the low-velocity tail observed in simulations. This discrepancy is due to non-Gaussian features in the evolved density field, which are not included in the Gaussian-based model.

These results show that the topology of reionization, quantified through geometric measures such as curvature, can be connected to the statistical properties of the initial density field. This provides a compact and interpretable framework for linking simulation results to theory, with potential applications to large-scale observables such as the 21 cm signal and the thermal state of the intergalactic medium.







