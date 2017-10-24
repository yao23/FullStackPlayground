/usr/bin/ld: cannot find -lz
<br />
collect2: error: ld returned 1 exit status
<br />
error: command 'x86_64-linux-gnu-gcc' failed with exit status 1
<br />
<br />
solution:
<br />
sudo apt-get install -y libxml2-dev libxslt1-dev zlib1g-dev python3-pip
<br />
sudo pip install lxml


