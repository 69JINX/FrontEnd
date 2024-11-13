import React, { useState } from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';

function CompHandle() {

    const [comp, setcomp] = useState(true);

    const handleComp = () => {
        setcomp(!comp);
    };

    return (
        <>
            <div>
                {comp ? <Comp1 /> : <Comp2 />}
            </div>
            <button onClick={handleComp}>Comp Swap</button>
        </>
    )
}

export default CompHandle