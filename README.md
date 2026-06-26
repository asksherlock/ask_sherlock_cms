<div align="center">
  <img src="./public/ask_sherlock_logo_b.png" alt="Sherlock AI Logo" width="250" />
  <h1>Sherlock CMS (Backend)</h1>
  <p><strong>Panel Administrador Headless con Payload CMS y Supabase</strong></p>
</div>

---

## 🚀 Overview

Este repositorio contiene exclusivamente el Backend (Payload CMS 3.0) para la plataforma Sherlock AI.
Está separado del repositorio del frontend para asegurar un despliegue aislado y modular.

## 🚀 Tecnologías Principales

*   **CMS**: Payload CMS 3.0 (Next.js App Router)
*   **Base de Datos**: PostgreSQL (alojada en Supabase)
*   **Aislamiento de Datos**: Esquema personalizado (`schemaName: 'sherlock'`) para prevenir conflictos en bases de datos compartidas.
*   **Almacenamiento (S3)**: Supabase Storage para imágenes y documentos.

---

## 📂 Arquitectura de Colecciones

El panel está estructurado para gestionar las siguientes entidades de contenido dinámico:

1. **Blog (`Posts`):** Artículos completos utilizando el editor Lexical, vinculados a autores y categorías.
2. **Testimonios (`Testimonials`):** Reseñas de clientes para mostrar en la landing page.
3. **Usuarios (`Users`):** Gestión de administradores del panel.
4. **Media (`Media`):** Repositorio centralizado de imágenes subidas al bucket S3.
5. **Ajustes (`SiteSettings`):** Configuraciones globales de la plataforma.

---

## 🛠️ Instalación y Uso Local

Sigue estas instrucciones paso a paso para reproducir el CMS en una computadora nueva:

### 1. Requisito de Red (Para Windows)
Supabase ha migrado sus conexiones directas a **IPv6**. Si tu proveedor de internet local o tu computadora no soportan IPv6 nativo, el backend no podrá conectarse a la base de datos.
**Solución:** Descarga e instala [Cloudflare WARP (1.1.1.1)](https://1.1.1.1/). Actívalo antes de iniciar el servidor para obtener soporte IPv6 de forma mágica y gratuita.

### 2. Clonar el repositorio
```bash
git clone https://github.com/ivaninnogyzer/sherlock-cms.git
cd sherlock-cms
```

### 3. Configurar Variables de Entorno
Debes duplicar el archivo `.env.example` y renombrarlo a `.env`. Asegúrate de rellenarlo con las credenciales correctas:

```env
# Conexión directa a la base de datos Supabase (Requiere IPv6 o WARP)
DATABASE_URI=postgresql://[usuario]:[password]@db.[project-ref].supabase.co:5432/postgres

# Secreto de encriptación de Payload CMS
PAYLOAD_SECRET=un-secreto-super-seguro

# Supabase Storage (S3) Configuration para imágenes
S3_ENDPOINT=https://[PROJECT_ID].supabase.co/storage/v1/s3
S3_BUCKET=sherlock-media
S3_ACCESS_KEY_ID=tu-access-key
S3_SECRET_ACCESS_KEY=tu-secret-key
S3_REGION=auto
```

### 4. Instalar Dependencias y Arrancar
```bash
npm install
npm run dev
```

*   **Panel CMS**: `http://localhost:4000/admin`
*   **API del CMS**: `http://localhost:4000/api`

---

## ☁️ Despliegue en Producción (Vercel)

Este proyecto está optimizado para desplegarse de manera sencilla en **Vercel**.

1. Crea un nuevo proyecto en Vercel e importa este repositorio.
2. Ve a la pestaña de **Environment Variables** y pega todo el contenido de tu `.env` (asegúrate de incluir `FRONTEND_URL` apuntando a tu landing page desplegada).
3. Haz clic en **Deploy**.
4. Copia la URL pública que te genere Vercel y añádela como `VITE_CMS_URL` en tu proyecto Frontend para enlazar ambas aplicaciones.

---

<div align="center">
  <em>Desarrollado con ❤️ para Sherlock AI.</em>
</div>
