'use client'
import { dataContext } from '@/context/Context';
import { useContext } from 'react';

function B3() {

  const [data] = useContext(dataContext);

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

export default B3