# Guía de Deploy en Vercel

## Requisitos previos
1. Cuenta en [Vercel](https://vercel.com)
2. Repositorio de Git (GitHub, GitLab, o Bitbucket)
3. Proyecto Next.js configurado (✅ ya tienes esto)

## Opción 1: Deploy desde GitHub (Recomendado)

### Paso 1: Subir a GitHub
```bash
# Si no tienes el repo en GitHub aún:
git add .
git commit -m "Preparar para deploy en Vercel"
git push origin main
```

### Paso 2: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com) y haz login
2. Haz clic en "New Project"
3. Conecta tu cuenta de GitHub
4. Selecciona tu repositorio `ai-guay`
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en "Deploy"

¡Listo! Vercel automáticamente:
- Instalará las dependencias (`npm install`)
- Ejecutará el build (`npm run build`)
- Desplegará tu aplicación

## Opción 2: Deploy desde CLI

### Instalar Vercel CLI
```bash
npm i -g vercel
```

### Deploy desde terminal
```bash
vercel --prod
```

## Variables de Entorno
Si tu aplicación usa variables de entorno:

1. En el dashboard de Vercel, ve a tu proyecto
2. Clic en "Settings" → "Environment Variables"
3. Agrega las variables necesarias

## URLs después del deploy
- **Producción**: `https://tu-proyecto.vercel.app`
- **Preview**: Cada commit en branches genera una URL de preview automáticamente

## Configuraciones importantes ya incluidas:
- ✅ `vercel.json` configurado
- ✅ Scripts de build en `package.json`
- ✅ Framework Next.js detectado automáticamente
- ✅ TypeScript configurado
- ✅ Tailwind CSS configurado

## Troubleshooting
- Si hay errores de build, revisa los logs en el dashboard de Vercel
- Para errores de TypeScript, ejecuta `npm run build` localmente primero
- Para problemas de dependencias, verifica que todas estén en `package.json` 