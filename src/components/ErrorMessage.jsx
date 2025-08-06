import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null; 
  }

  return (
    <div style={{
        color: '#D8000C',
        backgroundColor: '#FFBABA',
        border: '1px solid #D8000C',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px 0'
    }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;