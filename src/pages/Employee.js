import React, { useEffect } from 'react';

const Employees = () => {
  useEffect(() => {
    console.log('Environment Variables:', process.env);
    console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Environment Variables</h2>
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h3>NEXT_PUBLIC_SUPABASE_URL</h3>
        <p><strong>Value:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL || 'Not set'}</p>
      </div>
      <h3>All Environment Variables:</h3>
      <pre>
        {JSON.stringify(process.env, null, 2)}
      </pre>
    </div>
  );
};

export default Employees;
