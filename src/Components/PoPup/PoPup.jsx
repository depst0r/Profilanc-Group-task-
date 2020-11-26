import React from 'react'
import Popup from 'reactjs-popup';

export const PoPup = () => (
    <Popup trigger={ <li>Вход/Выход</li>} position="absolut">
      <div>Popup content here !!</div>
    </Popup>
  );