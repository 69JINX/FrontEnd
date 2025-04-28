'use client'

function App() {

    let cache = {};

    function getData(url) { // with caching promise
        if (!cache[url]) {
            cache[url] = fetch(url).then(res => res.json());
        }
        return cache[url];
    }
    function getData1(url) { // without caching promise. Normal Fetch
        const promise = fetch(url).then(res => res.json())
        return promise;
    }

    const fetchData = async (url) => {
        const data = await getData(url);
        // const data = await getData1(url);
        console.log(data);
    }

    const callAPIs = () => {
        fetchData('https://jsonplaceholder.typicode.com/users/1'); // imaging these calls as different Components fetching data from same API at the same time.
        fetchData('https://jsonplaceholder.typicode.com/users/1');
        fetchData('https://jsonplaceholder.typicode.com/users/1');
        fetchData('https://jsonplaceholder.typicode.com/users/1');
        fetchData('https://jsonplaceholder.typicode.com/users/1');
    }

    // if same api URL is called multiple times (can be called from different components), the promise will be cached and anytime the api hit and get result
    // it will pass the data to the rest of the fetching components. So the api only called 1 time.
    // If URL are different, api caching won't work and will work as normal.
    // For the proof, you can see in the network tab. The API only called once.

    return (<div>
        <button onClick={callAPIs} className='p-3 block my-40 cursor-pointer mx-auto border rounded-2xl'>Call APIs</button>
    </div>)
}

export default App