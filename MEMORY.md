# 🧠 Project Memory Guardian - Aviva Landing Page

## 1. Visión General
- **Propósito:** Landing page interactiva para las galletas nutricionales "Aviva", diseñadas para combatir la anemia en niños.
- **Stack Tecnológico:** React 18, Vite, Tailwind CSS, Framer Motion.
- **Estado Actual:** Fase de rediseño arquitectónico y visual completo para alcanzar estándar premium, guiado por un mockup proporcionado. 

## 2. Mapa Arquitectónico (src/)
- `main.jsx`: Punto de entrada de la aplicación.
- `App.jsx`: Componente raíz y orquestador de secciones. Actualmente es una Single Page Application (SPA), pero mutará a usar enrutamiento.
- `index.css`: Configuración global de estilos y Tailwind directives.
- `components/`
  - `Header.jsx`: Barra de navegación principal.
  - `Hero.jsx`: Sección principal "Pequeñas galletas, grandes cambios".
  - `IngredientsBanner.jsx`: Sección descriptiva de ingredientes (sangre de pollo, remolacha, etc.).
  - `Benefits.jsx`: Explicación de los beneficios de las galletas.
  - `Calculator.jsx`: Sección interactiva para calcular consumo recomendado.
  - `FAQ.jsx`: Preguntas frecuentes (se moverá a ruta propia).
  - `Footer.jsx`: Pie de página.
  - `WaveDivider.jsx` / `ScrollReveal.jsx`: Componentes UI auxiliares para diseño y animaciones.
- `data/`
  - `content.js`: Diccionario de datos estáticos y textos (DRY).

## 3. Decisiones Clave (Convenciones)
- **UI/UX Premium:** Obligatorio el uso de estéticas modernas (Tailwind avanzado, sombras suaves, tipografías legibles como Fredoka One / Nunito, y micro-animaciones con Framer Motion).
- **Ruteo:** Implementación inminente de `react-router-dom` para separar secciones complejas (como FAQs o "Sobre Aviva").
- **Colores:** Uso estricto de la paleta definida en `tailwind.config.js` (rojos oscuros, crema, verde brillante) reflejando identidad de marca saludable y amigable para niños.
