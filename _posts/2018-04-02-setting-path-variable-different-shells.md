---
layout: post
title: Setting PATH Variable in Different Shells
permalink: /blog/setting-path-variable-different-shells
category: blog
tags: 
 - informatics
image: 
 - /images/path_variable.jpg
---

How to set the PATH variable in Bash and TCSH shells.  

<!--more-->  

![Path Variable](/images/path_variable.jpg)  

The Linux PATH is an environmental variable that contains all the directories that the shell will search for executable files, when a user issues a command. It can be modified temporarily or permanently in order to include specific software, so that having to type the whole path of that software won’t be needed anymore. Setting the PATH variable can also be useful if a user wants to use a different version of a software already included in the PATH.  

Since I often use different types of shells to do my job, I decided to highlight how to change the PATH variable in a set of shell flavours ([Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))/Sh/Ksh, [TCSH](https://en.wikipedia.org/wiki/Tcsh)/CSH).  

## Print current PATH  

Regardless of the type of shell running, the PATH variable can be printed using the command:  

```
echo "$PATH"
```  

This command will print the list of directories in which the system will search for executable software, separated by colons.  

The left-most folder is the first one that will be searched, the following folder will be searched if the software is not found in the first one, and so on going from left to right. This means that:  

* if the software we want to add is not already in the PATH, we can simply **append** its folder to the PATH variable;  
* otherwise, say we want to add a different version of a software already on the PATH, the best thing to do is to **prepend** its folder to the PATH variable.  

Let’s see how to set the PATH variable, given that the software we want to add to the PATH is stored in the folder `/folder/to/add/`.  

## Set PATH in Bash/Sh/Ksh  

If we want to add this path to the beginning of the PATH variable, the Bash command to do it is:  

```
export PATH=/folder/to/add:$PATH
```  

Instead, in order to add this path to the end of the PATH variable:  

```
export PATH=$PATH:/folder/to/add
```  

A simple `echo $PATH` will show the result of this.  

## Set PATH in TCSH/CSH  

First of all, in TCSH there actually are two PATH variables: the actual `PATH`, in which the folders are colon-separated, and the `path`, where a single space separates each directory. The content of these variables is exactly the same, so every change made to the `PATH` will also update the `path` variable.  

In order to add the `/folder/to/add` path to the beginning of the PATH variable, in TCSH the command is:  

```
set PATH = ( /folder/to/add $PATH )
```  

On the other way, to add this path to the end of the PATH variable:  

```
set PATH = ( $PATH /folder/to/add )
```  

## Final remarks  

Two important things to remember when messing with the PATH variable.  

Changes to the PATH variable in the ways shown above are just temporary. This means that when disconnecting from the shell, all the changes will be lost, and you will need to repeat them the next time you’ll connect. In order to render them permanent, you will need to edit your .bashrc or .tcshrc files.  

Remember to always reference the current PATH variable when changing it. A command like:  

```
export PATH=/folder/to/add
```  

will overwrite the existing PATH, and you will lose all the other paths stored in it!  

