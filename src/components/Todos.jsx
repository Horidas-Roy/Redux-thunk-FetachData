import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";
import { useEffect } from "react";
import "./Todo.css"

const Todos = () => {
    const {isLoading,todos,error}=useSelector(state=>state)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllTodos())
  },[dispatch])
    return (
        <div>
            <h3>Todos:{todos.length}</h3>
            {isLoading && <h4>Loading...</h4>}
            {error && <h4>{error.message}</h4>}
            <section>
            {
                Array.isArray(todos) && todos.map((todo)=>(
                    <article key={todo.id}>
                       <h4>{todo.id}</h4> 
                       <h4>{todo.title}</h4> 
                    </article>
                ))
            }
            </section>
        </div>
    );
};

export default Todos;