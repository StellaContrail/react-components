import React from "react";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const [searchParams] = useSearchParams();

  const q1 = searchParams.get("q1");
  const q2 = searchParams.get("q2");

  return (
    <>
      <h2>TodoList</h2>
      q1: {q1}
      <br />
      q2: {q2}
    </>
  );
};

export default TodoList;
