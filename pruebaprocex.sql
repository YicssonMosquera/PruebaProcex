-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2021 a las 19:20:40
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebaprocex`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `res4505`
--

CREATE TABLE `res4505` (
  `Tipo_Registro` varchar(4) DEFAULT NULL,
  `Consecutivo_registro` varchar(2) DEFAULT NULL,
  `Coidigohabilitacionips_primaria` varchar(12) DEFAULT NULL,
  `Tipoid_usuario` varchar(2) DEFAULT NULL,
  `Numero_Identificacion` varchar(15) DEFAULT NULL,
  `PrimerApellido_usuario` varchar(50) DEFAULT NULL,
  `SegundoApellido_usuario` varchar(50) DEFAULT NULL,
  `PrimerNombre_usuario` varchar(50) DEFAULT NULL,
  `SegundoNombre_usuario` varchar(50) DEFAULT NULL,
  `Fecha_nacimiento` varchar(50) DEFAULT NULL,
  `Sexo` varchar(50) DEFAULT NULL,
  `Codigo_pertenenciaetnica` int(11) DEFAULT NULL,
  `Codigo_ocupacion` int(11) DEFAULT NULL,
  `Codigo_niveleducativo` int(11) DEFAULT NULL,
  `Gestacion` int(11) DEFAULT NULL,
  `Sifilisgestacional_congenita` int(11) DEFAULT NULL,
  `Hipertension_Inducida_por_la_Gestacion` int(11) DEFAULT NULL,
  `Hipotiroidismo_Congenito` int(11) DEFAULT NULL,
  `Sintomatico_Respiratorio` int(11) DEFAULT NULL,
  `Tuberculosis_Multidrogoresistente` int(11) DEFAULT NULL,
  `Lepra` int(11) DEFAULT NULL,
  `Obesidad_Desnutricion_Proteico_Calorica` int(11) DEFAULT NULL,
  `Victima_Maltrato` int(11) DEFAULT NULL,
  `Victima_Violencia_Sexual` int(11) DEFAULT NULL,
  `Infecciones_TrasmisionSexual` int(11) DEFAULT NULL,
  `Enfermedad_Mental` int(11) DEFAULT NULL,
  `Cancer_Cervix` int(11) DEFAULT NULL,
  `Cancer_Seno` int(11) DEFAULT NULL,
  `Fluorosis_Dental` int(11) DEFAULT NULL,
  `Fecha_Peso` varchar(10) DEFAULT NULL,
  `Peso_Kilogramos` int(11) DEFAULT NULL,
  `Fecha_Talla` varchar(10) DEFAULT NULL,
  `Talla_Centimetros` int(11) DEFAULT NULL,
  `Fecha_ProbableParto` varchar(10) DEFAULT NULL,
  `Edad_GestacionalNacer` int(11) DEFAULT NULL,
  `BCG` int(11) DEFAULT NULL,
  `Hepatitis_B_menores1ano` int(11) DEFAULT NULL,
  `Pentavalente` int(11) DEFAULT NULL,
  `Polio` int(11) DEFAULT NULL,
  `DPT_menores5anos` int(11) DEFAULT NULL,
  `Rotavirus` int(11) DEFAULT NULL,
  `Neumococo` int(11) DEFAULT NULL,
  `Influenza_Ninos` int(11) DEFAULT NULL,
  `Fiebre_Amarillaninosde1ano` int(11) DEFAULT NULL,
  `HepatitisA` int(11) DEFAULT NULL,
  `Triple_ViralNinos` int(11) DEFAULT NULL,
  `Virus_Papiloma_Humano` int(11) DEFAULT NULL,
  `TDTTMujeresEdad_Fertil_15_49_anos` int(11) DEFAULT NULL,
  `ControlPlaca_Bacteriana` int(11) DEFAULT NULL,
  `Fecha_atencion_parto_o_cesarea` varchar(10) DEFAULT NULL,
  `Fecha_salida_atencion_parto_cesarea` varchar(10) DEFAULT NULL,
  `Fecha_consejeria_Lactancia_Materna` varchar(10) DEFAULT NULL,
  `Control_Recien_Nacido` varchar(10) DEFAULT NULL,
  `Planificacion_Familiar_Primeravez` varchar(10) DEFAULT NULL,
  `Suministro_Metodo_Anticonceptivo` int(11) DEFAULT NULL,
  `Fecha_Suministro_Metodo_Anticonceptivo` varchar(10) DEFAULT NULL,
  `ControlPrenatal_Primeravez` varchar(10) DEFAULT NULL,
  `Control_Prenatal` int(11) DEFAULT NULL,
  `ultimo_Control_Prenatal` varchar(10) DEFAULT NULL,
  `Suministroacido_Folico_ultimo_Control_Prenatal` int(11) DEFAULT NULL,
  `SuministroSulfato_Ferroso_ultimoControlPrenatal` int(11) DEFAULT NULL,
  `Suministro_CarbonatoCalcio_ltimoControlPrenatal` int(11) DEFAULT NULL,
  `Valoracion_Agudeza_Visual` varchar(10) DEFAULT NULL,
  `Consulta_por_Oftalmologia` varchar(10) DEFAULT NULL,
  `Fecha_Diagnostico_Desnutricion_Proteico_Calorica` varchar(10) DEFAULT NULL,
  `Consulta_Mujer_o_Menor_Victima_Maltrato` varchar(10) DEFAULT NULL,
  `Consulta_Victimas_Violencia_Sexual` varchar(10) DEFAULT NULL,
  `Consulta_Nutricion` varchar(10) DEFAULT NULL,
  `Consulta_de_Psicologia` varchar(10) DEFAULT NULL,
  `Consulta_Crecimiento_y_DesarrolloPrimeravez` varchar(10) DEFAULT NULL,
  `Suministro_Sulfato_Ferroso_ultima_Consulta_del_Menor_10_anos` int(11) DEFAULT NULL,
  `Suministro_Vitamina_A_ultima_Consulta_Menor_10_anos` int(11) DEFAULT NULL,
  `Consulta_JovenPrimeravez` varchar(10) DEFAULT NULL,
  `Consulta_AdultoPrimeravez` varchar(10) DEFAULT NULL,
  `Preservativos_entregados_a_pacientes_con_ITS` int(11) DEFAULT NULL,
  `Asesoria_Pre_test_Elisa_para_VIH` varchar(10) DEFAULT NULL,
  `Asesoria_Pos_test_Elisa_para_VIH` varchar(10) DEFAULT NULL,
  `PCAEDCBAIC` int(11) DEFAULT NULL,
  `Fecha_Antigeno_Superficie_Hepatitis_B_en_Gestantes` varchar(10) DEFAULT NULL,
  `Resultado_Antigeno_Superficie_Hepatitis_B_en_Gestantes` int(11) DEFAULT NULL,
  `Fecha_Serologia_para_Sifilis` varchar(10) DEFAULT NULL,
  `Resultado_Serologia_para_Sifilis` int(11) DEFAULT NULL,
  `Fecha_Toma_Elisa_para_VIH` varchar(10) DEFAULT NULL,
  `Resultado_Elisa_para_VIH` int(11) DEFAULT NULL,
  `Fecha_TSH_Neonatal` varchar(10) DEFAULT NULL,
  `Resultado_TSH_Neonatal` int(11) DEFAULT NULL,
  `Tamizaje_Cancer_Cuello_Uterino` int(11) DEFAULT NULL,
  `Citologia_Cervico_uterina` varchar(10) DEFAULT NULL,
  `Citologia_Cervico_uterina_Resultados_segun_Bethesda` int(11) DEFAULT NULL,
  `Calidad_Muestra_Citologia_Cervicouterina` int(11) DEFAULT NULL,
  `Codigo_habilitacion_IPS_donde_se_toma_Citologia_Cervicouterina` varchar(15) DEFAULT NULL,
  `Fecha_Colposcopia` varchar(10) DEFAULT NULL,
  `Codigo_habilitacion_IPS_donde_se_toma_Colposcopia` varchar(15) DEFAULT NULL,
  `Fecha_biopsia_cervical` varchar(10) DEFAULT NULL,
  `Resultado_Biopsia_Cervical` int(11) DEFAULT NULL,
  `Codigo_habilitacion_IPS_donde_se_toma_biopsia` varchar(15) DEFAULT NULL,
  `Fecha_Mamografia` varchar(15) DEFAULT NULL,
  `Resultado_Mamografia` int(11) DEFAULT NULL,
  `Codigo_habilitacion_IPS_donde_se_toma_Mamografia` varchar(15) DEFAULT NULL,
  `Fecha_Toma_Biopsia_Seno_por_BACAF` varchar(10) DEFAULT NULL,
  `Fecha_Resultado_Biopsia_Seno_por_BACAF` varchar(10) DEFAULT NULL,
  `Biopsia_Seno_por_BACAF` varchar(10) DEFAULT NULL,
  `Codigo_habilitacion_IPS_donde_se_toma_Biopsia_Seno_por_BACAF` varchar(15) DEFAULT NULL,
  `Fecha_Toma_Hemoglobina` varchar(10) DEFAULT NULL,
  `Hemoglobina` varchar(15) DEFAULT NULL,
  `Fecha_Toma_Glicemia_Basal` varchar(10) DEFAULT NULL,
  `Fecha_Creatinina` varchar(10) DEFAULT NULL,
  `Creatinina` int(11) DEFAULT NULL,
  `Fecha_Hemoglobina_Glicosilada` varchar(10) DEFAULT NULL,
  `Hemoglobina_Glicosilada` int(11) DEFAULT NULL,
  `Fecha_Toma_Microalbuminuria` varchar(10) DEFAULT NULL,
  `Fecha_Toma_HDL` varchar(10) DEFAULT NULL,
  `Fecha_Toma_Baciloscopia_Diagnostico` varchar(10) DEFAULT NULL,
  `Baciloscopia_Diagnostico` int(11) DEFAULT NULL,
  `Tratamiento_Hipotiroidismo_Congenito` int(11) DEFAULT NULL,
  `Tratamiento_Sifilis_gestacional` int(11) DEFAULT NULL,
  `Tratamiento_Sifilis_Congenita` int(11) DEFAULT NULL,
  `Tratamiento_Lepra` int(11) DEFAULT NULL,
  `Fecha_Terminacion_Tratamiento_para_Leishmaniasis` varchar(11) DEFAULT NULL,
  `PKId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `res4505`
--

INSERT INTO `res4505` (`Tipo_Registro`, `Consecutivo_registro`, `Coidigohabilitacionips_primaria`, `Tipoid_usuario`, `Numero_Identificacion`, `PrimerApellido_usuario`, `SegundoApellido_usuario`, `PrimerNombre_usuario`, `SegundoNombre_usuario`, `Fecha_nacimiento`, `Sexo`, `Codigo_pertenenciaetnica`, `Codigo_ocupacion`, `Codigo_niveleducativo`, `Gestacion`, `Sifilisgestacional_congenita`, `Hipertension_Inducida_por_la_Gestacion`, `Hipotiroidismo_Congenito`, `Sintomatico_Respiratorio`, `Tuberculosis_Multidrogoresistente`, `Lepra`, `Obesidad_Desnutricion_Proteico_Calorica`, `Victima_Maltrato`, `Victima_Violencia_Sexual`, `Infecciones_TrasmisionSexual`, `Enfermedad_Mental`, `Cancer_Cervix`, `Cancer_Seno`, `Fluorosis_Dental`, `Fecha_Peso`, `Peso_Kilogramos`, `Fecha_Talla`, `Talla_Centimetros`, `Fecha_ProbableParto`, `Edad_GestacionalNacer`, `BCG`, `Hepatitis_B_menores1ano`, `Pentavalente`, `Polio`, `DPT_menores5anos`, `Rotavirus`, `Neumococo`, `Influenza_Ninos`, `Fiebre_Amarillaninosde1ano`, `HepatitisA`, `Triple_ViralNinos`, `Virus_Papiloma_Humano`, `TDTTMujeresEdad_Fertil_15_49_anos`, `ControlPlaca_Bacteriana`, `Fecha_atencion_parto_o_cesarea`, `Fecha_salida_atencion_parto_cesarea`, `Fecha_consejeria_Lactancia_Materna`, `Control_Recien_Nacido`, `Planificacion_Familiar_Primeravez`, `Suministro_Metodo_Anticonceptivo`, `Fecha_Suministro_Metodo_Anticonceptivo`, `ControlPrenatal_Primeravez`, `Control_Prenatal`, `ultimo_Control_Prenatal`, `Suministroacido_Folico_ultimo_Control_Prenatal`, `SuministroSulfato_Ferroso_ultimoControlPrenatal`, `Suministro_CarbonatoCalcio_ltimoControlPrenatal`, `Valoracion_Agudeza_Visual`, `Consulta_por_Oftalmologia`, `Fecha_Diagnostico_Desnutricion_Proteico_Calorica`, `Consulta_Mujer_o_Menor_Victima_Maltrato`, `Consulta_Victimas_Violencia_Sexual`, `Consulta_Nutricion`, `Consulta_de_Psicologia`, `Consulta_Crecimiento_y_DesarrolloPrimeravez`, `Suministro_Sulfato_Ferroso_ultima_Consulta_del_Menor_10_anos`, `Suministro_Vitamina_A_ultima_Consulta_Menor_10_anos`, `Consulta_JovenPrimeravez`, `Consulta_AdultoPrimeravez`, `Preservativos_entregados_a_pacientes_con_ITS`, `Asesoria_Pre_test_Elisa_para_VIH`, `Asesoria_Pos_test_Elisa_para_VIH`, `PCAEDCBAIC`, `Fecha_Antigeno_Superficie_Hepatitis_B_en_Gestantes`, `Resultado_Antigeno_Superficie_Hepatitis_B_en_Gestantes`, `Fecha_Serologia_para_Sifilis`, `Resultado_Serologia_para_Sifilis`, `Fecha_Toma_Elisa_para_VIH`, `Resultado_Elisa_para_VIH`, `Fecha_TSH_Neonatal`, `Resultado_TSH_Neonatal`, `Tamizaje_Cancer_Cuello_Uterino`, `Citologia_Cervico_uterina`, `Citologia_Cervico_uterina_Resultados_segun_Bethesda`, `Calidad_Muestra_Citologia_Cervicouterina`, `Codigo_habilitacion_IPS_donde_se_toma_Citologia_Cervicouterina`, `Fecha_Colposcopia`, `Codigo_habilitacion_IPS_donde_se_toma_Colposcopia`, `Fecha_biopsia_cervical`, `Resultado_Biopsia_Cervical`, `Codigo_habilitacion_IPS_donde_se_toma_biopsia`, `Fecha_Mamografia`, `Resultado_Mamografia`, `Codigo_habilitacion_IPS_donde_se_toma_Mamografia`, `Fecha_Toma_Biopsia_Seno_por_BACAF`, `Fecha_Resultado_Biopsia_Seno_por_BACAF`, `Biopsia_Seno_por_BACAF`, `Codigo_habilitacion_IPS_donde_se_toma_Biopsia_Seno_por_BACAF`, `Fecha_Toma_Hemoglobina`, `Hemoglobina`, `Fecha_Toma_Glicemia_Basal`, `Fecha_Creatinina`, `Creatinina`, `Fecha_Hemoglobina_Glicosilada`, `Hemoglobina_Glicosilada`, `Fecha_Toma_Microalbuminuria`, `Fecha_Toma_HDL`, `Fecha_Toma_Baciloscopia_Diagnostico`, `Baciloscopia_Diagnostico`, `Tratamiento_Hipotiroidismo_Congenito`, `Tratamiento_Sifilis_gestacional`, `Tratamiento_Sifilis_Congenita`, `Tratamiento_Lepra`, `Fecha_Terminacion_Tratamiento_para_Leishmaniasis`, `PKId`) VALUES
('2', '3', '3', '1', '234', '32', '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbldatosexcel`
--

CREATE TABLE `tbldatosexcel` (
  `PKId` int(11) NOT NULL,
  `Dato1` varchar(200) DEFAULT NULL,
  `Dato2` varchar(200) DEFAULT NULL,
  `Dato3` varchar(200) DEFAULT NULL,
  `Dato4` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbldatosexcel`
--

INSERT INTO `tbldatosexcel` (`PKId`, `Dato1`, `Dato2`, `Dato3`, `Dato4`) VALUES
(1, '4', '5', 'DAVID', '44318'),
(2, '4', '5', 'DAVID', '44318'),
(3, '1', '3', 'PEREA', '44229'),
(4, '2', '4', 'SANCHEZ', '44257'),
(5, '4', '5', 'DAVID', '44318'),
(6, '3', '5', 'DAVID', '44318'),
(7, '1', '3', 'PEREA', '44229'),
(8, '2', '4', 'SANCHEZ', '44257'),
(9, '4', '5', 'DAVID', '44318'),
(10, '3', '5', 'DAVID', '44318'),
(11, '1', '3', 'PEREA', '44229'),
(12, '2', '4', 'SANCHEZ', '44257'),
(13, '3', '5', 'DAVID', '44318'),
(14, '4', '5', 'DAVID', '44318'),
(15, '2', '4', 'SANCHEZ', '44257'),
(16, '1', '3', 'PEREA', '44229'),
(17, '3', '5', 'DAVID', '44318'),
(18, '4', '5', 'DAVID', '44318');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblindicadores`
--

CREATE TABLE `tblindicadores` (
  `Cantidad_de_llamadas_realizadas` varchar(50) DEFAULT NULL,
  `Cantidad_de_llamadas_efectivas` varchar(50) DEFAULT NULL,
  `Cantidad_de_llamadas_no_efectivas` varchar(50) DEFAULT NULL,
  `Necesidades_generadas_en_la_llamada` varchar(50) DEFAULT NULL,
  `Tipo_de_lllamada` varchar(50) DEFAULT NULL,
  `Gestión_final_de_la_operación` varchar(50) DEFAULT NULL,
  `Impacto` varchar(50) DEFAULT NULL,
  `PKId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblregistro`
--

CREATE TABLE `tblregistro` (
  `PKId` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Apellido` varchar(50) DEFAULT NULL,
  `Telefono` varchar(11) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `Correo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblregistro`
--

INSERT INTO `tblregistro` (`PKId`, `Nombre`, `Apellido`, `Telefono`, `Direccion`, `Correo`) VALUES
(1, 'Hector', 'Hurtado', '3136080028', 'Boston', NULL),
(2, 'david', 'mosquera', '1038822171', 'caldas', '12345'),
(3, 'dario', 'mosquera', '1038822171', 'caldas', '12345'),
(4, 'dario', 'mosquera', '1038822171', 'caldas', '12345'),
(5, 'dario', 'mosquera', '1015234223', 'caldas', '12345'),
(6, 'dario', 'mosquera', '1015234223', 'caldas', '12345'),
(7, 'dario', 'mosquera', '1015234223', 'caldas', '12345'),
(8, 'dario', 'HURTADO', '1015234223', 'caldas', '12345'),
(9, 'dario', 'HURTADO', '1015234223', 'caldas', '12345'),
(10, 'dario', 'HURTADO', '1015234223', 'caldas', '12345'),
(11, 'dario', 'Perea', '1015234223', 'caldas', '12345'),
(12, 'dario', 'Perea', '1015234223', 'caldas', '12345'),
(13, 'dario', 'Roa', '1015234223', 'caldas', '12345'),
(14, 'dario', 'Roa', '1015234223', 'caldas', '12345'),
(15, 'hector', 'Hurtado', '3136080028', 'medellin', NULL),
(16, 'hector', 'Hurtado', '3136080028', 'caldas', NULL),
(17, 'david', 'mosquera', '1038822171', 'medellin', NULL),
(18, 'andres', 'hurtado', '3136080028', '123', NULL),
(19, 'w', 'd', 'ds', 's', NULL),
(20, 's', 's', 's', 's', NULL),
(21, 'sas', 'sas', 'ass', 'aaaaaaas', NULL),
(22, 'da', 'as', 'Aa', 'asas', NULL),
(23, 'SD', 'SD', 'SD', 'SD', NULL),
(24, 'sasas', 'asas', 'asas', 'assa', NULL),
(25, 'sds', 'sdsd', 'asds', 'sds', NULL),
(26, 'sds', 'sdsd', 'sdd', 'dsd', NULL),
(27, 'DWD', 'SD', 'SDS', 'ASA', NULL),
(28, 's', 'd', 'dd', 'd', NULL),
(29, 'ssd', 'sdsd', 'sds', 'sd', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblusuario`
--

CREATE TABLE `tblusuario` (
  `PKUsuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `Perfil` varchar(50) DEFAULT NULL,
  `Nombre_completo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblusuario`
--

INSERT INTO `tblusuario` (`PKUsuario`, `password`, `Perfil`, `Nombre_completo`) VALUES
('yicson', '123456789', 'administrador', 'YICSON MOSQUERA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `res4505`
--
ALTER TABLE `res4505`
  ADD PRIMARY KEY (`PKId`);

--
-- Indices de la tabla `tbldatosexcel`
--
ALTER TABLE `tbldatosexcel`
  ADD PRIMARY KEY (`PKId`);

--
-- Indices de la tabla `tblregistro`
--
ALTER TABLE `tblregistro`
  ADD PRIMARY KEY (`PKId`);

--
-- Indices de la tabla `tblusuario`
--
ALTER TABLE `tblusuario`
  ADD PRIMARY KEY (`PKUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbldatosexcel`
--
ALTER TABLE `tbldatosexcel`
  MODIFY `PKId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `tblregistro`
--
ALTER TABLE `tblregistro`
  MODIFY `PKId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
