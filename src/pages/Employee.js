import React, { useEffect } from 'react';

const Employees = () => {
  useEffect(() => {
    console.log('Environment Variables:', process.env);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Environment Variables</h2>
      <pre>
        {JSON.stringify(process.env, null, 2)}
      </pre>
    </div>
  );
};

export default Employees;
