# CS267 Intro & HMWK 0

**Intro**

Hi! I'm Aashrita Mangu, a current PhD candidate in the physics department. I graduated with a degree in electrical engineering from Caltech. My research interests include precision cosmology, specifically developing detectors for mapping the Cosmic Microwave Background. My current research lab works on POLARBEAR and the Simons Array, detectors located in the Atacama Desert in Chile.

I'd really like to learn more about parallel computing so that I can more effectively use computers for my research. I'm interested in learning about techniques and tools that can help me use, manipulate, and extract useful data.


**Interesting Application: Parallel Computation in CMB Data Analysis**

An interesting use of parallel computing deals with vast amounts of Cosmic Microwave Background (CMB) data. The CMB consists of primordial photons with a current (cooled-down) energy in the microwave range that can be measured everywhere in the sky. The very faint fluctations in the signal require experiments like POLARBEAR to collect vast amounts of data when they scan the sky. With such large data sets, scientists all over the world are working to overcome computational challenges associated with analysis.

The team at Berkeley uses "massively parallel algorithms and implementations" on the NERSC supercomputers (ranked 8th in the Top 500 list) [1]. In a recent paper, as a first step in their massively parallel analysis, they did an exact maximum likelihood CMB data analysis using Microwave Anisotropy Dataset Computational Analysis Package (MADCAP).

With their optimizations, speicifically their I/O and communication, they were able to surpass the 16x speedup that would have been 
