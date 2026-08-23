// El primer proyecto es un caso real: Queen Esthetic JBV fue un cliente real de Saraí.
// Los proyectos conceptuales (más abajo, en `conceptualProjects`) están desactivados por
// ahora a pedido de Andrés — no se muestran en el sitio, pero se dejan listos en el código
// para reactivarlos más adelante. Para reactivarlos, solo hay que agregarlos de vuelta al
// array `projectsData` exportado.

import queenFeed from '../assets/projects/queen-feed.jpg'
import queenTeam from '../assets/projects/queen-team.jpg'
import queenSalon from '../assets/projects/queen-salon.jpg'
import queenNails from '../assets/projects/queen-nails.jpg'

const realProject = {
  id: 'queen-esthetic',
  real: true,
  tag: 'Cliente real',
  category: 'Peluquería · Estética',
  title: 'Queen Esthetic JBV',
  client: 'Queen Esthetic JBV',
  instagram: '@queenestheticjbv',
  instagramUrl: 'https://www.instagram.com/queenestheticjbv/',
  summary: 'Reorganización de la estrategia de feed para una peluquería y centro de estética con cuenta activa en Instagram.',
  cover: queenFeed,
  coverImages: [queenTeam, queenNails, queenSalon],
  problem: 'La cuenta de Instagram de la peluquería (@queenestheticjbv, cuenta real con más de 5.000 seguidores) tenía un feed desorganizado, sin una línea editorial clara ni variedad de formatos.',
  objective: 'Ordenar el feed y definir pilares de contenido claros para que cada publicación tuviera un propósito y una identidad visual coherente.',
  audience: 'Clientas actuales y potenciales del sector belleza en la zona de Parque Alegra, interesadas en servicios de peluquería, uñas y estética.',
  strategy: 'Se propuso alternar el contenido entre ubicación/acceso al local, tips educativos de cuidado (uñas y cabello), contenido detrás de cámaras y fotos reales del equipo y el espacio, en lugar de publicar sin un orden definido.',
  pillars: ['Ubicación', 'Educativo', 'Detrás de cámaras', 'Equipo y espacio'],
  posts: [
    { format: 'Story', title: '¿Cómo llegar a nuestro punto físico?', copy: '¿Cómo llegar a nuestro punto físico? — story de ubicación para facilitar que las clientas encuentren el local.', cta: 'Guarda esta story para no perderte.' },
    { format: 'Carrusel educativo', title: 'Tips para cuidar tus uñas', copy: 'No las uses como herramienta · Usa aceite para cutículas · Usa guantes de limpieza · Lava bien tus manos y tus uñas · Respeta los tiempos de retoque.', cta: 'Guarda estos tips para tu próxima cita.' }
  ],
  stories: [
    { format: 'Video BTS', title: 'Así trabajamos', copy: 'Contenido detrás de cámaras mostrando el proceso real de atención a las clientas, grabado con ring light y celular en el mismo salón.' }
  ],
  reel: { title: 'Tips para un cabello hidratado', desc: 'Propuesta de carrusel/reel educativo en 5 pasos sobre hidratación capilar, pensado para reforzar el pilar educativo del feed.' },
  kpis: ['Alcance', 'Guardados', 'Comentarios', 'Crecimiento de seguidores', 'Reconocimiento de marca'],
  note: 'Este es un proyecto real hecho para un cliente real. Como no se hizo una medición formal de resultados, aquí no se muestran cifras de crecimiento — solo la propuesta de reorganización de feed y las piezas que se diseñaron.'
}

// -- Desactivados por ahora — no se muestran en el sitio, pero quedan exportados por si
// se quieren reactivar más adelante ------------------------------------------------------
export const conceptualProjects = [
  {
    id: 'sabor-local',
    tag: 'Proyecto conceptual',
    category: 'Comida · Restaurante',
    title: 'Sabor Local',
    summary: 'Estrategia de contenido para un restaurante de comida casera ficticio, enfocada en pedidos a domicilio.',
    cover: { from: '#ffb454', to: '#d29bfd', emoji: '🍲' },
    problem: 'Un restaurante de comida casera ficticio necesita darse a conocer en su barrio y convertir seguidores en pedidos a domicilio, no solo likes.',
    objective: 'Aumentar el reconocimiento de marca y generar pedidos a través de redes sociales.',
    audience: 'Adultos de 25 a 45 años, en la zona local, que buscan comida casera práctica para el almuerzo o la cena.',
    strategy: 'Contenido cercano y apetitoso que muestre el plato del día, el proceso detrás de la cocina y la facilidad de pedir, combinando piezas de producto con contenido humano del equipo.',
    pillars: ['Producto', 'Educativo', 'Comunidad', 'Conversión'],
    posts: [
      { format: 'Post — Foto de producto', title: 'Plato del día', copy: 'Hoy el antojo tiene nombre: bandeja paisa casera 🍽️ Recién salida de la cocina, como en casa. ¿La pides para hoy?', cta: 'Escríbenos y la llevamos a tu puerta.' },
      { format: 'Post — Testimonio', title: 'Lo que dicen de nosotros', copy: '“Pedí por primera vez y ya es mi almuerzo de todos los jueves” — así nos lo cuentan nuestros clientes 💜', cta: 'Cuéntanos tu plato favorito en comentarios.' },
      { format: 'Post — Detrás de cámaras', title: 'Así se cocina en Sabor Local', copy: 'Cada plato empieza mucho antes de llegar a tu mesa. Así es un día en nuestra cocina 👩‍🍳', cta: 'Sigue la cuenta para ver más del proceso.' }
    ],
    stories: [
      { format: 'Story — Encuesta', title: '¿Qué se te antoja hoy?', copy: '🍛 vs 🍕 — Vota y el más popular sale en el menú de esta semana.' },
      { format: 'Story — Cuenta regresiva', title: 'Promo de almuerzo', copy: 'Faltan 3 horas para cerrar la promo del almuerzo de hoy ⏳' }
    ],
    carousel: {
      title: '5 razones para pedir hoy',
      slides: ['Todo casero, sin conservantes', 'Entrega en menos de 40 min', 'Porciones pensadas para compartir', 'Ingredientes de proveedores locales', 'Tu pedido, listo con un mensaje']
    },
    reel: { title: 'Un día en la cocina de Sabor Local', desc: 'Behind the scenes de 15-20 segundos con audio de tendencia, mostrando la preparación del plato del día de principio a fin.' },
    kpis: ['Alcance', 'Engagement rate', 'Guardados', 'Comentarios', 'Clics al enlace de pedidos', 'Conversiones (pedidos)']
  },
  {
    id: 'huellas-cuidado',
    tag: 'Proyecto conceptual',
    category: 'Mascotas · Bienestar animal',
    title: 'Huellas & Cuidado',
    summary: 'Contenido educativo para una marca de cuidado de mascotas, apoyado en formación como auxiliar veterinaria.',
    cover: { from: '#7ee0c3', to: '#d29bfd', emoji: '🐾' },
    problem: 'Una marca ficticia de cuidado de mascotas quiere posicionarse como una fuente confiable de información, no solo como una tienda de productos.',
    objective: 'Educar a dueños de mascotas y construir una comunidad que confíe en la marca para el cuidado diario de sus animales.',
    audience: 'Dueños de perros y gatos de 20 a 40 años, preocupados por el bienestar y la salud de sus mascotas.',
    strategy: 'Aprovechar conocimientos reales de formación como Técnico Auxiliar Veterinario para crear contenido educativo, cercano y fácil de guardar o compartir.',
    pillars: ['Educativo', 'Comunidad', 'Producto', 'Entretenimiento'],
    posts: [
      { format: 'Carrusel educativo', title: '5 señales de que tu mascota necesita ir al veterinario', copy: 'Un cambio de apetito puede ser más que "mañas" 🐾 Te contamos 5 señales que no deberías ignorar. Guarda este post para cuando lo necesites.', cta: 'Guárdalo y compártelo con otro dueño de mascota.' }
    ],
    stories: [
      { format: 'Story — Quiz interactivo', title: '¿Qué tan bien conoces a tu mascota?', copy: 'Responde 3 preguntas rápidas y descubre si eres un experto o te falta un poco de práctica 🐶🐱' }
    ],
    carousel: {
      title: '5 señales de alerta en tu mascota',
      slides: ['Cambios en el apetito', 'Menor energía de lo normal', 'Cambios en el pelaje o la piel', 'Comportamiento inusual', 'Mal aliento persistente']
    },
    reel: { title: '3 mitos sobre la alimentación de tu perro', desc: 'Reel educativo de 30 segundos desmintiendo 3 creencias comunes sobre alimentación canina, con lenguaje simple y cercano.' },
    hashtags: ['#CuidadoAnimal', '#MascotasSanas', '#TipsVeterinarios', '#HuellasYCuidado'],
    kpis: ['Alcance', 'Guardados', 'Compartidos', 'Comentarios', 'Crecimiento de seguidores']
  },
  {
    id: 'aura-studio',
    tag: 'Proyecto conceptual',
    category: 'Moda · Lifestyle',
    title: 'Aura Studio',
    summary: 'Feed e identidad conceptual para una marca de moda accesible, con foco en comunidad y estilo de vida.',
    cover: { from: '#f6a5c0', to: '#a78bfa', emoji: '✨' },
    problem: 'Una marca ficticia de moda y lifestyle necesita destacar entre la saturación de contenido y construir una identidad reconocible.',
    objective: 'Fortalecer la identidad de marca y aumentar el reconocimiento entre un público joven.',
    audience: 'Mujeres de 18 a 30 años interesadas en moda accesible y un estilo de vida consciente.',
    strategy: 'Combinar contenido de producto con estilo de vida e interacción directa, manteniendo una estética de feed coherente y reconocible.',
    pillars: ['Producto', 'Entretenimiento', 'Comunidad', 'Conversión'],
    posts: [
      { format: 'Post — Lanzamiento', title: 'Nueva colección', copy: 'Lo nuevo ya está aquí 🤍 Piezas pensadas para moverte con vos, no en tu contra.', cta: 'Descubre la colección completa en el link de bio.' },
      { format: 'Post — Styling tips', title: '3 formas de combinar una misma prenda', copy: 'Una prenda, tres actitudes ✨ ¿Cuál eres hoy? Desliza y cuéntanos en comentarios.', cta: 'Comenta cuál look prefieres.' }
    ],
    stories: [
      { format: 'Story — Encuesta', title: 'Outfit del día', copy: '¿Look A o look B? Vota y arma el feed de la próxima semana con nosotras.' }
    ],
    carousel: {
      title: 'Feed conceptual — grid 3x3',
      slides: ['Producto hero', 'Detalle de textura', 'Look completo', 'Frase de marca', 'Producto hero', 'Comunidad / UGC', 'Detalle de textura', 'Look completo', 'Producto hero']
    },
    reel: { title: '3 formas de combinar una misma prenda', desc: 'Reel dinámico de transiciones mostrando un mismo básico combinado de tres formas distintas para tres ocasiones.' },
    kpis: ['Alcance', 'Engagement rate', 'Guardados', 'Clics al catálogo', 'Conversiones']
  }
]
// -----------------------------------------------------------------------------------

// Solo el proyecto real se muestra por ahora. Para reactivar los conceptuales, cambia
// esta línea por: const projectsData = [realProject, ...conceptualProjects]
const projectsData = [realProject]

export default projectsData
