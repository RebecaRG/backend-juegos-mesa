# Backend Playteca Web 🧩
Backend desarrollado con Express y Sequelize para Playteca, complementando el frontend en playteca-web. Utiliza JavaScript y dotenv para una configuración eficiente y segura.

🛠 **Configuración Rápida**

📋 **Requisitos**
- Node.js
- MySQL (Configurado con PHPMyAdmin)

🚀 **Pasos**
1. Clona y navega al repositorio:
- git clone <url_del_repositorio_backend>
- cd <directorio_del_proyecto>

2. Instala dependencias:
- npm install


📦 **Configuración de la Base de Datos**
- Abre PHPMyAdmin y crea una nueva base de datos llamada playteca.
- Importa el archivo `juegos_mesa_web.sql` dentro de esta base de datos utilizando la función de importación en PHPMyAdmin.

📁 **Estructura de Archivos Importantes**

Dentro de la carpeta sql del repositorio, encontrarás el archivo `juegos_mesa_web.sql`. Este archivo es crucial para configurar tu entorno de desarrollo local. Contiene todas las instrucciones SQL necesarias para crear las tablas de la base de datos relacionales y, opcionalmente, cargar datos de muestra. Asegúrate de importarlo a tu base de datos local para comenzar a desarrollar con una estructura de datos predefinida.

🔧 **Tecnologías**
- **Express & Sequelize**: Para la API y la gestión de la base de datos relacional.
- **JavaScript**: Mejora la experiencia de desarrollo con tipado dinámico.
- **Dotenv**: Gestiona variables de entorno de manera segura.

📡 **Despliegue y Ejecución**
- La aplicación se ejecuta en localhost:3000 por defecto. Si necesitas correr la aplicación en un puerto diferente, puedes cambiar el valor de PORT en el archivo `.env`.
- Para iniciar el servidor, puedes utilizar los siguientes comandos:
- `npm run start`: Inicia el servidor usando Node.js.
- `npm run dev`: Inicia el servidor en modo desarrollo usando Nodemon.

🤝 **Contribuir**

¡Tus ideas para mejorar o expandir son bienvenidas! Crea un pull request o abre un issue.
