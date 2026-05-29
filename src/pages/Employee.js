import React from 'react';

export default function Employees() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Env Test</h1>

      <p>
        <strong>REACT_APP_SUPABASE_URL:</strong>{' '}
        {String(process.env.REACT_APP_SUPABASE_URL)}
      </p>

      <p>
        <strong>REACT_APP_SUPABASE_ANON_KEY exists:</strong>{' '}
        {String(!!process.env.REACT_APP_SUPABASE_ANON_KEY)}
      </p>

      <h2>All Environment Variables</h2>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
    </div>
  );
}
