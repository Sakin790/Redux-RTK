import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getAllTodo from "../redux/actions/todoAction";

const Todo = () => {
  const { isLoading, error, todo } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div>
      <h2>Todos</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <section>
        {todo &&
          todo.map((item) => { // Use a different name for the array element
            return (
              <article key={item.id}>
                <h4>{item.id}</h4>
                <h4>{item.title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todo;
