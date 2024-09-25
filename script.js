// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data from user input
const collectEmployees = function() {
  let employees = [];

  // Example: Collecting employee details using prompt (You can modify this with form inputs)
  let numberOfEmployees = parseInt(prompt("How many employees do you want to add?"), 10);

  for (let i = 0; i < numberOfEmployees; i++) {
    let firstName = prompt(`Enter the first name of employee ${i + 1}`);
    let lastName = prompt(`Enter the last name of employee ${i + 1}`);
    let salary = parseFloat(prompt(`Enter the salary of employee ${i + 1}`));

    // Create an employee object and push to the array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length || 0;

  // Log the average salary to console or display on the page
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
  alert(`The average salary is: $${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  // Log the random employee to console or display on the page
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  alert(`Randomly selected employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function() {
  const employees = collectEmployees();

  if (employees.length > 0) {
    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function(a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  } else {
    alert('No employees added.');
  }
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
