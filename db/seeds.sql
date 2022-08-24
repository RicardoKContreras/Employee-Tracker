INSERT INTO department (name)
VALUES
('Deli'),
('Cashier'),
('Store');

INSERT INTO roles (title, department_id, salary)
VALUES
('Cook', 1, 23000),
('Cook Manager', 2, 43000),
('Store Manager', 3, 65000);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tiffany', 'Contreras', 1, 1),
('Jacob', 'Lee', 2, NULL),
('Sarah', 'Glee', 1, 2),
('Ryan', 'Connor', 1, 1),
('Sierra', 'Summers', 3, 3);