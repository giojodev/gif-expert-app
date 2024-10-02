import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import './styles.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <React.StrictMode>
      <GifExpertApp />
    </React.StrictMode>
    ,
  </MantineProvider>
);
