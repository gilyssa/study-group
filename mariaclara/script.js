
document.addEventListener("DOMContentLoaded", () => {
  const breadcrumb = document.querySelector(".breadcrumb");
  let pagesVisited = ["Início"];

  function renderBreadcrumb() {
    breadcrumb.innerHTML = "";

    pagesVisited.forEach((page, index) => {
      if (index > 0) {
        breadcrumb.appendChild(document.createTextNode(" > "));
      }

      const span = document.createElement("span");
      span.textContent = page;
      span.setAttribute("data-step", page);
      span.classList.add("breadcrumb-step");
      breadcrumb.appendChild(span);
    });

    document.querySelectorAll(".breadcrumb-step").forEach((el, i) => {
      el.addEventListener("click", () => {
        if (i < pagesVisited.length - 1) {
          pagesVisited = pagesVisited.slice(0, i + 1);
          renderBreadcrumb();
        }
      });
    });
  }

  document.querySelectorAll("button[data-page]").forEach(button => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("data-page");
      if (!pagesVisited.includes(page)) {
        pagesVisited.push(page);
        renderBreadcrumb();
      }
    });
  });

  renderBreadcrumb();
});