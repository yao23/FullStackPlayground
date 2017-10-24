/usr/bin/ld: cannot find -lz
collect2: error: ld returned 1 exit status
error: command 'x86_64-linux-gnu-gcc' failed with exit status 1

solution:
sudo apt-get install -y libxml2-dev libxslt1-dev zlib1g-dev python3-pip
sudo pip install lxml


