// Footer year — external file so the CSP can forbid inline scripts
document.querySelectorAll("#year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
