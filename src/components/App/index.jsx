import { useState } from "react";
import Header from "components/Header";
import ExpenseForm from "components/ExpenseForm";
import Expense from "components/Expense";

function App() {
  const [expenses, setExpenses] = useState([])
  const addExpense = (expense) => {
    
    const newExpenses = [...expenses, expense]
    console.log(newExpenses)
    setExpenses(newExpenses)
  }
  return (

    <div>
      <Header />
      <ExpenseForm addExpense={addExpense} />
      
          
            
 
    </div>
  );
}

export default App;
