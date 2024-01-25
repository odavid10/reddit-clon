# Reddit clon

Clon de reddit utilizando React con Vite.

Tecnologías utilizadas:
ReactJs
Material UI
Axios
React Query (RTKQ)
Redux
I18N
React router

## Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crear archivo .env con las variables de entorno necesarias, más información en el .env.example

## Uso

Aquí se explica cómo utilizar este proyecto:

1. Ejecuta `npm start` para iniciar la aplicación.
2. Abre el navegador en `http://localhost:3000`.
3. Se visualizara la pagina principal donde se pueden visualizar 4 subreddits.
4. Mediante la barra lateral se puede navegar a las secciones de Hot, New y Rising (Noticias candentes, Nuevas y En aumento en español).
5. Puedes realizar busquedas de temas de interes en dichas secciones de la aplicación mediante la barra de busqueda.
6. Fue implementada la funcionalidad de modo oscuro en toda la aplicacion la cual se puede confiurar desde el navabar.
7. Al hacer click sobre el titulo del subreddit y del autor se abrirá un pastaña redirigiendo al sitio oficial de reddit donde se puede visualizar la publicación y el perfil de autor de la misma.
8. Diseño responsive

## Información técnica

API: https://www.reddit.com/dev/api/#GET_best
endpoinst utilizados:

1. /best
2. [/r/subreddit]/hot
3. [/r/subreddit]/new
4. [/r/subreddit]/rising

De estos endpoints se recibe la data siguiendo una estructura parecida a esta:
{
"kind": ...,
"data": {
"children": {
"kind": ...,
"data": {
author: "...",
permalink: "...",
(....)
}
}
(...)
}
}

Dicha fue adaptada al momento de ser recibida para ser utilizada en los diferentes componentes de la aplicacion. La información que se recibe en cuanto a imagenes no son imagenes completas sino minimizadas (thumbnail) y en el caso de el subreddit no tener alguna imagen en se presenta una imagen por defecto.
