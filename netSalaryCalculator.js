const prompt = require("prompt-sync")();

// Function to calculate net salary
function calculateNetSalary() {
  // Prompts the user for input
  const basicSalary = Number(prompt("Enter your basic salary: "));
  const benefits = Number(prompt("Enter your benefits: "));

  // Constants for tax rates (use actual values from provided links)
  const taxRate = 0.3;
  const nhifRate = 0.05;
  const nssfRate = 0.1;

  // Calculations
  const grossSalary = basicSalary + benefits;
  const tax = grossSalary * taxRate;
  const nhifDeduction = grossSalary * nhifRate;
  const nssfDeduction = grossSalary * nssfRate;
  const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

  return {
    grossSalary,
    tax,
    nhifDeduction,
    nssfDeduction,
    netSalary,
  };
}

// Calls the function and output the results
const result = calculateNetSalary();
console.log(`Gross Salary: ${result.grossSalary}`);
console.log(`Tax: ${result.tax}`);
console.log(`NHIF Deduction: ${result.nhifDeduction}`);
console.log(`NSSF Deduction: ${result.nssfDeduction}`);
console.log(`Net Salary: ${result.netSalary}`);
