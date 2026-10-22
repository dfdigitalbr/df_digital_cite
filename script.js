// 1. Troque pelo seu número com código do país e DDD, somente números.
// Exemplo fictício do formato: 5521999999999
const WHATSAPP_NUMERO = "55DDNUMEROAQUI";

// Preenche o ano automaticamente no rodapé.
document.querySelector("#ano").textContent = new Date().getFullYear();

// Configura o botão de WhatsApp. O link só funciona após inserir seu número.
const whatsappLink = document.querySelector("#whatsapp-link");
if (/^\d{12,13}$/.test(WHATSAPP_NUMERO)) {
  const mensagem = encodeURIComponent(
    "Olá! Vi seu site e gostaria de conversar sobre um projeto."
  );
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
} else {
  whatsappLink.href = "#";
  whatsappLink.addEventListener("click", (evento) => {
    evento.preventDefault();
    alert("Antes de divulgar o site, abra script.js e configure seu número de WhatsApp.");
  });
}

// Menu de navegação adaptado para celular.
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});
