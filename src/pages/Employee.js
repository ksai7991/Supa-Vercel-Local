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

export default function Employees() {
  return (
    <div>
      <h1>Env Test</h1>
      <p>URL: {String(process.env.REACT_APP_SUPABASE_URL)}</p>
      <p>KEY EXISTS: {String(!!process.env.REACT_APP_SUPABASE_ANON_KEY)}</p>
    </div>
  );
}

