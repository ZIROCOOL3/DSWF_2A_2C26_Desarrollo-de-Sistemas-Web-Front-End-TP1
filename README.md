# DSWF_2A_2C26_Desarrollo-de-Sistemas-Web-Front-End-TP1

## Trabajo Práctico Grupal 1

### Proyecto web en equipo · HTML, CSS y JavaScript

Este es el primer trabajo práctico grupal del curso de Desarrollo de Sistemas Web Front End. El objetivo es construir un sitio web grupal con una portada, perfiles individuales, navegación interna y una bitácora que documente el proceso de trabajo en equipo.

---

### Integrantes del Equipo

- **Leandro Maselli(Responsable de Estructura y Bases del Proyecto)**: [github.com/leoroan]
- **Javier Canteros**: [URL_GITHUB_INTEGRANTE_2]
- **Maximiliano Quinteros**: [URL_GITHUB_INTEGRANTE_3]
- **Damián Pelisare**: [URL_GITHUB_INTEGRANTE_4]
- **Nidia Elias**: [URL_GITHUB_INTEGRANTE_5]

---

### Tecnologías Utilizadas

- HTML5
- CSS (solo Bootstrap 5.3 y sus utilidades)
- JavaScript (ES6+)
- Bootstrap 5.3 (CDN oficial)
- Bootstrap Icons (CDN oficial)

---

### Estructura de Archivos y Carpetas

\\\ ext
.
├── index.html
├── member1.html
├── member2.html
├── member3.html
├── member4.html
├── member5.html
├── bitacora.html
├── components/
│ └── navbar.html
├── css/
│ └── style.css
├── js/
│ ├── main.js
│ └── components/
│ └── general-navbar.js
└── img/
└── [archivos_de_imagen]
\\\

---

### Guía de Estilos

#### Componente Reutilizable: Navbar General (`<general-navbar>`)

Para evitar repetir el código del navbar en cada vista, la navegación se centralizó en un **Web Component** reutilizable mediante JavaScript:

- **`components/navbar.html`**: fragmento HTML único que define la estructura del navbar (la "única fuente de verdad").
- **`js/components/general-navbar.js`**: módulo ES que define el custom element `<general-navbar>`. Se encarga de cargar (`fetch`) el fragmento, inyectarlo en la página y **marcar automáticamente** el enlace activo según la vista actual (`index.html`, `member1.html`…`member5.html`, `bitacora.html`).

**Uso en cada HTML:**

```html
<general-navbar></general-navbar>
...
<script type="module" src="js/components/general-navbar.js"></script>
```

Si se modifica la navegación, solo hay que editar `components/navbar.html` y el cambio se replica en **las 7 vistas** automáticamente. Los dropdowns y el toggler de Bootstrap funcionan sobre el contenido inyectado gracias a la delegación de eventos de Bootstrap 5.3 (Light DOM).

---

- **Paleta Hexadecimal:**
  - Color Principal (Primary): #0d6efd (Bootstrap Primary)
  - Color Secundario (Secondary): #6c757d (Bootstrap Secondary)
  - Color de Fondo (Background): #f8f9fa (Light Gray)
  - Color de Texto (Text): #212529 (Dark Neutral)
- **Google Fonts:**
  - Fuente Principal: System UI / Roboto / Apple-System / Sans-Serif
- **Iconografía:**
  - Bootstrap Icons (mediante CDN)

---

### Optimización SEO (Search Engine Optimization)

Se han implementado las siguientes mejoras para optimizar la visibilidad en motores de búsqueda:

- **Título de la Página (`<title>`):** Se ha actualizado el título en `index.html` para ser más descriptivo y relevante, incluyendo palabras clave importantes del proyecto.
- **Meta Descripción (`<meta name="description">`):** Se ha añadido una meta descripción concisa y atractiva en `index.html` que resume el contenido de la página, crucial para las SERPs (Páginas de Resultados del Motor de Búsqueda).
- **Meta Palabras Clave (`<meta name="keywords">`):** Se han incluido palabras clave relevantes en `index.html` para ayudar a los motores de búsqueda a entender el contexto del sitio (aunque su impacto directo en el ranking actual es menor, contribuye a la coherencia).
- **Jerarquía de Encabezados (H1, H2):** Se mantiene una estructura semántica clara con un `<h1>` para el título principal y `<h2>` para las secciones clave, lo que facilita la indexación del contenido.
- **Atributo `lang="es"`:** El idioma de la página está correctamente especificado como español, lo que ayuda a la segmentación geográfica en los resultados de búsqueda.

---

### Funciones JavaScript

#### Portada (\index.html\)

- **Botón de Saludo Interactivo**
  - **Explicación:** Muestra un mensaje de bienvenida y orientación al usuario al hacer clic en el botón principal de la portada.
  - **Captura de Pantalla:** [Pendiente de captura final]

#### Perfiles Individuales (\memberX.html\)

- **Desplegable de Biografía y Detalles Adicionales**
  - **Explicación:** Permite alternar la visibilidad de información adicional en la tarjeta de perfil de cada integrante mediante interacción con DOM en JS.
  - **Captura de Pantalla:** [Pendiente de captura final]

---

### URL Publicada en Vercel

- **Enlace al sitio publicado:** [URL_DE_VERCEL_PENDIENTE]

---

### Evolución del Proyecto

- **Fase 1 (Actual):** Creación del esqueleto base, maquetación responsiva con Bootstrap 5.3, estructuración de perfiles para 5 integrantes, y establecimiento de la bitácora y documentación en README.
- **Fases Posteriores:** Integración de contenidos reales del equipo, personalización de avatares/imágenes y ampliación de funcionalidades en los siguientes TPs.

---

### Uso de IA y Autoría

- **Herramientas y Modelos Utilizados:**
  - **Cline** (Agente de programación autónoma en VS Code) impulsado por el modelo **Gemini 3.5**.
- **Aportes en Código o Contenido:**
  - Asistencia en la estructuración general del proyecto, generación del código base de HTML (index.html, páginas de perfiles member1.html a member5.html, y biitacora.html), estilos CSS personalizados con soporte para breakpoints obligatorios (400px, 900px y 1200px), y lógica interactiva en JavaScript.
  - Redacción y estructuración completa de la documentación técnica y el presente README.md.
- **Plan Gratuito o Pago:**
  - Uso de herramientas de desarrollo integradas con API de Gemini 3.5.
- **Experiencia Previa del Equipo:**
  - El equipo utiliza asistentes de IA como soporte técnico y de estructuración para acelerar la configuración inicial, manteniendo siempre la revisión y validación manual de cada componente.
- **Avatares, Logos o Imágenes:**
  - Uso temporal de marcadores de posición (placeholders) listos para ser reemplazados por los avatares o fotos reales de los integrantes.
- **Revisión y Adaptación:**
  - Leandro revisó, probó y validó minuciosamente la estructura generada por el agente (Cline con Gemini 3.5), asegurando el cumplimiento total de los requisitos de Bootstrap 5.3, la responsividad y la rúbrica del TP1 antes de su publicación.

---
