// apps/react-web/src/App.tsx
import React from 'react';
import { greet } from '@invictus/utils';
import { Button } from '@invictus/ui';

export default function App() {
  console.log(greet('Justin'));
  return <Button label='Click Me!' />;
}
