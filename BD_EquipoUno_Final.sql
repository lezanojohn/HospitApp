-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 07-12-2015 a las 22:09:36
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyecto_software`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buses`
--

CREATE TABLE IF NOT EXISTS `buses` (
  `id_bus` int(3) NOT NULL,
  `nombre_bus` varchar(30) NOT NULL,
  PRIMARY KEY (`id_bus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `buses`
--

INSERT INTO `buses` (`id_bus`, `nombre_bus`) VALUES
(10, 'Vía Láctea'),
(11, 'Vía Futuro'),
(12, 'Nueva Sotrapel'),
(13, 'Vía Siglo XXI'),
(14, 'Chiguayante Sur'),
(16, 'Vía Universo'),
(17, 'Expresos Chiguayante'),
(18, 'Buses Palomares'),
(20, 'Nueva Llacolén'),
(21, 'Riviera Bio Bio'),
(22, 'San Pedro'),
(23, 'Buses Michaihue'),
(24, 'San Remo'),
(30, 'Ruta Las Playas'),
(31, 'Ruta del Mar'),
(32, 'Transportes del Mar'),
(40, 'Las Golondrinas'),
(41, 'Buses Mini Verde'),
(42, 'Minibuses Hualpencillo'),
(43, 'Flota Las Lilas'),
(44, 'Flota Centauro'),
(50, 'Buses Campanil'),
(52, 'Geminis Sur'),
(56, 'Base Naval'),
(57, 'Transportes Colón'),
(60, 'Buses Tucapel'),
(62, 'Mi Expreso'),
(63, 'Rengo Lientur'),
(65, 'Buses Chillancito'),
(70, 'Las Bahías'),
(71, 'Buses Puchacay'),
(72, 'Pedro de Valdivia'),
(80, 'Las Galaxias'),
(81, 'Vía del Sol'),
(82, 'Nueva Ruta del Sol'),
(90, 'Nueva Sol Yet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospitales`
--

CREATE TABLE IF NOT EXISTS `hospitales` (
  `nombre_recinto` varchar(50) NOT NULL,
  `direccion` varchar(70) NOT NULL,
  `complejidad` varchar(25) NOT NULL,
  `telefono` int(15) NOT NULL,
  `tipo_recinto` varchar(25) NOT NULL,
  PRIMARY KEY (`nombre_recinto`),
  UNIQUE KEY `nombre_recinto` (`nombre_recinto`),
  KEY `nombre_recinto_2` (`nombre_recinto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hospitales`
--

INSERT INTO `hospitales` (`nombre_recinto`, `direccion`, `complejidad`, `telefono`, `tipo_recinto`) VALUES
('Clínica Bio Bio', 'Av. Jorge Alessandri 3515, Talcahuano VIII Región, Chile', 'Alta Complejidad', 2734200, 'Clínica Particular'),
('Consultorio Integral CESFAM Tucapel', 'Juan de Dios Rivera 1060, Concepción VIII Región, Chile', 'Baja Complejidad', 800500813, 'CESFAM'),
('Hospital Las Higueras', 'Alto Horno 777, Talcahuano VIII Región, Chile', 'Alta Complejidad', 2687000, 'Hospital Público');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospital_profesional`
--

CREATE TABLE IF NOT EXISTS `hospital_profesional` (
  `nombre_recinto` varchar(50) NOT NULL,
  `id_prof` int(5) NOT NULL,
  PRIMARY KEY (`nombre_recinto`,`id_prof`),
  KEY `id_prof` (`id_prof`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `hospital_profesional`
--

INSERT INTO `hospital_profesional` (`nombre_recinto`, `id_prof`) VALUES
('Consultorio Integral CESFAM Tucapel', 101),
('Clínica Bio Bio', 102),
('Hospital Las Higueras', 103),
('Clínica Bio Bio', 104),
('Hospital Las Higueras', 105),
('Clínica Bio Bio', 106),
('Hospital Las Higueras', 107),
('Clínica Bio Bio', 201),
('Hospital Las Higueras', 202),
('Clínica Bio Bio', 203),
('Hospital Las Higueras', 204),
('Consultorio Integral CESFAM Tucapel', 205),
('Clínica Bio Bio', 206),
('Hospital Las Higueras', 207),
('Clínica Bio Bio', 208),
('Consultorio Integral CESFAM Tucapel', 301),
('Consultorio Integral CESFAM Tucapel', 302),
('Clínica Bio Bio', 303),
('Hospital Las Higueras', 304),
('Clínica Bio Bio', 305),
('Hospital Las Higueras', 306),
('Clínica Bio Bio', 307),
('Consultorio Integral CESFAM Tucapel', 401),
('Hospital Las Higueras', 402),
('Clínica Bio Bio', 403),
('Hospital Las Higueras', 404),
('Clínica Bio Bio', 405),
('Hospital Las Higueras', 406),
('Clínica Bio Bio', 407),
('Hospital Las Higueras', 408),
('Consultorio Integral CESFAM Tucapel', 501),
('Clínica Bio Bio', 502),
('Hospital Las Higueras', 503),
('Clínica Bio Bio', 504),
('Hospital Las Higueras', 505),
('Clínica Bio Bio', 506),
('Hospital Las Higueras', 507),
('Clínica Bio Bio', 508),
('Hospital Las Higueras', 509),
('Clínica Bio Bio', 510),
('Hospital Las Higueras', 511),
('Clínica Bio Bio', 512),
('Hospital Las Higueras', 513);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

CREATE TABLE IF NOT EXISTS `profesionales` (
  `id_prof` int(5) NOT NULL,
  `nombre_prof` varchar(50) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `prevision` varchar(40) NOT NULL,
  `especialidad` varchar(40) NOT NULL,
  PRIMARY KEY (`id_prof`),
  KEY `id_prof` (`id_prof`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesionales`
--

INSERT INTO `profesionales` (`id_prof`, `nombre_prof`, `descripcion`, `prevision`, `especialidad`) VALUES
(101, 'Alarico Jorge Escauriaza Gebauer', 'Cirugia Adulto.Médico Cirujano, Universidad de Chile, año 1960. Especialización en Cirugía General en la misma Universidad, año 1971.', 'Fonasa', 'Cirugía Adulto'),
(102, 'Carolina Andrea Baeza Ross', 'Cirugía General Adulto. Cirujano Adulto Médico Cirujano, Universidad de Valparaíso, 2008.', 'Fonasa', 'Cirugía Adulto'),
(103, 'Eduardo Previstero Gallegos Medina', 'Cirugia Adulto. Médico Cirujano, Universidad de Chile. ', 'Fonasa', 'Cirugía Adulto'),
(104, 'Ivan Antonio Silva Dujisin', 'Cirugia Adulta. Médico Cirujano, Universidad de Concepción, 1985. Especialista en Cirugía General, Corporación Nacional Autónoma de Certificación de Especialidades Médicas, 1998.', 'Consalud', 'Cirugía Adulto'),
(105, 'Juan Carlos Acuña Cisternas', 'Cirugía Adulto. Médico Cirujano, Universidad de Chile, año 1979.', 'Masvida', 'Cirugía Adulto'),
(106, 'Oscar Cesar Gamarra Chamorro', 'Cirugía Adulto. Médico Cirujano, Universidad de Chile, año 1986. Especialista en Cirugía General, Universidad de Concepción, año 2001.', 'Cruz Blanca', 'Cirugía Adulto'),
(107, 'Osvaldo Arsenio Torres Rodriguez', 'Cirugia Adulto. Médico Cirujano, Universidad de Concepción, 1989. Especialista en Cirugía General y Digestiva.', 'Banmédica', 'Cirugía Adulto'),
(201, 'Gabriel Alejandro Cerda Álvarez', 'Kinesiólogo, Universidad Santo Tomás, 2010.', 'Fonasa', 'Kinesiólogo'),
(202, 'Jorge Luis Ramos Valdes', 'Kinesiólogo de la Universidad Santo Tomás, año 2010', 'Fonasa', 'Kinesiólogo'),
(203, 'Lorena Pilar Saldivia Chavarría', 'Kinesióloga de la Universidad de Chile, año 1992.', 'Consalud', 'Kinesiólogo'),
(204, 'Vannia Isabel Martinez Seguel', 'Kinesióloga de la Universidad de Las Américas, año 2010. Especialista en kinesiología del embarazo y piso pélvico.', 'Masvida', 'Kinesiólogo'),
(205, 'Pablo Rodrigo Contreras Escobar', 'Kinesiologo, Universidad San Sebastian, 2009', 'Fonasa', 'Kinesiólogo'),
(206, 'Cynthia Rivera Barrenechea', 'Kinesiologa, Universidad Pedro de Valdivia. Licenciada en Kinesiologia, Universidad Pedro de Valdivia, 2015', 'Cruz Blanca', 'Kinesiólogo'),
(207, 'Miguel Andres Pino Garcia', 'Kinesiólogo, Universidad de Concepción, 2011. Certificación Infecciones Respiratorias Agudas (IRA)RespIRA Chile, 2013', 'Banmédica', 'Kinesiólogo'),
(208, 'Patricia Nova Baza', 'Licenciada en Kinesiología Universidad del Desarrollo, 2011. Kinesiólogo Universidad del Desarrollo, 2012. Diplomado en Kinesiología Respiratoria en Cuidados Intensivos Universidad de Concepcion, 2013', 'Fonasa', 'Kinesiólogo'),
(301, 'Eldy Alexandra Tarazona Triana', 'Médico y Cirujano General, Escuela Juan N. Corpas (Bogotá, Colombia), 1993.', 'Fonasa', 'Médico General'),
(302, 'María Valentina Wilckens Nogueira', 'Médico Cirujano, Universidad de Concepción, 1985. Especialista en Geriatría y Geriontología, Universidad de Concepción, 1998.', 'Fonasa', 'Médico General'),
(303, 'Patricia Isolde Avello Avila', 'Médico Cirujano, Universidad de Concepción, 1982.', 'Cruz Blanca', 'Médico General'),
(304, 'Rodrigo Alejandro Sagardía Rojas', 'Medicina General Médico Cirujano, Universidad de Concepción, 1999. Especialización en Otorrinolaringología, Universidad de Concepción, 2015.', 'Banmédica', 'Médico General'),
(305, 'Pablo Echeverría Parra', 'Médico Cirujano Universidad Católica de la Santísima Concepción, 2012. Proveedor de Reanimación Cardiovascular Avanzada CERP Clínica Dávila, 2015', 'Fonasa', 'Médico General'),
(306, 'Luz Maria Sepulveda Orostica', 'Curso de Obesidad Y Displidemia Universidad de Concepción, 1977. Médico Cirujano Universidad de Concepción, 1986.', 'Masvida', 'Médico General'),
(307, 'Paula Rozas Schuffeneger', 'Médico Cirujano Universidad Católica de la Santísima Concepción, 2012', 'Consalud', 'Médico General'),
(401, 'Claudia Angélica Zemelman Merino', 'Pediatra General. Médico Cirujano, Universidad de Chile, 1981. Especialidad en Pediatría, Universidad de Concepción, 1991.', 'Fonasa', 'Pediatra'),
(402, 'Estrella Noémi Vallejos Olivares', 'Pediatra General. Médico Cirujano, Universidad de Chile, 1983. Especialidad en Pediatría, Universidad de Concepción, 1993.', 'Fonasa', 'Pediatra'),
(403, 'Flor María Araya Álvarez', 'Pediatria General. Médico Cirujano, Universidad de Concepción, 1987. Especialidad en Pediatría, Universidad de Concepción, 2001. ', 'Fonasa', 'Pediatra'),
(404, 'Hector Rodrigo Escobar Silva', 'Pediatria General.Médico Cirujano, Universidad de Concepción, 1986. Especialidad en Pediatría, Universidad de Chile, 1995. Subespecialidad en Cardiología Infantil, 1997.', 'Fonasa', 'Pediatra'),
(405, 'Ismenia del Carmen Lema Cofré', 'Pediatra General. Médico Cirujano, Universidad de Chile, 1973. Especialista en Pediatría, Corporación Nacional Autónoma de Certificación de Especialidades Médicas.', 'Consalud', 'Pediatra'),
(406, 'Lilian del Carmen Malig Sanhueza', 'Pediatría General. Médico Cirujano, Universidad de Concepción, 1982. Especialidad en Pediatría, Universidad de Concepción, 2002.', 'Masvida', 'Pediatra'),
(407, 'María Cristina Leonor Stuardo Luengo', 'Pediatra General. Médico Cirujano, Universidad de Chile, 1960. Especialidad en Pediatría, Universidad de Chile, 1968.', 'Cruz Blanca', 'Pediatra'),
(408, 'Waleska Leticia Fierro Sura', 'Pediatria General. Médico Cirujano, Universidad de Concepción, 1993. Especialidad en Pediatría, Universidad de Concepción, 2002.', 'Banmédica', 'Pediatra'),
(501, 'Alejandro Manuel Espinoza Bieschke', 'Médico Cirujano, Universidad de Valparaíso, 1995. Especialidad en Traumatología y Ortopedia, Universidad de Concepción, 2002.', 'Fonasa', 'Traumatólogo'),
(502, 'Carlos Enrique Chandía Aguilera', 'Traumatología Adulto. General, Cadera y Pelvis. Médico Cirujano, Universidad de Concepción, 1990. Especialidad en Traumatología y Ortopedia, Universidad de Concepción, 2000.', 'Fonasa', 'Traumatólogo'),
(503, 'Carlos Jorge Vandeputte Desrumaux', 'Médico Cirujano, Universidad de Concepción, 1983. Especialista en Ortopedia y Traumatología de la Universidad de Chile, Corporación Nacional Autónoma de Certificación de Especialidades Médicas, 1990.', 'Fonasa', 'Traumatólogo'),
(504, 'Carlos Nelson Martinez Henriquez', 'Médico Cirujano, Universidad de Chile, 1970. Especialidad en Traumatología y Ortopedia, Corporación Nacional Autónoma de Certificación de Especialidades Médicas, 1994.', 'Fonasa', 'Traumatólogo'),
(505, 'Carlos Roberto Clares Ojeda', 'Médico Cirujano, Universidad de Chile, 1992. Especialidad en Traumatología y Ortopedia, Universidad de Concepción, 2000.', 'Fonasa', 'Traumatólogo'),
(506, 'Esteban Andres Díaz Ortiz', 'Médico Cirujano. Especialidad en Traumatología y Ortopedia, Universidad de Concepción, 2001.', 'Fonasa', 'Traumatólogo'),
(507, 'Hugo Gonzalo Arévalo Ferrada', 'Traumatología y Ortopedia General, Médico Cirujano, Universidad de Concepción, 1994. Especialidad en Ortopedia y Traumatología, Universidad de Santiago de Chile, 1998.', 'Fonasa', 'Traumatólogo'),
(508, 'Juan José Contreras Quintana', 'Traumatología Adulto. Médico Cirujano, Universidad de la Santísima Concepción, 2006. Especialidad en Traumatología y Ortopedia Adulto, Universidad de Concepción, 2015.', 'Consalud', 'Traumatólogo'),
(509, 'Julio Enrique Silva Díaz', 'Médico Cirujano. Especialista en Traumatología y Ortopedia, Universidad de Concepción, 2014.', 'Masvida', 'Traumatólogo'),
(510, 'Luis Octavio Rodriguez Cortés', 'Médico Cirujano, Universidad de Chile, 1976. Especialista en Ortopedia y Traumatología, Corporación Nacional Autónoma de Certificación de Especialidades, 1990.', 'Cruz Blanca', 'Traumatólogo'),
(511, 'Miguel Angel Acuña Muñoz', 'Médico Cirujano, Especialista en traumatología y ortopedia, Universidad de Concepción, 2000.', 'Banmédica', 'Traumatólogo'),
(512, 'Ruben Ricardo Barrera Aguilera', 'Traumatología Adulto General. Médico Cirujano, Universidad de Chile,1978. Especialidad en Traumatología y Ortopedia, Asociación Chilena de Seguridad, 1980.', 'Consalud', 'Traumatólogo'),
(513, 'Samuel Antonio Parra Aguilera', 'Médico Cirujano, Universidad de la Frontera, 1991. Especialidad en Traumatología y Ortopedia, Universidad de Concepción, 2001.', 'Masvida', 'Traumatólogo');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hospital_profesional`
--
ALTER TABLE `hospital_profesional`
  ADD CONSTRAINT `hospital_profesional_ibfk_1` FOREIGN KEY (`nombre_recinto`) REFERENCES `hospitales` (`nombre_recinto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `hospital_profesional_ibfk_2` FOREIGN KEY (`id_prof`) REFERENCES `profesionales` (`id_prof`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
