// apps/expo-mobile/App.tsx
import React from 'react';
import { greet } from '@invictus/utils';
import { Button } from '@invictus/mobile-ui';

export default function App() {
  console.log(greet('Justin'));
  return <Button label='Tap Me!' />;
}
