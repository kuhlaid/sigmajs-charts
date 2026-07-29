// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async () => {
    setStatus('Sending...');
    
    try {
      const response = await fetch('/api/sigma-chart-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "token": "xxx",
            "user": "xxx",
            "message": "Check alarm logs."
        }),
      });

      const result = await response.json(); // here we need to know what the format of the JSON should look like
      
      if (response.ok) {
        setStatus(`Success: Response.status=${response.status} and result.status=${result.token}`);
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus('Network error occurred.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Next.js Internal POST Request</h1>
      <button onClick={handleSubmit}>Send POST Request</button>
      <p>Status: {status}</p>
    </div>
  );
}
