
// ================================================
// 7. ФИЗИКА БАТЛЫ — 8 ОЙЫН КЕЗЕҢІ
// ================================================

const gameRounds = [
  {
    title: "🧠 1-кезең. Білім батлы",
    time: 2,
    points: 10,
    type: "choice",
    description: "Әр командаға бір теориялық сұрақ.",
    items: [
      {
        q: "Ішкі энергия қандай энергиялардан құралады?",
        options: [
          "Тек қозғалыс энергиясынан",
          "Бөлшектердің кинетикалық және потенциалдық энергияларынан",
          "Тек ауырлық энергиясынан",
          "Тек электр энергиясынан"
        ],
        right: 1,
        why: "Ішкі энергия бөлшектердің қозғалысы мен өзара әрекеттесу энергияларын қамтиды."
      },
      {
        q: "Ішкі энергия қандай екі негізгі әдіспен өзгереді?",
        options: [
          "Жұмыс атқару және жылу алмасу",
          "Қысым және көлем",
          "Масса және уақыт",
          "Дыбыс және жарық"
        ],
        right: 0,
        why: "Жұмыс атқару және жылу алмасу — энергияны беру тәсілдері."
      },
      {
        q: "Жылу мөлшерінің өлшем бірлігі қандай?",
        options: ["Вольт", "Ампер", "Джоуль", "Ньютон"],
        right: 2,
        why: "Жылу мөлшері энергия болғандықтан, джоульмен өлшенеді."
      }
    ]
  },
  {
    title: "⚖️ 2-кезең. Дұрыс па, бұрыс па?",
    time: 2,
    points: 10,
    type: "choice",
    description: "Тұжырымның дұрыс немесе бұрыс екенін анықта.",
    items: [
      {
        q: "Жылу өздігінен жылы денеден салқын денеге өтеді.",
        options: ["Дұрыс", "Бұрыс"],
        right: 0,
        why: "Екі дене арасында температура айырмасы болса, жылу өздігінен жылырақ денеден салқынырақ денеге беріледі."
      },
      {
        q: "Конвекция тек қатты денелерде болады.",
        options: ["Дұрыс", "Бұрыс"],
        right: 1,
        why: "Конвекция сұйықтар мен газдарда байқалады."
      },
      {
        q: "Жылулық сәулелену вакуум арқылы да таралады.",
        options: ["Дұрыс", "Бұрыс"],
        right: 0,
        why: "Электромагниттік толқындар таралу үшін заттық ортаны қажет етпейді."
      }
    ]
  },
  {
    title: "🖼️ 3-кезең. Суреттен анықта",
    time: 2,
    points: 10,
    type: "picture",
    description: "Суреттегі жылу берілу тәсілін ата.",
    items: [
      {
        q: "Бірінші суретте қандай құбылыс көрсетілген?",
        visual: "conduction",
        options: ["Конвекция", "Жылуөткізгіштік", "Сәулелену"],
        right: 1,
        why: "Энергия металл бойымен таралады."
      },
      {
        q: "Екінші суреттегі құбылысты анықта.",
        visual: "convection",
        options: ["Конвекция", "Жылуөткізгіштік", "Сәулелену"],
        right: 0,
        why: "Сұйықтың жылы және салқын қабаттары қозғалады."
      },
      {
        q: "Үшінші суретте жылу қалай беріледі?",
        visual: "radiation",
        options: ["Конвекция", "Жылуөткізгіштік", "Сәулелену"],
        right: 2,
        why: "Энергия электромагниттік толқындар арқылы беріледі."
      }
    ]
  },
  {
    title: "🧮 4-кезең. Есеп батлы",
    time: 4,
    points: 20,
    type: "numeric",
    description: "Әр команда берілген есепті дәптерге шығарады.",
    items: [
      {
        q: "1 кг судың температурасы 20°C-қа артты. Q қанша? c = 4200. Жауапты Дж-мен жаз.",
        answer: 84000,
        unit: "Дж",
        why: "Q = 4200 × 1 × 20 = 84 000 Дж."
      },
      {
        q: "2 кг темір 30°C-қа қыздырылды. c = 460. Q қанша? Жауапты Дж-мен жаз.",
        answer: 27600,
        unit: "Дж",
        why: "Q = 460 × 2 × 30 = 27 600 Дж."
      },
      {
        q: "Газ 1100 Дж жылу алып, 300 Дж жұмыс атқарды. ΔU қанша? Жауапты Дж-мен жаз.",
        answer: 800,
        unit: "Дж",
        why: "ΔU = Q − A = 1100 − 300 = 800 Дж."
      }
    ]
  },
  {
    title: "🌍 5-кезең. Өмірлік жағдай",
    time: 2,
    points: 10,
    type: "choice",
    description: "Күнделікті өмірдегі физикалық құбылысты түсіндір.",
    items: [
      {
        q: "Ыстық шайдағы металл қасықтың сабы қызды. Бұл қандай құбылыс?",
        options: [
          "Сәулелену",
          "Конвекция",
          "Жылуөткізгіштік",
          "Электромагниттік индукция"
        ],
        right: 2,
        why: "Қасық бойымен энергия жылуөткізгіштік арқылы таралады."
      },
      {
        q: "Бөлмедегі жылы ауа жоғары көтерілді. Бұл қандай құбылыс?",
        options: [
          "Конвекция",
          "Сәулелену",
          "Үйкеліс",
          "Балқу"
        ],
        right: 0,
        why: "Жылы ауаның тығыздығы азайып, жоғары көтеріледі."
      },
      {
        q: "Оттан алыста тұрғанда жылуды сезінеміз. Оның негізгі берілу тәсілі қандай?",
        options: [
          "Тек жылуөткізгіштік",
          "Тек механикалық жұмыс",
          "Тек булану",
          "Сәулелену"
        ],
        right: 3,
        why: "От электромагниттік сәулелену арқылы энергия шығарады."
      }
    ]
  },
  {
    title: "🔎 6-кезең. Қатені тап",
    time: 2,
    points: 10,
    type: "choice",
    description: "Қате шығарылған есепті түзет.",
    items: [
      {
        q: "Студент Q = 4200 × 2 × 10 = 8400 Дж деп жазды. Қатені тап.",
        options: [
          "Дұрыс жауап 84 000 Дж",
          "Дұрыс жауап 840 Дж",
          "Дұрыс жауап 4200 Дж",
          "Қате жоқ"
        ],
        right: 0,
        why: "4200 × 2 × 10 = 84 000 Дж."
      },
      {
        q: "Газ Q = 2000 Дж жылу алып, A = 300 Дж жұмыс атқарды. Студент ΔU = 2300 Дж деді.",
        options: [
          "ΔU = 2300 Дж",
          "ΔU = 1700 Дж",
          "ΔU = 300 Дж",
          "ΔU = 2000 Дж"
        ],
        right: 1,
        why: "Ішкі энергияның өзгерісі ΔU = 2000 − 300 = 1700 Дж."
      },
      {
        q: "20°C және 60°C температурадағы екі су үлгісі араластырылды. Жылу жоғалмайды. Біреу соңғы температура 90°C деді.",
        options: [
          "90°C — дұрыс",
          "100°C болады",
          "Соңғы температура 20°C пен 60°C аралығында болады",
          "Ешқашан араласпайды"
        ],
        right: 2,
        why: "Сырттан энергия берілмегенде қоспаның температурасы бастапқы екі температураның арасында болады."
      }
    ]
  },
  {
    title: "⚡ 7-кезең. Жылдам блиц",
    time: 2,
    points: 5,
    type: "choice",
    description: "Әр командаға екі қысқа сұрақ. Әр жауап — 5 ұпай.",
    items: [
      {
        q: "60°C − 20°C = ?",
        options: ["80°C", "40°C", "20°C"],
        right: 1,
        why: "Температура айырмасы 40°C."
      },
      {
        q: "Басқа шамалар өзгермесе, масса екі есе артқанда Q қалай өзгереді?",
        options: ["Екі есе артады", "Екі есе кемиді", "Өзгермейді"],
        right: 0,
        why: "Q = cmΔt, сондықтан Q массаға тура пропорционал."
      },
      {
        q: "1 кДж неше джоуль?",
        options: ["100 Дж", "10 Дж", "1000 Дж"],
        right: 2,
        why: "1 кДж = 1000 Дж."
      },
      {
        q: "Газ үшін Q = 0, A = −200 Дж. ΔU нешеге тең?",
        options: ["200 Дж", "−200 Дж", "0 Дж"],
        right: 0,
        why: "ΔU = Q − A = 0 − (−200) = 200 Дж."
      },
      {
        q: "Судың c мәні шамамен қанша?",
        options: ["460", "4200", "900"],
        right: 1,
        why: "Судың меншікті жылусыйымдылығы 4200 Дж/(кг·°C)."
      },
      {
        q: "Салқындаған дене үшін Q = cmΔt мәнінің таңбасы қандай?",
        options: ["Оң", "Нөл", "Теріс"],
        right: 2,
        why: "Δt теріс болғандықтан, Q да теріс."
      }
    ]
  },
  {
    title: "🎨 8-кезең. Шығармашылық финал",
    time: 4,
    points: 30,
    type: "creative",
    description: "Үш командаға үш түрлі тапсырма. Ең жоғары баға — 30 ұпай.",
    items: []
  }
];

const teamNames = ["Жылу", "Энергия", "Температура"];
const scores = [0, 0, 0];

let gameRound = 0;
let gameQuestion = 0;
let winnerVisible = false;

const gameAnswers = {};
const creativeAwards = [null, null, null];

// ================================================
// 8. ОЙЫНҒА АРНАЛҒАН 3 СУРЕТ
// ================================================

function gamePicture(type) {
  let content = "";

  if (type === "conduction") {
    content = `
      ${svgText(450, 55, "Жылудың таралу бағытын бақыла", 27)}
      <rect x="120" y="172" width="660" height="55"
        rx="12" fill="#758b9d" stroke="#b3cde0" stroke-width="3"/>
      <rect x="120" y="172" width="200" height="55"
        rx="12" fill="#ff8b54"/>
      <circle cx="136" cy="200" r="77"
        fill="#ff8a4f" opacity=".25"/>
      ${svgArrow(345, 199, 718, 199)}
      ${svgText(180, 300, "Ыстық ұш", 24, "#ffb37f")}
      ${svgText(714, 300, "Салқын ұш", 24, "#a4e2ff")}
    `;
  }

  if (type === "convection") {
    content = `
      ${svgText(450, 50, "Сұйықтың қозғалысын бақыла", 27)}
      <rect x="270" y="90" width="360" height="225"
        rx="20" fill="#19517e" stroke="#8acbff" stroke-width="5"/>
      <path d="M290 165 Q450 147 610 165"
        fill="none" stroke="#a6e5ff" stroke-width="4"/>
      <circle cx="340" cy="250" r="22" fill="#ff9b5d"/>
      <circle cx="560" cy="145" r="22" fill="#66c8ff"/>
      ${svgArrow(370, 272, 370, 139)}
      ${svgArrow(536, 140, 536, 273)}
      ${svgText(450, 346, "Жылы және салқын қабаттар", 22)}
    `;
  }

  if (type === "radiation") {
    content = `
      ${svgText(450, 52, "Энергияның таралуын бақыла", 27)}
      <circle cx="210" cy="180" r="70" fill="#ffca5e"/>
      <circle cx="210" cy="180" r="88"
        fill="none" stroke="#ffb44f" stroke-width="4"/>
      <circle cx="702" cy="180" r="74"
        fill="#2c9cd0" stroke="#a6eaff" stroke-width="4"/>
      <path d="M677 124 Q739 163 683 204
        Q659 239 713 251"
        fill="none" stroke="#54d9a1" stroke-width="20"/>
      ${svgArrow(321, 140, 585, 140)}
      ${svgArrow(321, 185, 585, 185)}
      ${svgArrow(321, 230, 585, 230)}
      ${svgText(210, 315, "Күн", 24)}
      ${svgText(702, 315, "Жер", 24)}
    `;
  }

  return `<div class="diagram-box">${svgBase(content)}</div>`;
}

// ================================================
// 9. КОМАНДАЛАР МЕН ҰПАЙЛАР
// ================================================

function scoreboardHTML() {
  return `
    <div class="scoreboard">
      ${teamNames.map((name, index) => `
        <div class="team">
          <h3>${index + 1}-команда</h3>
          <input class="team-name" data-team="${index}"
            maxlength="24" value="${escapeHTML(name)}"
            aria-label="${index + 1}-команда атауы">
          <strong>${scores[index]}</strong>
          <small>ұпай</small>
        </div>
      `).join("")}
    </div>
  `;
}

function questionKey() {
  return `${gameRound}:${gameQuestion}`;
}

function renderGame() {
  const round = gameRounds[gameRound];
  const isCreative = round.type === "creative";
  const saved = gameAnswers[questionKey()];

  let questionHTML = "";

  if (isCreative) {
    questionHTML = creativeHTML();
  } else {
    const item = round.items[gameQuestion];
    const team = gameQuestion % 3;
    const isNumeric = round.type === "numeric";

    const picture = round.type === "picture"
      ? gamePicture(item.visual)
      : "";

    let answerHTML = "";

    if (isNumeric) {
      answerHTML = `
        <label class="field">
          Жауап (${item.unit})
          <input id="gameNumber" type="number" step="any"
            placeholder="Жауабыңды санмен жаз"
            ${saved ? "disabled" : ""}
            value="${saved ? saved.input : ""}">
        </label>
        <div class="actions">
          <button id="submitGameNumber" class="btn primary"
            ${saved ? "disabled" : ""}>
            ✅ Жауапты тексеру
          </button>
        </div>
        <div id="answerWarning" class="small"></div>
      `;
    } else {
      answerHTML = `
        <div class="options">
          ${item.options.map((option, index) => {
            let className = "option";

            if (saved) {
              if (index === item.right) className += " correct";
              else if (index === saved.choice) className += " wrong";
            }

            return `
              <button class="${className}" data-choice="${index}"
                ${saved ? "disabled" : ""}>
                ${String.fromCharCode(65 + index)}) ${option}
              </button>
            `;
          }).join("")}
        </div>
      `;
    }

    questionHTML = `
      <div class="card">
        <div class="problem-number">
          СҰРАҚ ${gameQuestion + 1} / ${round.items.length}
        </div>

        <h3>
          🎯 Кезек: ${team + 1}-команда —
          ${escapeHTML(teamNames[team])}
        </h3>

        <h2>${item.q}</h2>
        <p>Дұрыс жауап: +${round.points} ұпай</p>

        ${picture}
        ${answerHTML}

        ${saved ? `
          <div class="feedback">
            ${saved.correct
              ? `✅ Дұрыс! +${round.points} ұпай`
              : "❌ Жауап дұрыс емес. +0 ұпай"}
            <br><br>
            <b>Түсіндірме:</b> ${item.why}
          </div>
        ` : ""}

        <div class="actions">
          <button id="prevGameQuestion" class="btn secondary"
            ${gameQuestion === 0 ? "disabled" : ""}>
            ← Алдыңғы сұрақ
          </button>

          <button id="nextGameQuestion" class="btn primary">
            ${gameQuestion === round.items.length - 1
              ? "Келесі ойын кезеңі →"
              : "Келесі сұрақ →"}
          </button>
        </div>
      </div>
    `;
  }

  $("screen").innerHTML = `
    <div class="card">
      <h2>🏆 Командалар ұпайы</h2>
      <p class="small">
        Команда атауын өзгертуге болады.
        Барлық сұрақ әр командаға кезекпен беріледі.
      </p>
      ${scoreboardHTML()}
    </div>

    <div class="card">
      <h2>🎮 Ойын кезеңдері</h2>
      <div class="round-tabs">
        ${gameRounds.map((item, index) => `
          <button class="round-tab
            ${index === gameRound ? "active" : ""}"
            data-round="${index}">
            ${index + 1}-ойын
          </button>
        `).join("")}
      </div>
      <div class="progress">
        <div style="width:${(gameRound + 1) / 8 * 100}%"></div>
      </div>
      <h3>${round.title}</h3>
      <p>${round.description}</p>
      <p>
        ⏱ Ұсынылатын уақыт: ${round.time} минут
      </p>
    </div>

    ${questionHTML}
  `;

  // Команда атауын өңдеу
  document.querySelectorAll(".team-name").forEach(input => {
    input.oninput = () => {
      const team = Number(input.dataset.team);
      teamNames[team] = input.value;
    };
  });

  // Кезеңді таңдау
  document.querySelectorAll(".round-tab").forEach(button => {
    button.onclick = () => {
      gameRound = Number(button.dataset.round);
      gameQuestion = 0;
      renderGame();
    };
  });

  if (isCreative) {
    bindCreative();
    return;
  }

  // Тест жауаптары
  document.querySelectorAll(".option").forEach(button => {
    button.onclick = () => {
      submitGameChoice(Number(button.dataset.choice));
    };
  });

  if ($("submitGameNumber")) {
    $("submitGameNumber").onclick = submitGameNumber;
  }

  $("prevGameQuestion").onclick = () => {
    if (gameQuestion > 0) {
      gameQuestion--;
      renderGame();
    }
  };

  $("nextGameQuestion").onclick = () => {
    if (gameQuestion < round.items.length - 1) {
      gameQuestion++;
    } else if (gameRound < gameRounds.length - 1) {
      gameRound++;
      gameQuestion = 0;
    }
    renderGame();
  };
}

function submitGameChoice(choice) {
  const key = questionKey();

  if (gameAnswers[key]) return;

  const round = gameRounds[gameRound];
  const item = round.items[gameQuestion];
  const correct = choice === item.right;
  const team = gameQuestion % 3;

  gameAnswers[key] = { choice, correct };

  if (correct) {
    scores[team] += round.points;
  }

  renderGame();
}

function submitGameNumber() {
  const key = questionKey();
  if (gameAnswers[key]) return;

  const input = $("gameNumber");
  if (input.value.trim() === "") {
    $("answerWarning").textContent =
      "Алдымен сандық жауапты жаз.";
    return;
  }

  const number = Number(input.value);
  const round = gameRounds[gameRound];
  const item = round.items[gameQuestion];

  if (!Number.isFinite(number)) return;

  const tolerance = Math.max(
    0.01,
    Math.abs(item.answer) * 0.00001
  );

  const correct =
    Math.abs(number - item.answer) <= tolerance;

  gameAnswers[key] = {
    input: number,
    correct
  };

  if (correct) {
    scores[gameQuestion % 3] += round.points;
  }

  renderGame();
}

// ================================================
// 10. ШЫҒАРМАШЫЛЫҚ ФИНАЛ
// ================================================

const creativeTasks = [
  {
    title: "🔥 1-команда: Жылу",
    text: `
      Дәптерге жылуөткізгіштік құбылысының
      үлкен схемасын салыңдар.
      Ыстық және суық аймақтарды көрсетіңдер.

      Суретке жылудың берілу бағытын,
      Q белгісін және температураларды жазыңдар.

      Соңында 2 өмірлік мысал келтіріп,
      неге жылу осы бағытта берілетінін түсіндіріңдер.
    `
  },
  {
    title: "⚡ 2-команда: Энергия",
    text: `
      Өздерің жылу мөлшеріне байланысты
      есеп құрастырыңдар.

      Дәптерге берілгенін, қажетті формуланы,
      өлшем бірліктерін және толық шешімін жазыңдар.

      Есепте кемінде үш физикалық шама болсын.
      Жауапты кДж-ға айналдырыңдар.
    `
  },
  {
    title: "❄️ 3-команда: Температура",
    text: `
      Бір параққа жылуөткізгіштік, конвекция
      және сәулелену құбылыстарын салыстыратын
      үш түрлі сурет салыңдар.

      Әр суретке мысал келтіріңдер.
      Қайсысында зат қозғалады, қайсысында
      электромагниттік толқын таралады —
      соны түсіндіріңдер.
    `
  }
];

function creativeHTML() {
  return `
    <div class="card">
      <h2>🎨 Финалдық шығармашылық тапсырмалар</h2>
      <p class="lead">
        Үш команда өз тапсырмасын дәптерге
        немесе тақтаға орындайды.
      </p>

      ${creativeTasks.map((task, team) => `
        <div class="creative">
          <h3>${task.title}</h3>
          <p style="white-space:pre-line">${task.text}</p>

          <p><b>Бағалау:</b></p>
          <p>
            10 ұпай — ішінара орындалған.<br>
            20 ұпай — дұрыс және толық.<br>
            30 ұпай — өте жақсы түсіндірілген.
          </p>

          <div class="actions">
            ${[0, 10, 20, 30].map(points => `
              <button class="btn
                ${creativeAwards[team] === points
                  ? "primary" : "secondary"}"
                data-award-team="${team}"
                data-award-points="${points}">
                ${points} ұпай
              </button>
            `).join("")}
          </div>
          <p class="small">
            ${creativeAwards[team] === null
              ? "Әлі бағаланбады."
              : `Берілген ұпай: ${creativeAwards[team]}`}
          </p>
        </div>
      `).join("")}

      <div class="actions">
        <button id="backToRound7" class="btn secondary">
          ← 7-ойынға оралу
        </button>
        <button id="showWinner" class="btn primary"
          ${creativeAwards.some(v => v === null)
            ? "disabled" : ""}>
          🏆 Жеңімпазды анықтау
        </button>
      </div>

      <div id="winnerBox" class="winner"
        ${winnerVisible ? "" : "hidden"}>
        ${winnerVisible ? winnerHTML() : ""}
      </div>
    </div>
  `;
}

function bindCreative() {
  document.querySelectorAll("[data-award-team]").forEach(btn => {
    btn.onclick = () => {
      const team = Number(btn.dataset.awardTeam);
      const points = Number(btn.dataset.awardPoints);

      const previous = creativeAwards[team] ?? 0;

      scores[team] += points - previous;
      creativeAwards[team] = points;
      winnerVisible = false;

      renderGame();
    };
  });

  $("backToRound7").onclick = () => {
    gameRound = 6;
    gameQuestion = 0;
    renderGame();
  };

  $("showWinner").onclick = () => {
    winnerVisible = true;
    renderGame();
    $("winnerBox").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };
}

function winnerHTML() {
  const max = Math.max(...scores);

  const winners = scores
    .map((score, index) => ({ score, index }))
    .filter(item => item.score === max);

  if (winners.length > 1) {
    return `
      🏆 ТЕҢ НӘТИЖЕ!<br>
      ${winners.map(w =>
        escapeHTML(teamNames[w.index])).join(" және ")}<br>
      ${max} ұпай
    `;
  }

  return `
    🏆 ЖЕҢІМПАЗ!<br>
    ${escapeHTML(teamNames[winners[0].index])}<br>
    ${max} ұпай<br>
    🎉 Құттықтаймыз!
  `;
}

// ================================================
// 11. БАРЛЫҚ БЕТТЕГІ КАЛЬКУЛЯТОР
// ================================================

const calcPanel = $("calcPanel");

function toggleCalculator(open) {
  calcPanel.hidden = !open;
  $("calcToggle").setAttribute("aria-expanded", String(open));
}

$("calcToggle").onclick = () => {
  toggleCalculator(calcPanel.hidden);
};

$("calcClose").onclick = () => toggleCalculator(false);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    toggleCalculator(false);
  }
});

document.querySelectorAll(".calc-tab").forEach(button => {
  button.onclick = () => {
    const isPhysics = button.dataset.tab === "physics";

    $("mathMode").hidden = isPhysics;
    $("physicsMode").hidden = !isPhysics;

    document.querySelectorAll(".calc-tab").forEach(tab => {
      tab.classList.toggle(
        "active",
        (tab.dataset.tab === "physics") === isPhysics
      );
    });
  };
});

// ================================================
// 12. ҚАРАПАЙЫМ МАТЕМАТИКАЛЫҚ КАЛЬКУЛЯТОР
// ================================================

let mathCurrent = "0";
let mathPrevious = null;
let mathOperator = null;
let mathWaiting = false;

function mathDraw() {
  $("mathDisplay").textContent = mathCurrent;
}

function mathFormat(value) {
  if (!Number.isFinite(value)) return "Қате";
  return String(Number(value.toPrecision(12)));
}

function mathDigit(digit) {
  if (mathCurrent === "Қате" || mathWaiting) {
    mathCurrent = digit === "." ? "0." : digit;
    mathWaiting = false;
  } else if (digit === ".") {
    if (!mathCurrent.includes(".")) {
      mathCurrent += ".";
    }
  } else {
    mathCurrent = mathCurrent === "0"
      ? digit
      : mathCurrent + digit;
  }

  mathDraw();
}

function calculateOperation(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? NaN : a / b;
    default: return b;
  }
}

function mathChooseOperator(operator) {
  if (mathCurrent === "Қате") return;

  if (mathOperator !== null && !mathWaiting) {
    const result = calculateOperation(
      mathPrevious,
      Number(mathCurrent),
      mathOperator
    );

    mathCurrent = mathFormat(result);

    if (mathCurrent === "Қате") {
      mathPrevious = null;
      mathOperator = null;
      mathDraw();
      return;
    }
  }

  mathPrevious = Number(mathCurrent);
  mathOperator = operator;
  mathWaiting = true;
  mathDraw();
}

function mathEquals() {
  if (mathOperator === null || mathWaiting) return;

  const result = calculateOperation(
    mathPrevious,
    Number(mathCurrent),
    mathOperator
  );

  mathCurrent = mathFormat(result);
  mathPrevious = null;
  mathOperator = null;
  mathWaiting = true;

  mathDraw();
}

function mathAction(action) {
  switch (action) {
    case "clear":
      mathCurrent = "0";
      mathPrevious = null;
      mathOperator = null;
      mathWaiting = false;
      break;

    case "back":
      if (mathWaiting || mathCurrent === "Қате") {
        mathCurrent = "0";
        mathWaiting = false;
      } else {
        mathCurrent = mathCurrent.slice(0, -1) || "0";
        if (mathCurrent === "-") mathCurrent = "0";
      }
      break;

    case "percent":
      if (mathCurrent !== "Қате") {
        mathCurrent = mathFormat(Number(mathCurrent) / 100);
      }
      break;

    case "sign":
      if (mathCurrent !== "Қате" &&
          Number(mathCurrent) !== 0) {
        mathCurrent = mathCurrent.startsWith("-")
          ? mathCurrent.slice(1)
          : "-" + mathCurrent;
      }
      break;

    case "equals":
      mathEquals();
      return;
  }

  mathDraw();
}

document.querySelectorAll(".math-keys button").forEach(button => {
  button.onclick = () => {
    if (button.dataset.digit !== undefined) {
      mathDigit(button.dataset.digit);
    } else if (button.dataset.op) {
      mathChooseOperator(button.dataset.op);
    } else if (button.dataset.action) {
      mathAction(button.dataset.action);
    }
  };
});

// ================================================
// 13. ФИЗИКАЛЫҚ КАЛЬКУЛЯТОР
// ================================================

const physicsConfigs = {
  heat: [
    ["c", "c — жылусыйымдылық", 4200],
    ["m", "m — масса (кг)", 2],
    ["t1", "t₁ — бастапқы температура", 20],
    ["t2", "t₂ — соңғы температура", 50]
  ],
  capacity: [
    ["Q", "Q — жылу мөлшері (Дж)", 84000],
    ["m", "m — масса (кг)", 2],
    ["dt", "Δt — температура өзгерісі", 10]
  ],
  mass: [
    ["Q", "Q — жылу мөлшері (Дж)", 84000],
    ["c", "c — жылусыйымдылық", 4200],
    ["dt", "Δt — температура өзгерісі", 10]
  ],
  temperature: [
    ["Q", "Q — жылу мөлшері (Дж)", 84000],
    ["c", "c — жылусыйымдылық", 4200],
    ["m", "m — масса (кг)", 2]
  ],
  energy: [
    ["U", "ΔU — ішкі энергия өзгерісі (Дж)", 1000],
    ["A", "A — газ атқарған жұмыс (Дж)", 500]
  ],
  internal: [
    ["Q", "Q — берілген жылу (Дж)", 1500],
    ["A", "A — газ атқарған жұмыс (Дж)", 500]
  ],
  work: [
    ["Q", "Q — берілген жылу (Дж)", 1500],
    ["U", "ΔU — ішкі энергия өзгерісі (Дж)", 1000]
  ]
};

function renderPhysicsFields() {
  const type = $("formulaSelect").value;

  $("physicsFields").innerHTML = physicsConfigs[type]
    .map(([key, label, value]) => `
      <label class="field">
        ${label}
        <input id="phys_${key}" type="number"
               step="any" value="${value}">
      </label>
    `).join("");

  $("physicsResult").textContent =
    "Мәндерді енгізіп, «Есептеу» батырмасын бас.";
}

$("formulaSelect").onchange = renderPhysicsFields;

$("physicsCalculate").onclick = () => {
  const type = $("formulaSelect").value;
  const config = physicsConfigs[type];

  const values = {};

  for (const [key] of config) {
    const input = $("phys_" + key);

    if (!input || input.value.trim() === "") {
      $("physicsResult").textContent =
        "Барлық мәндерді енгіз.";
      return;
    }

    values[key] = Number(input.value);

    if (!Number.isFinite(values[key])) {
      $("physicsResult").textContent =
        "Сандарды дұрыс енгіз.";
      return;
    }
  }

  const v = values;
  let result;
  let unit = "";
  let label = "";
  let steps = "";

  try {
    if (type === "heat") {
      if (v.c <= 0 || v.m <= 0)
        throw new Error("c және m оң болуы керек.");

      const dt = v.t2 - v.t1;
      result = v.c * v.m * dt;
      label = "Q";
      unit = "Дж";
      steps = `Δt = ${format(v.t2)} − ${format(v.t1)} = ${format(dt)}°C\n` +
        `Q = ${format(v.c)} × ${format(v.m)} × ${format(dt)}`;
    }

    if (type === "capacity") {
      if (v.m <= 0 || v.dt === 0)
        throw new Error("m оң, Δt нөлден өзгеше болуы керек.");

      result = v.Q / (v.m * v.dt);
      label = "c";
      unit = "Дж/(кг·°C)";
      steps = `c = ${format(v.Q)}/(${format(v.m)} × ${format(v.dt)})`;
    }

    if (type === "mass") {
      if (v.c <= 0 || v.dt === 0)
        throw new Error("c оң, Δt нөлден өзгеше болуы керек.");

      result = v.Q / (v.c * v.dt);
      if (result <= 0)
        throw new Error("Енгізілген шамалардың таңбаларын тексер.");

      label = "m";
      unit = "кг";
      steps = `m = ${format(v.Q)}/(${format(v.c)} × ${format(v.dt)})`;
    }

    if (type === "temperature") {
      if (v.c <= 0 || v.m <= 0)
        throw new Error("c және m оң болуы керек.");

      result = v.Q / (v.c * v.m);
      label = "Δt";
      unit = "°C";
      steps = `Δt = ${format(v.Q)}/(${format(v.c)} × ${format(v.m)})`;
    }

    if (type === "energy") {
      result = v.U + v.A;
      label = "Q";
      unit = "Дж";
      steps = `Q = ${format(v.U)} + (${format(v.A)})`;
    }

    if (type === "internal") {
      result = v.Q - v.A;
      label = "ΔU";
      unit = "Дж";
      steps = `ΔU = ${format(v.Q)} − (${format(v.A)})`;
    }

    if (type === "work") {
      result = v.Q - v.U;
      label = "A";
      unit = "Дж";
      steps = `A = ${format(v.Q)} − (${format(v.U)})`;
    }

    if (!Number.isFinite(result)) {
      throw new Error("Нәтижені есептеу мүмкін емес.");
    }

    $("physicsResult").textContent =
      `${steps}\n\nЖауабы: ${label} = ${format(result)} ${unit}`;

  } catch (error) {
    $("physicsResult").textContent = error.message;
  }
};

// ================================================
// 14. САЙТТЫ ІСКЕ ҚОСУ
// ================================================

renderPhysicsFields();
mathDraw();
openStage(0);

console.log("PHYSICS LAB — BY DARKHAN");
console.log("8 түсіндірме, 18 есеп, 8 ойын кезеңі.");
console.log("Сабақ ұзақтығы: 80 минут.");
