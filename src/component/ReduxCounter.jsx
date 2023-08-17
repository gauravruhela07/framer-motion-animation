import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementAsync } from '../redux/counterSlice';


const ReduxCounter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='flex flex-row'>
                <button 
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}         
                    className='mr-4'           
                >
                    Increment
                </button>
                <span className='flex justify-center items-center'>{count}</span>
                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                    className='ml-4'
                >
                    Decrement
                </button>                
            </div>
            <button 
                className='flex items-center justify-center'
                onClick={() => dispatch(incrementAsync(count))}
            >
                    Add Async
            </button>
        </div>
    )
}

export default ReduxCounter