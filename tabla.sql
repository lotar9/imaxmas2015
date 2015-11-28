CREATE TABLE `messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `person_name` varchar(255) DEFAULT NULL,
  `help_amount` smallint(5) unsigned NOT NULL DEFAULT '0',
  `message` text,
  `creation_date` datetime NOT NULL,
  `province` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
