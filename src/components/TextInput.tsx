import { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label='Text Input'
      />
      <p>Enterd Text: {text}</p>
    </div>
  );
}

export default TextInput;
