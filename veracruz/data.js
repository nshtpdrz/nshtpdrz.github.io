// Datos compartidos: Veracruz cobra vida (AR) y Expedición Veracruz.
// px, py = posición del pin en el póster impreso (1056 x 1632 px).
window.VERACRUZ = {
  regiones: [
    {
      n: 1, id: 'huasteca', nombre: 'Huasteca', lugares: 'Pánuco · Tuxpan · Tantoyuca · Chicontepec',
      color: '#B07A0C', px: 370, py: 370, municipios: 33,
      frase: 'Donde suena el violín huasteco y se cocina el tamal más grande de México.',
      cultura: 'Son huasteco con violín, jarana y huapanguera, y el zacahuil, un tamal gigante. Viven aquí pueblos téenek, nahuas, otomíes y tepehuas.',
      naturaleza: 'La Laguna de Tamiahua, humedal Ramsar de 88,000 ha; la Sierra de Otontepec y los arrecifes de Lobos-Tuxpan.',
      economia: 'Ganadería, cítricos y el puerto de Tuxpan.',
      reto: 'El río Pánuco recibe aguas negras de la Ciudad de México. En 2025, una fuga de un ducto de Pemex en Álamo contaminó el río Pantepec y dejó a Tuxpan sin agua limpia.'
    },
    {
      n: 2, id: 'totonacapan', nombre: 'Totonacapan', lugares: 'Papantla · El Tajín · Poza Rica · Nautla',
      color: '#B8693A', px: 420, py: 510, municipios: 26,
      frase: 'La tierra de la vainilla, de El Tajín y de los hombres que vuelan.',
      cultura: 'La zona arqueológica de El Tajín y la ceremonia de los Voladores son patrimonio de la UNESCO. Es la tierra del pueblo totonaco y cuna de la vainilla.',
      naturaleza: 'Playas donde anidan tortugas marinas: en 2025 se liberaron cerca de 434 mil crías en Nautla. Aquí desembocan los ríos Tecolutla y Nautla.',
      economia: 'Petróleo en Poza Rica, vainilla y cítricos en Martínez de la Torre.',
      reto: 'Las luces de hoteles cerca de las playas desorientan a las crías de tortuga (contaminación lumínica). La crisis petrolera de Poza Rica empujó a muchos a emigrar.'
    },
    {
      n: 3, id: 'capital', nombre: 'Capital', lugares: 'Xalapa · Coatepec · Perote · Alto Lucero',
      color: '#3E9A5C', px: 450, py: 630, municipios: 33,
      frase: 'Neblina, café de altura y la universidad del estado.',
      cultura: 'Xalapa es la capital y sede de la Universidad Veracruzana. Coatepec es famosa por su café.',
      naturaleza: 'Bosque de niebla, el Parque Nacional Cofre de Perote (11,530 ha), las Cascadas de Texolo (sitio Ramsar) y el Macuiltépetl.',
      economia: 'Café de altura, servicios y gobierno. En Alto Lucero está Laguna Verde, la única nucleoeléctrica de México.',
      reto: 'Laguna Verde usa 63 m³ de agua de mar por segundo para enfriarse y la devuelve a 38–44 °C, cuando el mar está a 25–28 °C: un ejemplo de contaminación térmica.'
    },
    {
      n: 4, id: 'puerto', nombre: 'Puerto de Veracruz', lugares: 'Veracruz · Boca del Río',
      color: '#1B8DB3', px: 560, py: 720, municipios: 12,
      frase: 'El puerto que abrió México al mundo.',
      cultura: 'Es la «Cuatro veces Heroica» Veracruz: defendió a México frente a España (1825), Francia (1838) y Estados Unidos (1847 y 1914), cuando los cadetes de la Escuela Naval defendieron el puerto. Carnaval, danzón, son jarocho y café lechero. El municipio de Veracruz es el más poblado del estado (607,209 hab. en 2020).',
      naturaleza: 'Frente a sus playas está el Parque Nacional Sistema Arrecifal Veracruzano, de 52,238 ha.',
      economia: 'Uno de los puertos más importantes del país: comercio exterior, turismo y servicios.',
      reto: 'Los lixiviados del basurero municipal llegan a las playas y al arrecife. El río Jamapa tiene 96 fuentes de contaminación registradas.'
    },
    {
      n: 5, id: 'montanas', nombre: 'Las Montañas', lugares: 'Orizaba · Córdoba · Zongolica',
      color: '#5F7886', px: 400, py: 770, municipios: 57,
      frase: 'Aquí está el techo de México.',
      cultura: 'Es la región con más municipios (57). En la Sierra de Zongolica vive una gran comunidad nahua.',
      naturaleza: 'El Pico de Orizaba o Citlaltépetl (5,636 m), la cumbre más alta del país, y el Cañón del Río Blanco (48,800 ha), ambos parques nacionales.',
      economia: 'Caña de azúcar, ingenios y café.',
      reto: 'El río Blanco tiene 44 fuentes de contaminación. Las caídas del precio del café y del azúcar hicieron de esta la región con más emigrantes a Estados Unidos.'
    },
    {
      n: 6, id: 'papaloapan', nombre: 'Papaloapan', lugares: 'Tlacotalpan · Alvarado · Cosamaloapan',
      color: '#E36A9A', px: 610, py: 875, municipios: 22,
      frase: 'Río de mariposas, casas de colores y son jarocho.',
      cultura: 'Tlacotalpan es patrimonio de la UNESCO; su fiesta de La Candelaria reúne procesiones, música y fandango junto al río.',
      naturaleza: 'El río Papaloapan, la Laguna de Alvarado y extensos manglares, que crían cerca del 70 % de las especies marinas comerciales.',
      economia: 'Caña de azúcar, ganadería, pesca y acuacultura en Alvarado.',
      reto: 'Inundaciones en temporada de lluvias y ciclones (de junio a noviembre).'
    },
    {
      n: 7, id: 'tuxtlas', nombre: 'Los Tuxtlas', lugares: 'Catemaco · San Andrés Tuxtla',
      color: '#2E6B3E', px: 740, py: 960, municipios: 4,
      frase: 'Volcanes, selva y una laguna mágica.',
      cultura: 'Catemaco y su laguna; San Andrés Tuxtla es famoso por sus puros de tabaco.',
      naturaleza: 'La Reserva de la Biosfera Los Tuxtlas (155,122 ha): selva, volcanes, monos aulladores y araña, y la paloma perdiz tuxtleña, que solo vive aquí.',
      economia: 'Turismo, tabaco, pesca y ganadería.',
      reto: 'La deforestación: en todo el estado, más del 85 % de la vegetación original ya fue alterada.'
    },
    {
      n: 8, id: 'olmeca', nombre: 'Tierra olmeca', lugares: 'Coatzacoalcos · Minatitlán · Acayucan',
      color: '#7D7D75', px: 930, py: 1110, municipios: 25,
      frase: 'Donde nació la cultura madre de Mesoamérica.',
      cultura: 'En San Lorenzo Tenochtitlán floreció la cultura olmeca. Hoy viven aquí pueblos nahuas, popolucas, sayultecos, olutecos y texistepequeños.',
      naturaleza: 'Ríos, humedales y selvas del sur del estado.',
      economia: 'El gran polo de refinación y petroquímica del país y el puerto de Coatzacoalcos.',
      reto: 'Se hallaron mercurio y plomo en peces del río Coatzacoalcos. En 2026, Profepa multó con 18.1 millones de pesos a Minatitlán y Cosoleacaque por el tiradero Las Matas.'
    }
  ],
  fuentes: [
    'INEGI, Censo de Población y Vivienda 2020 y Encuesta Intercensal 2025',
    'INEGI, PIB por entidad federativa 2024',
    'INPI y Programa Veracruzano de Cultura 2025-2030',
    'CONANP, CONABIO y Universidad Veracruzana',
    'Revista Internacional de Métodos Numéricos (2013): descarga térmica de Laguna Verde',
    'Excélsior, Expansión y Migraciones Internacionales (El Colef)',
    'INAH, San Juan de Ulúa: baluarte de cuatro gestas heroicas',
    'Secretaría de Marina, Reseña histórica del 21 de abril de 1914'
  ]
};
