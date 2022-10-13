const ArrayProductos = [
  {
    stock: 1,
    marca: "Vega Sicilia Unico",
    img: "Vega Sicilia Unico.jpg",
    bodega: "Vega Sicilia",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2011",
    grado: "14% vol.",
    variedad: "95% Tinto fino, 5% Cabernet sauvignon",
    precio: 9500,
    descripcion:
      "Unico es la gran referencia de Vega Sicilia. Un tinto de leyenda que todo aficionado debería probar al menos una vez en su vida. Ideal para su guarda, que en óptimas condiciones puede prolongarse hasta 60 años, muestra una complejidad infinita en cada sorbo, no en vano es uno de los vinos con mayor tiempo de crianza del mundo. Su estilo se rige por tres constantes inmutables: elegancia, firmeza y capacidad de envejecimiento. La 2011 es una añada concentrada, pero a la vez elegante, sedosa, precisa y profunda. Es una expresión que se puede disfrutar inmediatamente, aunque con el tiempo, será increíble. Sin duda, una delicia.",
    maridaje:
      "Caza mayor y menor; jabalí, venado, corzo, carnes rojas, asados, estofados o cordero asado.",
  },
  {
    stock: 2,
    marca: "El Grifo Canari",
    img: "El Grifo Canari.jpg",
    bodega: "El Grifo",
    denominacion: "Lanzarote",
    tipo: "Blanco dulce",
    añada: "2012",
    grado: "17% vol.",
    variedad: "100% Malvasia",
    precio: 750,
    descripcion:
      "Canari es un vino dulce de solera elaborado con la mezcla de vinos tradicionales de las añadas 1956, 1970 y 1997 y es la interpretación de El Grifo de los antiguos Canari canarios del siglo XVII. La bodega cuenta con unos 50.000 litros de distintas partidas fechadas entre los años 1880 y 1997 y del aprovechamiento de estos antiguos vinos surge esta botella especial, embriagante y potente en las que se perciben notas de frutos secos, regaliz, piel de naranja y azahar. Envolvente, fresco y de paso amable, con una calidez redondeada por su suave dulzor. ",
    maridaje:
      "Perfecto como aperitivo para abrir el apetito o como final de mesa.",
  },
  {
    stock: 3,
    marca: "Extrem de Bonaval",
    img: "Extrem de Bonaval.jpg",
    bodega: "Bodegas Valdeorite",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2015",
    grado: "11.8%",
    variedad: "Macebeo, Parellada",
    precio: 500,
    descripcion:
      "Este Cava Reserva extremeño se elaborado a partir de las variedades Macebeo y Parellada que cuenta con un complejo envejencimiento, ejemplo de la dedicación de las familias que cuidan la tierra donde se cultiva. Consigue transmitir unos aromas elegantes con toques de manzana verde y anís, que preceden un gusto joven y alegre con recuerdos de una buena crianza",
    maridaje:
      "Perfecto para acompañar con aperitivos, embutidos, pescados y mariscos.",
  },
  {
    stock: 4,
    marca: "Gallaecia",
    img: "Gallaecia.jpg",
    bodega: "Martín Códax",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2017",
    grado: "13.5% vol",
    variedad: "100% Albariño",
    precio: 600,
    descripcion:
      "Gallaecia es un blanco de vendimia tardía, el primero de la historia vínica de Galicia, que es el vino de más alta gama de Martín Códax, la consagración de la Albariño como una de las grandes castas blancas del mundo y una de las más versátiles. Se trata de un blanco de vendimia tardía elaborado a partir de uvas sobremaduras, un vino único por sus aromas y estructura. Etiquetado por primera vez en 1996, en las últimas dos décadas tan sólo en nueve cosechas se dieron las condiciones óptimas para elaborarlo:1996, 1999, 2002, 2004, 2007, 2009, 2011, 2013, 2016 y la actual, 2017.",
    maridaje:
      "Patés, quesos azules, cabrales, embutidos y carnes rojas, pescados en salsa y platos especiados.",
  },
  {
    stock: 5,
    marca: "Malkoa Private Collection",
    img: "Malkoa Private Collection.jpg",
    bodega: "Astobiza",
    denominacion: "Txakoli de Álava",
    tipo: "Blanco",
    añada: "2017",
    grado: "12.5% vol.",
    variedad: "100% Hondarrabi zuri",
    precio: 500,
    descripcion:
      "Este blanco es uno de los vinos más especiales elaborados por Astobiza. Pasa dos años en depósitos de hormigón para continuar afinándose en barrica durante cuatro meses. Dos años más en el botellero antes de su salida al mercado propician un vino blanco de guarda en el que destaca su complejidad aromática y su gusto largo y lleno. Además, apenas han salido al mercado 1.200 botellas, lo que lo convierte cada botella en un pequeño tesoro.",
    maridaje:
      "Perfecto con frutos del mar crudos (erizo, ostras, tartar de atún, caviar...), o pocos cocinados (percebes, vieiras, gambas rojas...). Rodaballo, rey, besugo, cogote de merluza y pulpo",
  },
  {
    stock: 6,
    marca: "Finca Malaveina",
    img: "Finca Malaveina.jpg",
    bodega: "Castillo de Perelada",
    denominacion: "Empordà",
    tipo: "Tinto",
    añada: "2018",
    grado: "14.3% vol.",
    variedad: "65% Merlot, 21% Cabernet sauvignon,",
    precio: 300,
    descripcion:
      "Malaveïna es el nombre por el que llamaban los payeses a las malas vecinas. Esta misma palabra da nombre al viñedo donde nace este vino. Elaborado a partir de un coupage de variedades bordelesas y mediterráneas, ofrece aromas afrutados, balsámicos y tostados. En boca es un vino redondo, carnoso y estructurado.",
    maridaje:
      "Caza mayor y menor; jabalí, venado, corzo, carnes rojas, asados, estofados o cordero asado.",
  },
  {
    stock: 7,
    marca: "Remirez de Ganuza Reserva",
    img: "Remirez de Ganuza Reserva.jpg",
    bodega: "Bodegas Remírez de Ganuza",
    denominacion: "Rioja",
    tipo: "Tinto Reserva",
    añada: "2014",
    grado: "14.5% vol.",
    variedad: "93% Tempranillo, 4% Graciano, 3% Viura, Malvasía",
    precio: 1100,
    descripcion:
      "El Reserva de Remírez de Ganuza refleja la esencia de la bodega. Está elaborado a partir de los hombros despalillados de los mejores racimos, solo aquellos procedentes de viñedos con una edad media de 60 años. Tanto la maloláctica como su crianza se lleva a cabo en barrica nueva. Añada tras añada logra altas puntaciones e importantes reconocimientos como su designación como el Mejor vino de Rioja de 2020 por The Drinks Business, y es un habitual entre los vinos mejor valorados por nuestra comunidad.",
    maridaje: "Ideal con carnes rojas, con civet y con cerdo asado.",
  },
  {
    stock: 8,
    marca: "Guimaro Finca Capelinos",
    img: "Guimaro Finca Capelinos.jpg",
    bodega: "Guímaro",
    denominacion: "Ribeira Sacra",
    tipo: "Tinto",
    añada: "2019",
    grado: "13% vol",
    variedad: "70% Mencía, 30% Brancellao, Merenzao,",
    precio: 900,

    descripcion:
      "Elegante y armonioso, este tinto, elaborado mayoritariamente con Mencía, es uno de los magníficos vinos de finca de Guímaro. Se muestra mineral y afilado, tras una cuidada vinificación que incluyó una fermentación con el 40% de raspón y 12 meses de crianza en roble francés. Uno de los grandes de la Ribeira Sacra. ",
    maridaje:
      "Caza mayor y menor; jabalí, venado, corzo, carnes rojas, asados, estofados o cordero asado.",
  },
  {
    stock: 9,
    marca: "La Poza de Ballesteros",
    img: "La Poza de Ballesteros.jpg",
    bodega: "Bodegas y viñedos Artadi",
    denominacion: "Vino de España",
    tipo: "Tinto",
    añada: "2019",
    grado: "14.5% vol.",
    variedad: "100% Tempranillo",
    precio: 400,

    descripcion:
      "Uno de los grandes vinos parcelarios de viticultura ecológica de Artadi, que cuenta con un enorme potencial cualitativo gracias a las características de la añada. Transmite una gran sensación de corpulencia, densidad y untuosidad. Amplia paleta aromática con aromas de sotobosque y fruta negra. Su final es sostenido, con taninos estructurados y una calidez envolvente.",
    maridaje:
      "Caza mayor y menor; jabalí, venado, corzo, carnes rojas, asados, estofados o cordero asado.",
  },
  {
    stock: 10,
    marca: "Remirez de Ganuza Reserva 2014",
    img: "Remirez de Ganuza Reserva2017.jpg",
    bodega: "Bodegas Remírez de Ganuza",
    denominacion: "denominacion",
    tipo: "Tinto Reserva",
    añada: "2014",
    grado: "14.5% vol.",
    variedad: "93% Tempranillo, 4% Graciano, 3% Viura, Malvasía",
    precio: 500,

    descripcion:
      "El Reserva de Remírez de Ganuza refleja la esencia de la bodega. Está elaborado a partir de los hombros despalillados de los mejores racimos, solo aquellos procedentes de viñedos con una edad media de 60 años. Tanto la maloláctica como su crianza se lleva a cabo en barrica nueva. Añada tras añada logra altas puntaciones e importantes reconocimientos como su designación como el Mejor vino de Rioja de 2020 por The Drinks Business, y es un habitual entre los vinos mejor valorados por nuestra comunida",
    maridaje: "Ideal con carnes rojas, con civet y con cerdo asado.",
  },
  {
    stock: 11,
    marca: "Viña Muriel Gran Reserva Tempranillo",
    img: "Viña Muriel Gran Reserva Tempranillo.jpg",
    bodega: "Muriel Wines",
    denominacion: "Rioja",
    tipo: "Tinto",
    añada: "2011",
    grado: "14% vol.",
    variedad: "100% Tempranillo",
    precio: 800,

    descripcion:
      "Viña Muriel Gran Reserva Tempranillo 2011 es un Tempranillo elaborado con uvas procedentes de cepas de 50 años de edad media. Un vino complejo, equilibrado y redondo, ideal para acompañar carnes asadas y a la parrilla: presa ibérica, buey nebraska, angus y wagyu; pasta trufada y quesos muy curados. Postres de chocolate. Una cosecha calificada de Excelente, ya que la añada 2011 fue modélica en todos los parámetros.",
    maridaje: "Ideal con carnes rojas, con civet y con cerdo asado.",
  },
  {
    stock: 12,
    marca: "F de Fuentespina Reserva Especial",
    img: "F de Fuentespina Reserva Especial.jpg",
    bodega: "Avelino Vegas",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2017",
    grado: "14.5% vol.",
    variedad: "100% Tempranillo",
    precio: 1200,

    descripcion:
      "Tempranillo elaborado a partir de una selección de algunos de los viñedos más de la Ribera del Duero, propiedad de la bodega Avelino Vegas, ubicada entre Peñafiel y Pesquera del Duero. Criado sin prisa, en barricas de roble francés Allier y Nevers, este tinto solo ve la luz en cosechas de la máxima calidad. De elegante nariz especiada y mineral y boca plena, potente y concentrada, estamos ante un vino para paladear con calma. Como curisidad, su botella replica a las antiguas borgoñonas sopladas en 1859.",
    maridaje:
      "Carnes rojas, caza, platos elaborados de cordero y cochinillo, quesos curados.",
  },
  {
    stock: 13,
    marca: "Pago de los Capellanes Reserva",
    img: "Pago de los Capellanes Reserva.jpg",
    bodega: "Pago de los Capellanes",
    denominacion: "Ribera del Duero",
    tipo: "Tinto Reserva",
    añada: "2018",
    grado: "15% vol",
    variedad: "100% Tempranillo",
    precio: 590,

    descripcion:
      "De una selección de los viñedos más viejos, casi centenarios, que posee Pago de los Capellanes en Pedrosa del Duero, proviene su Reserva, un vino 100% Tinto del país, intenso, equilibrado y complejo, que es todo un valor seguro de Ribera del Duero. ",
    maridaje:
      "Cochinillo con patatas panaderas, pochas con cordero o lomo bajo de buey a la parrilla",
  },
  {
    stock: 14,
    marca: "Legaris Reserva",
    img: "Legaris Reserva.jpg",
    bodega: "Legaris",
    denominacion: "Ribera del Duero",
    tipo: "Tinto Reserva",
    añada: "2017",
    grado: "15% vol.",
    variedad: "100% Tinto fino",
    precio: 680,

    descripcion:
      "Legaris Reserva es un monovarietal de Tinto fino procedente de viñedos de hasta 90 años ubicados a altitudes superiores a los 850 metros. Solo se embotella en las añadas de completa madurez fenólica de la uva, lo que permite obtener un vino de gran potencial de envejecimiento en botella. Un ribera clásico, jugoso, profundo y con gran cuerpo",
    maridaje:
      "Lechazo castellano, carnes rojas asadas o a la parrilla, guisos de caza y quesos curados",
  },
  {
    stock: 15,
    marca: "Vina Pomal Crianza",
    img: "Vina Pomal Crianza.jpg",
    bodega: "Bodegas Bilbaínas",
    denominacion: "Rioja",
    tipo: "Tinto Crianza",
    añada: "2019",
    grado: "13.5% vol.",
    variedad: "Tempranillo",
    precio: 2500,

    descripcion:
      "Concebido en 1996 para celebrar el centenario de la fundación de su bodega, este crianza, que cumple más de 20 añadas, sigue siendo fiel a la tradición vinícola riojana que representa. Intenso, altamente aromático, con buena estructura y suaves taninos, el buque insignia de Viña Pomal es siempre una apuesta segura. Premiado con el Gran Bacchus de Oro 2022. ",
    maridaje: "Arroces, quesos, guisos, verduras y pescados.",
  },
  {
    stock: 16,
    marca: "Granbazan Limousin",
    img: "Granbazan Limousin.jpg",
    bodega: "Bodega Granbazán",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2019",
    grado: "13.5% vol.",
    variedad: "100% Albariño",
    precio: 1000,

    descripcion:
      "Granbazán comenzó a realizar las primeras pruebas de elaboración de este vino en los años 80. Hasta ese momento no habían criado sus albariños en roble, pero con el paso de los años han ido perfeccionando la técnica. El resultado es un buen equilibrio entre los aromas aportados por las barricas y la fruta. Solo se elabora en añadas excelentes. ",
    maridaje: "Arroces, quesos, guisos, verduras y pescados.",
  },
  {
    stock: 17,
    marca: "Shaya Habis",
    img: "Shaya Habis.jpg",
    bodega: "Shaya",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2018",
    grado: "13.5% vol.",
    variedad: "100% Verdejo",
    precio: 600,

    descripcion:
      "Un elegante rueda con una crianza de 8 meses en barrica de roble francés. Su limitada producción responde a la escasez de la materia prima, racimos de Verdejo de cepas viejísimas, en muchos casos prefiloxéricas, que superan el siglo de existencia, localizadas en pequeños pagos de superficie arenosa. Ideal para quienes buscan un blanco de corte moderno muy fácil de beber.",
    maridaje:
      "Ideal para combinar con 'sashimi' y 'sushi', pescados poco hechos y mariscos fríos. Para maridajes por contraste resultan interesantes los quesos tipo gorgonzola y cabrales",
  },
  {
    stock: 18,
    marca: "Finca Vinoa Paraje Penaboa",
    img: "Finca Vinoa Paraje Penaboa.jpg",
    bodega: "Bodega y Viñedos Pazo Casanova",
    denominacion: "Ribeiro",
    tipo: "Blanco",
    añada: "2017",
    grado: "13% vol.",
    variedad: "90% Treixadura, 10% Albariño",
    precio: 750,

    descripcion:
      "Coupage clásico de Rías Baixas, elaborado a través de variedad autóctonas. Paraje Penaboa es el privilegiado origen de este portentoso blanco atlántico que cuenta con una larga crianza de 36 meses sobre sus lías finas, otorgando una riqueza aromática y una complejidad en boca que lo hacen perfecto para degustar con gran cantidad de elaboraciones.",
    maridaje:
      "Perfecto para chateo o para acompañar aperitivos, pescados y arroces.",
  },
  {
    stock: 19,
    marca: "Astobiza",
    img: "Astobiza.jpg",
    bodega: "Astobiza",
    denominacion: "Txakoli de Álava",
    tipo: "Blanco",
    añada: "2021",
    grado: "12.5% vol.",
    variedad: "100% Hondarrabi zuri",
    precio: 500,

    descripcion:
      "De la autóctona Hondarrabi zuri la bodega nos presenta su Astobiza, un txakoli que destaca por sus aromas de fruta blanca, fruta de hueso, cítricos y un punto mineral muy sutil. Aromas varietales intensos, con notas anisadas, de hinojo, minerales y de pieles cítricas. Boca muy cítrica, de acidez perfecta.",
    maridaje:
      "Ideal para combinar con 'sashimi' y 'sushi', pescados poco hechos y mariscos fríos. Para maridajes por contraste resultan interesantes los quesos tipo gorgonzola y cabrales",
  },
  {
    stock: 20,
    marca: "Blanc del Terrer",
    img: "Blanc del Terrer.jpg",
    bodega: "Vinyes del Terrerbodega",
    denominacion: "Cataluña",
    tipo: "Blanco",
    añada: "2020",
    grado: "13% vol.",
    variedad: "100% Macabeo",
    precio: 300,

    descripcion:
      "Blanco de entrada de Vinyes del Terrer obtenido de una finca ubicada a unos 20 kilómetros de la bodega y elaborado mediante un trabajo muy delicado de crianza sobre lías durante 6 meses. La uva Macabeo con la que se elabora este blanco seco, que antes se dedicaba a la elaboración de Cava, entrega a este vino una gran intensidad floral y de fruta blanca. Untuoso y juvenil, se muestra perfecto para el chateo o para acompañar aperitivos, pescados y arroces. Resulta ideal para explorar la cara más mineral de los blancos tarraconenses y se caracteriza por evolucionar muy bien en botella.",
    maridaje:
      "Perfecto para chateo o para acompañar aperitivos, pescados y arroces.",
  },
  {
    stock: 21,
    marca: "Estrany",
    img: "Estrany.jpg",
    bodega: "Celler Credo",
    denominacion: "Penedés",
    tipo: "Blanco",
    añada: "2015",
    grado: "11% vol.",
    variedad: "100% Xarell",
    precio: 550,

    descripcion:
      "Estrany recupera una manera ancestral de elaborar el vino mediante la maceración de la uva blanca con la piel. Se trata de una práctica que tiene como voluntad mostrar la variedad Xarel·lo sin concesiones y con total franqueza, profundidad y ruda elegancia. Un original blanco que además está certificado en cultivo ecológico y biodinámico. ",
    maridaje:
      "Perfecto para chateo o para acompañar aperitivos, pescados y arroces.",
  },
  {
    stock: 22,
    marca: "Silice Blanco",
    img: "Silice Blanco.jpg",
    bodega: "Sílice Viticultores",
    denominacion: "Vino de España",
    tipo: "Blanco",
    añada: "2018",
    grado: "11.5% vol.",
    variedad: "Palomino, Treixadura y Albariño, Godello",
    precio: 500,

    descripcion:
      "Juan y Carlos Rodríguez y Fredi Torres se sirven de variedades muy diversas de uva blanca, esparcidas por distintos bancales alrededor del río Sil, para elaborar este blanco. Una pequeña parte del vino permanece durante 8 meses en barrica, lo que le confiere un carácter graso y corpulento que le da mucha personalidad",
    maridaje:
      "Perfecto para chateo o para acompañar aperitivos, pescados y arroces.",
  },
  {
    stock: 23,
    marca: "Vidonia",
    img: "Vidonia.jpg",
    bodega: "Suertes del Marqués",
    denominacion: "Valle de la Orotava",
    tipo: "Blanco Fermentado en Barrica",
    añada: "2020",
    grado: "13% vol.",
    variedad: "100% Listán blanco",
    precio: 500,

    descripcion:
      "Con el nombre de Vidonia eran conocidos en el siglo XVII los vinos de Tenerife elaborados en el norte de la isla y producidos con variedades blancas minoritarias. Las mejores parcelas de Listán blanco del Paraje Las Suertes son la base de este blanco, el más complejo, profundo y elegante de cuantos elabora esta bodega. Increíble finura. Se trata de una cuvée de vinificaciones por separado según tipos de suelo.",
    maridaje:
      "Perfecto para chateo o para acompañar aperitivos, pescados y arroces.",
  },
  {
    stock: 24,
    marca: "Pazo Barrantes Magnum",
    img: "Pazo Barrantes Magnum.jpg",
    bodega: "Pazo de Barrantes",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2019",
    grado: "13% vol.",
    variedad: "100% Albariño",
    precio: 500,

    descripcion:
      "En esta añada 2019, Pazo Barrantes se reinventa totalmente, tanto en imagen como en contenido, para ofrecernos una Albariño altamente expresiva. Un blanco muy elegante y fresco, pleno de matices, con una boca viva y fluida, fruto de un meticuloso trabajo que ha llevado a la bodega a una nueva era. En esta cosecha, se ha reducido considerablemente su producción, una exclusividad enumerada en cada botella. Además, se ha añadido la madera de acacia como nuevo ingrediente en su elaboración, en la que envejece un 15% del vino proporcionando complejidad y profundidad. Si a esto le unimos el hecho de que se ha alargado su periodo de crianza en botella a 16 meses, obtenemos un vino de guarda que simplemente es puro éxtasis.",
    maridaje:
      "Zamburiña asada sobre patata líquida trufada y granos de caviar de Aquitania.",
  },
  {
    stock: 25,
    marca: "O Santo do Mar Blanco",
    img: "O Santo do Mar Blanco.jpg",
    bodega: "Rodrigo Méndez",
    denominacion: "Vino de España",
    tipo: "Blanco Fermentado en Barrica",
    añada: "2020",
    grado: "11.5% vol.",
    variedad: "100% Albariño",
    precio: 900,

    descripcion:
      "El winemaker Rodrigo Méndez elabora este monovarietal de Albariño nacido junto a la ría de Pontevedra. Destaca por su pequeña producción, por lo que es un vino muy interesante para los amantes de esta variedad blanca que quieran descubrir pequeñas joyas desconocidas. Tiene una crianza de 12 meses en barrica y se muestra en cata muy directo, con mucha acidez y con una mineralidad eléctrica.",
    maridaje:
      "Milhojas de anguila ahumada, foie gras y manzana ácida caramelizada con mayonesa de cebolla y mantequilla. Berberechos al vapor de Pazo de Barrantes y lima.",
  },
  {
    stock: 26,
    marca: "Sameiras Blanco",
    img: "Sameiras Blanco.jpg",
    bodega: "Adega Sameirás",
    denominacion: "Ribeiro",
    tipo: "Blanco",
    añada: "2020",
    grado: "13% vol",
    variedad: "Treixadura, Albariño, Godello, Lado",
    precio: 1100,

    descripcion:
      "Un coupage de las principales variedades blancas autóctonas gallegas donde predomina la Treixadura, procedente de unos viñedos familiares cercanos al río Umia, en pleno corazón de la D.O. Ribeiro. Excelente representante de la tradición vinícola de la zona, regala aromas de frutas, flores blancas y recuerdos de miel. En boca enamora su untuosidad y frescura",
    maridaje:
      "Milhojas de anguila ahumada, foie gras y manzana ácida caramelizada con mayonesa de cebolla y mantequilla. Berberechos al vapor de Pazo de Barrantes y lima",
  },
  {
    stock: 27,
    marca: "Montes Obarenes",
    img: "Montes Obarenes.jpg",
    bodega: "Gómez Cruzado",
    denominacion: "Rioja",
    tipo: "Blanco Fermentado en Barrica",
    añada: "2018",
    grado: "14% vol.",
    variedad: "75% Viura, 25% Tempranillo blanco",
    precio: 1400,

    descripcion:
      "Montes Obarenes se elabora con las variedades autóctonas Tempranillo blanco y Viura procedentes de viñedos ubicados a los pies de la cordillera con la que comparte nombre este vino. Este blanco se muestra muy floral y frutal en nariz y su paso de boca es realmente voluptuoso. Este vino es una interpretación de los grandes blancos de guarda de Rioja, ",
    maridaje:
      "Zamburiña asada sobre patata líquida trufada y granos de caviar de Aquitania.",
  },
  {
    stock: 28,
    marca: "Marina Alta Coleccion",
    img: "Marina Alta Coleccion.jpg",
    bodega: "Bocopa",
    denominacion: "Alicante",
    tipo: "Blanco",
    añada: "2021",
    grado: "12% vol.",
    variedad: "100% Moscatel de Alejandría",
    precio: 800,

    descripcion:
      "Después de más de 29 cosechas elaborando el vino blanco Marina Alta, Bocopa selecciona las parcelas más cercanas al mar mediterráneo para esta colección especial. Un blanco mediterráneo con crianza sobre sus lías elaborado de forma artesanal, que homenajea a la uva Moscatel de Alejandría. En nariz destacan aromas de fruta madura y florales, con boca untuosa y elegante.",
    maridaje:
      "Ideal para jamón ibérico, mariscos, ostras, pescados azules, salazones y arroces melosos e intenso",
  },
  {
    stock: 29,
    marca: "Sketch",
    img: "Sketch.jpg",
    bodega: "Raúl Pérez Bodegas y Viñedos",
    denominacion: "Vino de España",
    tipo: "Blanco Fermentado en Barrica",
    añada: "2020",
    grado: "13.5% vol.",
    variedad: "100% Albariño",
    precio: 750,

    descripcion:
      "Este es un albariño nada común. Comenzó elaborándose con una crianza en botellas que se introducían en jaulones sumergidos en la ría a 16 metros bajo el nivel del mar, y todavía a día de hoy se sigue haciendo así aunque solo para una pequeña partida de vinos de consumo interno de la bodega. Recibe su curioso nombre de un restaurante londinense, y su etiqueta evoca el mar en movimiento. Ha sido considerado, en varias añadas, el mejor blanco del panorama español. ",
    maridaje:
      "Ideal para jamón ibérico, mariscos, ostras, pescados azules, salazones y arroces melosos e intenso",
  },
  {
    stock: 30,
    marca: "Rolland Galarreta Rueda Barrica",
    img: "Rolland Galarreta Rueda Barrica.jpg",
    bodega: "Rolland y Galarreta",
    denominacion: "Rueda",
    tipo: "Blanco Fermentado en Barrica",
    añada: "2018",
    grado: "13.5% vol.",
    variedad: "100% Verdejo",
    precio: 280,

    descripcion:
      "El altiplano alrededor de la población de Rueda, al sur de la ciudad de Valladolid, acoge un viñedo cuyo máximo exponente es la Verdejo. Su extraordinario equilibrio aromático se debe a las condiciones de altitud y clima y, sobre todo, a la calidad del suelo de cascajo, el característico canto rodado que protege la raíz de la vid. Los mejores vinos de la denominación se caracterizan por su frescura, complejidad y elegancia. Justo lo que nos ofrece Rolland y Galarreta con este elegante y fino verdejo. ",
    maridaje: "Mariscos, pescados, arroz, pasta y carnes blancas.",
  },
  {
    stock: 31,
    marca: "Finca Montico",
    img: "Finca Montico.jpg",
    bodega: "Marqués de Riscal",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Verdejo",
    precio: 500,

    descripcion:
      "Elaborado en la bodega que Marqués de Riscal tiene en Rueda, este monoverietal de Verdejo emerge como una extraordinaria muestra del potencia de esta uva. A partir de cepas del Pago del Montico y con un período de crianza en lías, el resultado es un blanco untuoso, con gran intensidad aromática y una óptima acidez. Tiene certificación orgánica y es apto para veganos.",
    maridaje:
      "Ideal con pescados, mariscos, carnes blancas, jamón, pasta, pollo y carnes frías.",
  },
  {
    stock: 32,
    marca: "Altos de Torona Godello",
    img: "Altos de Torona Godello.jpg",
    bodega: "Altos de Torona",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Godello",
    precio: 500,

    descripcion:
      "Blanco elaborado únicamente con uvas Godello, cultivadas en las empinadas laderas del río Miño. Altos de Torona Godello 2021 es fruto de un cuidadoso proceso de selección y de elaboración, en el que intervienen la más pura tradición vinícola de la zona y la más moderna tecnología enológica. Un vino goloso, amplio en boca, de aromas afrutados y florales, ligeramente cálido y con un final prolongado.",
    maridaje:
      "Arroz de mariscos, pechuga de pollo a la plancha, raya en caldeirada, marmitako de bonito, quesos semicurados.",
  },
  {
    stock: 33,
    marca: "Uxia da Ponte",
    img: "Uxia da Ponte.jpg",
    bodega: "Mauro Estévez",
    denominacion: "Ribeiro",
    tipo: "Blanco",
    añada: "2020",
    grado: "13.5% vol.",
    variedad: "100% Lado",
    precio: 500,

    descripcion:
      "Este interesante y original monovarietal está elaborado con Lado, la enigmática variedad blanca que, con un carácter delicado y una escasísima producción, da vida a vinos tan singulares como exclusivos. La familia Estévez tuvo la gran suerte de contar con estas cepas, algunas centenarias y otras más jóvenes, para poder producir esta referencia tan única a partir de esta uva que ha sorprendido a muchos críticos y amantes de los blancos gallegos",
    maridaje:
      "Ideal con pescados al horno o a la brasa, con carnes blancas y con guisos ligeros con notas herbáceas.",
  },
  {
    stock: 34,
    marca: "Pazo Senorans Coleccion",
    img: "Pazo Senorans Coleccion.jpg",
    bodega: "Pazo de Señorans",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2018",
    grado: "13.5% vol.",
    variedad: "100% Albariño",
    precio: 500,

    descripcion:
      "Pazo de Señorans es una de las casas de albariños artesanos con mejor reputación de Galicia. Este Colección ha pasado un mínimo de cinco meses de crianza sobre sus lías y 30 más afinándose en botella. El resultado es un blanco de guarda fino, elegante y complejo. En esta añada presenta una cierta reducción por lo que desde la bodega aconsejan su decantación antes de disfrutarlo.",
    maridaje:
      "Ideal con pescados al horno o a la brasa, con carnes blancas y con guisos ligeros con notas herbáceas.",
  },
  {
    stock: 35,
    marca: "Les Freses",
    img: "Les Freses.jpg",
    bodega: "Les Freses",
    denominacion: "Vino de España",
    tipo: "Blanco",
    añada: "2021",
    grado: "12.5% vol.",
    variedad: "100% Moscatel de Alejandría",
    precio: 500,

    descripcion:
      "Este vino toma el nombre de Les Freses en homenaje a las tierras donde se encuentran sus viñedos de origen, donde antiguamente se cultivaban fresas. Estas tierras han estado relacionadas con el vino históricamente, ya que los íberos se asentaron en L'Alt de Benimaquía en el siglo VII a.C. construyendo una bodega considerada por algunos como la más antigua de Europa. Moscatel seco y placentero.",
    maridaje:
      "Arroz de mariscos, pechuga de pollo a la plancha, raya en caldeirada, marmitako de bonito, quesos semicurados.",
  },
  {
    stock: 36,
    marca: "Coleccion Comenge Verdejo",
    img: "Coleccion Comenge Verdejo.jpg",
    bodega: "Bodegas Comenge",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Verdejo",
    precio: 500,

    descripcion:
      "Comenge Verdejo está elaborado con uvas procedentes de viñedos ecológicos certificados con más de 80 años de antigüedad, propiedad de pequeños viticultores de Rueda. Algunas de estas viñas, plantadas en las zonas superiores de la meseta de Rueda, crecen en suelos calizos que dotan a este vino de gran elegancia, finura y persistencia.  ",
    maridaje:
      "Ideal con pescados grasos y mariscos de concha (almejas, berberechos, mejillón, salmón, sardina, caballa...), con arroces, con aperitivos salados, con quesos grasos, con chacinas y con patés.",
  },
  {
    stock: 37,
    marca: "Noelia Bebelia Albarino",
    img: "Noelia Bebelia Albarino.jpg",
    bodega: "Noelia Bebelia",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2021",
    grado: "13.2% vol.",
    variedad: "100% Albariño",
    precio: 500,

    descripcion:
      "desEste albariño está elaborado con mimo extremo desde la viña hasta la botella. Las uvas pertenecen a una pequeña parcela de suelos arenosos que dotan a esta perla de un carácter tan fino y elegante como fresco y expresivo. Una maravilla de blanco que hará las delicias de los amantes de esta variedad atlántica.cripcion",
    maridaje:
      "Ideal con pescados grasos y mariscos de concha (almejas, berberechos, mejillón, salmón, sardina, caballa...), con arroces, con aperitivos salados, con quesos grasos, con chacinas y con patés.",
  },
  {
    stock: 38,
    marca: "Altos de Torona Rosal",
    img: "Altos de Torona Rosal.jpg",
    bodega: "Altos de Torona",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2021",
    grado: "12.5% vol.",
    variedad: "Albariño, Loureira, Caíño",
    precio: 500,

    descripcion:
      "Este ensamblaje dominado por la Albariño, con aportes de Caíño y Loureira, encuentra su inspiración en los vinos antiguos de los montes de Tui. Su crianza sobre lías finas de 4 meses le aportó gran untuosidad y singularidad. Un vino de intensos aromas a fruta de hueso con notas tropicales, ideal para maridar con sushi, ceviche o marisco.",
    maridaje:
      "Ideal con almejas a la marinera, arroz con rape, langostinos, 'sushi', verduras salteadas y pechuga de pollo al limón.",
  },
  {
    stock: 39,
    marca: "La Comtesse",
    img: "La Comtesse.jpg",
    bodega: "Pazo de Barrantes",
    denominacion: "Rías Baixas",
    tipo: "Blanco Fermentado en Barrica",
    añada: "2017",
    grado: "13.5% vol.",
    variedad: "100% Albariño",
    precio: 500,

    descripcion:
      "La Comtesse es el blanco más refinado de Pazo de Barrantes, elaborado a partir de las viñas más viejas de la propiedad, plantadas en 1965, localizadas en el Pago Cacheiro. Se trata de un homenaje a la condesa gallega viuda de Creixell, y desde su concepción en 2009 ha buscado mostrar la increíble personalidad de la Albariño y la autenticidad de este pequeño terruño de 1,5 hectáreas. Para potenciar estos elementos se ha incorporado a la fermentación y crianza en tinos de roble francés, un envejecimiento en depósito de hormigón que le confiere una mayor expresividad y longevidad, convirtiendo La Comtesse 2017 en un Gran Vino de Guarda.",
    maridaje:
      "Ideal con pescados al horno o a la brasa, con carnes blancas y con guisos ligeros con notas herbáceas.",
  },
  {
    stock: 40,
    marca: "Granbazan Etiqueta Ambar",
    img: "Granbazan Etiqueta Ambar.jpg",
    bodega: "Bodega Granbazán",
    denominacion: "Rías Baixas",
    tipo: "Blanco",
    añada: "2021",
    grado: "12.8% vol.",
    variedad: "100% Albariño",
    precio: 500,

    descripcion:
      "Nos encontramos ante el emblema de la bodega Granbazán. Este Albariño se elabora con el máximo esmero de principio a fin: selección de los mejores racimos en viñedo y bodega, uso del mosto lágrima, contacto sobre lías finas y sueño en botellero (porque las prisas son enemigas) convierten a este vino en un gran blanco. En nariz despliega aromas de fruta tropical como litchi o guayaba. Es largo y voluptuoso, con concentración y acidez cítrica. ",
    maridaje:
      "Un pescado graso con una salsa tan umami pide un blanco cremoso y de buena acidez como este.",
  },
  {
    stock: 41,
    marca: "Castellroig Reserva Brut",
    img: "Castellroig Reserva Brut.jpg",
    bodega: "Sabaté i Coca",
    denominacion: "Vino de España",
    tipo: "Cava",
    añada: "2018",
    grado: "12.5% vol.",
    variedad: "Macabeo, Parellada, Xarello, Chardonnay",
    precio: 500,

    descripcion:
      "Este Reserva Brut, certificado siguiendo los exigentes parámetros de la asociación Corpinnat, es un coupage de tres variedades autóctonas, Macabeo, Parellada, Xarel·lo, y una internacional, la Chardonnay. En nariz destacan aromas de fruta blanca maduras y notas florales. Un cava fresco y equilibrado, ideal para acompañar postres o aperitivos.",
    maridaje: "Ideal con postres, frutos secos y aperitivos.",
  },
  {
    stock: 42,
    marca: "Jaume Codorniu Gran Reserva",
    img: "Jaume Codorniu Gran Reserva.jpg",
    bodega: "Ars Collecta",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2014",
    grado: "12% vol.",
    variedad: "Chardonnay, Pinot noir, Xarello",
    precio: 850,

    descripcion:
      "Este cava rememora la herencia de una tradición iniciada hace más de 460 años porJaume de Codorníu. Es un homenaje al origen y al terruño y está dedicado a quienes disfrutan y aman profundamente el cava. Un Gran Reserva de edición limitada con botellas numeradas, cuyo coupage nace de la selección de los viñedos más antiguos de la bodega, así como de sus mejores uvas Pinot noir, Chardonnay y Xarel·lo",
    maridaje:
      "Ideal con los pescados y mariscos cocinados sin condimentar, con aves e incluso con setas y algunos platos de carne.",
  },
  {
    stock: 43,
    marca: "Lumen Brut Reserva",
    img: "Lumen Brut Reserva.jpg",
    bodega: "Bodegas Bilbaínas",
    denominacion: "Rioja",
    tipo: "Espumoso",
    añada: "2018",
    grado: "12% vol.",
    variedad: "100% Garnacha",
    precio: 500,

    descripcion:
      "Lumen, la marca histórica de Bodegas Bilbaínas, renace después de varias décadas dando nombre al primer espumoso de calidad de la D.O.Ca. Rioja. Este blanc de noirs elaborado con Garnacha representa una firme apuesta y compromiso por la vuelta al origen. La llegada de la iluminación eléctrica a las calles de Haro, siendo una de las primeras ciudades en recibirla, inspiró el nombre de un brut alegre y desenfadado, con la fruta (blanca y roja) como protagonista. ",
    maridaje:
      "Ideal con platos como 'sushi', pescados a la plancha, mariscos y también quesos.",
  },
  {
    stock: 44,
    marca: "Llopart Llegat Familiar",
    img: "Llopart Llegat Familiar.jpg",
    bodega: "Llopart",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2007",
    grado: "11.9% vol.",
    variedad: "100% Xarello",
    precio: 1500,

    descripcion:
      "La casa Llopart rinde homenaje a Jacinta y Pere, padres de los actuales directores, con un vino que se encumbra como el legado familiar. Con apenas 980 botellas de este elixir en el mercado, hacerse con una de estas joyas es casi una suerte. La Xarel·lo se muestra en todo su esplendor en un vino procedente de una microparcela de casi un siglo de antigüedad y que cuenta con más de 13 años de crianza en rimas. La culminación a una trayectoria intachable que se perpetúa durante 26 generaciones de viticultores.",
    maridaje:
      "Ideal con platos como 'sushi', pescados a la plancha, mariscos y también quesos.",
  },
  {
    stock: 45,
    marca: "Ars Collecta Grand Rose",
    img: "Ars Collecta Grand Rose.jpg",
    bodega: "Ars Collecta",
    denominacion: "denominacion",
    tipo: "Cava",
    añada: "2019",
    grado: "11.5% vol.",
    variedad: "85% Pinot noir, 15% Xarel·lo, Trepat",
    precio: 2500,

    descripcion:
      "La gama Ars Collecta supone la plasmación de un legado de casi cinco siglos de saber hacer enológico. La experiencia y el exhaustivo conocimiento de sus viñedos de la bodega más exclusiva de Codorníu permiten crear este coupage de tres variedades procedentes de dos zonas climáticas y de tres viñedos distintos, donde muestran su mejor expresión la Pinot noir, la Trepat y la Xarel·lo. El resultado, un magnífico cava reserva complejo, expresivo y longevo.",
    maridaje:
      "Excelente acompañante de aperitivos 'gourmet' o arroces de pescado. Perfecto con el salmón y el pescado azul crudo.",
  },
  {
    stock: 46,
    marca: "AUS Bruant",
    img: "AUS Bruant.jpg",
    bodega: "Alta Alella",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2020",
    grado: "12% vol.",
    variedad: "100% Pansa blanca",
    precio: 500,

    descripcion:
      "Brut Nature Reserva ecológico de añada al que no se le añade sulfuroso. De hecho, fue el primer cava que se elaboró de esta manera en toda España. Con él, se hace un homenaje a un pajarillo amigo de los viticultores, el Bruant, que al alimentarse de semillas, frutos y pequeños insectos, controla las plagas y el número de hierbas en el viñedo.",
    maridaje:
      "Excelente acompañante de aperitivos 'gourmet' o arroces de pescado. Perfecto con el salmón y el pescado azul crudo.",
  },
  {
    stock: 47,
    marca: "Tharsys Unico",
    img: "Tharsys Unico.jpg",
    bodega: "Pago de Tharsys",
    denominacion: "Utiel - Requena",
    tipo: "Espumoso",
    añada: "2017",
    grado: "12% vol.",
    variedad: "100% Bobal",
    precio: 500,

    descripcion:
      "Exquisito y original espumoso blanc de negre, es decir, que pese a su apariencia de color amarillo-verdoso está elaborado totalmente con la variedad tinta Bobal, autóctona de Utiel-Requena. Se trata de uno de los primeros espumosos creados únicamente con esta variedad. Todo un delirio para los sentidos y para los que quieran deleitarse con un espumoso diferente. Ha sido reconocido como el mejor vino espumoso de la DO Utiel-Requena.",
    maridaje:
      "Cocina japonesa, carnes blancas guisadas y guisos con pescados azules: titaina valenciana, marmitako.",
  },
  {
    stock: 48,
    marca: "Raimat Lo Fred de Ponent",
    img: "Raimat Lo Fred de Ponent.jpg",
    bodega: "Raimat",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2015",
    grado: "12% vol.",
    variedad: "00% Xarello",
    precio: 600,

    descripcion:
      "Este cava reserva se elabora exclusivamente con la variedad autóctona Xarel.lo, que muestra en este espumoso un delicioso perfil cítrico con aromas herbáceos y una vibrante acidez. Cuenta con una crianza en rima de un mínimo de 15 meses. Gracias a su versatilidad gastronómica es una opción perfecta tanto para tomar en el aperitivo como para acompañar una comida de principio a fin. ",
    maridaje:
      "Ideal como aperitivo o durante una comida con carnes blancas, pescado, arroces y pastas.",
  },
  {
    stock: 49,
    marca: "Descregut Brut Nature Reserva",
    img: "Descregut Brut Nature Reserva.jpg",
    bodega: "Can Descregut",
    denominacion: "Vino de España",
    tipo: "Cava",
    añada: "2019",
    grado: "11.5% vol.",
    variedad: "50% Xarello, 40% Macabeo, 10% Parellada",
    precio: 1900,

    descripcion:
      "Un brut sin adición de azúcares ni de sulfitos, elaborado con las variedades tradicionales del Penedés: Xarel·lo, Macabeo y Parellada. Este espumoso que pertenece a Corpinnat, desprende notas complejas de fruta madura y de brioche. Cremoso y elegante, posee una versatilidad tal que puede acompañar una amplia variedad de los mejores platos.",
    maridaje:
      "Ideal como aperitivo o durante una comida con carnes blancas, pescado, arroces y pastas.",
  },
  {
    stock: 50,
    marca: "Taanug Cava Brut",
    img: "Taanug Cava Brut.jpg",
    bodega: "Pinord",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2015",
    grado: "11.5% vol.",
    variedad: "Macabeo, Parellada, Xarello",
    precio: 500,

    descripcion:
      "Seguramente este sea uno de los pocos cavas con distintivo Kosher que podamos encontrar en el mercado. Se elabora con sumo cuidado, siguiendo las pautas indicadas por un rabino, y ha permanecido durante 12 meses en el botellero antes del degüelle y de salir al mercado. Aromas muy varietales, con un paso por boca suave, sedoso y fresco.",
    maridaje:
      "Cocina japonesa, carnes blancas guisadas y guisos con pescados azules: titaina valenciana, marmitako.",
  },
  {
    stock: 51,
    marca: "Visol Brut Nature Gran Reserva",
    img: "Visol Brut Nature Gran Reserva.jpg",
    bodega: "Mestres",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2014",
    grado: "12% vol.",
    variedad: "45% Xarel·lo, 35% Macabeo, 20% Parellad",
    precio: 500,

    descripcion:
      "El propio Josep Mestres Manobens dijo en 1945 que este era el primer cava de la historia sin adición de azúcar después del dégorge o degüelle, lo que hace de Mestres Visol sin duda un espumoso pionero y original. Tras una crianza de más de 80 meses en rima ofrece una riqueza aromática donde destacan notas procedentes del paso por barrica (pan, tostados, ahumados, etc.). Un espumoso maduro que nos da un amplio abanico de posibilidades en la mesa.Esta añade ha usado más Macabeo que la anterior en detrimewnto de la Xarel·lo.",
    maridaje:
      "Cocina japonesa, carnes blancas guisadas y guisos con pescados azules: titaina valenciana, marmitako.",
  },
  {
    stock: 52,
    marca: "Raimat El Cim del Turo",
    img: "Raimat El Cim del Turo.jpg",
    bodega: "Raimat",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2017",
    grado: "11.5% vol.",
    variedad: "Chardonnay, Pinot noir",
    precio: 750,

    descripcion:
      "Este cava reserva brut nature se elabora a partir de las variedades tradicionales francesas Chardonnay y Pinot noir. La célebre bodega Raimat consigue un espumoso fresco, untuoso y largo que regala múltiples capas aromáticas gracias a su crianza mínima de 15 meses. Sublime con un arroz del senyoret.",
    maridaje: "Perfecto con carnes blancas, pescado, arroces y pastas.",
  },
  {
    stock: 53,
    marca: "Juve Camps Reserva de la Familia",
    img: "Juve Camps Reserva de la Familia.jpg",
    bodega: "Juvé & Camps",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2017",
    grado: "12.5% vol.",
    variedad: "Macabeo, Xarello, Parellada",
    precio: 500,

    descripcion:
      "Este Brut Nature es el emblema de Juvé & Camps. Elaborado con el mosto flor de las variedades tradicionales Macabeo, Xarel·lo y Parellada, cultivadas en tres de las mejores fincas de la centenaria bodega del Penedès, seduce por su aroma profundo y complejo de frutas blancas maduras, notas de panadería, tostados y especias. Una referencia imprescindible de la D.O.",
    maridaje:
      "Armoniza perfectamente con arroces, quesos, carnes blancas, pescados, mariscos y cocina japonesa. También resulta ideal acompañando postre",
  },
  {
    stock: 54,
    marca: "Parxet Cuvée 21 Eco 2018",
    img: "Parxet Cuvée 21 Eco 2018.jpg",
    bodega: "Parxet",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2019",
    grado: "11.5% vol.",
    variedad: "Xarel·lo, Macabeo, Parellada",
    precio: 400,

    descripcion:
      "Cava creado de uvas que proceden de viñedos de Xarel·lo, Parellada y Macabeo cultivados siguiendo los parámetros ecológicos. Cava afrutado y e intenso. ",
    maridaje:
      "Armoniza perfectamente con arroces, quesos, carnes blancas, pescados, mariscos y cocina japonesa. También resulta ideal acompañando postre",
  },
  {
    stock: 55,
    marca: "Marta",
    img: "Marta.jpg",
    bodega: "Torre del Veguer",
    denominacion: "Penedés",
    tipo: "Espumoso",
    añada: "2017",
    grado: "12.5% vol.",
    variedad: "100% Muscat",
    precio: 680,

    descripcion:
      "Vino espumoso blanco, elaborado a partir de la variedad de Muscat. “Marta” es nombrado así en reconocimiento a la fundadora de la bodega, Marta Estany. Fresco en boca, con final muy agradable y burbuja fina, se recomienda especialmente para celebraciones.",
    maridaje: "Aperitivos, postres dulces y queso azul.",
  },
  {
    stock: 56,
    marca: "Castellroig Xarel.lo Vermell Brut",
    img: "Castellroig Xarel.lo Vermell Brut.jpg",
    bodega: "Sabaté i Coca",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2018",
    grado: "12.5% vol.",
    variedad: "Xarello",
    precio: 500,

    descripcion:
      "Este cava, que pertenece a Corpinnat, es un Brut ecológico elaborado exclusivamente con la variedad Xarel·lo, vendimiada a mano y procedente de solamente tres parcelas situadas en Turó del Mosset. En su vinificación se realiza una maceración con pieles en frío gracias a la cual se obtiene su color pajizo. En nariz destacan aromas de frutos rojos y de sotobosque, con un paso por boca fresco y afrutado",
    maridaje:
      "Ideal con pescados intensos como el salmón y el atún, o carnes blancas. Y óptimo con postres.",
  },
  {
    stock: 57,
    marca: "Esparter",
    img: "Esparter.jpg",
    bodega: "At Roca",
    denominacion: "Penedés",
    tipo: "Espumoso",
    añada: "2015",
    grado: "12% vol.",
    variedad: "100% Macabeo",
    precio: 1100,

    descripcion:
      "Esparter refleja la expresión más genuina de los grandes macabeos provenientes de viñedos plantados sobre suelos calcáreos, donde muestran todo el potencial de la variedad en su origen. Brurt Nature elaborado siguiendo el método traadicional. ",
    maridaje:
      "Ideal con pescados intensos como el salmón y el atún, o carnes blancas. Y óptimo con postres.",
  },
  {
    stock: 58,
    marca: "Pago de Tharsys Millesime Rose Brut Reserva",
    img: "Pago de Tharsys Millesime Rose Brut Reserva.jpg",
    bodega: "Pago de Tharsys",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2018",
    grado: "12% vol.",
    variedad: "100% Garnacha",
    precio: 500,

    descripcion:
      "Esta Garnacha con burbujas es la sugerente propuesta de Pago de Tharsys. Un cava rosado valenciano con aromas a cerezas y lácteos ideal para armonizar con una tarta de queso. Complejo e intenso pero con longitud y persistencia. Una apuesta segura para los fans de los espumosos rosados.",
    maridaje:
      "Mariscos, arroces y guisos marineros de gambas, carabineros, cigalas, langosta y centollo.",
  },
  {
    stock: 59,
    marca: "Núria Claverol Homenatge Gran Reserva",
    img: "Núria Claverol Homenatge Gran Reserva.jpg",
    bodega: "Sumarroca",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2014",
    grado: "12.15% vol.",
    variedad: "100% Xarel·lo",
    precio: 1500,

    descripcion:
      "Este cava lleva el nombre de la esposa del fundador de la bodega y es, según los hijos de este matrimonio, un homenaje a su amor por esta tierra, una constante en su vida. La Xarel·lo con la que se elabora procede de una pequeña parcela con un suelo que cuenta con fósiles en sus capas más profundas. Aromas minerales con un toque tostado típico de la variedad y un paso por boca sabroso y frutal.",
    maridaje:
      "Mariscos, arroces y guisos marineros de gambas, carabineros, cigalas, langosta y centollo",
  },
  {
    stock: 60,
    marca: "Alta Alella Mirgin Opus",
    img: "Alta Alella Mirgin Opus.jpg",
    bodega: "Alta Alella",
    denominacion: "Cava",
    tipo: "Cava",
    añada: "2016",
    grado: "12% vol.",
    variedad: "60% Chardonnay, 40% Pansa blanca",
    precio: 500,

    descripcion:
      "Cava proveniente del Paraje Calificado Vallcirera, ecológico de añada de estilo Brut Nature obtenido de un vino producido con uvas de un paraje determinado que cuenta con unas condiciones de suelo y clima propias. Un cava excelso. ",
    maridaje:
      "Ideal con pescados intensos como el salmón y el atún, o carnes blancas. Y óptimo con postres.",
  },
  {
    stock: 61,
    marca: "Hacienda Lopez de Haro Reserva",
    img: "Hacienda Lopez de Haro Reserva.jpg",
    bodega: "Bodega Hacienda López de Haro",
    denominacion: "Rioja",
    tipo: "Tinto Reserva",
    añada: "2016",
    grado: "14% vol.",
    variedad: "85% Tempranillo, 15% Graciano",
    precio: 450,

    descripcion:
      "Hacienda López de Haro Reserva es un clásico riojano nacido en el privilegiado entorno de San Vicente de la Sonsierra que se nutre también del perfil moderno que tienen los vinos del grupo Vintae. Desde su sencillez, redondez y elegancia, conquista por su impresionante relación calidad-precio. Se trata de uno de los riojas más vendidos de nuestra web.",
    maridaje:
      "Roast beef, solomillo con foie, embutidos ibéricos, guisos potentes o quesos curados.",
  },
  {
    stock: 62,
    marca: "Coto de Imaz Reserva",
    img: "Coto de Imaz Reserva.jpg",
    bodega: "El Coto de Rioja",
    denominacion: "Rioja",
    tipo: "Tinto Reserva",
    añada: "2017",
    grado: "13.5% vol.",
    variedad: "100% Tempranillo",
    precio: 600,

    descripcion:
      "Este reserva es uno de los vinos más reconocidos de El Coto de Rioja, una de las grandes bodegas de la prestigiosa región. Se trata de un tinto complejo y equilibrado que seduce al paladar gracias a la calidad de sus uvas y su extensa y cuidada crianza. Un rioja tan clásico como versátil. ",
    maridaje:
      "Ideal con carne de caza, con carne roja a la parrilla o guisada y con quesos curados de oveja.",
  },
  {
    stock: 63,
    marca: "Campo Viejo Gran Reserva",
    img: "Campo Viejo Gran Reserva.jpg",
    bodega: "Campo Viejo",
    denominacion: "Rioja",
    tipo: "Tinto Gran Reserva",
    añada: "2013",
    grado: "13% vol.",
    variedad: "Tempranillo, Graciano, Mazuelo",
    precio: 1200,

    descripcion:
      "En 1959 José Ortigüela decidió fundar Campo Viejo, en el corazón de Rioja. Desde entonces, la bodega, añada tras añada, crea vinos expresivos y llenos de carácter que celebran la riqueza de la región. Este Gran Reserva es un ejemplo de la maestría en las labores de crianza en madera logradas por la enóloga Elena Adell, consiguiendo así grandes tintos con carácter y persistencia",
    maridaje: "Carnes rojas, caza, asados, quesos azules.",
  },
  {
    stock: 64,
    marca: "Arienzo Crianza",
    img: "Arienzo Crianza.jpg",
    bodega: "Marqués de Riscal",
    denominacion: "denominacion",
    tipo: "Rioja",
    añada: "2018",
    grado: "13.9% vol.",
    variedad: "96% Tempranillo, 4% Graciano",
    precio: 400,

    descripcion:
      "Tinto elaborado a partir de una selección de las mejores uvas de las variedades Tempranillo y Graciano, procedentes de viñedos situados en Laguardia y Elciego. Un vino fresco y frutal, con notas de madera, coco y vainilla. Amplio en boca, persistente y con carácter. Ideal para acompañar carnes blancas y rojas a la brasa, pescado azul y quesos curados.",
    maridaje:
      "Ideal para acompañar carnes blancas y rojas a la brasa, pescado azul como el emperador y quesos curados.",
  },
  {
    stock: 65,
    marca: "Viña Lanciano Reserva",
    img: "Viña Lanciano Reserva.jpg",
    bodega: "LAN",
    denominacion: "Rioja",
    tipo: "Tinto Reserva",
    añada: "2015",
    grado: "13.5% vol.",
    variedad: "96% Tempranillo, 2% Graciano, 2% Mazuelo",
    precio: 900,

    descripcion:
      "Este tinto se elabora con Tempranillo, Graciano y Mazuelo. Se obtiene a partir de una selección de cepas de más de 30 años procedentes de la finca Viña Lanciano. Un vino singular de personalidad diferenciada, elegante y refinada. Ha recibido numerosos reconocimientos y en él se da una importancia considerable a la selección del tipo de madera; se emplea roble francés  Troncaise y roble caucásico.",
    maridaje:
      "Guisos, platos especiados, carpaccios de carne, ahumados y quesos curados.",
  },
  {
    stock: 66,
    marca: "Vina Cumbrero Crianza",
    img: "Vina Cumbrero Crianza.jpg",
    bodega: "Bodegas Osborne",
    denominacion: "Rioja",
    tipo: "Tinto Crianza",
    añada: "2018",
    grado: "13% vol.",
    variedad: "95% Tempranillo, 5% Garnacha",
    precio: 350,

    descripcion:
      "Este Crianza riojano es un ejemplo clásico de los vinos de la región, elaborado a base de Tempranillo y un pequeño porcentaje de Garnacha. Destaca por su nariz especiada y su elegancia en boca, que lo hacen perfecto para acompañar, por ejemplo, con carnes rojas",
    maridaje: "Platos de cuchara y embutidos, carnes a la plancha y asadas.",
  },
  {
    stock: 67,
    marca: "Tierra Crianza",
    img: "Tierra Crianza.jpg",
    bodega: "Bodegas Tierra",
    denominacion: "Rioja",
    tipo: "Tinto Crianza",
    añada: "2019",
    grado: "13% vol.",
    variedad: "100% Tempranillo",
    precio: 550,

    descripcion:
      "Este tinto de Bodegas Tierra muestra el carácter elegante de la Tempranillo en la Rioja Alavesa. Con una crianza de 12 meses, exhibe un perfil aromático con notas de fruta madura y una firme estructura que lo convierte en un vino muy versátil. Una gran opción para conocer el potencial de los viñedos de Labastida.",
    maridaje:
      "Recomendado para acompañar platos de cuchara, asados de cordero y cochinillo y otras carnes rojas.",
  },
  {
    stock: 68,
    marca: "Pradorey Reserva Finca La Mina",
    img: "Pradorey Reserva Finca La Mina.jpg",
    bodega: "Bodega y viñedos Pradorey",
    denominacion: "Ribera del Duero",
    tipo: "Tinto Reserva",
    añada: "2017",
    grado: "15% vol.",
    variedad: "100% Tinto fino",
    precio: 1400,

    descripcion:
      "No todas las añadas ve la luz este Reserva Finca La Mina. Solo las de calidad excepcional, como esta 2017, elabora Pradorey este tinto de guarda de agradables y aterciopeladas sensaciones de fruta madura y balsámicas, complejo y elegante. Un ribera perfecto para acompañar con carnes intensas.",
    maridaje:
      "Ideal con caza menor de pelo y con caza menor de pluma, setas guisadas, guisos complejos y salseados y con carnes de tacto gelatinoso como callos o rabo de toro. Para el postre, se recomienda probarlo con chocolate amargo.",
  },
  {
    stock: 69,
    marca: "Emilio Moro",
    img: "Emilio Moro.jpg",
    bodega: "Emilio Moro",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2019",
    grado: "14.5% vol.",
    variedad: "100% Tempranillo",
    precio: 1100,

    descripcion:
      "Este vino lleva el nombre del creador y alma mater de la casa. Desde 1998 se refiere al vino elaborado a partir de viñedos plantados con la variedad Tempranillo de entre 12 y 25 años. Esta añada 2019, de perfil más mediterráneo de lo habitual, se muestra muy compleja aromáticamente, con un perfecto equilibrio entre concentración y sutileza. Un tinto serio pero goloso, en el que se aprecian taninos amables que acarician el paladar.",
    maridaje:
      "Cordero asado, carnes rojas a la parrilla, caza y quesos curados.",
  },
  {
    stock: 70,
    marca: "Coto de Imaz Reserva",
    img: "Coto de Imaz Reserva.jpg",
    bodega: "El Coto de Rioja",
    denominacion: "Rioja",
    tipo: "Tinto Reserva",
    añada: "2017",
    grado: "13% vol.",
    variedad: "100% Tempranillo",
    precio: 500,

    descripcion:
      "Este reserva es uno de los vinos más reconocidos de El Coto de Rioja, una de las grandes bodegas de la prestigiosa región. Se trata de un tinto complejo y equilibrado que seduce al paladar gracias a la calidad de sus uvas y su extensa y cuidada crianza. Un rioja tan clásico como versátil. ",
    maridaje:
      "Ideal con carne de caza, con carne roja a la parrilla o guisada y con quesos curados de oveja",
  },
  {
    stock: 71,
    marca: "Finca Resalso",
    img: "Finca Resalso.jpg",
    bodega: "Emilio Moro",
    denominacion: "Ribera del Duero",
    tipo: "tinto",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Tempranillo",
    precio: 600,

    descripcion:
      "Este vino lleva por nombre el del viñedo que se plantó cuando nació Emilio Moro en 1932. Es el vino más joven de la bodega, elaborado con viñedos de apenas 15 años de edad. Maduro y con buena acidez, Finca Resalso procede de una añada marcada por unas temperaturas ligeramente más altas de lo habitual y unas lluvias durante la vendimia que no afectaron a la calidad de la uva.",
    maridaje: "Tapas, embutidos y carnes blancas al horno bien condimentadas.",
  },
  {
    stock: 72,
    marca: "Rolland Galarreta Ribera del Duero",
    img: "Rolland Galarreta Ribera del Duero.jpg",
    bodega: "Rolland y Galarreta",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2018",
    grado: "14% vol.",
    variedad: "85% Tempranillo, 15% Merlot",
    precio: 700,

    descripcion:
      "El viticultor español Javier Galarreta sumó sus esfuerzos a los del archiconocido consultor francés Michel Rolland y juntos crearon la bodega de la que procede este tinto. Un Ribera del Duero clásico, con atractivas notas aromáticas de canela, especias, lavanda y cereza picota que dan paso a una textura suave y a un agradable equilibrio.v",
    maridaje: "Carnes rojas, estofados, platos de caza y quesos curados.",
  },
  {
    stock: 73,
    marca: "Ausas Interpretacion",
    img: "Ausas Interpretacion.jpg",
    bodega: "Ausàs Bodegas y Viñedos",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2018",
    grado: "15% vol.",
    variedad: "100% Tinto fino",
    precio: 3000,

    descripcion:
      "desTercera añada de este coloso con el que Xavier Ausàs reinterpreta la Ribera del Duero tras 30 años de experiencia. Tres son los pilares clave de este monovarietal de Tinto fino: su pureza aromática, frescura y una manifestación tánica elegante. Un tinto, en suma, que muestra el cáracter ribereño, apuntalado en una espina dorsal caliza de taninos de grano fino y roble perfectamente integrados. Sublime. cripcion",
    maridaje:
      "Carnes a la brasa, parrillas, embutidos, jamón, platos condimentados, rabo de toro.",
  },
  {
    stock: 74,
    marca: "Viore Ribera del Duero Crianza",
    img: "Viore Ribera del Duero Crianza.jpg",
    bodega: "bodega",
    denominacion: "Ribera del Duero",
    tipo: "Tinto Crianza",
    añada: "2016",
    grado: "14% vol.",
    variedad: "14% vol.",
    precio: 650,

    descripcion:
      "La gama de vinos Viore es el proyecto de Bodegas Riojanas en denominaciones de origen castellanoleonesas. En Ribera del Duero elaboran este crianza en el que la Tinta de Toro es la protagonista. Perfil aromático potente, con un paso por boca cálido, carnoso y con cuerpo.",
    maridaje: "Carnes rojas, estofados, platos de caza y quesos curados.",
  },
  {
    stock: 75,
    marca: "Pago de los Capellanes El Nogal",
    img: "Pago de los Capellanes El Nogal.jpg",
    bodega: "Pago de los Capellanes",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2016",
    grado: "14.5% vol.",
    variedad: "variedad",
    precio: 3500,

    descripcion:
      "Un vino serio y complejo al que le queda una larga vida por delante. De producción limitada, solo se elabora en añadas consideradas excepcionales y procede de un terruño especial caracterizado por un microclima propicio para alumbrar grandes vinos.",
    maridaje:
      "Carnes rojas, asados, caza mayor, cochinillo, rabo de toro y acompañante de salsas complejas.",
  },
  {
    stock: 76,
    marca: "Palacio de Bornos Brut",
    img: "Palacio de Bornos Brut.jpg",
    bodega: "Bornos Bodegas y Viñedos",
    denominacion: "Rueda",
    tipo: "Espumoso",
    añada: "2018",
    grado: "12% vol.",
    variedad: "100% Verdejo",
    precio: 500,

    descripcion:
      "Palacio de Bornos Brut está elaborado únicamente con la variedad estrella de Rueda: la Verdejo. Este es un espumoso potente, complejo y maduro. Exhibe una gran estructura y agradables notas de flores blancas y hierbas silvestres. Estas burbujas son ideales para acompañar pescados, carnes blancas, verduras y quesos.",
    maridaje:
      "Pescado blanco y azul, marisco, aves, carne blanca, verduras y quesos",
  },
  {
    stock: 77,
    marca: "Elivo Espumoso",
    img: "Elivo Espumoso.jpg",
    bodega: "Grupo Élivo",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2020",
    grado: "12% vol.",
    variedad: "100% Chardonnay",
    precio: 300,

    descripcion:
      "Espumoso sin alcohol monovarietal de Chardonnay: Para los que quieran disfrutar de las burbujas sin ingerir nada de alcohol. Se emplean conservantes (E-220 y E-242).",
    maridaje:
      "Pescado blanco y azul, marisco, aves, carne blanca, verduras y quesos",
  },
  {
    stock: 78,
    marca: "Kimera Espumoso Ancestral Rosado",
    img: "Kimera Espumoso Ancestral Rosado.jpg",
    bodega: "LMT Wines",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2020",
    grado: "12.5% vol.",
    variedad: "80% Garnacha, 20% Garnacha blanca",
    precio: 500,

    descripcion:
      "Kimera es el proyecto común que ha unido a Luis Moya y Gonzalo Celayeta. Con la elaboración de este espumoso ancestral se ha buscado la más pura expresión de la fruta con un vino alegre y divertido. Con él han dado un paso adelante respecto a los ensayos realizados en años anteriores que tuvieron ensayos de toma de presión y de perdida de producto en degüelles. El aprendizaje vino acompañado de muchas roturas y explosiones de botellas. Cinco años después, los elaboradores han consegudio domar a la fiera. ",
    maridaje:
      "Pescado blanco y azul, marisco, aves, carne blanca, verduras y quesos",
  },
  {
    stock: 79,
    marca: "Llopart Leopardi",
    img: "Llopart Leopardi.jpg",
    bodega: "Llopart",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2014",
    grado: "11.8% vol.",
    variedad: "50% Xarel·lo, 50% Macabeo,",
    precio: 1400,

    descripcion:
      "Este vino fino y elegante, rinde homenaje con su nombre a Bernardus Leopardi, quien fuera el encargado de comenzar con la tradición vitivinícola de la familia Llopart allá por 1385. Espumoso de añada elaborado con las autóctonas Xarel·lo, Macabeo y Parellada que destaca por su elegancia y potencial evolutivo. Aroma complejo, con notas especiadas. Equilibrado, seco y suave, delicadamente sabroso. La insignia de la casa y un aunténtico referente entre los espumosos de alta calidad.",
    maridaje:
      "Pescado blanco y azul, marisco, aves, carne blanca, verduras y quesos",
  },
  {
    stock: 80,
    marca: "Torello Rose Reserva",
    img: "Torello Rose Reserva.jpg",
    bodega: "Torelló Viticultors",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2017",
    grado: "12% vol.",
    variedad: "100% Pinot Noir",
    precio: 1000,

    descripcion:
      "Un espumoso brut rosado elaborado con 100% Pinot noir. De agradables aromas a fruta roja, fresa y casís. Fresco y con un dulzor bien equilibrado. Ideal para acompañar platos como el sushi.",
    maridaje:
      "Ideal para acompañar sushi, marisco, pulpo “a feira”, lasaña de verduras, arroz y fideuá.",
  },
  {
    stock: 81,
    marca: "Espuma de Otazu",
    img: "Espuma de Otazu.jpg",
    bodega: "Espuma de Otazu",
    denominacion: "Vino de España",
    tipo: "Espumoso",
    añada: "2019",
    grado: "12% vol.",
    variedad: "100% Chardonnay",
    precio: 1500,

    descripcion:
      "Espuma de Otazu es un espumo de añada de tipo Brut elaborado exclusivamente con Chardonnay y mediante el método tradicional, el mismo utilizado por los vinos de Champagne. Siguiendo esa equivalencia, podría decirse por tanto que estamos ante un millesimé blanc de blancs, eso sí, elaborado en Navarra. Su producción, limitada a poco más de 4.500 botellas, lo convierte en un vino exclusivo, con un paso elegante y cremoso por el paladar y una nariz fresca y con notas florales.",
    maridaje:
      "Ideal para acompañar sushi, marisco, pulpo “a feira”, lasaña de verduras, arroz y fideuá.",
  },
  {
    stock: 82,
    marca: "Campo Eliseo Blanco",
    img: "Campo Eliseo Blanco.jpg",
    bodega: "Campo Elíseo en Rueda",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2017",
    grado: "13.5% vol.",
    variedad: "100% Verdejo",
    precio: 1800,

    descripcion:
      "Con este vino, François Lurton y Michel Rolland buscan mostrar la auténtica esencia de la Verdejo. Este vino justificó la construcción de una nueva bodega con un clásico sistema de cuevas subterráneas para una lenta crianza. Es el vino más mimado de la bodega. En cata se comporta como un gran blanco, eminentemente frutal y fresco en nariz pero con una gran estructura en boca, condición que augura una excelente evolución en botella.",
    maridaje:
      "Pintada, pavo, ternera a la parrilla con hierbas, platos indios, tapas españolas.",
  },
  {
    stock: 83,
    marca: "Emina Verdejo",
    img: "Emina Verdejo.jpg",
    bodega: "Emina Rueda",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Verdejo",
    precio: 300,

    descripcion:
      "Monovarietal de Verdejo procedente de los viñedos del Grupo Matarromera situados en la pequeña localidad de Villalba de Adaja (Valladolid). Una buena opción de frescura con una agradable sensación frutal y una punta de acidez típica de la variedad a un precio irresistible. La levadura que lleva a cabo la fermentación del vino ha sido seleccionada en los propios viñedos y provienen de los hollejos de la uva. Estas levaduras son las responsables de conseguir un verdejo inigualable.",
    maridaje:
      "maridPintada, pavo, ternera a la parrilla con hierbas, platos indios, tapas españolas.aje",
  },
  {
    stock: 84,
    marca: "Cvne Rueda",
    img: "Cvne Rueda.jpg",
    bodega: "CVNE",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Verdejo",
    precio: 280,

    descripcion:
      "Cvne, a pesar de ser una marca asociada tradicionalmente al vino de Rioja, elabora también un monovarietal de Verdejo en los límites de la D.O. Rueda. Se trata de un blanco joven y fresco que representa fielmente las mejores cualidades de los vinos de la zona, con sus característicos toques frutales y florales.",
    maridaje:
      "Perfecto tanto solo como en aperitivos o acompañado con mariscos, pescados e incluso con salsas exóticas.",
  },
  {
    stock: 85,
    marca: "Beronia Rueda",
    img: "Beronia Rueda.jpg",
    bodega: "Beronia",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13.5% vol.",
    variedad: "100% Verdejo",
    precio: 300,

    descripcion:
      "Blanco elaborado con Verdejo procedente de una selección de los viñedos de Rueda y La Seca. Una de las caracteristicas diferenciales de Beronia Rueda es la capacidad de almacenar mosto retrasando la fermentación alcohólica de una parte de la cosecha hasta la primavera del año siguiente para dar vinos recién fermentados y llenos de frescura. El resultado es un blanco equilibrado, armonioso y muy versátil.",
    maridaje:
      "Ideal con sushi, con comida oriental, con pescados, con ahumados y con quesos de pasta blanda.",
  },
  {
    stock: 86,
    marca: "Basa",
    img: "Basa.jpg",
    bodega: "Compañía de Vinos Telmo Rodriguez",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2019",
    grado: "13% vol.",
    variedad: "90% Verdejo, 10% Viura",
    precio: 600,

    descripcion:
      "Basa es junto con El Transistor el único vino que Telmo Rodríguez elabora en la D.O Rueda. En la elaboración de Basa interviene además de Verdejo un pequeño porcentaje de Viura. Su viticultura es razonada, solamente se usan pesticidas en el viñedo bajo control. Blanco con los elementos aromáticos característicos de la uva reina de Rueda y con una buena acidez y estructura. Es un blanco directo, fresco y expresivo.En esta añada 2019 4 la botella se presenta con 4 etiquetas especiales diseñadas por destacados artistas internacionales, como homenaje al 20 aniversario de Basa. La recepción de las mismas es totalmente aleatorio",
    maridaje:
      "Ideal con sushi, con comida oriental, con pescados, con ahumados y con quesos de pasta blanda.",
  },
];

export default ArrayProductos;
