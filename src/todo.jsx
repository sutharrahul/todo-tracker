import { nanoid } from "nanoid";
import { todoStore } from "./todo.store";
import { useState } from "react";

export default function Todo() {
  const { addTodo, todolist, deleteTodo } = todoStore();
  const [todoText, setTodoText] = useState("");
  const addTodoHandler = () => {
    if (todoText == "") return;
    const newTodo = {
      task: todoText,
      id: nanoid(),
    };
    setTodoText("");
    addTodo(newTodo);
  };
  console.log(todolist);
  return (
    // <Space style={{
    //   justifyContent :"center"
    // }}>
    //   <Card
    //     title="Todo App"
    //     style={{
    //       width: 800,
    //     }}
    //   >
    //     <Space.Compact
    //       style={{
    //         width: "100%",
    //       }}
    //     >
    //       <Input
    //         placeholder="Enter Todo..."
    //         value={todoText}
    //         type="text"
    //         onChange={(e) => setTodoText(e.target.value)}
    //       />
    //       <Button type="primary" onClick={addTodoHandler}>
    //         Add Todo
    //       </Button>
    //     </Space.Compact>

    //     <div>
    //       {todolist.map((todo1) => (
    //         <Card>
    //           <span>{todo1.task}</span>
    //           <DeleteTwoTone
    //             onClick={() => deleteTodo(todo1.id)}
    //             twoToneColor="red"
    //           />
    //         </Card>
    //       ))}
    //     </div>
    //   </Card>
    // </Space>
    <div className="px-10 py-10">
      <h1 className="flex justify-center text-[3rem] font-semibold">Todo List</h1>
      <div className="flex justify-between items-center">
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          placeholder="Enter Todo..."
          value={todoText}
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-lg ml-[5px]"
          onClick={addTodoHandler}
        >
          Add
        </button>
      </div>
      <div>
        <div>
          {todolist.map((todo1) => (
            <div className="flex justify-between mt-[5px] mb-[5px] border-2 border-stone-700 rounded mt-[10px] px-[5px] py-[10px]">
              <span className="flex items-center text-white text-[1.5rem] px-[5px]">{todo1.task}</span>
              <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
              onClick={() => deleteTodo(todo1.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
