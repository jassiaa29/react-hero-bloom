
# Portfolio Interactivo - Desarrollador Full Stack

Un portfolio web moderno e interactivo inspirado en el diseño de David Heckhoff, construido con React.js, Three.js y Framer Motion. Incluye animaciones 3D, efectos de paralaje y una experiencia de usuario excepcional.

## 🚀 Características

- **Animaciones 3D**: Fondo interactivo con partículas y geometrías animadas usando react-three-fiber
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **Navegación Inteligente**: Scroll suave y navegación activa por secciones
- **Formulario de Contacto**: Sistema de contacto funcional con validación
- **Tipografía Moderna**: Fuente Inter para una experiencia de lectura óptima
- **Efectos Hover**: Interacciones visuales atractivas en proyectos y botones

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **3D Graphics**: React Three Fiber + Three.js + React Three Drei
- **Animaciones**: Framer Motion
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.tsx              # Sección principal con animaciones 3D
│   ├── About.tsx             # Sección sobre mí
│   ├── Projects.tsx          # Galería de proyectos
│   ├── Contact.tsx           # Formulario de contacto
│   ├── Navigation.tsx        # Navegación principal
│   └── CanvasBackground.tsx  # Fondo 3D animado
├── pages/
│   └── Index.tsx             # Página principal
├── styles/
│   └── index.css             # Estilos globales y variables CSS
└── assets/                   # Imágenes y recursos estáticos
```

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd portfolio-interactivo
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Visita `http://localhost:8080` para ver el portfolio en acción.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🎨 Personalización

### Colores y Temas

Los colores principales están definidos en `src/index.css`. Para cambiar la paleta de colores:

```css
:root {
  /* Colores principales */
  --primary-cyan: #22d3ee;
  --primary-blue: #3b82f6;
  --background-dark: #0f172a;
  --surface-dark: #1e293b;
}
```

### Contenido

1. **Información Personal**: Edita `src/components/About.tsx`
2. **Proyectos**: Modifica el array `projects` en `src/components/Projects.tsx`
3. **Datos de Contacto**: Actualiza `src/components/Contact.tsx`

### Animaciones 3D

El fondo 3D se configura en `src/components/CanvasBackground.tsx`. Puedes:
- Ajustar el número de partículas
- Cambiar los colores de las geometrías
- Modificar las velocidades de animación
- Agregar nuevas formas 3D

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1920px y superior
- **Laptop**: 1024px - 1919px  
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Optimizaciones

- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Code Splitting**: Componentes divididos automáticamente
- **Tree Shaking**: Eliminación de código no utilizado
- **Minificación**: Archivos optimizados para producción

## 🌐 Deployment

### Netlify/Vercel

1. Conecta tu repositorio
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Build Manual

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portfolio:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: hello@example.com
- **LinkedIn**: [Tu LinkedIn](https://linkedin.com)
- **GitHub**: [Tu GitHub](https://github.com)

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!
