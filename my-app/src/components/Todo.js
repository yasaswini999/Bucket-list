import React, { useState } from 'react'
import './Todo.css'
import ShowTodo from './ShowTodo'

function Todo() {
     const [task , setTask ] = useState("Add your wish")
     const [data, setData] = useState([])
     const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    //store task
    const submitHandler = (e) => {
        e.preventDefault(); // in order not to loose data by preventing default form property
        const newData = task;
        setData([...data, newData])

        setTask('')
    }
    //remove task
    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }

  return (
    <div className="main">

<div className="container">
      <div className="row justify-content-center align-items-center main-row">
      <div className="col shadow main-col bg-white">
                    <div className="row bg-dark text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Fill your Bucket List</h4>
                        </div>
                    </div>
     
      <form onSubmit={submitHandler}>
                       <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler}  />
                            </div>
                            <button type="submit" className="btn btn-dark mb-2 ml-2 col-3">Create</button>
                        </div>

      </form>

        {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            onSelcet={deleteItem}
                        />
                    })}
      </div>
      </div>
   </div>
        
    </div>
   
  )
}

export default Todo