import { useEffect, useState } from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import CompHandle from './CompHandle';




function ChildComponent() {
  useEffect(() => {
    console.log('ChildComponent mounted');

    return () => {
      console.log('ChildComponent unmounted');
    };
  }, []); // Empty dependency array means this effect only runs on mount/unmount

  return <div>Child Component is mounted</div>;
}

function App() {
  const [isMounted, setIsMounted] = useState(true);


  const toggleComponent = () => {
    setIsMounted(!isMounted); // Toggles between mounting and unmounting
  };



  return (
    <div>

      <br /><br /><hr /><br />

      <button onClick={toggleComponent}>
        {isMounted ? 'Unmount Child Component' : 'Mount Child Component'}
      </button>
      {isMounted && <ChildComponent />}
    </div>
  );
}

export default App
