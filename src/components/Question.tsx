import React, { useState } from "react";

interface IQuestionProp {
  id: number;
  question: string;
  answers: { id: number; description: string; checked: boolean }[];
  correctIndex: number;
}

export default function Question({
  data,
  handleChange,
}: {
  data: IQuestionProp;
  handleChange: Function;
}) {
  return (
    <>
      <fieldset id={data.id.toString()}>
        <legend>
          Q{data.id + 1}: {data.question}
        </legend>

        <div>
          {data.answers.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  value={item.description}
                  id={item.id.toString()}
                  name={data.question}
                  checked={item.checked}
                  onChange={() => handleChange(data.id, item.id)}
                />
                {item.description}
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
}
