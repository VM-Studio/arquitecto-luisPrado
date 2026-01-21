// ===============================================
// DATOS DEL SITIO - LUIS PRADO ARQUITECTO
// ===============================================

export interface SiteData {
  name: string;
  title: string;
  experience: string;
  projectsCompleted: string;
  location: string;
  contact: Contact;
  social: Social;
  hero: Hero;
  about: About;
  servicesSection: ServicesSection;
  services: Service[];
  serviceCategories: ServiceCategory[];
  cta: CTA;
  contactSection: ContactSection;
  footer: Footer;
  navigation: NavItem[];
  sobreMi: SobreMi;
  portfolio: PortfolioProject[];
}

export interface Contact {
  email: string;
  emailSecondary: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface Social {
  instagram: string;
  facebook: string;
  linkedin: string;
  whatsapp: string;
}

export interface Hero {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  mainImage: string;
  backgroundImage: string;
}

export interface About {
  title: string;
  description: string;
  image: string;
}

export interface ServicesSection {
  title: string;
}

export interface Service {
  id: number;
  tag: string;
  title: string;
  image: string;
  items: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  title: string;
  description: string;
  slug: string;
  services: ServiceDetail[];
}

export interface ServiceDetail {
  id: string;
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  category: 'construccion' | 'arquitectura';
  features: string[];
  benefits: string[];
  image: string;
}

export interface CTA {
  title: string;
  description: string;
  badge: string;
  image: string;
  bottomTitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface ContactSection {
  title: string;
  description: string;
  ctaText: string;
}

export interface Footer {
  logo: string;
  certifications: string[];
  copyright: string;
}

export interface NavItem {
  text: string;
  href: string;
  isCTA?: boolean;
}

export interface SobreMi {
  title: string;
  paragraphs: string[];
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface PortfolioProject {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  specs: {
    rooms?: string;
    area: string;
    year: string;
  };
}

export const siteData: SiteData = {
  name: "Luis Prado",
  title: "Arquitecto en Córdoba",
  experience: "25",
  projectsCompleted: "104",
  location: "Ciudad de Córdoba, Argentina",
  
  contact: {
    email: "info@luisprado.com",
    emailSecondary: "obras@luisprado.com",
    phone: "+54 9 351 123 4567",
    whatsapp: "5493511234567",
    address: "Córdoba, Argentina"
  },
  
  social: {
    instagram: "https://instagram.com/luispradoarquitecto",
    facebook: "https://facebook.com/luispradoarquitecto",
    linkedin: "https://linkedin.com/in/luispradoarquitecto",
    whatsapp: "https://wa.me/5493511234567"
  },
  
  hero: {
    title: "Hacemos realidad tus proyectos arquitectónicos",
    description: "Construcción profesional con más de 25 años de experiencia y +104 obras ejecutadas en tiempo y forma en Córdoba.",
    ctaText: "Contáctame",
    ctaLink: "https://wa.me/5493511234567",
    mainImage: "/assets/images/hero.png",
    backgroundImage: "/assets/images/hero.png"
  },
  
  about: {
    title: "Tu proyecto es nuestra prioridad",
    description: "Con el respaldo de más de 25 años de experiencia, un equipo profesional y profundo conocimiento de la construcción en Córdoba, brindamos la asistencia que necesitas para resolver cada detalle de tu obra de manera eficaz y segura.",
    image: "/assets/images/descripcion.png"
  },
  
  servicesSection: {
    title: "Nuestros servicios"
  },
  
  services: [
    {
      id: 1,
      tag: "Arquitectura",
      title: "Servicios de Arquitectura",
      image: "/assets/images/proyecto1.png",
      items: [
        "Proyectos arquitectónicos completos",
        "Diseño y planificación",
        "Planos y documentación técnica",
        "Asesoramiento profesional"
      ]
    },
    {
      id: 2,
      tag: "Construcción",
      title: "Servicios de Construcción",
      image: "/assets/images/proyecto2.png",
      items: [
        "Construcción de viviendas",
        "Ampliaciones y refacciones",
        "Locales comerciales",
        "Acabados y terminaciones"
      ]
    }
  ],

  serviceCategories: [
    {
      id: "construccion",
      name: "Construcción",
      title: "Construcción",
      description: "",
      slug: "construccion",
      services: [
        {
          id: "albanileria",
          name: "Albañilería en General",
          slug: "albanileria-general",
          title: "Albañilería en General en Córdoba",
          metaTitle: "Albañilería en General - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Servicios profesionales de albañilería en general en Córdoba. Construcción, reparación y mantenimiento con más de 25 años de experiencia.",
          heroTitle: "Albañilería en General",
          heroDescription: "Servicios profesionales de albañilería para todo tipo de obras en Córdoba",
          category: "construccion",
          features: [
            "Construcción de mampostería",
            "Revoques finos y gruesos",
            "Reparación de estructuras",
            "Construcción de muros y tabiques",
            "Nivelación de pisos",
            "Ejecución de contrapisos"
          ],
          benefits: [
            "Más de 25 años de experiencia",
            "Personal calificado y profesional",
            "Materiales de primera calidad",
            "Cumplimiento de plazos establecidos",
            "Presupuesto sin costo",
            "Garantía en todos los trabajos"
          ],
          image: "/assets/images/albañil.png"
        },
        {
          id: "instalaciones-gas-electricas",
          name: "Instalaciones de Gas y Eléctricas",
          slug: "instalaciones-gas-electricas",
          title: "Instalaciones de Gas y Eléctricas Matriculado en Córdoba",
          metaTitle: "Instalaciones de Gas y Eléctricas Matriculado - Luis Prado | Córdoba",
          metaDescription: "Instalaciones de gas y eléctricas con profesional matriculado en Córdoba. Seguridad y calidad garantizada en cada instalación.",
          heroTitle: "Instalaciones de Gas y Eléctricas (Matriculado)",
          heroDescription: "Instalaciones seguras con profesional matriculado y habilitado",
          category: "construccion",
          features: [
            "Instalación de gas natural",
            "Instalación de gas envasado",
            "Instalaciones eléctricas completas",
            "Tableros eléctricos",
            "Certificaciones y habilitaciones",
            "Puesta a tierra"
          ],
          benefits: [
            "Profesional matriculado habilitado",
            "Cumplimiento normativas vigentes",
            "Certificados oficiales",
            "Inspecciones incluidas",
            "Garantía en instalaciones",
            "Asesoramiento técnico profesional"
          ],
          image: "/assets/images/instalacion.png"
        },
        {
          id: "instalaciones-agua-cloacas",
          name: "Instalaciones de Agua y Cloacas",
          slug: "instalaciones-agua-cloacas",
          title: "Instalaciones de Agua y Cloacas en Córdoba",
          metaTitle: "Instalaciones de Agua y Cloacas - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Instalaciones de agua potable y cloacas en Córdoba. Servicios profesionales con garantía y cumplimiento de normativas.",
          heroTitle: "Instalaciones de Agua y Cloacas",
          heroDescription: "Instalaciones sanitarias completas y profesionales",
          category: "construccion",
          features: [
            "Instalación de agua potable",
            "Sistemas de desagüe cloacal",
            "Cañerías de agua fría y caliente",
            "Instalación de tanques de agua",
            "Desagües pluviales",
            "Conexiones a red pública"
          ],
          benefits: [
            "Materiales de primera calidad",
            "Cumplimiento de normativas",
            "Pruebas de hermeticidad",
            "Garantía en instalaciones",
            "Asesoramiento técnico",
            "Servicio post-instalación"
          ],
          image: "/assets/images/cloacas.png"
        },
        {
          id: "colocacion-ceramica",
          name: "Colocación de Cerámica",
          slug: "colocacion-ceramica",
          title: "Colocación de Cerámica y Revestimientos en Córdoba",
          metaTitle: "Colocación de Cerámica - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Colocación profesional de cerámica y revestimientos en Córdoba. Terminaciones perfectas con más de 25 años de experiencia.",
          heroTitle: "Colocación de Cerámica",
          heroDescription: "Terminaciones profesionales en pisos y revestimientos cerámicos",
          category: "construccion",
          features: [
            "Colocación de cerámicos",
            "Porcelanatos y porcellanatos",
            "Revestimientos de paredes",
            "Guardas y zócalos",
            "Nivelación perfecta",
            "Pastinas y sellados"
          ],
          benefits: [
            "Terminaciones de primera",
            "Personal especializado",
            "Nivelación perfecta garantizada",
            "Asesoramiento en materiales",
            "Limpieza final incluida",
            "Garantía en colocación"
          ],
          image: "/assets/images/servicios/ceramica.jpg"
        },
        {
          id: "calefaccion-losa-radiante",
          name: "Calefacción por Losa Radiante y Radiadores",
          slug: "calefaccion-losa-radiante-radiadores",
          title: "Calefacción por Losa Radiante y Radiadores en Córdoba",
          metaTitle: "Calefacción Losa Radiante y Radiadores - Luis Prado | Córdoba",
          metaDescription: "Instalación de sistemas de calefacción por losa radiante y radiadores en Córdoba. Confort y eficiencia energética.",
          heroTitle: "Calefacción por Losa Radiante y Radiadores",
          heroDescription: "Sistemas de calefacción eficientes y confortables",
          category: "construccion",
          features: [
            "Losa radiante completa",
            "Instalación de radiadores",
            "Sistemas de calderas",
            "Termostatos inteligentes",
            "Distribución por zonas",
            "Aislación térmica"
          ],
          benefits: [
            "Ahorro energético garantizado",
            "Confort térmico superior",
            "Instalación profesional",
            "Materiales de alta calidad",
            "Asesoramiento técnico",
            "Garantía en instalación"
          ],
          image: "/assets/images/servicios/calefaccion.jpg"
        },
        {
          id: "estructuras-metalicas",
          name: "Estructuras Metálicas y Techos de Madera",
          slug: "estructuras-metalicas-techos-madera",
          title: "Estructuras Metálicas y Techos de Madera en Córdoba",
          metaTitle: "Estructuras Metálicas y Techos de Madera - Luis Prado | Córdoba",
          metaDescription: "Construcción de estructuras metálicas y techos de madera en Córdoba. Solidez y diseño profesional.",
          heroTitle: "Estructuras Metálicas y Techos de Madera",
          heroDescription: "Construcciones sólidas con materiales de primera calidad",
          category: "construccion",
          features: [
            "Estructuras metálicas",
            "Techos de madera y chapa",
            "Cobertizos y galpones",
            "Entrepisos metálicos",
            "Pérgolas y quinchos",
            "Tratamiento anticorrosivo"
          ],
          benefits: [
            "Estructuras calculadas",
            "Materiales de primera",
            "Personal especializado",
            "Diseño a medida",
            "Garantía estructural",
            "Cumplimiento de plazos"
          ],
          image: "/assets/images/servicios/estructuras.jpg"
        },
        {
          id: "durlock",
          name: "Durlock",
          slug: "durlock",
          title: "Instalación de Durlock en Córdoba",
          metaTitle: "Instalación de Durlock - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Instalación profesional de durlock en Córdoba. Cielorrasos, tabiques y revestimientos con terminación perfecta.",
          heroTitle: "Durlock",
          heroDescription: "Instalación profesional de sistemas en seco",
          category: "construccion",
          features: [
            "Cielorrasos de durlock",
            "Tabiques divisorios",
            "Revestimientos de paredes",
            "Aislación térmica y acústica",
            "Estructuras de metal",
            "Terminaciones y pinturas"
          ],
          benefits: [
            "Instalación rápida y limpia",
            "Terminación perfecta",
            "Aislación garantizada",
            "Versatilidad de diseño",
            "Personal capacitado",
            "Garantía en instalación"
          ],
          image: "/assets/images/servicios/durlock.jpg"
        }
      ]
    },
    {
      id: "arquitectura",
      name: "Arquitectura",
      title: "Arquitectura",
      description: "",
      slug: "arquitectura",
      services: [
        {
          id: "proyectos-vivienda-comerciales",
          name: "Proyectos de Vivienda y Locales Comerciales",
          slug: "proyectos-vivienda-locales-comerciales",
          title: "Proyectos de Vivienda y Locales Comerciales en Córdoba",
          metaTitle: "Proyectos de Vivienda y Locales Comerciales - Luis Prado | Córdoba",
          metaDescription: "Diseño y proyectos arquitectónicos de viviendas y locales comerciales en Córdoba. Más de 25 años de experiencia.",
          heroTitle: "Proyectos de Vivienda y Locales Comerciales",
          heroDescription: "Diseño arquitectónico integral para tu proyecto",
          category: "arquitectura",
          features: [
            "Anteproyecto y proyecto ejecutivo",
            "Planos de arquitectura completos",
            "Renders 3D realistas",
            "Cómputos y presupuestos",
            "Gestión de permisos municipales",
            "Dirección técnica de obra"
          ],
          benefits: [
            "Más de 25 años de experiencia",
            "+104 proyectos ejecutados",
            "Diseño personalizado",
            "Asesoramiento integral",
            "Optimización de espacios",
            "Cumplimiento normativas"
          ],
          image: "/assets/images/servicios/proyectos.jpg"
        },
        {
          id: "ampliaciones",
          name: "Ampliaciones",
          slug: "ampliaciones",
          title: "Ampliaciones de Viviendas en Córdoba",
          metaTitle: "Ampliaciones de Viviendas - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Proyectos de ampliaciones de viviendas en Córdoba. Maximiza el potencial de tu propiedad con diseño profesional.",
          heroTitle: "Ampliaciones",
          heroDescription: "Aprovecha mejor el espacio de tu propiedad",
          category: "arquitectura",
          features: [
            "Estudio de viabilidad",
            "Diseño de ampliación",
            "Planos y documentación",
            "Cómputo de materiales",
            "Gestión de permisos",
            "Dirección de obra"
          ],
          benefits: [
            "Optimización del espacio",
            "Integración arquitectónica",
            "Valor agregado a la propiedad",
            "Cumplimiento legal",
            "Diseño funcional",
            "Asesoramiento profesional"
          ],
          image: "/assets/images/servicios/ampliaciones.jpg"
        },
        {
          id: "refacciones",
          name: "Refacciones",
          slug: "refacciones",
          title: "Refacciones y Remodelaciones en Córdoba",
          metaTitle: "Refacciones y Remodelaciones - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Refacciones y remodelaciones integrales en Córdoba. Renovamos tu espacio con diseño y calidad profesional.",
          heroTitle: "Refacciones",
          heroDescription: "Renueva y moderniza tus espacios",
          category: "arquitectura",
          features: [
            "Diagnóstico del estado actual",
            "Propuesta de remodelación",
            "Planos de modificaciones",
            "Presupuesto detallado",
            "Coordinación de trabajos",
            "Control de calidad"
          ],
          benefits: [
            "Renovación integral",
            "Actualización funcional",
            "Mejora estética",
            "Aumento de valor",
            "Gestión profesional",
            "Garantía en trabajos"
          ],
          image: "/assets/images/servicios/refacciones.jpg"
        },
        {
          id: "relevamiento",
          name: "Relevamiento",
          slug: "relevamiento",
          title: "Relevamiento de Propiedades en Córdoba",
          metaTitle: "Relevamiento de Propiedades - Luis Prado Arquitecto | Córdoba",
          metaDescription: "Servicios de relevamiento de propiedades en Córdoba. Documentación técnica precisa y profesional.",
          heroTitle: "Relevamiento",
          heroDescription: "Documentación técnica precisa de tu propiedad",
          category: "arquitectura",
          features: [
            "Medición en sitio",
            "Planos de relevamiento",
            "Documentación fotográfica",
            "Estado de estructuras",
            "Informe técnico",
            "Planos digitales (CAD)"
          ],
          benefits: [
            "Precisión garantizada",
            "Documentación completa",
            "Entrega digital e impresa",
            "Asesoramiento técnico",
            "Base para futuros proyectos",
            "Servicio rápido y eficiente"
          ],
          image: "/assets/images/servicios/relevamiento.jpg"
        }
      ]
    }
  ],
  
  cta: {
    title: "Maximizamos el potencial de tus proyectos de manera segura y eficaz, convirtiendo cada idea en realidad",
    description: "Simplificaremos cada paso, guiándote con experiencia y compromiso para que disfrutes del camino hacia tu nueva obra.",
    badge: "Consulta Gratuita",
    image: "/assets/images/cta-background.jpg",
    bottomTitle: "Llevemos al éxito tu proyecto",
    ctaText: "Contáctame",
    ctaLink: "https://wa.me/5493511234567"
  },
  
  contactSection: {
    title: "Consulta Gratuita",
    description: "Contáctanos hoy y recibe una consulta gratuita para tu proyecto",
    ctaText: "Hablemos de tu Proyecto"
  },
  
  footer: {
    logo: "/assets/images/logo.png",
    certifications: [
      "/assets/images/cert1.png",
      "/assets/images/cert2.png",
      "/assets/images/cert3.png"
    ],
    copyright: "© 2025 Luis Prado. Todos los derechos reservados."
  },
  
  navigation: [
    { text: "Inicio", href: "/" },
    { text: "Sobre Mí", href: "/sobre-mi" },
    { text: "Servicios", href: "/servicios" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Consulta Gratuita", href: "https://wa.me/5493511234567", isCTA: true }
  ],
  
  sobreMi: {
    title: "Acerca de mí",
    paragraphs: [
      "Soy Luis Prado, arquitecto con más de 25 años de experiencia en el diseño y construcción de proyectos arquitectónicos en Córdoba, Argentina. Mi pasión por la arquitectura comenzó desde muy joven, y a lo largo de mi carrera he tenido el privilegio de materializar más de 104 proyectos que reflejan no solo mi visión profesional, sino también los sueños y necesidades de mis clientes.",
      "Mi enfoque se centra en crear espacios que combinen funcionalidad, estética y sustentabilidad. Creo firmemente que cada proyecto es único y merece una atención personalizada, desde el primer boceto hasta la entrega final. Me especializo en proyectos residenciales, comerciales y ampliaciones, siempre buscando maximizar el potencial de cada espacio y superar las expectativas de quienes confían en mi trabajo.",
      "A lo largo de estos años, he construido un equipo de profesionales altamente capacitados que comparten mi compromiso con la excelencia y la calidad. Juntos, hemos enfrentado desafíos complejos y hemos aprendido que la comunicación constante y la transparencia son fundamentales para el éxito de cualquier obra.",
      "Mi objetivo es acompañarte en cada etapa de tu proyecto, simplificando el proceso de construcción y asegurando que cada detalle se ejecute de manera eficaz y segura. Si estás buscando un arquitecto que entienda tus necesidades y convierta tus ideas en realidad, estaré encantado de trabajar contigo."
    ],
    image: "/assets/images/sobre-mi.jpg",
    ctaText: "Hablemos de tu Proyecto",
    ctaLink: "https://wa.me/5493511234567"
  },

  portfolio: [
    {
      id: 1,
      title: "Edificio Residencial Nueva Córdoba",
      location: "Nueva Córdoba, Córdoba",
      category: "Multifamiliar",
      image: "/assets/images/portfolio/project1.jpg",
      description: "Edificio de 8 plantas con amenities completos en zona privilegiada",
      specs: {
        rooms: "2 y 3 dormitorios",
        area: "85-120 m²",
        year: "2023"
      }
    },
    {
      id: 2,
      title: "Casa Quinta en Country",
      location: "La Reserva, Córdoba",
      category: "Vivienda Unifamiliar",
      image: "/assets/images/portfolio/project2.jpg",
      description: "Casa moderna con diseño sustentable y amplios espacios verdes",
      specs: {
        rooms: "4 dormitorios",
        area: "280 m²",
        year: "2023"
      }
    },
    {
      id: 3,
      title: "Local Comercial Centro",
      location: "Centro, Córdoba",
      category: "Comercial",
      image: "/assets/images/portfolio/project3.jpg",
      description: "Refuncionalización de espacio histórico para uso comercial",
      specs: {
        area: "150 m²",
        year: "2022"
      }
    },
    {
      id: 4,
      title: "Duplex en Barrio Cerrado",
      location: "Manantiales, Córdoba",
      category: "Vivienda Unifamiliar",
      image: "/assets/images/portfolio/project4.jpg",
      description: "Duplex de diseño contemporáneo con terminaciones de primera",
      specs: {
        rooms: "3 dormitorios",
        area: "180 m²",
        year: "2022"
      }
    },
    {
      id: 5,
      title: "Ampliación Residencial",
      location: "Urca, Córdoba",
      category: "Ampliación",
      image: "/assets/images/portfolio/project5.jpg",
      description: "Ampliación y renovación completa de vivienda existente",
      specs: {
        rooms: "2 dormitorios nuevos",
        area: "120 m²",
        year: "2021"
      }
    },
    {
      id: 6,
      title: "Complejo de Oficinas",
      location: "Cerro de las Rosas, Córdoba",
      category: "Comercial",
      image: "/assets/images/portfolio/project6.jpg",
      description: "Edificio corporativo con diseño moderno y eficiencia energética",
      specs: {
        area: "450 m²",
        year: "2021"
      }
    }
  ]
};
