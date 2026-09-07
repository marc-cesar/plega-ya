# ¿A qué hora me puedo ir?

Una web de una sola página que calcula la hora de salida de tu jornada laboral y
muestra una cuenta atrás en tiempo real, con estética de reloj digital retro.

Introduces tu hora de entrada, la duración de tu jornada y tu descanso, y la
calculadora te dice a qué hora sales y cuánto tiempo te queda ahora mismo.

Todo el cálculo ocurre en tu navegador: no hay backend, ni base de datos, ni
cuentas de usuario, ni se envían tus horarios a ningún servidor.

## Cómo funciona

```text
hora de entrada + duración de la jornada + descanso = hora de salida
```

- La hora de salida se calcula una sola vez a partir de tus datos.
- La cuenta atrás se recalcula cada segundo comparando esa hora de salida con
  `Date.now()`, en vez de simplemente decrementar un contador. Así el reloj es
  preciso aunque la pestaña quede en segundo plano o el navegador la ralentice.
- Contempla jornadas que cruzan la medianoche (por ejemplo, turnos de noche).
- Cuando llega la hora de salida, el reloj lo indica claramente y, si sigues
  en la página, empieza a mostrar el tiempo que llevas de más.
- Tu última configuración se guarda en `localStorage` del navegador para que
  no tengas que volver a introducirla cada vez.

## Stack técnico

- [Astro](https://astro.build) para generar HTML estático y servir solo el
  JavaScript necesario para la calculadora.
- TypeScript vanilla para la lógica temporal (`src/lib/time.ts`) y para la
  interactividad de la página (sin frameworks de UI).
- CSS con [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`).
- Sin backend, sin API, sin base de datos, sin analytics pesado.

## Estructura del proyecto

```text
/
├── public/
│   ├── favicon.svg           # Icono de la marca (se reutiliza en el header)
│   ├── favicon.ico           # Fallback multi-resolución para navegadores/OS
│   ├── apple-touch-icon.png  # Icono para "añadir a pantalla de inicio"
│   └── robots.txt
├── src/
│   ├── pages/
│   │   └── index.astro       # Única página: hero, calculadora, SEO y FAQ
│   ├── layouts/
│   │   └── Layout.astro      # <head> (SEO, favicons, Open Graph) y estilos globales
│   ├── lib/
│   │   └── time.ts           # Parseo de horas, cálculo de la salida y el reloj
│   └── styles/
│       └── global.css        # Estilos (Tailwind + clases de componentes)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

Consulta [`proyecto-a-que-hora-me-puedo-ir.md`](./proyecto-a-que-hora-me-puedo-ir.md)
para la especificación completa del producto (principios, SEO, accesibilidad,
diseño y hoja de ruta).

## Desarrollo

Requiere Node.js `>=22.12.0`.

```sh
npm install        # instala dependencias
npm run dev         # servidor de desarrollo en localhost:4321
npm run build        # genera el sitio estático en ./dist/
npm run preview      # sirve el build de producción localmente
npm run astro ...    # comandos de la CLI de Astro (p. ej. astro check)
```

## Accesibilidad y privacidad

- Todos los inputs tienen `label` y tipos semánticos (`type="time"`).
- Los cambios de estado relevantes del reloj usan `aria-live="polite"`, sin
  anunciar el conteo segundo a segundo para no saturar a lectores de pantalla.
- Los horarios introducidos nunca salen de tu navegador.

## Más información

Consulta la [documentación de Astro](https://docs.astro.build) si quieres
saber más sobre el framework usado en este proyecto.
