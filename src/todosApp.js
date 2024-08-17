import { memo } from "react";
function TodoComponent({todos , addTodo}){
    console.log("todo re-render")
    return(
    <>
    <div>
        
    <h2>My Todos</h2>
    {todos.map((todo, index) => {
      return <p key={index}>{todo}</p>;
    })}
    <button onClick={addTodo}>Add Todo</button>
  </div>
  <hr />
</>)
}
export default memo(TodoComponent)