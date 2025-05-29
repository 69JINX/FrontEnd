'use client'
import { decrement, generateRandomNumber, increment, incrementByAmount } from '@/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const count = useSelector(state => state.products.value);
  const dispatch = useDispatch();

  return (
    <div
    >
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div className='flex gap-3 [&>button]:p-3 [&>button]:border [&>button]:rounded-2xl'>
        <button className='bg-green-400' onClick={() => dispatch(increment())}>Plus</button>
        <button className='bg-red-400' onClick={() => dispatch(decrement())}>Minus</button>
        <button className='bg-yellow-400' onClick={() => dispatch(incrementByAmount(5))}>Plus by 5</button>
        <button className='bg-blue-400' onClick={() => dispatch(generateRandomNumber())}>Generate Random</button>
      </div>
    </div>
  );
}

export default App