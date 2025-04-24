import { useState } from 'react';

export default function ChangeBoard() {
  const [kunde, setKunde] = useState('');
  const [notiz, setNotiz] = useState('');

  return (
    <main style={{ padding: 20 }}>
      <h1>📋 ChangeBoard</h1>
      <input
        type="text"
        placeholder="Kundenname"
        value={kunde}
        onChange={(e) => setKunde(e.target.value)}
        style={{ display: 'block', marginBottom: 10, width: '100%' }}
      />
      <textarea
        rows="5"
        cols="50"
        placeholder="Notiz"
        value={notiz}
        onChange={(e) => setNotiz(e.target.value)}
        style={{ width: '100%' }}
      />
      <p><strong>{kunde}</strong>: {notiz}</p>
    </main>
  );
}
