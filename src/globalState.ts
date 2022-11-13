import { atom, selectorFamily, useRecoilCallback, useRecoilValue } from "recoil";
import { TodoItem } from "./models/TodoItem";

const todoItemsAtom = atom<TodoItem[]>({
  key: 'todoItemsAtom',
  default: [ ],
});

const todoItemSelector = selectorFamily<TodoItem | undefined, number>({
  key: 'todoItemSelector',
  get: (id) => ({get}) => {
    const todoItems = get(todoItemsAtom);
    return todoItems.find((item) => item.id === id);
  },
});

const useFetchTodoItems = () => {
  const fetchTodoItems = useRecoilCallback(
    ({set}) => async () => {
      const response = await fetch("http://localhost:33000/todo_items");
      const todoItems: TodoItem[] = await response.json();

      set(todoItemsAtom, todoItems);
    },
  );
  return {
    fetchTodoItems
  };
}

export const globalState = {
  useFetchTodoItems,
  useTodoItems: () => useRecoilValue(todoItemsAtom),
  useTodoItem: (id: number) => useRecoilValue(todoItemSelector(id)),
}

