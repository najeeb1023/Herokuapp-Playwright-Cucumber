@AddRemove
Feature: Add Remove functionality


Background: User is able to add and remove some elements from the elements functionality
    Given User visits the website


Scenario:
    When User enters "<FUNCTION>"
    And Clicks Add Element option
    Then Element is added

    Examples:
        | FUNCTION  |
        | Add/Remove Elements |