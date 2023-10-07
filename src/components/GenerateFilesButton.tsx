import React from 'react';
import { generateFiles } from '../database/generateFiles';

const GenerateFilesButton = () => {
  return (
    <button type="button" onClick={generateFiles}>
      generuj pliki json dla serwera
    </button>
  );
};

export default GenerateFilesButton;
