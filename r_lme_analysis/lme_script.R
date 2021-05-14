# Statistical analysis of audiovisual latency experiment by Aron Petau

# Import statements
#install.packages("lme4") # use if u havent installed the packages
#install.packages("ggplot2")
library(lme4)
library(ggplot2)

# Import Data

#Data should be a data frame in long format

#dataset = 
df = read.csv("latest_results_pavlovia.csv")


# Plot Data
boxplot(frequency ~ attitude*gender,col=c("white","lightgray"),politeness)

# Cleanup

# Center and standardize



#Display result
summary(politeness.model)


# Construct Null hypothesis
politeness.null = lmer(frequency ~ gender +
                         (1|subject) + (1|scenario), data=politeness,
                       REML=FALSE)


# Model full model
politeness.model = lmer(frequency ~ attitude +
                          gender + (1|subject) + (1|scenario),
                        data=politeness, REML=FALSE)


#compare null vs full using anova
anova(politeness.null,politeness.model)

#Verify model


#To assess normality of residuals (does plot seem to lie on straight line?):   
plot(qqnorm(resid(politeness.model)))


## Random effects

#Plots for examining the assumption that random effects are normally distributed, centered at 0, and have constant variance.
#To check constant variance of random effects (is the scatter uniform?):   

plot(ranef(politeness.model))



# Get P values by comparing against full model

# check assumptions


# get proper citation
citation()
citation("lme4")
