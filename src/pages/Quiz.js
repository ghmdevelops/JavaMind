import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import allQuestionsData from "../data/questions.json";
import springQuestionsData from "../data/spring.json";
import solidQuestionsData from "../data/solid.json";
import cleanCodeData from "../data/clean-code.json";
import cleanArchData from "../data/clean-architecture.json";
import monitoracaoData from "../data/monitoracao.json";
import telemetriaData from "../data/telemetria.json";
import designPatternsData from "../data/design-patterns.json";
import interviewQuestionsData from "../data/interview.json";

import bgImage from "../img/pexels-krisof-1252890.jpg";

const categories = [
  { key: "all", label: "Todas" },
  { key: "spring", label: "Spring" },
  { key: "solid", label: "SOLID" },
  { key: "clean-code", label: "Clean Code" },
  { key: "clean-architecture", label: "Clean Architecture" },
  { key: "monitoracao", label: "Monitoração" },
  { key: "telemetria", label: "Telemetria" },
  { key: "design-patterns", label: "Design Patterns" },
  { key: "interview", label: "Perguntas de Entrevista" },
];

export default function Quiz() {
  const [category, setCategory] = useState("all");
  const [questions, setQuestions] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [history, setHistory] = useState([]);

  const getQuestionsByCategory = (cat) => {
    switch (cat) {
      case "spring":
        return springQuestionsData;
      case "solid":
        return solidQuestionsData;
      case "clean-code":
        return cleanCodeData;
      case "clean-architecture":
        return cleanArchData;
      case "monitoracao":
        return monitoracaoData;
      case "telemetria":
        return telemetriaData;
      case "design-patterns":
        return designPatternsData;
      case "interview":
        return interviewQuestionsData;
      case "all":
      default:
        return allQuestionsData;
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const loadedQuestions = getQuestionsByCategory(category);
      setQuestions(loadedQuestions);
      setLoading(false);
    }, 500);

    const saved = localStorage.getItem("quizHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, [category]);

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const pickQuestions = (num) => {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, num);
  };

  const startQuiz = () => {
    const selected = pickQuestions(numQuestions);
    setQuizQuestions(selected);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
    setStartTime(Date.now());
    setEndTime(null);
    setStarted(true);
  };

  const handleAnswer = (selected) => {
    const correct = quizQuestions[current].answer;
    const isCorrect = selected === correct;
    if (isCorrect) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      { selected, isCorrect, question: quizQuestions[current] },
    ]);

    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
      setEndTime(Date.now());
    }
  };

  useEffect(() => {
    if (showResult && endTime && quizQuestions.length > 0) {
      saveHistory(score, quizQuestions.length);
    }
  }, [showResult, endTime]);

  const saveHistory = (scoreFinal, total) => {
    const now = new Date().toISOString();
    const newEntry = { score: scoreFinal, total, date: now, category };
    const updated = [newEntry, ...history].slice(0, 5);
    setHistory(updated);
    localStorage.setItem("quizHistory", JSON.stringify(updated));
  };

  const difficultyStats = () => {
    const diffMap = {};
    answers.forEach(({ isCorrect, question }) => {
      const diff = question.difficulty || "Sem dificuldade";
      if (!diffMap[diff]) diffMap[diff] = { correct: 0, total: 0 };
      diffMap[diff].total++;
      if (isCorrect) diffMap[diff].correct++;
    });
    return diffMap;
  };

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", background: "#222" }}
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: 80, height: 80 }}
        >
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );

  const maxQuestions = Math.min(50, questions.length);
  const options = [10, 20, 30, 40, 50].filter((n) => n <= maxQuestions);

  const totalTimeSec =
    endTime && startTime ? Math.round((endTime - startTime) / 1000) : 0;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Helmet>
        <title>JavaMind | Quiz</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {!started ? (
        <div
          className="card p-5 rounded-4 shadow-lg text-center"
          style={{ maxWidth: "420px", width: "100%", color: "#343a40" }}
        >
          <h2 className="mb-4" style={{ fontWeight: "600" }}>
            Escolha a categoria
          </h2>
          <select
            className="form-select form-select-lg mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ borderRadius: "12px", padding: "12px" }}
          >
            {categories.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>

          <h2 className="mb-4" style={{ fontWeight: "600" }}>
            Escolha a quantidade de perguntas
          </h2>

          <select
            className="form-select form-select-lg mb-4"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            style={{ borderRadius: "12px", padding: "12px" }}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt} perguntas
              </option>
            ))}
          </select>

          <button
            className="btn btn-primary btn-lg w-100"
            style={{
              borderRadius: "12px",
              fontWeight: "600",
              boxShadow:
                "0 4px 14px rgba(0, 123, 255, 0.39), 0 6px 10px rgba(0, 123, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
            onClick={startQuiz}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0, 123, 255, 0.6), 0 8px 14px rgba(0, 123, 255, 0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(0, 123, 255, 0.39), 0 6px 10px rgba(0, 123, 255, 0.3)")
            }
          >
            Iniciar Quiz
          </button>
        </div>
      ) : !showResult ? (
        <div
          className="card p-5 rounded-4 shadow-lg"
          style={{
            maxWidth: "600px",
            width: "100%",
            background: "white",
            color: "#212529",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {/* Progressão visual */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
              gap: 6,
            }}
          >
            {quizQuestions.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === current ? 24 : 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: i === current ? "#0d6efd" : "#ced4da",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <h4 className="mb-3" style={{ fontWeight: "600" }}>
            Pergunta {current + 1} de {quizQuestions.length}
          </h4>

          <h5 className="mb-4">{quizQuestions[current].question}</h5>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {quizQuestions[current].options.map((opt, i) => (
              <button
                key={i}
                className="btn btn-outline-primary btn-lg"
                style={{
                  borderRadius: "12px",
                  minWidth: "140px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => handleAnswer(opt)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0d6efd")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="card p-5 rounded-4 shadow-lg"
          style={{
            maxWidth: "700px",
            width: "100%",
            background: "#e6ffe6",
            color: "#2f3136",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h2 style={{ fontWeight: "700", color: "#198754" }}>
            🎉 Quiz Finalizado! 🎉
          </h2>

          <p className="fs-5 mt-3" style={{ fontWeight: "600" }}>
            Você acertou <strong>{score}</strong> de{" "}
            <strong>{quizQuestions.length}</strong> perguntas.
          </p>

          <p className="fs-6" style={{ marginTop: -10, marginBottom: 15 }}>
            Tempo total gasto: <strong>{totalTimeSec}</strong> segundos
          </p>

          <div
            className="progress my-4"
            style={{ height: "30px", borderRadius: "15px", overflow: "hidden" }}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{
                width: `${(score / quizQuestions.length) * 100}%`,
                backgroundColor: "#198754",
                fontWeight: "700",
                fontSize: "1.2rem",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "width 0.8s ease-in-out",
              }}
              aria-valuenow={score}
              aria-valuemin="0"
              aria-valuemax={quizQuestions.length}
            >
              {Math.round((score / quizQuestions.length) * 100)}%
            </div>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h5 style={{ fontWeight: "600" }}>Estatísticas por Dificuldade:</h5>
            {Object.entries(difficultyStats()).map(
              ([diff, { correct, total }]) => (
                <p key={diff} style={{ margin: 0 }}>
                  {diff}:{" "}
                  <strong>{((correct / total) * 100).toFixed(0)}%</strong> (
                  {correct} de {total})
                </p>
              )
            )}
          </div>

          <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 20 }}>
            {answers.map(({ question, isCorrect, selected }, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 15px",
                  marginBottom: 10,
                  borderRadius: 8,
                  backgroundColor: isCorrect ? "#d4edda" : "#f8d7da",
                  color: isCorrect ? "#155724" : "#721c24",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <strong>Pergunta {i + 1}:</strong> {question.question}
                <br />
                Sua resposta: <strong>{selected}</strong>{" "}
                {isCorrect ? "✅" : "❌"}{" "}
                {!isCorrect && (
                  <>
                    <br />
                    Resposta correta: <strong>{question.answer}</strong>
                  </>
                )}
              </div>
            ))}
          </div>

          {history.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h5 style={{ fontWeight: "600" }}>Últimos resultados:</h5>
              <ul style={{ paddingLeft: 20 }}>
                {history.map((h, i) => (
                  <li key={i}>
                    {new Date(h.date).toLocaleString()}: {h.score} de {h.total}{" "}
                    -{" "}
                    {categories.find((c) => c.key === h.category)?.label ||
                      "N/A"}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="btn btn-outline-success btn-lg w-100"
            style={{ borderRadius: "12px", fontWeight: "600" }}
            onClick={() => setStarted(false)}
          >
            Refazer Quiz
          </button>
        </div>
      )}
    </div>
  );
}
