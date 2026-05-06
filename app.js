// =============================================
// Recruiter Boolean Search Generator
// =============================================

// === Keyword Dictionaries for Extraction ===
const SKILL_KEYWORDS = [
    // Programming Languages
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'C#', 'C\\+\\+', 'Go', 'Golang', 'Rust',
    'Ruby', 'PHP', 'Swift', 'Scala', 'R', 'Dart', 'Perl', 'Haskell', 'Elixir', 'Clojure',
    'Objective-C', 'ABAP', 'COBOL', 'Fortran', 'Lua', 'Groovy', 'Shell', 'Bash', 'PowerShell',
    // Frontend
    'React', 'React.js', 'ReactJS', 'Angular', 'Vue', 'Vue.js', 'VueJS', 'Svelte', 'Next.js',
    'NextJS', 'Nuxt', 'Nuxt.js', 'Gatsby', 'Redux', 'MobX', 'jQuery', 'Bootstrap', 'Tailwind',
    'Tailwind CSS', 'Material UI', 'Sass', 'SCSS', 'LESS', 'Webpack', 'Vite', 'HTML', 'CSS',
    'HTML5', 'CSS3', 'Ember', 'Backbone',
    // Backend
    'Node.js', 'NodeJS', 'Express', 'Express.js', 'NestJS', 'Django', 'Flask', 'FastAPI',
    'Spring', 'Spring Boot', 'Hibernate', 'ASP.NET', '.NET', '.NET Core', 'Rails', 'Ruby on Rails',
    'Laravel', 'Symfony', 'Gin', 'Fiber', 'GraphQL', 'REST', 'RESTful', 'gRPC', 'Microservices',
    'API', 'WebSocket',
    // Databases
    'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Cassandra',
    'Oracle', 'MS SQL', 'SQLite', 'MariaDB', 'Neo4j', 'CouchDB', 'Firebase', 'Supabase',
    // Cloud & DevOps
    'AWS', 'Amazon Web Services', 'Azure', 'GCP', 'Google Cloud', 'Docker', 'Kubernetes', 'K8s',
    'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'Travis CI',
    'CI/CD', 'DevOps', 'Helm', 'Prometheus', 'Grafana', 'ELK', 'Kibana', 'Logstash',
    'CloudFormation', 'Pulumi', 'Vagrant', 'Nginx', 'Apache', 'Linux', 'Unix',
    // Data & ML
    'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Keras', 'scikit-learn',
    'Pandas', 'NumPy', 'NLP', 'Computer Vision', 'Data Science', 'Big Data', 'Hadoop',
    'Spark', 'Apache Spark', 'Kafka', 'Apache Kafka', 'Airflow', 'ETL', 'Data Engineering',
    'Data Warehouse', 'Snowflake', 'Databricks', 'Power BI', 'Tableau', 'Looker',
    // Mobile
    'React Native', 'Flutter', 'iOS', 'Android', 'SwiftUI', 'Jetpack Compose', 'Xamarin',
    'Ionic', 'Cordova', 'Mobile Development',
    // Design & PM Tools
    'Figma', 'Sketch', 'Adobe XD', 'InVision', 'Zeplin', 'Photoshop', 'Illustrator',
    'After Effects', 'Premiere', 'Canva',
    // Project Management & Methods
    'Agile', 'Scrum', 'Kanban', 'SAFe', 'Jira', 'Confluence', 'Asana', 'Trello',
    'Monday.com', 'Notion', 'OKR', 'Lean', 'Six Sigma', 'PRINCE2', 'PMP', 'ITIL',
    // Testing
    'Jest', 'Mocha', 'Cypress', 'Selenium', 'Playwright', 'JUnit', 'TestNG', 'Pytest',
    'TDD', 'BDD', 'Unit Testing', 'E2E Testing', 'Integration Testing', 'QA',
    // CRM & Business
    'Salesforce', 'HubSpot', 'SAP', 'ERP', 'CRM', 'SaaS', 'B2B', 'B2C',
    // Security
    'Cybersecurity', 'Penetration Testing', 'OWASP', 'OAuth', 'JWT', 'SSL', 'TLS',
    'Encryption', 'SIEM', 'SOC', 'ISO 27001',
    // Other
    'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SVN', 'Blockchain', 'Solidity', 'Web3',
    'AR', 'VR', 'IoT', 'Embedded', 'RTOS', 'ROS',
    'SEO', 'SEA', 'SEM', 'Google Analytics', 'Google Ads', 'Content Marketing', 'Social Media',
    'Employer Branding', 'Talent Acquisition', 'Recruiting', 'Arbeitsrecht', 'Personalmanagement',
    'Stakeholder Management', 'Verhandlung', 'Lead Generation', 'Account Management',
    'User Research', 'Prototyping', 'Design System', 'Wireframing', 'Usability Testing',
    'Accessibility', 'Responsive Design', 'Design Thinking',
    'Workday', 'SAP HR', 'SuccessFactors', 'BambooHR', 'Personio',
];

const TITLE_PATTERNS = [
    // Tech
    'Software Engineer', 'Software Developer', 'Software Entwickler', 'Softwareentwickler',
    'Senior Software Engineer', 'Senior Developer', 'Lead Developer', 'Staff Engineer',
    'Principal Engineer', 'Full Stack Developer', 'Fullstack Developer', 'Full-Stack Developer',
    'Frontend Developer', 'Frontend Engineer', 'Front-End Developer', 'Front End Developer',
    'Backend Developer', 'Backend Engineer', 'Back-End Developer', 'Back End Developer',
    'Web Developer', 'Web Engineer', 'Webentwickler',
    'DevOps Engineer', 'Site Reliability Engineer', 'SRE', 'Platform Engineer',
    'Cloud Engineer', 'Cloud Architect', 'Solutions Architect', 'System Architect',
    'Data Engineer', 'Data Scientist', 'Data Analyst', 'Machine Learning Engineer',
    'ML Engineer', 'AI Engineer', 'Deep Learning Engineer',
    'Mobile Developer', 'iOS Developer', 'Android Developer', 'React Native Developer',
    'QA Engineer', 'Test Engineer', 'Quality Assurance', 'SDET',
    'Security Engineer', 'Cybersecurity Analyst', 'Penetration Tester',
    'Embedded Engineer', 'Firmware Engineer', 'Hardware Engineer',
    'Tech Lead', 'Engineering Manager', 'VP Engineering', 'CTO',
    // Product & Design
    'Product Manager', 'Product Owner', 'Produktmanager', 'Technical Product Manager',
    'UX Designer', 'UI Designer', 'UX/UI Designer', 'Product Designer', 'Interaction Designer',
    'Visual Designer', 'Graphic Designer', 'Motion Designer', 'UX Researcher',
    // Business
    'Project Manager', 'Projektmanager', 'Projektleiter', 'Program Manager',
    'Business Analyst', 'Business Development Manager', 'Sales Manager', 'Account Executive',
    'Account Manager', 'Key Account Manager', 'Vertriebsleiter', 'Sales Director',
    'Marketing Manager', 'Digital Marketing Manager', 'Online Marketing Manager',
    'Growth Manager', 'Growth Hacker', 'Content Manager', 'Social Media Manager',
    'SEO Manager', 'Performance Marketing Manager', 'Brand Manager',
    'HR Manager', 'HR Business Partner', 'People Manager', 'Personalreferent',
    'Recruiter', 'Talent Acquisition Manager', 'Talent Acquisition Specialist',
    'People Operations', 'Personalleiter', 'Head of People',
    'Consultant', 'Management Consultant', 'IT Consultant', 'Berater',
    'Scrum Master', 'Agile Coach',
];

const LOCATION_PATTERNS = [
    // German cities
    'Berlin', 'München', 'Munich', 'Hamburg', 'Frankfurt', 'Köln', 'Cologne',
    'Düsseldorf', 'Stuttgart', 'Leipzig', 'Dortmund', 'Essen', 'Bremen',
    'Dresden', 'Hannover', 'Nürnberg', 'Nuremberg', 'Duisburg', 'Bochum',
    'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim',
    'Augsburg', 'Wiesbaden', 'Aachen', 'Braunschweig', 'Freiburg', 'Kiel',
    'Lübeck', 'Erfurt', 'Rostock', 'Mainz', 'Saarbrücken', 'Potsdam',
    'Heidelberg', 'Darmstadt', 'Regensburg', 'Ulm', 'Würzburg', 'Ingolstadt',
    'Wolfsburg', 'Heilbronn', 'Kassel', 'Paderborn',
    // Countries / Regions
    'Deutschland', 'Germany', 'Österreich', 'Austria', 'Schweiz', 'Switzerland',
    'DACH', 'Europa', 'Europe', 'Remote', 'Hybrid',
    // Austrian cities
    'Wien', 'Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck',
    // Swiss cities
    'Zürich', 'Zurich', 'Basel', 'Bern', 'Genf', 'Geneva', 'Lausanne',
];

const SENIORITY_KEYWORDS = [
    'Senior', 'Junior', 'Lead', 'Principal', 'Staff', 'Head of', 'Director',
    'VP', 'Vice President', 'C-Level', 'Chief', 'Manager', 'Teamleiter',
    'Teamlead', 'Team Lead', 'Intern', 'Praktikant', 'Werkstudent', 'Working Student',
    'Trainee', 'Volontär', 'Auszubildender', 'Apprentice', 'Midlevel', 'Mid-Level',
    'Entry Level', 'Berufserfahrene', 'Experienced',
];

const EXCLUDE_DEFAULTS = ['Intern', 'Praktikant', 'Werkstudent', 'Trainee'];

const NICE_TO_HAVE_SIGNALS = [
    'nice to have', 'nice-to-have', 'wünschenswert', 'von vorteil',
    'idealerweise', 'optional', 'plus', 'bonus', 'gerne gesehen',
    'nicht zwingend', 'zusätzlich', 'bevorzugt', 'preferred',
    'a plus', 'desired', 'advantageous',
];

// === State ===
const extracted = {
    titles: [],
    mustSkills: [],
    niceSkills: [],
    locations: [],
    experience: [],
    excludes: [],
};

let currentPlatform = 'linkedin';
let currentQuery = '';

// Builder state (Tab 2)
const builderState = {
    platform: 'linkedin',
    titles: [],
    mustSkills: [],
    niceSkills: [],
    locations: [],
    excludes: [],
    companies: [],
    manualOverride: false,
};

// === DOM Ready ===
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initWorkflow();
    initGenerator();
    initBuilder();
    renderHistory();
});

// === Tabs ===
function initTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
        });
    });
}

// =============================================
// TAB 1: Job Description -> Boolean Generator
// =============================================
function initGenerator() {
    const generateBtn = document.getElementById('generateBtn');
    const clearJobBtn = document.getElementById('clearJobBtn');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const openLinkedInBtn = document.getElementById('openLinkedInBtn');
    const addKeywordBtn = document.getElementById('addKeywordBtn');
    const addKeywordInput = document.getElementById('addKeywordInput');

    generateBtn.addEventListener('click', handleGenerate);
    clearJobBtn.addEventListener('click', () => {
        document.getElementById('jobDescription').value = '';
        document.getElementById('extractedSection').style.display = 'none';
        document.getElementById('platformSection').style.display = 'none';
        document.getElementById('searchLinksSection').style.display = 'none';
    });

    regenerateBtn.addEventListener('click', () => {
        buildGeneratorQuery();
    });

    copyBtn.addEventListener('click', () => {
        if (!currentQuery) return;
        navigator.clipboard.writeText(currentQuery).then(() => showToast('copyToast'));
    });

    openLinkedInBtn.addEventListener('click', () => {
        if (!currentQuery) return;
        const url = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(currentQuery)}`;
        window.open(url, '_blank');
    });

    // Platform buttons
    document.querySelectorAll('#platformSection .platform-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#platformSection .platform-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPlatform = btn.dataset.platform;
            buildGeneratorQuery();
        });
    });

    // Add keyword
    addKeywordBtn.addEventListener('click', () => {
        const cat = document.getElementById('addKeywordCategory').value;
        const val = addKeywordInput.value.trim();
        if (!val) return;
        if (!extracted[cat]) extracted[cat] = [];
        if (!extracted[cat].includes(val)) {
            extracted[cat].push(val);
            renderExtracted();
            buildGeneratorQuery();
        }
        addKeywordInput.value = '';
    });

    addKeywordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addKeywordBtn.click();
        }
    });
}

function handleGenerate() {
    const text = document.getElementById('jobDescription').value.trim();
    if (!text) return;

    // Extract keywords
    extractKeywords(text);

    // Show sections
    document.getElementById('extractedSection').style.display = 'block';
    document.getElementById('platformSection').style.display = 'block';
    document.getElementById('searchLinksSection').style.display = 'block';

    // Render
    renderExtracted();
    buildGeneratorQuery();

    // Scroll to results
    document.getElementById('extractedSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function extractKeywords(text) {
    const lowerText = text.toLowerCase();

    // Reset
    extracted.titles = [];
    extracted.mustSkills = [];
    extracted.niceSkills = [];
    extracted.locations = [];
    extracted.experience = [];
    extracted.excludes = [];

    // Find nice-to-have sections
    let niceToHaveZone = false;
    const lines = text.split('\n');
    const niceToHaveLines = new Set();
    const mustHaveLines = new Set();

    lines.forEach((line, i) => {
        const lowerLine = line.toLowerCase();
        if (NICE_TO_HAVE_SIGNALS.some(s => lowerLine.includes(s))) {
            niceToHaveZone = true;
            niceToHaveLines.add(i);
        } else if (lowerLine.match(/^(anforderungen|requirements|must.have|voraussetzungen|qualifikationen|what you.ll bring|dein profil|ihr profil|was du mitbringst)/i)) {
            niceToHaveZone = false;
        }
        if (niceToHaveZone) {
            niceToHaveLines.add(i);
        }
    });

    // Extract titles
    TITLE_PATTERNS.forEach(title => {
        const regex = new RegExp(`\\b${escapeRegex(title)}\\b`, 'i');
        if (regex.test(text)) {
            if (!extracted.titles.includes(title)) {
                extracted.titles.push(title);
            }
        }
    });

    // Limit to top 5 most relevant titles
    if (extracted.titles.length > 5) {
        extracted.titles = extracted.titles.slice(0, 5);
    }

    // Extract skills
    SKILL_KEYWORDS.forEach(skill => {
        const regex = new RegExp(`\\b${escapeRegex(skill)}\\b`, 'i');
        if (regex.test(text)) {
            // Determine if it's in a nice-to-have section
            let isNice = false;
            lines.forEach((line, i) => {
                if (regex.test(line) && niceToHaveLines.has(i)) {
                    isNice = true;
                }
            });

            if (isNice) {
                if (!extracted.niceSkills.includes(skill)) extracted.niceSkills.push(skill);
            } else {
                if (!extracted.mustSkills.includes(skill)) extracted.mustSkills.push(skill);
            }
        }
    });

    // Extract locations
    LOCATION_PATTERNS.forEach(loc => {
        const regex = new RegExp(`\\b${escapeRegex(loc)}\\b`, 'i');
        if (regex.test(text)) {
            if (!extracted.locations.includes(loc)) extracted.locations.push(loc);
        }
    });

    // Extract experience
    const expMatch = text.match(/(\d+)\+?\s*(?:years?|jahre?|j\.)\s*(?:of\s*)?(?:experience|erfahrung|berufserfahrung)/i)
        || text.match(/(?:experience|erfahrung|berufserfahrung)\s*(?:of\s*)?(\d+)\+?\s*(?:years?|jahre?)/i)
        || text.match(/(\d+)\+?\s*(?:years?|jahre?)/i);
    if (expMatch) {
        extracted.experience = [`${expMatch[1]}+ years`];
    }

    // Default excludes based on seniority context
    if (extracted.titles.some(t => /senior|lead|staff|principal|head|director/i.test(t))) {
        extracted.excludes = ['Intern', 'Praktikant', 'Werkstudent', 'Junior', 'Trainee'];
    } else {
        extracted.excludes = ['Intern', 'Praktikant', 'Werkstudent'];
    }
}

function renderExtracted() {
    renderTagGroup('exTitles', extracted.titles, 'titles');
    renderTagGroup('exMustSkills', extracted.mustSkills, 'mustSkills', 'must-tag');
    renderTagGroup('exNiceSkills', extracted.niceSkills, 'niceSkills', 'nice-tag');
    renderTagGroup('exLocations', extracted.locations, 'locations');
    renderTagGroup('exExperience', extracted.experience, 'experience');
    renderTagGroup('exExcludes', extracted.excludes, 'excludes', 'exclude-tag');
}

function renderTagGroup(elementId, items, stateKey, extraClass) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    if (items.length === 0) {
        container.innerHTML = '<span style="color:#94a3b8;font-size:0.85rem;">Keine gefunden</span>';
        return;
    }
    items.forEach((item, idx) => {
        const tag = document.createElement('span');
        tag.className = `tag ${extraClass || ''}`;
        tag.innerHTML = `${escapeHtml(item)} <span class="remove-tag">&times;</span>`;
        tag.querySelector('.remove-tag').addEventListener('click', (e) => {
            e.stopPropagation();
            extracted[stateKey].splice(idx, 1);
            renderExtracted();
            buildGeneratorQuery();
        });
        container.appendChild(tag);
    });
}

function buildGeneratorQuery() {
    const parts = [];

    // Google X-Ray prefix
    if (currentPlatform === 'google') {
        parts.push('site:linkedin.com/in');
    } else if (currentPlatform === 'github') {
        parts.push('site:github.com');
    }

    // Titles
    if (extracted.titles.length > 0) {
        parts.push(orGroup(extracted.titles));
    }

    // Must-have skills (AND)
    extracted.mustSkills.forEach(skill => {
        parts.push(quote(skill));
    });

    // Nice-to-have skills (OR group)
    if (extracted.niceSkills.length > 0) {
        parts.push(orGroup(extracted.niceSkills));
    }

    // Locations
    if (extracted.locations.length > 0) {
        parts.push(orGroup(extracted.locations));
    }

    // Experience
    if (extracted.experience.length > 0) {
        parts.push(`"${extracted.experience[0]}"`);
    }

    let andOp = 'AND';
    let notOp = 'NOT';

    if (currentPlatform === 'xing') {
        andOp = 'UND';
        notOp = 'NICHT';
    }

    let query = parts.join(` ${andOp} `);

    // Exclusions
    if (extracted.excludes.length > 0) {
        extracted.excludes.forEach(term => {
            query += ` ${notOp} ${quote(term)}`;
        });
    }

    currentQuery = query;
    const resultBox = document.getElementById('resultBox');

    if (!query.trim()) {
        resultBox.innerHTML = '<p class="placeholder-text">Keine Suchbegriffe extrahiert...</p>';
        return;
    }

    resultBox.innerHTML = highlightBoolean(query);
    updateSearchLinks(query);
    saveToHistory(query);
}

function updateSearchLinks(query) {
    const encoded = encodeURIComponent(query);
    const googleQuery = encodeURIComponent(`site:linkedin.com/in ${query}`);

    document.getElementById('linkLinkedIn').href =
        `https://www.linkedin.com/search/results/people/?keywords=${encoded}`;
    document.getElementById('linkGoogle').href =
        `https://www.google.com/search?q=${googleQuery}`;
    document.getElementById('linkGitHub').href =
        `https://github.com/search?q=${encoded}&type=users`;
}

// =============================================
// TAB 2: Manual Builder
// =============================================
function initBuilder() {
    const builderInputs = {
        title: { input: document.getElementById('titleInput'), tags: document.getElementById('titleTags'), key: 'titles' },
        mustSkill: { input: document.getElementById('mustSkillInput'), tags: document.getElementById('mustSkillTags'), key: 'mustSkills' },
        niceSkill: { input: document.getElementById('niceSkillInput'), tags: document.getElementById('niceSkillTags'), key: 'niceSkills' },
        location: { input: document.getElementById('locationInput'), tags: document.getElementById('locationTags'), key: 'locations' },
        exclude: { input: document.getElementById('excludeInput'), tags: document.getElementById('excludeTags'), key: 'excludes' },
        company: { input: document.getElementById('companyInput'), tags: document.getElementById('companyTags'), key: 'companies' },
    };

    // Tag inputs
    Object.values(builderInputs).forEach(inputObj => {
        inputObj.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const text = inputObj.input.value.trim();
                if (!text || builderState[inputObj.key].includes(text)) return;
                builderState[inputObj.key].push(text);
                renderBuilderTags(inputObj);
                inputObj.input.value = '';
                builderState.manualOverride = false;
                buildBuilderQuery();
            }
        });
    });

    // Templates
    const templates = {
        fullstack: {
            titles: ['Fullstack Developer', 'Full Stack Engineer', 'Web Developer'],
            mustSkills: ['JavaScript', 'HTML', 'CSS'],
            niceSkills: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript'],
            locations: [], excludes: ['Intern', 'Praktikant'], companies: [],
        },
        datascience: {
            titles: ['Data Scientist', 'Data Analyst', 'ML Engineer'],
            mustSkills: ['Python', 'Machine Learning'],
            niceSkills: ['TensorFlow', 'PyTorch', 'SQL', 'Spark'],
            locations: [], excludes: ['Intern', 'Praktikant'], companies: [],
        },
        devops: {
            titles: ['DevOps Engineer', 'SRE', 'Platform Engineer'],
            mustSkills: ['CI/CD', 'Linux'],
            niceSkills: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure'],
            locations: [], excludes: ['Junior', 'Intern'], companies: [],
        },
        pm: {
            titles: ['Product Manager', 'Product Owner', 'Produktmanager'],
            mustSkills: ['Agile', 'Scrum'],
            niceSkills: ['Jira', 'OKR', 'Stakeholder Management'],
            locations: [], excludes: ['Intern', 'Werkstudent'], companies: [],
        },
        ux: {
            titles: ['UX Designer', 'UI Designer', 'Product Designer'],
            mustSkills: ['Figma'],
            niceSkills: ['Sketch', 'Adobe XD', 'User Research', 'Prototyping'],
            locations: [], excludes: ['Intern', 'Praktikant'], companies: [],
        },
        sales: {
            titles: ['Sales Manager', 'Account Executive', 'Vertriebsleiter'],
            mustSkills: ['B2B'],
            niceSkills: ['Salesforce', 'CRM', 'SaaS', 'Lead Generation'],
            locations: [], excludes: ['Intern', 'Werkstudent'], companies: [],
        },
        marketing: {
            titles: ['Marketing Manager', 'Online Marketing Manager', 'Growth Manager'],
            mustSkills: ['Digital Marketing'],
            niceSkills: ['SEO', 'SEA', 'Google Analytics', 'HubSpot'],
            locations: [], excludes: ['Intern', 'Werkstudent'], companies: [],
        },
        hr: {
            titles: ['HR Manager', 'HR Business Partner', 'Personalreferent'],
            mustSkills: ['Personalmanagement'],
            niceSkills: ['Recruiting', 'Employer Branding', 'Arbeitsrecht'],
            locations: [], excludes: ['Intern', 'Werkstudent'], companies: [],
        },
    };

    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const t = templates[btn.dataset.template];
            if (!t) return;
            Object.keys(t).forEach(key => { builderState[key] = [...t[key]]; });
            builderState.manualOverride = false;
            Object.values(builderInputs).forEach(renderBuilderTags);
            buildBuilderQuery();
        });
    });

    // Manual editor
    const manualEditor = document.getElementById('manualEditor');
    manualEditor.addEventListener('input', () => {
        builderState.manualOverride = true;
        const raw = manualEditor.value.trim();
        const box = document.getElementById('builderResultBox');
        box.innerHTML = raw ? highlightBoolean(raw) : '<p class="placeholder-text">Füge Suchkriterien hinzu...</p>';
    });

    // Operator buttons
    document.querySelectorAll('.op-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const op = btn.dataset.op;
            const start = manualEditor.selectionStart;
            const end = manualEditor.selectionEnd;
            const text = manualEditor.value;
            let insert = '';

            if (op === '()') {
                insert = `(${text.substring(start, end)})`;
                manualEditor.value = text.substring(0, start) + insert + text.substring(end);
            } else if (op === '""') {
                insert = `"${text.substring(start, end)}"`;
                manualEditor.value = text.substring(0, start) + insert + text.substring(end);
            } else {
                insert = ` ${op} `;
                manualEditor.value = text.substring(0, start) + insert + text.substring(end);
            }
            manualEditor.focus();
            manualEditor.selectionStart = manualEditor.selectionEnd = start + insert.length;
            builderState.manualOverride = true;
            const box = document.getElementById('builderResultBox');
            box.innerHTML = highlightBoolean(manualEditor.value.trim());
        });
    });

    // Copy & Reset
    document.getElementById('builderCopyBtn').addEventListener('click', () => {
        const text = manualEditor.value.trim();
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => showToast('builderCopyToast'));
    });

    document.getElementById('builderResetBtn').addEventListener('click', () => {
        Object.keys(builderState).forEach(key => {
            if (Array.isArray(builderState[key])) builderState[key] = [];
        });
        builderState.manualOverride = false;
        manualEditor.value = '';
        Object.values(builderInputs).forEach(inp => { inp.tags.innerHTML = ''; inp.input.value = ''; });
        document.getElementById('builderResultBox').innerHTML = '<p class="placeholder-text">Füge Suchkriterien hinzu...</p>';
    });

    function renderBuilderTags(inputObj) {
        inputObj.tags.innerHTML = '';
        builderState[inputObj.key].forEach((text, idx) => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.innerHTML = `${escapeHtml(text)} <span class="remove-tag">&times;</span>`;
            tag.querySelector('.remove-tag').addEventListener('click', () => {
                builderState[inputObj.key].splice(idx, 1);
                renderBuilderTags(inputObj);
                builderState.manualOverride = false;
                buildBuilderQuery();
            });
            inputObj.tags.appendChild(tag);
        });
    }

    function buildBuilderQuery() {
        if (builderState.manualOverride) return;
        const parts = [];

        if (builderState.titles.length > 0) parts.push(orGroup(builderState.titles));
        builderState.mustSkills.forEach(s => parts.push(quote(s)));
        if (builderState.niceSkills.length > 0) parts.push(orGroup(builderState.niceSkills));
        if (builderState.locations.length > 0) parts.push(orGroup(builderState.locations));
        if (builderState.companies.length > 0) parts.push(orGroup(builderState.companies));

        let query = parts.join(' AND ');
        builderState.excludes.forEach(term => { query += ` NOT ${quote(term)}`; });

        manualEditor.value = query;
        const box = document.getElementById('builderResultBox');
        if (!query.trim()) {
            box.innerHTML = '<p class="placeholder-text">Füge Suchkriterien hinzu...</p>';
            return;
        }
        box.innerHTML = highlightBoolean(query);
        saveToHistory(query);
    }
}

// =============================================
// Shared Utilities
// =============================================
function quote(term) {
    if (term.includes(' ') || term.includes('/') || term.includes('.') || term.includes('+')) return `"${term}"`;
    return term;
}

function orGroup(terms) {
    if (terms.length === 0) return '';
    if (terms.length === 1) return quote(terms[0]);
    return `(${terms.map(quote).join(' OR ')})`;
}

function highlightBoolean(str) {
    const escaped = escapeHtml(str);
    return escaped
        .replace(/\b(AND|OR|NOT|UND|ODER|NICHT)\b/g, (m) => {
            if (m === 'NOT' || m === 'NICHT') return `<span class="neg">${m}</span>`;
            return `<span class="kw">${m}</span>`;
        })
        .replace(/&quot;([^&]*?)&quot;/g, '<span class="str">"$1"</span>')
        .replace(/"([^"]*?)"/g, '<span class="str">"$1"</span>');
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function showToast(id) {
    const toast = document.getElementById(id);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// === History ===
function getHistory() {
    try { return JSON.parse(localStorage.getItem('booleanSearchHistory') || '[]'); }
    catch { return []; }
}

function saveToHistory(query) {
    if (!query.trim()) return;
    const history = getHistory();
    if (history.length > 0 && history[0].query === query) return;
    history.unshift({ query, date: new Date().toLocaleString('de-DE') });
    if (history.length > 20) history.pop();
    localStorage.setItem('booleanSearchHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    const clearBtn = document.getElementById('clearHistoryBtn');
    const history = getHistory();

    if (history.length === 0) {
        historyList.innerHTML = '<p class="placeholder-text">Noch keine gespeicherten Suchen.</p>';
        clearBtn.style.display = 'none';
        return;
    }

    clearBtn.style.display = 'inline-block';
    historyList.innerHTML = history.map((item, i) => `
        <div class="history-item" data-index="${i}">
            <span class="history-item-text">${escapeHtml(item.query)}</span>
            <span class="history-item-date">${escapeHtml(item.date)}</span>
            <button class="delete-history" data-index="${i}">&times;</button>
        </div>
    `).join('');

    historyList.querySelectorAll('.history-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-history')) return;
            const entry = history[parseInt(item.dataset.index)];
            if (entry) {
                navigator.clipboard.writeText(entry.query).then(() => showToast('copyToast'));
            }
        });
    });

    historyList.querySelectorAll('.delete-history').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const h = getHistory();
            h.splice(parseInt(btn.dataset.index), 1);
            localStorage.setItem('booleanSearchHistory', JSON.stringify(h));
            renderHistory();
        });
    });

    clearBtn.onclick = () => {
        localStorage.removeItem('booleanSearchHistory');
        renderHistory();
    };
}

// =============================================
// TAB 0: AI Recruiting Workflow
// =============================================

function initWorkflow() {
    document.getElementById('workflowRunBtn').addEventListener('click', () => {
        const text = document.getElementById('workflowInput').value.trim();
        if (!text) return;
        runWorkflow(text);
    });

    document.getElementById('workflowClearBtn').addEventListener('click', () => {
        document.getElementById('workflowInput').value = '';
        document.getElementById('workflowResults').style.display = 'none';
    });

    document.querySelectorAll('.wf-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const el = document.getElementById(btn.dataset.target);
            const text = el.tagName === 'TEXTAREA' ? el.value : (el.innerText || el.textContent);
            navigator.clipboard.writeText(text.trim()).then(() => showToast('workflowToast'));
        });
    });
}

function runWorkflow(text) {
    const runBtn = document.getElementById('workflowRunBtn');
    runBtn.innerHTML = '<span class="spinner"></span>Generating…';
    runBtn.disabled = true;

    setTimeout(() => {
        try {
            // Reuse existing keyword extraction; snapshot result before any Tab 1 usage
            extractKeywords(text);
            const kw = {
                titles:     [...extracted.titles],
                mustSkills: [...extracted.mustSkills],
                niceSkills: [...extracted.niceSkills],
                locations:  [...extracted.locations],
                experience: [...extracted.experience],
                excludes:   [...extracted.excludes],
            };

            const anonymized  = wfAnonymize(text);
            const boolStr     = wfBuildBoolean(kw);
            const linkedInPost = wfBuildLinkedInPost(text, kw);
            const imgPrompt   = wfBuildImagePrompt(kw);

            // Section 1
            document.getElementById('wfAnonymized').textContent = anonymized;

            // Section 2
            const boolEl = document.getElementById('wfBoolean');
            boolEl.innerHTML = boolStr
                ? highlightBoolean(boolStr)
                : '<span style="color:#64748b">No keywords detected — please refine your input.</span>';
            document.getElementById('wfBooleanRaw').value = boolStr;
            const liLink = document.getElementById('wfLinkedInSearch');
            liLink.href = boolStr
                ? `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(boolStr)}`
                : '#';

            // Section 3
            document.getElementById('wfLinkedIn').textContent = linkedInPost;

            // Section 4
            document.getElementById('wfImagePrompt').textContent = imgPrompt;

            const resultsEl = document.getElementById('workflowResults');
            resultsEl.style.display = 'block';
            resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } finally {
            runBtn.innerHTML = 'Generate All Outputs';
            runBtn.disabled = false;
        }
    }, 250);
}

// ─── Section 1: Anonymization ────────────────────────────────────────────────

function wfAnonymize(text) {
    let r = text;

    // URLs
    r = r.replace(/https?:\/\/[^\s<>"']+/g, '[Company Website]');
    r = r.replace(/\bwww\.[A-Za-z0-9\-]+\.[A-Za-z]{2,}[^\s]*/g, '[Company Website]');

    // Email addresses
    r = r.replace(/[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/g, '[Contact Email]');

    // Phone numbers (loose international pattern)
    r = r.replace(/(\+?\d{1,3}[\s\-.])?(\(?\d{2,4}\)?[\s\-.])\d{3,4}[\s\-.]?\d{3,4}/g, '[Contact Phone]');

    // Salary / compensation figures
    r = r.replace(/\b(?:EUR|USD|GBP|CHF|€|\$|£|CHF)\s*[\d.,'\s]+(?:k|K)?\s*(?:EUR|USD|GBP|CHF|€|\$|£)?\s*(?:[-–]\s*[\d.,'\s]+(?:k|K)?\s*(?:EUR|USD|GBP|CHF|€|\$|£)?)?(?:\s*(?:per\s+year|p\.a\.|per\s+annum|annually|pro\s+Jahr|jährlich|\/year|\/yr|\/mo|monthly))?\b/g, '[Competitive Salary]');
    r = r.replace(/\b[\d]{2,3}(?:[.,\s]\d{3})+\s*(?:EUR|USD|GBP|€|\$|£)\b/g, '[Competitive Salary]');

    // Company legal entity names (suffix-anchored)
    const legalSuffixes = [
        'GmbH', 'AG', 'SE', 'KG', 'OHG', 'UG',
        'e\\.V\\.', 'e\\.G\\.',
        'Inc\\.?', 'LLC\\.?', 'Ltd\\.?', 'Corp\\.?',
        'Plc\\.?', 'S\\.A\\.', 'B\\.V\\.', 'N\\.V\\.',
        'Holdings?', 'Group', 'Technologies', 'Solutions', 'Systems',
        'Services', 'Digital', 'Software', 'Consulting', 'Advisory',
        'Ventures', 'Capital', 'Labs', 'Studio', 'Agency', 'Partners',
    ].join('|');
    const legalRe = new RegExp(
        `\\b[A-Z][A-Za-z0-9&.\\-]+(\\s+[A-Z][A-Za-z0-9&.\\-]+){0,3}\\s+(?:${legalSuffixes})\\b`,
        'g'
    );
    r = r.replace(legalRe, '[Company]');

    // Street addresses
    r = r.replace(
        /\d+\s+[A-Z][a-z]+(?:\s+[A-Z]?[a-z]+){0,3}\s*,?\s*(?:Street|St\b|Avenue|Ave\b|Road|Rd\b|Boulevard|Blvd\b|Drive|Dr\b|Lane|Ln\b|Way|Court|Ct\b|Place|Pl\b|Straße|Strasse|Str\b|Gasse|Allee|Weg|Platz)\b/gi,
        '[Office Address]'
    );

    // Contextual company names: "at/for/join/bei/für [ProperName]"
    const knownOk = new Set([
        ...SKILL_KEYWORDS.map(s => s.toLowerCase()),
        'linkedin', 'github', 'gitlab', 'slack', 'zoom', 'teams', 'notion',
        'jira', 'confluence', 'asana', 'trello', 'figma', 'hubspot', 'google',
        'microsoft', 'amazon', 'apple', 'meta', 'netflix', 'shopify', 'stripe',
    ]);
    const prepRe = /\b(at|for|join|bei|für|von|mit)\s+([A-Z][A-Za-z0-9\-&.]+(?:\s+[A-Z][A-Za-z0-9\-&.]+)?)\b/g;
    r = r.replace(prepRe, (match, prep, name) => {
        const first = name.split(' ')[0].toLowerCase();
        if (knownOk.has(first) || knownOk.has(name.toLowerCase())) return match;
        // Skip if already anonymized
        if (name.startsWith('[')) return match;
        // Only replace what looks like a proper noun (not a seniority/role word)
        const roleWords = new Set(['senior', 'junior', 'lead', 'head', 'chief', 'director',
            'manager', 'engineer', 'developer', 'designer', 'analyst', 'consultant', 'specialist',
            'remote', 'hybrid', 'team', 'our', 'your', 'their', 'the', 'a', 'an']);
        if (roleWords.has(first)) return match;
        return `${prep} [Company]`;
    });

    // "called/known as [Name]"
    r = r.replace(/\b(?:called|known as)\s+([A-Z][A-Za-z0-9\s\-&.]{2,30})(?=[,.\s\n])/g, (m, name) => {
        if (knownOk.has(name.trim().toLowerCase())) return m;
        return m.replace(name, '[Company]');
    });

    // Collapse repeated placeholders
    r = r.replace(/(\[Company\])(\s*\[Company\])+/g, '[Company]');
    r = r.replace(/(\[Competitive Salary\])(\s*\[Competitive Salary\])+/g, '[Competitive Salary]');

    return r.trim();
}

// ─── Section 2: Boolean Search ───────────────────────────────────────────────

const TITLE_SYNONYMS = {
    'Software Engineer':   ['Software Engineer', 'Software Developer', 'SWE'],
    'Software Developer':  ['Software Developer', 'Software Engineer'],
    'Frontend Developer':  ['Frontend Developer', 'Frontend Engineer', 'Front-End Developer'],
    'Frontend Engineer':   ['Frontend Engineer', 'Frontend Developer', 'Front-End Engineer'],
    'Backend Developer':   ['Backend Developer', 'Backend Engineer', 'Back-End Developer'],
    'Backend Engineer':    ['Backend Engineer', 'Backend Developer'],
    'Full Stack Developer':['Full Stack Developer', 'Fullstack Developer', 'Full-Stack Engineer'],
    'Fullstack Developer': ['Fullstack Developer', 'Full Stack Developer', 'Full-Stack Developer'],
    'Data Scientist':      ['Data Scientist', 'ML Engineer', 'Machine Learning Engineer'],
    'Data Engineer':       ['Data Engineer', 'Analytics Engineer', 'Data Platform Engineer'],
    'ML Engineer':         ['ML Engineer', 'Machine Learning Engineer', 'AI Engineer'],
    'DevOps Engineer':     ['DevOps Engineer', 'SRE', 'Site Reliability Engineer', 'Platform Engineer'],
    'Site Reliability Engineer': ['SRE', 'Site Reliability Engineer', 'DevOps Engineer'],
    'Product Manager':     ['Product Manager', 'Product Owner', 'Technical Product Manager'],
    'Product Owner':       ['Product Owner', 'Product Manager'],
    'UX Designer':         ['UX Designer', 'Product Designer', 'UI/UX Designer'],
    'UI Designer':         ['UI Designer', 'UX Designer', 'Visual Designer'],
    'HR Manager':          ['HR Manager', 'HR Business Partner', 'People Manager'],
    'Recruiter':           ['Recruiter', 'Talent Acquisition Specialist', 'Talent Acquisition Manager'],
    'Sales Manager':       ['Sales Manager', 'Account Executive', 'Business Development Manager'],
    'Account Executive':   ['Account Executive', 'Sales Manager', 'Business Development Representative'],
};

function wfBuildBoolean(kw) {
    const parts = [];

    if (kw.titles.length > 0) {
        const expanded = new Set(kw.titles);
        kw.titles.forEach(t => {
            const syns = TITLE_SYNONYMS[t];
            if (syns) syns.forEach(s => expanded.add(s));
        });
        parts.push(orGroup([...expanded].slice(0, 6)));
    }

    kw.mustSkills.forEach(skill => parts.push(quote(skill)));

    if (kw.niceSkills.length > 0) {
        parts.push(orGroup(kw.niceSkills));
    }

    if (kw.locations.length > 0) {
        parts.push(orGroup(kw.locations));
    }

    if (kw.experience.length > 0) {
        parts.push(`"${kw.experience[0]}"`);
    }

    let query = parts.join(' AND ');

    kw.excludes.forEach(term => {
        query += ` NOT ${quote(term)}`;
    });

    return query;
}

// ─── Section 3: LinkedIn Post ────────────────────────────────────────────────

function wfDetectCategory(kw) {
    const all = [...kw.titles, ...kw.mustSkills, ...kw.niceSkills].join(' ').toLowerCase();
    if (/engineer|developer|software|frontend|backend|fullstack|devops|cloud|platform|mobile|ios|android|ml|machine.learning|ai\b/.test(all)) return 'tech';
    if (/data.scientist|tableau|power.bi|analytics|business.intelligence/.test(all)) return 'data';
    if (/product.manager|product.owner|roadmap|sprint|agile|scrum/.test(all)) return 'product';
    if (/ux|ui.designer|figma|user.research|prototyping|ux.designer/.test(all)) return 'design';
    if (/sales|account.executive|revenue|crm|b2b|lead.generation/.test(all)) return 'sales';
    if (/marketing|seo|content.manager|brand|growth.manager|digital.marketing/.test(all)) return 'marketing';
    if (/hr.manager|hr.business.partner|recruiter|talent.acquisition|personalreferent|people.manager/.test(all)) return 'hr';
    if (/finance|accounting|controller|cfo|auditor|tax/.test(all)) return 'finance';
    if (/consultant|management.consultant|advisory/.test(all)) return 'consulting';
    return 'general';
}

const POST_HOOKS = {
    tech:       `The best engineering teams aren't built by accident.\n\nWe're hiring — and we're looking for someone exceptional.`,
    data:       `Data is only as powerful as the people who know how to use it.\n\nWe're on the lookout for exactly that person.`,
    product:    `Behind every great product is a great Product Manager.\n\nWe're building something meaningful — and we need yours.`,
    design:     `Design isn't decoration. It's how people experience everything we build.\n\nWe're hiring a designer who gets that.`,
    sales:      `Revenue doesn't grow by itself. It takes the right people, the right approach, and the right opportunity.\n\nThis might be yours.`,
    marketing:  `Every great brand is built one story at a time.\n\nWe're looking for the marketer who'll help tell ours.`,
    hr:         `People are our most important asset — and we need someone who truly believes that.\n\nWe're hiring.`,
    finance:    `Numbers tell stories. We need someone who can read them — and act on them.\n\nWe're hiring.`,
    consulting: `Complex problems. High-impact work. Exceptional clients.\n\nWe're growing our team with the right people.`,
    general:    `We're growing — and we're looking for someone exceptional to grow with us.\n\nThis is your opportunity.`,
};

function wfBuildLinkedInPost(text, kw) {
    const category  = wfDetectCategory(kw);
    const title     = kw.titles.length > 0 ? kw.titles[0] : 'Experienced Professional';
    const location  = kw.locations.length > 0 ? kw.locations[0] : null;
    const exp       = kw.experience.length > 0 ? kw.experience[0] : null;
    const topSkills = [...kw.mustSkills, ...kw.niceSkills].slice(0, 5);

    const hook = POST_HOOKS[category] || POST_HOOKS.general;

    let intro = `We're looking for a ${title}`;
    if (exp) intro += ` with ${exp} of experience`;
    if (location) intro += ` — based in ${location}`;
    intro += `. This is a hands-on, high-impact role where you\'ll contribute directly to our product and team outcomes.`;

    const responsibilities = wfExtractResponsibilities(text, kw);
    const requirements     = wfExtractRequirements(kw, category);
    const offer            = wfBuildOffer(category, location);
    const hashtags         = wfBuildHashtags(kw, category);

    const lines = [];
    lines.push(hook);
    lines.push('');
    lines.push(intro);
    lines.push('');

    if (responsibilities.length > 0) {
        lines.push('What You\'ll Do:');
        responsibilities.forEach(r => lines.push(`▸ ${r}`));
        lines.push('');
    }

    lines.push('What You Bring:');
    requirements.forEach(r => lines.push(`✓ ${r}`));
    lines.push('');

    lines.push(offer);
    lines.push('');
    lines.push(`Interested? Apply directly or send your profile to [Contact Email]. We review on a rolling basis.`);
    lines.push('');
    lines.push(hashtags);

    return lines.join('\n');
}

function wfExtractResponsibilities(text, kw) {
    const lines = text.split('\n');
    const results = [];
    let inSection = false;
    const sectionStart = /^(your responsibilities|responsibilities|what you.ll do|role|the role|your role|aufgaben|deine aufgaben|tätigkeiten|verantwortlichkeiten|was du tust)/i;
    const sectionEnd   = /^(your profile|requirements|qualifications|what you bring|was du mitbringst|dein profil|anforderungen|skills|qualifikationen|we offer|benefits|was wir bieten)/i;
    const bulletRe     = /^[-•*▸►→▶✦◆▪●·]\s+(.+)/;
    const numberedRe   = /^\d+[.)]\s+(.+)/;

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (sectionStart.test(trimmed)) { inSection = true; continue; }
        if (sectionEnd.test(trimmed))   { inSection = false; continue; }

        let content = null;
        const bm = trimmed.match(bulletRe) || trimmed.match(numberedRe);
        if (bm) content = bm[1].trim();
        else if (inSection && trimmed.length > 25 && trimmed.length < 200) content = trimmed;

        if (content && content.length > 20) {
            results.push(content);
        }
        if (results.length >= 4) break;
    }

    if (results.length === 0) {
        const skills = kw.mustSkills.slice(0, 3);
        if (skills.length >= 1) results.push(`Design, build, and maintain production-grade systems using ${skills[0]}`);
        if (skills.length >= 2) results.push(`Collaborate with cross-functional teams to deliver reliable solutions with ${skills[1]}`);
        if (skills.length >= 3) results.push(`Drive code quality, performance, and reliability across ${skills[2]} components`);
        if (results.length < 3) results.push('Own deliverables end-to-end and contribute to architecture decisions');
    }

    return results.slice(0, 4);
}

function wfExtractRequirements(kw, category) {
    const reqs = [];

    if (kw.experience.length > 0) {
        reqs.push(`${kw.experience[0]} of hands-on professional experience`);
    }

    if (kw.mustSkills.length > 0) {
        const grp = kw.mustSkills.slice(0, 3);
        if (grp.length === 1) {
            reqs.push(`Solid proficiency in ${grp[0]}`);
        } else {
            reqs.push(`Strong skills in ${grp.slice(0, -1).join(', ')} and ${grp[grp.length - 1]}`);
        }
    }

    if (kw.niceSkills.length > 0) {
        reqs.push(`Experience with ${kw.niceSkills.slice(0, 2).join(' or ')} is a plus`);
    }

    const softSkills = {
        tech:       'Strong problem-solving mindset and attention to code quality',
        data:       'Ability to translate complex findings into clear, actionable insights',
        product:    'Excellent stakeholder management and data-informed decision-making',
        design:     'Compelling portfolio demonstrating user-centered design thinking',
        sales:      'Proven track record of meeting or exceeding sales targets',
        marketing:  'Data-driven mindset with a creative approach to content and campaigns',
        hr:         'High empathy, strong interpersonal skills, and discretion',
        finance:    'Exceptional accuracy, analytical rigour, and attention to detail',
        consulting: 'Strong analytical skills and client-facing communication ability',
        general:    'Strong communication skills and ability to thrive in a collaborative team',
    };
    reqs.push(softSkills[category] || softSkills.general);

    return reqs.slice(0, 4);
}

function wfBuildOffer(category, location) {
    const loc = location ? `${location} + remote options` : 'flexible remote/hybrid';
    const offers = {
        tech:       `What We Offer:\n▸ Technically challenging work with real business impact\n▸ Flexible setup (${loc})\n▸ Competitive compensation + equity\n▸ A culture of ownership, craft, and continuous learning`,
        data:       `What We Offer:\n▸ Rich datasets and modern data tooling\n▸ Cross-functional visibility and executive exposure\n▸ Competitive compensation + equity\n▸ Flexible work model (${loc})`,
        product:    `What We Offer:\n▸ Real ownership over product direction and roadmap\n▸ Tight collaboration with engineering, design, and leadership\n▸ Competitive compensation + equity\n▸ Flexible setup (${loc})`,
        design:     `What We Offer:\n▸ Creative freedom within a design-forward organization\n▸ Modern tooling and a culture that invests in design\n▸ Competitive compensation + equity\n▸ Flexible work model (${loc})`,
        sales:      `What We Offer:\n▸ Competitive base + uncapped commission\n▸ Strong inbound pipeline and enablement support\n▸ Clear career progression path\n▸ High-energy, collaborative team environment`,
        marketing:  `What We Offer:\n▸ Budget to experiment and a team that values bold ideas\n▸ Data-driven culture with clear attribution\n▸ Competitive compensation + equity\n▸ Flexible setup (${loc})`,
        hr:         `What We Offer:\n▸ A strategic seat at the table for people decisions\n▸ Modern HR systems and tooling\n▸ Competitive compensation + equity\n▸ A culture that lives its values`,
        general:    `What We Offer:\n▸ Competitive compensation and benefits\n▸ Flexible work arrangements (${loc})\n▸ Professional development budget\n▸ A collaborative, inclusive team culture`,
    };
    return offers[category] || offers.general;
}

function wfBuildHashtags(kw, category) {
    const catTags = {
        tech:       ['#engineering', '#softwaredevelopment', '#techjobs'],
        data:       ['#datascience', '#analytics', '#AI'],
        product:    ['#productmanagement', '#agile', '#startups'],
        design:     ['#uxdesign', '#productdesign', '#userexperience'],
        sales:      ['#sales', '#b2b', '#businessdevelopment'],
        marketing:  ['#digitalmarketing', '#growth', '#contentmarketing'],
        hr:         ['#humanresources', '#talentacquisition', '#peopleops'],
        finance:    ['#finance', '#accounting', '#fintech'],
        consulting: ['#consulting', '#strategy', '#management'],
        general:    ['#careers', '#talent', '#opportunity'],
    };

    const skillTags = kw.mustSkills
        .slice(0, 3)
        .map(s => `#${s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()}`)
        .filter(h => h.length > 2 && h !== '#');

    const base = ['#hiring', '#nowhiring'];
    const all  = [...base, ...(catTags[category] || catTags.general), ...skillTags];
    return [...new Set(all)].slice(0, 8).join(' ');
}

// ─── Section 4: Image Prompt ─────────────────────────────────────────────────

function wfBuildImagePrompt(kw) {
    const category = wfDetectCategory(kw);

    const scenes = {
        tech: {
            subject:  'a focused software engineer working at a sleek standing desk with dual ultrawide monitors displaying code editors and terminal windows',
            setting:  'modern open-plan tech office with exposed brick, plants, and soft ambient lighting',
            props:    'mechanical keyboard, coffee cup, sticky notes, code on screens',
            mood:     'productive, calm, modern, aspirational',
        },
        data: {
            subject:  'a data analyst reviewing rich dashboards and charts on a large curved monitor, taking notes',
            setting:  'contemporary analytics workspace with large screens showing data visualizations',
            props:    'data dashboards, notebook, espresso, second screen with charts',
            mood:     'analytical, focused, professional, bright',
        },
        product: {
            subject:  'a product manager presenting a roadmap on a large whiteboard to a small, engaged cross-functional team',
            setting:  'bright collaborative studio with sticky notes, user journey maps on the walls, and glass partitions',
            props:    'sticky notes, user story maps, laptop, tablet showing wireframes',
            mood:     'collaborative, energetic, strategic, optimistic',
        },
        design: {
            subject:  'a UX designer sketching wireframes on a drawing tablet while referencing UI designs on a large monitor',
            setting:  'creative design studio with warm lighting, mood boards on the wall, and design books',
            props:    'drawing tablet, Figma-style interface on screen, color swatches, sketch pad',
            mood:     'creative, artistic, focused, inspiring',
        },
        sales: {
            subject:  'a confident sales professional smiling during a professional video call on a laptop in a bright office',
            setting:  'modern professional office with floor-to-ceiling windows and city skyline views',
            props:    'laptop, notepad, business papers, city backdrop',
            mood:     'confident, warm, dynamic, professional',
        },
        marketing: {
            subject:  'a marketing professional reviewing campaign analytics on multiple screens, pointing at a graph',
            setting:  'vibrant open marketing agency workspace with campaign materials pinned to boards',
            props:    'analytics dashboards, campaign visuals, laptop, coffee',
            mood:     'creative, data-driven, energetic, bold',
        },
        hr: {
            subject:  'an HR professional in a friendly one-on-one conversation in a bright, welcoming meeting room',
            setting:  'modern HR office with warm interior design, plants, and comfortable seating',
            props:    'documents, laptop, coffee table, plants, natural light',
            mood:     'warm, approachable, professional, human',
        },
        general: {
            subject:  'a confident professional working at a clean, organized desk in a modern office',
            setting:  'bright contemporary open-plan office with natural lighting and collaborative spaces',
            props:    'laptop, notebook, coffee cup, plants',
            mood:     'professional, focused, modern, aspirational',
        },
    };

    const s = scenes[category] || scenes.general;

    return (
        `Professional corporate lifestyle photography for a job posting: ` +
        `${s.subject}, ` +
        `set in ${s.setting}, ` +
        `visible props: ${s.props}, ` +
        `mood: ${s.mood}, ` +
        `diverse and inclusive representation with authentic expressions, ` +
        `natural window light with soft studio fill, shallow depth of field, ` +
        `shot on Sony A7R V with 85mm f/1.4 lens, photorealistic, crisp 8K resolution, ` +
        `high-end corporate lifestyle photography, clean composition, aspirational but approachable, ` +
        `no text overlays, no logos, no watermarks ` +
        `--ar 16:9 --style raw --v 6`
    );
}
