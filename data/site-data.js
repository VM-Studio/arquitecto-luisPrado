// ===============================================
// DATOS DEL SITIO - LUIS PRADO ARQUITECTO
// ===============================================

export const siteData = {
    // Información General
    name: "Luis Prado",
    title: "Arquitecto en Córdoba",
    experience: "25",
    projectsCompleted: "104",
    location: "Ciudad de Córdoba, Argentina",
    
    // Contacto
    contact: {
        email: "info@luisprado.com",
        emailSecondary: "obras@luisprado.com",
        phone: "+54 9 351 123 4567",
        whatsapp: "5493511234567",
        address: "Córdoba, Argentina"
    },
    
    // Redes Sociales
    social: {
        instagram: "https://instagram.com/luispradoarquitecto",
        facebook: "https://facebook.com/luispradoarquitecto",
        linkedin: "https://linkedin.com/in/luispradoarquitecto",
        whatsapp: "https://wa.me/5493511234567"
    },
    
    // Hero Section
    hero: {
        title: "Hacemos realidad tus proyectos arquitectónicos",
        description: "Construcción profesional con más de 25 años de experiencia y +104 obras ejecutadas en tiempo y forma en Córdoba.",
        ctaText: "Contáctame",
        ctaLink: "#contacto",
        mainImage: "assets/images/hero.png",
        backgroundImage: "assets/images/hero.png"
    },
    
    // About Section
    about: {
        title: "Tu proyecto es nuestra prioridad",
        description: "Con el respaldo de más de 25 años de experiencia, un equipo profesional y profundo conocimiento de la construcción en Córdoba, brindamos la asistencia que necesitas para resolver cada detalle de tu obra de manera eficaz y segura.",
        image: "assets/images/descripcion.png"
    },
    
    // Servicios
    services: [
        {
            id: 1,
            tag: "Principal",
            title: "Proyectos y Construcción",
            image: "assets/images/service1.jpg",
            items: [
                "Proyectos arquitectónicos completos",
                "Construcción de viviendas",
                "Locales comerciales",
                "Ampliaciones y refacciones"
            ]
        },
        {
            id: 2,
            tag: "Especializado",
            title: "Servicios de Construcción",
            image: "assets/images/service2.jpg",
            items: [
                "Cambio de pisos y revestimientos",
                "Instalaciones de cañerías",
                "Instalaciones sanitarias",
                "Instalaciones eléctricas"
            ]
        },
        {
            id: 3,
            tag: "Complementario",
            title: "Servicios Adicionales",
            image: "assets/images/service3.jpg",
            items: [
                "Instalación de cloacas",
                "Instalación de agua",
                "Colocación de cerámicos",
                "Acabados y terminaciones"
            ]
        }
    ],
    
    // CTA Section
    cta: {
        title: "Maximizamos el potencial de tus proyectos de manera segura y eficaz, convirtiendo cada idea en realidad",
        description: "Simplificaremos cada paso, guiándote con experiencia y compromiso para que disfrutes del camino hacia tu nueva obra.",
        badge: "Consulta Gratuita",
        image: "assets/images/cta-background.jpg",
        bottomTitle: "Llevemos al éxito tu proyecto",
        ctaText: "Contáctame",
        ctaLink: "#contacto"
    },
    
    // Contact Section
    contactSection: {
        title: "Consulta Gratuita",
        description: "Contáctanos hoy y recibe una consulta gratuita para tu proyecto",
        ctaText: "Hablemos de tu Proyecto"
    },
    
    // Footer
    footer: {
        logo: "assets/images/logo.png",
        certifications: [
            "assets/images/cert1.png",
            "assets/images/cert2.png",
            "assets/images/cert3.png"
        ],
        copyright: "© 2025 Luis Prado. Todos los derechos reservados."
    },
    
    // Navigation
    navigation: [
        { text: "Inicio", href: "index.html" },
        { text: "Sobre Mí", href: "sobre-mi.html" },
        { text: "Servicios", href: "index.html#servicios" },
        { text: "Portfolio", href: "portfolio.html" },
        { text: "Consulta Gratuita", href: "index.html#contacto", isCTA: true }
    ],
    
    // Sobre Mí Page
    sobreMi: {
        title: "Acerca de mi",
        paragraphs: [
            "Soy Luis Prado, arquitecto con más de 25 años de experiencia en el diseño y construcción de proyectos arquitectónicos en Córdoba, Argentina. Mi pasión por la arquitectura comenzó desde muy joven, y a lo largo de mi carrera he tenido el privilegio de materializar más de 104 proyectos que reflejan no solo mi visión profesional, sino también los sueños y necesidades de mis clientes.",
            "Mi enfoque se centra en crear espacios que combinen funcionalidad, estética y sustentabilidad. Creo firmemente que cada proyecto es único y merece una atención personalizada, desde el primer boceto hasta la entrega final. Me especializo en proyectos residenciales, comerciales y ampliaciones, siempre buscando maximizar el potencial de cada espacio y superar las expectativas de quienes confían en mi trabajo.",
            "A lo largo de estos años, he construido un equipo de profesionales altamente capacitados que comparten mi compromiso con la excelencia y la calidad. Juntos, hemos enfrentado desafíos complejos y hemos aprendido que la comunicación constante y la transparencia son fundamentales para el éxito de cualquier obra.",
            "Mi objetivo es acompañarte en cada etapa de tu proyecto, simplificando el proceso de construcción y asegurando que cada detalle se ejecute de manera eficaz y segura. Si estás buscando un arquitecto que entienda tus necesidades y convierta tus ideas en realidad, estaré encantado de trabajar contigo."
        ],
        image: "assets/images/sobre-mi.jpg",
        ctaText: "Hablemos de tu Proyecto",
        ctaLink: "#contacto"
    },

    // Portfolio Projects
    portfolio: [
        {
            id: 1,
            title: "Edificio Residencial Nueva Córdoba",
            location: "Nueva Córdoba, Córdoba",
            category: "Multifamiliar",
            image: "assets/images/portfolio/project1.jpg",
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
            image: "assets/images/portfolio/project2.jpg",
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
            image: "assets/images/portfolio/project3.jpg",
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
            image: "assets/images/portfolio/project4.jpg",
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
            image: "assets/images/portfolio/project5.jpg",
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
            image: "assets/images/portfolio/project6.jpg",
            description: "Edificio corporativo con diseño moderno y eficiencia energética",
            specs: {
                area: "450 m²",
                year: "2021"
            }
        }
    ]
};
