// Importing React
import React from 'react';

// TransactionTable component for displaying transaction data
const TransactionTable = ({ transactions }) => (
  <table id='transactionTable'>
    <thead>
      {/* Table header row with column names */}
      <tr id='tablerow'>
        <th className='tablehead'>ID</th>
        <th className='tablehead'>Date</th>
        <th className='tablehead'>Description</th>
        <th className='tablehead'>Category</th>
        <th className='tablehead'>Amount</th>
      </tr>
    </thead>
    <tbody id='tablebody'>
      {/* Mapping through transactions to display data in rows */}
      {transactions.map((transaction) => (
        <tr key={transaction.id} id='datacont'>
          <td className='tabledata'>{transaction.id}</td>
          <td className='tabledata'>{transaction.date}</td>
          <td className='tabledata'>{transaction.description}</td>
          <td className='tabledata'>{transaction.category}</td>
          <td className='tabledata'>{transaction.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Export the TransactionTable component
export default TransactionTable;
