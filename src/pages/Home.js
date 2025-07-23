import React from "react";
import { Helmet } from "react-helmet";
import bgImage from "../img/pexels-krisof-1252890.jpg";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>JavaMind | Aprenda Java brincando</title>
        <meta
          name="description"
          content="Aprenda Java com quizzes interativos sobre Spring, SOLID, Clean Code, Git, Quarkus, Camunda, entrevistas e muito mais!"
        />
        <meta
          name="keywords"
          content="Java, Spring, SOLID, Clean Code, Quiz Java, Entrevista Java, Git, Dev Backend"
        />
      </Helmet>

      <div
        className="landing-wrapper text-light"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {/* Hero Section */}
        <section className="container py-5 text-center animate__animated animate__fadeIn">
          <h1 className="display-3 fw-bold mb-3 brand-title">
            JavaMind <span className="text-info">🧠</span>
          </h1>
          <p className="lead mb-4">
            Aprenda Java de forma divertida com quizzes inteligentes,
            interativos e desafiadores.
          </p>
          <a
            href="/quiz"
            className="btn btn-lg px-5 py-3 fw-bold shadow start-btn"
          >
            Começar Agora
          </a>
        </section>

        {/* Features */}
        <section className="container mt-5">
          <div className="row text-center">
            {[
              {
                icon: "bi-braces",
                title: "Domine Java e Spring",
                desc: "Quizzes sobre Java, Spring, Clean Code, Design Patterns e muito mais.",
                color: "primary",
              },
              {
                icon: "bi-terminal",
                title: "Preparação para Entrevistas",
                desc: "Simulados e perguntas reais de entrevistas técnicas.",
                color: "danger",
              },
              {
                icon: "bi-diagram-3",
                title: "Arquitetura Moderna",
                desc: "Clean Architecture, Microserviços, Camunda, Quarkus, Kafka, GitOps.",
                color: "success",
              },
            ].map((feat, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="p-4 bg-dark rounded shadow h-100 feature-card">
                  <i
                    className={`bi ${feat.icon} fs-1 text-${feat.color} glowing-icon`}
                  ></i>
                  <h5 className="mt-3">{feat.title}</h5>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mt-5 text-center">
  <h2 className="mb-4 fw-bold">Por que usar o JavaMind?</h2>
  <div className="row g-4">
    {[
      { icon: "bi-clock", title: "Rápido", desc: "Estude em sessões curtas e objetivas." },
      { icon: "bi-graph-up", title: "Efetivo", desc: "Aprenda com repetição espaçada e feedback." },
      { icon: "bi-emoji-smile", title: "Engraçado", desc: "Aprenda se divertindo com quizzes dinâmicos." },
      { icon: "bi-cloud-arrow-down", title: "Sem precisar instalar", desc: "Acesse de qualquer dispositivo." },
    ].map((item, idx) => (
      <div className="col-md-3" key={idx}>
        <div className="p-4 bg-dark text-light rounded shadow h-100">
          <i className={`bi ${item.icon} fs-1 text-info`}></i>
          <h5 className="mt-3">{item.title}</h5>
          <p className="mb-0">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        <section className="container mt-5 py-5">
          <h2 className="text-center mb-4 fw-bold">Categorias de Quiz</h2>
          <div className="row g-4 justify-content-center">
            {[
              { name: "Java", icon: "bi-cup-hot", color: "primary" },
              { name: "Clean Code", icon: "bi-code-slash", color: "success" },
              {
                name: "Arquitetura",
                icon: "bi-diagram-3-fill",
                color: "warning",
              },
              {
                name: "Design Patterns",
                icon: "bi-puzzle-fill",
                color: "danger",
              },
              { name: "Git & GitHub", icon: "bi-git", color: "dark" },
              {
                name: "GitHub Actions",
                icon: "bi-lightning-charge-fill",
                color: "info",
              },
              {
                name: "Pipelines CI/CD",
                icon: "bi-gear-wide-connected",
                color: "secondary",
              },
              { name: "Quarkus", icon: "bi-lightning-fill", color: "success" },
              { name: "Apache Camel", icon: "bi-link-45deg", color: "primary" },
              { name: "Camunda BPM", icon: "bi-diagram-3", color: "danger" },
              {
                name: "Filas & Mensageria",
                icon: "bi-inboxes-fill",
                color: "info",
              },
              {
                name: "Entrevistas Técnicas",
                icon: "bi-chat-dots-fill",
                color: "warning",
              },
            ].map((cat, idx) => (
              <div className="col-6 col-md-4 col-lg-3" key={idx}>
                <div className="category-card text-center p-4 rounded bg-dark text-light shadow h-100 hover-glow">
                  <i className={`bi ${cat.icon} fs-2 text-${cat.color}`}></i>
                  <h6 className="mt-2 fw-semibold">{cat.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="container mt-5">
          <h2 className="text-center mb-4">Depoimentos</h2>
          <div className="row text-center">
            {[
              {
                name: "Lucas B.",
                msg: "Finalmente entendi SOLID brincando! Ferramenta incrível!",
              },
              {
                name: "Amanda F.",
                msg: "Usei os quizzes do JavaMind para revisar antes de uma entrevista técnica e deu super certo.",
              },
              {
                name: "João M.",
                msg: "O melhor app para estudar Java que já usei. Simples e eficiente.",
              },
            ].map((dep, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="bg-dark rounded p-4 shadow h-100">
                  <p className="fst-italic">"{dep.msg}"</p>
                  <p className="fw-bold mt-2">{dep.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mt-5 pb-5">
          <h2 className="text-center mb-4">Perguntas Frequentes</h2>
          <div className="accordion" id="faqAccordion">
            {[
              {
                q: "O JavaMind é gratuito?",
                a: "Sim! Todo o conteúdo e quizzes estão disponíveis gratuitamente.",
              },
              {
                q: "Como os quizzes são organizados?",
                a: "Por categorias como Java, Spring, Git, Arquitetura, entre outros.",
              },
              {
                q: "O conteúdo é atualizado com frequência?",
                a: "Sim, novas perguntas e categorias são adicionadas regularmente.",
              },
            ].map((item, idx) => (
              <div className="accordion-item bg-dark text-light" key={idx}>
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className="accordion-button collapsed bg-dark text-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                    aria-expanded="false"
                    aria-controls={`collapse${idx}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .brand-title {
          background: linear-gradient(90deg, #6f6fff, #00ffff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }

        .start-btn {
          background-color: #00bcd4;
          border: none;
          color: #fff;
          transition: all 0.3s ease;
        }

        .start-btn:hover {
          background-color: #03a9f4;
          box-shadow: 0 0 15px #00bcd4, 0 0 30px #00bcd4;
          transform: scale(1.05);
        }

        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 255, 255, 0.2);
        }

        .glowing-icon {
          transition: text-shadow 0.3s ease;
        }

        .glowing-icon:hover {
          text-shadow: 0 0 8px rgba(255,255,255,0.8);
        }

        .hover-scale {
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .hover-scale:hover {
          transform: scale(1.05);
          background-color: #00bcd4;
        }
      `}</style>
    </>
  );
}
