@abTesting
Feature: Tool Shop 

Background: Landing Page
Given User visits the website

Scenario: User is able to enter a correct credentials  
When User is able to select "<FUNCTION>"
And  User is able to get text

Examples:
      |  FUNCTION   |
      |  A/B Testing |