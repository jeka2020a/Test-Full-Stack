-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 06 2024 г., 17:58
-- Версия сервера: 8.0.30
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fullstack`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `fibbonachi` int NOT NULL,
  `number` int NOT NULL,
  `ip` varchar(15) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `fibbonachi`, `number`, `ip`) VALUES
(1, 'Eli', 0, 1, '192.168.0.1'),
(2, 'Eli', 0, 1, '192.168.0.1'),
(3, 'Simple text by API', 111, 555, '127.0.0.1'),
(4, 'Eughene Tsyma', 111, 4, '127.0.0.1'),
(5, 'User2003', 111, 12, '127.0.0.1'),
(6, 'https://t.me/eughene_link', 111, 3, '127.0.0.1'),
(7, 'Jack_user', 111, 10, '127.0.0.1'),
(8, 'Eughene Zhekul', 5, 10, '127.0.0.1'),
(9, 'UserFromKyiv', 55, 10, '127.0.0.1'),
(10, 'John', 610, 15, '127.0.0.1'),
(11, 'Jason', 987, 16, '127.0.0.1'),
(12, 'Mike', 2584, 18, '127.0.0.1');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
