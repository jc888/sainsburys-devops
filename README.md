# Sainsburys devops test


### Sandbox environment

##### Mac/Windows

Windows/Mac require a guest VM to run the application. So please install Vagrant

`https://www.vagrantup.com/downloads.html`

then issue the following commands

```

# Start the VM
vagrant up

# tty into guest machine
vagrant ssh

# cd into synced directory from host to guest
cd shared

# run and build application
./build.sh

# webservice should be reachable from guest machine ip
http://192.168.99.100:8081/

# or localhost if the ports forwarded to host.
http://localhost:8081/

```

### Linux

install docker and docker-compose 

https://docs.docker.com/engine/installation/linux/ubuntulinux/

```

#cd into cloned repo directory

cd <repo dir>

#run the build script
./build.sh

```


### Automated CI build

Jenkins, is installed to do automated builds every 2 minutes if it detects change to the repo.
Or you can manually invoke

```

# jenkins should be reachable from guest machine ip
http://192.168.99.100:8082/

# or localhost if the ports forwarded to host.
http://localhost:8082/

# admin login credentials
admin/password

# jenkins job to invoke ansible deploy script
http://localhost:8082/job/webapp_deploy/

```


#### Caveats
This is not my normal deployment strategy, I would favour building docker images precompiled with the application code, and then using ansible to deploy to host machines. Rather then ssh into empty docker containers, and installing software. But this ansible scripting strategy can be applied for both hypervisor containers, or full VMs.

Also I wouldn't include public keys in the repo, ansible actully has a encryption strategy to store secrets in source control, I didn't get round to using it unfortunatly.

If I have time, I'll write an automated test suite to confirm the round robin request requirements. 
