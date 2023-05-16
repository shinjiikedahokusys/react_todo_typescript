import React from "react";

export const CompleteTodos = (props: {
  todos: string[];
  onClickBack: (index: number) => void;
  onClickClear: () => void;
}) => {
  const { todos, onClickBack, onClickClear } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <button className="clear-button" onClick={() => onClickClear()} key={0}>
          完了TODOのクリア
        </button>
        <ul>
          {todos.map((todo: string, index: number) => {
            return (
              <li className="list-row" key={index}>
                <div>
                  <span>{todo}</span>
                  <button
                    className="back-button"
                    onClick={() => onClickBack(index)}
                  >
                    戻す
                    {typeof onClickBack}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
