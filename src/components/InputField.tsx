import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputField({ todo, setTodo, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e), inputRef.current?.blur;
      }}
      className='relative flex'
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='w-full px-2 py-1 border-2 rounded-sm border-neutral-800'
        type='input'
        placeholder='Enter a task'
      />
      <button className='absolute right-0 px-4 py-1 text-lg transition-all rounded-sm hover:bg-neutral-600 w-max bg-neutral-800 text-neutral-100'>
        Add
      </button>
    </form>
  );
}
