INSERT INTO department (name)
VALUES
('Deli'),
('Accounting'),
('Meat'),
('Produce'),
('Electronics');

INSERT INTO roles (title, department_id, salary)
VALUES
('Food Handler', 1, 23000),
('Cashier', 2, 43000),
('Raw Meat Handler', 3 ,55000),
('Fruits & Vegetable Handler', 4, 57000),
('Technician', 5, 65000);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tiffany', 'Contreras', 1, 1),
('Jacob', 'Lee', 2, NULL),
('Sarah', 'Glee', 3, 2),
('Ryan', 'Connor', 5, 1),
('Sierra', 'Summers', 4, 3);