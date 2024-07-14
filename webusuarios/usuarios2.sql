use usuarios2;
/*create TABLE `lista` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(6) NOT NULL,
  `username` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL
);*/
/*CREATE TABLE `lista` (
  `id_user` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `edad` varchar(6) NOT NULL,
  `username` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;*/
/*INSERT INTO `lista` (`id_user`, `nombre`, `edad`, `username`, `imagen`) VALUES
(2, 'Leanne Graham', '20', 'Breat', 'imagen2.jpg'), 
(3, 'Ervin Howell', '21', 'Antonette', 'imagen3.jpg'),
(4, 'Clementine Bauch', '22', 'Samantha', 'imagen4.jpg'),
(5, 'Patricia Lebsack', '23', 'Karianne', 'imagen5.jpg'),
(6, 'Chelsey Dietrich', '24', 'Kamren', 'imagen6.jpg'),
(7, 'Mrs. Dennis Schulist', '25', 'Leopoldo_Corker', 'imagen6.jpg'),
(8, 'Kurtis Weissnat', '26', 'Elwyn.Skiles', 'imagen7.jpg'),
(9, 'Nicholas Runolfsdottir V', '27', 'Maxime_Nienow', 'imagen8.jpg'),
(10, 'Glenna Reichert', '28', 'Delphine', 'imagen9.jpg'),
(11, 'Clementina DuBuque', '29', 'Moriah.Stanton', 'imagen10.jpg');*/
/*ALTER TABLE `lista`
ADD PRIMARY KEY (`id_user`);*/
select * from lista;
/*ALTER TABLE `lista`
MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;*/
SET SQL_SAFE_UPDATES = 0;
update usuarios2.lista set imagen = "https://i.seadn.io/s/raw/files/d390fd05bf4fc251e6caf61ceca08992.png?auto=format&dpr=1&w=384";
SET SQL_SAFE_UPDATES = 1;
/*UPDATE lista
SET imagen = 'C:\Users\domat\Desktop\JAVA\Interfaces JAVA\AVATARS\MUJER1.jpg'
WHERE id_user = 2;
UPDATE lista
SET imagen = 'C:\Users\domat\Desktop\JAVA\Interfaces JAVA\AVATARS\HOMBRE1.jpg'
WHERE id_user = 3;*/

