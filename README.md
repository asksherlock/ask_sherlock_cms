# 🕵️‍♂️ Sherlock CMS (Backend)

Este repositorio contiene exclusivamente el Backend (Payload CMS 3.0) para la plataforma Sherlock AI.
Está separado del repositorio del frontend para asegurar un despliegue aislado y modular.

## 🚀 Tecnologías Principales

*   **CMS**: Payload CMS 3.0 (Next.js App Router)
*   **Base de Datos**: PostgreSQL (alojada en Supabase)
*   **Aislamiento de Datos**: Esquema personalizado (`schemaName: 'sherlock'`) para prevenir conflictos en bases de datos compartidas.

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
*Desarrollado con ❤️ para Sherlock AI.*
