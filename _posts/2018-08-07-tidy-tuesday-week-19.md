---
layout: post
title: Tidy Tuesday - Week 19
permalink: /datascience/tidy-tuesday-week-19
category: datascience
comments: true
tags: 
 - tidytuesday
 - data
 - visualization
image: /images/tidy_tuesday.png
description: "My post for Week 19 of the #TidyTuesday weekly project."
---
This is an extract from my work for week 19 of the [#TidyTuesday](https://thomasmock.netlify.com/post/tidytuesday-a-weekly-social-data-project-in-r/) project.  

This week's dataset was focused on airlines' accidents, particularly on differences between the 1985-1999 and 2000-2014 years. I decided to highlight how much each airline company reduced (or not) the amount of incidents, fatalities and fatal accidents in recent years. More information on these categories of accidents can be found in the [original article](https://fivethirtyeight.com/features/should-travelers-avoid-flying-airlines-that-have-had-crashes-in-the-past/).  

All code and data can be found in my dedicated GitHub repository [MyTidyTuesday](https://github.com/robertopreste/MyTidyTuesday).  

___  


## Week 19 - Airline Safety  


``` r
library(tidyverse)
```

    ## ── Attaching packages ───────────────────────────────────────────────────────────── tidyverse 1.2.1 ──

    ## ✔ ggplot2 3.0.0     ✔ purrr   0.2.5
    ## ✔ tibble  1.4.2     ✔ dplyr   0.7.5
    ## ✔ tidyr   0.8.1     ✔ stringr 1.3.1
    ## ✔ readr   1.1.1     ✔ forcats 0.3.0

    ## ── Conflicts ──────────────────────────────────────────────────────────────── tidyverse_conflicts() ──
    ## ✖ dplyr::filter() masks stats::filter()
    ## ✖ dplyr::lag()    masks stats::lag()

``` r
library(fivethirtyeight)
data("airline_safety")
```

------------------------------------------------------------------------

These are the starting data (the original article can be found [here](https://fivethirtyeight.com/features/should-travelers-avoid-flying-airlines-that-have-had-crashes-in-the-past/)):

``` r
head(airline_safety)
```

    ## # A tibble: 6 x 9
    ##   airline          incl_reg_subsidiar… avail_seat_km_per_… incidents_85_99
    ##   <chr>            <lgl>                             <dbl>           <int>
    ## 1 Aer Lingus       FALSE                         320906734               2
    ## 2 Aeroflot         TRUE                         1197672318              76
    ## 3 Aerolineas Arge… FALSE                         385803648               6
    ## 4 Aeromexico       TRUE                          596871813               3
    ## 5 Air Canada       FALSE                        1865253802               2
    ## 6 Air France       FALSE                        3004002661              14
    ## # ... with 5 more variables: fatal_accidents_85_99 <int>,
    ## #   fatalities_85_99 <int>, incidents_00_14 <int>,
    ## #   fatal_accidents_00_14 <int>, fatalities_00_14 <int>

------------------------------------------------------------------------

### Tidying the data  


Let's calculate the difference of accidents in 2000-2014 vs 1985-1999; lower values mean a reduced number of accidents in recent years. After that, we'll `gather` these values.

``` r
airline_diff <- airline_safety %>% 
    mutate(fatal_accidents = fatal_accidents_00_14 - fatal_accidents_85_99, 
           fatalities = fatalities_00_14 - fatalities_85_99, 
           incidents = incidents_00_14 - incidents_85_99) %>% 
    gather(key = "event", value = "occurrences", fatal_accidents, fatalities, incidents) %>% 
    select(everything(), -c(fatal_accidents_85_99, fatal_accidents_00_14, fatalities_85_99, fatalities_00_14, incidents_85_99, incidents_00_14))
```

The tidy dataset looks like this:

``` r
head(airline_diff)
```

    ## # A tibble: 6 x 5
    ##   airline       incl_reg_subsidia… avail_seat_km_per… event    occurrences
    ##   <chr>         <lgl>                           <dbl> <chr>          <int>
    ## 1 Aer Lingus    FALSE                       320906734 fatal_a…           0
    ## 2 Aeroflot      TRUE                       1197672318 fatal_a…         -13
    ## 3 Aerolineas A… FALSE                       385803648 fatal_a…           0
    ## 4 Aeromexico    TRUE                        596871813 fatal_a…          -1
    ## 5 Air Canada    FALSE                      1865253802 fatal_a…           0
    ## 6 Air France    FALSE                      3004002661 fatal_a…          -2

------------------------------------------------------------------------

### Visualizations  


``` r
airline_diff %>% 
    filter(event == "fatalities", occurrences != 0) %>% 
    ggplot(aes(x = reorder(airline, occurrences), y = occurrences, fill = occurrences)) + 
    geom_col() + 
    coord_flip() + 
    scale_fill_gradientn(colors = c("darkgreen", "aquamarine3", "seagreen3", "yellow", "orange", "darkred")) +
    labs(x = "Airline", y = "Fatalities", fill = "", title = "Difference in number of fatalities", subtitle = "Years 1985-1999 vs 2000-2014")
```

![](/images/Week_19_files/figure-markdown_github/unnamed-chunk-5-1.png)

``` r
airline_diff %>% 
    filter(event == "fatal_accidents", occurrences != 0) %>% 
    ggplot(aes(x = reorder(airline, occurrences), y = occurrences, fill = occurrences)) + 
    geom_col() + 
    coord_flip() +
    scale_fill_gradientn(colors = c("darkgreen", "aquamarine3", "seagreen3", "orange", "darkred"), values = c(0, 0.6, 0.7, 0.8, 1)) + 
    labs(x = "Airline", y = "Fatal Accidents", fill = "", title = "Difference in number of fatal accidents", subtitle = "Years 1985-1999 vs 2000-2014")
```

![](/images/Week_19_files/figure-markdown_github/unnamed-chunk-6-1.png)

``` r
airline_diff %>% 
    filter(event == "incidents", occurrences != 0) %>% 
    ggplot(aes(x = reorder(airline, occurrences), y = occurrences, fill = occurrences)) + 
    geom_col() + 
    coord_flip() +
    scale_fill_gradientn(colors = c("darkgreen", "aquamarine3", "seagreen3", "orange", "darkred"), values = c(0, 0.7, 0.8, 0.9, 1)) + 
    labs(x = "Airline", y = "Incidents", fill = "", title = "Difference in number of incidents", subtitle = "Years 1985-1999 vs 2000-2014")
```

![](/images/Week_19_files/figure-markdown_github/unnamed-chunk-7-1.png)


