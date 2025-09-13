class MeuHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");

    // Estilo
    const style = document.createElement("style");
    style.textContent = `
      header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          height: 73px;
          background-color: #fffafc;
          border-bottom: 1px solid #FFE1E7;
      }

      .logo {
          width: 111px;
          height: 45px;
          left: 118px;
          position: relative;
      }

      .perfil {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 118px;
      }

      .foto-perfil {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background-color: #F4D7F5;
      }

      .nome-perfil {
          background: none;
          border: none;
          font-weight: 500;
          font-size: 16px;
          color: #3C254D;
          cursor: pointer;
      }

      .opcoes {
          padding-top: 20px;
      }

      .opcoes ul {
          margin-left: 40px;
      }

      li {
          display: inline;
          color: #3C254D;
          font-weight: 500;
          font-size: 18px;
      }

      a {
          margin-right: 20px;
          color: #3C254D;
          text-decoration: none;
          border-radius: 50px;
          padding: 5px 10px;
          transition: all 0.3s ease;
      }

      a:hover {  
          background-color: #e7557c;
          color: white;
          transform: scale(1.03);
          transform-origin: center;
      }

      .hamburguer {
          display: none;
          font-size: 30px;
          background: none;
          border: none;
          cursor: pointer;
          color: #3C254D;
          position: absolute;
          top: 80px;
          left: 30px;
          z-index: 1000;
      }

      @media (max-width: 768px) {
          .logo {
              width: 80px;
              height: 30px;
              left: 10px;
          }

          .perfil {
              margin-right: 10px;
          }

          .foto-perfil {
              width: 25px;
              height: 25px;
          }

          .nome-perfil {
              font-size: 14px;
              margin-right:30px;
          }

          .opcoes ul {
              display: none;
              flex-direction: column;
              background-color: #FFFAFC;
              padding: 20px;
              border: 1px solid #FFE1E7;
              border-radius: 16px;
              position: absolute;
              top: 120px;
              left: 30px;
              width: 200px;
              box-shadow: 6px 6px 10px #FF98AD40;
          }

          .opcoes ul.active {
              display: flex;
              align-items: flex-start;
              margin: auto;
              width: 80%;
              opacity: 0.9;
              color: #3C254D;
              font-weight: bold;
              gap: 15px;
          }

          .opcoes li {
              font-size: 18px;
          }

          .hamburguer {
              display: block;
          }

          .ativo {
              width: 100%;
              margin: 0 auto;
          }
      }
    `;

    // Estrutura HTML
    wrapper.innerHTML = `
      <header>
        <img src="${this.getAttribute("logo")}" class="logo" alt="logo">
        <div class="perfil">
          <div class="foto-perfil"></div>
          <button class="nome-perfil">${this.getAttribute("nome")}</button>
        </div>
      </header>

      <button id="hamburguer-btn" class="hamburguer">☰</button>
      <div class="menu-wrapper"></div>
      <nav class="opcoes">
        <ul>
          <li><a href="../home/index.html">Início</a></li>
          <li><a href="../trilha-estudo/index.html">Trilhas de estudo</a></li>
          <li><a href="../atividades/index.html">Submeter atividade</a></li>
          <li><a href="../agenda/index.html">Agenda</a></li>
        </ul>
      </nav>
    `;

    // Menu hamburguer 
    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    const btn = wrapper.querySelector("#hamburguer-btn");
    const menu = wrapper.querySelector(".opcoes ul");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      menu.classList.remove("active");
    });

    menu.addEventListener("click", (e) => e.stopPropagation());
  }
}

customElements.define("meu-header", MeuHeader);
