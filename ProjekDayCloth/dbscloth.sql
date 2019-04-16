-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2019 at 11:34 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbscloth`
--

-- --------------------------------------------------------

--
-- Table structure for table `tab_cloth`
--

CREATE TABLE `tab_cloth` (
  `id_item` int(12) NOT NULL,
  `name` varchar(35) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `harga` double NOT NULL,
  `jumlah` int(12) NOT NULL,
  `kat_id` int(12) NOT NULL,
  `gambar` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tab_cloth`
--

INSERT INTO `tab_cloth` (`id_item`, `name`, `deskripsi`, `harga`, `jumlah`, `kat_id`, `gambar`) VALUES
(1, 'SHARK FULL ZIP HOODIE MENS', 'Hoodie Bape Terdiri dari warna kuning dan merah', 405, 12, 1, 'http://localhost:8081/image/Bape1.jpg'),
(2, 'EA SPORTS X BAPE CRAZY SHARK FULL Z', 'Hoodie Bape yang berkolaborasi dengan EA Sports', 429, 20, 1, 'http://localhost:8081/image/Bape2.jpg'),
(3, '1ST CAMO TIGER FULL ZIP HOODIE MENS', 'Bape Camo dengan motif harimau', 429, 2, 1, 'http://localhost:8081/image/Bape3.jpg'),
(4, 'BAPE FCRB ABC SEPARATE PRACTICE J', 'Bape dengan corak tentara', 429, 11, 1, 'http://localhost:8081/image/Bape4.jpg'),
(5, 'LA CAMO COLLEGE TEE MENS', 'Tshirt bape', 99, 6, 2, 'http://localhost:8081/image/Tshirt1.jpg'),
(6, 'LA CAMO BY BATHING TEE MENS', 'Bape Tshirt', 99, 4, 2, 'http://localhost:8081/image/Tshirt2.jpg'),
(7, 'A TO Z TEE MENS', 'Bape Tshirt', 99, 22, 2, 'http://localhost:8081/image/Tshirt3.jpg'),
(8, 'Tshirt1ST CAMO BIG APE HEAD TEE MEN', 'Bape Tshirt', 99, 5, 2, 'http://localhost:8081/image/Tshirt4.jpg'),
(9, '1ST CAMO SWEAT CARGO SHORTS MENS', 'Pants Bape', 249, 9, 3, 'http://localhost:8081/image/Cel1.jpg'),
(10, 'BAPE STORE LA 1ST ANNIV SWEAT SHORT', 'Bape Pants Dengan corak yang cerah', 249, 3, 3, 'http://localhost:8081/image/Cel2.jpg'),
(11, 'ABC ONE POINT SWEAT SHORTS MENS', 'Bape Pants Dengan motif berwarna hijau', 245, 12, 3, 'http://localhost:8081/image/Cel3.jpg'),
(12, 'DOUBLE KNIT SIDE SHARK SHORTS MENS', 'Bape Pants Berwarna Hitam', 275, 8, 3, 'http://localhost:8081/image/Cel4.jpg'),
(13, 'LA CAMO LAPE JET CAP MENS', 'Topi Bape', 119, 2, 4, 'http://localhost:8081/image/Akse1.jpg'),
(14, 'GOODS LA COLLEGE BUCKET HAT MENS', 'Topi Bape', 109, 4, 4, 'http://localhost:8081/image/Akse2.jpg'),
(15, 'HALF CAMO SHARK MASK MENS', 'Masker Bape', 65, 7, 4, 'http://localhost:8081/image/Akse3.jpg'),
(16, 'LA COLLEGE KEYCHAIN MENS', 'Gantungan Kunci', 9, 6, 4, 'http://localhost:8081/image/Akse4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usercloth`
--

CREATE TABLE `usercloth` (
  `iduser` int(12) NOT NULL,
  `emailuser` varchar(50) NOT NULL,
  `passworduser` varchar(50) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `alamat` varchar(35) NOT NULL,
  `nomorhp` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usercloth`
--

INSERT INTO `usercloth` (`iduser`, `emailuser`, `passworduser`, `nama`, `alamat`, `nomorhp`) VALUES
(1, 'ade@gmail.com', 'ade', 'ade', 'bengkong', 8123456),
(2, 'adit@gmail.com', 'adit', 'adit', 'nagoya', 814517777),
(10, 'adadk@dajasd', 'ade', 'adadjajd', 'adjadjaj', 121231),
(12, 'adadada', 'kiki', 'wwww', 'adadad', 101919);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tab_cloth`
--
ALTER TABLE `tab_cloth`
  ADD PRIMARY KEY (`id_item`);

--
-- Indexes for table `usercloth`
--
ALTER TABLE `usercloth`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tab_cloth`
--
ALTER TABLE `tab_cloth`
  MODIFY `id_item` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `usercloth`
--
ALTER TABLE `usercloth`
  MODIFY `iduser` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
