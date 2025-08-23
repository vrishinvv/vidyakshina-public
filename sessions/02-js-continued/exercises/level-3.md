

## 📕 Level 3: Employee Salary Management

### Problem Statement
Create a system to manage employee salaries with:
1. Multiple departments
2. Salary calculations with allowances
3. Department-wise reports
4. Salary statistics

### Initial Data Structure
```javascript
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

// Employee structure
const employeeExample = {
  id: "EMP001",
  name: "Amit Kumar",
  department: "engineering",
  baseSalary: 50000,
  allowances: {
    hra: 15000,    // House Rent Allowance
    ta: 5000,      // Travel Allowance
    da: 10000      // Dearness Allowance
  },
  deductions: {
    pf: 6000,      // Provident Fund
    tax: 5000      // Income Tax
  }
};
```

### Program Menu
```
=== EMPLOYEE MANAGEMENT SYSTEM ===
1. Add Employee
2. View Employee
3. Update Salary
4. Department Report
5. Company Statistics
6. Export Data
7. Exit

Choose option: 1

Enter employee details:
ID: EMP001
Name: Amit Kumar
Department (engineering/sales/hr): engineering
Base Salary: 50000
HRA: 15000
TA: 5000
DA: 10000
PF: 6000
Tax: 5000

Employee added successfully!
Gross Salary: ₹80000
Net Salary: ₹69000
```

### Functions to Implement
1. **Employee Management**
   - `createEmployee(details)` - Creates employee object
   - `calculateGrossSalary(employee)` - Base + all allowances
   - `calculateNetSalary(employee)` - Gross - all deductions
   - `addEmployee(employee)` - Adds to correct department

2. **Department Functions**
   - `getDepartmentEmployees(deptName)` - Returns array of employees
   - `getDepartmentTotalSalary(deptName)` - Sum of all net salaries
   - `getDepartmentAverageSalary(deptName)` - Average net salary

3. **Reports and Statistics**
   - `generateDepartmentReport(deptName)` - Shows all employees with salaries
   - `getCompanyStatistics()` - Total employees, total salary, highest/lowest paid
   - `findHighestPaidEmployee()` - Returns employee with highest net salary
   - `exportToJSON()` - Saves all data as JSON string

### Sample Department Report
```
=== ENGINEERING DEPARTMENT REPORT ===
Total Employees: 3
Total Salary Expense: ₹207000
Average Salary: ₹69000

Employees:
1. Amit Kumar (EMP001)
   Gross: ₹80000 | Net: ₹69000
   
2. Priya Sharma (EMP002)
   Gross: ₹75000 | Net: ₹64000

3. Rahul Singh (EMP003)
   Gross: ₹85000 | Net: ₹74000
```

### Advanced Features to Include
- Validate department names
- Check for duplicate employee IDs
- Update employee salary with percentage increase
- Search employee by name or ID
- Sort employees by salary
- Calculate tax based on salary slabs
- Bonus calculation based on performance

### Data Persistence
- Save all data to JSON file
- Load data from JSON file on startup
- Handle errors when reading/writing files