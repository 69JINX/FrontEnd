import React from 'react'
const Component1 = ({value}) => {
    console.log('Component1 Rendered');
    return (
        <>
            <div style={{ margin: '30px' }}>
                <div style={{ fontSize: '20px' }}><u>Component1</u> </div>
                <div>{value}</div>
                <div>
                    console.log('Component1 Rendered') [written in Component1] running whenever any state changes in the parent component<br />
                    Component1 is re-rendering even though there are no changes happening in the Component1 <br />
                    Changes are happening in the "Parent Component" which is causing all child components to re-render
                </div >
            </div>
        </>
    )
}

export default Component1