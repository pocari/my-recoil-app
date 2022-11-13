import { atom, selector, selectorFamily, useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { TodoItem } from "./models/TodoItem";

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length
  },
});

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
  useText: () => useRecoilState(textState),
  useTextCount: () => useRecoilValue(charCountState),
  useFetchTodoItems,
  useTodoItems: () => useRecoilValue(todoItemsAtom),
  useTodoItem: (id: number) => useRecoilValue(todoItemSelector(id)),
}

