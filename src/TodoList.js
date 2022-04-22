import React from "react";
import Todo from "./Todo";



export default function TodoList({todos}){

    return(
    <>
        <div>
            {todos.map((ele)=><Todo todo={ele} key={ele.id}/>)}
        </div>
    </>
    )
}
