Feature: Carrito en Sauce Demo

  Scenario: Ver productos en el carrito y proceder al checkout
    Given que el usuario tiene productos en el carrito
    When navega al carrito
    Then debería ver "1" producto(s) en el carrito
    When hace click en el botón checkout
    Then debería ver la página de checkout
    When el usuario completa la información de checkout
    Then debería avanzar a la página de resumen
    When el usuario presiona el botón finish para completar la compra
    Then debería ver la página de confirmación de compra
