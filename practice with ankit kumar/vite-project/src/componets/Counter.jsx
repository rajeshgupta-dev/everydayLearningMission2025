import React from 'react'
import store from '../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { INC , DEC } from '../redux/sliceCounter';

const Counter = () => {
  const  count  = useSelector(store => store.counter.count);
  const disptach = useDispatch();
  console.log(count)
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>disptach(INC())}>INC</button>
      <button onClick={()=>disptach(DEC())}>DEC</button>
    </div>
  )
}

export default Counter