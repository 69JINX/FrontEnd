'use client'
import { getData } from '@/api/api';
import { useEffect, useState } from 'react';

function P1() {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await getData('https://jsonplaceholder.typicode.com/users/1');
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    fetchData();
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

export default P1