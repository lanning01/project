-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-04-25 07:17:30
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ec`
--

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE `cart` (
  `id` int(6) UNSIGNED NOT NULL,
  `productid` int(6) NOT NULL,
  `userid` int(6) NOT NULL,
  `count` tinyint(2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`id`, `productid`, `userid`, `count`) VALUES
(1, 5, 2, 15),
(2, 1, 11, 15),
(4, 3, 11, 2),
(5, 4, 11, 15);

-- --------------------------------------------------------

--
-- 表的结构 `products`
--

CREATE TABLE `products` (
  `id` int(6) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL,
  `price_before` double UNSIGNED NOT NULL,
  `price` float UNSIGNED NOT NULL,
  `title` text NOT NULL,
  `sell` int(6) NOT NULL,
  `comment` int(6) NOT NULL,
  `imgnormal` varchar(256) NOT NULL,
  `brand` varchar(32) NOT NULL,
  `brandimg` varchar(256) NOT NULL,
  `img1` varchar(256) NOT NULL,
  `img2` varchar(256) NOT NULL,
  `img3` varchar(256) NOT NULL,
  `img4` varchar(256) NOT NULL,
  `img5` varchar(256) NOT NULL,
  `imgbig` varchar(256) NOT NULL,
  `color1` varchar(32) NOT NULL,
  `color2` varchar(32) NOT NULL,
  `color3` varchar(32) NOT NULL,
  `color4` varchar(32) NOT NULL,
  `mem32` varchar(32) NOT NULL,
  `mem64` varchar(32) NOT NULL,
  `mem128` varchar(32) NOT NULL,
  `mem256` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `products`
--

INSERT INTO `products` (`id`, `name`, `price_before`, `price`, `title`, `sell`, `comment`, `imgnormal`, `brand`, `brandimg`, `img1`, `img2`, `img3`, `img4`, `img5`, `imgbig`, `color1`, `color2`, `color3`, `color4`, `mem32`, `mem64`, `mem128`, `mem256`) VALUES
(5, 'IPhoneX', 8098, 7998, '【顺丰包邮】苹果 iPhone X（iPhone10）全面屏手机 全网通', 175, 47, '/project/ec/assets/imgs/detailsimg/x_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/iphone.jpg', '/project/ec/assets/imgs/detailsimg/x_1.jpg', '/project/ec/assets/imgs/detailsimg/x_2.jpg', '/project/ec/assets/imgs/detailsimg/x_3.jpg', '/project/ec/assets/imgs/detailsimg/x_4.jpg', '/project/ec/assets/imgs/detailsimg/x_5.jpg', '/project/ec/assets/imgs/detailsimg/x_1.jpg', '白色', '', '银灰色', '', '32G', '64G', '128G', '256G'),
(7, '华为mate10', 3939, 3739, '【包邮送壳膜】华为 HUAWEI Mate 10 6GB+128GB 全网通 双卡双待', 593, 196, '/project/ec/assets/imgs/detailsimg/mate10_1.jpg', '华为', '/project/ec/assets/imgs/indeximg/huawei.jpg', '/project/ec/assets/imgs/detailsimg/mate10_1.jpg', '/project/ec/assets/imgs/detailsimg/mate10_2.jpg', '/project/ec/assets/imgs/detailsimg/mate10_3.jpg', '/project/ec/assets/imgs/detailsimg/mate10_4.jpg', '/project/ec/assets/imgs/detailsimg/mate10_5.jpg', '/project/ec/assets/imgs/detailsimg/mate10_1.jpg', '白色', '黑色', '银灰色', '土豪金', '32G', '64G', '128G', '256G'),
(8, 'OPPOR11', 3099, 2999, 'OPPO R15 全面屏双摄拍照手机 全网通 移动联通电信4G', 159, 18, '/project/ec/assets/imgs/detailsimg/r15_1.jpg', 'oppo', '/project/ec/assets/imgs/indeximg/oppo.jpg', '/project/ec/assets/imgs/detailsimg/r15_1.jpg', '/project/ec/assets/imgs/detailsimg/r15_2.jpg', '/project/ec/assets/imgs/detailsimg/r15_3.jpg', '/project/ec/assets/imgs/detailsimg/r15_4.jpg', '/project/ec/assets/imgs/detailsimg/r15_5.jpg', '/project/ec/assets/imgs/detailsimg/r15_1.jpg', '热力红', '星空紫', '雪莹白', '', '', '', '128G', ''),
(9, '三星S8+', 5800, 5699, '【新品现货顺丰包邮】三星 GALAXY S8+（皇帝版/G9550/全网通）', 220, 50, '/project/ec/assets/imgs/detailsimg/s8jia_1.jpg', '三星', '/project/ec/assets/imgs/indeximg/sanxing.jpg', '/project/ec/assets/imgs/detailsimg/s8jia_1.jpg', '/project/ec/assets/imgs/detailsimg/s8jia_2.jpg', '/project/ec/assets/imgs/detailsimg/s8jia_3.jpg', '/project/ec/assets/imgs/detailsimg/s8jia_4.jpg', '/project/ec/assets/imgs/detailsimg/s8jia_5.jpg', '/project/ec/assets/imgs/detailsimg/s8jia_1.jpg', '烟晶灰', '勃垦地红', '迷夜黑', '', '', '', '128G', ''),
(10, '小米5X', 1399, 1078, '【亲！包邮送壳膜】(MI)小米 5X 全网通 4+32/64G pk 荣耀 魅族', 580, 136, '/project/ec/assets/imgs/detailsimg/5x_1.jpg', '小米', '/project/ec/assets/imgs/indeximg/xiaomi.jpg', '/project/ec/assets/imgs/detailsimg/5x_1.jpg', '/project/ec/assets/imgs/detailsimg/5x_2.jpg', '/project/ec/assets/imgs/detailsimg/5x_3.jpg', '/project/ec/assets/imgs/detailsimg/5x_4.jpg', '/project/ec/assets/imgs/detailsimg/5x_5.jpg', '/project/ec/assets/imgs/detailsimg/5x_1.jpg', '金色', '黑色', '玫瑰金', '', '32G', '64G', '', ''),
(11, 'vivox21', 2999, 2898, 'vivo X21 全面屏 双摄美颜拍照手机 6G运行 全网通4G', 187, 22, '/project/ec/assets/imgs/detailsimg/x21_1.jpg', 'vivo', '/project/ec/assets/imgs/indeximg/vivo.jpg', '/project/ec/assets/imgs/detailsimg/x21_1.jpg', '/project/ec/assets/imgs/detailsimg/x21_2.jpg', '/project/ec/assets/imgs/detailsimg/x21_3.jpg', '/project/ec/assets/imgs/detailsimg/x21_4.jpg', '/project/ec/assets/imgs/detailsimg/x21_5.jpg', '/project/ec/assets/imgs/detailsimg/x21_1.jpg', '极光白', '宝石红', '冰钻黑', '', '', '64G', '128G', ''),
(12, '华为P10PLUS', 2999, 2628, '【顺丰包邮+送壳膜】华为 HUAWEI P10 Plus 6GB运行 移动联通电信4G', 187, 22, '/project/ec/assets/imgs/detailsimg/p10p_1.jpg', '华为', '/project/ec/assets/imgs/indeximg/huawei.jpg', '/project/ec/assets/imgs/detailsimg/p10p_1.jpg', '/project/ec/assets/imgs/detailsimg/p10p_2.jpg', '/project/ec/assets/imgs/detailsimg/p10p_3.jpg', '/project/ec/assets/imgs/detailsimg/p10p_4.jpg', '/project/ec/assets/imgs/detailsimg/p10p_5.jpg', '/project/ec/assets/imgs/detailsimg/p10p_1.jpg', '草木绿', '钻雕金', '曜石黑', '玫瑰金', '', '64G', '128G', ''),
(13, 'iphone8 plus', 6999, 6888, '苹果 iPhone 8 Plus（全网通）\r\n', 251, 15, '/project/ec/assets/imgs/detailsimg/8p_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/iphone.jpg', '/project/ec/assets/imgs/detailsimg/8p_1.jpg', '/project/ec/assets/imgs/detailsimg/8p_2.jpg', '/project/ec/assets/imgs/detailsimg/8p_3.jpg', '/project/ec/assets/imgs/detailsimg/8p_4.jpg', '/project/ec/assets/imgs/detailsimg/8p_5.jpg', '/project/ec/assets/imgs/detailsimg/8p_1.jpg', '银色', '金色', '', '', '', '64G', '', '256G'),
(14, 'vivo x9s', 2111, 1099, '【顺丰包邮】 vivo X9s 全网通 4GB+64GB 移动联通电信4G手机', 145, 90, '/project/ec/assets/imgs/detailsimg/x9s_1.jpg', 'vivo', '/project/ec/assets/imgs/indeximg/vivo.jpg', '/project/ec/assets/imgs/detailsimg/x9s_1.jpg', '/project/ec/assets/imgs/detailsimg/x9s_2.jpg', '/project/ec/assets/imgs/detailsimg/x9s_3.jpg', '/project/ec/assets/imgs/detailsimg/x9s_4.jpg', '/project/ec/assets/imgs/detailsimg/x9s_5.jpg', '/project/ec/assets/imgs/detailsimg/x9s_1.jpg', '金色', '磨砂黑', '玫瑰金', '', '', '64G', '', ''),
(15, '红米note5', 1669, 1599, '【现货包邮送壳膜】小米 红米Note5 全网通版 6+64G 小米MI note 5', 74, 20, '/project/ec/assets/imgs/detailsimg/hongminote5_1.jpg', 'vivo', '/project/ec/assets/imgs/indeximg/xiaomi.jpg', '/project/ec/assets/imgs/detailsimg/hongminote5_1.jpg', '/project/ec/assets/imgs/detailsimg/hongminote5_2.jpg', '/project/ec/assets/imgs/detailsimg/hongminote5_3.jpg', '/project/ec/assets/imgs/detailsimg/hongminote5_4.jpg', '/project/ec/assets/imgs/detailsimg/hongminote5_5.jpg', '/project/ec/assets/imgs/detailsimg/hongminote5_1.jpg', '金色', '黑色', '玫瑰金', '', '', '64G', '', ''),
(16, '三星s8', 4599, 4398, '【顺丰包邮 当天发】三星 GALAXY S8（全网通）移动联通电信4G手机', 338, 116, '/project/ec/assets/imgs/detailsimg/s8_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/sanxing.jpg', '/project/ec/assets/imgs/detailsimg/s8_1.jpg', '/project/ec/assets/imgs/detailsimg/s8_2.jpg', '/project/ec/assets/imgs/detailsimg/s8_3.jpg', '/project/ec/assets/imgs/detailsimg/s8_4.jpg', '/project/ec/assets/imgs/detailsimg/s8_5.jpg', '/project/ec/assets/imgs/detailsimg/s8_6.jpg', '迷夜黑', '芭比粉', '绮梦金', '星空灰', '', '64G', '', ''),
(17, 'iphone6', 2200, 1999, '【顺丰包邮 送壳膜】苹果 Apple iPhone6 移动联通电信4G全网通', 145, 77, '/project/ec/assets/imgs/detailsimg/6_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/iphone.jpg', '/project/ec/assets/imgs/detailsimg/6_1.jpg', '/project/ec/assets/imgs/detailsimg/6_2.jpg', '/project/ec/assets/imgs/detailsimg/6_3.png', '/project/ec/assets/imgs/detailsimg/6_4.png', '/project/ec/assets/imgs/detailsimg/6_5.png', '/project/ec/assets/imgs/detailsimg/8p_1.jpg', '灰色', '金色', '', '', '32G', '', '', ''),
(18, 'VIVO XPLAY6', 4111, 3998, 'vivo Xplay6（全网通）6GB RAM+64G 移动联通电信4G手机 双卡双待', 114, 6, '/project/ec/assets/imgs/detailsimg/xplay6_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/vivo.jpg', '/project/ec/assets/imgs/detailsimg/xplay6_1.jpg', '/project/ec/assets/imgs/detailsimg/xplay6_2.jpg', '/project/ec/assets/imgs/detailsimg/xplay6_3.jpg', '/project/ec/assets/imgs/detailsimg/xplay6_4.jpg', '/project/ec/assets/imgs/detailsimg/xplay6_5.jpg', '/project/ec/assets/imgs/detailsimg/8p_1.jpg', '玫瑰金', '磨砂黑', '', '', '', '64G', '', ''),
(19, '小米6', 2298, 2228, '小米6 全网通 4G/6GB运行 移动联通电信4G手机【顺丰包邮 送壳膜】', 447, 226, '/project/ec/assets/imgs/detailsimg/mi6_1.jpg', '小米', '/project/ec/assets/imgs/indeximg/xiaomi.jpg', '/project/ec/assets/imgs/detailsimg/mi6_1.jpg', '/project/ec/assets/imgs/detailsimg/mi6_2.jpg', '/project/ec/assets/imgs/detailsimg/mi6_3.jpg', '/project/ec/assets/imgs/detailsimg/mi6_4.jpg', '/project/ec/assets/imgs/detailsimg/mi6_2.jpg', '/project/ec/assets/imgs/detailsimg/mi6_1.jpg', '亮蓝色', '亮黑色', '', '', '', '64G', '', ''),
(20, '华为麦芒6', 1666, 1608, '【顺丰包邮送壳膜】华为 麦芒 6 全网通 4GB+64GB版 移动联通电信4G\r\n', 412, 121, '/project/ec/assets/imgs/detailsimg/maimang6_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/huawei.jpg', '/project/ec/assets/imgs/detailsimg/maimang6_1.jpg', '/project/ec/assets/imgs/detailsimg/maimang6_2.jpg', '/project/ec/assets/imgs/detailsimg/maimang6_3.jpg', '/project/ec/assets/imgs/detailsimg/maimang6_4.jpg', '/project/ec/assets/imgs/detailsimg/maimang6_5.jpg', '/project/ec/assets/imgs/detailsimg/maimang6_1.jpg', '极光蓝', '流光金', '曜石黑', '', '', '64G', '', ''),
(21, '小米note3', 1999, 1849, '【全国包邮送壳膜】小米Note3 全网通 4/6+64/128G 8核处理器\r\n', 251, 15, '/project/ec/assets/imgs/detailsimg/note3_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/xiaomi.jpg', '/project/ec/assets/imgs/detailsimg/note3_1.jpg', '/project/ec/assets/imgs/detailsimg/note3_2.jpg', '/project/ec/assets/imgs/detailsimg/note3_3.jpg', '/project/ec/assets/imgs/detailsimg/note3_4.jpg', '/project/ec/assets/imgs/detailsimg/note3_5.jpg', '/project/ec/assets/imgs/detailsimg/8p_1.jpg', '黑色', '亮蓝色', '', '', '', '64G', '', ''),
(22, '小米MIX2', 3000, 2928, '【顺丰包邮 送耳机】小米MIX2 全网通 6GB运行 移动联通电信4G手机\r\n', 407, 203, '/project/ec/assets/imgs/detailsimg/mix2_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/xiaomi.jpg', '/project/ec/assets/imgs/detailsimg/mix2_1.jpg', '/project/ec/assets/imgs/detailsimg/mix2_2.jpg', '/project/ec/assets/imgs/detailsimg/mix2_3.jpg', '/project/ec/assets/imgs/detailsimg/mix2_4.jpg', '/project/ec/assets/imgs/detailsimg/mix2_5.jpg', '/project/ec/assets/imgs/detailsimg/mix2_1.jpg', '黑色', '', '', '', '', '64G', '128G', ''),
(23, 'OPPOR11 plus', 3000, 2998, '【顺丰包邮】OPPO R11s Plus 全面屏双摄 全网通6G+64G 双卡双待手机\r\n', 226, 125, '/project/ec/assets/imgs/detailsimg/r11sp_1.jpg', 'OPPO', '/project/ec/assets/imgs/indeximg/oppo.jpg', '/project/ec/assets/imgs/detailsimg/r11sp_1.jpg', '/project/ec/assets/imgs/detailsimg/r11sp_2.jpg', '/project/ec/assets/imgs/detailsimg/r11sp_3.jpg', '/project/ec/assets/imgs/detailsimg/r11sp_4.jpg', '/project/ec/assets/imgs/detailsimg/r11sp_5.jpg', '/project/ec/assets/imgs/detailsimg/r11sp_1.jpg', '黑色', '金色', '', '', '', '64G', '', ''),
(24, 'iphone8', 4800, 4749, '【顺丰包邮 现货】苹果 iPhone 8（全网通） 移动联通电信4G手机\r\n', 100, 18, '/project/ec/assets/imgs/detailsimg/8_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/iphone.jpg', '/project/ec/assets/imgs/detailsimg/8_1.jpg', '/project/ec/assets/imgs/detailsimg/8_2.jpg', '/project/ec/assets/imgs/detailsimg/8_3.jpg', '/project/ec/assets/imgs/detailsimg/8_4.jpg', '/project/ec/assets/imgs/detailsimg/8_2.jpg', '/project/ec/assets/imgs/detailsimg/8_1.jpg', '深灰色', '红色', '银色', '金色', '', '64G', '', '256G'),
(25, '三星note8', 6666, 6488, '三星 GalaxyNote8（SM-N9500）6GB+64GB/128GB/256GB 4G手机双卡双待\r\n', 105, 31, '/project/ec/assets/imgs/detailsimg/note8_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/sanxing.jpg', '/project/ec/assets/imgs/detailsimg/note8_1.jpg', '/project/ec/assets/imgs/detailsimg/note8_2.jpg', '/project/ec/assets/imgs/detailsimg/note8_3.jpg', '/project/ec/assets/imgs/detailsimg/note8_4.jpg', '/project/ec/assets/imgs/detailsimg/note8_5.jpg', '/project/ec/assets/imgs/detailsimg/note8_1.jpg', '迷夜黑', '星河蓝', '矿野灰', '', '', '64G', '128G', ''),
(26, 'OPPO R11S', 2588, 2498, 'OPPO R11s 全面屏拍照手机 全网通 移动联通电信4G手机\r\n', 155, 42, '/project/ec/assets/imgs/detailsimg/r11s_1.jpg', 'iphone', '/project/ec/assets/imgs/indeximg/oppo.jpg', '/project/ec/assets/imgs/detailsimg/r11s_1.jpg', '/project/ec/assets/imgs/detailsimg/r11s_2.jpg', '/project/ec/assets/imgs/detailsimg/r11s_3.jpg', '/project/ec/assets/imgs/detailsimg/r11s_4.jpg', '/project/ec/assets/imgs/detailsimg/r11s_5.jpg', '/project/ec/assets/imgs/detailsimg/r11s_1.jpg', '红色', '黑色', '香槟色', '', '', '64G', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `sellers`
--

CREATE TABLE `sellers` (
  `id` int(6) UNSIGNED NOT NULL,
  `sellername` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `idcard` varchar(18) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `realname` varchar(8) NOT NULL,
  `sex` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `sellers`
--

INSERT INTO `sellers` (`id`, `sellername`, `password`, `idcard`, `tel`, `realname`, `sex`) VALUES
(1, 'root', '123456', '210204166550244825', '13498752545', '刘刘刘', '男');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(6) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `tel` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `tel`) VALUES
(2, 'lsj', 'e10adc3949ba59abbe56e057f20f883e', '13478484578'),
(11, 'qwer', 'e10adc3949ba59abbe56e057f20f883e', '12345876254'),
(12, '123qwe', '00c66aaf5f2c3f49946f15c1ad2ea0d3', '4152312'),
(13, 'lsj1', '0052069db1a0017f6a27f27e6dcbb919', '1465465'),
(15, 'qwe', '202cb962ac59075b964b07152d234b70', '123'),
(16, '123456', 'e10adc3949ba59abbe56e057f20f883e', '13548754515'),
(17, '', 'd41d8cd98f00b204e9800998ecf8427e', ''),
(19, 'ghm', 'e10adc3949ba59abbe56e057f20f883e', '15478458525'),
(20, 'qqqq', 'e10adc3949ba59abbe56e057f20f883e', '12345978454'),
(21, 'qqq', '123456', '13454874545');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `products`
--
ALTER TABLE `products`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- 使用表AUTO_INCREMENT `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
