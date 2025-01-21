import React, { useState, useEffect } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseCost, setExpenseCost] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  // Calculate total cost whenever expenses change
  useEffect(() => {
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.cost), 0);
    setTotalCost(total);
  }, [expenses]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (expenseName.trim() !== '' && expenseCost.trim() !== '') {
      const newExpense = {
        id: expenses.length + 1,
        name: expenseName,
        cost: parseFloat(expenseCost)
      };
      setExpenses([...expenses, newExpense]);
      setExpenseName('');
      setExpenseCost('');
    }
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form onSubmit={handleAddExpense}>
        <label>
          Expense Name:
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            required
          />
        </label>
        <label>
          Expense Cost:
          <input
            type="number"
            value={expenseCost}
            onChange={(e) => setExpenseCost(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      <div>
        <h3>Expenses:</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Cost ($)</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.name}</td>
                <td>{expense.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseTracker;
