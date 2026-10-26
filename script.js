
// ===== MENSAGEM DE BOAS-VINDAS =====

const welcomeModal = document.getElementById("welcomeModal");
const welcomeButton = document.getElementById("welcomeButton");
const closeModalButton = document.getElementById("closeModal");

function closeWelcomeModal() {
    welcomeModal.hidden = true;
    document.body.classList.remove("modal-open");
}

function openWelcomeModal() {
    welcomeModal.hidden = false;
    document.body.classList.add("modal-open");
}

document.addEventListener("DOMContentLoaded", () => {
    openWelcomeModal();
    welcomeButton.focus();
});

welcomeButton.addEventListener("click", () => {
    closeWelcomeModal();

    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

closeModalButton.addEventListener("click", closeWelcomeModal);

welcomeModal.addEventListener("click", (event) => {
    if (event.target === welcomeModal) {
        closeWelcomeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !welcomeModal.hidden) {
        closeWelcomeModal();
    }
});


// ===== MENU RESPONSIVO =====

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fecha o menu depois que uma opção é selecionada.
navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuToggle.textContent = "☰";
    });
});


// ===== ANO AUTOMÁTICO NO RODAPÉ =====

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// ===== FORMULÁRIO DE CONTATO =====

const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

contactForm.addEventListener("submit", (event) => {
    // Impede o recarregamento da página.
    event.preventDefault();

    const reason = document.getElementById("contactReason").value;

    const message = document
        .getElementById("contactMessage")
        .value
        .trim();

    // Limpa qualquer mensagem anterior.
    formNotice.hidden = true;
    formNotice.classList.remove("form-error");
    formNotice.textContent = "";

    // Verifica se todos os campos foram preenchidos.
    if (!reason || !message) {
        formNotice.textContent =
            "Por favor, preencha todos os campos.";

        formNotice.classList.add("form-error");
        formNotice.hidden = false;

        formNotice.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

        return;
    }

    // MOSTRA A MENSAGEM DE CONFIRMAÇÃO.
    formNotice.textContent =
        "ALGUÉM VAI ENTRAR EM CONTATO COM VC EM 5 MIN";

    formNotice.classList.remove("form-error");
    formNotice.hidden = false;

    // Leva a caixa de confirmação até a área visível.
    formNotice.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});
