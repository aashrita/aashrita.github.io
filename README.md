# CS267 Intro & HMWK 0

**Intro**

Hi! I'm Aashrita Mangu, a current PhD candidate in the physics department. I graduated with a degree in electrical engineering from Caltech. My research interests include precision cosmology, specifically developing detectors for mapping the Cosmic Microwave Background. My current research lab works on POLARBEAR and the Simons Array, detectors located in the Atacama Desert in Chile.

I'd really like to learn more about parallel computing so that I can more effectively use computers for my research. I'm interested in learning about techniques and tools that can help me use, manipulate, and extract useful data.




**Interesting Application: Parallel Computation in CMB Data Analysis**

An interesting use of parallel computing deals with vast amounts of Cosmic Microwave Background (CMB) data. The CMB consists of primordial photons with a current (cooled-down) energy in the microwave range that can be measured everywhere in the sky. The very faint fluctations in the signal require experiments like POLARBEAR to collect vast amounts of data when they scan the sky. With such large data sets, scientists all over the world are working to overcome computational challenges associated with analysis.

The team at Berkeley uses "massively parallel algorithms and implementations" on the NERSC supercomputers (ranked 8th in the Top 500 list) [1]. In a recent paper, as a first step in their massively parallel analysis, they did an exact maximum likelihood CMB data analysis using Microwave Anisotropy Dataset Computational Analysis Package (MADCAP). They also used MPI.

With their optimizations, specifically their I/O and communication, they were able to surpass the 16x speedup expected from purely Moore's law. The I/O bottleneck was surpassed using the M3 and TOAST software packages, taking advantage of the efficiencies: "coupling the simulation and map-making so that the simulated detector data are never written to or read from disk" (reduction factor: completely gone), "reading the pointing data required to simulate and map all realizations outside the Monte Carlo loop and keep it in memory" (reduction factor 10^4), "reading only the sparse satellite pointing data and recalculate each individual detectors’ dense pointing data from this at runtime" (reduction factor of 10^4) [1].

Even with I/O optimizations, an increasing number of MPI tasks means an increasing overhead, and thus an increasing runtime for jobs requiring more than a few thousand cores.
