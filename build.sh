#!/bin/bash
set -e

: <<'END'
END

# provision the environment, multiple containers as independant hosts
docker-compose build
docker-compose up -d

# install and configure environment
docker-compose run slave ansible-playbook main.yml