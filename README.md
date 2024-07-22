# Proyecto de Prueba - Andy Martel

## Descripción

Este proyecto fue desarrollado como parte de una prueba técnica. La prueba consistía en diseñar, implementar y conectar una plataforma con "cards" para la visualización de posts o comentarios realizados por un usuario. Para ello, se utilizó el contenido gratuito ofrecido por [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com), específicamente los resultados de la llamada GET a `https://jsonplaceholder.typicode.com/posts`.

## Funcionalidades

- **Página de Login**: Simula un inicio de sesión y almacena el estado en `localStorage`.
- **Página de Inicio**: Visualiza una lista de posts en formato de "cards".
- **Paginación**: Carga más posts al hacer clic en el botón "Cargar Más".
- **Detalle del Post**: Muestra los detalles de un post específico, incluyendo comentarios y la información del usuario que creó el post.
- **Eliminación de Post**: Permite eliminar un post con confirmación a través de una alerta.

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind
- React Router DOM
- Context API para gestión del estado
- SweetAlert2 para alertas
- Jest y React Testing Library para pruebas

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/cleverpy-technical-test/frontend-andy-martel.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd frontend-andy-martel

    ```
3. Instala las dependencias:
    ```sh
    npm install
    # o
    yarn install
    ```
4. Inicia la aplicación:
    ```sh
    npm start
    # o
    yarn start
    ```

## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```sh
npm test
# o
yarn test