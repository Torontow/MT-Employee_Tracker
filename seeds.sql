INSERT INTO department (id, name)
VALUES (1, "Production"), 
(2, "Properties"), 
(3, "Wardrobe"), 
(4, "Scenic Carpentry"), 
(5, "Stage Crew");

INSERT INTO role (title, salary, department_id)
VALUES ("Production Manager", 1500.00, 1), 
("Technical Director", 1200.00, 1), 
("Project Manager", 1100.00, 1), 
("Head of Props", 1050.00, 2), 
("Props Builder", 800.00, 2), 
("Head of Wardrobe", 1050.00, 3), 
("Cutter", 800.00, 3), 
("Costumer", 750.00, 3), 
("Head Scenic Carpenter", 1050.00, 4),
("Scenic Carpenter", 800.00, 4),
("Head Carpenter", 900.00, 5),
("Head of Electrics", 900.00, 5),
("Head of Sound", 900.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lyndee", "Hansen", 1, NULL),
("Natalie","Kearns", 2, NULL),
("Lisa","Wright", 3, NULL),
("Craig", "Pearson", 4, NULL),
("Steve","West", 3, NULL);