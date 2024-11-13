import React, { useEffect } from 'react';

function TimerComponent() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer is running');
    }, 1000);

    // Return a cleanup function
    return () => {
      console.log('Cleanup: Timer stopped');
      clearInterval(timer); // Clean up the interval when the component unmounts
    };
  }, []); // Empty array means this runs only on mount and unmount

  return <div>Check the console for the timer logs</div>;
}

export default TimerComponent;
