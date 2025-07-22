import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Estado do menu mobile aberto ou não

  useEffect(() => {
    const saved = localStorage.getItem("quizHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const resetHistory = () => {
    localStorage.removeItem("quizHistory");
    setHistory([]);
    setShowHistory(false);
  };

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-lg"
        style={{ position: "sticky", top: 0, zIndex: 1050 }}
      >
        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={closeMenu}
          style={{
            fontSize: "1.8rem",
            letterSpacing: "0.1em",
            textShadow: "0 0 8px #6f6fff",
            userSelect: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#8c8cff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          JavaMind
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ borderColor: "#6f6fff" }}
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz" onClick={closeMenu}>
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                Sobre
              </Link>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
            <a
              className="text-light"
              onClick={() => {
                setShowHistory(true);
                closeMenu();
              }}
              style={{
                minWidth: 130,
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: "pointer",
                textDecoration: "none", // remove a barra/underline
                userSelect: "none",
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShowHistory(true);
                  closeMenu();
                }
              }}
            >
              Ver Histórico
            </a>
          </div>
        </div>
      </nav>

      {/* Modal Histórico */}
      {showHistory && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(15, 15, 35, 0.85)",
            backdropFilter: "blur(6px)",
          }}
          onClick={() => setShowHistory(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal-content bg-dark text-light"
              style={{
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(111, 111, 255, 0.5)",
              }}
            >
              <div className="modal-header border-0">
                <h5
                  className="modal-title"
                  style={{
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    color: "#8c8cff",
                    textShadow: "0 0 12px #6f6fff",
                  }}
                >
                  Histórico de Resultados
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowHistory(false)}
                  aria-label="Fechar"
                />
              </div>
              <div
                className="modal-body"
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  letterSpacing: "0.02em",
                }}
              >
                {history.length === 0 ? (
                  <p className="text-center text-muted">
                    Nenhum histórico salvo ainda.
                  </p>
                ) : (
                  <ul className="list-unstyled px-2">
                    {history.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "8px 0",
                          borderBottom:
                            index !== history.length - 1
                              ? "1px solid #444"
                              : "none",
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: "500",
                          color: "#b0b0ff",
                        }}
                      >
                        <span>{new Date(item.date).toLocaleString()}</span>
                        <span>
                          <strong style={{ color: "#a9a9ff" }}>
                            {item.score}
                          </strong>{" "}
                          / {item.total}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="modal-footer border-0 justify-content-between">
                <button
                  className="btn btn-outline-danger fw-semibold"
                  onClick={resetHistory}
                  style={{
                    minWidth: "140px",
                    letterSpacing: "0.05em",
                    boxShadow: "0 0 8px #ff4d4d",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff4d4d";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.boxShadow = "0 0 16px #ff4d4d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#ff4d4d";
                    e.currentTarget.style.boxShadow = "0 0 8px #ff4d4d";
                  }}
                >
                  Resetar Histórico
                </button>
                <button
                  className="btn btn-secondary fw-semibold"
                  onClick={() => setShowHistory(false)}
                  style={{
                    minWidth: "100px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
