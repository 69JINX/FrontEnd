// import React, { Suspense } from 'react'

// const Comp1 = async () => {
//     const promise = await fetch('https://official-joke-api.appspot.com/random_joke')
//     const data = await promise.json();
//     console.log('this is the data==>', data);

//     return (
//         <div>
//             <div>{data?.setup}</div>
//             <div>{data?.punchline}</div>
//         </div>
//     )
// }

// function App() {
//     return (
//         <Suspense fallback={<div>...Loading</div>}>
//             <Comp1 />
//         </Suspense>
//     )
// }

// export default App



import { Suspense } from "react"
import Comp1 from "./Comp1"


function App() {
    return (
        <Suspense fallback={<div>...Loading</div>}>
            <Comp1 />
        </Suspense>
    )
}

export default App