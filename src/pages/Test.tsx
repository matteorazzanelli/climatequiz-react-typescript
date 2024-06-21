import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const navigate = useNavigate();

  const [testItems, setItems] = useState([
    {
      question: "What is the main cause of global warming?",
      answers:[
        "Deforestation.",
        "Water pollution.",
        "The overuse of fertilizer",
        "The emission of greenhouse gases."
      ],
      correctIndex: 3,
      checked: -1,
    },
    {
      question: "What is the greenhouse effect?",
      answers: [
        "A type of air pollution.",
        "The warming of the earth's surface caused by greenhouse gases.",
        "A phenomenon that causes global cooling",
        "The depletion of the ozone layer."
      ],
      correctIndex: 1,
      checked: -1,
    },
    {
      question: "Which greenhouse gas contributes most to climate change?",
      answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      correctIndex: 2,
      checked: -1,
    },
    {
      question: "What is meant by 'carbon footprint'?",
      answers: [
        "The amount of carbon in the soil.",
        "The mark left by fossil fuels.",
        "The total amount of greenhouse gases emitted by an individual, organization or product.",
        "A measure of forest biodiversity."
      ],
      correctIndex: 2,
      checked: -1,
    },
    {
      question: "Which of the following is an effect of climate change?",
      answers: [
        "Increased snowfall.",
        "Decreased sea level",
        "Decreased biodiversity.",
        "Improved air quality."
      ],
      correctIndex: 2,
      checked: -1,
    },
    {
      question:
        "How can trees help fight climate change?",
      answers: [
        "By absorbing carbon dioxide.",
        "By releasing oxygen at night.",
        "By providing shade for cities.",
        "By creating artificial rain."
      ],
      correctIndex: 0,
      checked: -1,
    },
    {
      question: "What is the Paris Climate Agreement?",
      answers: [
        "A treaty to protect endangered species.",
        "An international agreement to reduce the use of plastics.",
        "A global pact to limit global average temperature rise.",
        "An annual conference on sustainable tourism."
      ],
      correctIndex: 2,
      checked: -1,
    },
    {
      question:
        "What is one of the most effective ways to reduce one's carbon footprint?",
      answers: [
        "Travel more by air.",
        "Increase meat consumption.",
        "Use renewable energy.",
        "Buy more plastic products."
      ],
      correctIndex: 2,
      checked: -1,
    },
    {
      question: "What does sustainability mean?",
      answers: [
        "Developing in a way that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
        "Increasing industrial production.",
        "Building more urban infrastructure.",
        "Reduce the number of protected species."
      ],
      correctIndex: 0,
      checked: -1,
    },
    {
      question:
        "Which technology is considered a renewable energy solution?",
      answers: [
        "Coal.",
        "Solar energy.",
        "Oil.",
        "Natural gas."
      ],
      correctIndex: 1,
      checked: -1,
    },
  ]);
  const [error, setError] = useState("");

  const handleChange = (question: number, answer: number) => {
    console.log(question, answer);
    setItems(
      testItems.map((item, index) => {
        return index === question ? { ...item, checked: answer } : item;
      }),
    );
  };

  const handleSubmit = () => {
    const correctAnswers: number[] = testItems.map((it) => it.correctIndex);
    const givenAnswers: number[] = testItems.map((it) => it.checked);
    const tmpError: string = givenAnswers.includes(-1)
      ? "Answer all questions first"
      : "";
    setError(tmpError);
    if (!tmpError) {
      navigate("/result", {
        state: {
          correctAnswers: correctAnswers,
          givenAnswers: givenAnswers,
        },
      });
    }
  };

  useEffect(() => {
    const user: string | null = localStorage.getItem("user");
    if (!user) navigate("/");
  }, []);

  return (
    <>
      <h1>Test</h1>
      {testItems.map((item, index) => {
        return (
          <Question
            key={index}
            data={{
              id: index,
              question: item.question,
              answers: item.answers.map((it, idx) => {
                return {
                  id: idx,
                  description: it,
                  checked: item.checked === idx,
                };
              }),
              correctIndex: item.correctIndex,
            }}
            handleChange={(question: number, answer: number) =>
              handleChange(question, answer)
            }
          />
        );
      })}
      {error && <span className="error-msg">{error}</span>}
      <button className="submit-btn" onClick={handleSubmit}>
        SHOW RESULTS
      </button>
    </>
  );
}
