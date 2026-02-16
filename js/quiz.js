// ========================================
// Julia Ancliff Coach - Quiz Engine
// "What's Really Keeping You Stuck?"
// ========================================

const TYPES = {
  postponer: {
    key: 'postponer',
    name: 'The One Who Waits',
    tagline: 'You know something needs to change. You\'ve known for a while.',
    description: [
      'You have a pattern, and it\'s a kind one. When life gets busy or complicated, your own needs quietly move to the bottom of the list. There\'s always something more pressing, or someone who needs you, or a perfectly good reason why now isn\'t the right time.',
      'You\'ve been saying "not yet" for a while now. And on some level, you know that. There\'s a quiet frustration beneath all that patience, a sense that your turn keeps getting put off, and that you might be the one doing the putting off.',
      'When I work with people who share this pattern, I notice the same thing. The waiting is rarely about timing. Somewhere along the way, you picked up the idea that your needs come after everyone else\'s, that taking time for yourself is indulgent, and that the right moment will just arrive on its own. It never does, of course. But the belief runs deep.',
      'Your steadiness and patience are real strengths. And the fact that you\'re here, taking this quiz, tells me something important: part of you already knows it\'s time.'
    ],
    strength: 'You hold an enormous amount together, and you do it well. You\'re patient, steady, and reliable. When you finally turn that same energy towards your own life, things start to move.',
    need: 'Your own permission. A space where you are the priority for once. Somewhere to hear yourself think about what you actually want, without having to fix everything straight away.',
    cta: 'If any of this feels familiar, I\'d love to talk. I offer a free, 30-minute conversation. No agenda, no pressure, no obligation. Just a straightforward chat to see if talking things through might help you find your way forward.'
  },
  weigher: {
    key: 'weigher',
    name: 'The Overthinker',
    tagline: 'You\'re not short on insight. You might be drowning in it.',
    description: [
      'You\'re a thinker. Thorough, careful, always looking at things from every angle. Most of the time, that serves you well. You\'re the person people come to for considered advice, for a different perspective, for the question nobody else thought to ask.',
      'But when it comes to your own life, all that thinking has become a bit of a trap. You\'ve analysed your options so thoroughly that they\'ve started to blur. Every path forward reveals a new complication, and nothing feels like the obvious choice.',
      'The thinking feels productive, like you\'re making progress. But if you\'re honest with yourself, you\'ve been circling the same questions for longer than you\'d like to admit. The analysis isn\'t bringing you closer to a decision -- if anything, it\'s become the reason to wait a bit longer.',
      'That\'s a very human thing to do. Staying in thinking mode feels safer than committing to something that might be wrong. But there\'s a cost: while you\'re weighing everything up, life carries on.'
    ],
    strength: 'You have a genuinely thoughtful mind. You see complexity where others don\'t, and when you finally commit to a direction, those decisions tend to be good ones.',
    need: 'A conversation with someone who won\'t add more options. Someone who can help you hear what you already know.',
    cta: 'If you\'re tired of going in circles, let\'s talk. I offer a free, 30-minute conversation. No pressure and no agenda. Just a chance to talk it through with someone who listens for a living.'
  },
  performer: {
    key: 'performer',
    name: 'The Quiet Performer',
    tagline: 'Things look fine from the outside. That\'s part of the problem.',
    description: [
      'From the outside, your life looks good. You\'re competent, capable, and you\'ve built something that works. The trouble is, "works" and "feels right" aren\'t always the same thing.',
      'You\'ve probably been aware of it for some time. There\'s a gap between the life people see and the one you actually experience. You\'re not unhappy, exactly. It\'s more of a quiet disconnection, a feeling of going through the motions, of being very good at a role that doesn\'t quite fit anymore.',
      'The tricky thing about this pattern is that it doesn\'t feel urgent enough to act on. Nobody is in crisis. Nothing is broken. And so you carry on, because what would you even say? "My perfectly fine life doesn\'t feel like mine"? It sounds ungrateful, even to your own ears.',
      'It\'s not ungrateful, though. And the fact that you can see it, that you can feel something is off even when it\'s hard to put into words, is worth paying attention to.'
    ],
    strength: 'Self-awareness. You can sense that something is off, even when everything around you looks fine. Most people in your position don\'t even notice that gap.',
    need: 'A space where you don\'t have to perform. Somewhere you can say "I don\'t know what I want" or "I\'m not sure this is enough" without it being a big deal. Sometimes the most helpful thing is simply being heard.',
    cta: 'If something here rang true, I\'d love to talk. A free, 30-minute conversation is a quiet, confidential first step. No sales pitch, no obligation. Just a chance to talk about the things you haven\'t said out loud yet.'
  },
  juggler: {
    key: 'juggler',
    name: 'The Dutiful Juggler',
    tagline: 'You hold a lot. Somewhere in all of that, you\'ve lost sight of you.',
    description: [
      'Your life is full of things that matter to you. People, responsibilities, roles you care about. You\'re the person everyone counts on, the one who keeps things running. And you don\'t resent it, not really.',
      'The trouble is, somewhere in all that, you\'ve lost track of what you want. It\'s been so long since you thought about your own needs, separately from everyone else\'s, that the question "what do you actually want?" might stop you for a moment.',
      'It\'s hard to know where the roles end and you begin. What everyone needs from you and what you want for yourself have blurred together, and unpicking them feels complicated. Maybe even a bit scary.',
      'The people who rely on you would be the first to say you deserve something for yourself. You\'re just the last person to believe it.'
    ],
    strength: 'You read situations well and you hold a lot of competing demands together. People lean on you because you\'re good at it.',
    need: 'Time that is just for you. A proper conversation where someone asks what you want, and then actually listens.',
    cta: 'This could be a good first step. My free, 30-minute conversation is completely confidential, no pressure, no obligation. Just a space where, for half an hour, it\'s about you.'
  },
  nearly: {
    key: 'nearly',
    name: 'The Nearly Ready',
    tagline: 'You\'re closer to change than you think.',
    description: [
      'You\'re closer to change than you think. You know what you want, or at least you know the direction. You\'ve probably tried to make it happen more than once -- thought about it, talked about it, maybe even taken a first step. And then something pulled you back.',
      'Maybe it was a wobble of confidence, or a practical concern that suddenly felt bigger than it had before. Or just the weight of making a decision you can\'t easily undo. So you went back to thinking about it, where it felt safer.',
      'You\'re not avoiding change. You keep coming back to it. The reason you haven\'t made the leap isn\'t that you don\'t want to -- you\'re just worried about getting it wrong.',
      'That worry makes sense. But the fact that you keep coming back tells you something important about how much this matters to you.'
    ],
    strength: 'Courage. You keep coming back to this, and that tells you everything you need to know. You\'ve been honest with yourself about what you want, which is harder than most people realise.',
    need: 'Someone in your corner. Not to push you, but to help you work out what the first step actually looks like, and to take the fear seriously while you do it.',
    cta: 'You\'re ready for a conversation. My free 30-minute call is a chance to talk about where you are, what\'s holding you back, and what the first step might actually look like. No pressure, no obligation.'
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
      { text: 'Replaying the day, wondering if anyone saw through the "I\'m fine."', type: 'performer' },
      { text: 'Scrolling, reading, watching something. Anything to switch off from the mental noise.', type: 'weigher' },
      { text: 'Running through the list of everything I need to do for other people tomorrow.', type: 'juggler' },
      { text: 'Telling myself I\'ll think about it properly at the weekend, or once things slow down a bit.', type: 'postponer' },
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

// Weighted scoring: diagnostic questions count more, weak questions count less
const QUESTION_WEIGHTS = [1.0, 1.0, 1.5, 1.5, 0.75, 1.0, 1.0, 1.25];

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

  // Record answer (undo any previous answer for this question first)
  const type = el.dataset.type;
  const weight = QUESTION_WEIGHTS[currentQuestion];
  const previousType = answers[currentQuestion];
  if (previousType) scores[previousType] -= weight;

  answers[currentQuestion] = type;
  scores[type] += weight;

  // Auto-advance after a brief pause
  setTimeout(() => {
    if (currentQuestion < QUESTIONS.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
      updateProgress();
    } else {
      // Show result teaser on email gate
      const typeKey = calculateResult();
      const typeName = TYPES[typeKey].name;
      $('#email-result-label').textContent = 'Your result';
      $('#email-result-name').textContent = typeName;
      showScreen('email-screen');
    }
  }, 400);
}

function goBack() {
  if (currentQuestion > 0) {
    // Undo the last answer's score
    const lastType = answers[currentQuestion];
    if (lastType) scores[lastType] -= QUESTION_WEIGHTS[currentQuestion];

    currentQuestion--;
    renderQuestion(currentQuestion);
    updateProgress();
  }
}

function updateProgress() {
  const pct = ((currentQuestion + 1) / QUESTIONS.length) * 100;
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

  // Build description paragraphs (paragraph 3 rendered as insight block for visual break)
  const descEl = $('#result-description');
  descEl.innerHTML = type.description.map((p, i) => {
    if (i === 2) return `<div class="insight-block"><p>${p}</p></div>`;
    return `<p>${p}</p>`;
  }).join('');

  // Strength and need
  $('#result-strength').textContent = type.strength;
  $('#result-need').textContent = type.need;

  // CTA
  $('#result-cta-text').textContent = type.cta;

  // Secondary type (show if second-highest score is within 1 point of primary)
  const sortedScores = Object.entries(scores)
    .filter(([key]) => key !== typeKey)
    .sort((a, b) => b[1] - a[1]);

  const secondaryEl = $('#secondary-type');
  if (sortedScores.length > 0 && sortedScores[0][1] >= scores[typeKey] - 1 && sortedScores[0][1] > 0) {
    const secondaryType = TYPES[sortedScores[0][0]];
    $('#secondary-text').textContent = `You also scored highly as ${secondaryType.name}. That makes sense. Most of us carry more than one pattern.`;
    secondaryEl.style.display = '';
  } else {
    secondaryEl.style.display = 'none';
  }

  showScreen('results-screen');
}

function shareResult() {
  const name = $('#result-name').textContent;
  const url = window.location.origin + window.location.pathname;
  const text = `I'm ${name}. Take the quiz to find out what's really keeping you stuck: ${url}`;

  if (navigator.share) {
    navigator.share({ title: 'What\'s Really Keeping You Stuck?', text: text, url: url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = $('.share-btn');
      const original = btn.innerHTML;
      btn.textContent = 'Copied to clipboard';
      setTimeout(() => { btn.innerHTML = original; }, 2000);
    }).catch(() => {});
  }
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
