import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';


const ReduxCounter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button 
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}                    
                >
                    Increment
                </button>
                <span className='flex justify-center'>{count}</span>
                <button
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default ReduxCounter