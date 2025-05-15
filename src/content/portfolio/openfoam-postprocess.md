---
title: "Paralleling Postprocessing of OpenFOAM results"
publishDate: 2023-05-15
description: "Using Python and Bash, I wrote bunch of scripts that will parallelize postprocessing to speed up the workflow significantly"
coverImage:
  url: "/images/postprocess_cover.png" # Place in public/images/portfolio/novaflow/
  alt: "pBox"
tags: ["Python", "OpenFOAM", "Bash", "High Performance Computing"]
repoLink: "https://github.com/ChNagaNitish/openfoam-scripts"
featured: true
---

## Project Details
OpenFOAM saves each parameter(velocity, pressure, turbulent viscosity, etc) as a separate file inside each time step folder that is saved. If one is trying to save lot of time steps, the number of files saved will be rise significantly and will be a bottleneck in IO operations. Also, to extract any meaningful visualizations, Paraview comes to the rescue but takes up lots of resource and many a times crashes if lots of time steps are present. If one is running OpenFOAM simulations on High Performance Computing facility, we can make use of the processing power to speed up the postprocessing workflow. In the first step, the script will combine all the time steps and will save as a single file for each parameter. This is done using multiple processors and it will significantly reduces the number of files. There are scripts included to plot time averaged data along specified lines and video of contour with time evolution. With the power of HPC and these scripts, the post processing is done within minutes by saving hours of time. The code is evolving and the link to Github repository is provided.