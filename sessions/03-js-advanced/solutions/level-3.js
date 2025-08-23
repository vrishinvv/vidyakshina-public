/* =================================================
   LEVEL 3: Employee Salary Management
   ================================================= */

const prompt = require('prompt-sync')();
const _ = require('lodash');

// Company data structure
const company = {
  name: "Tech Solutions Ltd",
  departments: {
    engineering: {
      name: "Engineering",
      employees: []
    },
    sales: {
      name: "Sales",
      employees: []
    },
    hr: {
      name: "Human Resources",
      employees: []
    }
  }
};

// Function to create employee object
function createEmployee(details) {
  const { id, name, department, baseSalary, hra, ta, da, pf, tax } = details;
  
  return {
    id: id,
    name: name,
    department: department,
    baseSalary: baseSalary,
    allowances: {
      hra: hra,    // House Rent Allowance
      ta: ta,      // Travel Allowance
      da: da       // Dearness Allowance
    },
    deductions: {
      pf: pf,      // Provident Fund
      tax: tax     // Income Tax
    }
  };
}

// Function to calculate gross salary
function calculateGrossSalary(employee) {
  const { baseSalary, allowances } = employee;
  const totalAllowances = allowances.hra + allowances.ta + allowances.da;
  return baseSalary + totalAllowances;
}

// Function to calculate net salary
function calculateNetSalary(employee) {
  const grossSalary = calculateGrossSalary(employee);
  const { deductions } = employee;
  const totalDeductions = deductions.pf + deductions.tax;
  return grossSalary - totalDeductions;
}

// Function to add employee to department
function addEmployee(employee) {
  const dept = company.departments[employee.department];
  
  if (!dept) {
    console.log("Invalid department!");
    return false;
  }
  
  // Check for duplicate ID
  for (let i = 0; i < dept.employees.length; i++) {
    if (dept.employees[i].id === employee.id) {
      console.log("Employee ID already exists!");
      return false;
    }
  }
  
  dept.employees.push(employee);
  return true;
}

// Function to get department employees
function getDepartmentEmployees(deptName) {
  const dept = company.departments[deptName];
  return dept ? dept.employees : [];
}

// Function to calculate department total salary
function getDepartmentTotalSalary(deptName) {
  const employees = getDepartmentEmployees(deptName);
  let total = 0;
  
  for (let i = 0; i < employees.length; i++) {
    total += calculateNetSalary(employees[i]);
  }
  
  return total;
}

// Function to calculate department average salary
function getDepartmentAverageSalary(deptName) {
  const employees = getDepartmentEmployees(deptName);
  if (employees.length === 0) return 0;
  
  const total = getDepartmentTotalSalary(deptName);
  return total / employees.length;
}

// Function to generate department report
function generateDepartmentReport(deptName) {
  const dept = company.departments[deptName];
  
  if (!dept) {
    console.log("Department not found!");
    return;
  }
  
  const employees = dept.employees;
  const totalSalary = getDepartmentTotalSalary(deptName);
  const avgSalary = getDepartmentAverageSalary(deptName);
  
  console.log(`\n=== ${dept.name.toUpperCase()} DEPARTMENT REPORT ===`);
  console.log(`Total Employees: ${employees.length}`);
  console.log(`Total Salary Expense: ₹${totalSalary}`);
  console.log(`Average Salary: ₹${avgSalary.toFixed(2)}`);
  console.log("\nEmployees:");
  
  // Sort by net salary (highest first)
  const sortedEmployees = [...employees].sort((a, b) => {
    return calculateNetSalary(b) - calculateNetSalary(a);
  });
  
  for (let i = 0; i < sortedEmployees.length; i++) {
    const emp = sortedEmployees[i];
    const gross = calculateGrossSalary(emp);
    const net = calculateNetSalary(emp);
    
    console.log(`\n${i + 1}. ${emp.name} (${emp.id})`);
    console.log(`   Gross: ₹${gross} | Net: ₹${net}`);
  }
}

// Function to find highest paid employee
function findHighestPaidEmployee() {
  let highestPaid = null;
  let highestSalary = 0;
  
  // Check all departments
  for (let deptName in company.departments) {
    const employees = company.departments[deptName].employees;
    
    for (let i = 0; i < employees.length; i++) {
      const netSalary = calculateNetSalary(employees[i]);
      if (netSalary > highestSalary) {
        highestSalary = netSalary;
        highestPaid = employees[i];
      }
    }
  }
  
  return highestPaid;
}

// Function to get company statistics
function getCompanyStatistics() {
  let totalEmployees = 0;
  let totalSalaryExpense = 0;
  
  // Calculate totals
  for (let deptName in company.departments) {
    const dept = company.departments[deptName];
    totalEmployees += dept.employees.length;
    totalSalaryExpense += getDepartmentTotalSalary(deptName);
  }
  
  const highestPaid = findHighestPaidEmployee();
  
  console.log("\n=== COMPANY STATISTICS ===");
  console.log(`Company: ${company.name}`);
  console.log(`Total Employees: ${totalEmployees}`);
  console.log(`Total Salary Expense: ₹${totalSalaryExpense}`);
  
  if (highestPaid) {
    console.log(`\nHighest Paid Employee:`);
    console.log(`${highestPaid.name} (${highestPaid.department})`);
    console.log(`Net Salary: ₹${calculateNetSalary(highestPaid)}`);
  }
  
  // Department-wise breakdown
  console.log("\nDepartment Breakdown:");
  for (let deptName in company.departments) {
    const count = company.departments[deptName].employees.length;
    const total = getDepartmentTotalSalary(deptName);
    console.log(`- ${deptName}: ${count} employees, ₹${total} total`);
  }
}

// Function to export data to JSON
function exportToJSON() {
  const data = {
    company: company.name,
    exportDate: new Date().toISOString(),
    departments: {}
  };
  
  // Build export data
  for (let deptName in company.departments) {
    const dept = company.departments[deptName];
    data.departments[deptName] = {
      name: dept.name,
      employeeCount: dept.employees.length,
      totalSalary: getDepartmentTotalSalary(deptName),
      employees: dept.employees.map(emp => ({
        ...emp,
        grossSalary: calculateGrossSalary(emp),
        netSalary: calculateNetSalary(emp)
      }))
    };
  }
  
  const jsonString = JSON.stringify(data, null, 2);
  console.log("\n=== EXPORTED DATA (JSON) ===");
  console.log(jsonString);
  return jsonString;
}

// Function to view employee details
function viewEmployee(employeeId) {
  let employee = null;
  let deptName = null;
  
  // Search in all departments
  for (let dept in company.departments) {
    const employees = company.departments[dept].employees;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === employeeId) {
        employee = employees[i];
        deptName = dept;
        break;
      }
    }
    if (employee) break;
  }
  
  if (!employee) {
    console.log("Employee not found!");
    return;
  }
  
  console.log("\n=== EMPLOYEE DETAILS ===");
  console.log(`ID: ${employee.id}`);
  console.log(`Name: ${employee.name}`);
  console.log(`Department: ${deptName}`);
  console.log(`\nSalary Breakdown:`);
  console.log(`Base Salary: ₹${employee.baseSalary}`);
  console.log(`HRA: ₹${employee.allowances.hra}`);
  console.log(`TA: ₹${employee.allowances.ta}`);
  console.log(`DA: ₹${employee.allowances.da}`);
  console.log(`Gross Salary: ₹${calculateGrossSalary(employee)}`);
  console.log(`\nDeductions:`);
  console.log(`PF: ₹${employee.deductions.pf}`);
  console.log(`Tax: ₹${employee.deductions.tax}`);
  console.log(`\nNet Salary: ₹${calculateNetSalary(employee)}`);
}

// Function to handle menu option
function handleMenuOption(choice) {
  if (choice === 1) {
    console.log("\nEnter employee details:");
    const details = {
      id: prompt("ID: "),
      name: prompt("Name: "),
      department: prompt("Department (engineering/sales/hr): ").toLowerCase(),
      baseSalary: Number(prompt("Base Salary: ")),
      hra: Number(prompt("HRA: ")),
      ta: Number(prompt("TA: ")),
      da: Number(prompt("DA: ")),
      pf: Number(prompt("PF: ")),
      tax: Number(prompt("Tax: "))
    };
    
    const employee = createEmployee(details);
    if (addEmployee(employee)) {
      console.log("\nEmployee added successfully!");
      console.log(`Gross Salary: ₹${calculateGrossSalary(employee)}`);
      console.log(`Net Salary: ₹${calculateNetSalary(employee)}`);
    }
  }
  if (choice === 2) {
    const empId = prompt("Enter employee ID: ");
    viewEmployee(empId);
  }
  if (choice === 3) {
    const deptName = prompt("Enter department (engineering/sales/hr): ").toLowerCase();
    generateDepartmentReport(deptName);
  }
  if (choice === 4) {
    getCompanyStatistics();
  }
  if (choice === 5) {
    exportToJSON();
  }
  if (choice === 6) {
    console.log("\nGoodbye!");
    return false; // Signal to exit
  }
  if (choice < 1 || choice > 6) {
    console.log("\nInvalid option!");
  }
  return true; // Continue running
}

// Main program
function main() {
  console.log(`Welcome to ${company.name} Employee Management System`);
  
  let running = true;
  
  // Use for loop instead of while
  for (let sessionCount = 1; running; sessionCount++) {
    console.log("\n=== EMPLOYEE MANAGEMENT SYSTEM ===");
    console.log("1. Add Employee");
    console.log("2. View Employee");
    console.log("3. Department Report");
    console.log("4. Company Statistics");
    console.log("5. Export Data");
    console.log("6. Exit");
    
    const choice = Number(prompt("\nChoose option: "));
    
    // Handle menu option and check if should continue
    running = handleMenuOption(choice);
  }
}

// Sample data for testing
function loadSampleData() {
  const sampleEmployees = [
    {
      id: "EMP001",
      name: "Amit Kumar",
      department: "engineering",
      baseSalary: 50000,
      hra: 15000,
      ta: 5000,
      da: 10000,
      pf: 6000,
      tax: 5000
    },
    {
      id: "EMP002",
      name: "Priya Sharma",
      department: "engineering",
      baseSalary: 45000,
      hra: 13500,
      ta: 4500,
      da: 9000,
      pf: 5400,
      tax: 4000
    },
    {
      id: "EMP003",
      name: "Rahul Singh",
      department: "sales",
      baseSalary: 40000,
      hra: 12000,
      ta: 6000,
      da: 8000,
      pf: 4800,
      tax: 3000
    }
  ];
  
  console.log("Loading sample data...");
  for (let i = 0; i < sampleEmployees.length; i++) {
    const emp = createEmployee(sampleEmployees[i]);
    addEmployee(emp);
  }
  console.log("Sample data loaded!");
}

// Uncomment to load sample data
// loadSampleData();

// Run the program
main();