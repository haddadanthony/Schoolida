# Install

To run code, please run npm install after cloning. add details in schoolda.csv then enter npm start.

# Schoolida

Schoolida is a famous school in Lebanon. Because of the current corona situation, Schoolida was obliged to send its staff and students to their homes. This did not only affect the teacher-student communication, but also the communication in between staff. Having this, Schoolida is looking to implement an online system that manages the school.

Schoolida’s staff consists of:

* 1 principal
* 1 accountant
* 3 floor directors
* 20 teachers
* 2 counselors

## Staff Properties

All the employees share the following information:

* first_name
* last_name
* phone_number
* address
* personal_email
* role (principal, accountant, floor director, teacher, counselor)
* schoolida_email (*first_name.last_name*@schoolida.com)
* base_salary (in LBP)
* bank_info
  * bank_IBAN
  * bank_name
  * bank_branch

### Special Properties

#### floor director

* floor_number (1, 2, or 3)

#### teacher

* floors_covered (could be covering more than 1 floor)
* classes_taught (could be teaching more than 1 class)
* subject
* employment_type (part-time or full-time)

> part-time teachers
>
> * hourly_rate (LBP per hour)
> * monthly_hours (number of hours taught monthly)

#### counselor

* office_days
* office_hours (might vary for each office day)

## Permissions

i.e. what employees can see about other employees

### general permissions (view only)

*what any employee sees about all other employees* 

* first_name
* last_name
* role
* schoolida_email
* teacher specific info
  * floors_covered
  * classes_taught
  * subject
* counselor specific info

### Special permissions

#### Principal (with edit access)

* phone_number
* personal_email

#### Floor director (with edit access)

same as principal but only for teachers at their floor

#### Accountant (with create and edit access)

*everything:* the accountant is responsible for filling in all the information

## Functionalities

### Students

the principal should be able to create/edit/delete students

##### properties

* students 
* first_name
* last_name
* mother_name
* father_name
* schoolida_email (*first_name.last_name*@schoolida.com)

#### batch upload

Schoolida has a large number of studnets. It's difficult for the principal to fill a form and add students. Therefore, the principal should be able to upload a csv sheet with needed information (see student properties above) to add students

### Floors

the principal can assign floor directors to floors

### Classes

* the principal can create/edit/delete classes and assign them to floors, teachers, and students
* the floor directors can edit classes assigned to their floors
* teachers can view students in each class
* students can view classes they are assigned to

##### class properties

* floor_number (1, 2, or 3)
* teachers
* students

### Emails

- Principal can send email to all staff and/or all students
- Floor director can send email to all teachers and/or all students of assigned floor
- Teacher can send emails to all students per class
- Accountant can send emails to all staff

### Assignments

teachers should be able to create/edit/delete assignments per class
students should be able to view/solve assigments per class

#### assignment properties

* Problems (1 or more)
  * problem_type (multiple choice or open)
  * problem_question
  * problem_answer
* file upload (1 or more)
* deadline
* grade

#### assignment lifecycle

at every stage, the assigment has a status that defines the permissions on it.

1- status: **teacher_draft**

* only the teacher can view the assignment
* teacher can change status to **teacher_draft** and come back later
* teacher can change status to **sent to students**

2- status: **sent to students**

* students can view assignment and fill answers
* students can change status to **student_draft** and come back later
* students can change status to **completed**
* teacher can change status to **closed**

3- status: **completed** and **closed**
* only teacher and student can view assignment
* teacher can add grade which changes status to **graded**

4- status: **graded**
* teacher and student can view assignment

### Counseling Appointment

* students can book counseling appointment with the counselor of their choice during the working days and hours of this counselor
*the counselor can't have 2 appointments at the same time*

### Accounting

* accountant can generate sheet with all the detailed payment info for all roles (monthly or yearly)
*for the part-time teachers, salary = base_salary + hourly_rate * monthly_hours

sheet sample:

first_name | last_name | role | total_salary_per_month | total_salary_per_year | bank info...
