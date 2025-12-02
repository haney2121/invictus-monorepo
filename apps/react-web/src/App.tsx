import React from 'react';
import { greet } from '@invictus/utils';
import { Button } from '@invictus/ui';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello Invictus</h1>
      <p>Your Vite + React setup is working!</p>
      {greet('Justin')}
      <Button label='Test' key='1' />
    </div>
  );
}
