This README document provides step-by-step install instructions to create the jbrowse instance contained in this repository. You'll want users to be able to set up their enrivonment (e.g. with bioinformatics tools) on a common platform like ubuntu on AWS, download data from e.g. NCBI using fixed download links, run all appropriate data processing, and load the processed data into jbrowse. Having a folder of bash scripts may be better than simply listing commands one-by-one in the README, and then the README can just reference which scripts to run in which order and describe what they do.

An example of your jbrowse instance can also live in this repository, as shown here: simply copying over the index.html file and the jbrowse folder into your git repository top-level directory will allow GitHub pages to host it as a static web page (i.e. all the work of running jbrowse is done locally on whatever machine is accessing it). You don't have to host on GitHub, you can use AWS as well, or a local machine, but for long-term hosting of sites less than 1GB this can be the simplest free option.