---
layout: post
title: Python String Formatting
permalink: /blog/python-string-formatting
category: blog
comments: true
tags: 
 - informatics
 - python
 - string
image: /images/python.jpg
description: "Different methods to perform string formatting operations in Python."
---

When there's a need for concatenating a Python string with some variables, there are actually several ways to achieve the same results. Some of them are quite basic, others are less recommended, but all of them are equally efficient for string formatting purposes.  

## The basic way  

The simplest method for concatenating strings and variables is the following:  

```python
>>> print("hello" + " " + "world")
hello world

>>> age = 27
>>> print("I am " + str(age) + " years old")
I am 27 years old

>>> print("Pi is equal to " + str(3.14159265) + " and so on")
Pi is equal to 3.14159265 and so on
```

This will work well, although when trying to concatenate an integer, Python will return an error. Variables whose class is not `str` will need to be casted to `str()` to be successfully integrated into the string.  

## The old way  

The legacy method for string substitution is like this:  

```python
>>> print("hello %s" % "world")
hello world

>>> age = 27
>>> print("I am %d years old" % age)
I am 27 years old

>>> print("Pi is equal to %f and so on" % 3.14159265)
Pi is equal to 3.141592 and so on
```

This way it is possible to use placeholders such as `%s` for strings, `%d` for integers, `%f` for floats, `%r` for string representations of Python objects (as provided by the object's `__repr__()` method), and others. Floats are represented by default using 6 decimal digits, but this number can be modified as preferred:  

```python
>>> print("Pi is equal to %.2f and so on" % 3.14159265)
Pi is equal to 3.14 and so on
```

A discretional number of elements can be interpolated into the string, by surrounding with braces the variables after the `%` sign (actually, this should be standard also with a single variable, in order to avoid incidental issues):  

```python
>>> print("I will go to the %s tomorrow at %d" % ("gym", 6))
I will go to the gym tomorrow at 6

>>> a = 6
>>> b = 8.155
>>> print("%d plus %.3f equals %.3f" % (a, b, (a + b)))
6 plus 8.155 equals 14.155

# recommended way with single variable
>>> age = 27
>>> print("I am %d years old" % (age, ))
I am 27 years old
```

## The new (and recommended) way  

Starting from Python 2.6 on, the `str.format()` is the election method for string formatting, given its great capabilities:  

```python
>>> print("hello {}".format("world"))
hello world

>>> age = 27
>>> print("I am {} years old".format(age))
I am 27 years old

>>> print("Pi is equal to {} and so on".format(3.14159265))
Pi is equal to 3.14159265 and so on
```

This way is a bit more straighforward to use, since there's no need to know the variable's type *a priori*: the `{}` placeholder will be equally valid for anything. Furthermore, floats values get rendered exactly as we provide them, with no default truncation to 6 decimal digits.  
Floats precision can be adjusted as well:  

```python
>>> print("Pi is equal to {:.2f} and so on" % 3.14159265)
Pi is equal to 3.14 and so on
```

Multiple variables can be interpolated either using multiple `{}`, thus rendering the variable using the same order found in the `format()` function, or using numbered placeholders such as `{0}`, `{1}`, `{2}`. The latter method allows to interpolate the variable with a different order with respect to the `format()` arguments, referring to each variable with its index:  

```python
# using multiple {}
>>> print("I will go to the {} tomorrow at {}".format("gym", 6))
I will go to the gym tomorrow at 6

# using numbered {}
>>> a = 6
>>> b = 8.155
>>> print("{0} plus {1} equals {2}".format(a, b, (a + b)))
6 plus 8.155 equals 14.155

>>> print("{1} plus {2} equals {0}".format((a + b), a, b))
6 plus 8.155 equals 14.155
``` 

The `format()` function's arguments can also be easily referred to using named variables:  

```python
>>> print("My name is {name} and I am {age} years old".format(name="Roberto", age=27))
My name is Roberto and I am 27 years old
```

When things get messy, it is possible to substitute variables using key/value pairs stored in a dictionary:  

```python
>>> myself = {
    "name": "Roberto", 
    "age": 27
    }
>>> print("My name is {m[name]} and I am {m[age]} years old".format(m=myself))
My name is Roberto and I am 27 years old
``` 
