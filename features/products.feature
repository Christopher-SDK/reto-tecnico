Feature: Productos en Sauce Demo

  Scenario: Agregar un producto al carrito
    Given que el usuario está logueado con credenciales válidas
    When agrega un producto al carrito
    Then debería ver el contador del carrito con "1"
