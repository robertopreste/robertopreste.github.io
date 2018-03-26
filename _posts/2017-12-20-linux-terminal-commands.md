---
layout: post
title: Linux Terminal Commands
permalink: /webdev/linux-terminal-commands
category: blog
tags: 
 - linux
 - bash
 - terminal
image: 
 - /images/linux4.png
---

I often find myself looking for some shortcuts for working on the terminal with bioinformatics data, so here is a list of the most useful shortcuts and commands for the Unix terminal.  

<!--more--> 

![Terminal Screen](/images/linux4.png)

## File system  

`ls`  –  list items in the current directory  
`ls -l ` –  list items in the current directory in a long format, to see permissions, size and modification date  
`ls -a ` –  list all items in the current directory, including hidden files  
`ls -F ` –  list items in the current directory showing directories with a slash and executables with a star  
`ls [dir] ` –  list items in the directory `[dir]`  
`cd [dir] ` –  change directory to `[dir]`  
`cd .. ` –  go up one directory  
`cd / ` –  go to the root directory  
`cd ~ ` –  go to current user’s home directory  
`cd - ` –  go back to the last directory you were in  
`pwd ` –  show the current working directory  
`mkdir [dir] ` –  create a new directory `[dir]`  
`rm [file] ` –  remove the file `[file]`  
`rm -r [dir] ` –  remove the directory `[dir]` recursively  
`cp [file1] [file2] ` –  copy `[file1]` to `[file2]`  
`cp -r [dir1] [dir2] ` –  copy directory `[dir1]` to `[dir2]` recursively  
`mv [file1] [file2] ` –  move or rename `[file1]` to `[file2]`  
`ln -s [file] [link] ` –  create a symbolic link to `[file]`  
`touch [file] ` –  create `[file]`  
`cat [file] ` –  output the content of `[file]` to the stdout device (terminal screen)  
`less [file] ` –  view the content of `[file]` with page navigation  
`head [file] ` –  output the first 10 lines of `[file]`  
`head -n [num] [file] ` –  output the first `[num]` lines of `[file]`  
`tail [file] ` –  output the last 10 lines of `[file]`  
`tail -n [num] [file] ` –  output the last `[num]` lines of `[file]`  
`nano [file] ` –  edit `[file]` in the terminal  
`alias [name] '[command]' ` –  create an alias named `[name]` for the `[command]` command  

## Compression  

`tar cf [file.tar] [files] ` –  create a tar-compressed archive named `[file.tar]` containing `[files]`  
`tar czf [file.tar.gz] [files] ` –  create a tar-compressed archive using Gzip compression named `[file.tar]` containing `[files]`  
`tar xf [file.tar] ` –  extract the files contained in `[file.tar]`  
`tar xzf [file.tar] ` –  extract the files contained in `[file.tar]` using Gzip  
`gzip [file] ` –  compress `[file]` and rename the archive to `[file]`.gz  
`gzip -d [file.gz] ` –  extract the files contained in `[file.gz]`  

## System  

`shutdown ` –  shut down the machine  
`reboot ` –  restart the machine  
`date ` –  show the current date and time  
`whoami ` –  show who is currently logged in  
`finger [user] ` –  display information about `[user]`  
`man [command] ` –  show the manual for `[command]`  
`df ` –  show disk usage  
`du ` –  show directory space usage  
`free ` –  show memory and swap usage  
`whereis [app] ` –  search for possible locations of `[app]`  
`which [app] ` –  show the path of `[app]` that will be run by default  

## Networking  

`wget [url] ` –  download a file hosted at `[url]` (mostly on Linux os)  
`curl [url] ` –  download a file hosted at `[url]` (mostly on Mac os)  
`scp [user]@[host]:[file] [dir] ` –  secure-copy `[file]` from the `[host]` remote server to the `[dir]` directory on the local machine  
`scp [file] [user]@[host]:[dir] ` –  secure-copy `[file]` from the local machine to the `[dir]` directory on the `[host]` remote server  
`ssh -p [port] [user]@[host] ` –  connect to the `[host]` remote server as user `[user]` using port `[port]`  
`ping [host] ` –  ping `[host]` and output results  
`whois [domain] ` –  get information for `[domain]`  
`dig [domain] ` –  get DNS information for `[domain]`  

## Shortcuts  

`ctrl + a ` –  move cursor to the beginning of line  
`ctrl + f ` –  move cursor to the end of line  
`alt + f ` –  move cursor forward 1 word  
`alt + b ` –  move cursor backward 1 word  

## Process management  

`ps ` –  display your currently active processes  
`top ` –  display all running processes  
`kill [pid] ` –  kill the process with id `[pid]`  
`kill -9 [pid] ` –  force-kill the process with id `[pid]`  

## Permissions  

`chmod [ugo] [file] ` –  change permissions of `[file]` to `[ugo]`: `[u]` represents the user's permissions, `[g]` represents the user group's permissions, `[o]` represents everyone else's permissions. The values of `[u]`, `[g]` and `[o]` can be any number between 0 and 7  
`7 ` –  full permissions  
`6 ` –  read and write only  
`5 ` –  read and execute only  
`4 ` –  read only  
`3 ` –  write and execute only  
`2 ` –  write only  
`1 ` –  execute only  
`0 ` –  no permissions  
`chmod 600 [file] ` –  current user can read and write `[file]`  
`chmod 700 [file] ` –  current user can read, write and execute `[file]`  
`chmod 755 [file] ` –  current user can read, write and execute `[file]`, while everyone else can only read and execute  

## Searching  

`grep [pattern] [file] ` –  search for `[pattern]` in `[file]`  
`grep -r [pattern] [dir] ` –  search recursively for `[pattern]` in `[dir]`  
`grep -rn [pattern] [dir] ` –  search recursively for `[pattern]` in `[dir]` and show the line number found  
`[command] | grep [pattern] ` –  search for `[pattern]` in the output of `[command]`  
`find [file] ` –  find all instances of `[file]`  
`locate [file] ` –  find all instances of `[file]` using an indexed database built from the updatedb command (faster than find)  
`sed -i 's/[day]/[night]/g' [file] ` –  find all occurrences of `[day]` in `[file]` and replace them with `[night]`; `s` represents substitution and `g` means global  


