@RandomFunction
Feature: Tool Shop 

Background: Landing Page 
  Given User visits the website 

Scenario: User is able to enter a correct credentials 
  When User goes through the web functions
  Then User is able to select "<FUNCTION>"
  Then User is able to get Data
  
  Examples:
        |  FUNCTION   |
        |  Sortable Data Tables     |