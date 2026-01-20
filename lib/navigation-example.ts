// EJEMPLO DE NAVEGACIÓN CON DROPDOWN PARA SERVICIOS
// Este archivo muestra cómo podrías implementar un dropdown en el futuro

export const navigationWithDropdown = [
  { text: "Inicio", href: "/" },
  { text: "Sobre Mí", href: "/sobre-mi" },
  {
    text: "Servicios",
    href: "/servicios",
    dropdown: [
      {
        category: "Construcción",
        items: [
          { text: "Albañilería en General", href: "/servicios/albanileria-general" },
          { text: "Instalaciones de Gas y Eléctricas", href: "/servicios/instalaciones-gas-electricas" },
          { text: "Instalaciones de Agua y Cloacas", href: "/servicios/instalaciones-agua-cloacas" },
          { text: "Colocación de Cerámica", href: "/servicios/colocacion-ceramica" },
          { text: "Calefacción Losa Radiante", href: "/servicios/calefaccion-losa-radiante-radiadores" },
          { text: "Estructuras Metálicas", href: "/servicios/estructuras-metalicas-techos-madera" },
          { text: "Durlock", href: "/servicios/durlock" },
        ]
      },
      {
        category: "Arquitectura",
        items: [
          { text: "Proyectos de Vivienda", href: "/servicios/proyectos-vivienda-locales-comerciales" },
          { text: "Ampliaciones", href: "/servicios/ampliaciones" },
          { text: "Refacciones", href: "/servicios/refacciones" },
          { text: "Relevamiento", href: "/servicios/relevamiento" },
        ]
      }
    ]
  },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Consulta Gratuita", href: "/contacto", isCTA: true }
]

// Para implementar esto, necesitarías:
// 1. Actualizar el componente Navbar.tsx
// 2. Agregar estilos para el dropdown
// 3. Manejar el estado del dropdown (hover o click)
