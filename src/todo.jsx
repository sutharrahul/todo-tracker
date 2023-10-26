import { nanoid } from "nanoid";
import { todoStore } from "./todo.store";
import { useState } from "react";
import { Button, Input, Space, Card } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

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
    <Space>
      <Card
        title="Todo App"
        extra={<a href="#"></a>}
        style={{
          width: 800,
        }}
      >
        <Space.Compact
          style={{
            width: "100%",
          }}
        >
          <Input
            placeholder="Enter Todo..."
            value={todoText}
            type="text"
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button type="primary" onClick={addTodoHandler}>
            Add Todo
          </Button>
        </Space.Compact>

        <div>
          {todolist.map((todo1) => (
            <Card>
              <span>{todo1.task}</span>
              <DeleteTwoTone
                onClick={() => deleteTodo(todo1.id)}
                twoToneColor="red"
              />
            </Card>
          ))}
        </div>
      </Card>
    </Space>
  );
}
