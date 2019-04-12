---
layout: post
title: Parse an XML file into a pandas DataFrame
permalink: /blog/parse-xml-into-dataframe
category: blog
comments: true
tags: 
 - informatics
 - datascience
 - XML
 - pandas
image: /images/xml-template.png
description: "How to parse XML files to obtain a proper pandas dataframe."
---

![XML files](/images/xml-template.png){: .post_right_img}

[XML](http://www.w3.org/TR/xml/) is a markup language often used to represent and distribute data structures which can be often difficult to create using more standard tabular formats.  

Basically, the XML format is similar to [HTML](https://en.wikipedia.org/wiki/HTML) (which is another markup language, indeed), in that data are organized in elements, which define the type of information exposed, and each element contains the actual data in the form of content or attributes.  

The [XML Wikipedia page](https://en.wikipedia.org/wiki/XML) offers an extensive overview of all the details and technicalities of this format, but the key concepts are simple. Each piece of information is delimited by a specific tag, like this:  

```xml
<data>
    <student name="John">
        <email>john@mail.com</email>
        <grade>A</grade>
        <age>16</age>
    </student>
    <student name="Alice">
        <email>alice@mail.com</email>
        <grade>B</grade>
        <age>17</age>
    </student>
    <student name="Bob">
        <email>bob@mail.com</email>
        <grade>C</grade>
        <age>16</age>
    </student>
    <student name="Hannah">
        <email>hannah@mail.com</email>
        <grade>A</grade>
        <age>17</age>
    </student>
</data>
```  

In this example, each student is represented by a `<student>` element, which has a `name` attribute containing the name of a specific student. Each of these elements has then sub-elements defined by the `<email>`, `<grade>` and `<age>` tags; between these tags the actual data content referring to the given student is present. Let's say this data is saved in an XML file called "students.xml".  
We can think of this structure as a pandas DataFrame in which each student represents an observation, with its `name` attribute being the main identifier and the sub-elements being other features of the observation. A tabular representation of these data would be like this:  

| name | email | grade | age |  
| ------- | ----- | ----- | --- |  
| John | john@mail.com | A | 16 |  
| Alice | alice@mail.com | B | 17 |  
| Bob | bob@mail.com | C | 16 |  
| Hannah | hannah@mail.com | A | 17 |  

So we want to find a way to convert XML-structured data to a more functional table.  

Given the structure of XML files, we can represent them as a tree, and this is the approach used by the [xml.etree.ElementTree](https://docs.python.org/3/library/xml.etree.elementtree.html) Python module. The parsing of our "students.xml" file starts at the *root* of the tree, namely the `<data>` element, which contains the entire data structure.  

```python
import xml.etree.ElementTree as et 

xtree = et.parse("students.xml")
xroot = xtree.getroot()
```

Now we can iterate through each *node* of the tree, which means we will get each student element and grab its `name` attribute and all of its sub-elements to build our dataframe.  

```python
for node in xroot: 
    s_name = node.attrib.get("name")
    s_mail = node.find("email").text
    s_grade = node.find("grade").text
    s_age = node.find("age").text
```

In order to get the `name` attribute, we use the `attrib.get()` function, while the text content of each element can be retrieved using the `find()` function of nodes.  
Each iteration will return a set of data that can be thought as an observation in a pandas DataFrame; we can build this procedure as follows:  

```python
import pandas as pd 
import xml.etree.ElementTree as et 
    
xtree = et.parse("students.xml")
xroot = xtree.getroot() 

df_cols = ["name", "email", "grade", "age"]
out_df = pd.DataFrame(columns = df_cols)

for node in xroot: 
    s_name = node.attrib.get("name")
    s_mail = node.find("email").text if node is not None else None
    s_grade = node.find("grade").text if node is not None else None
    s_age = node.find("age").text if node is not None else None
    
    out_df = out_df.append(pd.Series([s_name, s_mail, s_grade, s_age], 
                                     index = df_cols), 
                           ignore_index = True)
```

The downside to this approach is that you need to know the structure of the XML file in advance, and you have to hard-code column names accordingly.  
We can try to convert this code to a more useful and versatile function, without having to hard-code any values.  

```python
import pandas as pd
import xml.etree.ElementTree as et

def parse_XML(xml_file, df_cols): 
    """Parse the input XML file and store the result in a pandas DataFrame 
    with the given columns. The first element of df_cols is supposed to be 
    the identifier variable, which is an attribute of each node element in 
    the XML data; other features will be parsed from the text content of 
    each sub-element. """
    
    xtree = et.parse(xml_file)
    xroot = xtree.getroot()
    out_df = pd.DataFrame(columns = df_cols)
    
    for node in xroot: 
        res = []
        res.append(node.attrib.get(df_cols[0]))
        for el in df_cols[1:]: 
            if node is not None and node.find(el) is not None:
                res.append(node.find(el).text)
            else: 
                res.append(None)
        out_df = out_df.append(pd.Series(res, index = df_cols), ignore_index = True)
        
    return out_df
```

If we apply our function to the "students.xml" file using `parse_XML("students.xml", ["name", "email", "grade", "age"])`, the result is precisely the table we saw above.  

This is a more efficient implementation of the XML parsing function, although we still need to know the basic structure of the input XML document we want to parse.  
 

