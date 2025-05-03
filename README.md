# DevFromZero WebSite

**DevFromZero WebSite** es una plataforma educativa full‑stack diseñada para impartir un curso integral de programación web. Combina un frontend en React con Auth0 para autenticación, React Router para navegación y CSS Modules para estilos encapsulados, y un backend en Node.js/Express que integra MercadoPago para pagos y Nodemailer para el envío de correos de contacto.

---

## Tabla de Contenidos

- [DevFromZero WebSite](#devfromzero-website)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características](#características)
  - [Tecnologías](#tecnologías)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Variables de Entorno](#variables-de-entorno)
  - [Ejecución](#ejecución)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Estructura de Proyecto](#estructura-de-proyecto)
  - [Uso](#uso)
  - [Contribuir](#contribuir)
  - [Licencia](#licencia)

---

## Características

- **Autenticación** con Auth0.
- **Enrutamiento** SPA con React Router.
- **Estilos** modulares con CSS Modules y variables CSS.
- **Pago seguro** usando MercadoPago.
- **Contacto** vía formulario que envía correo con Nodemailer.
- **Proyectos y contenidos** dinámicos desde datos estáticos.
- **Responsive**: adaptable a móviles y desktop.

## Tecnologías

- **Frontend:** React, React Router, Auth0, anime.js, CSS Modules.
- **Backend:** Node.js, Express, MercadoPago SDK, Nodemailer.
- **Herramientas:** Vite, ESLint, Prettier.

## Requisitos Previos

- Node.js v14+ y npm o yarn.
- Cuenta en Auth0.
- Cuenta en MercadoPago con token de acceso.
- SMTP (por ejemplo Gmail) con App Password para Nodemailer.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Martin-Juncos/DevFromZero_WebSite.git
   cd DevFromZero_WebSite
   ```

2. Instala dependencias del **frontend**:

   ```bash
   cd client
   npm install
   ```

3. Instala dependencias del **backend**:

   ```bash
   cd ../server
   npm install
   ```

## Variables de Entorno

En la carpeta `server/`, crea un archivo `.env` con:

```
MERCADOPAGO_ACCESS_TOKEN=tu_token_mercadopago
SMTP_HOST=smtp.tu_proveedor.com
SMTP_PORT=465
SMTP_USER=tu_email@dominio.com
SMTP_PASS=tu_app_password
CONTACT_RECEIVER=prof.mcjuncos@gmail.com
PORT=3001
```

Además, en el **frontend** (`client/.env` si aplica) agrega tu dominio de Auth0 y configuración necesaria.

## Ejecución

### Backend

Desde `/server`:

```bash
npm run dev
```

El servidor escuchará en `http://localhost:3001`.

### Frontend

Desde `/client`:

```bash
npm run dev
```

La aplicación React correrá en `http://localhost:5173` (o el puerto que indique Vite).

## Estructura de Proyecto

```
DevFromZero_WebSite/
├── client/                  # Aplicación React
│   ├── src/
│   │   ├── components/      # Componentes por funcionalidad
│   │   ├── data/            # Datos estáticos (clases, proyectos, alumnos)
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── public/
├── server/                  # API Node.js/Express
│   ├── index.js             # Entrypoint
│   └── .env                 # Variables de entorno
└── README.md                # Documentación del proyecto
```

## Uso

- Accede a la **home** (`/`) sin estar autenticado.
- Navega a **Precios**, **Beneficios** o **FAQ**.
- Haz clic en **Inscríbete ahora** para iniciar el flujo de pago.
- Regístrate o ingresa con Auth0 para ver el **Dashboard**: Home autenticado, Curso, Alumnos, Proyectos.
- Envía un mensaje en **Contacto**; éste llegará a tu correo configurado.

## Contribuir

1. Haz un _fork_ del repositorio.
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y `commit` con mensaje claro.
4. Envía tu _pull request_.

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.
