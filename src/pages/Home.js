import { Helmet } from "react-helmet";
import bgImage from "../img/pexels-krisof-1252890.jpg";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>JavaMind | Aprenda Java brincando</title>
      </Helmet>

      <div
        className="text-light"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        {/* Hero Section */}
        <section className="container py-5 text-center">
          <h1 className="display-3 fw-bold mb-3">
            JavaMind <span className="text-info">🧠</span>
          </h1>
          <p className="lead mb-4">
            Aprenda Java de forma divertida com quizzes inteligentes,
            interativos e desafiadores.
          </p>
          <a
            href="/quiz"
            className="btn btn-info btn-lg px-5 py-3 fw-bold shadow"
          >
            Começar Agora
          </a>
        </section>

        {/* Features Section */}
        <section className="container mt-5">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-dark rounded shadow h-100">
                <i className="bi bi-lightbulb-fill fs-1 text-warning"></i>
                <h5 className="mt-3">Desafios Inteligentes</h5>
                <p>
                  Questões categorizadas por dificuldade para testar seu
                  raciocínio lógico.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-dark rounded shadow h-100">
                <i className="bi bi-graph-up fs-1 text-success"></i>
                <h5 className="mt-3">Acompanhe seu progresso</h5>
                <p>
                  Visualize seu histórico de acertos e veja sua evolução ao
                  longo do tempo.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-dark rounded shadow h-100">
                <i className="bi bi-laptop-fill fs-1 text-info"></i>
                <h5 className="mt-3">Responsivo e Acessível</h5>
                <p>
                  Funciona em qualquer dispositivo, com suporte ao modo escuro.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
