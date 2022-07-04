import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          key={todo.id}
        />
      ))}
    </div>
  );
}
