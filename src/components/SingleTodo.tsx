import React from 'react';
import { Todo } from '../model';
import TodoList from './TodoList';
import {
  RiEditFill,
  RiDeleteBin2Fill,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function SingleTodo({ todos, todo, setTodos }: Props) {
  function handleDone(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function handleDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <form className='flex max-w-full gap-2 px-4 py-2 my-4 border-2 rounded-sm border-neutral-900'>
      {todo.isDone ? (
        <s className='w-full text-neutral-500'>{todo.todo}</s>
      ) : (
        <span className='w-full font-bold'>{todo.todo}</span>
      )}

      <div className='flex items-center justify-end gap-4 ml-8'>
        <span className='hover:text-yellow-500'>
          <RiEditFill />
        </span>
        <span
          onClick={() => {
            handleDelete(todo.id);
          }}
          className='hover:text-red-600'
        >
          <RiDeleteBin2Fill />
        </span>
        <span
          onClick={() => {
            handleDone(todo.id);
          }}
          className='hover:text-green-500'
        >
          <RiCheckboxCircleFill />
        </span>
      </div>
    </form>
  );
}
