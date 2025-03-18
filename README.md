# Amigo Secreto

Este proyecto es una aplicación web sencilla para la aplicación "Amigo Secreto" de manera interactiva. Los usuarios pueden ingresar los nombres de sus amigos, realizar un sorteo aleatorio y ver el resultado de quién fue el seleccionado, todo dentro de la misma página web.

## Características

- **Ingreso de nombres**: Los usuarios pueden agregar los nombres de sus amigos.
- **Validación de entradas**: Se validan los nombres para validar que no contengan caracteres especiales y no estén vacíos.
- **Sorteo aleatorio**: Se puede realizar un sorteo de un amigo secreto de forma aleatoria, eligiendo uno de los amigos que han sido ingresados.
- **Deshabilitar acciones**: Una vez realizado el sorteo, el botón para agregar más nombres y el campo de entrada se deshabilitan para evitar más cambios.

## Tecnologías utilizadas

- **HTML**: Para la estructura básica de la página.
- **CSS**: Para el diseño y estilo visual de la interfaz.
- **JavaScript**: Para la lógica de la aplicación, como la validación, la gestión de la lista de amigos y el sorteo aleatorio.

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/FranzGar/challenge-amigo-secreto.git
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd challenge-amigo-secreto
   ```

3. Abre el archivo `index.html` en tu navegador favorito.

## Uso

1. **Agregar amigos**: Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Añadir". Los nombres ingresados aparecerán en una lista.
2. **Realizar sorteo**: Después de agregar al menos dos amigos, haz clic en "Sortear amigo" para elegir aleatoriamente a un amigo secreto.
3. **Ver el resultado**: El nombre del amigo sorteado se mostrará en la pantalla y no podrás realizar más sorteos ni agregar más amigos hasta recargar la página.

## Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── README.md           # Descripción de la aplicación, contenidos y donde se ubica
└── app.js              # Lógica de JavaScript

## Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un **fork** del repositorio y enviar un **pull request** con las mejoras que consideres necesarias. Asegúrate de probar tus cambios antes de enviarlos.
