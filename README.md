# Practica Cecotec - Ecommerce en Express, Graphql y React
> Ejercicio practico para vacante en CECOTEC de desarrollador en Reactjs y Graphql.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Se trata de un ecommerce con diferentes paneles. Para la prueba se pedía autentificación, presentación de productos y presentación de usuarios.

## Explicación de la app

Se trata finalmente de una practica que comenzó siendo simple, y al empezar a agregar lógica, se volvió más compleja. 

* Registro de usuarios y login en el mismo panel, se puede cambiar si quieres a un panel o a otro, dependiendo de lo que quieras. Botón desactivado hasta rellenar todas las casillas necesarias para el registro o el login (Quiero agregar también la opción de perdida de contraseña).

* Logueo con token, este se guardará en localStorage y se actualizará sólo, en graphql se puede encontrar mucha lógica en esta parte, ya que fue lo más complejo de todo. Creación de token por medio de JWT y verificación de este. Autentificación completamente real, y funcional, tanto en el backend como en el frontend

* Se pueden listar productos y usuarios. 

* El panel admin permite la creación de productos nuevos, con una descrición y precio de producto, así como agregar la url de una imagen para este (Quiero seguir trabajando en esto para subir imágenes directamente). 

* Al agregar nuevos productos, estos se listarán en tiempo real mientras lo agregas también a la base de datos.

* Funcionalidad de logout, se retira el token de localStorage y redirije de nuevo al login. 

* Control de errores y validaciones en login y registro de usuarios.(Quiero también hacerlo en los formularios para crear productos).

* Restricción de acceso al no estar logueado. No se puede acceder a ningún otro lado de la aplicación si no se está logueado.

![](./practica-cecotec/assets/images/cap_login_panel.jpg)

## Instalación

Esta applicación se instala con yarn tanto en la carpeta graphql-nodejs-react, como dentro de la carpeta practica-cecotec, en ambas.

```sh
yarn install
```
Una vez instalado, se debe verificar si en index.j de la carpeta raíz (graphql-nodejs-react) al final del archivo, se encuentra la conexión a la base de datos. Se debe verificar que está la url de mongodb atlas, para conectar de forma online a la db. Como es tan sólo para una practica, es un cluster free.

```sh
mongodb+srv://practicaCecotec:WSxj2rB2fvYeDHDP@cluster0.c3yws.mongodb.net/practica-cecotec?retryWrites=true&w=majority
```

Una vez todo comprobado ya puede montar ambos servidores, tanto del backend como del frontend, al igual que la instalación con yarn en ambas carpetas, se procederá de la misma forma

```sh
yarn start
```

## Ejemplo de uso

Ya en funcionamiento aparecerá el panel de login, al ser un usuario nuevo, le invito a que se registre, y de paso haga todo tipo de comprobaciones. Al registrarse será enviado de forma automática al login. Una vez logueado podrá ver el panel de productos y en la barra de navegación podrá ir a las diferentes instancias.

```


## Meta

Alexander Santos – [Linkedin](https://www.linkedin.com/in/alexander-santos-junior-fullstack-mern-818370106/) – alexsantos2018@outlook.es

Distribuido bajo la licencia XYZ. Ver ``LICENSE`` para más información.

[https://github.com/naymco/practica-cecotec-graphql-react](https://github.com/naymco)
