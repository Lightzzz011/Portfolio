// src/CopyWrite/Copywrite.tsx
import React from 'react';

const Copywrite: React.FC = () => {
  return (
    <footer className="text-center text-sm text-gray-500 py-4">
      © {new Date().getFullYear()} Sai Srinivas
    </footer>
  );
};

export default Copywrite;
