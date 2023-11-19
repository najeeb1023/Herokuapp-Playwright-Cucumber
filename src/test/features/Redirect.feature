@Redirect
Feature: User is able to execute the redirect link functionality

Background: Landing Page
 Given User visits the website

Scenario: User is able to enter a correct credentials  
 When User is able to select a "<FUNCTION>"
 Then User is redirected

  Examples:
        |  FUNCTION   |
        |  Redirect Link |