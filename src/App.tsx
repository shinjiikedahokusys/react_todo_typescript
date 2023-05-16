import React from "react";
import { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTodoText(event.target.value);
  const onClickAdd = () => {
    console.log("onclickAddボタン");
    // alert(todoText);
    if (todoText === "") return;
    const newTodos: string[] = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickClear = () => {
    const clear = window.confirm("完了したTODOを全て削除しますか？");
    if (clear) {
      const newCompleteTodos: string[] = [];
      setCompleteTodos(newCompleteTodos);
      console.log("クリア");
    } else {
      console.log("キャンセル");
    }
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p className="caution">
          登録できるtodoが5個までです。消化してください。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {completeTodos.length >= 10 && (
        <p className="caution">
          完了したTODが"10個"になりました。不要なTODOを削除、または戻すなどの対応をしてください。
        </p>
      )}
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
        onClickClear={onClickClear}
      />
    </>
  );
};

// export export const App
