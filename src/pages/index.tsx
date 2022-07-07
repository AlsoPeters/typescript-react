import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import InputField from '../components/InputField';
import TodoList from '../components/TodoList';
import { Todo } from '../model';
import Mastiff from '../../public/Mastiff.svg';

const Home: NextPage = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }

  console.log(todos);

  return (
    <>
      <Head>
        <title>Taskiff</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/Mastiff.png' />
      </Head>

      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <div className='w-40'>
          <Mastiff />
        </div>
        <p className='text-6xl font-bold'>Taskiff</p>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default Home;
