import React, { useEffect } from 'react';

const Employees = () => {
  useEffect(() => {
    console.log('Environment Variables:', process.env);
    console.log('REACT_APP_SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL);
    console.log('REACT_APP_SUPABASE_ANON_KEY:', process.env.REACT_APP_SUPABASE_ANON_KEY);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Environment Variables</h2>
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h3>REACT_APP_SUPABASE_URL</h3>
        <p><strong>Value:</strong> {process.env.REACT_APP_SUPABASE_URL || 'Not set'}</p>
      </div>
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h3>REACT_APP_SUPABASE_ANON_KEY</h3>
        <p><strong>Value:</strong> {process.env.REACT_APP_SUPABASE_ANON_KEY ? '***' : 'Not set'}</p>
      </div>
      <h3>All Environment Variables:</h3>
      <pre>
        {JSON.stringify(process.env, null, 2)}
      </pre>
    </div>
  );
};

export default Employees;
