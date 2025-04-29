'use client'
import { getData1 } from '@/api/api';
import { useEffect, useState } from 'react';

function C4() {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await getData1('https://jsonplaceholder.typicode.com/users/1');
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    fetchData();
    return () => setData(null)
  }, [])

  return (
    <div>{
      data ?
        <pre>
          {JSON.stringify(data.company, null, 2)}
        </pre>
        : <>Loading...</>
    }</div>
  )
}

export default C4