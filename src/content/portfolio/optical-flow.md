---
title: "Advancing Multiphase Flow Analysis with AI-Driven Optical Flow Techniques"
publishDate: 2025-05-15
description: "This project pioneers the use of the RAFT machine learning algorithm for Optical Flow to analyze cloud cavitation, a damaging multiphase flow phenomenon, by quantifying its velocity field uncertainty with CFD-generated synthetic images to improve understanding and mitigation of cavitation erosion."
coverImage:
  url: "/images/optical_flow_cover.png" # Place in public/images/portfolio/novaflow/
  alt: "pBox"
tags: ["Python", "OpenFOAM", "Computational Fluid Dynamics", "Machine Learning", "Computer Vision", "Multiphase", "Uncertainty Quantification"]
featured: true
---

## Project Details
Investigating the complex dynamics of cloud cavitation, a critical challenge in marine and industrial systems, this project pioneers the use of cutting-edge Optical Flow techniques to achieve detailed velocity measurements in challenging liquid-gas multiphase environments.

Particle Image Velocimetry (PIV) is a widely adopted method for measuring fluid flow velocities. However, its application to multiphase flows, particularly those involving a mixture of liquid and gas, presents significant challenges. One such complex multiphase phenomenon is cloud cavitation. This process, characterized by the rapid phase transition from liquid to vapor due to localized pressure drops, leads to the formation and subsequent collapse of vapor bubble clouds. The violent collapse of these clouds is a primary cause of erosion and damage in marine propellers, pumps, and other hydraulic machinery. Understanding the intricate dynamics of these flows, especially the velocity fields within both the vapor and liquid regions, is crucial for mitigating such damage.

Traditional PIV methods can struggle to accurately capture velocity data across the distinct phases in cloud cavitation. To address this, our research explores the application of Optical Flow techniques, a suite of computer vision algorithms designed to determine motion in image sequences. While established in computer vision, applying these algorithms to the nuanced and turbulent behavior of cloud cavitation represents a novel, state-of-the-art approach.

This project specifically leverages RAFT (Recurrent All-Pairs Field Transforms), a sophisticated machine learning model renowned for its ability to generate dense and accurate velocity fields even in complex visual scenes. A key innovation of this work lies in rigorously quantifying the uncertainty associated with applying RAFT to these multiphase flows.

To achieve robust uncertainty quantification, we developed a methodology for generating highly realistic synthetic images that mimic the high-speed videography of actual cloud cavitation events. These synthetic images are informed by detailed velocity and void fraction (the proportion of vapor in a given volume) data obtained from Computational Fluid Dynamics (CFD) simulations, providing a controlled "ground truth" for validation.

As illustrated in the accompanying image, a qualitative comparison between the synthetic images, the CFD-derived velocity fields, and the velocity fields estimated by the RAFT algorithm shows promising similarity in the flow structures. The immediate next phase of this research focuses on a comprehensive quantitative analysis of the errors, aiming to establish the precision and reliability of RAFT for this challenging application.

The sample video below further demonstrates the capability of this approach, overlaying the RAFT-estimated velocity field onto high-speed experimental footage of cloud cavitation, offering a visual insight into the complex flow dynamics being investigated. This research paves the way for more accurate diagnostics and, ultimately, improved design and operational strategies for systems susceptible to cavitation damage.

<video controls width="100%" preload="metadata">
  <source src="/images/raft-sintel-48.mp4" type="video/mp4">
  Your browser does not support the video tag. Please <a href="/images/raft-sintel-48.mp4">download the video</a>.
</video>