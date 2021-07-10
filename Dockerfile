FROM nvidia/cuda:11.2.2-cudnn8-devel-ubuntu20.04

ENV TZ=Asia/Jerusalem
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

## Install apt packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    cmake \
    sudo \
    wget \
    curl \
    # awscli help
    groff \
    jq \
    less \
    ssh \
    openssh-server \
    vim \
    tmux \
    git && \
    # do cleanup
    rm -rf /var/lib/apt/lists/*

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

ENV CUDA_HOME=/usr/local/cuda
ENV CUDNN_INSTALL_PATH=/usr/local/cuda

ENV LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64:/usr/local/cuda/extras/CUPT/lib64

RUN mkdir -p /core
#WORKDIR /core 

## Latest conda
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
RUN bash ./Miniconda3-latest-Linux-x86_64.sh -b -p /miniconda3
ENV PATH=/miniconda3/bin:$PATH
RUN conda update -n base -c defaults conda

#RUN conda init bash
RUN eval "$(/miniconda3/bin/conda shell.bash hook)"

## Create the python 3.9.4 conda environment we'll use (mltt does not support higher version)
RUN conda create --name python39
RUN conda install -n python39 -y python=3.9.4

## Install conda installable 3rd party packages
COPY requirements-conda.txt /core
RUN conda install -n python39 -y --file /core/requirements-conda.txt -c conda -c pytorch -c conda-forge

## Get our pip requirements files
COPY requirements-pip.txt /core

## We now change the PATH setting so python and pip will be picked up from the 'python39�' environment without
## activating that environment. This is for our convenience so we don't have to manually activate. 
ENV PATH=/miniconda3/envs/python39/bin:$PATH

RUN pip3 install -r /core/requirements-pip.txt --upgrade --no-cache-dir -f https://download.pytorch.org/whl/torch_stable.html

COPY data /core/data/

CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]

## SSH login fix; otherwise user is kicked off after login:
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd


## Add sudo support
RUN echo "%users ALL = (ALL) NOPASSWD: ALL" >> /etc/sudoers

## Allow for using 'su'
RUN echo 'root:hello' | chpasswd

## Disable this alias (for root) if you don't like it:
RUN alias l='ls -la'

## More cleanup
RUN rm -f /core.*


