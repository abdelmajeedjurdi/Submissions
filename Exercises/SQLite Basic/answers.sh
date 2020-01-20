(Basic Queries) 

1-   SELECT name
	FROM students;
2-  SELECT *
	FROM students
	WHERE age >30;
3-  SELECT *
	FROM students
	WHERE age >30 AND gender = "F";
4-  SELECT points
	FROM students
	WHERE Name="Alex";
5-  INSERT INTO students (ID , NAME , AGE , GENDER , POINTS)
    VALUES ("9","Abd","28","M","500");
6-  UPDATE students
    SET points = '450'
    WHERE ID = 2;
7-  UPDATE students
    SET points = '150'
    WHERE ID = 1;

(Creating Table)

1-  CREATE TABLE Graduates (
	ID INTEGER NOT NULL, 
	Name TEXT NOT NULL UNIQUE,
	Age INTEGER,
	Gender TEXT,
	Points INTEGER,
	Graduation TEXT,
	PRIMARY KEY(ID));

2-  INSERT INTO Graduates (name, age, gender, points)
	SELECT name, age, gender, points 
	FROM students
	WHERE name = "Layal";
3-  UPDATE Graduates
	SET Graduation = "08/09/2018"
	WHERE Name = "Layal";
4-  DELETE FROM students
	WHERE name = "Layal";

(Joins)

1- SELECT employees.Name, employees.Company, companies.Date 
	FROM employees 
	JOIN companies
	ON employees.Company = companies.Name;
2- SELECT employees.Name
	FROM employees
	JOIN companies
	ON employees.Company = companies.Name 
	WHERE companies.date < "2000";
3- SELECT employees.Company
	FROM employees
	JOIN companies
	ON employees.Company = companies.Name
	WHERE employees.role Like "Graphic Designer";

(Count & Filter)

1- SELECT name, MAX(points) as maximum
	FROM students;
2- SELECT AVG(points) as average
	FROM students;
3- SELECT COUNT(ID) as count
	FROM students
	WHERE points = "500";
4- SELECT name 
	FROM students
	WHERE name LIKE "%s%";
5- SELECT name, points
	FROM students
	ORDER BY points DESC;