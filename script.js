/* =========================================================
   0. CONSTANTS & STORAGE
   ========================================================= */
const KEYS = {
    students: 'tra_students_v2',
    passages: 'tra_passages_v2',
    assessments: 'tra_assessments_v1',
    session: 'tra_session_v1'
};
const TEACHER = { username: 'teacher', password: 'telugu123', name: 'teacher' };

/* ---------- Inline SVG icons (no emoji) ---------- */
const ICONS = {
    book: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    mic: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    stop: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    check: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 10"/></svg>',
    warn: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    error: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    hourglass: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2h12M6 22h12M6 2v4a6 6 0 0 0 12 0V2M6 22v-4a6 6 0 0 1 12 0v4"/></svg>',
    headphones: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    refresh: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
    download: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    x: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    user: '<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
};
function icon(name, size) {
    size = size || 16;
    const svg = ICONS[name];
    return svg ? svg.replace(/\{s\}/g, size) : '';
}

const DEFAULT_STUDENTS = [
    { studentId: 'STU001', roll: '01', name: 'Aarav Kumar', class: '3', section: 'A' },
    { studentId: 'STU002', roll: '02', name: 'Bhavya Reddy', class: '3', section: 'A' },
    { studentId: 'STU003', roll: '03', name: 'Charan Rao', class: '3', section: 'A' },
    { studentId: 'STU004', roll: '04', name: 'Divya Sharma', class: '3', section: 'B' },
    { studentId: 'STU005', roll: '05', name: 'Esha Patel', class: '3', section: 'B' }
];

const DEFAULT_PASSAGES = [
    {
        passageId: 'TEL001', title: '1. నా పాఠశాల (Telugu)', class: '3', language: 'te-IN',
        referenceText: 'రాముడు పాఠశాలకు వెళ్తున్నాడు. అతను ప్రతిరోజూ తప్పకుండా పాఠశాలకు వెళతాడు. ఉపాధ్యాయుడు అందరికీ తెలుగు పాఠం చెప్పారు. పిల్లలు ఆనందంగా చదువుతారు.'
    },
    {
        passageId: 'ENG001', title: '2. The Fox and the Grapes (English)', class: '4', language: 'en-US',
        referenceText: 'One hot summer day, a fox was walking through an orchard. He saw a bunch of grapes hanging from a high branch. Just the thing to quench my thirst, he said. He jumped up, but missed the grapes. He tried again and again, but could not reach them.'
    },
    {
        passageId: 'ENG002', title: '3. The Thirsty Crow (English)', class: '5', language: 'en-US',
        referenceText: 'A crow was very thirsty. He flew here and there in search of water. At last, he saw a pitcher with a little water at the bottom. He tried to reach the water, but his beak could not touch it. He picked up small pebbles and dropped them into the pitcher one by one. The water rose up, and the crow drank it happily.'
    }
];

function load(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
}
function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.warn('Storage failed', e); }
}

/* =========================================================
   1. APP STATE
   ========================================================= */
const state = {
    students: [],
    passages: [],
    assessments: [],
    selectedClass: '',
    selectedSection: '',
    selectedStudentId: null,
    selectedPassageId: null,
    // reading session
    recognition: null,
    recording: false,
    manualStop: false,
    startTs: 0,
    elapsed: 0,
    timerId: null,
    finalText: '',
    interimText: '',
    sessionStudentId: null,
    sessionPassageId: null,
    analysisTimer: null,
    currentLanguage: 'te-IN'
};

/* DOM refs */
const $ = id => document.getElementById(id);
const loginScreen = $('loginScreen'), app = $('app');
const loginForm = $('loginForm'), loginError = $('loginError');
const studentListEl = $('studentList');
const passageBox = $('passageBox');
const startBtn = $('startBtn'), stopBtn = $('stopBtn');
const timerDisplay = $('timerDisplay'), readingStatus = $('readingStatus');
const transcriptBox = $('transcriptBox'), reportWrap = $('reportWrap');
const classSelect = $('classSelect'), sectionSelect = $('sectionSelect');

/* =========================================================
   2. LOGIN
   ========================================================= */
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const u = $('username').value.trim().toLowerCase();
    const p = $('password').value;

    if (u === TEACHER.username && p === TEACHER.password) {
        loginError.hidden = true;
        const lang = $('loginLanguage').value;
        state.currentLanguage = lang;
        sessionStorage.setItem(KEYS.session, JSON.stringify({ user: TEACHER.username, lang: lang }));
        navigate('/app'); // Changes URL to /app and shows the app
    } else {
        loginError.hidden = false;
        loginError.innerHTML = icon('error', 16) + ' Incorrect username or password. Please try again.';
        $('password').value = '';
        $('password').focus();
    }
});

$('appLanguage')?.addEventListener('change', e => {
    if (state.recording) {
        e.target.value = state.currentLanguage; // Revert change if actively recording
        return;
    }
    state.currentLanguage = e.target.value;
    sessionStorage.setItem(KEYS.session, JSON.stringify({ user: TEACHER.username, lang: state.currentLanguage }));
    const langName = state.currentLanguage === 'te-IN' ? 'Telugu' : 'English';
    $('teacherName').textContent = TEACHER.name + ' (' + langName + ')';
    if (state.selectedStudentId) {
        autoSelectPassageForStudent(getStudent(state.selectedStudentId));
        renderPassagePreview();
        updateStartButton();
    }
    renderDashboard();
});

// Sidebar menu logic
const menuToggle = $('menuToggle');
const sidebar = $('sidebar');
const sidebarBackdrop = $('sidebarBackdrop');
const closeSidebar = $('closeSidebar');

function openMenu() {
    if (!sidebar) return;
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    if (sidebarBackdrop) {
        sidebarBackdrop.hidden = false;
        requestAnimationFrame(() => sidebarBackdrop.classList.add('show'));
    }
}

function closeMenu() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    if (sidebarBackdrop) {
        sidebarBackdrop.classList.remove('show');
        setTimeout(() => sidebarBackdrop.hidden = true, 300);
    }
}

menuToggle?.addEventListener('click', openMenu);
closeSidebar?.addEventListener('click', closeMenu);
sidebarBackdrop?.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
});

$('logoutBtn').addEventListener('click', () => {
    closeMenu();
    clearTimeout(state.analysisTimer);
    sessionStorage.removeItem(KEYS.session);
    state.selectedStudentId = null;
    state.selectedPassageId = null;
    state.finalText = '';
    state.interimText = '';
    state.elapsed = 0;
    state.recording = false;
    state.manualStop = false;
    dashState.selectedStudentId = null;

    // Abort recognition and stop timer safely
    if (state.recognition) { try { state.recognition.abort(); } catch (e) { } state.recognition = null; }
    stopTimer();
    resetReadingPanel(true);

    navigate('/login');
    $('loginLanguage').value = state.currentLanguage;
    $('password').value = '';
    $('username').focus();
});

function showApp() {
    const resetAllBtn = $('resetAllBtn');
    if (resetAllBtn && !resetAllBtn.dataset.bound) {
        resetAllBtn.dataset.bound = '1';
        resetAllBtn.addEventListener('click', () => {
            if (!confirm('Delete ALL students, passages and assessment history stored in this browser?\n\nThis cannot be undone.')) return;
            try { Object.values(KEYS).forEach(k => localStorage.removeItem(k)); } catch (e) { }
            location.reload();
        });
    }
    loginScreen.hidden = true;
    app.hidden = false;
    const appLangSel = $('appLanguage');
    if (appLangSel) appLangSel.value = state.currentLanguage;
    const langName = state.currentLanguage === 'te-IN' ? 'Telugu' : 'English';
    $('teacherName').textContent = TEACHER.name + ' (' + langName + ')';
    renderClassSectionSelectors();
    renderStudents();
    renderPassageList();
    passageBox.textContent = 'Select a student, then press Start Reading.';
    // renderDashboard(); // Removed: handled by tab click when visible
}

/* =========================================================
   3. TAB NAVIGATION
   ========================================================= */
/* Tab listeners are handled by the router at the bottom of the file */

/* =========================================================
   4. STUDENTS
   ========================================================= */
function getStudent(id) { return state.students.find(s => s.studentId === id); }


function getPassage(id) { return state.passages.find(p => p.passageId === id); }

function sectionsForClass(cls) {
    return [...new Set(
        state.students.filter(s => s.class === cls).map(s => s.section)
    )].sort();
}

function renderClassSectionSelectors() {
    const classes = [...new Set(state.students.map(s => s.class))].sort((a, b) => (parseInt(a, 10) || 0) - (parseInt(b, 10) || 0));

    if (!classes.includes(state.selectedClass)) state.selectedClass = classes[0] || '';

    classSelect.innerHTML = classes.map(c => `<option value="${escapeHtml(c)}">Class ${escapeHtml(c)}</option>`).join('');

    const sections = sectionsForClass(state.selectedClass);
    if (!sections.includes(state.selectedSection)) state.selectedSection = sections[0] || '';

    sectionSelect.innerHTML = sections.map(s => `<option value="${escapeHtml(s)}">Section ${escapeHtml(s)}</option>`).join('');

    if (state.selectedClass) classSelect.value = state.selectedClass;
    if (state.selectedSection) sectionSelect.value = state.selectedSection;
}

classSelect.addEventListener('change', () => {
    state.selectedClass = classSelect.value;
    const sections = sectionsForClass(state.selectedClass);
    state.selectedSection = sections[0] || '';
    renderClassSectionSelectors();
    resetSelection();
    renderStudents();
    renderPassagePreview();
});

sectionSelect.addEventListener('change', () => {
    state.selectedSection = sectionSelect.value;
    resetSelection();
    renderStudents();
    renderPassagePreview();
});

function autoSelectPassageForStudent(student) {
    if (!student) { state.selectedPassageId = null; return; }
    // 1. Exact match: same class AND same language
    let match = state.passages.find(p => p.class === student.class && p.language === state.currentLanguage);
    // 2. Same language, any class
    if (!match) match = state.passages.find(p => p.language === state.currentLanguage);
    // 3. Same class, any language (last resort — will show a mismatch banner)
    if (!match) match = state.passages.find(p => p.class === student.class);
    state.selectedPassageId = match ? match.passageId : null;
}

function renderStudents() {
    studentListEl.innerHTML = '';
    const filtered = state.students
        .filter(s => s.class === state.selectedClass && s.section === state.selectedSection)
        .sort((a, b) => (parseInt(a.roll, 10) || 0) - (parseInt(b.roll, 10) || 0));

    if (!filtered.length) {
        studentListEl.innerHTML = '<p class="muted small">No students in this class / section. Add one below.</p>';
        return;
    }

    filtered.forEach(s => {
        const row = document.createElement('div');
        row.className = 'student-item' + (s.studentId === state.selectedStudentId ? ' active' : '');
        row.innerHTML = `
      <span class="student-roll">${escapeHtml(s.roll || '—')}</span>
      <span style="flex:1">
        <span style="font-weight:700;font-size:14px">${escapeHtml(s.name)}</span><br>
        <span class="student-meta">Class ${escapeHtml(s.class)}-${escapeHtml(s.section)}</span>
      </span>
      <button class="delete-btn" type="button" title="Delete student" aria-label="Delete student">${icon('x', 14)}</button>`;

        row.querySelector('.delete-btn').addEventListener('click', e => {
            e.stopPropagation();
            if (state.recording) return;
            if (!confirm(`Delete ${s.name} and all their assessment history?`)) return;
            state.students = state.students.filter(x => x.studentId !== s.studentId);
            save(KEYS.students, state.students);

            // Purge orphaned assessments
            state.assessments = state.assessments.filter(a => a.studentId !== s.studentId);
            save(KEYS.assessments, state.assessments);

            if (state.selectedStudentId === s.studentId) {
                state.selectedStudentId = null;
                state.selectedPassageId = null;
                reportWrap.innerHTML = '';
                resetReadingPanel();
                renderPassagePreview();
                updateStartButton();
            }
            renderClassSectionSelectors();
            renderStudents();
        });

        row.tabIndex = 0;
        row.setAttribute('role', 'option');
        row.setAttribute('aria-selected', s.studentId === state.selectedStudentId ? 'true' : 'false');
        row.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                row.click();
            }
        });
        row.addEventListener('click', () => {
            if (state.recording) return;
            state.selectedStudentId = s.studentId;
            autoSelectPassageForStudent(s);
            renderStudents();
            reportWrap.innerHTML = '';
            resetReadingPanel();
            renderPassagePreview();
            updateStartButton();
        });

        studentListEl.appendChild(row);
    });
}

$('addStudentForm').addEventListener('submit', e => {
    e.preventDefault();
    const roll = $('newStudentRoll').value.trim().replace(/\D/g, '');
    const name = $('newStudentName').value.trim();
    const newClass = $('newStudentClass').value.trim();
    const newSection = $('newStudentSection').value.trim().toUpperCase();

    if (!roll || !name || !newClass || !newSection) {
        alert('Please fill in all fields. Roll must contain digits.');
        return;
    }

    const dup = state.students.some(s =>
        s.class === newClass && s.section === newSection &&
        (parseInt(s.roll, 10) || 0) === (parseInt(roll, 10) || 0)
    );
    if (dup) {
        alert('A student with that roll number already exists in this class / section.');
        return;
    }

    state.students.push({
        studentId: 'STU' + Date.now(),
        roll,
        name,
        class: newClass,
        section: newSection
    });
    save(KEYS.students, state.students);
    e.target.reset();

    // Automatically switch the dropdowns to the newly added class/section
    state.selectedClass = newClass;
    state.selectedSection = newSection;

    state.selectedStudentId = null;
    state.selectedPassageId = null;

    renderClassSectionSelectors();
    renderStudents();
    renderPassagePreview();
    updateStartButton();
});

/* =========================================================
   4b. PASSAGE LIBRARY (teacher add / remove)
   ========================================================= */
function renderPassageList() {
    const listEl = $('passageList');
    if (!listEl) return;

    const passages = [...state.passages].sort((a, b) => {
        const ca = parseInt(a.class, 10) || 0;
        const cb = parseInt(b.class, 10) || 0;
        if (ca !== cb) return ca - cb;
        if (a.language !== b.language) return a.language.localeCompare(b.language);
        return a.title.localeCompare(b.title);
    });

    if (!passages.length) {
        listEl.innerHTML = '<p class="muted small">No passages yet. Add one below.</p>';
        return;
    }

    listEl.innerHTML = passages.map(p => {
        const wordCount = (p.referenceText || '').trim().split(/\s+/).filter(Boolean).length;
        const langName = p.language === 'en-US' ? 'English' : 'Telugu';
        return `<div class="passage-item">
            <div style="flex:1;min-width:0">
                <div class="passage-item-title">${escapeHtml(p.title)}</div>
                <div class="passage-item-meta">Class ${escapeHtml(p.class)} · ${langName} · ${wordCount} words</div>
            </div>
            <button type="button" class="delete-btn" data-passage-id="${escapeHtml(p.passageId)}" title="Delete passage" aria-label="Delete passage">${icon('x', 14)}</button>
        </div>`;
    }).join('');

    listEl.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (state.recording) return;
            const id = btn.dataset.passageId;
            const p = getPassage(id);
            if (!p) return;
            if (!confirm(`Delete passage "${p.title}"?\n\nExisting assessment records will keep working, but new attempts cannot use this passage.`)) return;

            state.passages = state.passages.filter(x => x.passageId !== id);
            save(KEYS.passages, state.passages);

            if (state.selectedPassageId === id) {
                const s = getStudent(state.selectedStudentId);
                if (s) autoSelectPassageForStudent(s);
                else state.selectedPassageId = null;
                renderPassagePreview();
                updateStartButton();
            }

            renderPassageList();
        });
    });
}

$('addPassageForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const title = $('newPassageTitle').value.trim();
    const cls = $('newPassageClass').value.trim();
    const lang = $('newPassageLang').value;
    const text = $('newPassageText').value.trim();

    if (!title || !cls || !lang || !text) {
        alert('Please fill in all fields.');
        return;
    }

    state.passages.push({
        passageId: 'PAS' + Date.now(),
        title,
        class: cls,
        language: lang,
        referenceText: text
    });
    save(KEYS.passages, state.passages);

    e.target.reset();
    renderPassageList();

    // If the currently selected student is now eligible for this passage, re-run auto-select
    if (state.selectedStudentId) {
        autoSelectPassageForStudent(getStudent(state.selectedStudentId));
        renderPassagePreview();
        updateStartButton();
    }
});

/* =========================================================
   5. PASSAGES
   ========================================================= */
// (passage dropdown removed — passage is auto-selected per class)

function renderPassagePreview() {
    const p = getPassage(state.selectedPassageId);
    if (!p) {
        passageBox.textContent = state.selectedStudentId
            ? 'No passage available for this class / language. Ask your teacher to add one in the Passage library.'
            : 'Select a student to load their passage.';
        return;
    }
    const langLabel = p.language === 'en-US' ? 'English' : 'Telugu';
    const mismatch = p.language !== state.currentLanguage;

    passageBox.innerHTML =
        `<div class="passage-assign-label">Read this passage aloud</div>
         <div class="passage-title">${escapeHtml(p.title)}</div>
         <div class="passage-text" lang="${p.language === 'en-US' ? 'en' : 'te'}">${escapeHtml(p.referenceText)}</div>
         <div class="passage-assign-hint">Recognising as <b>${langLabel}</b>. Speak clearly into the microphone and press Stop when done.</div>
         ${mismatch
            ? `<div class="banner warn" style="margin-top:12px;font-size:13px">
                   This passage is in <b>${langLabel}</b>, but your topbar language is
                   <b>${state.currentLanguage === 'en-US' ? 'English' : 'Telugu'}</b>.
                   Recognition will follow the passage language, so the score will be correct.
               </div>`
            : ''}`;
}

function resetSelection() {
    clearTimeout(state.analysisTimer);
    state.analysisTimer = null;
    state.sessionData = null;
    state.selectedStudentId = null;
    state.selectedPassageId = null;
    reportWrap.innerHTML = '';
    resetReadingPanel();
    updateStartButton();
}

function updateStartButton() {
    const ready = !!(state.selectedStudentId && state.selectedPassageId);
    startBtn.disabled = !ready || state.recording;
    if (state.recording) startBtn.title = 'Recording in progress';
    else if (!state.selectedStudentId) startBtn.title = 'Select a student first';
    else if (!state.selectedPassageId) startBtn.title = 'No passage available for this class';
    else startBtn.title = '';
}

/* =========================================================
   6. TEXT NORMALISATION, TOKENISING & ALIGNMENT
   ========================================================= */
function normalizeTelugu(text) {
    return (text || '')
        .normalize('NFC')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')            // zero-width chars
        .replace(/[.,!?;:"'“”‘’()\[\]{}\-–—।॥]/g, ' ')    // punctuation
        .replace(/\s+/g, ' ')
        .trim();
}
function tokenize(text) {
    const n = normalizeTelugu(text);
    return n ? n.split(' ') : [];
}

/**
 * Levenshtein alignment: match / sub / del / ins
 */
function alignWords(ref, hyp) {
    // Cap hypothesis length to avoid O(n·m) blowup on runaway transcripts
    if (hyp.length > ref.length * 2 + 20) hyp = hyp.slice(0, ref.length * 2 + 20);
    const n = ref.length, m = hyp.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 0; i <= n; i++) dp[i][0] = i;
    for (let j = 0; j <= m; j++) dp[0][j] = j;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const cost = ref[i - 1].toLowerCase() === hyp[j - 1].toLowerCase() ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j - 1] + cost,
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1
            );
        }
    }

    const ops = [];
    let i = n, j = m;
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0) {
            const cost = ref[i - 1].toLowerCase() === hyp[j - 1].toLowerCase() ? 0 : 1;
            if (dp[i][j] === dp[i - 1][j - 1] + cost) {
                ops.push({
                    type: cost === 0 ? 'match' : 'sub',
                    ref: ref[i - 1],
                    hyp: hyp[j - 1],
                    refIndex: i - 1
                });
                i--; j--; continue;
            }
        }
        if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
            ops.push({ type: 'del', ref: ref[i - 1], refIndex: i - 1 });
            i--; continue;
        }
        if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
            ops.push({ type: 'ins', hyp: hyp[j - 1] });
            j--; continue;
        }
        if (i > 0) { ops.push({ type: 'del', ref: ref[i - 1], refIndex: i - 1 }); i--; }
        else if (j > 0) { ops.push({ type: 'ins', hyp: hyp[j - 1] }); j--; }
    }
    return ops.reverse();
}

/* =========================================================
   7. SPEECH RECOGNITION
   ========================================================= */
function getRecognitionCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

startBtn.addEventListener('click', startReading);
stopBtn.addEventListener('click', stopReading);

function startReading() {
    clearTimeout(state.analysisTimer);
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
        setStatus(icon('error', 16) + ' This browser does not support speech recognition. Please use Google Chrome (desktop or Android) over HTTPS or localhost.', 'err');
        return;
    }
    if (!state.selectedStudentId || !state.selectedPassageId) return;
    if (state.recording) return;

    // free any previous instance
    if (state.recognition) { try { state.recognition.abort(); } catch (e) { } }

    state.sessionStudentId = state.selectedStudentId;
    state.sessionPassageId = state.selectedPassageId;
    state.finalText = '';
    state.interimText = '';
    state.manualStop = false;
    state.recording = true;
    state.startTs = Date.now();
    state.elapsed = 0;

    reportWrap.innerHTML = '';
    transcriptBox.innerHTML = '<span class="muted">Listening…</span>';
    setStatus(icon('mic', 16) + ' Listening…', 'info');
    setReadingUI(true);
    startTimer();

    const passage = getPassage(state.selectedPassageId);
    const recLang = (passage && passage.language) || 'te-IN';


    const rec = new Ctor();
    rec.lang = recLang;
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onstart = () => {
        setStatus('<span class="rec-dot"></span>Recording…', 'info');
    };

    rec.onresult = (event) => {
        let interim = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const res = event.results[i];
            if (res.isFinal) {
                state.finalText += res[0].transcript + ' ';
                if (state.finalText.length > 5000) state.finalText = state.finalText.slice(-5000);
            } else {
                interim += res[0].transcript;
            }
        }
        state.interimText = interim;
        renderTranscript();
    };

    rec.onerror = (event) => {
        const code = event.error;
        if (code === 'aborted' && state.manualStop) return;

        if (code === 'not-allowed' || code === 'service-not-allowed') {
            fatalStop(icon('error', 16) + ' Microphone permission denied. Allow microphone access in the browser and try again.');
        } else if (code === 'audio-capture') {
            fatalStop(icon('error', 16) + ' No microphone found. Please connect a microphone and try again.');
        } else if (code === 'network') {
            fatalStop(icon('error', 16) + ' Network error — the speech recognition service could not be reached.');
        } else if (code === 'language-not-supported') {
            const humanLang = recLang === 'en-US' ? 'English (en-US)' : 'Telugu (te-IN)';
            fatalStop(icon('error', 16) + ' ' + humanLang + ' recognition is not available in this browser. Try Google Chrome.');
        } else if (code === 'no-speech') {
            setStatus(icon('warn', 16) + ' No speech detected yet. Please speak a little louder.', 'err');
        } else {
            console.warn('Speech error:', code);
        }
    };

    rec.onend = () => {
        // Restart only if the user hasn't stopped and we're still supposed to record
        if (state.recording && !state.manualStop) {
            // Small delay avoids rapid restart loops and microphone "beeping"
            setTimeout(() => {
                if (state.recording && !state.manualStop) {
                    try {
                        rec.start();
                    } catch (e) {
                        console.warn('Restart failed:', e);
                        fatalStop(icon('error', 16) + ' Microphone session was interrupted. Please press Stop and start again.');
                    }
                }
            }, 100);
        }
    };

    state.recognition = rec;
    try {
        rec.start();
    } catch (err) {
        // "already started" is harmless — only fatal for real failures
        if (!/already\s+started/i.test(err.message || '')) {
            fatalStop(icon('error', 16) + ' Could not start speech recognition: ' + err.message);
        }
    }
}

function fatalStop(message) {
    setStatus(message, 'err');
    state.recording = false;
    state.manualStop = true;
    stopTimer();
    if (state.recognition) {
        const r = state.recognition;
        r.onresult = r.onerror = r.onend = r.onstart = null;
        try { r.abort(); } catch (e) { }
        state.recognition = null;
    }
    setReadingUI(false);
    updateStartButton();
}

function stopReading() {
    if (!state.recording) return;
    state.manualStop = true;
    state.recording = false;
    stopTimer();
    state.elapsed = (Date.now() - state.startTs) / 1000;

    // SNAPSHOT the state here to prevent corruption from stray clicks
    state.sessionData = {
        studentId: state.sessionStudentId,
        passageId: state.sessionPassageId,
        finalText: state.finalText,
        interimText: state.interimText,
        durationSeconds: Math.max(1, Math.round(state.elapsed))
    };

    if (state.recognition) {
        const rec = state.recognition;
        // Analyse as soon as the engine flushes the final text
        rec.onend = () => {
            clearTimeout(state.analysisTimer);
            state.analysisTimer = setTimeout(analyseAndReport, 250);
        };
        try { rec.stop(); } catch (e) { }
    }

    setReadingUI(false);
    setStatus(icon('hourglass', 16) + ' Analysing your reading…', 'info');

    // Safety net in case onend never fires
    clearTimeout(state.analysisTimer);
    state.analysisTimer = setTimeout(analyseAndReport, 1500);
}

function setReadingUI(recording) {
    startBtn.disabled = recording;
    stopBtn.disabled = !recording;
    document.querySelectorAll('.student-item').forEach(el => {
        el.style.opacity = recording ? .55 : 1;
        el.style.pointerEvents = recording ? 'none' : 'auto';
    });
    document.querySelectorAll('.student-item .delete-btn').forEach(b => b.disabled = recording);
    classSelect.disabled = recording;
    sectionSelect.disabled = recording;
    const addForm = $('addStudentForm');
    if (addForm) {
        addForm.querySelectorAll('input, button').forEach(el => el.disabled = recording);
        const summary = addForm.querySelector('summary');
        if (summary) summary.style.pointerEvents = recording ? 'none' : '';
    }
}

function startTimer() {
    stopTimer();
    timerDisplay.textContent = '00:00';
    state.timerId = setInterval(() => {
        state.elapsed = (Date.now() - state.startTs) / 1000;
        timerDisplay.textContent = formatTime(state.elapsed);
    }, 200);
}
function stopTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
}
function formatTime(sec) {
    const s = Math.max(0, Math.floor(sec));
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}
function setStatus(html, cls) {
    readingStatus.className = 'status ' + (cls || 'info');
    readingStatus.setAttribute('aria-live', cls === 'err' ? 'assertive' : 'polite');
    readingStatus.innerHTML = html;
}
function renderTranscript() {
    const finalPart = state.finalText.trim();
    const interimPart = state.interimText.trim();
    transcriptBox.innerHTML = '';
    if (!finalPart && !interimPart) {
        transcriptBox.innerHTML = '<span class="muted">Nothing recognised yet…</span>';
        return;
    }
    if (finalPart) transcriptBox.appendChild(document.createTextNode(finalPart + ' '));
    if (interimPart) {
        const span = document.createElement('span');
        span.className = 'interim';
        span.textContent = interimPart;
        transcriptBox.appendChild(span);
    }
    transcriptBox.scrollTop = transcriptBox.scrollHeight;
}
function resetReadingPanel(force = false) {
    if (state.recording && !force) return;
    clearTimeout(state.analysisTimer);
    state.analysisTimer = null;
    state.sessionData = null;
    state.finalText = ''; state.interimText = '';
    state.startTs = 0; state.elapsed = 0;
    transcriptBox.innerHTML = '<span class="muted">Ready…</span>';
    timerDisplay.textContent = '00:00';
    setStatus('Microphone is off.', 'info');
    setReadingUI(false);
}

/* =========================================================
   8. ANALYSIS ENGINE
   ========================================================= */
function analyseAndReport() {
    const session = state.sessionData || {
        studentId: state.sessionStudentId,
        passageId: state.sessionPassageId,
        finalText: state.finalText,
        interimText: state.interimText,
        durationSeconds: Math.max(1, Math.round(state.elapsed))
    };

    const studentId = session.studentId;
    const passageId = session.passageId;
    const student = getStudent(studentId);
    const passage = getPassage(passageId);

    if (!student || !passage) {
        setStatus(icon('error', 16) + ' Session lost. Please select a student and passage again.', 'err');
        return;
    }

    const refWords = tokenize(passage.referenceText);

    const finalText = session.finalText.trim();
    const interimText = session.interimText.trim();
    const usedInterimOnly = !finalText && !!interimText;
    const transcriptForAnalysis = finalText || interimText;
    const hypWords = tokenize(transcriptForAnalysis);
    const durationSeconds = session.durationSeconds;

    if (!hypWords.length) {
        setStatus(icon('warn', 16) + ' No speech was recognised. Check the microphone, speak clearly and try again.', 'err');
        return;
    }

    const ops = alignWords(refWords, hypWords);

    let C = 0, S = 0, D = 0, I = 0;
    const missedWords = [];
    const substitutions = [];
    const extraWords = [];

    ops.forEach(op => {
        if (op.type === 'match') C++;
        else if (op.type === 'sub') { S++; substitutions.push({ ref: op.ref, hyp: op.hyp }); }
        else if (op.type === 'del') { D++; missedWords.push(op.ref); }
        else if (op.type === 'ins') { I++; extraWords.push(op.hyp); }
    });

    const N = refWords.length;
    const wer = N > 0 ? ((S + D + I) / N) * 100 : 0;
    const accuracy = Math.max(0, Math.min(100, 100 - wer));
    const minutes = durationSeconds / 60;
    const cwpm = minutes > 0 ? C / minutes : 0;
    const pace = minutes > 0 ? hypWords.length / minutes : 0;

    const needsReview = usedInterimOnly || accuracy < 40 || hypWords.length < N * 0.3;

    const result = {
        assessmentId: 'AS' + Date.now(),
        studentId,
        passageId,
        language: passage.language,
        dateISO: new Date().toISOString(),
        durationSeconds,
        accuracy: round1(accuracy),
        wordsPerMinute: round1(pace),
        correctWordsPerMinute: round1(cwpm),
        mistakes: S + D,
        substitutionCount: S,
        deletionCount: D,
        insertionCount: I,
        correctCount: C,
        referenceWordCount: N,
        recognisedWordCount: hypWords.length,
        transcript: transcriptForAnalysis,
        missedWords,
        substitutions,
        extraWords,
        ops,
        needsReview,
        suggestions: []
    };
    result.suggestions = buildSuggestions(result);

    // Save a slimmed version without the heavy `ops` array
    const slimResult = { ...result };
    delete slimResult.ops;
    state.assessments.push(slimResult);
    save(KEYS.assessments, state.assessments);
    setStatus(icon('check', 16) + ' Analysis complete. Saved to dashboard.', 'info');
    renderReport(result);

    // Auto-redirect (smooth scroll) to the report page
    setTimeout(() => {
        if (reportWrap) {
            reportWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 150);
}

/* renderStudentProgressSummary removed — no Progress tab */
function round1(n) { return Math.round(n * 10) / 10; }

function buildSuggestions(r) {
    const out = [];
    const missed = uniq(r.missedWords).slice(0, 8);
    const subs = r.substitutions.slice(0, 5);

    if (missed.length) {
        out.push('Practise these missed words separately: ' + missed.join(', '));
    }
    if (subs.length) {
        out.push('Read these short word groups again: ' +
            subs.map(s => `${s.ref} → ${s.hyp}`).join(' · '));
    }
    if (r.accuracy < 60) {
        out.push('Try a shorter passage first, then come back to this one.');
    }
    if (r.wordsPerMinute < 20 && r.recognisedWordCount > 5) {
        out.push('Read the passage aloud once more to build a steady reading pace.');
    }
    if (r.needsReview) {
        out.push('Recognition confidence looks low — please ask the teacher to review this attempt.');
    }
    if (r.accuracy >= 90 && !r.needsReview) {
        out.push('Excellent reading! Try a slightly harder passage next time.');
    }
    if (!out.length) {
        out.push('Good attempt. Read the passage again to build fluency and speed.');
    }
    return out;
}

function uniq(arr) { return [...new Set(arr.filter(Boolean))]; }

/* =========================================================
   9. REPORT RENDERING
   ========================================================= */
function renderReport(r) {
    const student = getStudent(r.studentId);
    const passage = getPassage(r.passageId);
    const date = new Date(r.dateISO);

    const missed = uniq(r.missedWords || []);
    const extra = r.extraWords;

    // Calculate SVG progress ring values
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const accOffset = circumference - (r.accuracy / 100) * circumference;
    const cwpmPercent = Math.min(100, (r.correctWordsPerMinute / 60) * 100); // assuming 60 cwpm is 100%
    const cwpmOffset = circumference - (cwpmPercent / 100) * circumference;

    const accColor = r.accuracy >= 80 ? 'var(--ok)' : r.accuracy >= 60 ? 'var(--warn)' : 'var(--bad)';

    reportWrap.innerHTML = `
    <div class="premium-report fade-in-up">
      <div class="premium-header">
        <div class="header-info">
            <span class="premium-badge">Performance Report</span>
            <h2>${escapeHtml(student ? student.name : r.studentId)}</h2>
            <p class="muted">${escapeHtml(passage ? passage.title : r.passageId)} · Class ${escapeHtml(student ? student.class : '')}-${escapeHtml(student ? student.section : '')}</p>
        </div>
        <div class="header-date">
            <div>${date.toLocaleDateString()}</div>
            <div class="small">${date.toLocaleTimeString()}</div>
            <div class="small muted" style="margin-top:4px">ID: ${escapeHtml(r.assessmentId)}</div>
        </div>
      </div>

      ${r.needsReview
            ? `<div class="premium-banner warn">${icon('warn', 18)} Low recognition confidence — please review this attempt before treating the score as a student mistake.</div>`
            : (r.accuracy >= 85
                ? `<div class="premium-banner good">${icon('check', 18)} Strong reading attempt!</div>`
                : '')}

      <div class="premium-grid">
        <!-- Hero Metric 1 -->
        <div class="glass-card metric-hero">
            <svg class="progress-ring" width="90" height="90" viewBox="0 0 90 90">
                <circle class="ring-bg" cx="45" cy="45" r="${radius}" />
                <circle class="ring-progress" cx="45" cy="45" r="${radius}" 
                    style="stroke: ${accColor}; stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference}; --target-offset: ${accOffset};" />
            </svg>
            <div class="hero-content">
                <div class="label">Accuracy</div>
                <div class="value" style="color: ${accColor}">${r.accuracy}%</div>
                <div class="sub">${r.correctCount} / ${r.referenceWordCount} words</div>
            </div>
        </div>

        <!-- Hero Metric 2 -->
        <div class="glass-card metric-hero">
            <svg class="progress-ring" width="90" height="90" viewBox="0 0 90 90">
                <circle class="ring-bg" cx="45" cy="45" r="${radius}" />
                <circle class="ring-progress" cx="45" cy="45" r="${radius}" 
                    style="stroke: var(--violet); stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference}; --target-offset: ${cwpmOffset};" />
            </svg>
            <div class="hero-content">
                <div class="label">Speed (CWPM)</div>
                <div class="value" style="color: var(--violet)">${r.correctWordsPerMinute}</div>
                <div class="sub">Correct words / min</div>
            </div>
        </div>

        <!-- Small Stats -->
        <div class="glass-card stat-card">
            <div class="label">Reading Time</div>
            <div class="value">${r.durationSeconds}<small>s</small></div>
        </div>
        <div class="glass-card stat-card">
            <div class="label">Total WPM</div>
            <div class="value">${r.wordsPerMinute}</div>
        </div>
        <div class="glass-card stat-card">
            <div class="label">Mistakes</div>
            <div class="value" style="color: ${r.mistakes > 5 ? 'var(--bad)' : 'var(--ink)'}">${r.mistakes}</div>
        </div>
      </div>

      <div class="premium-section">
        <h3>What the student said</h3>
        <div class="glass-transcript">
            ${r.transcript ? escapeHtml(r.transcript) : '<span class="muted small">Nothing was recognised.</span>'}
        </div>
      </div>

      <div class="premium-lists">
        <div class="glass-list">
          <h3>Missed Words <span class="badge">${missed.length}</span></h3>
          <div class="chip-container">
            ${missed.slice(0, 20).map(w => `<span class="premium-chip bad">${escapeHtml(w)}</span>`).join('') || '<span class="muted small">None!</span>'}
          </div>
        </div>
        <div class="glass-list">
          <h3>Extra Words <span class="badge">${extra.length}</span></h3>
          <div class="chip-container">
            ${extra.slice(0, 20).map(w => `<span class="premium-chip extra">${escapeHtml(w)}</span>`).join('') || '<span class="muted small">None!</span>'}
          </div>
        </div>
      </div>

      <div class="premium-suggestions">
        <div class="suggestion-header">
            <div class="telugu-line" lang="te">మీ చదవడం బాగుంది!</div>
            <h3>Suggested Practice</h3>
        </div>
        <ul>${r.suggestions.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>
      </div>

      <div class="premium-actions">
        <button class="btn-premium ghost" id="readAgainBtn">${icon('refresh', 18)} Read Again</button>
        <button class="btn-premium primary" id="exportBtn">${icon('download', 18)} Export JSON</button>
      </div>
    </div>
  `;

    // Trigger SVG ring animation
    setTimeout(() => {
        document.querySelectorAll('.ring-progress').forEach(el => {
            el.style.strokeDashoffset = el.style.getPropertyValue('--target-offset');
        });
    }, 100);

    $('readAgainBtn').addEventListener('click', () => {
        reportWrap.innerHTML = '';
        resetReadingPanel();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $('exportBtn').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(r, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `report-${r.studentId}-${r.assessmentId}.json`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
}

/* renderAlignedText removed — aligned-text view is not used */

/* =========================================================
   10. (removed — Progress / History feature no longer exists)
   ========================================================= */

/* renderClassOverview removed */
/* renderProgressStudents removed */

/* renderProgress removed */
/* =========================================================
   11. HELPERS & INIT
   ========================================================= */
function escapeHtml(str) {
    return String(str == null ? '' : str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function init() {
    state.students = load(KEYS.students, null) || DEFAULT_STUDENTS.slice();
    state.passages = load(KEYS.passages, null) || DEFAULT_PASSAGES.slice();
    state.assessments = load(KEYS.assessments, []) || [];

    // Migrate older records: every student must have a roll field
    let needsMigration = false;
    state.students = state.students.map((s, i) => {
        if (!s.roll) { needsMigration = true; return { ...s, roll: String(i + 1).padStart(2, '0') }; }
        return s;
    });

    // Persist only when the key was empty or migration added roll numbers
    if (!localStorage.getItem(KEYS.students) || needsMigration) save(KEYS.students, state.students);
    try {
        if (!localStorage.getItem(KEYS.passages)) save(KEYS.passages, state.passages);
    } catch (e) { }

    // restore session on refresh
    const sessionData = sessionStorage.getItem(KEYS.session);
    if (sessionData) {
        try {
            const parsed = JSON.parse(sessionData);
            if (parsed.lang) state.currentLanguage = parsed.lang;
        } catch (e) { }
        showApp();
    } else {
        $('username').focus();
    }
}

/* =========================================================
   12. DASHBOARD MODULE
   ========================================================= */

const dashState = { sort: { key: 'name', dir: 'asc' }, selectedStudentId: null };

/* Filter listeners (mounted once) */
['dashClass', 'dashSection', 'dashLang', 'dashRange'].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener('change', renderDashboard);
});
$('dashExport')?.addEventListener('click', exportDashboardCsv);

$('dashStudentPickerClose')?.addEventListener('click', () => {
    dashState.selectedStudentId = null;
    renderDashboard();
});

function getFilteredAssessments() {
    const cls = $('dashClass').value;
    const sec = $('dashSection').value;
    const lang = $('dashLang')?.value || 'ALL';
    const range = $('dashRange').value;

    const cutoff = range === 'all' ? 0 : Date.now() - parseInt(range, 10) * 86400000;
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    return state.assessments.filter(a => {
        const s = byId[a.studentId];
        if (!s) return false;
        if (cls !== 'ALL' && s.class !== cls) return false;
        if (sec !== 'ALL' && s.section !== sec) return false;
        if (lang !== 'ALL' && a.language !== lang) return false;
        if (cutoff && new Date(a.dateISO).getTime() < cutoff) return false;
        return true;
    });
}

function populateDashFilters() {
    const classes = [...new Set(state.students.map(s => s.class))].sort((a, b) => (parseInt(a, 10) || 0) - (parseInt(b, 10) || 0));
    const sections = [...new Set(state.students.map(s => s.section))].sort();

    const classSel = $('dashClass');
    const secSel = $('dashSection');
    const prevCls = classSel.value || 'ALL';
    const prevSec = secSel.value || 'ALL';

    classSel.innerHTML = `<option value="ALL">All classes</option>` +
        classes.map(c => `<option value="${escapeHtml(c)}">Class ${escapeHtml(c)}</option>`).join('');
    secSel.innerHTML = `<option value="ALL">All sections</option>` +
        sections.map(s => `<option value="${escapeHtml(s)}">Section ${escapeHtml(s)}</option>`).join('');

    classSel.value = (prevCls === 'ALL' || classes.includes(prevCls)) ? prevCls : 'ALL';
    secSel.value = (prevSec === 'ALL' || sections.includes(prevSec)) ? prevSec : 'ALL';
}

function renderDashboard() {
    populateDashFilters();
    const list = getFilteredAssessments();

    renderKpis(list);
    renderBandChart(list);
    renderClassCompare(list);
    renderTrendChart(list);
    renderAttention(list);
    renderRecent(list);
    renderOverviewTable(list);

    renderDashStudentPicker();
    renderDashStudentDetail();
}

function studentsInDashFilter() {
    const cls = $('dashClass').value;
    const sec = $('dashSection').value;
    return state.students
        .filter(s => (cls === 'ALL' || s.class === cls) && (sec === 'ALL' || s.section === sec))
        .sort((a, b) => {
            if (a.class !== b.class) return (parseInt(a.class, 10) || 0) - (parseInt(b.class, 10) || 0);
            if (a.section !== b.section) return a.section.localeCompare(b.section);
            return (parseInt(a.roll, 10) || 0) - (parseInt(b.roll, 10) || 0);
        });
}

function renderDashStudentPicker() {
    const students = studentsInDashFilter();
    const counts = {};
    getFilteredAssessments().forEach(a => {
        counts[a.studentId] = (counts[a.studentId] || 0) + 1;
    });

    if (!students.length) {
        $('dashStudentPicker').innerHTML = '<div class="dash-empty">No students match this class / section.</div>';
        return;
    }

    $('dashStudentPicker').innerHTML = students.map(s => {
        const n = counts[s.studentId] || 0;
        const active = s.studentId === dashState.selectedStudentId ? ' active' : '';
        return `<button type="button" class="dash-student-chip${active}" data-student-id="${escapeHtml(s.studentId)}">
            <span class="chip-roll">${escapeHtml(s.roll || '—')}</span>
            <span class="chip-name">${escapeHtml(s.name)}</span>
            <span class="chip-meta">${n} attempt${n === 1 ? '' : 's'}</span>
        </button>`;
    }).join('');

    $('dashStudentPicker').querySelectorAll('.dash-student-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            dashState.selectedStudentId = btn.dataset.studentId;
            renderDashboard();
            const el = $('dashStudentDetail');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function renderDashStudentDetail() {
    const detailEl = $('dashStudentDetail');
    const aggEl = $('dashAggregateView');
    const closeBtn = $('dashStudentPickerClose');
    if (!detailEl || !aggEl || !closeBtn) return;

    if (!dashState.selectedStudentId) {
        detailEl.hidden = true;
        aggEl.hidden = false;
        closeBtn.hidden = true;
        return;
    }

    const student = getStudent(dashState.selectedStudentId);
    if (!student) {
        detailEl.hidden = true;
        aggEl.hidden = false;
        closeBtn.hidden = true;
        return;
    }

    detailEl.hidden = false;
    aggEl.hidden = true;
    closeBtn.hidden = false;

    const all = getFilteredAssessments()
        .filter(a => a.studentId === student.studentId)
        .sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO));

    const header = `<div class="dash-card-head">
        <h3>${escapeHtml(student.name)} · Progress</h3>
        <span class="muted small">Class ${escapeHtml(student.class)}-${escapeHtml(student.section)} · Roll ${escapeHtml(student.roll || '—')}</span>
    </div>`;

    if (!all.length) {
        detailEl.innerHTML = `<div class="card" style="margin-bottom:16px">
            ${header}
            <div class="dash-empty">
                ${escapeHtml(student.name)} has no attempts matching the current filters.
                <br><small>Try switching the Language filter or the time range.</small>
            </div>
        </div>`;
        detailEl.hidden = false;
        aggEl.hidden = true;
        closeBtn.hidden = false;
        return;
    }

    const attempts = all.length;
    const first = all[0];
    const latest = all[all.length - 1];
    const best = Math.max(...all.map(a => a.accuracy));
    const trend = round1(latest.accuracy - first.accuracy);
    const avgAcc = round1(all.reduce((s, a) => s + a.accuracy, 0) / attempts);
    const avgCwpm = round1(all.reduce((s, a) => s + a.correctWordsPerMinute, 0) / attempts);

    const missCount = {};
    all.forEach(a => (a.missedWords || []).forEach(w => missCount[w] = (missCount[w] || 0) + 1));
    const frequent = Object.entries(missCount).sort((a, b) => b[1] - a[1]).slice(0, 10);

    const passById = {};
    state.passages.forEach(p => passById[p.passageId] = p);

    detailEl.innerHTML = `<div class="card" style="margin-bottom:16px">
        ${header}

        <div class="kpi-row">
            <div class="kpi">
                <div class="kpi-label">Attempts</div>
                <div class="kpi-value">${attempts}</div>
                <div class="kpi-sub">in time range</div>
            </div>
            <div class="kpi kpi-ok">
                <div class="kpi-label">Best accuracy</div>
                <div class="kpi-value">${best}<small>%</small></div>
                <div class="kpi-sub">${labelForAcc(best)}</div>
            </div>
            <div class="kpi">
                <div class="kpi-label">Latest accuracy</div>
                <div class="kpi-value">${latest.accuracy}<small>%</small></div>
                <div class="kpi-sub">${new Date(latest.dateISO).toLocaleDateString()}</div>
            </div>
            <div class="kpi">
                <div class="kpi-label">Average accuracy</div>
                <div class="kpi-value">${avgAcc}<small>%</small></div>
                <div class="kpi-sub">across attempts</div>
            </div>
            <div class="kpi">
                <div class="kpi-label">Average CWPM</div>
                <div class="kpi-value">${avgCwpm}<small>cwpm</small></div>
                <div class="kpi-sub">correct words / min</div>
            </div>
            <div class="kpi kpi-${trend >= 0 ? 'ok' : 'bad'}">
                <div class="kpi-label">Change</div>
                <div class="kpi-value">${trend >= 0 ? '+' : ''}${trend}<small>%</small></div>
                <div class="kpi-sub">first → latest</div>
            </div>
        </div>

        <h3 style="margin-top:18px">Accuracy trend</h3>
        ${$('dashLang').value === 'ALL'
            ? '<div class="dash-empty" style="padding: 16px; margin-bottom: 16px;">Filter to a single language to see a meaningful trend.</div>'
            : `<div class="trend-chart">${all.map(a => `
                <div class="trend-bar-wrap">
                    <div class="trend-bar" style="height:${Math.max(4, a.accuracy)}%" aria-label="Accuracy ${Math.round(a.accuracy)}%"><span>${Math.round(a.accuracy)}%</span></div>
                    <div class="trend-label">${formatShortDate(a.dateISO.slice(0, 10))}</div>
                </div>`).join('')}</div>`}

        <h3 style="margin-top:22px">Attempt history</h3>
        <div style="overflow:auto;max-height:340px">
            <table class="dash-table">
                <thead>
                    <tr>
                        <th>#</th><th>Date</th><th>Passage</th>
                        <th>Accuracy</th><th>CWPM</th><th>Mistakes</th><th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    ${all.map((a, i) => {
                const p = passById[a.passageId];
                const pillCls = a.accuracy >= 80 ? 'ok' : a.accuracy >= 60 ? 'warn' : 'bad';
                return `<tr>
                            <td class="num">${i + 1}</td>
                            <td>${new Date(a.dateISO).toLocaleString()}</td>
                            <td>${escapeHtml(p ? p.title : a.passageId)}</td>
                            <td><span class="acc-pill ${pillCls}">${a.accuracy}%</span></td>
                            <td class="num">${a.correctWordsPerMinute}</td>
                            <td class="num">${a.mistakes}</td>
                            <td>${a.needsReview ? 'yes' : '—'}</td>
                        </tr>`;
            }).join('')}
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:22px">Frequently missed words</h3>
        ${frequent.length
            ? frequent.map(([w, n]) => `<span class="chip bad">${escapeHtml(w)} ×${n}</span>`).join('')
            : '<span class="muted small">No repeated missed words — good progress.</span>'}

        <h3 style="margin-top:22px">Latest suggested practice</h3>
        <ul class="small" style="margin:0;padding-left:20px">
            ${(latest.suggestions || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
    </div>`;
}

function renderKpis(list) {
    const unique = new Set(list.map(a => a.studentId)).size;
    const attempts = list.length;
    const avgAcc = attempts ? round1(list.reduce((s, a) => s + a.accuracy, 0) / attempts) : 0;
    const avgCwpm = attempts ? round1(list.reduce((s, a) => s + a.correctWordsPerMinute, 0) / attempts) : 0;
    const needsRev = list.filter(a => a.needsReview).length;

    const accCls = avgAcc >= 80 ? 'ok' : avgAcc >= 60 ? '' : avgAcc >= 40 ? 'warn' : 'bad';

    $('dashKpis').innerHTML = `
        <div class="kpi">
            <div class="kpi-label">Students assessed</div>
            <div class="kpi-value">${unique}</div>
            <div class="kpi-sub">${attempts} attempt${attempts === 1 ? '' : 's'} in filter</div>
        </div>
        <div class="kpi kpi-${accCls}">
            <div class="kpi-label">Average accuracy</div>
            <div class="kpi-value">${avgAcc}<small>%</small></div>
            <div class="kpi-sub">${labelForAcc(avgAcc)}</div>
        </div>
        <div class="kpi">
            <div class="kpi-label">Average speed</div>
            <div class="kpi-value">${avgCwpm}<small>cwpm</small></div>
            <div class="kpi-sub">Correct words / minute</div>
        </div>
        <div class="kpi kpi-warn">
            <div class="kpi-label">Needs review</div>
            <div class="kpi-value">${needsRev}</div>
            <div class="kpi-sub">Low-confidence attempts</div>
        </div>`;
}

function labelForAcc(a) {
    if (a >= 85) return 'Excellent';
    if (a >= 70) return 'Good progress';
    if (a >= 50) return 'Developing';
    if (a > 0) return 'Needs support';
    return 'No data';
}

function renderBandChart(list) {
    const bands = [
        { label: '80–100%', min: 80, max: 101, cls: 'ok' },
        { label: '60–79%', min: 60, max: 80, cls: '' },
        { label: '40–59%', min: 40, max: 60, cls: 'warn' },
        { label: '0–39%', min: 0, max: 40, cls: 'bad' }
    ];
    const counts = bands.map(b => ({
        ...b,
        count: list.filter(a => a.accuracy >= b.min && a.accuracy < b.max).length
    }));
    const max = Math.max(1, ...counts.map(c => c.count));

    $('dashBands').innerHTML = counts.map(c => `
        <div class="band-row">
            <div class="band-label">${c.label}</div>
            <div class="band-track">
                <div class="band-fill ${c.cls}" style="width:${(c.count / max) * 100}%"></div>
            </div>
            <div class="band-value">${c.count}</div>
        </div>`).join('');
}

function renderClassCompare(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const buckets = {};
    list.forEach(a => {
        const s = byId[a.studentId];
        if (!s) return;
        const key = s.class;
        (buckets[key] = buckets[key] || []).push(a.accuracy);
    });

    const rows = Object.entries(buckets).map(([cls, arr]) => ({
        label: `Class ${cls}`,
        avg: round1(arr.reduce((s, x) => s + x, 0) / arr.length)
    })).sort((a, b) => b.avg - a.avg);

    if (!rows.length) {
        $('dashClasses').innerHTML = '<div class="dash-empty">No data yet for this filter.</div>';
        return;
    }

    $('dashClasses').innerHTML = `<div class="class-compare">${rows.map(r => {
        const cls = r.avg >= 80 ? 'ok' : r.avg >= 60 ? '' : r.avg >= 40 ? 'warn' : 'bad';
        return `<div class="class-compare-row">
            <div style="font-weight:600">${escapeHtml(r.label)}</div>
            <div class="band-track"><div class="band-fill ${cls}" style="width:${r.avg}%"></div></div>
            <div class="band-value">${r.avg}%</div>
        </div>`;
    }).join('')}</div>`;
}

function renderTrendChart(list) {
    const byDay = {};
    list.forEach(a => {
        const key = a.dateISO.slice(0, 10);
        (byDay[key] = byDay[key] || []).push(a.accuracy);
    });

    const days = Object.entries(byDay)
        .map(([date, arr]) => ({
            date,
            avg: round1(arr.reduce((s, x) => s + x, 0) / arr.length)
        }))
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(-14);

    if (!days.length) {
        $('dashTrend').innerHTML = '<div class="dash-empty">No attempts yet.</div>';
        return;
    }

    $('dashTrend').innerHTML = `<div class="trend-chart">${days.map(d => `
        <div class="trend-bar-wrap">
            <div class="trend-bar" style="height:${Math.max(4, d.avg)}%" aria-label="Accuracy ${d.avg}%"><span>${d.avg}%</span></div>
            <div class="trend-label">${formatShortDate(d.date)}</div>
        </div>`).join('')}</div>`;
}

function formatShortDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function renderAttention(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const latest = {};
    list.forEach(a => {
        if (!latest[a.studentId] || new Date(a.dateISO) > new Date(latest[a.studentId].dateISO)) {
            latest[a.studentId] = a;
        }
    });

    const flagged = Object.values(latest)
        .filter(a => a.accuracy < 60 || a.needsReview)
        .sort((a, b) => a.accuracy - b.accuracy)
        .slice(0, 8);

    if (!flagged.length) {
        $('dashAttention').innerHTML = '<div class="dash-empty">No students need attention right now.</div>';
        return;
    }

    $('dashAttention').innerHTML = `<div class="attention-list">${flagged.map(a => {
        const s = byId[a.studentId] || {};
        const pillCls = a.accuracy < 40 ? 'bad' : '';
        return `<div class="attention-item">
            <div style="flex:1">
                <div class="who">${escapeHtml(s.name || 'Unknown')}</div>
                <div class="meta">Class ${escapeHtml(s.class || '')}-${escapeHtml(s.section || '')} · Roll ${escapeHtml(s.roll || '—')}</div>
            </div>
            <span class="attention-pill ${pillCls}">${a.accuracy}%</span>
        </div>`;
    }).join('')}</div>`;
}

function renderRecent(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);
    const passById = {};
    state.passages.forEach(p => passById[p.passageId] = p);

    const recent = [...list]
        .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))
        .slice(0, 12);

    if (!recent.length) {
        $('dashRecent').innerHTML = '<div class="dash-empty">No assessments yet — run a reading session from the Students tab.</div>';
        return;
    }

    $('dashRecent').innerHTML = `<div class="recent-list">${recent.map(a => {
        const s = byId[a.studentId] || {};
        const p = passById[a.passageId];
        const pillCls = a.accuracy >= 80 ? 'ok' : a.accuracy >= 60 ? 'warn' : 'bad';
        const langChip = a.language === 'en-US'
            ? '<span class="chip" style="background:#e0f2fe;color:#0369a1;padding:2px 6px;font-size:10px;margin-right:4px">EN</span>'
            : '<span class="chip" style="background:#fef3c7;color:#92400e;padding:2px 6px;font-size:10px;margin-right:4px">TE</span>';
        return `<div class="recent-item">
            <div>
                <div class="who">${langChip}${escapeHtml(s.name || 'Unknown')}</div>
                <div class="when">${escapeHtml(p ? p.title : '')} · ${new Date(a.dateISO).toLocaleString()}</div>
            </div>
            <div class="when">${a.correctWordsPerMinute} cwpm</div>
            <div class="acc-pill ${pillCls}">${a.accuracy}%</div>
        </div>`;
    }).join('')}</div>`;
}

function renderOverviewTable(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const perStudent = {};
    list.forEach(a => (perStudent[a.studentId] = perStudent[a.studentId] || []).push(a));

    const rows = Object.entries(perStudent).map(([id, arr]) => {
        const sorted = [...arr].sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO));
        const latest = sorted[sorted.length - 1];
        const first = sorted[0];
        const best = Math.max(...arr.map(a => a.accuracy));
        return {
            student: byId[id] || {},
            attempts: arr.length,
            latestAcc: latest.accuracy,
            bestAcc: best,
            cwpm: latest.correctWordsPerMinute,
            trend: round1(latest.accuracy - first.accuracy),
            lastDate: new Date(latest.dateISO)
        };
    });

    const { key, dir } = dashState.sort;
    const m = dir === 'asc' ? 1 : -1;
    rows.sort((a, b) => {
        switch (key) {
            case 'roll': return m * ((parseInt(a.student.roll, 10) || 0) - (parseInt(b.student.roll, 10) || 0));
            case 'name': return m * (a.student.name || '').localeCompare(b.student.name || '');
            case 'class': return m * `${a.student.class}-${a.student.section}`.localeCompare(`${b.student.class}-${b.student.section}`);
            case 'attempts': return m * (a.attempts - b.attempts);
            case 'latestAcc': return m * (a.latestAcc - b.latestAcc);
            case 'bestAcc': return m * (a.bestAcc - b.bestAcc);
            case 'cwpm': return m * (a.cwpm - b.cwpm);
            case 'trend': return m * (a.trend - b.trend);
            case 'lastDate': return m * (a.lastDate - b.lastDate);
            default: return 0;
        }
    });

    if (!rows.length) {
        $('dashOverview').innerHTML = '<div class="dash-empty">No students with assessments in this filter.</div>';
        return;
    }

    const th = (k, label) => {
        const active = key === k;
        return `<th data-sort="${k}" class="${active ? 'sorted' : ''}">
            ${label}<span class="sort-icon">${active ? (dir === 'asc' ? '▲' : '▼') : '⇅'}</span>
        </th>`;
    };

    $('dashOverview').innerHTML = `
        <div style="overflow:auto;max-height:520px">
            <table class="dash-table">
                <thead>
                    <tr>
                        ${th('roll', 'Roll')}
                        ${th('name', 'Name')}
                        ${th('class', 'Class')}
                        ${th('attempts', 'Attempts')}
                        ${th('latestAcc', 'Latest %')}
                        ${th('bestAcc', 'Best %')}
                        ${th('cwpm', 'CWPM')}
                        ${th('trend', 'Δ')}
                        ${th('lastDate', 'Last attempt')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(r => {
        const pillCls = r.latestAcc >= 80 ? 'ok' : r.latestAcc >= 60 ? 'warn' : 'bad';
        return `<tr>
                            <td>${escapeHtml(r.student.roll || '—')}</td>
                            <td>${escapeHtml(r.student.name || 'Unknown')}</td>
                            <td>${escapeHtml(r.student.class || '')}-${escapeHtml(r.student.section || '')}</td>
                            <td class="num">${r.attempts}</td>
                            <td><span class="acc-pill ${pillCls}">${r.latestAcc}%</span></td>
                            <td class="num">${r.bestAcc}%</td>
                            <td class="num">${r.cwpm}</td>
                            <td class="num" style="color:${r.trend >= 0 ? 'var(--ok)' : 'var(--bad)'}">${r.trend >= 0 ? '+' : ''}${r.trend}%</td>
                            <td>${r.lastDate.toLocaleDateString()}</td>
                        </tr>`;
    }).join('')}
                </tbody>
            </table>
        </div>`;

    $('dashOverview').querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const k = th.dataset.sort;
            dashState.sort = (dashState.sort.key === k)
                ? { key: k, dir: dashState.sort.dir === 'asc' ? 'desc' : 'asc' }
                : { key: k, dir: 'asc' };
            renderDashboard();
        });
    });
}

function exportDashboardCsv() {
    const list = getFilteredAssessments();
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const header = ['Student ID', 'Roll', 'Name', 'Class', 'Section', 'Language',
        'Date', 'Accuracy %', 'CWPM', 'Mistakes', 'Needs Review', 'Transcript'];
    const rows = [header];

    list.sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO)).forEach(a => {
        const s = byId[a.studentId] || {};
        rows.push([
            a.studentId, s.roll || '', s.name || '', s.class || '', s.section || '',
            a.language === 'en-US' ? 'English' : 'Telugu',
            a.dateISO, a.accuracy, a.correctWordsPerMinute, a.mistakes,
            a.needsReview ? 'yes' : 'no',
            (a.transcript || '').replace(/"/g, '""')
        ]);
    });

    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `dashboard-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
}

init();

/* =========================================================
   13. ROUTING LOGIC (URL Navigation)
   ========================================================= */
function currentPath() {
    return location.hash.replace(/^#/, '') || '/';
}

function navigate(path) {
    if (currentPath() !== path) location.hash = path;
    handleRoute();
}

function replace(path) {
    if (currentPath() !== path) location.hash = path;
    handleRoute();
}

function setActiveTab(name) {
    document.querySelectorAll('.tab').forEach(t => {
        const on = t.dataset.tab === name;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('.tabpanel').forEach(p => {
        p.hidden = p.id !== 'tab-' + name;
    });
    if (name === 'dashboard') renderDashboard();
}

function handleRoute() {
    const path = currentPath();
    const loggedIn = !!sessionStorage.getItem(KEYS.session);

    if (path === '/app' || path === '/dashboard' || path === '/students') {
        if (!loggedIn) return replace('/login');
        showApp();
        if (path !== '/app') setActiveTab(path.slice(1));
    } else if (path === '/login') {
        if (loggedIn) return replace('/app');
        app.hidden = true; loginScreen.hidden = false; $('username').focus();
    } else {
        replace(loggedIn ? '/app' : '/login');
    }
}

window.addEventListener('hashchange', handleRoute);

// ONLY ONE handler for tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => navigate('/' + tab.dataset.tab));
});

handleRoute();

/* =========================================================
   13. ROUTING LOGIC (URL Navigation)
   ========================================================= */
function currentPath() {
    return location.hash.replace(/^#/, '') || '/';
}

function navigate(path) {
    if (currentPath() !== path) location.hash = path;
    handleRoute();
}

function replace(path) {
    if (currentPath() !== path) location.hash = path;
    handleRoute();
}

function setActiveTab(name) {
    document.querySelectorAll('.tab').forEach(t => {
        const on = t.dataset.tab === name;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('.tabpanel').forEach(p => {
        p.hidden = p.id !== 'tab-' + name;
    });
    if (name === 'dashboard') renderDashboard();
}

function handleRoute() {
    const path = currentPath();
    const loggedIn = !!sessionStorage.getItem(KEYS.session);

    if (path === '/app' || path === '/dashboard' || path === '/students') {
        if (!loggedIn) return replace('/login');
        showApp();
        if (path !== '/app') setActiveTab(path.slice(1));
    } else if (path === '/login') {
        if (loggedIn) return replace('/app');
        app.hidden = true; loginScreen.hidden = false; $('username').focus();
    } else {
        replace(loggedIn ? '/app' : '/login');
    }
}

window.addEventListener('hashchange', handleRoute);

// ONLY ONE handler for tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => navigate('/' + tab.dataset.tab));
});

// Fix CSV Header (from duplicate block)
function fixCsvHeader() {
    const originalExport = exportDashboardCsv.toString();
    if (originalExport.includes("['Student ID', 'Roll', 'Name', 'Class', 'Section',\n        'Date'")) {
        // This is a fallback; ideally you edit the original function directly.
    }
}

handleRoute();

function renderDashboard() {
    populateDashFilters();
    const list = getFilteredAssessments();

    renderKpis(list);
    renderBandChart(list);
    renderClassCompare(list);
    renderTrendChart(list);
    renderAttention(list);
    renderRecent(list);
    renderOverviewTable(list);

    renderDashStudentPicker();
    renderDashStudentDetail();
}

function studentsInDashFilter() {
    const cls = $('dashClass').value;
    const sec = $('dashSection').value;
    return state.students
        .filter(s => (cls === 'ALL' || s.class === cls) && (sec === 'ALL' || s.section === sec))
        .sort((a, b) => {
            if (a.class !== b.class) return a.class.localeCompare(b.class);
            if (a.section !== b.section) return a.section.localeCompare(b.section);
            return (parseInt(a.roll, 10) || 0) - (parseInt(b.roll, 10) || 0);
        });
}

function renderDashStudentPicker() {
    const students = studentsInDashFilter();
    const counts = {};
    getFilteredAssessments().forEach(a => {
        counts[a.studentId] = (counts[a.studentId] || 0) + 1;
    });

    if (!students.length) {
        $('dashStudentPicker').innerHTML = '<div class="dash-empty">No students match this class / section.</div>';
        return;
    }

    $('dashStudentPicker').innerHTML = students.map(s => {
        const n = counts[s.studentId] || 0;
        const active = s.studentId === dashState.selectedStudentId ? ' active' : '';
        return `<button type="button" class="dash-student-chip${active}" data-student-id="${escapeHtml(s.studentId)}">
            <span class="chip-roll">${escapeHtml(s.roll || '—')}</span>
            <span class="chip-name">${escapeHtml(s.name)}</span>
            <span class="chip-meta">${n} attempt${n === 1 ? '' : 's'}</span>
        </button>`;
    }).join('');

    $('dashStudentPicker').querySelectorAll('.dash-student-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            dashState.selectedStudentId = btn.dataset.studentId;
            renderDashboard();
            const el = $('dashStudentDetail');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function renderDashStudentDetail() {
    const detailEl = $('dashStudentDetail');
    const aggEl = $('dashAggregateView');
    const closeBtn = $('dashStudentPickerClose');
    if (!detailEl || !aggEl || !closeBtn) return;

    if (!dashState.selectedStudentId) {
        detailEl.hidden = true;
        aggEl.hidden = false;
        closeBtn.hidden = true;
        return;
    }

    const student = getStudent(dashState.selectedStudentId);
    if (!student) {
        detailEl.hidden = true;
        aggEl.hidden = false;
        closeBtn.hidden = true;
        return;
    }

    detailEl.hidden = false;
    aggEl.hidden = true;
    closeBtn.hidden = false;

    const all = getFilteredAssessments()
        .filter(a => a.studentId === student.studentId)
        .sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO));

    const header = `<div class="dash-card-head">
        <h3>${escapeHtml(student.name)} · Progress</h3>
        <span class="muted small">Class ${escapeHtml(student.class)}-${escapeHtml(student.section)} · Roll ${escapeHtml(student.roll || '—')}</span>
    </div>`;

    if (!all.length) {
        dashState.selectedStudentId = null;
        detailEl.hidden = true;
        aggEl.hidden = false;
        closeBtn.hidden = true;
        return;
    }

    const attempts = all.length;
    const first = all[0];
    const latest = all[all.length - 1];
    const best = Math.max(...all.map(a => a.accuracy));
    const trend = round1(latest.accuracy - first.accuracy);
    const avgAcc = round1(all.reduce((s, a) => s + a.accuracy, 0) / attempts);
    const avgCwpm = round1(all.reduce((s, a) => s + a.correctWordsPerMinute, 0) / attempts);

    const missCount = {};
    all.forEach(a => (a.missedWords || []).forEach(w => missCount[w] = (missCount[w] || 0) + 1));
    const frequent = Object.entries(missCount).sort((a, b) => b[1] - a[1]).slice(0, 10);

    const passById = {};
    state.passages.forEach(p => passById[p.passageId] = p);

    detailEl.innerHTML = `<div class="card" style="margin-bottom:16px">
        ${header}

        <div class="kpi-row">
            <div class="kpi">
                <div class="kpi-label">Attempts</div>
                <div class="kpi-value">${attempts}</div>
                <div class="kpi-sub">in time range</div>
            </div>
            <div class="kpi kpi-ok">
                <div class="kpi-label">Best accuracy</div>
                <div class="kpi-value">${best}<small>%</small></div>
                <div class="kpi-sub">${labelForAcc(best)}</div>
            </div>
            <div class="kpi">
                <div class="kpi-label">Latest accuracy</div>
                <div class="kpi-value">${latest.accuracy}<small>%</small></div>
                <div class="kpi-sub">${new Date(latest.dateISO).toLocaleDateString()}</div>
            </div>
            <div class="kpi">
                <div class="kpi-label">Average accuracy</div>
                <div class="kpi-value">${avgAcc}<small>%</small></div>
                <div class="kpi-sub">across attempts</div>
            </div>
            <div class="kpi">
                <div class="kpi-label">Average CWPM</div>
                <div class="kpi-value">${avgCwpm}<small>cwpm</small></div>
                <div class="kpi-sub">correct words / min</div>
            </div>
            <div class="kpi kpi-${trend >= 0 ? 'ok' : 'bad'}">
                <div class="kpi-label">Change</div>
                <div class="kpi-value">${trend >= 0 ? '+' : ''}${trend}<small>%</small></div>
                <div class="kpi-sub">first → latest</div>
            </div>
        </div>

        <h3 style="margin-top:18px">Accuracy trend</h3>
        <div class="trend-chart">${all.map(a => `
            <div class="trend-bar-wrap">
                <div class="trend-bar" style="height:${Math.max(4, a.accuracy)}%" aria-label="Accuracy ${Math.round(a.accuracy)}%"><span>${Math.round(a.accuracy)}%</span></div>
                <div class="trend-label">${formatShortDate(a.dateISO.slice(0, 10))}</div>
            </div>`).join('')}</div>

        <h3 style="margin-top:22px">Attempt history</h3>
        <div style="overflow:auto;max-height:340px">
            <table class="dash-table">
                <thead>
                    <tr>
                        <th>#</th><th>Date</th><th>Passage</th>
                        <th>Accuracy</th><th>CWPM</th><th>Mistakes</th><th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    ${all.map((a, i) => {
        const p = passById[a.passageId];
        const pillCls = a.accuracy >= 80 ? 'ok' : a.accuracy >= 60 ? 'warn' : 'bad';
        return `<tr>
                            <td class="num">${i + 1}</td>
                            <td>${new Date(a.dateISO).toLocaleString()}</td>
                            <td>${escapeHtml(p ? p.title : a.passageId)}</td>
                            <td><span class="acc-pill ${pillCls}">${a.accuracy}%</span></td>
                            <td class="num">${a.correctWordsPerMinute}</td>
                            <td class="num">${a.mistakes}</td>
                            <td>${a.needsReview ? 'yes' : '—'}</td>
                        </tr>`;
    }).join('')}
                </tbody>
            </table>
        </div>

        <h3 style="margin-top:22px">Frequently missed words</h3>
        ${frequent.length
            ? frequent.map(([w, n]) => `<span class="chip bad">${escapeHtml(w)} ×${n}</span>`).join('')
            : '<span class="muted small">No repeated missed words — good progress.</span>'}

        <h3 style="margin-top:22px">Latest suggested practice</h3>
        <ul class="small" style="margin:0;padding-left:20px">
            ${(latest.suggestions || []).map(s => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>
    </div>`;
}

function renderKpis(list) {
    const unique = new Set(list.map(a => a.studentId)).size;
    const attempts = list.length;
    const avgAcc = attempts ? round1(list.reduce((s, a) => s + a.accuracy, 0) / attempts) : 0;
    const avgCwpm = attempts ? round1(list.reduce((s, a) => s + a.correctWordsPerMinute, 0) / attempts) : 0;
    const needsRev = list.filter(a => a.needsReview).length;

    const accCls = avgAcc >= 80 ? 'ok' : avgAcc >= 60 ? '' : avgAcc >= 40 ? 'warn' : 'bad';

    $('dashKpis').innerHTML = `
        <div class="kpi">
            <div class="kpi-label">Students assessed</div>
            <div class="kpi-value">${unique}</div>
            <div class="kpi-sub">${attempts} attempt${attempts === 1 ? '' : 's'} in filter</div>
        </div>
        <div class="kpi kpi-${accCls}">
            <div class="kpi-label">Average accuracy</div>
            <div class="kpi-value">${avgAcc}<small>%</small></div>
            <div class="kpi-sub">${labelForAcc(avgAcc)}</div>
        </div>
        <div class="kpi">
            <div class="kpi-label">Average speed</div>
            <div class="kpi-value">${avgCwpm}<small>cwpm</small></div>
            <div class="kpi-sub">Correct words / minute</div>
        </div>
        <div class="kpi kpi-warn">
            <div class="kpi-label">Needs review</div>
            <div class="kpi-value">${needsRev}</div>
            <div class="kpi-sub">Low-confidence attempts</div>
        </div>`;
}

function labelForAcc(a) {
    if (a >= 85) return 'Excellent';
    if (a >= 70) return 'Good progress';
    if (a >= 50) return 'Developing';
    if (a > 0) return 'Needs support';
    return 'No data';
}

function renderBandChart(list) {
    const bands = [
        { label: '80–100%', min: 80, max: 101, cls: 'ok' },
        { label: '60–79%', min: 60, max: 80, cls: '' },
        { label: '40–59%', min: 40, max: 60, cls: 'warn' },
        { label: '0–39%', min: 0, max: 40, cls: 'bad' }
    ];
    const counts = bands.map(b => ({
        ...b,
        count: list.filter(a => a.accuracy >= b.min && a.accuracy < b.max).length
    }));
    const max = Math.max(1, ...counts.map(c => c.count));

    $('dashBands').innerHTML = counts.map(c => `
        <div class="band-row">
            <div class="band-label">${c.label}</div>
            <div class="band-track">
                <div class="band-fill ${c.cls}" style="width:${(c.count / max) * 100}%"></div>
            </div>
            <div class="band-value">${c.count}</div>
        </div>`).join('');
}

function renderClassCompare(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const buckets = {};
    list.forEach(a => {
        const s = byId[a.studentId];
        if (!s) return;
        const key = s.class;
        (buckets[key] = buckets[key] || []).push(a.accuracy);
    });

    const rows = Object.entries(buckets).map(([cls, arr]) => ({
        label: `Class ${cls}`,
        avg: round1(arr.reduce((s, x) => s + x, 0) / arr.length)
    })).sort((a, b) => b.avg - a.avg);

    if (!rows.length) {
        $('dashClasses').innerHTML = '<div class="dash-empty">No data yet for this filter.</div>';
        return;
    }

    $('dashClasses').innerHTML = `<div class="class-compare">${rows.map(r => {
        const cls = r.avg >= 80 ? 'ok' : r.avg >= 60 ? '' : r.avg >= 40 ? 'warn' : 'bad';
        return `<div class="class-compare-row">
            <div style="font-weight:600">${escapeHtml(r.label)}</div>
            <div class="band-track"><div class="band-fill ${cls}" style="width:${r.avg}%"></div></div>
            <div class="band-value">${r.avg}%</div>
        </div>`;
    }).join('')}</div>`;
}

function renderTrendChart(list) {
    const byDay = {};
    list.forEach(a => {
        const key = a.dateISO.slice(0, 10);
        (byDay[key] = byDay[key] || []).push(a.accuracy);
    });

    const days = Object.entries(byDay)
        .map(([date, arr]) => ({
            date,
            avg: round1(arr.reduce((s, x) => s + x, 0) / arr.length)
        }))
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(-14);

    if (!days.length) {
        $('dashTrend').innerHTML = '<div class="dash-empty">No attempts yet.</div>';
        return;
    }

    $('dashTrend').innerHTML = `<div class="trend-chart">${days.map(d => `
        <div class="trend-bar-wrap">
            <div class="trend-bar" style="height:${Math.max(4, d.avg)}%" aria-label="Accuracy ${d.avg}%"><span>${d.avg}%</span></div>
            <div class="trend-label">${formatShortDate(d.date)}</div>
        </div>`).join('')}</div>`;
}

function formatShortDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function renderAttention(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const latest = {};
    list.forEach(a => {
        if (!latest[a.studentId] || new Date(a.dateISO) > new Date(latest[a.studentId].dateISO)) {
            latest[a.studentId] = a;
        }
    });

    const flagged = Object.values(latest)
        .filter(a => a.accuracy < 60 || a.needsReview)
        .sort((a, b) => a.accuracy - b.accuracy)
        .slice(0, 8);

    if (!flagged.length) {
        $('dashAttention').innerHTML = '<div class="dash-empty">No students need attention right now.</div>';
        return;
    }

    $('dashAttention').innerHTML = `<div class="attention-list">${flagged.map(a => {
        const s = byId[a.studentId] || {};
        const pillCls = a.accuracy < 40 ? 'bad' : '';
        return `<div class="attention-item">
            <div style="flex:1">
                <div class="who">${escapeHtml(s.name || 'Unknown')}</div>
                <div class="meta">Class ${escapeHtml(s.class || '')}-${escapeHtml(s.section || '')} · Roll ${escapeHtml(s.roll || '—')}</div>
            </div>
            <span class="attention-pill ${pillCls}">${a.accuracy}%</span>
        </div>`;
    }).join('')}</div>`;
}

function renderRecent(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);
    const passById = {};
    state.passages.forEach(p => passById[p.passageId] = p);

    const recent = [...list]
        .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))
        .slice(0, 12);

    if (!recent.length) {
        $('dashRecent').innerHTML = '<div class="dash-empty">No assessments yet — run a reading session from the Students tab.</div>';
        return;
    }

    $('dashRecent').innerHTML = `<div class="recent-list">${recent.map(a => {
        const s = byId[a.studentId] || {};
        const p = passById[a.passageId];
        const pillCls = a.accuracy >= 80 ? 'ok' : a.accuracy >= 60 ? 'warn' : 'bad';
        return `<div class="recent-item">
            <div>
                <div class="who">${escapeHtml(s.name || 'Unknown')}</div>
                <div class="when">${escapeHtml(p ? p.title : '')} · ${new Date(a.dateISO).toLocaleString()}</div>
            </div>
            <div class="when">${a.correctWordsPerMinute} cwpm</div>
            <div class="acc-pill ${pillCls}">${a.accuracy}%</div>
        </div>`;
    }).join('')}</div>`;
}

function renderOverviewTable(list) {
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const perStudent = {};
    list.forEach(a => (perStudent[a.studentId] = perStudent[a.studentId] || []).push(a));

    const rows = Object.entries(perStudent).map(([id, arr]) => {
        const sorted = [...arr].sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO));
        const latest = sorted[sorted.length - 1];
        const first = sorted[0];
        const best = Math.max(...arr.map(a => a.accuracy));
        return {
            student: byId[id] || {},
            attempts: arr.length,
            latestAcc: latest.accuracy,
            bestAcc: best,
            cwpm: latest.correctWordsPerMinute,
            trend: round1(latest.accuracy - first.accuracy),
            lastDate: new Date(latest.dateISO)
        };
    });

    const { key, dir } = dashState.sort;
    const m = dir === 'asc' ? 1 : -1;
    rows.sort((a, b) => {
        switch (key) {
            case 'roll': return m * ((parseInt(a.student.roll, 10) || 0) - (parseInt(b.student.roll, 10) || 0));
            case 'name': return m * (a.student.name || '').localeCompare(b.student.name || '');
            case 'class': return m * `${a.student.class}-${a.student.section}`.localeCompare(`${b.student.class}-${b.student.section}`);
            case 'attempts': return m * (a.attempts - b.attempts);
            case 'latestAcc': return m * (a.latestAcc - b.latestAcc);
            case 'bestAcc': return m * (a.bestAcc - b.bestAcc);
            case 'cwpm': return m * (a.cwpm - b.cwpm);
            case 'trend': return m * (a.trend - b.trend);
            case 'lastDate': return m * (a.lastDate - b.lastDate);
            default: return 0;
        }
    });

    if (!rows.length) {
        $('dashOverview').innerHTML = '<div class="dash-empty">No students with assessments in this filter.</div>';
        return;
    }

    const th = (k, label) => {
        const active = key === k;
        return `<th data-sort="${k}" class="${active ? 'sorted' : ''}">
            ${label}<span class="sort-icon">${active ? (dir === 'asc' ? '▲' : '▼') : '⇅'}</span>
        </th>`;
    };

    $('dashOverview').innerHTML = `
        <div style="overflow:auto;max-height:520px">
            <table class="dash-table">
                <thead>
                    <tr>
                        ${th('roll', 'Roll')}
                        ${th('name', 'Name')}
                        ${th('class', 'Class')}
                        ${th('attempts', 'Attempts')}
                        ${th('latestAcc', 'Latest %')}
                        ${th('bestAcc', 'Best %')}
                        ${th('cwpm', 'CWPM')}
                        ${th('trend', 'Δ')}
                        ${th('lastDate', 'Last attempt')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(r => {
        const pillCls = r.latestAcc >= 80 ? 'ok' : r.latestAcc >= 60 ? 'warn' : 'bad';
        return `<tr>
                            <td>${escapeHtml(r.student.roll || '—')}</td>
                            <td>${escapeHtml(r.student.name || 'Unknown')}</td>
                            <td>${escapeHtml(r.student.class || '')}-${escapeHtml(r.student.section || '')}</td>
                            <td class="num">${r.attempts}</td>
                            <td><span class="acc-pill ${pillCls}">${r.latestAcc}%</span></td>
                            <td class="num">${r.bestAcc}%</td>
                            <td class="num">${r.cwpm}</td>
                            <td class="num" style="color:${r.trend >= 0 ? 'var(--ok)' : 'var(--bad)'}">${r.trend >= 0 ? '+' : ''}${r.trend}%</td>
                            <td>${r.lastDate.toLocaleDateString()}</td>
                        </tr>`;
    }).join('')}
                </tbody>
            </table>
        </div>`;

    $('dashOverview').querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
            const k = th.dataset.sort;
            dashState.sort = (dashState.sort.key === k)
                ? { key: k, dir: dashState.sort.dir === 'asc' ? 'desc' : 'asc' }
                : { key: k, dir: 'asc' };
            renderDashboard();
        });
    });
}

function exportDashboardCsv() {
    const list = getFilteredAssessments();
    const byId = {};
    state.students.forEach(s => byId[s.studentId] = s);

    const header = ['Student ID', 'Roll', 'Name', 'Class', 'Section', 'Language',
        'Date', 'Accuracy %', 'CWPM', 'Mistakes', 'Needs Review', 'Transcript'];
    const rows = [header];

    list.sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO)).forEach(a => {
        const s = byId[a.studentId] || {};
        rows.push([
            a.studentId, s.roll || '', s.name || '', s.class || '', s.section || '',
            a.language === 'en-US' ? 'English' : 'Telugu',
            a.dateISO, a.accuracy, a.correctWordsPerMinute, a.mistakes,
            a.needsReview ? 'yes' : 'no',
            (a.transcript || '').replace(/"/g, '""')
        ]);
    });

    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `dashboard-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
}