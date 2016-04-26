# This Dockerfile is used to build an image containing basic stuff to be used as a Jenkins slave build node.
FROM ubuntu:trusty

RUN apt-get update
RUN apt-get -y install software-properties-common

# ansible package repo
RUN apt-add-repository -y ppa:ansible/ansible 

# docker package repo
RUN apt-get install -y apt-transport-https ca-certificates && \
  apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D && \
  echo "deb https://apt.dockerproject.org/repo ubuntu-trusty main" >> /etc/apt/sources.list.d/docker.list

# update packages
RUN apt-get update && \
  apt-get -y upgrade

# Install a basic SSH server
RUN apt-get install -y openssh-server && \
  sed -i 's|session    required     pam_loginuid.so|session    optional     pam_loginuid.so|g' /etc/pam.d/sshd && \
  mkdir -p /var/run/sshd

# ansible
RUN apt-get install -y ansible

# Install docker
RUN apt-get install -y docker-engine

RUN echo 'root:password' | chpasswd
RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

COPY ./id_rsa.pub /root/.ssh/authorized_keys
RUN chmod 700 /root/.ssh/authorized_keys

# Standard SSH port
EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]