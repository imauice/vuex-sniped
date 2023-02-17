// Sample invoice data
const invoices = [  { date: "2022-02-12", amount: 100.0, status: "paid" },  { date: "2022-02-12", amount: 150.0, status: "paid" },  { date: "2022-02-13", amount: 200.0, status: "paid" },  { date: "2022-02-15", amount: 75.0, status: "outstanding" },  { date: "2022-02-16", amount: 300.0, status: "paid" },  { date: "2022-02-17", amount: 250.0, status: "outstanding" },  { date: "2022-02-18", amount: 175.0, status: "paid" }];

// Function to calculate daily income
function calculateDailyIncome(invoices) {
  // Determine date range for last week
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const firstDay = new Date(lastWeek.getFullYear(), lastWeek.getMonth(), lastWeek.getDate() - lastWeek.getDay() + 1);
  const lastDay = new Date(lastWeek.getFullYear(), lastWeek.getMonth(), lastWeek.getDate() - lastWeek.getDay() + 7);

  // Initialize array for daily income
  const dailyIncome = {};

  // Calculate total income for each day in last week
  for (let i = 0; i < invoices.length; i++) {
    const invoice = invoices[i];
    const invoiceDate = new Date(invoice.date);
    if (invoiceDate >= firstDay && invoiceDate <= lastDay && invoice.status === "paid") {
      const day = invoiceDate.toLocaleDateString();
      if (!dailyIncome[day]) {
        dailyIncome[day] = 0;
      }
      dailyIncome[day] += invoice.amount;
    }
  }

  // Return daily income
  return dailyIncome;
}

// Test the function with sample data
console.log(calculateDailyIncome(invoices));
