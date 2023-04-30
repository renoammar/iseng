import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Nav from './nav.jsx';
// import './App.css';

function App() {
  const [click, setClick] = useState(false);
  let content;
  if (click) {
    content = <div className="bg-red-800 h-[24px] w-[24px]"></div>;
  } else if (!click) {
    content = <div className="bg-orange-600  h-[24px] w-[24px]"></div>;
  }
  return (
    <div className="h-screen">
      {content}
      <button
        className="p-[24px] bg-[#000] text-white rounded"
        onClick={() => {
          setClick(!click);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
