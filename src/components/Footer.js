import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#eee",
        padding: "2rem 1rem",
        marginTop: "auto",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container d-flex flex-column flex-md-row justify-content-between align-items-center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>
          © {new Date().getFullYear()} JavaMind. Todos os direitos reservados.
        </div>

        <div className="d-flex gap-4 mt-3 mt-md-0">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "#eee", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6cc644")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#eee")}
          >
            <svg
              height="24"
              width="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.53 7.53 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "#eee", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0a66c2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#eee")}
          >
            <svg
              height="24"
              width="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.75v1.94h.07c.66-1.25 2.27-2.56 4.68-2.56 5 0 5.92 3.29 5.92 7.57V22H17v-6.44c0-1.54-.03-3.53-2.15-3.53-2.15 0-2.48 1.68-2.48 3.41V22H7.5V8z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            style={{ color: "#eee", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1da1f2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#eee")}
          >
            <svg
              height="24"
              width="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 002.163-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.939 13.939 0 011.671 3.149 4.916 4.916 0 003.195 9.723a4.904 4.904 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.41 9.867 9.867 0 01-6.102 2.104c-.395 0-.785-.023-1.17-.069a13.945 13.945 0 007.557 2.209c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 002.457-2.548l-.047-.02z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
