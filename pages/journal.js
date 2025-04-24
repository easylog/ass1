import { useState } from 'react';

export default function Journal() {
  const [text, setText] = useState('');

  return (
    <main style={{ padding: 20 }}>
      <h1>📓 Journal</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Schreibe einen Eintrag..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%' }}
      />
      <p><strong>Vorschau:</strong></p>
      <p>{text}</p>
    </main>
  );
}
