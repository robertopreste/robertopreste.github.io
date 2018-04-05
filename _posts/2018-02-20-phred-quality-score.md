---
layout: post
title: Phred Quality Score
permalink: /blog/phred-quality-score
category: blog
tags: 
 - bioinformatics
image: 
 - /images/phreds.png
description: "How to interpret base calling qualities in Next Generation Sequencing data."
---

Next Generation Sequencing techniques have brought new insights into -omics data analysis, mostly thanks to their reliability in detecting biological variants. This reliability is usually measured using a quality score named Phred (or Q score).  

![Phred Quality Score](/images/phreds.png)  

The Phred score of a base is an integer value that represents the estimated probability of an error in base calling. Mathematically, a Q score is logarithmically related to the base-calling error probabilities P, and can be calculated using the following formula:  

```
Q = -10 log10 P
```  

In the real world, a quality score of 20 means that there is a possibility in 100 that the base in incorrect; a quality score of 40 means the chances that the base is called incorrectly is 1 in 10000. The Phred score is also inversely related to the base call accuracy, thus a higher Q score means a more reliable base call. Here is a useful table which shows this simple relationship:  

Phred Quality Score | Incorrect base call prob | Base call accuracy 
--- | --- | --- 
10 | 1 in 10 | 90% 
20 | 1 in 100 | 99% 
30 | 1 in 1000 | 99.9% 
40 | 1 in 10000 | 99.99% 

In fastq files, Phred quality scores are usually represented using [ASCII characters](https://en.wikipedia.org/wiki/ASCII), such that the quality score of each base can be specified using a single character. While older Illumina data used to apply the ASCII_BASE 64, nowadays the ASCII_BASE 33 table has been universally adopted for NGS data:  


<div style="width: 100%">
<div style="width: 5%; float: left;">&nbsp;</div>
<div style="width: 22.5%; float: left;">
<table>
<thead>
<tr>
<th>Q score</th>
<th>ASCII char</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>!</td>
</tr>
<tr>
<td>1</td>
<td>"</td>
</tr>
<tr>
<td>2</td>
<td>#</td>
</tr>
<tr>
<td>3</td>
<td>$</td>
</tr>
<tr>
<td>4</td>
<td>%</td>
</tr>
<tr>
<td>5</td>
<td>&amp;</td>
</tr>
<tr>
<td>6</td>
<td>'</td>
</tr>
<tr>
<td>7</td>
<td>(</td>
</tr>
<tr>
<td>8</td>
<td>)</td>
</tr>
<tr>
<td>9</td>
<td>*</td>
</tr>
<tr>
<td>10</td>
<td>+</td>
</tr>
</tbody>
</table>
</div>
<div style="width: 22.5%; float: left;">
<table>
<thead>
<tr>
<th>Q score</th>
<th>ASCII char</th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td>,</td>
</tr>
<tr>
<td>12</td>
<td>-</td>
</tr>
<tr>
<td>13</td>
<td>.</td>
</tr>
<tr>
<td>14</td>
<td>/</td>
</tr>
<tr>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>16</td>
<td>1</td>
</tr>
<tr>
<td>17</td>
<td>2</td>
</tr>
<tr>
<td>18</td>
<td>3</td>
</tr>
<tr>
<td>19</td>
<td>4</td>
</tr>
<tr>
<td>20</td>
<td>5</td>
</tr>
<tr>
<td>21</td>
<td>6</td>
</tr>
</tbody>
</table>
</div>
<div style="width: 22.5%; float: left;">
<table>
<thead>
<tr>
<th>Q score</th>
<th>ASCII char</th>
</tr>
</thead>
<tbody>
<tr>
<td>22</td>
<td>7</td>
</tr>
<tr>
<td>23</td>
<td>8</td>
</tr>
<tr>
<td>24</td>
<td>9</td>
</tr>
<tr>
<td>25</td>
<td>:</td>
</tr>
<tr>
<td>26</td>
<td>;</td>
</tr>
<tr>
<td>27</td>
<td>&lt;</td>
</tr>
<tr>
<td>28</td>
<td>=</td>
</tr>
<tr>
<td>29</td>
<td>?</td>
</tr>
<tr>
<td>30</td>
<td>?</td>
</tr>
<tr>
<td>31</td>
<td>@</td>
</tr>
</tbody>
</table>
</div>
<div style="width: 22.5%; float: left;">
<table>
<thead>
<tr>
<th>Q score</th>
<th>ASCII char</th>
</tr>
</thead>
<tbody>
<tr>
<td>32</td>
<td>A</td>
</tr>
<tr>
<td>33</td>
<td>B</td>
</tr>
<tr>
<td>34</td>
<td>C</td>
</tr>
<tr>
<td>35</td>
<td>D</td>
</tr>
<tr>
<td>36</td>
<td>E</td>
</tr>
<tr>
<td>37</td>
<td>F</td>
</tr>
<tr>
<td>38</td>
<td>G</td>
</tr>
<tr>
<td>39</td>
<td>H</td>
</tr>
<tr>
<td>40</td>
<td>I</td>
</tr>
<tr>
<td>41</td>
<td>J</td>
</tr>
</tbody>
</table>
</div>
<div style="width: 5%; float: left;">&nbsp;</div>
</div>  
  

<p style="clear: both">Even though there are lots of Python, Biopython and stand-alone softwares for dealing with Phred quality scores, a simple command to convert an ASCII character to its correspondent quality score is the following (from the terminal):</p>  

```
python -c 'print ord("<ASCII>")-33'
```  

Or, from inside Python:  

```
print ord("<ASCII>")-33
```  

In both cases, just replace `<ASCII>` with the actual ASCII character and that will do the trick.  

