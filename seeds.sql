DELETE FROM department;

INSERT INTO department (id, name)
VALUES (1, "Production"), 
(2, "Properties"), 
(3, "Wardrobe"), 
(4, "Scenic Carpentry"), 
(5, "Stage Crew");

DELETE FROM role;

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

DELETE FROM employee;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lyndee", "Hansen", 200, NULL),
("Natalie","Kearns", 203, NULL),
("Lisa","Wright", 205, NULL),
("Craig", "Pearson", 208, NULL),
("Steve","West", 210, NULL),
("Daniel","Bennett",201,100),
("Natalie","Tsang",204,101),
("Kathryn","Sherwin",206,102),
("Lacie","George",207,102),
("Doug","Johnstone",209,103),
("Wright","Staines",211,NULL),
("Aaron","Ouellette",212,NULL)


