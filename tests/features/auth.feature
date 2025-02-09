Feature: User Authentication
  As a user
  I want to be able to log in to the application
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter valid username and password
    And I click the login button
    Then I should see a success message

  Scenario: Failed login with invalid credentials
    When I enter invalid username and password
    And I click the login button
    Then I should see an error message

  Scenario Outline: Login with different user types
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should see "<message>"

    Examples:
      | username  | password             | message                    |
      | tomsmith | SuperSecretPassword! | You logged in successfully |
      | invalid  | invalid             | Your username is invalid   |
