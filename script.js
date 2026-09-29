/* =========================================================
   RUTA VIAL - INTERACCIONES
========================================================= */


/* =========================
   MENÚ MÓVIL
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* =========================
   PREGUNTAS FRECUENTES
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });

});


/* =========================
   CONTENIDO DE LECCIONES
========================= */

const lessons = {

    multas: {
        title: "Multas y comparendos",
        body: `
            <p>
                Aunque suelen utilizarse como si significaran lo mismo,
                un <strong>comparendo</strong> y una <strong>multa</strong>
                no son exactamente lo mismo.
            </p>

            <p>
                Un comparendo está relacionado con el procedimiento que se
                inicia ante una presunta infracción de tránsito. La multa,
                por su parte, corresponde a una sanción económica cuando
                esta es impuesta conforme al procedimiento aplicable.
            </p>

            <p>
                Por eso es importante revisar la información registrada,
                identificar la autoridad correspondiente y utilizar
                únicamente canales oficiales.
            </p>
        `
    },


    senales: {
        title: "Señales de tránsito",
        body: `
            <p>
                Las señales de tránsito ayudan a organizar la circulación
                y comunicar información importante a conductores,
                motociclistas, ciclistas y peatones.
            </p>

            <p>
                Existen diferentes tipos de señales y cada una cumple una
                función específica: advertir sobre riesgos, establecer
                restricciones o proporcionar información útil durante
                el recorrido.
            </p>

            <p>
                <strong>Una conducción segura comienza prestando atención
                a la información que encontramos en la vía.</strong>
            </p>
        `
    },


    seguridad: {
        title: "Seguridad vial",
        body: `
            <p>
                La seguridad vial reúne medidas y comportamientos destinados
                a reducir los riesgos asociados con la movilidad.
            </p>

            <p>
                Respetar los límites establecidos, mantener una distancia
                prudente, utilizar los elementos de protección y evitar
                distracciones son algunas prácticas fundamentales.
            </p>

            <p>
                Cada actor vial tiene responsabilidad en la construcción
                de vías más seguras.
            </p>
        `
    },


    documentos: {
        title: "Documentos del vehículo",
        body: `
            <p>
                Para circular es importante conocer cuáles documentos,
                registros y requisitos pueden estar relacionados con
                el conductor y el vehículo.
            </p>

            <p>
                Entre ellos pueden encontrarse la licencia de conducción,
                la licencia de tránsito, el SOAT y, cuando corresponda,
                la revisión técnico-mecánica.
            </p>

            <p>
                Los requisitos pueden depender del vehículo y de las
                disposiciones vigentes, por lo que siempre conviene
                verificar la información mediante fuentes oficiales.
            </p>
        `
    },


    sistemas: {
        title: "SIMIT y RUNT",
        body: `
            <p>
                <strong>SIMIT y RUNT son sistemas diferentes.</strong>
            </p>

            <p>
                El SIMIT está relacionado con información sobre multas
                y sanciones por infracciones de tránsito.
            </p>

            <p>
                El RUNT integra diferentes registros e información
                relacionada con el sector tránsito y transporte.
            </p>

            <p>
                Reconocer esta diferencia ayuda a saber cuál plataforma
                oficial consultar según la información que se necesita.
            </p>
        `
    },


    conduccion: {
        title: "Conducción responsable",
        body: `
            <p>
                Conducir responsablemente no consiste únicamente en conocer
                las normas. También implica anticiparse a situaciones
                de riesgo y respetar a los demás actores de la vía.
            </p>

            <p>
                Evitar distracciones, mantener el vehículo en condiciones
                adecuadas y adaptar la conducción a las condiciones de
                la vía son decisiones importantes.
            </p>

            <p>
                <strong>La seguridad vial depende de las decisiones que
                tomamos durante cada recorrido.</strong>
            </p>
        `
    }

};


/* =========================
   MODAL DE LECCIONES
========================= */

const modal = document.getElementById("lessonModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

document.querySelectorAll(".learn-btn").forEach(button => {

    button.addEventListener("click", () => {

        const topic = button.dataset.topic;
        const lesson = lessons[topic];

        if (!lesson) return;

        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.body;

        modal.classList.add("active");
        document.body.classList.add("modal-open");
    });

});


function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});
/* =========================================================
   TEST DE CONOCIMIENTO VIAL
========================================================= */

const quizQuestions = [
    {
        question: "¿Qué debes hacer ante una señal de PARE?",
        answers: [
            "Reducir un poco la velocidad y continuar",
            "Detener completamente el vehículo",
            "Tocar la bocina antes de continuar"
        ],
        correct: 1,
        explanation:
            "La señal PARE indica que debes detener completamente el vehículo antes de continuar cuando sea seguro."
    },

    {
        question: "¿Qué indica una señal circular con borde rojo y el número 50?",
        answers: [
            "Una velocidad recomendada de 50 km/h",
            "Una distancia mínima de 50 metros",
            "El límite máximo de velocidad indicado es 50 km/h"
        ],
        correct: 2,
        explanation:
            "El número dentro de la señal indica el límite máximo de velocidad establecido para ese tramo."
    },

    {
        question: "¿Qué debes hacer al aproximarte a una zona de cruce peatonal?",
        answers: [
            "Aumentar la velocidad para pasar primero",
            "Conducir con precaución y estar atento a los peatones",
            "Usar la bocina para avisar que vas a pasar"
        ],
        correct: 1,
        explanation:
            "Debes conducir con precaución y estar preparado para permitir el paso de los peatones."
    }
];


let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let checkedAnswer = false;


const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");
const nextQuestion = document.getElementById("nextQuestion");
const quizFeedback = document.getElementById("quizFeedback");

const quizContent = document.getElementById("quizContent");
const quizResult = document.getElementById("quizResult");

const finalScore = document.getElementById("finalScore");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const restartQuiz = document.getElementById("restartQuiz");


function loadQuestion() {

    const data = quizQuestions[currentQuestion];

    selectedAnswer = null;
    checkedAnswer = false;

    questionText.textContent = data.question;

    questionCounter.textContent =
        `Pregunta ${currentQuestion + 1} de ${quizQuestions.length}`;

    document.querySelector(".question-number").textContent =
        `PREGUNTA 0${currentQuestion + 1}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

    answersContainer.innerHTML = "";
    quizFeedback.textContent = "";

    nextQuestion.disabled = true;
    nextQuestion.textContent = "Comprobar respuesta →";


    data.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";
        button.textContent = answer;

        button.addEventListener("click", () => {

            if (checkedAnswer) return;

            document
                .querySelectorAll(".answer-option")
                .forEach(option => option.classList.remove("selected"));

            button.classList.add("selected");

            selectedAnswer = index;
            nextQuestion.disabled = false;
        });

        answersContainer.appendChild(button);
    });
}


nextQuestion.addEventListener("click", () => {

    if (selectedAnswer === null) return;

    const data = quizQuestions[currentQuestion];
    const options = document.querySelectorAll(".answer-option");


    if (!checkedAnswer) {

        checkedAnswer = true;

        options[data.correct].classList.add("correct");

        if (selectedAnswer === data.correct) {

            score++;

            quizFeedback.textContent =
                "✓ ¡Correcto! " + data.explanation;

        } else {

            options[selectedAnswer].classList.add("wrong");

            quizFeedback.textContent =
                "✕ " + data.explanation;
        }


        if (currentQuestion === quizQuestions.length - 1) {
            nextQuestion.textContent = "Ver resultado →";
        } else {
            nextQuestion.textContent = "Siguiente pregunta →";
        }

        return;
    }


    if (currentQuestion < quizQuestions.length - 1) {

        currentQuestion++;
        loadQuestion();

    } else {

        showResult();
    }
});


function showResult() {

    quizContent.style.display = "none";
    quizResult.style.display = "block";

    finalScore.textContent =
        `${score}/${quizQuestions.length}`;


    if (score === 3) {

        resultTitle.textContent = "¡Excelente!";

        resultText.textContent =
            "Completaste correctamente todo el reto de conocimiento vial.";

    } else if (score === 2) {

        resultTitle.textContent = "¡Muy bien!";

        resultText.textContent =
            "Tienes buenos conocimientos. Repasa algunos conceptos y vuelve a intentarlo.";

    } else {

        resultTitle.textContent = "Sigue aprendiendo";

        resultText.textContent =
            "Repasa las lecciones de Ruta Vial y vuelve a realizar el test.";
    }
}


restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;

    quizResult.style.display = "none";
    quizContent.style.display = "block";

    loadQuestion();
});


loadQuestion();