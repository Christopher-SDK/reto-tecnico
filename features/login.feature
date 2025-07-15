Feature: Login en Sauce Demo

  Scenario: Login con usuario válido
    Given que el usuario está en la página de login
    When ingresa las credenciales válidas
    Then debería ver la página de productos

  Scenario: Login con usuario bloqueado
    Given que el usuario está en la página de login
    When ingresa las credenciales bloqueadas
    Then debería ver un mensaje de error
