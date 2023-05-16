import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <>
              {" "}
              <li className="list-row" key={index}>
                <div>
                  <span>{todo}</span>
                  <button
                    className="complete-button"
                    onClick={() => onClickComplete(index)}
                  >
                    完了
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onClickDelete(index)}
                  >
                    削除
                  </button>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
