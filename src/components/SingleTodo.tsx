import React, { useEffect, useRef, useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

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

  function handleEdit(e: React.FormEvent, id: number) {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className='flex max-w-full gap-2 px-4 py-2 my-4 border-2 rounded-sm border-neutral-900'
    >
      {edit ? (
        <input
          ref={inputRef}
          className='px-2 rounded-sm bg-zinc-200'
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className='w-full text-green-200'>{todo.todo}</s>
      ) : (
        <span className='w-full font-bold'>{todo.todo}</span>
      )}

      <div className='flex items-center justify-end gap-4 ml-8'>
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
          className='hover:text-yellow-200'
        >
          <RiEditFill />
        </span>
        <span
          onClick={() => {
            handleDelete(todo.id);
          }}
          className='hover:text-rose-300'
        >
          <RiDeleteBin2Fill />
        </span>
        <span
          onClick={() => {
            handleDone(todo.id);
          }}
          className='hover:text-green-200'
        >
          <RiCheckboxCircleFill />
        </span>
      </div>
    </form>
  );
}
