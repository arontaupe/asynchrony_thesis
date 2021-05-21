# Statistical analysis of audiovisual latency experiment by Aron Petau

# Import statements
library(lme4)
library(ggplot2)
library(readr)
library(sjPlot)
library(tidyverse)
library(RColorBrewer)
library(lmerTest)
library(dplyr)

# Import Data
#Data should be a data frame in long format
df = read.csv("corr_results.csv",  encoding='utf-8-BOM')

# Center and standardize
df$rt_choice <- scale(df$choice_response.rt, center = TRUE, scale = TRUE)
df$rt_sj_sync <- scale(df$response_sync.rt, center = TRUE, scale = TRUE)
df$rt_sj_dist <- scale(df$response_distortion.rt, center = TRUE, scale = TRUE)
df$acc_sj_dist <- df$response_distortion.corr
df$acc_sj_sync <- df$response_sync.corr
df$acc_choice <- df$choice_response.corr

# Cleanup
# minimize into relevant data
data <- select(df, 
               cond, 
               participant, 
               rt_choice, 
               rt_sj_sync, 
               rt_sj_dist, 
               acc_sj_sync, 
               acc_sj_dist, 
               acc_choice,
               sentence_id,
               target_loc
               )
head(data)

# Plot Data
boxplot(rt_choice ~ cond,data = data)

# Basic histogram

ggplot(df, aes(x=rt_choice)) + geom_histogram(binwidth=0.05) + xlim(0, 5)


# Construct Null hypothesis
experiment.null <- lmer(rt_choice ~ cond + target_loc + (1|participant) + (1|sentence_id), data=data, REML=FALSE)

#Display result
summary(experiment.null)
tab_model(experiment.null)

# Model full model
experiment.model <- lmer(rt_choice ~ target_loc + (1|participant) + (1|sentence_id), data=data, REML=FALSE)

#summary(experiment.model, experiment.null)
tab_model(experiment.null, experiment.model)


#compare null vs full using anova
#anova(experiment.null,experiment.model)

#Verify model


# Get P values by comparing against full model


# check assumptions
#To assess normality of residuals (does plot seem to lie on straight line?):   
plot(qqnorm(resid(experiment.model)))


## Random effects

#Plots for examining the assumption that random effects are normally distributed, centered at 0, and have constant variance.
#To check constant variance of random effects (is the scatter uniform?):   

plot(ranef(experiment.model))










#get proper citation
#citation()
#citation("lme4")
