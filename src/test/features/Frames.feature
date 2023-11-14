@Frames

Feature: iFrame and Nested Frames

Background: Work with iFrame and Nested Frames 
  Given User visits the website 

Scenario: User is able to enter a correct credentials 
  When User is able to click "<FUNCTION>"
  Then User goes to Nested Frames
  
  Examples:
        |  FUNCTION   |
        |  Nested Frames     |