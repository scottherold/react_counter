import ReactDom from 'react-dom';
import React from 'react';

// Imports Counter
import Counter from './components/Counter';

// Calls the Counter component
ReactDom.render(<Counter name="Howard" />, document.getElementById("root"));