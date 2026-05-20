// =============================================
// Recruiter Boolean Search Generator
// =============================================

// === Keyword Dictionaries for Extraction ===
const SKILL_KEYWORDS = [
    // Programming Languages
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Kotlin', 'C#', 'C++', 'Go', 'Golang', 'Rust',
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
    // Windows & Microsoft Ecosystem
    'Windows', 'Windows Server', 'Windows 10', 'Windows 11',
    'Active Directory', 'Azure AD', 'Entra ID', 'Group Policy', 'SCCM', 'Intune', 'WSUS',
    'RDP', 'Remote Desktop', 'Terminalserver',
    'VPN', 'DHCP', 'DNS', 'TCP/IP', 'WLAN', 'LAN',
    'SharePoint', 'Microsoft Teams', 'MS Teams', 'OneDrive',
    'Microsoft 365', 'Office 365', 'MS Office',
    'Exchange', 'Exchange Server', 'Outlook',
    // IT Support & Operations
    'ITSM', 'Service Desk', 'Helpdesk', 'Ticketsystem', 'ServiceNow',
    'Workplace Management', 'Asset Management', 'CMDB',
    'Druckermanagement', 'Telematik', 'Konnektoren',
    'Fachinformatiker', 'Systemintegration',
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
    // German IT Operations & Support
    'Fachinformatiker Systemintegration', 'Fachinformatiker Anwendungsentwicklung',
    'Systemadministrator', 'IT-Administrator', 'IT Administrator',
    'IT Support Spezialist', 'IT-Support Spezialist', 'IT Techniker', 'IT-Techniker',
    'Helpdesk Technician', 'IT Helpdesk', 'Service Desk Analyst',
    'Field Service Technician', 'Field Technician', 'Onsite Technician',
    'Workplace Engineer', 'Workplace Specialist', 'Anwendungsbetreuer', 'Anwendungsmanager',
    'Netzwerkadministrator', 'Netzwerktechniker', 'IT-Betreuer',
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
    initGenerator();
    initBuilder();
    initAgent();
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

    // Signals that are section headers → propagate nice zone to all following lines
    const ZONE_SECTION_SIGNALS = [
        'nice to have', 'nice-to-have', 'von vorteil', 'wünschenswert',
        'gerne gesehen', 'nicht zwingend',
    ];
    // Signals that are inline qualifiers → only mark THIS line as nice
    const ZONE_INLINE_SIGNALS = [
        'idealerweise', 'optional', 'bevorzugt', 'preferred',
        'desired', 'a plus', 'bonus', 'advantageous', 'zusätzlich',
    ];

    lines.forEach((line, i) => {
        const lowerLine = line.toLowerCase();
        const stripped = lowerLine.replace(/^[\s•\-*]+/, '').trim();

        // Reset zone on must-have section headers
        if (stripped.match(/^(anforderungen|requirements|must.have|voraussetzungen|qualifikationen|what you.ll bring|dein profil|ihr profil|was du mitbringst|fachliche anforderungen|zwingend erforderlich)/i)) {
            niceToHaveZone = false;
        }

        const isSectionHeader = (
            ZONE_SECTION_SIGNALS.some(s => lowerLine.includes(s)) ||
            // Line ends with ":" and contains an inline signal → acts as section header for items below
            (stripped.endsWith(':') && ZONE_INLINE_SIGNALS.some(s => lowerLine.includes(s)))
        );

        if (isSectionHeader) {
            niceToHaveZone = true;
            niceToHaveLines.add(i);
        } else if (ZONE_INLINE_SIGNALS.some(s => lowerLine.includes(s))) {
            // Inline qualifier: only this line is nice-to-have, zone doesn't propagate
            niceToHaveLines.add(i);
        }

        if (niceToHaveZone) {
            niceToHaveLines.add(i);
        }
    });

    // Extract titles
    TITLE_PATTERNS.forEach(title => {
        const regex = new RegExp(`(?<![A-Za-zÀ-öø-ÿ0-9])${escapeRegex(title)}(?![A-Za-zÀ-öø-ÿ0-9])`, 'i');
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
        const regex = new RegExp(`(?<![A-Za-zÀ-öø-ÿ0-9])${escapeRegex(skill)}(?![A-Za-zÀ-öø-ÿ0-9])`, 'i');
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
        const regex = new RegExp(`(?<![A-Za-zÀ-öø-ÿ0-9])${escapeRegex(loc)}(?![A-Za-zÀ-öø-ÿ0-9])`, 'i');
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

function skillScore(skill) {
    const generic = new Set([
        'REST', 'RESTful', 'API', 'WebSocket', 'gRPC', 'GraphQL',
        'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SVN',
        'SQL', 'HTML', 'CSS', 'HTML5', 'CSS3', 'JSON', 'Sass', 'SCSS', 'LESS',
        'Agile', 'Scrum', 'Kanban', 'OKR', 'Lean', 'TDD', 'BDD',
        'Linux', 'Unix', 'Shell', 'Bash', 'DevOps', 'CI/CD',
        'B2B', 'B2C', 'SaaS', 'CRM', 'ERP', 'QA',
        'SEO', 'SEA', 'SEM', 'Recruiting', 'HR',
    ]);
    const verySpecific = new Set([
        'Kubernetes', 'K8s', 'Terraform', 'Ansible', 'Helm', 'Pulumi',
        'Spring Boot', 'NestJS', 'FastAPI', 'Django', 'Flask', 'Rails', 'Ruby on Rails',
        'TensorFlow', 'PyTorch', 'scikit-learn', 'Keras',
        'Apache Kafka', 'Kafka', 'Apache Spark', 'Airflow', 'Databricks', 'Snowflake',
        'Elasticsearch', 'Cassandra', 'Neo4j', 'DynamoDB', 'Supabase',
        'React Native', 'Flutter', 'SwiftUI', 'Jetpack Compose',
        'Salesforce', 'SAP', 'ABAP', 'SuccessFactors', 'Workday', 'Personio',
        'Solidity', 'Blockchain', 'COBOL', 'RTOS', 'ROS', 'Embedded',
        'AWS', 'Amazon Web Services', 'Azure', 'GCP', 'Google Cloud',
        'Kotlin', 'Swift', 'Golang', 'Go', 'Rust', 'Scala', 'Elixir',
        'C++', 'C#', 'TypeScript', 'Python', 'Java', 'PHP', 'Ruby',
        'React', 'Angular', 'Vue', 'Vue.js', 'Next.js', 'Nuxt', 'Svelte',
        'Node.js', 'Express', 'Hibernate', '.NET', 'ASP.NET', '.NET Core',
        'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Oracle', 'MS SQL', 'MariaDB',
        'Docker', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI',
        'Figma', 'Adobe XD', 'Sketch',
        'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Science',
    ]);
    if (verySpecific.has(skill)) return 2;
    if (generic.has(skill)) return 0;
    return 1;
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

    // Sort must-haves by specificity, cap AND conditions to avoid zero results
    const maxMust = (currentPlatform === 'linkedin' || currentPlatform === 'xing') ? 3 : 5;
    const sortedMust = [...extracted.mustSkills].sort((a, b) => skillScore(b) - skillScore(a));
    const coreSkills = sortedMust.slice(0, maxMust);
    const overflowSkills = sortedMust.slice(maxMust);

    // Core skills as AND conditions
    coreSkills.forEach(skill => {
        parts.push(quote(skill));
    });

    // Overflow must-haves + nice-to-haves → OR group (broadens instead of narrowing)
    const allNice = [...overflowSkills, ...extracted.niceSkills];
    if (allNice.length > 0) {
        parts.push(orGroup(allNice));
    }

    // Locations
    if (extracted.locations.length > 0) {
        parts.push(orGroup(extracted.locations));
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
// AI RECRUITING AGENT
// =============================================

const AGENT_SYSTEM_PROMPT = `You are an expert AI Recruiting Assistant embedded in the Recruiter AI Kit tool. You have deep expertise in talent acquisition, technical recruiting, Boolean search, sourcing, and hiring best practices.

Your core capabilities:
1. **Boolean Search Strings**: Generate optimized Boolean search strings for LinkedIn, Google X-Ray, GitHub, and XING. Use proper operators: AND, OR, NOT, quotes for exact phrases, parentheses for grouping. Always put the Boolean string inside a code block so it can be copied easily.
2. **Outreach Messages**: Write personalized, compelling InMail messages and cold emails that get high response rates. Include [PLACEHOLDER] markers for customization.
3. **Interview Questions**: Generate targeted, role-specific question sets grouped by category: Technical, Behavioral, Culture Fit, and Role-Specific.
4. **Job Postings**: Write attractive, inclusive job descriptions that attract top talent. Avoid jargon and focus on impact and growth.
5. **Candidate Screening**: Analyze resumes and candidate profiles against job requirements. Provide a structured evaluation with strengths, gaps, and a recommendation.
6. **Recruiting Strategy**: Give tactical, actionable advice on sourcing, pipeline management, employer branding, and hiring process optimization.

Guidelines:
- Be concise and actionable. Recruiters are busy professionals.
- For Boolean strings, ALWAYS wrap them in a code block (\`\`\`) for easy copying.
- For outreach messages, provide complete, ready-to-use templates.
- For interview questions, organize them clearly by category with 3-5 questions each.
- Always ask for clarification if the role or context is unclear.
- When you don't know something, say so honestly.`;

const AGENT_QUICK_PROMPTS = {
    boolean: 'Ich brauche einen Boolean-Suchstring für eine Stelle. Füge bitte die Stellenbeschreibung unten ein – ich erstelle daraus eine optimierte Suche für LinkedIn, Google X-Ray und GitHub.\n\nStellenbeschreibung:',
    outreach: 'Ich möchte eine personalisierte Outreach-/InMail-Nachricht schreiben. Bitte teile mir mit:\n1. Die Stelle, für die du recruitest\n2. Wichtige Vorteile (Unternehmen, Team, Wachstum, Gehalt)\n3. Infos zum Zielkandidaten (optional)\n\nStelle, für die ich recruite:',
    interview: 'Ich benötige einen umfassenden Interviewfragen-Katalog. Bitte nenne mir Jobtitel und Kernanforderungen – ich generiere Fragen zu Fachkompetenz, Verhalten, Kulturfit und rollenspezifischen Themen.\n\nRolle und Kernanforderungen:',
    jobpost: 'Ich brauche Hilfe beim Verfassen einer überzeugenden Stellenausschreibung. Bitte angeben:\n- Jobtitel\n- Unternehmensname & Kultur\n- Hauptaufgaben (3–5 Punkte)\n- Benötigte Skills/Erfahrung\n\nLegen wir los – Jobtitel und Unternehmen:',
    screen: 'Ich möchte einen Kandidaten für eine Stelle prüfen. Bitte stelle bereit:\n1. Die Stellenanforderungen\n2. Das Profil oder den Lebenslauf des Kandidaten\n\nIch liefere eine strukturierte Bewertung mit Stärken, Lücken und Empfehlung.\n\nStelleanforderungen:',
    strategy: 'Ich kann bei Recruiting-Strategie und Sourcing-Best-Practices helfen. Welche Herausforderung hast du? Zum Beispiel:\n- „Wie finde ich passive Kandidaten für [Rolle]?"\n- „Wie verbessere ich meine InMail-Antwortrate?"\n- „Was ist der beste Ansatz, um [Rolle] schnell zu besetzen?"\n\nDeine Frage:',
};

const agentState = {
    messages: [],
    isLoading: false,
    apiKey: '',
    model: 'claude-sonnet-4-6',
};

function initAgent() {
    // Vorkonfigurierter Firmen-Key hat Vorrang vor localStorage
    const preconfigured = window.ANTHROPIC_CONFIG?.apiKey || '';
    agentState.apiKey = preconfigured || localStorage.getItem('anthropicApiKey') || '';
    agentState.model = window.ANTHROPIC_CONFIG?.model || localStorage.getItem('agentModel') || 'claude-sonnet-4-6';

    const apiKeyInput = document.getElementById('apiKeyInput');
    const modelSelect = document.getElementById('modelSelect');
    if (apiKeyInput) apiKeyInput.value = agentState.apiKey;
    if (modelSelect) modelSelect.value = agentState.model;

    // Setup-Panel ausblenden wenn Key bereits hinterlegt ist
    if (preconfigured) {
        const setupCard = document.querySelector('.agent-setup-card');
        if (setupCard) setupCard.style.display = 'none';
    }

    updateAgentSetupStatus();

    // Setup panel toggle
    document.getElementById('agentSetupToggle').addEventListener('click', () => {
        const body = document.getElementById('agentSetupBody');
        const chevron = document.getElementById('toggleSetupBtn');
        const collapsed = body.classList.toggle('collapsed');
        chevron.textContent = collapsed ? '▼' : '▲';
    });

    // API key management
    document.getElementById('saveApiKeyBtn').addEventListener('click', () => {
        const key = apiKeyInput.value.trim();
        agentState.apiKey = key;
        if (key) {
            localStorage.setItem('anthropicApiKey', key);
        } else {
            localStorage.removeItem('anthropicApiKey');
        }
        updateAgentSetupStatus();
        agentShowToast(key ? 'API-Key gespeichert!' : 'API-Key gelöscht.');
    });

    document.getElementById('clearApiKeyBtn').addEventListener('click', () => {
        apiKeyInput.value = '';
        agentState.apiKey = '';
        localStorage.removeItem('anthropicApiKey');
        updateAgentSetupStatus();
        agentShowToast('API-Key gelöscht.');
    });

    modelSelect.addEventListener('change', (e) => {
        agentState.model = e.target.value;
        localStorage.setItem('agentModel', agentState.model);
    });

    // Quick action buttons
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const prompt = AGENT_QUICK_PROMPTS[btn.dataset.action];
            if (!prompt) return;
            const input = document.getElementById('agentInput');
            input.value = prompt;
            updateCharCounter();
            input.focus();
            document.getElementById('agentMessages').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Chat input
    const agentInput = document.getElementById('agentInput');
    agentInput.addEventListener('input', updateCharCounter);
    agentInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAgentSend();
        }
    });

    document.getElementById('agentSendBtn').addEventListener('click', handleAgentSend);

    document.getElementById('resetChatBtn').addEventListener('click', () => {
        agentState.messages = [];
        document.getElementById('agentMessages').innerHTML = buildWelcomeMessageHTML();
    });
}

function updateAgentSetupStatus() {
    const el = document.getElementById('setupStatus');
    if (!el) return;
    if (agentState.apiKey) {
        el.textContent = 'Konfiguriert ✓';
        el.className = 'setup-status configured';
    } else {
        el.textContent = 'API-Key erforderlich';
        el.className = 'setup-status not-configured';
    }
}

function updateCharCounter() {
    const input = document.getElementById('agentInput');
    const counter = document.getElementById('charCounter');
    if (counter) counter.textContent = input.value.length;
}

async function handleAgentSend() {
    const input = document.getElementById('agentInput');
    const text = input.value.trim();
    if (!text || agentState.isLoading) return;

    if (!agentState.apiKey) {
        agentAppendError('Bitte trage deinen Anthropic-API-Key im Bereich „Agent-Einrichtung" ein, um den KI-Assistenten zu nutzen.');
        return;
    }

    input.value = '';
    updateCharCounter();

    agentState.messages.push({ role: 'user', content: text });
    agentAppendUserMessage(text);
    setAgentLoading(true);

    try {
        const reply = await callClaudeAPI(agentState.messages);
        agentState.messages.push({ role: 'assistant', content: reply });
        agentAppendAssistantMessage(reply);
    } catch (err) {
        agentAppendError('Fehler bei der Kommunikation mit Claude: ' + err.message);
        agentState.messages.pop();
    } finally {
        setAgentLoading(false);
    }
}

async function callClaudeAPI(messages) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'x-api-key': agentState.apiKey,
            'anthropic-version': '2023-06-01',
            'content-type': 'application/json',
            'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
            model: agentState.model,
            max_tokens: 2048,
            system: AGENT_SYSTEM_PROMPT,
            messages,
        }),
    });

    if (!res.ok) {
        let errMsg = `HTTP ${res.status}`;
        try {
            const body = await res.json();
            errMsg = body.error?.message || errMsg;
        } catch (_) {}
        throw new Error(errMsg);
    }

    const data = await res.json();
    return data.content[0].text;
}

// ---- Message Rendering ----

function agentAppendUserMessage(text) {
    const container = document.getElementById('agentMessages');
    const div = document.createElement('div');
    div.className = 'agent-message user-message';
    div.innerHTML = `
        <div class="message-content user-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>
        <div class="user-avatar">Du</div>
    `;
    container.appendChild(div);
    agentScrollToBottom();
}

function agentAppendAssistantMessage(text) {
    const container = document.getElementById('agentMessages');
    const div = document.createElement('div');
    div.className = 'agent-message assistant-message';

    const rendered = renderAgentMarkdown(text);
    const booleanStr = extractBooleanFromResponse(text);

    div.innerHTML = `
        <div class="agent-avatar">AI</div>
        <div class="message-content">
            ${rendered}
            <div class="message-actions">
                <button class="msg-action-btn copy-msg-btn">Antwort kopieren</button>
                ${booleanStr ? `<button class="msg-action-btn send-to-gen-btn">&#128269; An Generator senden</button>` : ''}
            </div>
        </div>
    `;

    div.querySelector('.copy-msg-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(text).then(() => agentShowToast('In die Zwischenablage kopiert!'));
    });

    if (booleanStr) {
        div.querySelector('.send-to-gen-btn').addEventListener('click', () => {
            sendBooleanToGenerator(booleanStr);
        });
    }

    container.appendChild(div);
    agentScrollToBottom();
}

function agentAppendError(msg) {
    const container = document.getElementById('agentMessages');
    const div = document.createElement('div');
    div.className = 'agent-error-msg';
    div.textContent = msg;
    container.appendChild(div);
    agentScrollToBottom();
}

function setAgentLoading(loading) {
    agentState.isLoading = loading;
    const typing = document.getElementById('agentTyping');
    const btn = document.getElementById('agentSendBtn');
    const input = document.getElementById('agentInput');
    typing.style.display = loading ? 'flex' : 'none';
    btn.disabled = loading;
    input.disabled = loading;
    if (loading) agentScrollToBottom();
}

function agentScrollToBottom() {
    const el = document.getElementById('agentMessages');
    setTimeout(() => { el.scrollTop = el.scrollHeight; }, 50);
}

function agentShowToast(msg) {
    const toast = document.getElementById('copyToast');
    const original = toast.textContent;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.textContent = original;
    }, 2000);
}

function sendBooleanToGenerator(query) {
    // Switch to generator tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector('[data-tab="generator"]').classList.add('active');
    document.getElementById('tab-generator').classList.add('active');

    // Populate result box
    currentQuery = query;
    document.getElementById('platformSection').style.display = 'block';
    document.getElementById('searchLinksSection').style.display = 'block';
    document.getElementById('resultBox').innerHTML = highlightBoolean(query);
    updateSearchLinks(query);
    saveToHistory(query);

    document.getElementById('resultBox').scrollIntoView({ behavior: 'smooth', block: 'center' });
    agentShowToast('Boolean-String an Generator gesendet!');
}

// ---- Markdown Renderer ----

function renderAgentMarkdown(rawText) {
    const codeBlocks = [];

    // Extract code blocks
    const withPlaceholders = rawText.replace(/```(?:\w+)?\n?([\s\S]*?)```/g, (_, code) => {
        const i = codeBlocks.length;
        codeBlocks.push(code.trim());
        return `\x01CODE${i}\x01`;
    });

    const lines = withPlaceholders.split('\n');
    const output = [];
    const listBuffer = [];

    function flushList() {
        if (listBuffer.length > 0) {
            output.push(`<ul class="agent-list">${listBuffer.splice(0).join('')}</ul>`);
        }
    }

    for (const rawLine of lines) {
        const line = rawLine.trim();

        // Code block placeholder
        const codeMatch = line.match(/^\x01CODE(\d+)\x01$/);
        if (codeMatch) {
            flushList();
            const idx = parseInt(codeMatch[1]);
            output.push(`<pre class="agent-code"><code>${escapeHtml(codeBlocks[idx])}</code></pre>`);
            continue;
        }

        // Empty line
        if (!line) {
            flushList();
            continue;
        }

        // Header
        const hMatch = line.match(/^(#{1,4}) (.*)/);
        if (hMatch) {
            flushList();
            const lvl = Math.min(hMatch[1].length + 1, 6);
            output.push(`<h${lvl} class="agent-h">${agentFormatInline(escapeHtml(hMatch[2]))}</h${lvl}>`);
            continue;
        }

        // List item
        const liMatch = line.match(/^(?:[\-\*•]|\d+[\.\)]) (.*)/);
        if (liMatch) {
            listBuffer.push(`<li>${agentFormatInline(escapeHtml(liMatch[1]))}</li>`);
            continue;
        }

        // Regular paragraph line
        flushList();
        output.push(`<p>${agentFormatInline(escapeHtml(line))}</p>`);
    }

    flushList();
    return output.join('\n');
}

function agentFormatInline(text) {
    return text
        .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
        .replace(/`([^`\n]+)`/g, '<code class="inline-code">$1</code>');
}

function extractBooleanFromResponse(text) {
    const codeMatches = [...text.matchAll(/```(?:\w+)?\n?([\s\S]*?)```/g)];
    for (const m of codeMatches) {
        const code = m[1].trim();
        if (looksLikeBoolean(code)) return code;
    }
    return null;
}

function looksLikeBoolean(str) {
    return str.length < 600 && / AND | OR | NOT |site:/i.test(str);
}

function buildWelcomeMessageHTML() {
    return `<div class="agent-message assistant-message">
        <div class="agent-avatar">KI</div>
        <div class="message-content">
            <p>Hallo! Ich bin dein KI-Recruiting-Assistent, angetrieben von Claude. Ich helfe dir bei:</p>
            <ul class="agent-list">
                <li>Boolean-Suchstrings aus Stellenbeschreibungen generieren</li>
                <li>Personalisierte InMail- &amp; Outreach-Nachrichten schreiben</li>
                <li>Gezielte Interviewfragen-Sets erstellen</li>
                <li>Überzeugende Stellenausschreibungen verfassen</li>
                <li>Kandidatenprofile sichten und bewerten</li>
                <li>Sourcing- &amp; Recruiting-Strategie beraten</li>
            </ul>
            <p>Nutze die Schnellaktionen oben oder tippe deine Frage unten ein!</p>
        </div>
    </div>`;
}
