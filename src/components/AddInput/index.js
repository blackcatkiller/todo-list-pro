import React from 'react'
import { useRef } from 'react';
import './index.scss'

function AddInput(props) {
    const { isInputShow, addItem } = props,
        inputRef = useRef();

    const submitValue = () => {
        const InputValue = inputRef.current.value.trim();
        
        if (InputValue === '') {
            return;
        }
        addItem(InputValue);
        inputRef.current.value = '';
    }
  return (
      <>
          {isInputShow ?
              (
                  <div className="input-wrapper">
                      <input type="text" placeholder="请输入代办事项" ref={inputRef}/>
                      <button className="btn btn-primary" onClick={submitValue}>增加</button>
                  </div>
              ):''
          }
      </>
  )
}

export default AddInput