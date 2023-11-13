import React from 'react';
import { useSelector } from 'react-redux';
import { TodoDeleteAlert } from './TodoDeleteAlert';
import { TodoEditAlert } from './TodoEditAlert';


const TodoList = () => {
    const todoItem = useSelector((state)=>state.todo.value)
    return (
        <div className='container-fluid'>
             <div className='row'>
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                     
                        <tbody>
                        {
                            todoItem.map((item,i)=>{
                                return(
                                    <tr key={i.toString()}>
                                        <tbody>{i}</tbody>
                                        <td>{item}</td>
                                        <td><button onClick={()=>{TodoEditAlert(i, item)}} className='btn btn-sm btn-dark'>Edit</button></td>
                                        <td><button onClick={()=>{TodoDeleteAlert(i)}} className='btn btn-sm btn-danger'>Remove</button></td>
                                     </tr>
                                )
                            })
                        }

                        


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;