---
layout: post
title: Counting Sequences in Fasta/Fastq Files
permalink: /blog/counting-sequences-fastq
category: blog
comments: true
tags: 
 - bioinformatics
 - fasta
 - fastq
 - shell
 - bash
image: /images/fastq.jpg
description: "A couple of bioinformatics shortcuts to use Shell commands to count the number of sequences found in fasta and fastq file formats."
---
![Fastq Sequence](/images/fastq.jpg){: .post_left_img}
A well-established bioinformatician usually has a handful of appropriate informatics tools to manipulate and analyse genomic data, for example counting sequences in a file.  

Nonetheless, in some cases it may be useful to rely on standard Unix commands, for example when your trusty laptop is not available or you’re working on someone else’s machine.  

## Fasta Files  

A [.fasta file](https://en.wikipedia.org/wiki/FASTA_format) is a simple plain text file in which every sequence is represented by a header line, beginning with `>` and containing the sequence identifier and details, followed by a number of lines containing the actual sequence:  

```
>SEQUENCE_1
MTEITAAMVKELRESTGAGMMDCKNALSETNGDFDKAVQLLREKGLGKAAKKADRLAAEG
LVSVKVSDDFTIAAMRPSYLSYEDLDMTFVENEYKALVAELEKENEERRRLKDPNKPEHK
IPQFASRKQLSDAILKEAEEKIKEELKAQGKPEKIWDNIIPGKMNSFIADNSQLDSKLTL

>SEQUENCE_2
SATVSEINSETDFVAKNDQFIALTKDTTAHIQSNSLQSVEELHSSTINGVKFEEYLKSQI
ATIGENLVVRRFATLKAGANGVVNGYIHTNGRVGVVIAAACDSAEVASKSRDLLRQICMH
```  

So if you want to count the number of sequences contained in a .fasta file, you can easily have it done using the `grep` command:  

```bash
grep ">" file.fasta | wc -l
```  

What this line does is just selecting all the `>` characters, and then count all their occurrences. More specifically, the `grep` command will find all the lines starting with `>`, and its output will then be piped to the `wc` (word count) command, that thanks to the `-l` option will count lines instead of words.  

Another way of using `grep` on modern systems is to use the following command:  

```bash
grep -c ">" file.fasta
```  

The `-c` option will instruct the command to count the matching lines, instead of just printing them to the screen, without the need for `wc -l` as seen above.  

## Fastq Files  

It’s not uncommon to work with [.fastq files](https://en.wikipedia.org/wiki/FASTQ_format) too, which are somehow just like .fasta files, but they also report bases quality. In this case the `>` character, used to specify the beginning of a sequence in .fasta files, is replaced by `@`; however, searching for its occurrences as shown above may be misleading, because the `@` character is also used as a quality score symbol.
There is a trick for counting sequences in a .fastq file, anyway, and it’s related to the usual layout of this kind of file. Each sequence is represented by four lines: the first one being a sequence identifier, the second one is the actual sequence, the third line is usually empty and only contains a placeholder `+`, while the last line contains the sequence quality scores:  

```
@SEQ_ID1
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
```  

This means that counting the number of sequences is easier than expected, and will only require dividing the number of lines in the file by four. This can be done on Bourne shells using these commands:  

```bash
LINES=`cat file.fastq | wc -l`
READS=`expr $LINES / 4`
echo $READS
```  

On modern shells, such as Bash, this can be done with a simple one-liner:  

```bash
expr $(cat file.fastq | wc -l) / 4
```  
