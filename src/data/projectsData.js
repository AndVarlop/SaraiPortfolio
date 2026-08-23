// Proyectos conceptuales creados para demostrar pensamiento y ejecución de Community
// Management. Ninguna de estas marcas es un cliente real: son ejercicios propios de
// Saraí para practicar estrategia, copywriting y creación de contenido.

const projectsData = [
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

export default projectsData
