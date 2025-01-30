import React, { memo } from 'react'

const Component2 = memo(({ value }) => {
    console.log('Component2 Rendered');
    return (
        <>
            <div style={{ margin: '30px' }}>
                <div style={{ fontSize: '20px' }}><u>Component2</u> </div>
                <div>{value}</div>
                <div>
                    console.log('Component2 Rendered') is running only first time when the page loaded<br />
                    memo causes re-render only if there are changes in the props of the Component2 and is not re-rendering even though the parent component is re-rendering<br />
                    This improves overall performance of App by only re-rendering the component when dependency data(props) changes
                </div >
            </div>
        </>
    )
});

export default Component2