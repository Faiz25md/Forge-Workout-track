/* ════════════════════════════════════════════════
   FORGE — script.js   (fully fixed)
   ════════════════════════════════════════════════ */

// ─── PLAN DATA ───────────────────────────────────
const planDays = [
  {
    day: 'DAY 1', label: 'PUSH', badge: 'badge-push', color: 'var(--accent)',
    icon: '💪', time: '55–65 min',
    sections: [
      { muscle: 'CHEST', cls: 'chest', exercises: [
        { name: 'Barbell Bench Press',        sets: 4, reps: '6–8',   cue: 'Arch back, retract scapula, drive through chest',    defaultWeight: 60 },
        { name: 'Incline Dumbbell Press',      sets: 3, reps: '10–12', cue: '30–45° incline, full stretch at bottom',             defaultWeight: 30 },
      ]},
      { muscle: 'SHOULDERS', cls: 'shoulders', exercises: [
        { name: 'Seated DB Overhead Press',    sets: 4, reps: '8–10',  cue: 'Control descent, elbows at 45°',                     defaultWeight: 22 },
        { name: 'Cable Lateral Raise',         sets: 3, reps: '12–15', cue: 'Lead with elbows, slight forward lean',              defaultWeight: 10 },
      ]},
      { muscle: 'TRICEPS', cls: 'arms', exercises: [
        { name: 'Overhead Cable Extension',    sets: 3, reps: '12–15', cue: 'Keep elbows close, full ROM',                        defaultWeight: 20 },
        { name: 'Tricep Pushdown (Rope)',       sets: 3, reps: '15',    cue: 'Flare hands at bottom for peak contraction',         defaultWeight: 15 },
      ]},
    ]
  },
  {
    day: 'DAY 2', label: 'PULL', badge: 'badge-pull', color: 'var(--blue)',
    icon: '🔗', time: '50–60 min',
    sections: [
      { muscle: 'BACK', cls: 'back', exercises: [
        { name: 'Weighted Pull-Ups / Lat Pulldown', sets: 4, reps: '6–8',   cue: 'Full hang, drive elbows to hips',               defaultWeight: 0  },
        { name: 'Seated Cable Row (Wide Grip)',      sets: 3, reps: '10–12', cue: 'Chest up, squeeze shoulder blades at peak',     defaultWeight: 50 },
      ]},
      { muscle: 'BICEPS', cls: 'arms', exercises: [
        { name: 'Barbell Curl',                sets: 3, reps: '8–10',  cue: 'No swinging, pause at top',                          defaultWeight: 30 },
        { name: 'Incline Dumbbell Curl',       sets: 3, reps: '12',    cue: 'Full stretch at bottom for long-head emphasis',       defaultWeight: 14 },
      ]},
      { muscle: 'FOREARMS', cls: 'arms', exercises: [
        { name: 'Reverse / Hammer Curl',       sets: 3, reps: '15',    cue: 'Slow negative for maximum time under tension',       defaultWeight: 12 },
      ]},
    ]
  },
  {
    day: 'DAY 3', label: 'LEGS', badge: 'badge-legs', color: 'var(--purple)',
    icon: '🦵', time: '65–75 min',
    sections: [
      { muscle: 'QUADS', cls: 'legs', exercises: [
        { name: 'Barbell Back Squat',          sets: 4, reps: '6–8',   cue: 'Break parallel, knees track over toes',              defaultWeight: 80 },
        { name: 'Leg Press',                   sets: 3, reps: '12–15', cue: 'Full ROM, don\'t lock knees at top',                 defaultWeight: 120 },
      ]},
      { muscle: 'HAMSTRINGS', cls: 'legs', exercises: [
        { name: 'Romanian Deadlift',           sets: 3, reps: '10–12', cue: 'Hip hinge, soft knees, feel the stretch',            defaultWeight: 60 },
        { name: 'Lying Leg Curl',              sets: 3, reps: '12–15', cue: 'Pause at peak, slow eccentric',                      defaultWeight: 30 },
      ]},
      { muscle: 'GLUTES', cls: 'legs', exercises: [
        { name: 'Hip Thrust (Barbell)',        sets: 3, reps: '12',    cue: 'Drive through heels, squeeze glutes at top',         defaultWeight: 60 },
      ]},
      { muscle: 'CALVES', cls: 'legs', exercises: [
        { name: 'Standing Calf Raise',         sets: 4, reps: '20',    cue: 'Full ROM, pause at top and bottom',                  defaultWeight: 40 },
      ]},
      { muscle: 'ABS', cls: 'core', exercises: [
        { name: 'Cable Crunch',                sets: 3, reps: '15',    cue: 'Round the spine, don\'t use hip flexors',            defaultWeight: 20 },
        { name: 'Hanging Leg Raise',           sets: 3, reps: '15',    cue: 'Posterior pelvic tilt at top for lower abs',         defaultWeight: 0  },
      ]},
    ]
  },
  {
    day: 'DAY 4', label: 'REST', badge: 'badge-rest', color: 'var(--green)',
    icon: '🧘', time: '20–30 min',
    sections: [
      { muscle: 'RECOVERY', cls: 'core', exercises: [
        { name: 'Light Walk / Cycling',        sets: 1, reps: '20–30 min', cue: 'Heart rate below 120 BPM',                      defaultWeight: 0 },
        { name: 'Full Body Stretching',        sets: 1, reps: '15–20 min', cue: 'Focus on chest, lats, quads, hamstrings',       defaultWeight: 0 },
        { name: 'Mobility Drills',             sets: 1, reps: '10 min',    cue: 'Hip circles, shoulder rotations, thoracic spine', defaultWeight: 0 },
      ]},
    ]
  },
  {
    day: 'DAY 5', label: 'CHEST + BACK', badge: 'badge-chest-back', color: 'var(--gold)',
    icon: '🏋️', time: '60–70 min',
    sections: [
      { muscle: 'CHEST', cls: 'chest', exercises: [
        { name: 'Flat Dumbbell Press',         sets: 4, reps: '10–12', cue: 'Full stretch, press through center of chest',       defaultWeight: 30 },
        { name: 'Cable Fly (Low to High)',     sets: 3, reps: '15',    cue: 'Feel the squeeze at peak contraction',               defaultWeight: 15 },
        { name: 'Weighted Push-Up',            sets: 3, reps: 'Failure', cue: 'Straight body line, full ROM',                    defaultWeight: 0  },
      ]},
      { muscle: 'BACK', cls: 'back', exercises: [
        { name: 'Deadlift / Rack Pull',        sets: 4, reps: '5–6',   cue: 'Brace core, drive floor away, hinge at hip',       defaultWeight: 100 },
        { name: 'Single-Arm DB Row',           sets: 3, reps: '12 each', cue: 'Full stretch at bottom, row to hip not ribs',    defaultWeight: 28 },
        { name: 'Face Pull (Cable)',           sets: 3, reps: '15–20', cue: 'External rotation at peak, great for posture',      defaultWeight: 12 },
      ]},
    ]
  },
  {
    day: 'DAY 6', label: 'SHOULDERS + ARMS', badge: 'badge-arms', color: 'var(--accent2)',
    icon: '🎯', time: '55–65 min',
    sections: [
      { muscle: 'SHOULDERS', cls: 'shoulders', exercises: [
        { name: 'Arnold Press',                sets: 4, reps: '10–12', cue: 'Full rotation, targets all 3 delt heads',           defaultWeight: 18 },
        { name: 'Rear Delt Fly (Cable)',       sets: 3, reps: '15–20', cue: 'Lead with elbows, not traps',                       defaultWeight: 8  },
      ]},
      { muscle: 'BICEPS', cls: 'arms', exercises: [
        { name: 'EZ Bar Curl',                 sets: 3, reps: '10–12', cue: 'Easier on wrists, great for overall mass',         defaultWeight: 28 },
        { name: 'Cable Hammer Curl',           sets: 3, reps: '15',    cue: 'Neutral grip, great for brachialis',               defaultWeight: 12 },
      ]},
      { muscle: 'TRICEPS', cls: 'arms', exercises: [
        { name: 'Close-Grip Bench Press',      sets: 3, reps: '10–12', cue: 'Elbows tucked, load the tricep fully',             defaultWeight: 50 },
        { name: 'Overhead DB Extension',       sets: 3, reps: '12–15', cue: 'Long head stretch, slow and controlled',           defaultWeight: 16 },
      ]},
    ]
  },
];

// day abbreviations for schedule display (index 0 = Day1/Push)
const daySchedule = [
  { abbr: 'PUSH',  dayIdx: 0 },
  { abbr: 'PULL',  dayIdx: 1 },
  { abbr: 'LEGS',  dayIdx: 2 },
  { abbr: 'REST',  dayIdx: 3 },
  { abbr: 'C+B',   dayIdx: 4 },
  { abbr: 'S+A',   dayIdx: 5 },
  { abbr: '—',     dayIdx: -1 },   // Sunday rest
];

// ─── STATE ───────────────────────────────────────
const STORAGE_KEY = 'forge_v2';
let selectedDayIdx = 0;          // which plan day is shown in Today page
let setsData       = {};         // { 'day0-s0-e0': [{ weight, reps, done }] }
let timerSeconds   = 0;
let timerRunning   = false;
let timerInterval  = null;
let historyLog     = [];         // array of saved session objects

// ─── INIT ────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  loadData();
  buildWeekSchedule();
  buildDaySelector();
  renderTodayPage();
  buildPlanPage();
  renderHistory();
  buildVolumeChart();
  buildTrendChart();
  buildBenchChart();
  buildDashboardActivity();
  showPage('dashboard', document.getElementById('nav-dashboard'));
});

// ─── NAVIGATION ──────────────────────────────────
const pageTitles = {
  dashboard: 'DASHBOARD',
  today:     "TODAY'S WORKOUT",
  history:   'HISTORY',
  progress:  'PROGRESS',
  plan:      'MY PLAN'
};

function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  if (el)   el.classList.add('active');
  document.getElementById('page-title').textContent = pageTitles[name] || name.toUpperCase();
  if (name === 'history')  renderHistory();
  if (name === 'progress') { buildTrendChart(); buildBenchChart(); }
}

// ─── WEEK SCHEDULE (Dashboard) ───────────────────
function buildWeekSchedule() {
  const weekDays = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  // JS: 0=Sun, 1=Mon…  map to schedule index 0=Mon…6=Sun
  const jsDay   = new Date().getDay();
  const todayScheduleIdx = jsDay === 0 ? 6 : jsDay - 1;

  const row = document.getElementById('week-schedule-row');
  if (!row) return;
  row.innerHTML = '';

  weekDays.forEach((wd, i) => {
    const sch   = daySchedule[i];
    const plan  = sch.dayIdx >= 0 ? planDays[sch.dayIdx] : null;
    const isToday  = i === todayScheduleIdx;
    const isPast   = i < todayScheduleIdx;
    const isRest   = sch.dayIdx < 0 || sch.dayIdx === 3;

    let cls = 'day-pill';
    if (isToday)      cls += ' today';
    else if (isPast && !isRest) cls += ' done';
    else if (isRest)  cls += ' rest';

    const color = plan ? plan.color : 'var(--muted)';
    const dotCls = isToday ? 'red' : isPast && !isRest ? 'green' : 'empty';

    const pill = document.createElement('div');
    pill.className = cls;
    pill.title = plan ? plan.label : 'Rest';
    if (plan && !isRest) {
      pill.style.cursor = 'pointer';
      pill.onclick = () => {
        selectedDayIdx = sch.dayIdx;
        renderTodayPage();
        showPage('today', document.getElementById('nav-today'));
      };
    }
    pill.innerHTML = `
      <div class="day-name">${wd}</div>
      <div class="day-type" style="color:${color}">${sch.abbr}</div>
      <div class="day-dot ${dotCls}"></div>
    `;
    row.appendChild(pill);
  });

  // today summary text
  const todayPlan = daySchedule[todayScheduleIdx];
  const plan = todayPlan.dayIdx >= 0 ? planDays[todayPlan.dayIdx] : null;
  const sumEl = document.getElementById('today-summary');
  if (sumEl && plan) {
    const exCount = plan.sections.reduce((a, s) => a + s.exercises.length, 0);
    sumEl.innerHTML = `Today: <strong style="color:var(--text)">${plan.label} (${plan.day})</strong> — ${exCount} exercises`;
  }

  // update nav badge
  const badge = document.getElementById('nav-day-badge');
  if (badge && plan) badge.textContent = plan.day.replace('DAY ','DAY ');

  // auto-select today's day for workout page
  if (todayPlan.dayIdx >= 0) selectedDayIdx = todayPlan.dayIdx;
}

// ─── DAY SELECTOR TABS (Today page) ──────────────
function buildDaySelector() {
  const container = document.getElementById('day-selector');
  if (!container) return;
  container.innerHTML = '';
  planDays.forEach((d, i) => {
    const btn = document.createElement('button');
    btn.className = 'ds-btn' + (i === selectedDayIdx ? ' active' : '');
    btn.id = `ds-btn-${i}`;
    btn.innerHTML = `<span class="ds-day">${d.day}</span><span class="ds-name" style="color:${d.color}">${d.label}</span>`;
    btn.onclick = () => selectWorkoutDay(i);
    container.appendChild(btn);
  });
}

function selectWorkoutDay(idx) {
  selectedDayIdx = idx;
  document.querySelectorAll('.ds-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  renderTodayPage(false);
}

// ─── TODAY PAGE RENDER ────────────────────────────
function renderTodayPage(rebuildSelector = true) {
  const plan = planDays[selectedDayIdx];
  if (!plan) return;

  // header
  document.getElementById('today-day-label').textContent = plan.label;
  const badge = document.getElementById('today-day-badge');
  badge.textContent = `${plan.day} — ${plan.time}`;
  badge.className   = 'day-badge ' + plan.badge;

  const exCount = plan.sections.reduce((a, s) => a + s.exercises.length, 0);
  document.getElementById('today-day-meta').innerHTML =
    `${exCount} exercises · Est. ${plan.time} · <span style="color:var(--text)">Hypertrophy Focus</span>`;

  if (rebuildSelector) buildDaySelector();

  // exercise list
  buildExerciseList(plan);
  recalcVolume();
  updateProgress();
}

// ─── EXERCISE LIST BUILD ──────────────────────────
function buildExerciseList(plan) {
  const container = document.getElementById('exercise-list');
  if (!container) return;
  container.innerHTML = '';

  let globalIdx = 0;
  plan.sections.forEach(section => {
    // section header
    const secDiv = document.createElement('div');
    secDiv.className = 'exercise-section';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'ex-section-title';
    titleDiv.innerHTML = `<span class="muscle-tag ${section.cls}" style="margin:0">${section.muscle}</span><div class="ex-section-line"></div>`;
    secDiv.appendChild(titleDiv);

    section.exercises.forEach((ex, exIdx) => {
      globalIdx++;
      const exKey = `day${selectedDayIdx}-s${plan.sections.indexOf(section)}-e${exIdx}`;
      if (!setsData[exKey]) {
        setsData[exKey] = Array.from({ length: ex.sets }, () => ({
          weight: ex.defaultWeight,
          reps: typeof ex.reps === 'string' && ex.reps.includes('–')
            ? parseInt(ex.reps)
            : (parseInt(ex.reps) || 0),
          done: false
        }));
      }

      const doneCount  = setsData[exKey].filter(s => s.done).length;
      const allDone    = doneCount === ex.sets;
      const cardId     = `ex-card-${exKey}`;
      const arrowId    = `ex-arrow-${exKey}`;
      const doneId     = `ex-done-${exKey}`;
      const bodyId     = `ex-body-${exKey}`;

      const card = document.createElement('div');
      card.className = 'exercise-card' + (allDone ? ' completed' : '');
      card.id        = cardId;

      card.innerHTML = `
        <div class="ex-header" onclick="toggleEx('${exKey}')">
          <div class="ex-num" id="ex-num-${exKey}">${globalIdx}</div>
          <div style="flex:1">
            <div class="ex-name">${ex.name}</div>
            <div class="ex-meta">${ex.sets} sets × ${ex.reps} reps</div>
          </div>
          <div class="ex-sets-badge" id="${doneId}">${doneCount}/${ex.sets}</div>
          <div class="ex-expand" id="${arrowId}">${allDone ? '✓' : '▾'}</div>
        </div>
        <div class="ex-body" id="${bodyId}" style="display:none">
          <div class="ex-cue">💡 ${ex.cue}</div>
          <table class="sets-table">
            <tr>
              <th>Set</th>
              <th>Weight (kg)</th>
              <th>Reps</th>
              <th>Done</th>
            </tr>
          </table>
          <div id="sets-rows-${exKey}"></div>
        </div>
      `;

      if (allDone) {
        card.querySelector(`#${arrowId}`).style.color = 'var(--green)';
        card.querySelector(`#ex-num-${exKey}`).style.color = 'var(--green)';
      }

      secDiv.appendChild(card);

      // build set rows after card is appended
      setTimeout(() => buildSetRows(exKey, ex), 0);
    });

    container.appendChild(secDiv);
  });
}

function buildSetRows(exKey, ex) {
  const container = document.getElementById(`sets-rows-${exKey}`);
  if (!container) return;
  container.innerHTML = '';

  setsData[exKey].forEach((s, i) => {
    const btnId  = `set-btn-${exKey}-${i}`;
    const wInId  = `set-w-${exKey}-${i}`;
    const rInId  = `set-r-${exKey}-${i}`;

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:6px 0;border-bottom:1px solid var(--border)';
    row.innerHTML = `
      <span class="set-num">${i + 1}</span>
      <input id="${wInId}" class="set-input" type="number" value="${s.weight}" min="0" step="2.5"
             onchange="updateSet('${exKey}',${i},'weight',this.value)" placeholder="kg">
      <input id="${rInId}" class="set-input" type="number" value="${s.reps}" min="1" step="1"
             onchange="updateSet('${exKey}',${i},'reps',this.value)" placeholder="reps">
      <button id="${btnId}" class="set-done-btn ${s.done ? 'done' : ''}"
              onclick="markSet('${exKey}',${i})">✓</button>
    `;
    container.appendChild(row);
  });
}

// ─── SET ACTIONS ─────────────────────────────────
function updateSet(exKey, idx, field, val) {
  if (!setsData[exKey]) return;
  setsData[exKey][idx][field] = parseFloat(val) || 0;
  recalcVolume();
  saveData();
}

function markSet(exKey, idx) {
  if (!setsData[exKey]) return;
  setsData[exKey][idx].done = !setsData[exKey][idx].done;

  const btnId = `set-btn-${exKey}-${idx}`;
  const btn   = document.getElementById(btnId);
  if (btn) btn.classList.toggle('done', setsData[exKey][idx].done);

  const plan    = planDays[selectedDayIdx];
  const doneCount = setsData[exKey].filter(s => s.done).length;
  const totalSets = setsData[exKey].length;
  const allDone   = doneCount === totalSets;

  const card  = document.getElementById(`ex-card-${exKey}`);
  const arrow = document.getElementById(`ex-arrow-${exKey}`);
  const num   = document.getElementById(`ex-num-${exKey}`);
  const badge = document.getElementById(`ex-done-${exKey}`);

  if (card)  card.classList.toggle('completed', allDone);
  if (arrow) { arrow.textContent = allDone ? '✓' : '▾'; arrow.style.color = allDone ? 'var(--green)' : ''; }
  if (num)   num.style.color = allDone ? 'var(--green)' : '';
  if (badge) badge.textContent = `${doneCount}/${totalSets}`;

  recalcVolume();
  updateProgress();
  saveData();
}

function toggleEx(exKey) {
  const body  = document.getElementById(`ex-body-${exKey}`);
  const arrow = document.getElementById(`ex-arrow-${exKey}`);
  const card  = document.getElementById(`ex-card-${exKey}`);
  if (!body) return;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  if (arrow && !card.classList.contains('completed'))
    arrow.textContent = open ? '▾' : '▴';
}

// ─── VOLUME & PROGRESS ───────────────────────────
function recalcVolume() {
  let total = 0;
  const prefix = `day${selectedDayIdx}-`;
  Object.entries(setsData).forEach(([key, sets]) => {
    if (!key.startsWith(prefix)) return;
    sets.forEach(s => { if (s.done) total += (s.weight || 0) * (s.reps || 0); });
  });
  const el = document.getElementById('vol-display');
  const m  = document.getElementById('modal-vol');
  if (el) el.textContent = total.toLocaleString();
  if (m)  m.textContent  = total.toLocaleString();
  return total;
}

function updateProgress() {
  const plan   = planDays[selectedDayIdx];
  const prefix = `day${selectedDayIdx}-`;
  let done = 0, total = 0;
  Object.entries(setsData).forEach(([key, sets]) => {
    if (!key.startsWith(prefix)) return;
    total++;
    if (sets.every(s => s.done)) done++;
  });
  const pct = total ? Math.round(done / total * 100) : 0;
  const bar  = document.getElementById('workout-progress');
  const text = document.getElementById('progress-text');
  if (bar)  bar.style.width = pct + '%';
  if (text) text.textContent = `${done} / ${total} exercises`;
}

// ─── TIMER ───────────────────────────────────────
function toggleTimer() {
  const btn = document.getElementById('timer-btn');
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    if (btn) btn.textContent = '▶ RESUME';
  } else {
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
      if (timerSeconds % 30 === 0) saveData();
    }, 1000);
    timerRunning = true;
    if (btn) btn.textContent = '⏸ PAUSE';
  }
}

function updateTimerDisplay() {
  const m  = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
  const s  = String(timerSeconds % 60).padStart(2, '0');
  const t  = `${m}:${s}`;
  const d  = document.getElementById('timer');
  const md = document.getElementById('modal-time');
  if (d)  d.textContent  = t;
  if (md) md.textContent = t;
}

// ─── SAVE WORKOUT ────────────────────────────────
function saveWorkout() {
  document.getElementById('finishModal').classList.remove('open');

  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('timer-btn').textContent = '▶ RESUME';

  const today = new Date().toDateString();
  const lastDate = localStorage.getItem('lastWorkoutDate');

  let streak = parseInt(document.getElementById('streak-count').textContent) || 0;

  if (!lastDate) {
    streak = 1;
  } else {
    const diffDays = Math.floor(
      (new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      alert("Workout already logged today 💪");
      return;
    } else if (diffDays === 1) {
      streak += 1;
    } else {
      streak = 1;
    }
  }

  document.getElementById('streak-count').textContent = streak;
  localStorage.setItem('lastWorkoutDate', today);

  // ✅ CREATE ENTRY (THIS WAS MISSING)
  const entry = {
    day: new Date().getDate(),
    month: new Date().toLocaleString('default', { month: 'short' }).toUpperCase(),
    type: planDays[selectedDayIdx].label,
    detail: planDays[selectedDayIdx].sections.map(s => s.muscle).join(' · '),
    sets: Object.values(setsData).flat().filter(s => s.done).length,
    vol: recalcVolume(),
    color: planDays[selectedDayIdx].color,
    icon: planDays[selectedDayIdx].icon,
    duration: document.getElementById('timer').textContent
  };

  historyLog.unshift(entry);

  updateDashboardStats();
  renderHistory();
  saveData();

  // Toast
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:32px;right:32px;background:var(--green);color:#000;padding:14px 24px;border-radius:12px;font-weight:700;z-index:300;';
  toast.textContent = '✓ Workout saved! Streak: ' + streak;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);

  // reset timer
  timerSeconds = 0;
  updateTimerDisplay();
}

// ─── HISTORY ─────────────────────────────────────
// Seed data (shown if localStorage is empty)
const seedHistory = [
  { day:'11', month:'APR', type:'LEGS',             detail:'Squat · RDL · Hip Thrust · Calves · Abs',         sets:22, vol:4120, color:'var(--purple)', icon:'🦵', duration:'64 min' },
  { day:'10', month:'APR', type:'PULL',             detail:'Pull-Up · Cable Row · Barbell Curl · Forearms',   sets:15, vol:2650, color:'var(--blue)',   icon:'🔗', duration:'52 min' },
  { day:'09', month:'APR', type:'PUSH',             detail:'Bench Press · OHP · Cable Lateral · Triceps',     sets:18, vol:2840, color:'var(--accent)', icon:'💪', duration:'55 min' },
  { day:'07', month:'APR', type:'SHOULDERS + ARMS', detail:'Arnold Press · EZ Curl · Close-Grip Bench',       sets:18, vol:1960, color:'var(--accent2)',icon:'🎯', duration:'58 min' },
  { day:'06', month:'APR', type:'CHEST + BACK',     detail:'DB Press · Cable Fly · Deadlift · Rows · Pulls',  sets:20, vol:3560, color:'var(--gold)',   icon:'🏋️', duration:'62 min' },
  { day:'04', month:'APR', type:'LEGS',             detail:'Squat · Leg Press · Lying Leg Curl · Hip Thrust', sets:22, vol:3980, color:'var(--purple)', icon:'🦵', duration:'67 min' },
  { day:'03', month:'APR', type:'PULL',             detail:'Lat Pulldown · Seated Row · Incline Curl',        sets:15, vol:2420, color:'var(--blue)',   icon:'🔗', duration:'50 min' },
  { day:'02', month:'APR', type:'PUSH',             detail:'Incline DB Press · OHP · Laterals · Pushdown',    sets:18, vol:2700, color:'var(--accent)', icon:'💪', duration:'53 min' },
];

function renderHistory() {
  const list    = document.getElementById('history-list');
  const empty   = document.getElementById('history-empty');
  const countEl = document.getElementById('history-count');
  const filter  = document.getElementById('history-filter')?.value || 'all';
  if (!list) return;

  const all = historyLog.length ? historyLog : seedHistory;
  const filtered = filter === 'all' ? all : all.filter(h => h.type === filter);

  if (countEl) countEl.textContent = `Total: ${all.length} sessions logged`;
  list.innerHTML = '';

  if (filtered.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  filtered.forEach(h => {
    const div = document.createElement('div');
    div.className = 'history-card animate-in';
    div.innerHTML = `
      <div class="history-date">
        <div class="history-day-num" style="color:${h.color}">${h.day}</div>
        <div class="history-month">${h.month}</div>
      </div>
      <div class="history-divider"></div>
      <div style="font-size:22px;width:38px;text-align:center;flex-shrink:0">${h.icon}</div>
      <div class="history-info">
        <div class="history-type">${h.type}</div>
        <div class="history-detail">${h.detail}</div>
        ${h.duration ? `<div style="font-size:11px;color:var(--muted);margin-top:2px">⏱ ${h.duration}</div>` : ''}
      </div>
      <div class="history-stats">
        <div>
          <div class="h-stat-val" style="color:${h.color}">${h.sets}</div>
          <div class="h-stat-label">sets</div>
        </div>
        <div>
          <div class="h-stat-val">${Number(h.vol).toLocaleString()}</div>
          <div class="h-stat-label">kg total</div>
        </div>
      </div>
    `;
    list.appendChild(div);
  });
}

// ─── DASHBOARD RECENT ACTIVITY ───────────────────
function buildDashboardActivity() {
  const el = document.getElementById('dashboard-recent-activity');
  if (!el) return;
  const all = historyLog.length ? historyLog : seedHistory;
  const recent = all.slice(0, 3);
  el.innerHTML = recent.map(h => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${h.color}22">${h.icon}</div>
      <div class="activity-info">
        <div class="activity-name">${h.type}</div>
        <div class="activity-date">${h.month} ${h.day} · ${h.duration || '—'}</div>
      </div>
      <div>
        <div class="activity-stat" style="color:var(--green)">✓ Complete</div>
        <div class="activity-stat-sub">${h.sets} sets · ${Number(h.vol).toLocaleString()} kg</div>
      </div>
    </div>
  `).join('');
}

function updateDashboardStats() {
  const all     = historyLog.length ? historyLog : seedHistory;
  const thisWeek = all.slice(0, 3);
  const totalVol = thisWeek.reduce((a, h) => a + (h.vol || 0), 0);
  const totalSets = thisWeek.reduce((a, h) => a + (h.sets || 0), 0);
  const wEl = document.getElementById('stat-workouts');
  const vEl = document.getElementById('stat-volume');
  const sEl = document.getElementById('stat-sets');
  if (wEl) wEl.textContent = thisWeek.length;
  if (vEl) vEl.textContent = totalVol.toLocaleString();
  if (sEl) sEl.textContent = totalSets;
  buildDashboardActivity();
}

// ─── PLAN PAGE ───────────────────────────────────
function buildPlanPage() {
  const container = document.getElementById('plan-days');
  if (!container) return;
  container.innerHTML = '';

  planDays.forEach((d, idx) => {
    const exCount = d.sections.reduce((a, s) => a + s.exercises.length, 0);
    let rows = '';
    d.sections.forEach(sec => {
      rows += `<tr style="background:rgba(255,255,255,0.02)">
        <td colspan="3" style="padding:8px 20px;font-size:10px;color:${d.color};text-transform:uppercase;letter-spacing:2px;font-weight:700">${sec.muscle}</td>
      </tr>`;
      sec.exercises.forEach(e => {
        rows += `<tr style="border-top:1px solid var(--border)">
          <td style="padding:10px 20px;font-size:13px;font-weight:600;color:var(--text);width:40%">${e.name}</td>
          <td style="padding:10px;font-family:'DM Mono';font-size:12px;color:${d.color};text-align:center;white-space:nowrap">${e.sets} × ${e.reps}</td>
          <td style="padding:10px 20px;font-size:12px;color:var(--muted);font-style:italic">${e.cue}</td>
        </tr>`;
      });
    });

    const div = document.createElement('div');
    div.style.cssText = 'background:var(--bg2);border:1px solid var(--border);border-radius:14px;margin-bottom:14px;overflow:hidden';
    div.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:var(--bg3);cursor:pointer" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <div style="display:flex;align-items:center;gap:12px">
          <span style="font-size:20px">${d.icon}</span>
          <div>
            <span style="font-family:'Bebas Neue';font-size:13px;letter-spacing:2px;color:var(--muted);margin-right:10px">${d.day}</span>
            <span style="font-family:'Bebas Neue';font-size:20px;letter-spacing:1px;color:${d.color}">${d.label}</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <span class="day-badge ${d.badge}">${exCount} exercises</span>
          <button class="ds-btn" style="padding:7px 16px" onclick="event.stopPropagation();selectWorkoutDay(${idx});showPage('today',document.getElementById('nav-today'))">▶ Start</button>
        </div>
      </div>
      <div style="display:none">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
      </div>
    `;
    container.appendChild(div);
  });
}

// ─── VOLUME BAR CHART (Dashboard) ────────────────
function buildVolumeChart() {
  const chart = document.getElementById('volume-chart');
  if (!chart) return;

  chart.innerHTML = ''; // clear previous

  const data = [
    { label:'Chest', pct: 72, color: 'var(--accent)' },
    { label:'Back', pct: 88, color: 'var(--blue)' },
    { label:'Legs', pct: 100, color: 'var(--purple)' },
    { label:'Shoulders', pct: 55, color: 'var(--gold)' },
    { label:'Biceps', pct: 45, color: 'var(--green)' },
    { label:'Triceps', pct: 40, color: 'var(--accent2)' },
    { label:'Core', pct: 30, color: 'var(--muted)' },
  ];

  data.forEach(d => {
    const wrap = document.createElement('div');
    wrap.className = 'bar-wrap';

    wrap.innerHTML = `
      <div class="bar" style="height:${d.pct}%; background:${d.color};"></div>
      <div class="bar-label">${d.label}</div>
    `;

    chart.appendChild(wrap);
  });
}

// ─── SVG LINE CHARTS (Progress page) ─────────────
function makeSvgChart(svgId, labels, vals, strokeColor, gradColor) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  const W = 400, H = 130, padL = 35, padR = 20, padT = 15, padB = 25;
  const max = Math.max(...vals), min = Math.min(...vals);
  const range = max - min || 1;
  const pts = vals.map((v, i) => ({
    x: padL + i * ((W - padL - padR) / (vals.length - 1)),
    y: padT + (1 - (v - min) / range) * (H - padT - padB),
    v
  }));
  const polyline = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const area     = `M${pts[0].x.toFixed(1)},${H - padB} ` +
                   pts.map(p => `L${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') +
                   ` L${pts[pts.length-1].x.toFixed(1)},${H - padB} Z`;

  // y-axis grid lines
  const gridLines = [0, 0.25, 0.5, 0.75, 1].map(f => {
    const y   = padT + f * (H - padT - padB);
    const val = max - f * range;
    const label = val >= 1000 ? (val / 1000).toFixed(1) + 'k' : Math.round(val);
    return `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            <text x="${padL - 4}" y="${(y + 4).toFixed(1)}" font-size="8" fill="#8888AA" text-anchor="end">${label}</text>`;
  }).join('');

  svg.innerHTML = `
    <defs>
      <linearGradient id="grad-${svgId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${gradColor}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${gradColor}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${gridLines}
    <path d="${area}" fill="url(#grad-${svgId})"/>
    <polyline points="${polyline}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${strokeColor}" stroke="var(--bg2)" stroke-width="2"/>`).join('')}
    ${pts.map((p, i) => `<text x="${p.x.toFixed(1)}" y="${H - padB + 14}" font-size="9" fill="#8888AA" text-anchor="middle">${labels[i]}</text>`).join('')}
    <text x="${pts[pts.length-1].x.toFixed(1)}" y="${(pts[pts.length-1].y - 10).toFixed(1)}" font-size="10" fill="${strokeColor}" text-anchor="middle" font-weight="700">${pts[pts.length-1].v >= 1000 ? (pts[pts.length-1].v/1000).toFixed(1)+'k' : pts[pts.length-1].v}</text>
  `;
}

function buildTrendChart() {
  makeSvgChart(
    'trend-chart',
    ['W1','W2','W3','W4','W5','W6','W7','W8'],
    [5200, 6100, 5800, 7200, 6900, 7800, 8100, 8240],
    '#F5A623', '#F5A623'
  );
}

function buildBenchChart() {
  makeSvgChart(
    'bench-chart',
    ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
    [75, 80, 82.5, 87.5, 90, 92.5, 97.5, 100],
    '#FF3C3C', '#FF3C3C'
  );
}

// ─── RESET ───────────────────────────────────────
function resetAll() {
  if (!confirm('Reset today\'s workout? This clears logged sets for today only.')) return;
  const prefix = `day${selectedDayIdx}-`;
  Object.keys(setsData).filter(k => k.startsWith(prefix)).forEach(k => delete setsData[k]);
  timerSeconds = 0;
  clearInterval(timerInterval);
  timerRunning = false;
  const btn = document.getElementById('timer-btn');
  if (btn) btn.textContent = '▶ START';
  updateTimerDisplay();
  renderTodayPage(false);
  localStorage.removeItem('lastWorkoutDate');
  document.getElementById('streak-count').textContent = 0;
  saveData();
}

// ─── PERSIST ─────────────────────────────────────
function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      setsData,
      historyLog,
      timerSeconds,
      streak: document.getElementById('streak-count').textContent,
      lastWorkoutDate: localStorage.getItem('lastWorkoutDate')
    }));
  } catch(e) {
    console.warn('Save failed', e);
  }
}

function loadData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!data) return;

  if (data.setsData) {
  setsData = data.setsData;
}

if (data.historyLog) {
  historyLog = data.historyLog;
}

  if (data.timerSeconds) timerSeconds = data.timerSeconds;

  if (data.streak) {
    document.getElementById('streak-count').textContent = data.streak;
  }

  if (data.lastWorkoutDate) {
    localStorage.setItem('lastWorkoutDate', data.lastWorkoutDate);
  }
}

buildVolumeChart();