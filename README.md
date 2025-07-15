# reto-tecnico

## Sauce Demo - Automatización QA Frontend con Playwright y Cucumber

### Descripción

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web [Sauce Demo](https://www.saucedemo.com/), implementada con Playwright y Cucumber. El objetivo es validar funcionalidades clave como el inicio de sesión, gestión del carrito de compras y el proceso completo de checkout, utilizando el patrón de diseño Page Object Model para mantener un código organizado y escalable.

---

### Contenidos

- Inicio de sesión con usuarios válidos e inválidos.
- Agregar productos al carrito.
- Visualización de productos en el carrito.
- Completar el proceso de compra.
- Manejo de usuarios bloqueados y validación de mensajes de error.

---

### Tecnologías y Herramientas

- [Playwright](https://playwright.dev/) (automatización de navegadores)
- [Cucumber](https://cucumber.io/) (BDD y Gherkin)
- Node.js y npm
- Page Object Model (POM) como patrón de diseño

---

## Estructura del Proyecto
/reto-tecnico  
├── features       # Archivos feature en lenguaje Gherkin  
├── hooks          # Hooks para configuración y limpieza  
├── node_modules   # Dependencias instaladas  
├── pages          # Clases Page Object Model para cada página web  
├── steps          # Step definitions para los tests  
├── cucumber.js    # Configuración de Cucumber  
├── package.json   # Dependencias y scripts de npm  
├── package-lock.json  
└── README.md      # Documentación del proyecto  


### Clonación de Repositorio

```bash
git clone https://github.com/Christopher-SDK/reto-tecnico.git
cd reto-tecnico
```

### Instalación de dependencias

```bash
npm install
```

### Instalación de navegadores para Playwright

```bash
npx playwright install
```

---

### Uso / Ejecución de las pruebas

Para ejecutar todos los tests:

```bash
npx cucumber-js
```

---

### Credenciales para pruebas

- Usuario estándar: `standard_user` / `secret_sauce`
- Usuario bloqueado: `locked_out_user` / `secret_sauce`

---

### Patrones de Diseño

Se implementó el patrón **Page Object Model (POM)** para separar la lógica de interacción con la UI de los tests y step definitions, mejorando la mantenibilidad y legibilidad del código.

---

### Estrategia de Automatización

- Uso de BDD con Gherkin para describir escenarios claros y comprensibles.  
- Steps bien definidos que invocan métodos de las páginas según POM.  
- Validación de escenarios positivos y negativos (login válido, login inválido, usuario bloqueado).  
- Automatización de flujo completo desde login, agregar productos, ver carrito y finalizar compra.  
- Validaciones explícitas para mensajes, elementos y navegación entre páginas.

---

### Mejores Prácticas

- Código modular y reutilizable.  
- Nombres claros en features, escenarios y steps.  
- Uso de selectores estables (`data-test`).  
- Manejo adecuado de esperas y sincronización en Playwright.

---

### Menciones

Este proyecto es un reto por parte de Inetum y Pacífico Seguros y puede ser extendido con más escenarios y funcionalidades. 

---

### Autor

Christopher Arias  
QA Automation Engineer  
[christopherarias2@gmail.com]  



