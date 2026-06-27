import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { es } from '@payloadcms/translations/languages/es'
// import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Testimonials } from './collections/Testimonials'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: ['@/components/DashboardStats#DashboardStats'],
      graphics: {
        Logo: '@/components/Logo#Logo',
        Icon: '@/components/Icon#Icon',
      }
    },
    meta: {
      titleSuffix: '- Sherlock AI',
    }
  },
  cors: [
    'http://localhost:5173', 
    'http://localhost:4000', 
    'https://sherlock-ivory.vercel.app', 
    process.env.FRONTEND_URL || '',
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
    process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : '',
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '',
    'https://ask-sherlock-cms-git-main-ask-sherlock.vercel.app'
  ].filter(Boolean),
  csrf: [
    'http://localhost:5173', 
    'http://localhost:4000', 
    'https://sherlock-ivory.vercel.app', 
    process.env.FRONTEND_URL || '',
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
    process.env.VERCEL_BRANCH_URL ? `https://${process.env.VERCEL_BRANCH_URL}` : '',
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '',
    'https://ask-sherlock-cms-git-main-ask-sherlock.vercel.app'
  ].filter(Boolean),
  collections: [Users, Media, Posts, Testimonials],
  globals: [SiteSettings],
  plugins: [
    // s3Storage({
    //   collections: {
    //     media: true,
    //   },
    //   bucket: process.env.S3_BUCKET as string,
    //   config: {
    //     credentials: {
    //       accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
    //       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    //     },
    //     region: process.env.S3_REGION as string,
    //     endpoint: process.env.S3_ENDPOINT as string,
    //     forcePathStyle: true,
    //   },
    // }),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'super-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    schemaName: 'sherlock',
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  i18n: {
    supportedLanguages: { es },
  },
  localization: {
    locales: ['en', 'es'],
    fallback: true,
    defaultLocale: 'es',
  },
})
