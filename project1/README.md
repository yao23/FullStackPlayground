# bittigercs503-1704
How do I get set up?

Summary of set up for first Project: Collaborative Online Judge
# Install NodeJs:

sudo apt-get update

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

sudo apt-get install -y nodejs

# Install Nodemon

sudo npm install -g nodemon

# Install git

sudo apt-get install git

# Install angular/cli

sudo npm install -g @angular/cli

# Install Redis

wget http://download.redis.io/releases/redis-3.2.6.tar.gz

tar xzf redis-3.2.6.tar.gz

cd redis-3.2.6

make

sudo make install

cd utils

sudo ./install_server.sh

# Install python 2.7: This is installed already in Ubuntu

# Install pip:

(sudo apt-get update)

sudo apt install python-pip

sudo pip install Flask

# Install Docker:

curl -fsSL https://get.docker.com/ | sh

Setup docker permission:

sudo usermod -aG docker $(whoami)

(you need to logout and login again after set permission)

To start docker when the system boots: sudo systemctl enable docker

# Install Nginx
(For ubuntu 16.04) Add following two lines into /etc/apt/sources.list

deb http://nginx.org/packages/ubuntu/ xenial nginx

deb-src http://nginx.org/packages/ubuntu/ xenial nginx

Then run:

sudo apt-get update

sudo apt-get install nginx

# FAQ
I failed to install newspaper package. It shows errors like 'could not build the egg.'

This is because an error when installing nltk dependency. Try following commands:

$ sudo apt-get install python-dev

$ sudo apt-get install libxml2-dev libxslt-dev

$ sudo apt-get install libjpeg-dev zlib1g-dev libpng12-devpip

$ sudo install —upgrade setuptools
<br />
Ubuntu 14:
<br />
pip uninstall setuptools
<br />
pip install setuptools
<br />
or try:
<br />
pip install --upgrade setuptools --user python
<br />
$ sudo pip install newspaper


**If above still not works, try these:** (Thanks to mwangxx0129)
1. Remove the repository version
$ sudo apt-get remove python-setup tools

2. if necessary, install pip again
$ wget https://bootstrap.pypa.io/get-pip.py;
$ sudo -H python get-pip.py

3. install setuptools via pip
$ sudo -H pip install -U pip setuptools

4. still failed repeat from start again
