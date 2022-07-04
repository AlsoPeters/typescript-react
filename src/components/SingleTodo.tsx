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
  return (
    <form className='flex max-w-full gap-2 px-4 py-2 my-4 border-2 rounded-sm border-neutral-900'>
      <span className='w-full font-bold'>{todo.todo}</span>
      <div className='flex items-center justify-end gap-4 ml-8'>
        <span>
          <RiEditFill />
        </span>
        <span>
          <RiDeleteBin2Fill />
        </span>
        <span>
          <RiCheckboxCircleFill />
        </span>
      </div>
    </form>
  );
}
