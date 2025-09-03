---
layout: ../layouts/BaseLayout.astro # Assuming you have a BaseLayout
title: My Resume
description: An overview of my skills and experience.
---
# Naga Nitish Chamala

## Blacksburg, VA 24060 • naga@vt.edu

Highly motivated researcher with expertise in CFD, multiphase flows, and thermal analysis, demonstrated through advanced numerical simulations, model development, and experimental validation. Proficient in industry-standard software (Fluent/CFX/Icepak, OpenFOAM, StarCCM+) and programming languages (C++, Python). Proven ability to optimize designs and improve performance in complex fluid and thermal systems.

# Education

## **Ph.D. in Aerospace and Ocean Engineering | Virginia Tech | Jan 2021-Aug 2025(est.) | CGPA: 3.7**

Notable Courses: Verification and Validation in Scientific Computations, Data Analysis in Fluid Dynamics, Turbulence Modeling and Simulation

## **M.Tech. in Thermal & Fluids | Amrita Vishwa Vidyapeetham | 2017-19 | CGPA: 8.88/10**

Honors: Graduated with **Silver Medal** for academic excellence.  
Notable Courses: Aerodynamics, Computational Methods in Thermal & Fluids, **Advanced Heat Transfer, Design of Heat Exchange Equipments**

## **B.Tech. in Mechanical engineering, JNTUH, 2017**

Honors: Winner of Karting Championship, 2016, lead the team as Design Lead.

# Skills

| C++ | ICEM-CFD | MATLAB | StarCCM |
| Python | ANSYS CFX | Solidworks | ANSYS Icepak |
| Bash | ANSYS Fluent | OpenFOAM | Machine Learning |

# Experience

## **CFD Engineer | Hydro Pneumatic Engineers Pvt Ltd | Hyderabad, India | Aug 2020 \- Nov 2020**

Contributed to the development of an in-house Scramjet engine by working on the optimization of the intake to minimize spillage for operating speeds. Significantly improved nozzle design by employing the Method of Characteristics, resulting in a 10% increase in thrust and a 3% reduction in length. Optimized fuel injectors position for better combustion efficiency and lower drag. All simulations were performed using ICEM-CFD and ANSYS Fluent software.

## **Executive Trainer | Talentio Solutions India | Hyderabad, India | Jan 2020 \- Mar 2020**

Developed and delivered a comprehensive training program for mechanical engineering undergraduates, focusing on the practical application of Python programming language in solving numerical problems. The course content included instruction on core Python syntax, numerical algorithms, and data analysis techniques, with a strong emphasis on hands-on exercises and real-world engineering applications.

# Academic Projects

## **Advanced Flow Diagnostics for Multiphase Cavitating Flows Using Machine Learning | Virginia Tech**

Pioneered a novel application of **RAFT (Recurrent All-Pairs Field Transforms)** optical flow to achieve the first-ever simultaneous velocity measurements of both liquid and vapor phases in cloud cavitation. To overcome the challenge of sparse particle seeding in the liquid phase, I developed and utilized synthetic datasets to fine-tune the deep learning model, resulting in a **50% reduction in End-Point Error (EPE)**. This custom-tuned RAFT model outperformed traditional velocimetry algorithms like PIVLab and Farneback, which failed in these conditions, by a factor of **30x**. This work also established critical guidelines, concluding that high spatial and temporal data resolution are paramount for the successful application of optical flow in complex multiphase systems.

## **Characterization of Cavitation Dynamics with a New Non-Dimensional Number | Virginia Tech**

Formulated and validated a new non-dimensional parameter, **CaRe** (the product of Cavitation and Reynolds numbers), to predict the governing dynamics of cavitating flows. This work established a clear physical regime map: for CaRe values below ~2000, the flow is dominated by multi-cloud shedding, whereas for **CaRe > 2000**, the dynamics transition to a single large-cloud shedding mechanism. By correlating these findings with established erosion studies, it was determined that the single-cloud collapse regime poses a significantly higher risk for intense, localized material erosion due to the focused energy release of a large-scale vapor structure collapse, in contrast to the more distributed impacts from multi-cloud events.

## **Comprehensive CFD Modeling of Cloud Cavitation in a Venturi | Virginia Tech**

Performed a systematic evaluation of CFD methodologies for simulating cloud cavitation in a venturi geometry using the OpenFOAM solver interPhaseChangeFoam with the Merkle cavitation model. This comprehensive study involved comparing the predictive accuracy of various approaches, including incompressible vs. compressible solvers, 2D RANS vs. 3D RANS, and high-fidelity 3D **Large Eddy Simulations (LES)**. The investigation also assessed the influence of geometric scaling on flow physics. By rigorously benchmarking these diverse simulation strategies against experimental observations, this research identified the key capabilities and critical limitations of current-generation CFD tools in capturing the complex, transient physics of cavitating phenomena.

## **Implementing Verification and Validation Framework on an OpenFOAM solver | Virginia Tech**

Verified and validated an **OpenFOAM** solver for 2D steady-state incompressible laminar flow using Roy-Oberkampf framework. Estimated the **predictive uncertainty** of the solver by considering aleatory and epistemic inputs separately. Quantified the numerical uncertainty using Richardson extrapolation and Roache's Grid Convergence Index (GCI). Achieved a model form uncertainty (d) of 0.8472 using the Area Validation Metric. Demonstrated the importance of considering all sources of uncertainty for making risk-informed decisions.

## **Comparative Thermal Analysis of EV Battery Cold Plates using Ansys Fluent | Virginia Tech**

Conducted a computational fluid dynamics (CFD) project in Ansys Fluent to evaluate and compare the thermal-hydraulic performance of **convex** and **U-shaped** liquid cooling plates for an electric vehicle battery thermal management system. The analysis was conducted under a constant heat flux of 1000 W/m² and a coolant mass flow rate of 0.025 kg/s to simulate a 1C discharge rate. The simulation revealed that while both designs maintained similar peak temperatures and excellent thermal uniformity, the **convex structure** demonstrated a significantly superior hydraulic performance, achieving a **22.7% reduction** in pressure drop compared to the U-shaped design. This indicates lower parasitic energy consumption for the pump, making the convex structure the more efficient and optimal design for balancing cooling effectiveness with overall system efficiency. A similar convex structured cold plate is used in Lucid Motors’ Lucid Air.

## **CFD Analysis of Through-Chip Microchannel Cooling for 3D Integrated Circuits | Virginia Tech**
Executed a computational fluid dynamics (CFD) analysis to optimize thermal management in high-power 3D ICs using a novel Through-Chip Microchannel (TCMC) architecture. The baseline simulation, replicating the paper's findings for circular channels (radius = 1.5 µm, pitch = 10 µm), confirmed the design's capability to dissipate an exceptional heat flux of **14.1 kW/cm²** while keeping the maximum temperature rise below **60 K** at a 1 MPa inlet pressure. The analysis was extended to evaluate the performance of **square microchannels** with an equivalent hydraulic diameter. The square channel geometry yielded a **12% improvement in thermal performance** (lower peak temperature) due to a larger heat transfer surface area but resulted in a **18% increase in required pumping power** due to greater frictional losses. This project identified a key performance trade-off, concluding that square channels provide superior heat dissipation for peak-performance applications where a moderate increase in parasitic energy consumption is acceptable.

## **Optimization of Heat Sink for Cooling a Chip | Amrita Vishwa Vidyapeetham**

Optimized **heat sink** for a chip with 100W/cm^2 by varying base thickness, fin height, fin thickness, number of fins and proximity of fan using Ansys Icepak. Obtained 15% drop in Tmax compared to base heat sink. Observed that the thermal spread resistance is on the higher side with a heat sink alone and implemented **vapor chamber** and **heat pipes**. Achieved about 40% drop in Tmax using a vapor chamber as heat spreader.

## **Numerical Simulation on Flow Over a Double Forward Facing Step | Amrita Vishwa Vidyapeetham**

Co-authored a research paper investigating the aerodynamic performance of flow over a double forward-facing step, using CFD simulations to analyze how geometric variations impact flow separation and reattachment. The core of the analysis focused on how varying the distance between the two steps altered the size, location, and interaction of recirculation zones. The results established a direct link between geometry and flow structure, demonstrating that shorter distances between steps can cause recirculation zones to merge, creating larger areas of stagnant flow. This is critical for thermal performance, as these zones act as insulating regions that lead to surface hot spots. This research provides a foundational understanding for optimizing the design of cooling channels in applications like electronics or turbine blades to strategically position steps, break up recirculation zones, and enhance convective heat transfer.

## **Numerical investigation of Scramjet combustor | Amrita Vishwa Vidyapeetham**

Developed a **quasi-one-dimensional model** to predict scramjet combustor performance with high computational efficiency and predicted wall pressure distribution with reasonable accuracy (maximum error of 8.04%). Conducted three-dimensional simulations using **ANSYS CFX** to optimize scramjet combustor performance. Optimized injection angle and injector diameter for maximum thrust, combustion efficiency, and minimum total pressure loss using **Kriging method and Non-dominated sorting genetic algorithm**. Achieved optimum results with injector diameter of 1 mm, injection angle of 90 degrees, thrust of 227.364 N, combustion efficiency of 92.56871%, and total pressure loss of 45.1%. 

## **Vishnu Karting Championship | Sreenidhi Institute of Science and Technology**

Designed the roll cage and optimized the placement of subsystems (engine, braking) using Solidworks, prioritizing driver safety and comfort. Performed static structural analysis of the roll cage under maximum accident loads. Additionally, involved in profile cutting and welding for roll cage assembly.

# Conferences

* *Unraveling Cloud Cavitation: Role of Rayleigh-Taylor Instability*, presented at 77th Annual Meeting of the Division of Fluid Dynamics 2024\.

* *Numerical uncertainty due to parallelization in an unsteady cloud cavitation*, presented at 76th Annual Meeting of the Division of Fluid Dynamics 2023\.  
* *A Comparative Study of Transport Equation Models for Prediction of Cloud Cavitation in a Venturi*, presented at The 8th World Congress on Momentum, Heat and Mass Transfer 2023\. DOI: [10.11159/icmfht23.121](http://dx.doi.org/10.11159/icmfht23.121)

* *Numerical simulation on flow through a double forward-facing step*, accepted in International Conference on Applied Mechanics and Optimisation 2019 – AIP Proceedings. [https://doi.org/10.1063/1.5120212](https://doi.org/10.1063/1.5120212)

* *Simulation of Scramjet Combustor using Quasi-1D and 3D CFD models*, presented at 21st Annual CFD Symposium, NAL, 2019

# Additional Certifications

* Successfully completed online course on “The Data Science Course 2019: Complete Data Science Bootcamp” conducted by 365 Careers.
