// ========================================
// Julia Ancliff Coach - Quiz Engine
// "What's Really Keeping You Stuck?"
// ========================================

const TYPES = {
  postponer: {
    key: 'postponer',
    name: 'The Quiet Postponer',
    tagline: 'You know something needs to change. You\'ve known for a while.',
    description: [
      'You have a pattern, and it\'s a kind one. When life gets busy or complicated, your own needs are the first thing you move to the bottom of the list. Not because you don\'t value them, but because there\'s always something more pressing, someone who needs you more, a reason why now isn\'t quite the right time.',
      'The thing is, you\'ve been saying "not yet" for a while now. And on some level, you know that. There\'s a quiet frustration beneath the patience. A sense that your turn keeps being put off, not by anyone else, but by you.',
      'Here\'s what I notice when I work with people who share this pattern: the waiting is rarely about timing. It\'s about permission. Somewhere along the way, you learned that your needs come after everyone else\'s. That taking time for yourself feels indulgent. That the "right moment" will announce itself clearly, when in truth it never does.',
      'Your steadiness, your patience, your ability to hold everything together. These are real strengths. And the fact that you\'re here, taking this quiz, tells me something important: part of you already knows it\'s time.'
    ],
    strength: 'You hold an enormous amount together, and you do it well. You\'re patient, steady, and reliable. That same steadiness, turned inward, becomes the foundation for real, lasting change.',
    need: 'Your own permission. A space where you are the priority for once. Not a plan for how to fix everything, but a place to hear yourself think about what you actually want.',
    cta: 'If any of this feels familiar, I\'d love to talk. I offer a free, 30-minute conversation. No agenda, no pressure, no obligation. Just a straightforward chat to see if talking things through might help you find your way forward.'
  },
  weigher: {
    key: 'weigher',
    name: 'The Endless Weigher',
    tagline: 'You\'re not short on insight. You might be drowning in it.',
    description: [
      'You\'re a thinker. A thorough, careful, see-it-from-every-angle thinker. And most of the time, that serves you brilliantly. You\'re the person people come to for considered advice, for different perspectives, for the question nobody else thought to ask.',
      'But when it comes to your own life? All that thinking has become a bit of a trap. You\'ve analysed your options so thoroughly that they\'ve started to blur. Every path forward seems to reveal a new complication. If anything, you have too much self-awareness. You can see the pros and cons of everything, which means nothing feels like the obvious choice.',
      'Here\'s what I\'ve noticed: the thinking feels productive. It feels like progress. But if you\'re honest with yourself, you\'ve been circling the same questions for longer than you\'d like to admit. The analysis isn\'t bringing you closer to a decision. It\'s protecting you from having to make one.',
      'That\'s not a criticism. It\'s a very human thing to do. Staying in "thinking mode" is safer than committing to a direction that might be wrong. But the cost is real: while you\'re weighing it all up, life carries on without you.'
    ],
    strength: 'A truly thoughtful mind. You see complexity where others don\'t. When you finally commit to a direction, your decisions tend to be well-considered and solid.',
    need: 'A conversation with someone who won\'t add more options. Someone whose job is to help you hear the answer you already have, the one that keeps getting drowned out by all the other possibilities.',
    cta: 'If you\'re tired of going in circles, let\'s talk. I offer a free, 30-minute conversation. No pressure and no agenda. Just a chance to talk it through with someone who listens for a living.'
  },
  performer: {
    key: 'performer',
    name: 'The Quiet Performer',
    tagline: 'Things look fine from the outside. That\'s part of the problem.',
    description: [
      'This one can be hard to explain to people, because from the outside, your life looks good. Maybe even enviable. You\'re competent, capable, and you\'ve built something that works. The problem is that "works" and "feels right" are not always the same thing.',
      'You\'ve probably been aware of it for some time: there\'s a gap between the life people see and the one you actually experience. It\'s not that you\'re unhappy, exactly. It\'s more like a quiet sense of disconnection. A feeling of going through the motions. Of being very good at a role that doesn\'t quite fit anymore.',
      'The tricky thing about this pattern is that it doesn\'t feel urgent enough to act on. Nobody is in crisis. Nothing is broken. And so you carry on, because what would you even say? "My perfectly fine life doesn\'t feel like mine"? It sounds ungrateful, even to your own ears.',
      'But it\'s not ungrateful. It\'s honest. And that honesty, the willingness to admit that something is off even when it\'s hard to put into words, is something most people never reach.'
    ],
    strength: 'You\'ve handled difficult situations and demanding environments well. The fact that you can sense "something is off" is itself something most people never develop.',
    need: 'A space where you don\'t have to perform. Where you can say "I don\'t know what I want" or "I\'m not sure this is enough" without it being dramatic. Sometimes the most helpful thing is simply being heard.',
    cta: 'If something here rang true, I\'m here. A free, 30-minute conversation is a quiet, confidential first step. No sales pitch, no obligation. Just a chance to say the things you haven\'t said out loud yet.'
  },
  juggler: {
    key: 'juggler',
    name: 'The Dutiful Juggler',
    tagline: 'You hold a lot. And you hold it well. But somewhere in there, you\'ve lost sight of you.',
    description: [
      'You hold a lot. And you hold it well. That\'s not flattery, it\'s just a fact. You\'re the person who remembers, who organises, who shows up. The one people count on. And you don\'t resent it, not really. You care about the things you carry. The people, the responsibilities, the roles. They matter to you.',
      'The trouble is, somewhere in all that juggling, you\'ve lost track of something: what you want. Not as a parent, partner, or professional. Just as you. It\'s been so long since you thought about your own needs as separate from everyone else\'s that the question "what do you actually want?" might stop you in your tracks for a moment.',
      'This isn\'t because you\'re selfless to a fault (though you might be). It\'s because your identity has become so intertwined with your roles that it\'s hard to find where they end and you begin. "What everyone needs" and "what I want" have merged, and unpicking them feels complicated. Maybe even a bit frightening.',
      'But here\'s the thing: you can\'t pour from a cup that\'s been empty for this long. And the people who rely on you would be the first to say you deserve something for yourself. You\'re just the last person to believe it.'
    ],
    strength: 'Real emotional intelligence and the ability to hold multiple competing demands well. You\'re the person everyone leans on because you\'re good at it.',
    need: 'Time that is just for you. A proper conversation where someone asks you, with real curiosity, what you want, and then listens without needing anything from you in return.',
    cta: 'This could be a good first step. My free, 30-minute conversation is completely confidential, with no pressure and no obligation. Just a space where, for half an hour, you are the only person on the agenda.'
  },
  nearly: {
    key: 'nearly',
    name: 'The Nearly Ready',
    tagline: 'You\'re closer to change than you think. Closer than any of the other types.',
    description: [
      'You\'re closer to change than you think. In fact, you\'re closer than any of the other types. You know what you want, or at least you know the direction. You\'ve probably started to make it happen more than once. You\'ve thought about it, talked about it, maybe even taken a first step.',
      'And then something pulled you back.',
      'It might have been a wobble of confidence. A practical concern that suddenly loomed larger. A fear you couldn\'t quite name. Or just the weight of making a real, irreversible decision. So you retreated to the planning stage, where it feels safer. Where the change is still a possibility and not a commitment.',
      'The pattern here isn\'t avoidance. It\'s something more subtle. You\'re not afraid of change itself. You\'re afraid of getting it wrong. Of leaping and discovering you\'ve landed in the wrong place. So you keep rehearsing the jump without ever leaving the edge. But notice this: you keep coming back. You keep standing at that edge. That isn\'t indecision. That\'s determination.'
    ],
    strength: 'Courage. You\'ve already done the hardest part: you\'ve been honest with yourself about what you want. The fact that you keep coming back to it tells you everything.',
    need: 'Someone in your corner. Not someone to push you, but someone to walk alongside you as you figure out what the first real step looks like. Someone who takes the fear seriously and helps build a plan that feels manageable.',
    cta: 'You\'re ready for a conversation. My free 30-minute call is a no-pressure, no-obligation first step. We\'ll just talk. About where you are, where you want to be, and what\'s standing between the two. Sometimes that\'s all it takes.'
  }
};

const QUESTIONS = [
  {
    number: 1,
    text: 'When you think about what you want from the next few years, what comes up first?',
    options: [
      { text: 'I know I want something different, but I keep telling myself it\'s not the right time.', type: 'postponer' },
      { text: 'I have so many ideas and possibilities that I can\'t settle on one direction.', type: 'weigher' },
      { text: 'Honestly, I\'m not sure I could tell you what I want anymore. It\'s been a while since I thought about it.', type: 'juggler' },
      { text: 'I know roughly what I want, but something keeps stopping me from going after it.', type: 'nearly' },
      { text: 'I think things look fine from the outside, but inside, something feels off.', type: 'performer' }
    ]
  },
  {
    number: 2,
    text: 'When a friend asks "How are you?", what\'s your honest internal response?',
    options: [
      { text: '"Busy. Fine. You know how it is." And then I change the subject.', type: 'juggler' },
      { text: '"I\'m alright, but..." There\'s always a "but" I don\'t say out loud.', type: 'performer' },
      { text: '"I\'ve been thinking a lot about some changes, actually." But I\'ve been saying that for months.', type: 'weigher' },
      { text: '"Good, good." And I mean it, mostly. But there\'s this nagging feeling I keep putting to one side.', type: 'postponer' },
      { text: '"Honestly? I\'m ready for something to shift." I just haven\'t made it happen yet.', type: 'nearly' }
    ]
  },
  {
    number: 3,
    text: 'What does "stuck" actually feel like for you right now?',
    options: [
      { text: 'Like I\'m running on a treadmill. Very busy, but not actually getting anywhere that matters to me.', type: 'juggler' },
      { text: 'Like I\'m watching my own life from slightly outside it. Everything works, but it doesn\'t quite feel like mine.', type: 'performer' },
      { text: 'Like I\'m standing in a room with too many doors and I can\'t choose which one to walk through.', type: 'weigher' },
      { text: 'Like I\'m waiting for something. I\'m just not sure what.', type: 'postponer' },
      { text: 'Like I\'m so close to making a change, but there\'s an invisible wall between me and actually doing it.', type: 'nearly' }
    ]
  },
  {
    number: 4,
    text: 'When you imagine making a big change in your life, what\'s the first thought that follows?',
    options: [
      { text: '"But what about everyone else? They\'re relying on me."', type: 'juggler' },
      { text: '"What if I get it wrong? I need to think about this more carefully."', type: 'weigher' },
      { text: '"I\'ll get to it. Once things calm down a bit."', type: 'postponer' },
      { text: '"I want to. I really do. So why haven\'t I?"', type: 'nearly' },
      { text: '"Would anyone even understand why I want to change? My life is perfectly fine on paper."', type: 'performer' }
    ]
  },
  {
    number: 5,
    text: 'How do you typically spend the last hour before bed?',
    options: [
      { text: 'Going over the day, wondering if I handled things well enough. Mentally preparing for tomorrow.', type: 'performer' },
      { text: 'Scrolling, reading, watching something. Anything to switch off from the mental noise.', type: 'weigher' },
      { text: 'Running through the list of everything I need to do for other people tomorrow.', type: 'juggler' },
      { text: 'Thinking "tomorrow I\'ll start making changes." And meaning it, in that moment.', type: 'postponer' },
      { text: 'Feeling restless. Like there\'s something I should be doing but I can\'t quite bring myself to start.', type: 'nearly' }
    ]
  },
  {
    number: 6,
    text: 'A close friend comes to you with exactly the same situation you\'re in. What would you tell them?',
    options: [
      { text: '"You\'ve been talking about this for ages. What are you actually waiting for?"', type: 'postponer' },
      { text: '"Stop overthinking it. You know what you want. Just go for it."', type: 'weigher' },
      { text: '"It\'s okay to admit that things aren\'t working, even if they look fine."', type: 'performer' },
      { text: '"You\'re allowed to want things for yourself. That\'s not selfish."', type: 'juggler' },
      { text: '"You\'re so close. The only thing standing in your way is you."', type: 'nearly' }
    ]
  },
  {
    number: 7,
    text: 'If you could change one thing about how you approach decisions, what would it be?',
    options: [
      { text: 'I\'d stop waiting for the "perfect moment" and just begin.', type: 'postponer' },
      { text: 'I\'d trust my gut more and think less.', type: 'weigher' },
      { text: 'I\'d ask myself what I want before asking what everyone else needs.', type: 'juggler' },
      { text: 'I\'d stop performing confidence I don\'t feel and be honest about what isn\'t working.', type: 'performer' },
      { text: 'I\'d follow through. I\'m excellent at planning and terrible at starting.', type: 'nearly' }
    ]
  },
  {
    number: 8,
    text: 'What would feel like the most useful thing to come out of this?',
    options: [
      { text: 'Feeling like it\'s okay to put myself first for once.', type: 'juggler' },
      { text: 'Understanding why I keep going in circles, even though I\'m smart enough to know better.', type: 'weigher' },
      { text: 'Realising that the life I\'ve built doesn\'t have to be the life I keep living.', type: 'performer' },
      { text: 'Knowing that wanting more is enough of a reason to start.', type: 'postponer' },
      { text: 'Getting past the gap between wanting to change and actually changing.', type: 'nearly' }
    ]
  }
];

// ========================================
// State
// ========================================

let currentQuestion = 0;
let answers = [];
let scores = { postponer: 0, weigher: 0, performer: 0, juggler: 0, nearly: 0 };

// ========================================
// DOM helpers
// ========================================

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

// ========================================
// Screen transitions
// ========================================

function showScreen(screenId) {
  const current = $('.screen.active');
  const next = document.getElementById(screenId);

  if (current) {
    current.classList.add('fade-out');
    setTimeout(() => {
      current.classList.remove('active', 'fade-out');
      next.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  } else {
    next.classList.add('active');
  }
}

// ========================================
// Quiz rendering
// ========================================

function startQuiz() {
  currentQuestion = 0;
  answers = [];
  scores = { postponer: 0, weigher: 0, performer: 0, juggler: 0, nearly: 0 };
  showScreen('quiz-screen');
  renderQuestion(0);
  updateProgress();
}

function renderQuestion(index) {
  const q = QUESTIONS[index];
  const area = $('#question-area');

  // Shuffle options for each render so the order isn't always the same
  const shuffled = [...q.options].sort(() => Math.random() - 0.5);

  const html = `
    <div class="question-container active" data-question="${index}">
      <div class="question-number">Question ${q.number} of ${QUESTIONS.length}</div>
      <h2 class="question-text">${q.text}</h2>
      <div class="options">
        ${shuffled.map((opt, i) => `
          <button class="option" data-type="${opt.type}" data-index="${i}" onclick="selectOption(this)">
            <span class="option-marker"></span>
            <span class="option-text">${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // If there's a current question, animate out
  const currentQ = area.querySelector('.question-container.active');
  if (currentQ) {
    currentQ.classList.add('exit');
    currentQ.classList.remove('active');
    setTimeout(() => {
      area.innerHTML = html;
    }, 260);
  } else {
    area.innerHTML = html;
  }
}

function selectOption(el) {
  // Visual feedback
  const options = el.parentElement.querySelectorAll('.option');
  options.forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');

  // Record answer
  const type = el.dataset.type;
  answers[currentQuestion] = type;
  scores[type]++;

  // Auto-advance after a brief pause
  setTimeout(() => {
    if (currentQuestion < QUESTIONS.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
      updateProgress();
    } else {
      showScreen('email-screen');
    }
  }, 400);
}

function goBack() {
  if (currentQuestion > 0) {
    // Undo the last answer's score
    const lastType = answers[currentQuestion];
    if (lastType) scores[lastType]--;

    currentQuestion--;
    renderQuestion(currentQuestion);
    updateProgress();
  }
}

function updateProgress() {
  const pct = ((currentQuestion) / QUESTIONS.length) * 100;
  $('.progress-bar').style.width = pct + '%';
  $('.progress-step').textContent = `Question ${currentQuestion + 1} of ${QUESTIONS.length}`;

  // Update ARIA on progress bar
  const progressContainer = $('.progress-bar-container');
  if (progressContainer) {
    progressContainer.setAttribute('aria-valuenow', Math.round(pct));
  }

  const backBtn = $('.progress-back');
  if (currentQuestion > 0) {
    backBtn.classList.add('visible');
  } else {
    backBtn.classList.remove('visible');
  }
}

// ========================================
// Email capture
// ========================================

function submitEmail(e) {
  e.preventDefault();
  // In production, this would POST to MailerLite/ScoreApp
  // For the proof of concept, we just proceed to results
  showResults();
}

function skipEmail() {
  showResults();
}

// ========================================
// Results
// ========================================

function calculateResult() {
  // Find highest score
  let maxScore = 0;
  let resultType = 'postponer';

  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  }

  // Tiebreaker: favour Q3 (index 2) and Q4 (index 3) answers, then Q8 (index 7)
  const tiedTypes = Object.entries(scores)
    .filter(([, score]) => score === maxScore)
    .map(([type]) => type);

  if (tiedTypes.length > 1) {
    // Check Q3 and Q4
    const q3Answer = answers[2];
    const q4Answer = answers[3];
    if (tiedTypes.includes(q3Answer)) return q3Answer;
    if (tiedTypes.includes(q4Answer)) return q4Answer;
    // Check Q8
    const q8Answer = answers[7];
    if (tiedTypes.includes(q8Answer)) return q8Answer;
  }

  return resultType;
}

function showResults() {
  const typeKey = calculateResult();
  const type = TYPES[typeKey];

  // Populate results
  $('#result-name').textContent = type.name;
  $('#result-tagline').textContent = type.tagline;

  // Build description paragraphs
  const descEl = $('#result-description');
  descEl.innerHTML = type.description.map(p => `<p>${p}</p>`).join('');

  // Strength and need
  $('#result-strength').textContent = type.strength;
  $('#result-need').textContent = type.need;

  // CTA
  $('#result-cta-text').textContent = type.cta;

  showScreen('results-screen');
}

function retakeQuiz() {
  showScreen('landing-screen');
}

// ========================================
// Init
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Landing is shown by default via .active class in HTML
});
