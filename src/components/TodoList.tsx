// https://emotion.sh/docs/css-prop#jsx-pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { globalState } from '../globalState';
import { TodoItemComponent } from "./TodoItemComponent";

export const TodoList: React.FC = () => {
  const { fetchTodoItems } = globalState.useFetchTodoItems();
  const todoItems = globalState.useTodoItems();

  useEffect(() => {
    fetchTodoItems();
  }, []);

  return (
    <div css={divStyle}>
    { todoItems && todoItems.map((item) => <TodoItemComponent key={item.id} todoItem={item}/>) }
    </div>
  );
};

const divStyle = css`
  margin: 20px;
`
