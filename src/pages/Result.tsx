import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const [result, setResult] = useState(0);
  const [judgment, setJudgment] = useState("");

  useEffect(() => {
    const user: string | null = localStorage.getItem("user");
    if (!user) navigate("/");
    const correctAnswers: number[] = location.state.correctAnswers;
    const givenAnswers: number[] = location.state.givenAnswers;
    const tmp: number = correctAnswers.reduce(
      (acc, el, idx) => (givenAnswers[idx] === el ? 1 + acc : acc),
      0,
    );
    setResult(tmp);
    if (tmp >= 0 && tmp <= 3)
      setJudgment(
        "BASIC: You have begun your journey to better understand climate change. Keep informing yourself and you will soon see improvements!"
      );
    if (tmp >= 4 && tmp <= 7)
      setJudgment(
        "INTERMEDIATE: You have a basic understanding of climate change, but there is still room to go deeper. Keep exploring and learning!"
      );
    if (tmp == 8 || tmp == 9)
      setJudgment(
        "EXPERT: You have a good understanding of climate change issues. You are on your way to becoming an expert!"
      );
    if (tmp === 10)
      setJudgment(
        "MASTER: Congratulations! You have excellent knowledge about climate change. Your commitment to the environment is evident and inspiring!"
      );
  }, []);

  const handleRerun = () => {
    navigate("/");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {localStorage.getItem("user")} your result is... {result}
      </h1>
      <p style={{ textAlign: "center", fontSize: "24px" }}>{judgment}</p>
      <button className="submit-btn" onClick={handleRerun}>
        RERUN THE TEST
      </button>
    </>
  );
}
