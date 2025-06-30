document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  if (!toc) return;

  if (toc.querySelector("ul")) return;

  const headers = document.querySelectorAll("h2, h3");
  if (!headers.length) return;

  const ul = document.createElement("ul");

  headers.forEach((header) => {
    const id = header.id || header.textContent.trim().replace(/\s+/g, '-');
    header.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = header.textContent;
    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.appendChild(ul);
});
