@AddRemove
Feature: Add Remove functionality


Background: User is able to add and remove some elements from the elements functionality
    Given User visits the website


Scenario:
    When User enters "<FUNCTION>"
    And User clicks Add Element option <TIMES> times
    Then <TIMES> element are added

    Examples:
        | FUNCTION            | TIMES |
        | Add/Remove Elements | 50     |