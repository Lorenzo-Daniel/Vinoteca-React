# Proyecto Final _E-commerce_ | React JS

## Consigna:

### Desarrolla una app de un e-commerce para poder vender productos de un rubro a elección.

---

## Descripción:

### Vinoteca es un app web ficticia para comercio online de Vinos desarrollada con React JS.

### Los componentes y la navegabilidad toman como referencia lo propuesto por el desafío.

---

## Características del desafío:

### User story/brief:

- Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
- Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito.
- Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
- Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
- Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

### Componentes sugeridos:

<<<<<<< HEAD
- Navbar
- Menu
- CartWidget
- ListItem
- ItemList
- ItemDetail
- ItemQuantitySelector
-Description
-AddItemButton
- Checkout
-Brief (detalle de compra)

---

### Requisitos:

- Inicio: Al momento de ingresar a la app en la ruta base ‘/’

- Visualizar -como mínimo- un set de productos disponibles para la compra.
- Contar con algún acceso visible a la vista de carrito que debe alojarse en el route /cart.
- Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma mediante un route /categories/:categoryId. Éste invocará la misma vista que el home, pero visualizando solamente productos de esa
categoría.

- Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto ( foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.

- Firebase:
- Implementar al menos dos colecciones:
- Items: catálogo completo
- Link para foto (puede almacenarse de modo estático en la página en una subruta /images/:itemid)
- Precio unitario
- Descripción (sólo se ve en detalle)
- Categoria (id a mano para versión estática, o id de firebase para versión dinámica -opcional-)
- orders : las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra.
-Las órdenes deben poder tener items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
-id, items, fecha, estado ( por defecto en ‘generada’)
- El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).
- Checkout mínimo:
- Items con sus cantidades
- Total de la orden
- Input para nombre, apellido y teléfono
- Input para email y lógica de repetir el email 2 veces (a excepción de que realicen el desafío extra de auth, en ese caso no sería necesario)
- Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
- La navegabilidad debe ocurrir utilizando el router, y no href’s o location.

---

### Construido con :

- Html
- css
- React JS

---

### Luego de clonar el repositorio, posiciónate ven la carpeta VinotecaReact y ejecuta _npm install_ para instalar las dependencias:

- "bootstrap": "^5.2.0",
- "firebase": "^9.10.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.3.0",
- "react-scripts": "^2.1.3",
- "sweetalert2": "^11.4.29",
- "sweetalert2-react-content": "^5.0.3",

---

### Desarrollado por _Daniel Lorenzo_
=======
- **_npm install --save sweetalert2 sweetalert2-react-content_**

![Vinoteca - Google Chrome 2022-10-13 18-21-01](https://user-images.githubusercontent.com/103971385/195714004-18847916-dc13-4354-9d50-995967d7c77f.gif)
>>>>>>> e86a95a5b22cd2c54de5c521855b71e09de02818
