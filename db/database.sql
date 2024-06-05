CREATE DATABASE IF NOT EXISTS node_api

USE node_api 

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
)

INSERT INTO empleados VALUES (1,'Edgar',1000),(2,'Marcelo',2000),(3,'Tuyarot',3000)