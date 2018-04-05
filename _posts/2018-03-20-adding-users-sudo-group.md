---
layout: post
title: Adding Users to the Sudo Group
permalink: /blog/adding-users-sudo-group
category: blog
comments: true
tags: 
 - informatics
image: 
 - /images/linux-add-user.jpg
description: "Allow users to perform administrator tasks even if they are not system admins."
---

One of the most important things to do after setting up a new Linux server (or after taking over an existing one) is to create a new user, possibly with *sudo powers*. [Sudo](https://en.wikipedia.org/wiki/Sudo) is a special Linux command that allows users to perform administrator tasks even if they are not system admins.  

The main reason for having a sudo user (or *sudoer*) is because logging in as root is usually not desirable, since it can cause troubles more often than not, but we may still want to be able to perform administrator tasks with a non-root user. Moreover, adding one or more users to the sudo group can avoid the need of spreading root credentials, because a sudo command will require the user’s own password, not the root’s one.  

All the members of the sudo group and their restrictions and permissions are in the `/etc/sudoers` configuration file. Explaining this file and in general the sudo usage is a quite extensive topic, so we will only cover the case where we want to create a new user and add it to the sudoers.  

## Creating a new user  

*If you already have a fully functioning non-root user and you just want to give it sudo privileges, you can skip to the next section.*  

First of all, we may want to create a new user, that we will later add to the sudoers. In order to do this, we can launch the following command in the terminal:  

```
adduser [username]
```  

A new user called `[username]` will be created, together with his own home folder, usually located in `/home/[username]/`. This new user will of course require a password, that we will need to type twice; the password will not be visible for security reasons.  

The command will also prompt us for some basic information about the new user, such as name, telephone number, etc. It is possible to leave this fields blank, though it is recommended to at least fill in the name field.  

## Adding a user to the sudo group  

It is possible to add a user to the sudo group without having to mess around with the `/etc/sudoers` file. This can be accomplished using the following command:  

```
usermod -aG sudo [username]
```  

This command will add the user `[username]` to the sudo group, and that’s it.  

From now on, the `[username]` user will be able to access administrator privileges just by prepending `sudo` to any command, and providing his own password.  

