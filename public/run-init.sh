#!/bin/bash

set -e

echo "Clonging and initializing..."

apt update 
apt install git sudo -y
git clone https://devaraj:BBDC-MzMyODE1NTc1MzE0Oi7zZIqSNvrgzE9Ngup5TRJ8uWsE@git.labsy.in/scm/sss/smartspace-init-infra.git
git checkout dev
./init.new.sh

echo "Initialization complete!"