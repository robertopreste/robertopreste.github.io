---
layout: post
title: Tidy Tuesday - Week 20
permalink: /datascience/tidy-tuesday-week-20
redirect_to: https://github.com/robertopreste/MyTidyTuesday/blob/master/Week_20/Week_20.md
category: datascience
comments: true
tags: 
 - tidytuesday
 - data
 - visualization
image: /images/tidy_tuesday.png
description: "My post for Week 20 of the #TidyTuesday weekly project."
---
This is my work for week 20 of the [#TidyTuesday](https://thomasmock.netlify.com/post/tidytuesday-a-weekly-social-data-project-in-r/) project.  

This week's dataset was focused on Russian Trolls Tweets. As further explained in the [original article](https://fivethirtyeight.com/features/why-were-sharing-3-million-russian-troll-tweets/) from FiveThirtyEight, almost 3000 Twitter troll accounts were found to be active from 2015 to 2018, possibly influencing the American elections outcome as well as subsequent events.  
In this notebook I explored a bit the collection of almost 3 millions tweets from these troll handles, highlighting some of their peculiarities and tweeting trends over time.  

All code and data can be found in my dedicated GitHub repository [MyTidyTuesday](https://github.com/robertopreste/MyTidyTuesday).  

___


## Week 20 - Russian Troll Tweets  


``` r
library(tidyverse)
library(lubridate)
```

------------------------------------------------------------------------

The original data are not included in this repo, given their dimension, but are available on fivethirtyeight's [GitHub](https://github.com/fivethirtyeight/russian-troll-tweets) and are detailed in a specific [article](https://fivethirtyeight.com/features/why-were-sharing-3-million-russian-troll-tweets/).

``` r
tweet_1 <- read_csv("russian-troll-tweets/IRAhandle_tweets_1.csv", col_types = "ccccccciiicciic")
tweet_2 <- read_csv("russian-troll-tweets/IRAhandle_tweets_2.csv", col_types = "ccccccciiicciic") 
tweet_3 <- read_csv("russian-troll-tweets/IRAhandle_tweets_3.csv", col_types = "ccccccciiicciic")
tweet_4 <- read_csv("russian-troll-tweets/IRAhandle_tweets_4.csv", col_types = "ccccccciiicciic")
tweet_5 <- read_csv("russian-troll-tweets/IRAhandle_tweets_5.csv", col_types = "ccccccciiicciic")
tweet_6 <- read_csv("russian-troll-tweets/IRAhandle_tweets_6.csv", col_types = "ccccccciiicciic") 
tweet_7 <- read_csv("russian-troll-tweets/IRAhandle_tweets_7.csv", col_types = "ccccccciiicciic")
tweet_8 <- read_csv("russian-troll-tweets/IRAhandle_tweets_8.csv", col_types = "ccccccciiicciic") 
tweet_9 <- read_csv("russian-troll-tweets/IRAhandle_tweets_9.csv", col_types = "ccccccciiicciic") 
```

Let's merge all the dataset together.

``` r
tweets <- bind_rows(list(tweet_1, tweet_2, tweet_3, tweet_4, tweet_5, tweet_6, tweet_7, tweet_8, tweet_9))
```

------------------------------------------------------------------------

### Data exploration  


First of all, let's find the top 20 tweeters and distinguish them based on their assigned account category.

``` r
top_20_handles <- tweets %>% 
    group_by(author, account_category) %>% 
    summarise(n = n()) %>% 
    arrange(desc(n)) 
top_20_handles <- top_20_handles[1:20, ]
```

``` r
top_20_handles %>% 
    ggplot(aes(x = reorder(author, n), y = n)) + 
    geom_col(aes(fill = account_category)) + 
    coord_flip() + 
    labs(x = "Authors", y = "Tweets", title = "Top 20 tweeters", fill = "") + 
    theme(legend.position = "bottom")
```

![](/images/Week_20_files/figure-markdown_github/unnamed-chunk-5-1.png)

The top tweeters are commercial, (fake) news feeds and Right trolls.

However, even though these are the most active account categories, we can see that the first two groups represent only a small part of the total IRA handles.

``` r
categ_count <- tweets %>% 
    select(author, account_category) %>% 
    distinct() %>% 
    group_by(account_category) %>% 
    summarise(n = n())
```

``` r
categ_count %>% 
    ggplot(aes(x = reorder(account_category, n), y = n)) + 
    geom_col(aes(fill = account_category)) + 
    coord_flip() + 
    labs(x = "Category", y = "Accounts", title = "Number of handles per category") + 
    guides(fill = FALSE)
```

![](/images/Week_20_files/figure-markdown_github/unnamed-chunk-7-1.png)

We might want to know the tweeting frequency of these top 20 accounts, to check if there is some tweeting trend.

``` r
top_tweets <- tweets %>% 
    filter(author %in% top_20_handles$author) %>% 
    separate(col = publish_date, into = c("pub_date", "pub_time"), sep = " ") %>% 
    mutate(pub_date = as_date(pub_date, tz = "UTC", format = "%d/%m/%Y"))
```

``` r
top_tweets_grouped <- top_tweets %>% 
    group_by(pub_date, account_category) %>% 
    summarise(n = n()) %>% 
    filter(!is.na(pub_date))
```

``` r
top_tweets_grouped %>% 
    ggplot(aes(x = pub_date, y = n)) + 
    geom_line(aes(color = account_category)) + 
    labs(x = "Date", y = "Tweets", color = "", title = "Tweeting activity", subtitle = "Top 20 handles")
```

![](/images/Week_20_files/figure-markdown_github/unnamed-chunk-10-1.png)

From this plot we can see that, among the top 20 tweeters, the commercial ones posted a number of tweets 4 times greater than the other categories, but suddenly stopped tweeting right before 2016.
Let's check if this is true taking into account all handles, not just the top 20.

``` r
tweets_dates <- tweets %>% 
    separate(col = publish_date, into = c("pub_date", "pub_time"), sep = " ") %>% 
    mutate(pub_date = as_date(pub_date, tz = "UTC", format = "%d/%m/%Y"))
```

``` r
tweets_dates_grouped <- tweets_dates %>% 
    filter(pub_date >= "2015/01/01", pub_date <= "2018/01/01") %>% 
    group_by(pub_date, account_category) %>% 
    summarise(n = n()) %>% 
    filter(!is.na(pub_date))
```

``` r
tweets_dates_grouped %>% 
    ggplot(aes(x = pub_date, y = n)) + 
    geom_line(aes(color = account_category)) + 
    labs(x = "Date", y = "Tweets", title = "Tweeting activity", subtitle = "All handles") + 
    facet_wrap(~ account_category, nrow = 4) + 
    guides(color = FALSE)
```

![](/images/Week_20_files/figure-markdown_github/unnamed-chunk-13-1.png)

What we found previously might hold true concerning commercial tweeters: their number of tweets suddenly drops since 2016. However, we can also discover some more interesting insights:  

 - fearmonger accounts (those spreading fake crisis news) seem to disappear right before 2017 (luckily, I would add);  
 - Left trolls had a peak in their activity in mid 2016: I'm no expert in American politics, but this seem to overlap with the Democrats presidential primaries;  
 - Right trolls, although having a fairly constant tweeting rate initially, seem to show some sort of exponential increase starting from the first months of 2016;  
 - all the other categories do not show any particular trend.  

In addition, almost all categories have an almost identical monthly trend in tweets.

Let's see how the number of followers and followed accounts changed for each of these categories over time.

``` r
tweets_foll_grouped <- tweets_dates %>% 
    filter(pub_date >= "2015/01/01", pub_date <= "2018/01/01") %>% 
    group_by(pub_date, account_category) %>% 
    summarise(followers = sum(followers), following = sum(following)) %>% 
    filter(!is.na(pub_date))
```

``` r
tweets_foll_grouped %>% 
    ggplot(aes(x = pub_date)) + 
    geom_line(aes(y = log(followers), color = "red")) + 
    geom_line(aes(y = log(following), color = "blue")) + 
    labs(x = "Date", y = "Accounts (log)", title = "Followers and Followed accounts") + 
    facet_wrap(~ account_category, nrow = 4) + 
    scale_colour_manual(name = "", values = c("red" = "red", "blue" = "blue"), labels = c("Followed Accounts", "Followers")) + 
    theme(legend.position = "bottom")
```

![](/images/Week_20_files/figure-markdown_github/unnamed-chunk-15-1.png)

The log transformation allows to better appreciate fluctuations in these numbers. The number of followers and followed accounts is mostly equal within each category; however, particular trends can be found characterizing 2015, 2016 and 2017, with 2016 being the year with less variation in these numbers, among all categories.

------------------------------------------------------------------------

### Disclaimer  


These are just some basic insights, created for simple data exploration and visualization purposes. Furthermore, some of the results shown come from filtering the data to some extent.
No conclusions should be drawn from what is reported here; more appropriate analysis are being conducted by more qualified people than me, like [Darren Linvill](https://www.clemson.edu/cbshs/faculty-staff/profiles/darrenl) and [Patrick Warren](http://pwarren.people.clemson.edu/) and you should get in touch with them if interested in these data.

All in all, this was an interesting dataset to work with and I'm keen to come back to it in the future, to explore it more deeply with some text and sentiment analysis techniques.


