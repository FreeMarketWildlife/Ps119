const sections = [
  {
    slug: "aleph",
    title: "Aleph",
    theme: "Wholehearted obedience",
    focus:
      "The blessed life begins with a willing heart that wants God's way more than spiritual appearance.",
    prayer:
      "Lord, make obedience joyful in me, not mechanical. Teach me to seek You with my whole heart.",
    practice:
      "Name one area where partial obedience has settled in, and bring that honestly before God.",
    prompts: [
      "Where do I most want blessing from God without the surrendered life that receives it?",
      "What would wholeheartedness look like in one decision I am facing this week?",
      "How can I begin today's quiet time with delight rather than duty?"
    ]
  },
  {
    slug: "beth",
    title: "Beth",
    theme: "The guarding power of God's word",
    focus:
      "God's word does not merely inform a life. It keeps a life from drifting when it is treasured within.",
    prayer:
      "Father, hide Your word deep in me so that temptation loses some of its shine.",
    practice:
      "Choose a single verse from this stanza to memorize or rewrite by hand today.",
    prompts: [
      "What patterns in my life are being shaped more by distraction than by Scripture?",
      "What would it mean for God's word to be treasured, not just read?",
      "Which small daily habit could help Scripture stay near me?"
    ]
  },
  {
    slug: "gimel",
    title: "Gimel",
    theme: "Open eyes for wonder",
    focus:
      "The psalmist asks for life, understanding, and opened eyes because spiritual sight is a gift before it is a skill.",
    prayer:
      "Open my eyes, Lord. Keep familiar truth from becoming invisible to me.",
    practice:
      "Pause long enough to notice one truth that feels ordinary and ask God to make it vivid again.",
    prompts: [
      "What truth have I heard so often that I no longer pause over it?",
      "Where do I need God to keep me alive and attentive instead of dulled and sleepy?",
      "What wonder in God's ways do I want to recover?"
    ]
  },
  {
    slug: "daleth",
    title: "Daleth",
    theme: "Strength in sorrow",
    focus:
      "This stanza turns grief into prayer and asks God to lift a soul that feels pressed down to the dust.",
    prayer:
      "Meet me in heaviness, Lord, and strengthen me through Your word rather than mere willpower.",
    practice:
      "Write one honest sentence about your discouragement, then one sentence about God's sustaining truth.",
    prompts: [
      "What is weighing on me right now that I need to name plainly before God?",
      "How have I tried to carry sorrow without inviting God into it?",
      "What promise would steady me when my energy is low?"
    ]
  },
  {
    slug: "he",
    title: "He",
    theme: "A teachable heart",
    focus:
      "The path of obedience becomes sustainable when God bends the heart, not just the schedule.",
    prayer:
      "Teach me Your way and give me a heart that wants to stay in it to the end.",
    practice:
      "Ask God to re-order one desire that is competing with faithfulness.",
    prompts: [
      "Where do I need instruction because sincerity alone is not enough?",
      "What desire is quietly pulling me away from a steady walk with God?",
      "What would endurance in obedience look like over the next month?"
    ]
  },
  {
    slug: "vav",
    title: "Vav",
    theme: "Steady courage and public faith",
    focus:
      "Mercy and truth create a life that can answer shame, walk in freedom, and speak openly without fear.",
    prayer:
      "Let Your steadfast love make me brave enough to trust and speak the truth.",
    practice:
      "Identify one setting where you want your faith to be quietly unashamed.",
    prompts: [
      "What kind of fear keeps me from being open about God's work in my life?",
      "How does obedience create freedom instead of restriction?",
      "Where do I need courage that is gentle rather than performative?"
    ]
  },
  {
    slug: "zayin",
    title: "Zayin",
    theme: "Hope in affliction",
    focus:
      "The word of God becomes a song in difficult places and a reason not to surrender in pain.",
    prayer:
      "Keep Your promises bright to me when the day feels thin or hostile.",
    practice:
      "Turn one remembered promise into a short prayer you repeat during the day.",
    prompts: [
      "Which promise of God has carried me before, and why have I forgotten it lately?",
      "How can worship become resistance when life is hard?",
      "What would hope look like in my current affliction?"
    ]
  },
  {
    slug: "heth",
    title: "Heth",
    theme: "The Lord as portion",
    focus:
      "Contentment begins where the soul says God Himself is enough, and that confession shapes practical choices.",
    prayer:
      "Be my portion, Lord, not just my helper when other portions fail.",
    practice:
      "Notice one place where you are leaning on a false source of security and release it to God.",
    prompts: [
      "What am I treating as my real portion right now?",
      "How would my day change if I believed God Himself was enough for me?",
      "What act of repentance would fit a heart returning to God?"
    ]
  },
  {
    slug: "teth",
    title: "Teth",
    theme: "God's goodness in correction",
    focus:
      "This stanza receives affliction as a place where God's goodness can form humility and deeper trust.",
    prayer:
      "Teach me to receive correction without resentment and affliction without wasting it.",
    practice:
      "Ask whether a recent hardship has exposed something God wants to heal or reshape.",
    prompts: [
      "What lesson has suffering been pressing into me lately?",
      "Where do I resist the idea that God could be good while disciplining me?",
      "How has hardship made me more teachable?"
    ]
  },
  {
    slug: "yodh",
    title: "Yodh",
    theme: "Held by the Maker",
    focus:
      "The God who formed us is able to steady us, gather us into community, and turn suffering toward hope.",
    prayer:
      "Maker of my life, shape me with the same care with which You made me.",
    practice:
      "Bring one area of confusion back to the God who knows your frame completely.",
    prompts: [
      "How does remembering that God made me change the way I see today's struggles?",
      "What kind of understanding do I need from God right now?",
      "Where do I need hope that will not embarrass those who trust in Him?"
    ]
  },
  {
    slug: "kaph",
    title: "Kaph",
    theme: "Longing under strain",
    focus:
      "The psalmist waits under pressure, asks how long, and keeps reaching for the word when relief feels delayed.",
    prayer:
      "Sustain my hope, Lord, when answers feel late and my strength feels stretched.",
    practice:
      "Tell God specifically where waiting has begun to wear down your heart.",
    prompts: [
      "Where am I tired of waiting, and how has that fatigue affected my faith?",
      "What keeps me reaching for God's word when circumstances stay unresolved?",
      "How can I wait honestly without collapsing into despair?"
    ]
  },
  {
    slug: "lamedh",
    title: "Lamedh",
    theme: "The settled permanence of God's word",
    focus:
      "God's faithfulness is not temporary. His word stands firm beyond changing moods, circumstances, and generations.",
    prayer:
      "Anchor me in what is settled in heaven when everything else feels unstable.",
    practice:
      "List one unstable thing in your life and one truth of God that outlasts it.",
    prompts: [
      "What feels most unstable around me right now?",
      "How does God's permanence give me steadiness in ordinary life?",
      "Which truth of Scripture has proved reliable over time?"
    ]
  },
  {
    slug: "mem",
    title: "Mem",
    theme: "Wisdom shaped by love",
    focus:
      "Scripture makes a person wise not simply by being studied, but by being loved, remembered, and obeyed.",
    prayer:
      "Grow in me a wiser love for Your word, not a merely sharper mind.",
    practice:
      "Return to one command you already know and ask what deeper obedience would look like.",
    prompts: [
      "What is the difference between collecting Bible knowledge and walking in wisdom?",
      "How has obedience sharpened my understanding before?",
      "What command of God do I already know well enough to act on today?"
    ]
  },
  {
    slug: "nun",
    title: "Nun",
    theme: "A lamp in dark places",
    focus:
      "God's word lights the next faithful step, especially when the whole path is not visible yet.",
    prayer:
      "Light my next step, Lord, even if You do not show me the whole road at once.",
    practice:
      "Identify the next faithful step you do know, and commit to that instead of demanding the whole map.",
    prompts: [
      "Where am I asking for total clarity when God may only be giving the next step?",
      "What vow of faithfulness needs to be renewed today?",
      "How has God's word been a lamp to me before?"
    ]
  },
  {
    slug: "samekh",
    title: "Samekh",
    theme: "Undivided loyalty",
    focus:
      "Double-mindedness weakens the soul, but God's presence becomes a place of safety for those who hope in Him.",
    prayer:
      "Guard me from a divided heart and teach me the rest that comes from trusting You.",
    practice:
      "Name one split allegiance that needs to be surrendered.",
    prompts: [
      "Where do I feel internally divided right now?",
      "What does wholehearted trust look like in a practical decision?",
      "How does God's nearness create safety when other supports feel fragile?"
    ]
  },
  {
    slug: "ayin",
    title: "Ayin",
    theme: "Justice, mercy, and longing for God's intervention",
    focus:
      "The psalmist asks God to act with justice and kindness when oppression, delay, and misunderstanding increase.",
    prayer:
      "See me, defend what is right, and keep my heart tender while I wait for Your help.",
    practice:
      "Bring one unresolved burden to God without trying to control the outcome in advance.",
    prompts: [
      "Where do I long for God to act because I cannot fix the situation myself?",
      "How can I seek justice without becoming hardened?",
      "What does patient dependence look like in this season?"
    ]
  },
  {
    slug: "pe",
    title: "Pe",
    theme: "The light of opened understanding",
    focus:
      "God's words give light, and that light creates hunger, humility, and a longing to walk without spiritual clutter.",
    prayer:
      "Give me light that reaches both my understanding and my desires.",
    practice:
      "Make room for understanding by setting aside one source of noise for the rest of the day.",
    prompts: [
      "What kind of noise is crowding out spiritual understanding for me?",
      "Where do I need God's light rather than my own analysis?",
      "What holy desire do I want God to increase?"
    ]
  },
  {
    slug: "tsadhe",
    title: "Tsadhe",
    theme: "Righteousness that endures",
    focus:
      "God is righteous, His rules are trustworthy, and zeal grows where His truth is prized even when others ignore it.",
    prayer:
      "Keep me faithful when righteousness feels costly or unfashionable.",
    practice:
      "Choose one area where quiet integrity matters more than visible approval.",
    prompts: [
      "What stirs holy zeal in me, and what merely stirs frustration?",
      "Where am I tempted to compromise because others seem unconcerned?",
      "How can God's righteousness steady my own?"
    ]
  },
  {
    slug: "qoph",
    title: "Qoph",
    theme: "Early prayer and hopeful waiting",
    focus:
      "The psalmist rises early, cries out, and places the first attention of the day on God and His word.",
    prayer:
      "Teach me to begin with You, Lord, before hurry shapes the tone of my day.",
    practice:
      "Give the first minutes of tomorrow to prayer before reaching for a screen or task list.",
    prompts: [
      "What usually claims the first attention of my day?",
      "How might early prayer change the atmosphere of my decisions?",
      "What does hopeful waiting look like before the day gathers speed?"
    ]
  },
  {
    slug: "resh",
    title: "Resh",
    theme: "Rescue and renewal",
    focus:
      "This stanza asks God to consider suffering, revive the soul, and act according to His steadfast character.",
    prayer:
      "Look on my need with mercy, and revive the parts of me that feel worn down.",
    practice:
      "Pray specifically for renewal in one part of life that feels spiritually flat.",
    prompts: [
      "What kind of rescue do I need from God right now?",
      "Where have I grown dull and in need of reviving grace?",
      "How does God's character encourage me to ask boldly?"
    ]
  },
  {
    slug: "shin",
    title: "Shin",
    theme: "Peace in loving God's word",
    focus:
      "Deep love for God's law produces steadiness, worship, and a kind of peace that is not easily tripped by chaos.",
    prayer:
      "Form in me the peace that grows from loving what You love.",
    practice:
      "End today's reading with thanksgiving instead of analysis alone.",
    prompts: [
      "What usually steals my peace most quickly?",
      "How does delight in God's word make a life less reactive?",
      "What would praise sound like from my actual circumstances today?"
    ]
  },
  {
    slug: "tav",
    title: "Tav",
    theme: "Final praise and dependent seeking",
    focus:
      "Psalm 119 closes with prayerful dependence, praise, and the honesty of a sheep that still needs to be sought.",
    prayer:
      "Receive my praise, keep teaching me, and seek me wherever I am prone to wander.",
    practice:
      "End this session by naming one way God has met you and one way you still need His shepherding.",
    prompts: [
      "What would it look like to finish this quiet time in praise rather than self-evaluation?",
      "Where do I still need God to come after me because I wander?",
      "What prayer from Psalm 119 do I want to carry into tomorrow?"
    ]
  }
];

const storageKey = "ps119-quiet-time-v1";

const sectionList = document.querySelector("#sectionList");
const progressCopy = document.querySelector("#progressCopy");
const progressBar = document.querySelector("#progressBar");
const todayTitle = document.querySelector("#todayTitle");
const todayTheme = document.querySelector("#todayTheme");
const todayVerseRange = document.querySelector("#todayVerseRange");
const todaySummary = document.querySelector("#todaySummary");
const selectedRange = document.querySelector("#selectedRange");
const studyHeading = document.querySelector("#study-heading");
const selectedTheme = document.querySelector("#selectedTheme");
const selectedFocus = document.querySelector("#selectedFocus");
const selectedPrayer = document.querySelector("#selectedPrayer");
const selectedPractice = document.querySelector("#selectedPractice");
const promptList = document.querySelector("#promptList");
const intentionInput = document.querySelector("#intentionInput");
const notesInput = document.querySelector("#notesInput");
const saveStatus = document.querySelector("#saveStatus");
const toggleCompleted = document.querySelector("#toggleCompleted");
const jumpToToday = document.querySelector("#jumpToToday");
const nextSection = document.querySelector("#nextSection");
const clearNote = document.querySelector("#clearNote");
const timerDisplay = document.querySelector("#timerDisplay");
const startPauseTimer = document.querySelector("#startPauseTimer");
const resetTimer = document.querySelector("#resetTimer");
const timerStatus = document.querySelector("#timerStatus");
const timerPresetButtons = Array.from(document.querySelectorAll(".timer-preset"));

let timerMinutes = 10;
let timerRemaining = timerMinutes * 60;
let timerId = null;

const todayIndex = (getDayOfYear(new Date()) - 1) % sections.length;

const state = loadState();

if (!state.selected || !sections.some((section) => section.slug === state.selected)) {
  state.selected = sections[todayIndex].slug;
}

render();
renderTimer();

sectionList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-slug]");
  if (!button) {
    return;
  }

  state.selected = button.dataset.slug;
  saveState("Stanza updated");
  render();
});

intentionInput.addEventListener("input", () => {
  state.intention = intentionInput.value;
  saveState("Intention saved locally");
});

notesInput.addEventListener("input", () => {
  state.notes[state.selected] = notesInput.value;
  saveState("Reflection saved locally");
  renderProgress();
});

toggleCompleted.addEventListener("click", () => {
  const isComplete = state.completed.includes(state.selected);

  if (isComplete) {
    state.completed = state.completed.filter((slug) => slug !== state.selected);
    saveState("Marked as in progress");
  } else {
    state.completed = [...state.completed, state.selected];
    saveState("Marked as prayed through");
  }

  render();
});

jumpToToday.addEventListener("click", () => {
  state.selected = sections[todayIndex].slug;
  saveState("Opened today's stanza");
  render();
});

nextSection.addEventListener("click", () => {
  const currentIndex = sections.findIndex((section) => section.slug === state.selected);
  const nextIndex = (currentIndex + 1) % sections.length;
  state.selected = sections[nextIndex].slug;
  saveState("Moved to the next stanza");
  render();
});

clearNote.addEventListener("click", () => {
  state.notes[state.selected] = "";
  notesInput.value = "";
  saveState("Current note cleared");
  renderProgress();
});

timerPresetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timerMinutes = Number(button.dataset.minutes);
    timerRemaining = timerMinutes * 60;
    stopTimer();
    timerPresetButtons.forEach((preset) => preset.classList.remove("is-active"));
    button.classList.add("is-active");
    timerStatus.textContent = "Choose a length and settle in.";
    renderTimer();
  });
});

startPauseTimer.addEventListener("click", () => {
  if (timerId) {
    stopTimer();
    timerStatus.textContent = "Timer paused. Pick up again when you are ready.";
    renderTimer();
    return;
  }

  timerStatus.textContent = "Quiet time is underway.";
  startPauseTimer.textContent = "Pause timer";
  timerId = window.setInterval(() => {
    timerRemaining -= 1;

    if (timerRemaining <= 0) {
      timerRemaining = 0;
      stopTimer();
      timerStatus.textContent = "Timer complete. Stay still for a moment before moving on.";
    }

    renderTimer();
  }, 1000);
});

resetTimer.addEventListener("click", () => {
  stopTimer();
  timerRemaining = timerMinutes * 60;
  timerStatus.textContent = "Timer reset. Begin again when you are ready.";
  renderTimer();
});

function render() {
  const selectedSection = sections.find((section) => section.slug === state.selected);
  const suggestedSection = sections[todayIndex];

  todayTitle.textContent = suggestedSection.title;
  todayTheme.textContent = suggestedSection.theme;
  todayVerseRange.textContent = getVerseRange(todayIndex);
  todaySummary.textContent = suggestedSection.focus;

  selectedRange.textContent = getVerseRange(sections.indexOf(selectedSection));
  studyHeading.textContent = selectedSection.title;
  selectedTheme.textContent = selectedSection.theme;
  selectedFocus.textContent = selectedSection.focus;
  selectedPrayer.textContent = selectedSection.prayer;
  selectedPractice.textContent = selectedSection.practice;

  promptList.innerHTML = selectedSection.prompts
    .map((prompt, index) => {
      const labels = ["Observe", "Reflect", "Respond"];
      return `
        <article class="prompt-card">
          <h4>${labels[index]}</h4>
          <p>${prompt}</p>
        </article>
      `;
    })
    .join("");

  intentionInput.value = state.intention || "";
  notesInput.value = state.notes[state.selected] || "";

  const isComplete = state.completed.includes(state.selected);
  toggleCompleted.textContent = isComplete ? "Mark as revisiting" : "Mark as prayed through";

  renderSectionButtons();
  renderProgress();
}

function renderSectionButtons() {
  sectionList.innerHTML = sections
    .map((section, index) => {
      const isActive = section.slug === state.selected;
      const isComplete = state.completed.includes(section.slug);
      const buttonClass = [
        "section-button",
        isActive ? "is-active" : "",
        isComplete ? "is-complete" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${buttonClass}" data-slug="${section.slug}" type="button">
          <div class="section-title">
            <strong>${section.title}</strong>
            <span>${index + 1}</span>
          </div>
          <div class="section-meta">${getVerseRange(index)}</div>
        </button>
      `;
    })
    .join("");
}

function renderProgress() {
  const completedCount = state.completed.length;
  const percentage = (completedCount / sections.length) * 100;

  progressCopy.textContent = `${completedCount} of ${sections.length} stanzas marked as prayed through.`;
  progressBar.style.width = `${percentage}%`;
}

function loadState() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : {};

    return {
      selected: parsed.selected || "",
      intention: parsed.intention || "",
      notes: parsed.notes || {},
      completed: Array.isArray(parsed.completed) ? parsed.completed : []
    };
  } catch (error) {
    return {
      selected: "",
      intention: "",
      notes: {},
      completed: []
    };
  }
}

function saveState(message) {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
  saveStatus.textContent = `${message} at ${new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  })}`;
}

function getVerseRange(index) {
  const start = index * 8 + 1;
  const end = start + 7;
  return `Psalm 119:${start}-${end}`;
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const difference = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(difference / oneDay);
}

function renderTimer() {
  timerDisplay.textContent = formatTime(timerRemaining);
  startPauseTimer.textContent = timerId ? "Pause timer" : "Start timer";
}

function stopTimer() {
  if (!timerId) {
    return;
  }

  window.clearInterval(timerId);
  timerId = null;
  startPauseTimer.textContent = "Start timer";
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
