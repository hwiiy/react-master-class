import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "../Components/CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo/ >
      <ul>
      {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>

    </div>
  );
}

export default ToDoList;