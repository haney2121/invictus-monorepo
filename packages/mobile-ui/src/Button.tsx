// packages/mobile-ui/src/Button.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const Button = ({ label }: { label: string }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#4f46e5',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    }}>
    <Text style={{ color: 'white', fontWeight: 'bold' }}>{label}</Text>
  </TouchableOpacity>
);
