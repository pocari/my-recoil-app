// https://emotion.sh/docs/css-prop#jsx-pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TodoItem } from "../models/TodoItem";
type TodoProps = {
  todoItem: TodoItem;
}
export const TodoItemComponent: React.FC<TodoProps> = ({todoItem}) => {

  return (
    <div>
    a
    id: {todoItem.id} text: {todoItem.text} completed: {todoItem.completed}
    <br/>
    </div>
  );
};

const divStyle = css`
  margin: 20px;
`
