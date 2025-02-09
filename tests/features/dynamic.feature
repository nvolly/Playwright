Feature: Dynamic Elements
  As a user
  I want to interact with dynamic elements
  So that I can test dynamic web functionality

  Scenario: Adding elements dynamically
    Given I am on the add/remove elements page
    When I click the Add Element button 3 times
    Then I should see 3 Delete buttons
    When I click the first Delete button
    Then I should see 2 Delete buttons

  Scenario: Dynamic controls - Enable/Disable input
    Given I am on the dynamic controls page
    Then the input field should be disabled
    When I click the Enable button
    Then the input field should be enabled
    And I should be able to type "Hello World" in the input
    When I click the Disable button
    Then the input field should be disabled

  Scenario: Dynamic Loading
    Given I am on the dynamic loading page example "1"
    When I click the Start button
    Then I should see the loading indicator
    And the loading indicator should disappear
    And I should see the text "Hello World!"
