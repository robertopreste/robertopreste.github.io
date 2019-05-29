---
layout: post
title: Tabular data memory requirements
permalink: /blog/dataset-memory-requirements
redirect_to: https://medium.com/@robertopreste/tabular-data-memory-requirements-9881d2bf747a
category: blog
comments: true
tags: 
 - informatics
 - data
 - memory
 - ram
 - bash
image: /images/tab_data.jpg
description: "How to calculate the amount of RAM needed to read in tabular data."
---

Most commonly, data are shared and worked with using a tabular format, which means observations are stored in rows and variables in columns.  

![Tabular data](/images/tab_data.jpg){: .post_left_img}

Based on the number of available rows and columns, the file size of these data can range from a few KB to many GB. There is also an additional factor that determines the final size of the data: the data type of each variable; numeric variables usually require less space that more complicated data types, like characters.  

This file size (*physical* memory) is somehow related to the amount of RAM (*computational* memory) needed to load these data into a data analysis software, like Python or R, although a linear relationship between these two values is not usually observed. Actually, the common scenario is that the RAM used to read in a file is higher than the file size, due to internal handling of the software used to read these data.  

That said, it is easy to check how much physical space a dataset occupies on a disk, as there are lots of GUI file managers and CLI commands that efficiently address this need; it is also quite simple to know how much RAM the dataset is demanding *after* it has been loaded into Python (using the pandas DataFrame [`.memory_usage()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.memory_usage.html) method) or R (the easiest way is through the [`object.size()`](https://stat.ethz.ch/R-manual/R-devel/library/utils/html/object.size.html) function).  

What is a bit more difficult, but can be extremely useful, is knowing (roughly) the RAM usage of a dataset **beforehand**: if a dataset requires a lot more memory than your computer has available, and you try to load it anyway, you might receive an error or -even worse- your computer might end up being stuck in the loading process. In cases like this one, if you already know that a dataset cannot be read efficiently by your workstation, you can opt for other more optimal solutions, such as switching to a cloud platform or only reading in chunks of your data.  

Going back to the dataset, tabular data can be thought as a rectangular table with a given number of rows and columns; the amount of RAM needed to load such dataset is simply `# of rows * # of columns * bytes/value`.  For the sake of simplicity, we will consider a dataset contanining only numeric variables, which occupy 8 bytes per each value. In this case, the above formula becomes `# of rows * # of columns * 8`.  

But how can we know the number of rows and columns of the dataset without opening the file itself? A couple of bash commands (more details in a [previous post](/blog/linux-terminal-commands)) are very helpful for this purpose.  

The number of rows can be easily found using `wc`, specifically with  

```bash
cat <file> | wc -l
```

The number of columns can be found exploiting the fact that each column is separated from the next one by a character delimiter; in CSV, for example, the separator is a comma, while in TSV there is a tab character separating each variable. In the first case, we can use  

```bash
head -n 1 <file> | grep -o "," | wc -l 
```

while in the TSV example, the only thing changing is the column delimiter, which is a tab character:  

```bash
head -n 1 <file> | grep -o "\t" | wc -l
```

Since the last column is not followed by a character delimiter (but rather a newline), you should remember to **add 1 to the results**, otherwise the following calculation will be flawed.  

Now for a quick example. Let's say we have a dataset `mydata.csv` containing only numeric values, but we don't know or remember how many rows and columns it has, though we assume it is quite big. Let's first find the number of rows and columns in the file:  

```bash
# number of rows 
$ cat mydata.csv | wc -l 
4200000

# number of columns - remember to add 1!
$ head -n mydata.csv | grep -o "," | wc -l
200
```

Now we can calculate the rough amount of RAM needed to read this dataset, using the [`bc`](https://ss64.com/bash/bc.html) command:  

```bash
$ echo "4200000 * 201 * 8" | bc 
6753600000
```

This is the memory usage in bytes, and we can easily convert it into MB or GB:  

```bash
# MB 
$ echo "4200000 * 201 * 8 / 2^20" | bc
6440 
# GB 
$ echo "4200000 * 201 * 8 / 2^20 / 1024" | bc
6
```

Even though we only took into account numeric variables, these calculations allow to roughly know the memory requirements of a tabular dataset before actually loading it, in order to avoid unexpected memory issues.  
