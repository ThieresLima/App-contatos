import React from 'react';

import { AuthProvider } from './Auth';
import { UserContactProvider } from './Contact';

const Provider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserContactProvider>
      {children}
    </UserContactProvider>
  </AuthProvider>
);

export default Provider;
