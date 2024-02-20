// Importing data from other components
import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from "./SearchBar";
import transactionsData from './data'; // Import the data file
import './App.css';

// Main component for the application
const App = () => {
  // this is to store transactions and search terms
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions from the server when the component mounts
  useEffect(() => {
    setTransactions(transactionsData); // Set transactions from the imported data
  }, []);

  // Function to handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    // Update the transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // components will be loaded in the return of the function
  return (
    <div id='parentdiv'>
      <div id='Siteheader'><h1>Flat ironBank</h1></div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

// Export the main App component to the index.js file
export default App;
