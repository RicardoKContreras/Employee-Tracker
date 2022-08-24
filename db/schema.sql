DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE roles (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
department_id INT NULL,
salary DECIMAL,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

