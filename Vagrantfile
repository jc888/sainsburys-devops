# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "williamyeh/ubuntu-trusty64-docker"

  config.vm.network "private_network", ip: "192.168.99.100"
  config.vm.network "forwarded_port", guest: 8080, host: 8080

   config.vm.provider "virtualbox" do |vb|
     # Display the VirtualBox GUI when booting the machine
     vb.gui = false
  
     # Customize the amount of memory on the VM:
     vb.memory = "1024"
   end

  config.vm.provision "shell", inline: <<-SHELL

  SHELL

  config.vm.synced_folder ".", "/home/vagrant/shared",
  mount_options: ["dmode=777,fmode=777"]

end