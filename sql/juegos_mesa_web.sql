-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-05-2024 a las 12:21:12
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `juegos_mesa_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `componentes`
--

CREATE TABLE `componentes` (
  `id_componente` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `componentes`
--

INSERT INTO `componentes` (`id_componente`, `nombre`) VALUES
(1, 'Cartas'),
(2, 'Dados'),
(3, 'Fichas'),
(4, 'Losetas'),
(5, 'Miniaturas'),
(6, 'Tablero'),
(7, 'Legacy'),
(8, 'Print & Play (Imprime y juega)'),
(9, 'Electrónicos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id_evento` int(11) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `lugar` varchar(500) NOT NULL,
  `inicio` datetime NOT NULL,
  `fin` datetime NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id_evento`, `titulo`, `lugar`, `inicio`, `fin`, `descripcion`) VALUES
(1, 'LA COMARCON\'24', 'Av. Monge y Bielsa S/N Torrevieja Alicante España', '2024-04-20 09:00:00', '2024-04-21 21:00:00', 'X Jornada de ocio alternativo de Torrevieja'),
(2, 'LUDIVERS 2023', 'Jardins de la Devesa de Girona, Girona, España', '2024-05-02 09:00:00', '2024-05-05 21:00:00', '\"X festival del Joc i leș Cultures de la imaginación\"'),
(3, 'ZONA LÚDICA 2024', 'CEULAJ Avenida de la Américas MA-703, s/n, 29532 Mollina, Málaga', '2024-05-02 09:00:00', '2024-05-05 21:00:00', 'Encuentro de Juegos de Mesa, donde se desarrollaran numerosos torneos, partidas, concurso de prototipos, demostraciones y otras actividades.'),
(4, 'FIRA JUGAR X JUGAR 2024', 'Recinte Firal Carrer Londres, 1, 08401 Granollers Barcelona España', '2024-05-10 09:00:00', '2024-05-12 21:00:00', 'Una muestra lúdica con todas las novedades del sector editorial, actividades y torneos.'),
(5, 'TIERRA DE NADIE 2022 (TDN 2023)', 'CEULAJ Avenida de la Américas MA-703, s/n, 29532 Mollina, Málaga Málaga España', '2024-08-02 09:00:00', '2024-08-06 21:00:00', NULL),
(6, 'UMBRAS DE ALTER PARADOX 2024', 'Avenida Ugarrandía 2 Huarte Navarra España', '2024-08-16 09:00:00', '2024-08-18 21:00:00', 'Jornadas lúdicas gratuitas en las que se comparte un ocio alternativo y social, que deje volar la imaginación. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE `lugares` (
  `id_lugares` int(3) UNSIGNED NOT NULL,
  `lugares_tipo_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `nombre` varchar(75) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lugares`
--

INSERT INTO `lugares` (`id_lugares`, `lugares_tipo_id`, `nombre`, `latitud`, `longitud`, `direccion`, `estado`) VALUES
(1, 1, 'Bar Queimada Nivell Q', 41.41442560191019, 2.180600916835595, 'C/ de la Independència, 323, Sant Martí, 08026 Barcelona', 0),
(2, 1, 'Còctel Bar La Cotxera', 41.43236582380968, 2.176726221873478, 'Carrer de Costa i Cuxart, 31, Nou Barris, 08016 Barcelona', 0),
(3, 1, 'La Musgaña', 41.443289928350296, 2.1726020081788144, ' Carrer de Lorena, 33, Nou Barris, 08042 Barcelona', 0),
(4, 1, 'Ocio Bar', 41.40139797353506, 2.1816737753500375, 'C/ de Sardenya, 202, L\'Eixample, 08013 Barcelona', 0),
(5, 1, 'Churrería La Nena', 41.40735439380094, 2.1588054324358343, 'C/ de Ramón y Cajal, 36, Gràcia, 08012 Barcelona\r\n', 0),
(6, 1, 'Butyklan Les Corts\r\n', 41.39119914654302, 2.126353607536516, 'Travessera de les Corts, 160, Les Corts, 08020 Barcelona', 0),
(7, 2, 'La Cofradía', 41.42891638072589, 2.1800370338553683, 'Casal de Barrio Congrés-Indians\r\nCarrer de la Manigua, 25 - 35, Sant Andreu, 08027 Barcelona\r\n', 0),
(8, 2, 'Associació Lúdica Barcelona Reapers', 41.38640934308414, 2.12740650055208, 'Gran Via de Carles III, 33, Les Corts, 08028 Barcelona', 0),
(9, 2, 'Club de Rol La Ploma Negra', 41.40340526508549, 2.144414204321432, 'Carrer de Manuel Angelon, 1, Sarrià-Sant Gervasi, 08006 Barcelona', 0),
(10, 2, 'Associació Lúdica Sants-Niggurath', 41.37316948379865, 2.1366263957525438, 'Lleialtat Santsenca, Carrer d\'Olzinelles, 31, Sants-Montjuïc, 08014 Barcelona', 0),
(11, 2, 'JugarXHorta', 41.43781082108695, 2.1602934122604833, 'Carrer de Feliu i Codina, 7-9, Horta-Guinardó, 08031 Barcelona', 0),
(14, 3, 'Biblioteca El Clot - Josep Benet', 41.40844613399379, 2.188260371126321, 'Pl. de las Glorias Catalanas, 37-38, Sant Martí, 08013 Barcelona', 0),
(15, 3, 'Biblioteca Nou Barris - Aurora Díaz Plaja', 41.440339392503596, 2.1707224118634354, 'Plaça Major de Nou Barris, 2, Nou Barris, 08042 Barcelona\r\n', 0),
(16, 3, ' Biblioteca Ignasi Iglésias-Can Fabra', 41.439038749286006, 2.1921971958368784, 'Carrer del Segre, 24, planta baixa, San Andrés de Palomar, 08030 Barcelona', 0),
(17, 3, 'Biblioteca Vilapicina i la Torre Llobeta - Carmen Laforet', 41.431997451984444, 2.175168602917989, 'Plaça de Carmen Laforet, 11, Distrito de Nou Barris, 08016 Barcelona', 0),
(21, 4, 'JugarXJugar', 41.40722278618941, 2.174564342649728, 'Av. de Gaudí, 39, L\'Eixample, 08025 Barcelona', 0),
(22, 4, 'Kaburi', 41.39330266984625, 2.1780883968847893, 'Pg. de St. Joan, 11, L\'Eixample, 08010 Barcelona', 0),
(23, 4, 'Mathom Maldà', 41.383547218379526, 2.173451103752235, 'c/ del Pi, 1 (Galeries, Local 10, 08002 Maldà, Barcelona', 0),
(24, 4, 'Gameria', 41.39263125058313, 2.1774038241897595, 'C/ d\'Ausiàs Marc, 52, L\'Eixample, 08010 Barcelona', 0),
(25, 4, 'Zacatrus', 41.38240655136882, 2.1629122977834827, 'Carrer de Casanova, 3, Eixample, 08011 Barcelona', 0),
(26, 4, 'The Curiosity Shop', 41.40232164185671, 2.1579052221358146, 'C/ de Ramón y Cajal, 13, Gràcia, 08012 Barcelona', 0),
(27, 4, 'Lupoteca', 41.40380495540293, 2.139431051049934, 'Ronda del General Mitre, 150, Sarrià-Sant Gervasi, 08006 Barcelona', 0),
(28, 4, '4Dados', 41.39269225048907, 2.176259264431018, 'C/ de Bailèn, 21, L\'Eixample, 08010 Barcelona', 0),
(29, 4, 'inGenio BCN Games', 41.39268640176218, 2.1796100444402353, 'Pg. de St. Joan, 16, L\'Eixample, 08010 Barcelona', 0),
(30, 4, 'El Nucli', 41.37864473927091, 2.137115426998803, 'C/ de Valladolid, 41, Sants-Montjuïc, 08014 Barcelona', 0),
(31, 4, 'La Tienda Scum', 41.42166892755371, 2.1994945468826774, 'C/ del Treball, 246, Sant Martí, 08020 Barcelona', 0),
(32, 4, 'La Jungla', 41.40253651004061, 2.205636786620659, 'Plaça de Sant Bernat Calbó, 8, Sant Martí, 08005 Barcelona', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares_tipo`
--

CREATE TABLE `lugares_tipo` (
  `id_lugares_tipo` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lugares_tipo`
--

INSERT INTO `lugares_tipo` (`id_lugares_tipo`, `nombre`) VALUES
(2, 'Asociaciones'),
(1, 'Bares'),
(3, 'Bibliotecas'),
(4, 'Tiendas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas_participantes`
--

CREATE TABLE `partidas_participantes` (
  `id_participacion` int(11) NOT NULL,
  `partidas_realizadas_id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `puntuacion` int(5) DEFAULT NULL,
  `ganada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partidas_participantes`
--

INSERT INTO `partidas_participantes` (`id_participacion`, `partidas_realizadas_id`, `user_id`, `alias`, `puntuacion`, `ganada`) VALUES
(1, 1, 2, NULL, 30, 0),
(2, 1, 1, NULL, 90, 1),
(3, 1, NULL, 'Invitad@', 10, 0),
(4, 3, 2, NULL, 75, 1),
(5, 3, 1, NULL, 15, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas_realizadas`
--

CREATE TABLE `partidas_realizadas` (
  `id_partidas_realizadas` int(11) UNSIGNED NOT NULL,
  `juego_id` int(11) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `lugar` varchar(255) NOT NULL,
  `duracion_minutos` smallint(3) UNSIGNED NOT NULL,
  `comentario` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partidas_realizadas`
--

INSERT INTO `partidas_realizadas` (`id_partidas_realizadas`, `juego_id`, `fecha`, `fecha_inicio`, `fecha_fin`, `lugar`, `duracion_minutos`, `comentario`) VALUES
(1, 2, '2024-04-22', '2024-04-22 15:50:13', '2024-04-22 15:50:13', 'Casa', 0, 'Se tarda 20 minutos en preparar la partida'),
(3, 25, '2024-04-23', '2024-04-23 12:00:00', '2024-04-23 13:30:00', 'Biblioteca El Clot -Josep Benet', 45, 'Partida emocionante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas_user`
--

CREATE TABLE `partidas_user` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `id_partidas_realizadas` int(10) UNSIGNED NOT NULL,
  `user_id` int(8) UNSIGNED DEFAULT NULL,
  `juego_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_juego` int(11) UNSIGNED NOT NULL,
  `complejidad_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `contexto_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `tematizacion_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `dinamica_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `parte_id` tinyint(3) UNSIGNED DEFAULT NULL,
  `ruta_imagen` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(2048) DEFAULT NULL,
  `fecha_publicacion` year(4) DEFAULT NULL,
  `editorial` varchar(100) NOT NULL,
  `autoria` text NOT NULL,
  `ilustracion` text DEFAULT NULL,
  `participantes_min` tinyint(3) UNSIGNED NOT NULL,
  `participantes_max` tinyint(3) UNSIGNED NOT NULL,
  `duracion_minutos` smallint(3) UNSIGNED NOT NULL,
  `edad_min` tinyint(3) NOT NULL,
  `ean` varchar(13) DEFAULT NULL,
  `url` varchar(2048) DEFAULT NULL,
  `medidas_caja_cm` varchar(50) DEFAULT NULL,
  `peso_gr` smallint(5) UNSIGNED DEFAULT NULL,
  `premios` varchar(255) DEFAULT NULL,
  `ranking_global` decimal(3,2) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_juego`, `complejidad_id`, `contexto_id`, `tematizacion_id`, `dinamica_id`, `parte_id`, `ruta_imagen`, `titulo`, `descripcion`, `fecha_publicacion`, `editorial`, `autoria`, `ilustracion`, `participantes_min`, `participantes_max`, `duracion_minutos`, `edad_min`, `ean`, `url`, `medidas_caja_cm`, `peso_gr`, `premios`, `ranking_global`) VALUES
(1, 2, 6, 1, 3, NULL, 'assets/images/games/skyjo.png', 'Skyjo', '<p>En \"\"Skyjo\"\" tienes que recoger la menor cantidad de puntos posible durante varias rondas de juego.Porque al final de cada ronda de juego los puntos se cuentan para cada jugador y se agregan a su puntuación anterior.</p>\r\n<p>Una vez que un jugador ha alcanzado 100 o más puntos, el juego termina y el jugador con menos se convierte en el ganador. Ganar puntos bajos significa buscar tarjetas con números tan pequeños y negativos como sea posible.</p>\r\n<p>Las reglas especiales ponen en juego elementos tácticos, lo que puede conducir a un giro sorprendente en las perspectivas de ganancias y así proporcionar suspenso adicional.</p>', '2015', 'Magilano', 'Alexander Bernhardt', 'Alexander Bernhardt', 2, 8, 30, 8, '4260470080070', 'https://www.magilano.com/produkt/skyjo/?lang=en&v=1d2a83b3af1f', '19 × 10 × 3', 250, NULL, NULL),
(2, 3, 2, 2, 3, NULL, 'assets/images/games/catan.jpeg', 'Catan', 'Catan, también conocido como Los Colonos de Catan, es un juego de mesa clásico que ha revolucionado los juegos de mesa modernos. En el juego, los jugadores colonizan una isla rica en recursos, recolectando y negociando materias primas para construir caminos, pueblos y ciudades.\r\n', '1995', 'Devir', 'Klaus Teuber', 'Michael Menzel', 3, 4, 90, 10, '8436017220100', 'https://devir.es/catan', '30 x 30 x 7 ', 1250, 'Spiel des Jahres (1995), Deutscher Spiele Preis (1995)', NULL),
(22, 1, 2, 2, 3, NULL, 'assets/images/games/pelusas.png', 'Pelusas', 'Juego de cartas donde los jugadores deben reunir tantas pelusas como sea posible, evitando las corrientes de aire.', '2022', 'Mercurio', 'Reiner Knizia', 'Miguel Ángel Galán', 2, 6, 20, 8, '8437020827591', 'https://mercurio.com.es/pelusas/', '9,5 x 12,5 x 2,5', 300, '', NULL),
(23, 1, 2, 2, 3, NULL, 'assets/images/games/sushigo.jpeg', 'Sushi go!', 'Sushi Go! es un juego rápido y sencillo que simula la experiencia de comer en un restaurante de sushi con una cinta transportadora. Diseñado por Phil Walker-Harding y publicado por Devir, este juego invita a los jugadores a construir el menú perfecto mientras las cartas pasan de mano en mano.', '2018', 'Devir', 'Phil Walker-Harding', 'Nan Rangsima, Tobias Schweiger, Phil Walker-Harding', 2, 5, 15, 8, '8436017221855', 'https://devir.es/sushi-go', '16 x 5 x 9', 280, 'UK Expo al mejor juego de cartas(2013), Mejor juego Australiano(2015)', NULL),
(24, 1, 2, 1, 3, NULL, 'assets/images/games/dobble.png', 'Dobble', 'Dobble es un juego de cartas rápido que desafía tus reflejos y habilidades de observación. El objetivo es ser el primero en identificar el símbolo coincidente entre dos cartas, superando a los demás jugadores.', '2009', 'Asmodee', 'Denis Blanchot', 'NA', 2, 8, 15, 6, '3558380108115', 'https://www.asmodee.es/product/dobble/', ' 13 x 13 x 7', 200, '', NULL),
(25, 1, 2, 2, 3, NULL, 'assets/images/games/elreydelosdados.jpeg', 'El rey de los dados', 'En el Rey de los Dados los jugadores intentan atraer a nuevos habitantes para poblar su reino. Utilizando cartas y dados, deben cumplir con los requisitos que se indican en las cartas, como conseguir combinaciones específicas para atraer a diferentes personajes. Algunas cartas especiales brindan ventajas, mientras que otras introducen desafíos como dragones y pícaros.', '2017', 'Haba', 'Nils Nilsson', 'Guss Batts', 2, 5, 30, 8, '010168237963', 'https://www.habausa.com/products/king-of-dice?_pos=1&_psq=king-of-the&_ss=e&_v=1.0', '15,5 x 15,5 x 5 ', 350, '', NULL),
(27, 1, 2, 2, 3, NULL, 'assets/images/games/virus.png', 'Virus!', 'El juego Virus! es un emocionante juego de cartas donde el objetivo es aislar un cuerpo sano y eliminar los virus antes que los demás jugadores, utilizando tácticas que incluyen sabotear a tus rivales.', '2015', 'Tranjis Games', 'Carlos López, Domingo Cabrero, Santi Santisteban', 'David GJ', 2, 6, 20, 8, '9788460659662', 'https://tranjisgames.com/tienda/juego-de-mesa-virus/', '15 x 10,5 x 2,5', 180, NULL, NULL),
(28, 2, 5, 2, 3, NULL, 'assets/images/games/oceanosdepapel.jpeg', 'Océanos de Papel', 'Juego en el que en tu turno deberás añadir una carta a tu mano, aplicar los posibles efectos que las cartas te otorguen y decidir si finalizar o no la ronda.', '2023', 'Tranjis Games', 'Bruno Cathala, Théo Rivière', 'Lucien Derainne, Pierre-Yves Gallard', 2, 4, 30, 8, '8425402885772', 'https://tranjisgames.com/tienda/oceanos-de-papel/', '9,75 × 7,1 × 3,45', 200, 'Premio del público Córdoba 2023', NULL),
(29, 1, 6, 1, 3, NULL, 'assets/images/games/mia.jpeg', '¡Mía!', 'Juego matemático en el que resuelves operaciones sumando y restando cartas de números en tu mano.', '2018', 'Tranjis Games', 'Jesús Álvarez', 'WAH! Studio', 1, 6, 10, 6, '8425402271391', 'https://tranjisgames.com/tienda/mia/', '15 x 10,5 x 3,5 ', 300, NULL, NULL),
(30, 1, 2, 2, 3, 2, 'assets/images/games/virus2.jpeg', 'Virus! 2 Evolution', 'Expansión con virus mutados y cartas de acción para nuevas tácticas.', '2018', 'Tranjis Games', 'Carlos López, Domingo Cabrero, Santi Santisteban', 'David GJ', 2, 6, 20, 8, '8425402271438', 'https://tranjisgames.com/tienda/virus-2-evolution/', '15 x 10,5 x 2,5', 190, NULL, NULL),
(31, 1, 5, 2, 3, NULL, 'assets/images/games/polillatramposa.jpeg', 'Polilla Tramposa', 'Juego de cartas en el que puedes hacer trampas, pero ¡cuidado con el chinche guardián!', '2012', 'Devir', 'Emely Brand, Lukas Brand', 'Rolf Vogt', 2, 5, 20, 7, '8436017221138', 'https://devir.es/polilla-tramposa', '‎11 x 3,5 x 11', 150, '«Deutsche Spiele preis», Mejor Juego para Niños en 2012.', NULL),
(32, 1, 5, 2, 3, NULL, 'assets/images/games/fantasmablitz.jpeg', 'Fantasma Blitz', 'Juego rápido para toda la familia en el que debes reconocer y agarrar el objeto correcto antes que los demás.', '2010', 'Devir', 'Jacques Zeimet', 'Gabriela Silveira', 2, 8, 15, 8, '8436017220681', 'https://devir.es/fantasma-blitz', '13,5 x 13,5 x 4,5', 245, '2012 Vuoden Peli Family Game of the Year', NULL),
(33, 2, 6, 1, 3, NULL, 'assets/images/games/set.jpeg', 'Set', 'Juego de percepción visual en el que debes encontrar tres cartas que cumplan con las mismas o diferentes características en su totalidad.', '1991', 'Devir', 'Marsha J. Falco', 'John Langdon, Franz Vohwinkel', 1, 20, 20, 6, '8437007925234', 'https://devir.es/set', '18 x 13 x 4', 220, 'MENSA Select Award, Dr. Toy’s 10 Best Games Award,\r\nCreative Child’s Preferred Choice Award, Games Magazine “Games 100 Award”', NULL),
(34, 1, 4, 2, 3, NULL, 'assets/images/games/explodingkittens.png', 'Exploding Kittens', 'Juego de cartas en el que debes evitar el gato explosivo usando cartas para sabotear a los demás jugadores.', '2015', 'Asmodee', 'Elan Lee, Matthew Inman', 'Matthew Inman', 2, 5, 20, 7, '3558380050315', 'https://www.asmodee.es/product/exploding-kittens/', '‎13,34 x 0,79 x 4,22', 410, NULL, NULL),
(35, 1, 4, 2, 3, NULL, 'assets/images/games/maltrago.jpg', 'Mal Trago', 'Los jugadores deben sobrevivir a las pociones mortales de la bruja y ser el último goblin con vida.', '2019', 'Rocket Lemon Games', 'José Manuel Fernández', 'Ana Marco', 4, 10, 20, 8, '7427047937367', 'https://rocketlemongames.com/rocket-lemon-games/22-mal-trago.html', '15,3 x 10,8 x 3,5', 300, 'Mejor juego familiar en el Festival BGC 2020', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_complejidad`
--

CREATE TABLE `productos_complejidad` (
  `id_complejidad` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_complejidad`
--

INSERT INTO `productos_complejidad` (`id_complejidad`, `nombre`) VALUES
(1, 'Fácil (Ocasional/Casual)'),
(2, 'Media'),
(3, 'Avanzado'),
(4, 'Experto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_componentes`
--

CREATE TABLE `productos_componentes` (
  `id_juego` int(11) UNSIGNED NOT NULL,
  `id_componente` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_componentes`
--

INSERT INTO `productos_componentes` (`id_juego`, `id_componente`) VALUES
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 4),
(2, 5),
(2, 6),
(22, 1),
(24, 1),
(25, 1),
(25, 2),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(32, 5),
(33, 1),
(34, 1),
(35, 1),
(35, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_contexto`
--

CREATE TABLE `productos_contexto` (
  `id_contexto` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_contexto`
--

INSERT INTO `productos_contexto` (`id_contexto`, `nombre`) VALUES
(1, 'Infantil'),
(2, 'Familiar'),
(3, 'Parejas'),
(4, 'Party'),
(5, 'Filler'),
(6, 'Educativo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_dinamica`
--

CREATE TABLE `productos_dinamica` (
  `id_dinamica` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_dinamica`
--

INSERT INTO `productos_dinamica` (`id_dinamica`, `nombre`) VALUES
(1, 'Acción/Habilidad'),
(2, 'Colaborativos'),
(3, 'Deductivos'),
(4, 'De palabras'),
(5, 'En tiempo real'),
(6, 'Escape en casa'),
(7, 'Memorización'),
(8, 'Puzzles'),
(9, 'Roles ocultos'),
(10, 'Rol (RPG Board Games)');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_partes`
--

CREATE TABLE `productos_partes` (
  `id_parte` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_partes`
--

INSERT INTO `productos_partes` (`id_parte`, `nombre`) VALUES
(1, 'Coleccionables'),
(2, 'Expansiones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_tematizacion`
--

CREATE TABLE `productos_tematizacion` (
  `id_tematizacion` tinyint(3) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_tematizacion`
--

INSERT INTO `productos_tematizacion` (`id_tematizacion`, `nombre`) VALUES
(1, 'Abstractos'),
(2, 'Temáticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) UNSIGNED NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `username`, `email`, `password`, `name`, `surname`, `created_at`, `updated_at`) VALUES
(1, 'Test', 'test@test.com', 'test1234', 'Test', 'Test', '2024-04-21 21:19:50', '2024-04-21 21:19:50'),
(2, 'NuevoUsuario', 'nuevo.usuario@example.com', '$2b$10$RRQNJJKDEWhpGHXgVXQrYOUAhvJaMuRdmic5q33UHnzJifaDn6kHa', 'Nuevo', 'Usuario', '2024-04-22 09:00:02', '2024-04-22 09:00:02'),
(3, 'Admin4', 'admin4@gmail.com', '$2b$10$x2I8hfVXpb.Nw56JzO3dOuGvQVeNBXW4iHQiohzO0rjd0Z5iEDbRK', 'Admin', 'Admin', '2024-05-05 18:01:29', '2024-05-05 18:01:29'),
(4, 'Amdin5', 'admin5@test.com', '$2b$10$9zOMcFQuqjoQBIsgs9ULj.bzvvORH7jRSI4g0eo52W3A725TXwmLC', 'Admin', 'Admin', '2024-05-05 18:10:27', '2024-05-05 18:10:27'),
(5, 'test0', 'test0@test.com', '$2b$10$VwcenGb6e40Q02VZqqYA4.ZyOfcAC3nE0qwhg6yxzHLg.o8eAMnS.', 'test', 'test', '2024-05-05 20:34:43', '2024-05-05 20:34:43'),
(6, 'test3', 'test3@test.com', '$2b$10$F.mr0fXCAx21K3LuPI82mu.gp0MIFdK8HuhcDaFILtaxG5zDBXLZK', 'test', 'test', '2024-05-05 20:43:31', '2024-05-05 20:43:31'),
(7, 'test1', 'test1@test.com', '$2b$10$fKSYVvHYtZuVwJ7FV73ZL.0zKSTaMYYeP312FmjLXY59JinzCFCCu', 'test', 'test', '2024-05-06 20:52:17', '2024-05-06 20:52:17'),
(8, 'Test4', 'test4@test.com', '$2b$10$85gPXtwK1BxID6OdB1gx8O/NvnTVibq5m.6OFMKcqHr6HgLVb0aem', 'Test', 'Test', '2024-05-06 21:04:58', '2024-05-06 21:04:58'),
(9, 'Test8', 'test8@test.com', '$2b$10$2s2w0FaCnQUioF8ERxIofuNvOedmvtRI/pYPyi9yTXk5CRK60lmJi', 'Test', 'Test', '2024-05-09 08:12:00', '2024-05-09 08:12:00'),
(10, 'test7', 'test7@test.com', '$2b$10$XCImSgd7Q2upN1W7fWvL0ugfhaiOPPlsr./j4sGZ5Iius19Dr9L9u', 'Test', 'Test', '2024-05-13 08:57:47', '2024-05-13 08:57:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_juegos`
--

CREATE TABLE `users_juegos` (
  `id_user_juegos` int(11) NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `juego_id` int(11) UNSIGNED NOT NULL,
  `estado` enum('poseido','deseado','jugado') NOT NULL,
  `valoracion_juego` tinyint(3) UNSIGNED DEFAULT NULL,
  `fecha_introduccion` datetime DEFAULT current_timestamp(),
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_juegos`
--

INSERT INTO `users_juegos` (`id_user_juegos`, `user_id`, `juego_id`, `estado`, `valoracion_juego`, `fecha_introduccion`, `comentario`) VALUES
(1, 1, 25, 'poseido', 9, '2024-04-21 23:21:08', 'Mi juego preferido!'),
(2, 1, 24, 'deseado', 10, '2024-04-21 23:22:31', 'Jugué en la Feria TestFeria y me gustó mucho.'),
(3, 2, 1, 'poseido', 7, '2024-04-22 11:08:04', 'Mejor jugar con 3 personas'),
(4, 2, 23, 'deseado', 9, '2024-04-22 11:08:32', 'Me encanta! '),
(5, 7, 34, 'poseido', 5, '2024-05-08 16:05:41', 'Es súper divertido!'),
(6, 7, 25, 'deseado', 4, '2024-05-09 02:50:35', 'Las partidas son largas'),
(8, 7, 23, 'poseido', 5, '2024-05-09 02:52:46', 'Recomendado para jugar en grupo.'),
(10, 7, 28, 'poseido', 4, '2024-05-09 11:07:04', 'El diseño es muy bonito'),
(30, 7, 35, 'deseado', 4, '2024-05-09 11:15:35', 'Jugué en vacaciones y me encantó.'),
(31, 7, 24, 'poseido', 2, '2024-05-09 13:54:30', 'Muy estresante'),
(33, 7, 30, 'deseado', 5, '2024-05-09 14:23:18', 'Otra baraja para añadir a virus'),
(35, 7, 29, 'poseido', 5, '2024-05-09 18:22:45', 'Es para los que saben restar y sumar rápido'),
(37, 7, 27, 'poseido', 4, '2024-05-09 20:34:18', 'Mejor con extensiones'),
(38, 7, 30, 'poseido', 3, '2024-05-09 20:46:35', ''),
(39, 9, 2, 'poseido', 2, '2024-05-10 07:48:52', 'Me parece muy largo'),
(40, 9, 22, 'deseado', 5, '2024-05-10 07:49:24', 'Jugué y me parece muy divertido'),
(41, 7, 32, 'deseado', 4, '2024-05-13 08:33:20', 'Un poco estresante'),
(42, 10, 1, 'deseado', 4, '2024-05-13 09:00:51', 'Un poco lento de dinámica'),
(43, 10, 27, 'poseido', 5, '2024-05-13 09:02:20', 'Muy divertido');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `componentes`
--
ALTER TABLE `componentes`
  ADD PRIMARY KEY (`id_componente`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id_evento`);

--
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`id_lugares`),
  ADD KEY `fk_lugares_lugares_tipo` (`lugares_tipo_id`);

--
-- Indices de la tabla `lugares_tipo`
--
ALTER TABLE `lugares_tipo`
  ADD PRIMARY KEY (`id_lugares_tipo`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `partidas_participantes`
--
ALTER TABLE `partidas_participantes`
  ADD PRIMARY KEY (`id_participacion`),
  ADD KEY `partida_participantes_ibfk_1` (`partidas_realizadas_id`),
  ADD KEY `partida_participantes_ibfk_2` (`user_id`);

--
-- Indices de la tabla `partidas_realizadas`
--
ALTER TABLE `partidas_realizadas`
  ADD PRIMARY KEY (`id_partidas_realizadas`),
  ADD KEY `id_juego` (`juego_id`);

--
-- Indices de la tabla `partidas_user`
--
ALTER TABLE `partidas_user`
  ADD PRIMARY KEY (`id_user`,`id_partidas_realizadas`),
  ADD UNIQUE KEY `partidas_user_juego_id_user_id_unique` (`user_id`,`juego_id`),
  ADD KEY `juego_id` (`juego_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_juego`),
  ADD KEY `fk_productos_complejidad` (`complejidad_id`),
  ADD KEY `fk_productos_contexto` (`contexto_id`),
  ADD KEY `fk_productos_dinamica` (`dinamica_id`),
  ADD KEY `fk_productos_partes` (`parte_id`),
  ADD KEY `fk_productos_tematizacion` (`tematizacion_id`);

--
-- Indices de la tabla `productos_complejidad`
--
ALTER TABLE `productos_complejidad`
  ADD PRIMARY KEY (`id_complejidad`);

--
-- Indices de la tabla `productos_componentes`
--
ALTER TABLE `productos_componentes`
  ADD PRIMARY KEY (`id_juego`,`id_componente`),
  ADD KEY `productos_componentes_ibfk_1` (`id_componente`);

--
-- Indices de la tabla `productos_contexto`
--
ALTER TABLE `productos_contexto`
  ADD PRIMARY KEY (`id_contexto`);

--
-- Indices de la tabla `productos_dinamica`
--
ALTER TABLE `productos_dinamica`
  ADD PRIMARY KEY (`id_dinamica`);

--
-- Indices de la tabla `productos_partes`
--
ALTER TABLE `productos_partes`
  ADD PRIMARY KEY (`id_parte`);

--
-- Indices de la tabla `productos_tematizacion`
--
ALTER TABLE `productos_tematizacion`
  ADD PRIMARY KEY (`id_tematizacion`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email_unique` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `users_email` (`email`);

--
-- Indices de la tabla `users_juegos`
--
ALTER TABLE `users_juegos`
  ADD PRIMARY KEY (`id_user_juegos`),
  ADD KEY `fk_user_juegos_user` (`user_id`),
  ADD KEY `fk_user_juegos_juego` (`juego_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `componentes`
--
ALTER TABLE `componentes`
  MODIFY `id_componente` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id_evento` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `lugares`
--
ALTER TABLE `lugares`
  MODIFY `id_lugares` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `lugares_tipo`
--
ALTER TABLE `lugares_tipo`
  MODIFY `id_lugares_tipo` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `partidas_participantes`
--
ALTER TABLE `partidas_participantes`
  MODIFY `id_participacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `partidas_realizadas`
--
ALTER TABLE `partidas_realizadas`
  MODIFY `id_partidas_realizadas` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_juego` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `productos_complejidad`
--
ALTER TABLE `productos_complejidad`
  MODIFY `id_complejidad` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos_contexto`
--
ALTER TABLE `productos_contexto`
  MODIFY `id_contexto` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos_dinamica`
--
ALTER TABLE `productos_dinamica`
  MODIFY `id_dinamica` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos_partes`
--
ALTER TABLE `productos_partes`
  MODIFY `id_parte` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos_tematizacion`
--
ALTER TABLE `productos_tematizacion`
  MODIFY `id_tematizacion` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users_juegos`
--
ALTER TABLE `users_juegos`
  MODIFY `id_user_juegos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD CONSTRAINT `fk_lugares_lugares_tipo` FOREIGN KEY (`lugares_tipo_id`) REFERENCES `lugares_tipo` (`id_lugares_tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `partidas_participantes`
--
ALTER TABLE `partidas_participantes`
  ADD CONSTRAINT `partidas_participantes_ibfk_1` FOREIGN KEY (`partidas_realizadas_id`) REFERENCES `partidas_realizadas` (`id_partidas_realizadas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `partidas_participantes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `partidas_realizadas`
--
ALTER TABLE `partidas_realizadas`
  ADD CONSTRAINT `partidas_realizadas_ibfk_2` FOREIGN KEY (`juego_id`) REFERENCES `productos` (`id_juego`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `partidas_user`
--
ALTER TABLE `partidas_user`
  ADD CONSTRAINT `partidas_user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `partidas_user_ibfk_2` FOREIGN KEY (`juego_id`) REFERENCES `productos` (`id_juego`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_productos_complejidad` FOREIGN KEY (`complejidad_id`) REFERENCES `productos_complejidad` (`id_complejidad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_productos_contexto` FOREIGN KEY (`contexto_id`) REFERENCES `productos_contexto` (`id_contexto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_productos_dinamica` FOREIGN KEY (`dinamica_id`) REFERENCES `productos_dinamica` (`id_dinamica`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_productos_partes` FOREIGN KEY (`parte_id`) REFERENCES `productos_partes` (`id_parte`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_productos_tematizacion` FOREIGN KEY (`tematizacion_id`) REFERENCES `productos_tematizacion` (`id_tematizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos_componentes`
--
ALTER TABLE `productos_componentes`
  ADD CONSTRAINT `productos_componentes_ibfk_1` FOREIGN KEY (`id_componente`) REFERENCES `componentes` (`id_componente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `productos_componentes_ibfk_2` FOREIGN KEY (`id_juego`) REFERENCES `productos` (`id_juego`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users_juegos`
--
ALTER TABLE `users_juegos`
  ADD CONSTRAINT `fk_user_juegos_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `users_juegos_ibfk_1` FOREIGN KEY (`juego_id`) REFERENCES `productos` (`id_juego`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
