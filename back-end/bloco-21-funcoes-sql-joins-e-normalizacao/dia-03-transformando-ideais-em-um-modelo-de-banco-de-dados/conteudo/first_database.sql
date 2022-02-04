DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;

CREATE TABLE funcionario (
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL UNIQUE,
    data_cadastro DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB;

CREATE TABLE setor (
	id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE funcionario_setor (
	funcionario_id SMALLINT UNSIGNED NOT NULL,
    setor_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (funcionario_id, setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(id),
    FOREIGN KEY (setor_id) REFERENCES setor(id)
) ENGINE=InnoDB;

SET SQL_SAFE_UPDATES = 0;

INSERT
	INTO
		funcionario (id, nome, sobrenome, email, telefone, data_cadastro)
	VALUES
		(12, 'Joseph', 'Rodrigues',	'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
		(13, 'André', 'Freeman', 'andre19990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
		(14, 'Cíntia', 'Duval',	'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
		(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
        
INSERT
	INTO
		setor(nome)
    VALUES
		('Administração'),
        ('Vendas'),
        ('Operacional'),
        ('Estratégico'),
        ('Marketing');
        
INSERT
	INTO
		funcionario_setor(funcionario_id, setor_id)
	VALUES
		(12, 1),
        (12, 2),
        (13, 3),
        (14, 4),
        (14, 2),
        (15, 5);
