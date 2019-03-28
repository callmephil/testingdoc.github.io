# SQLite Exercise

In this exercise, you will learn the basics of the Structured query language (SQL) 

We're going to create tables, insert, edit, and remove data in a database.

## Pre-requisites

Please make sure that you install the following before you begin:
- [SQLite3](https://www.sqlite.org/download.html)
- [DB Browser for SQLite](https://sqlitebrowser.org/)

You will also need basic knowledge of SQL. 

You can watch this video [here](https://www.freecodecamp.org/news/quincylarson/sql-and-databases-full-course--FLkLcFzA) before starting this exercise. You may refer to this tutorial throughout this exercise.

You can also refer to w3schools tutorials [here](https://www.w3schools.com/sql/default.asp).

## Goals

- Control a full database
- Understand tables in database
- Practice writing simple SQL queries
- **Competencies**: 
  - <kbd>Databases</kbd>
  - <kbd>SQL</kbd>

## Instructions

- Fork this repo
- Clone it on your laptop
- Open DB Browser for SQLite, Press **Open Database** in top menu, and select the file named **myDatabase** in the repo
- Create a file called **results.txt** 
- For each of the questions below, write in **results.txt** the following:
 - <kbd>The number of the question</kbd>
 - <kbd>The query answer</kbd>
 - <kbd>The result of the query</kbd>

Example:

Problem 0: Get all the data from the students table in the database.

Select * from students

"1"	"Alex"	"21"	"M"	"200"<br>
"2"	"Basma"	"25"	"F"	"300"<br>
"3"	"Hasan"	"30"	"M"	"150"<br>
"4"	"Layal"	"18"	"F"	"350"<br>
"5"	"Robert"	"34"	"M"	"500"<br>
"6"	"Jana"	"33"	"F"	"500"<br>

### Basic Queries

In the **Execute SQL** tab, do the following: 
1. Get all the names of students in the database
2. Get all the data of students above 30 years old
3. Get the names of the females who are 30 years old
4. Get the number of Points of **Alex**
5. Add yourself as a new student (your name, your age...)
6. Increase the points of **Basma** because she solved a new exercise
7. Decrease the points of **Alex** because he's late today
8. Commit ("Basic Queries") 🔑🔑🔑

### Creating Table

Layal graduated on 08/09/2018. Create a table **graduates** that includes:
- ID, Integer, Not Null, Primary key, Auto incerement
- Name, Text, Not Null, Unique
- Age, Integer
- Gender, Text
- Points, Integer
- Graduation, Text that will point to the date of the graduation

In the **Execute SQL** tab, do the following:

1. Copy Layal's data from **students** to **graduates**
2. Add the graduation date previously mentioned to Layal's record in **graduates**
3. Remove Layal's record from **students**
4. Commit ("Creating Table") 🔑🔑🔑🔑

### Joins

Now, open the database **carDealership**. You will find 2 tables:
- Companies
 - <kbd>ID</kbd>
 - <kbd>Name of the company</kbd>
 - <kbd>Date when the company was made</kbd>
- Employees
 - <kbd>ID</kbd>
 - <kbd>Name of the employee</kbd>
 - <kbd>Role of the employee</kbd>
 - <kbd>Company of the employee</kbd>
 
In the **Execute SQL** tab, do the following:
11. Produce a table that contains, for each employee, his/her name, company name, and company date.
12. Find the name of **employees** that work in companies made before 2000.
13. Find the name of company that has a graphic designer.
14. Commit ("Joins") 🔑🔑🔑🔑🔑

### Count & Filter

Go back the **myDatabase**.

In the **Execute SQL** tab, do the following:
14. Find the person with the highest number of points in **students**
15. Find the average of points in **students**
16. Find the number of students that have 500 points
17. Find the names of students that contains 's'
18. Find all students based on the decreasing order of their points
19. commit ("Count & Filter") 🔑🔑