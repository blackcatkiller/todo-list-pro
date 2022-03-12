
import './App.css';
import { useState, useCallback, useEffect } from 'react';

import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModel'
import EditModal from './components/Modal/EditModal'
import EmptyTip from './components/EmptyTip'

function App() {

  const [isInputShow, setInputShow] = useState(false),
    [todoList, setTodoList] = useState([]),
    [isShowCheckModal, setShowCheckModal] = useState(false),
    [currentData, setCurrentData] = useState({}),
    [isShowEditModal,setShowEditModal] =useState(false);

  const addItem = useCallback((value) => {

    // console.log(value);

    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false
    }
    setTodoList((todoList) => [...todoList, dataItem])
    setInputShow(false);
  }, [])

  const openCheckModal = useCallback((id) => {
    setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
    setShowCheckModal(true);
  },[todoList])
  
  const openEditModal = useCallback((id) => {
    setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
    setShowEditModal(true);
  })

  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) => 
      todoList.map((item) => {
        if (item.id === id) {
          item = newData;
        }
        return item;
      })
    )
    setShowEditModal(false);
  },[])
  
  const completedItem =useCallback( (id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    )
  }, [])
  
  const delItem = useCallback((id) => {
    setTodoList((todoList) =>
      todoList.filter((item) =>
        item.id !== id
      )
    )
  },[])

  return (
    <div className="App">
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setShowCheckModal(false)}
        data={currentData}
      ></CheckModal>
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      ></EditModal>
      <MyHeader openInput={()=>setInputShow(!isInputShow)}></MyHeader>
      <AddInput isInputShow={isInputShow} addItem={addItem}></AddInput>
      {
        !todoList||todoList.length===0?
          <EmptyTip />
          :
          <ul className="todo-list">
        {
          todoList.map((item, index) => {
            return(
              <TodoItem
                data={item}
                key={index}
                openCheckModal={openCheckModal}
                openEditModal={openEditModal}
                completedItem={completedItem}
                delItem={delItem}
              ></TodoItem>
            )
          })
        }
      </ul>
      }
      
    </div>
  );
}

export default App;
