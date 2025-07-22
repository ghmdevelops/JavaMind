import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import bgImage from "../img/pexels-krisof-1252890.jpg";

export default function About() {
  // Estado para controlar animação de entrada
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowContent(true), 150);
  }, []);

  return (
    <>
      <Helmet>
        <title>JavaMind | Sobre</title>
      </Helmet>

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          fontFamily: "'Poppins', sans-serif",
          color: "#f0f0f7",
          overflowX: "hidden",
        }}
      >
        {/* Overlay escuro para contraste */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15, 15, 35, 0.9)",
            zIndex: 1,
            backdropFilter: "blur(6px)",
          }}
        />

        <main
          className={`content-container ${showContent ? "show" : ""}`}
          style={{
            position: "relative",
            maxWidth: "850px",
            background:
              "linear-gradient(135deg, rgba(18,18,48,0.85) 0%, rgba(40,40,80,0.85) 100%)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            borderRadius: "16px",
            padding: "48px 40px",
            zIndex: 2,
            color: "#dcdcff",
            transform: "translateY(40px)",
            opacity: 0,
            transition: "transform 0.8s ease, opacity 0.8s ease",
          }}
        >
          <h1
            style={{
              fontWeight: "900",
              fontSize: "3.2rem",
              marginBottom: "24px",
              textAlign: "center",
              letterSpacing: "0.1em",
              color: "#a9a9ff",
              textShadow:
                "0 0 20px #8c8cff, 0 0 40px #6f6fff, 0 0 80px #5555ff",
            }}
          >
            Sobre o JavaMind
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              fontWeight: 500,
              marginBottom: "1.8rem",
              textAlign: "justify",
              textShadow: "0 0 10px rgba(170,170,255,0.6)",
            }}
          >
            O <strong>JavaMind</strong> é um aplicativo moderno de quizzes
            criado com React, pensado para desafiar sua mente e aprimorar seus
            conhecimentos em programação e lógica. Nossa missão é oferecer uma
            experiência interativa, divertida e educativa para estudantes e
            entusiastas da tecnologia.
          </p>

          <p
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              color: "#a0a0c8",
              marginBottom: "3rem",
              textAlign: "center",
              textShadow: "0 0 8px rgba(100,100,150,0.5)",
            }}
          >
            Desenvolvido com paixão, código limpo e foco na melhor experiência
            para você!
          </p>

          {/* Ícones + textos (exemplos) */}
          <section
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "30px",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    fill="#6f6fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
                  </svg>
                ),
                title: "Interatividade",
                desc: "Responda perguntas desafiadoras e veja seu progresso.",
              },
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    fill="#6f6fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 16v-6a2 2 0 0 0-2-2h-5V6h-2v2H5a2 2 0 0 0-2 2v6Z" />
                    <path d="M8 21h8v-3H8Z" />
                  </svg>
                ),
                title: "Tecnologia",
                desc: "Construído com React para uma experiência moderna e rápida.",
              },
              {
                icon: (
                  <svg
                    width="48"
                    height="48"
                    fill="#6f6fff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 11h2v2h-2zm1-9a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Z" />
                  </svg>
                ),
                title: "Aprendizado",
                desc: "Aprimore seus conhecimentos enquanto se diverte.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "230px",
                  textAlign: "center",
                  color: "#b0b0ff",
                  filter: "drop-shadow(0 0 6px #6f6fff)",
                  userSelect: "none",
                }}
              >
                <div>{icon}</div>
                <h4
                  style={{
                    marginTop: "12px",
                    marginBottom: "8px",
                    fontWeight: "700",
                  }}
                >
                  {title}
                </h4>
                <p style={{ fontSize: "0.9rem" }}>{desc}</p>
              </div>
            ))}
          </section>

          <div style={{ textAlign: "center" }}>
            <a
              href="/quiz"
              className="btn btn-lg"
              style={{
                background: "linear-gradient(90deg, #6f6fff, #8c8cff)",
                color: "#fff",
                fontWeight: "700",
                borderRadius: "30px",
                padding: "12px 36px",
                boxShadow:
                  "0 0 20px rgba(111,111,255,0.7), 0 4px 12px rgba(111,111,255,0.5)",
                transition: "all 0.3s ease",
                textDecoration: "none",
                userSelect: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px #a0a0ff, 0 6px 20px #a0a0ff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(111,111,255,0.7), 0 4px 12px rgba(111,111,255,0.5)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Começar Quiz
            </a>
          </div>
        </main>

        <style>{`
          .content-container.show {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          @media (max-width: 576px) {
            main.content-container {
              padding: 32px 24px !important;
              max-width: 95% !important;
            }
            section {
              flex-direction: column !important;
              gap: 18px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
