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
// REGEL-BASIERTER RECRUITING-ASSISTENT
// =============================================

const ROLE_KB = {
    java: {
        titles: ['Java Developer', 'Java Engineer', 'Software Engineer', 'Backend Developer', 'Java Entwickler'],
        mustSkills: ['Java'],
        niceSkills: ['Spring Boot', 'Maven', 'Microservices', 'REST', 'SQL', 'Docker', 'Git'],
        seniorNiceSkills: ['Kubernetes', 'AWS', 'Kafka', 'DDD', 'Architecture', 'Azure'],
        platforms: ['LinkedIn', 'GitHub', 'XING'],
        salary: '55.000 – 95.000 € (Senior bis 115.000 €)',
        tip: 'Java-Entwickler sind aktiv auf GitHub und Stack Overflow. Suche nach Open-Source-Contributions.',
    },
    python: {
        titles: ['Python Developer', 'Python Engineer', 'Software Engineer', 'Backend Developer'],
        mustSkills: ['Python'],
        niceSkills: ['Django', 'FastAPI', 'Flask', 'SQL', 'PostgreSQL', 'Docker', 'Git'],
        seniorNiceSkills: ['Kubernetes', 'AWS', 'Machine Learning', 'TensorFlow', 'Airflow'],
        platforms: ['LinkedIn', 'GitHub', 'Kaggle'],
        salary: '55.000 – 95.000 €',
        tip: 'Python-Profile sind auf GitHub und Kaggle stark vertreten. Kaggle-Notebooks zeigen praktische Datenkompetenz.',
    },
    frontend: {
        titles: ['Frontend Developer', 'Frontend Engineer', 'Web Developer', 'React Developer', 'UI Developer'],
        mustSkills: ['JavaScript', 'HTML', 'CSS'],
        niceSkills: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Figma', 'Git'],
        seniorNiceSkills: ['Performance Optimization', 'Accessibility', 'Design Systems', 'GraphQL'],
        platforms: ['LinkedIn', 'GitHub', 'Dribbble'],
        salary: '48.000 – 88.000 €',
        tip: 'Frontend-Entwickler zeigen ihre Arbeit auf GitHub Pages, CodePen oder eigenen Portfolios.',
    },
    fullstack: {
        titles: ['Full Stack Developer', 'Fullstack Developer', 'Fullstack Engineer', 'Software Engineer'],
        mustSkills: ['JavaScript'],
        niceSkills: ['React', 'Node.js', 'TypeScript', 'SQL', 'Docker', 'HTML', 'CSS', 'Git'],
        seniorNiceSkills: ['AWS', 'Kubernetes', 'GraphQL', 'Next.js', 'Architecture'],
        platforms: ['LinkedIn', 'GitHub'],
        salary: '55.000 – 95.000 €',
        tip: 'Full-Stack-Profile haben typischerweise sowohl Frontend- als auch Backend-Projekte auf GitHub.',
    },
    backend: {
        titles: ['Backend Developer', 'Backend Engineer', 'Software Engineer'],
        mustSkills: ['REST', 'SQL'],
        niceSkills: ['Java', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'Microservices', 'Git'],
        seniorNiceSkills: ['Kubernetes', 'AWS', 'Kafka', 'Architecture'],
        platforms: ['LinkedIn', 'GitHub'],
        salary: '55.000 – 95.000 €',
        tip: 'Backend-Entwickler sind auf GitHub mit serverseitigen Projekten aktiv.',
    },
    devops: {
        titles: ['DevOps Engineer', 'Site Reliability Engineer', 'SRE', 'Platform Engineer', 'Cloud Engineer'],
        mustSkills: ['CI/CD', 'Linux'],
        niceSkills: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'Jenkins', 'Ansible'],
        seniorNiceSkills: ['Helm', 'Prometheus', 'Grafana', 'Security', 'FinOps'],
        platforms: ['LinkedIn', 'GitHub'],
        salary: '65.000 – 105.000 €',
        tip: 'DevOps-Engineers haben IaC-Repositories auf GitHub. Suche nach Terraform- und Kubernetes-Projekten.',
    },
    data: {
        titles: ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'ML Engineer', 'Data Engineer'],
        mustSkills: ['Python', 'SQL'],
        niceSkills: ['Machine Learning', 'TensorFlow', 'PyTorch', 'Pandas', 'Spark', 'Tableau', 'Power BI'],
        seniorNiceSkills: ['Databricks', 'Snowflake', 'Airflow', 'MLOps', 'Deep Learning', 'NLP'],
        platforms: ['LinkedIn', 'GitHub', 'Kaggle'],
        salary: '58.000 – 100.000 €',
        tip: 'Data Scientists sind auf Kaggle in Wettbewerben aktiv. Öffentliche Notebooks zeigen echte Kompetenz.',
    },
    mobile: {
        titles: ['iOS Developer', 'Android Developer', 'Mobile Developer', 'Flutter Developer', 'React Native Developer'],
        mustSkills: ['Swift', 'Kotlin'],
        niceSkills: ['SwiftUI', 'Jetpack Compose', 'React Native', 'Flutter', 'Git', 'REST'],
        seniorNiceSkills: ['Architecture', 'CI/CD', 'Testing', 'App Store Optimization'],
        platforms: ['LinkedIn', 'GitHub'],
        salary: '58.000 – 95.000 €',
        tip: 'Mobile Developer haben oft Apps im App Store oder Play Store. Suche direkt nach den App-Namen.',
    },
    product: {
        titles: ['Product Manager', 'Senior Product Manager', 'Product Owner', 'Technical Product Manager'],
        mustSkills: ['Agile', 'Scrum'],
        niceSkills: ['Jira', 'Confluence', 'OKR', 'Stakeholder Management', 'User Research', 'Roadmap'],
        seniorNiceSkills: ['Strategy', 'Data Analysis', 'B2B', 'SaaS', 'Go-to-Market', 'P&L'],
        platforms: ['LinkedIn', 'XING'],
        salary: '65.000 – 110.000 €',
        tip: 'Product Manager schreiben oft auf LinkedIn über PM-Themen. Engagement in PM-Communities ist ein gutes Signal.',
    },
    ux: {
        titles: ['UX Designer', 'UI Designer', 'Product Designer', 'UX/UI Designer', 'Interaction Designer'],
        mustSkills: ['Figma'],
        niceSkills: ['Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Wireframing', 'Design System'],
        seniorNiceSkills: ['Design Thinking', 'Usability Testing', 'Accessibility', 'Motion Design'],
        platforms: ['LinkedIn', 'Dribbble', 'Behance'],
        salary: '48.000 – 85.000 €',
        tip: 'Designer haben Portfolios auf Dribbble oder Behance. Google X-Ray auf diese Plattformen funktioniert sehr gut.',
    },
    hr: {
        titles: ['HR Manager', 'HR Business Partner', 'People Manager', 'Personalreferent', 'Head of People'],
        mustSkills: ['Personalmanagement'],
        niceSkills: ['Recruiting', 'Employer Branding', 'Arbeitsrecht', 'Personio', 'Workday', 'SAP HR'],
        seniorNiceSkills: ['Organizational Development', 'Change Management', 'HR Strategy', 'Compensation'],
        platforms: ['LinkedIn', 'XING'],
        salary: '45.000 – 85.000 €',
        tip: 'HR-Fachleute sind sehr aktiv auf LinkedIn und XING. HR-Gruppen eignen sich gut für passives Sourcing.',
    },
    sales: {
        titles: ['Sales Manager', 'Account Executive', 'Key Account Manager', 'Vertriebsleiter', 'Sales Director'],
        mustSkills: ['B2B'],
        niceSkills: ['Salesforce', 'CRM', 'SaaS', 'Lead Generation', 'Verhandlung', 'Account Management'],
        seniorNiceSkills: ['Enterprise Sales', 'Team Leadership', 'Revenue Growth', 'Go-to-Market'],
        platforms: ['LinkedIn', 'XING'],
        salary: '50.000 – 100.000 € fix + variabel',
        tip: 'Sales-Profile mit hohen Verbindungszahlen auf LinkedIn sind aktive Networker – oft offen für Kontakte.',
    },
    marketing: {
        titles: ['Marketing Manager', 'Digital Marketing Manager', 'Online Marketing Manager', 'Growth Manager'],
        mustSkills: ['Digital Marketing'],
        niceSkills: ['SEO', 'SEA', 'Google Analytics', 'HubSpot', 'Content Marketing', 'Social Media'],
        seniorNiceSkills: ['Marketing Automation', 'Performance Marketing', 'Brand Strategy', 'Demand Generation'],
        platforms: ['LinkedIn', 'XING'],
        salary: '45.000 – 80.000 €',
        tip: 'Marketing-Fachleute zeigen Zertifikate (Google, HubSpot) auf LinkedIn. Filterung nach Badges ist effektiv.',
    },
    scrum: {
        titles: ['Scrum Master', 'Agile Coach', 'Agile Delivery Manager'],
        mustSkills: ['Scrum', 'Agile'],
        niceSkills: ['Kanban', 'SAFe', 'Jira', 'Confluence', 'Facilitation', 'Coaching'],
        seniorNiceSkills: ['Organizational Transformation', 'PI Planning', 'Training', 'Culture Change'],
        platforms: ['LinkedIn', 'XING'],
        salary: '60.000 – 100.000 €',
        tip: 'Scrum Masters haben Zertifizierungen (PSM, CSM) auf LinkedIn. Filterung nach Zertifikaten sehr wirksam.',
    },
    security: {
        titles: ['Security Engineer', 'Cybersecurity Analyst', 'Penetration Tester', 'Information Security Specialist'],
        mustSkills: ['Cybersecurity'],
        niceSkills: ['SIEM', 'SOC', 'OWASP', 'Penetration Testing', 'ISO 27001', 'Encryption', 'Linux'],
        seniorNiceSkills: ['Zero Trust', 'Cloud Security', 'Incident Response', 'Red Team', 'GRC'],
        platforms: ['LinkedIn', 'GitHub'],
        salary: '60.000 – 105.000 €',
        tip: 'Security-Experten sind in Communities wie OWASP Germany und BSI aktiv. CTF-Wettbewerbe sind ein gutes Recherchesignal.',
    },
    it_support: {
        titles: ['Fachinformatiker Systemintegration', 'IT-Administrator', 'Systemadministrator', 'IT Support Spezialist', 'Helpdesk Technician'],
        mustSkills: ['ITIL', 'Windows'],
        niceSkills: ['Active Directory', 'Windows Server', 'VPN', 'SharePoint', 'Microsoft Teams', 'RDP'],
        seniorNiceSkills: ['Azure AD', 'Intune', 'SCCM', 'PowerShell', 'Exchange', 'Virtualisierung'],
        platforms: ['LinkedIn', 'XING'],
        salary: '35.000 – 55.000 €',
        tip: 'IT-Support-Profile sind besonders stark auf XING vertreten. Für diese Zielgruppe ist XING oft effektiver als LinkedIn.',
    },
    cloud: {
        titles: ['Cloud Architect', 'Cloud Engineer', 'Solutions Architect', 'AWS Architect', 'Azure Architect'],
        mustSkills: ['AWS', 'Cloud'],
        niceSkills: ['Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD', 'Linux'],
        seniorNiceSkills: ['FinOps', 'Multi-Cloud', 'Security', 'Architecture', 'Cost Optimization'],
        platforms: ['LinkedIn', 'GitHub'],
        salary: '80.000 – 130.000 €',
        tip: 'Cloud-Architekten haben AWS/Azure-Zertifikate auf LinkedIn. Filtere gezielt nach diesen Zertifizierungen.',
    },
};

function detectRoleFromText(text) {
    const t = text.toLowerCase();
    if (/\bjava\b/.test(t) && !/javascript/.test(t)) return 'java';
    if (/\bpython\b/.test(t)) return 'python';
    if (/\b(react|angular|vue|frontend|front.end|ui developer|react developer)\b/.test(t)) return 'frontend';
    if (/\b(fullstack|full.stack|full stack)\b/.test(t)) return 'fullstack';
    if (/\b(javascript|typescript)\b/.test(t) && !/fullstack|full.stack/.test(t)) return 'frontend';
    if (/\bbackend\b/.test(t)) return 'backend';
    if (/\b(devops|sre|platform eng|cloud eng|site reliability)\b/.test(t)) return 'devops';
    if (/\b(data sci|ml eng|machine learn|data eng|data anal|datascien)\b/.test(t)) return 'data';
    if (/\b(ios|android|mobile dev|flutter|react native)\b/.test(t)) return 'mobile';
    if (/\b(product manager|product owner|\bpm\b|\bpo\b)\b/.test(t)) return 'product';
    if (/\b(ux|ui design|product design|user experi|interaction design)\b/.test(t)) return 'ux';
    if (/\b(hr manager|hr business|personalref|people manager|head of people|personalabt)\b/.test(t)) return 'hr';
    if (/\b(sales manager|vertrieb|account exec|key account|sales director)\b/.test(t)) return 'sales';
    if (/\b(marketing manager|online marketing|digital marketing|growth manager|seo manager)\b/.test(t)) return 'marketing';
    if (/\b(scrum master|agile coach|agile delivery)\b/.test(t)) return 'scrum';
    if (/\b(security eng|cybersec|penetration|soc analyst|ciso)\b/.test(t)) return 'security';
    if (/\b(fachinformatiker|systemadmin|it.?support|helpdesk|workplace eng|it.?admin)\b/.test(t)) return 'it_support';
    if (/\b(cloud arch|aws arch|azure arch|solutions arch)\b/.test(t)) return 'cloud';
    if (/\b(aws|azure|gcp)\b/.test(t) && /\b(arch|engineer|specialist)\b/.test(t)) return 'cloud';
    return null;
}

function detectSeniority(text) {
    const t = text.toLowerCase();
    if (/\b(junior|jr\.|entry.level|berufseinsteiger|absolvent|graduate|anfänger)\b/.test(t)) return 'junior';
    if (/\b(senior|sr\.|lead|principal|staff|expert|erfahren)\b/.test(t)) return 'senior';
    if (/\b(manager|director|vp|chief|leiter|head)\b/.test(t)) return 'manager';
    return 'mid';
}

function detectPlatform(text) {
    const t = text.toLowerCase();
    if (/\b(google|x.?ray|site:)\b/.test(t)) return 'google';
    if (/\bgithub\b/.test(t)) return 'github';
    if (/\bxing\b/.test(t)) return 'xing';
    return 'linkedin';
}

function buildBooleanFromRole(roleKey, seniority, platform) {
    const role = ROLE_KB[roleKey];
    if (!role) return null;

    let titles = [...role.titles];
    if (seniority === 'senior') {
        titles = [`Senior ${role.titles[0]}`, `Lead ${role.titles[0]}`, ...role.titles.slice(0, 3)];
    } else if (seniority === 'junior') {
        titles = [`Junior ${role.titles[0]}`, ...role.titles.slice(0, 3)];
    }

    const niceSkills = seniority === 'senior'
        ? [...role.niceSkills.slice(0, 3), ...(role.seniorNiceSkills || []).slice(0, 3)]
        : role.niceSkills.slice(0, 6);

    const and = platform === 'xing' ? ' UND ' : ' AND ';
    const not = platform === 'xing' ? ' NICHT ' : ' NOT ';
    const or = ' OR ';

    const titleGroup = `(${titles.map(t => `"${t}"`).join(or)})`;
    const must = role.mustSkills.map(s => s.includes(' ') ? `"${s}"` : s).join(and);
    const nice = niceSkills.length ? `(${niceSkills.map(s => s.includes(' ') ? `"${s}"` : s).join(or)})` : '';

    const parts = platform === 'google'
        ? ['site:linkedin.com/in', titleGroup]
        : platform === 'github'
            ? ['site:github.com', titleGroup]
            : [titleGroup];

    if (must) parts.push(must);
    if (nice) parts.push(nice);

    return parts.join(and) + not + '"Intern"' + not + '"Werkstudent"' + not + '"Praktikant"';
}

function detectIntent(t) {
    if (/\b(boolean|suchstring|search.?string|such.?für|kandidat.?find)\b/.test(t) ||
        /^(erstell|generi|bau|mach).*(boolean|suche?|string)/i.test(t) ||
        /^(ich suche|wir suchen|suche?).*(entwickler|manager|designer|ingenieur|analyst|spezialist)/i.test(t)) return 'boolean';
    if (/\b(outreach|anschreiben|inmail|nachricht.?schreib|kontaktier|kaltakquise|template)\b/.test(t)) return 'outreach';
    if (/\b(interview.?fragen?|vorstellungsgespräch|fragenkatalog)\b/.test(t)) return 'interview';
    if (/\b(stellenanzeige|stellenausschreibung|job.?posting|job.?ad)\b/.test(t)) return 'jobpost';
    if (/\b(screening|profil.?prüf|kandidat.?bewert|lebenslauf)\b/.test(t)) return 'screen';
    if (/\b(strategie|tipp|wo.?(finde|suche)|sourcing|active.?sourcing|passive.?kandidat)\b/.test(t)) return 'strategy';
    if (/\b(gehalt|salary|vergütung|compensation|lohn)\b/.test(t)) return 'salary';
    if (/\b(hilfe|help|was.?kann|wie.?nutze|anleitung|funktion)\b/.test(t)) return 'help';
    return 'unknown';
}

const agentState = {
    messages: [],
    isLoading: false,
    flow: null,
};

function initAgent() {
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            agentState.flow = action + '_ask_role';
            const welcome = getQuickActionWelcome(action);
            agentAppendAssistantMessage(welcome);
            document.getElementById('agentMessages').scrollIntoView({ behavior: 'smooth' });
            document.getElementById('agentInput').focus();
        });
    });

    const agentInput = document.getElementById('agentInput');
    agentInput.addEventListener('input', updateCharCounter);
    agentInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAgentSend(); }
    });

    document.getElementById('agentSendBtn').addEventListener('click', handleAgentSend);
    document.getElementById('resetChatBtn').addEventListener('click', () => {
        agentState.messages = [];
        agentState.flow = null;
        document.getElementById('agentMessages').innerHTML = buildWelcomeMessageHTML();
    });
}

function updateCharCounter() {
    const counter = document.getElementById('charCounter');
    if (counter) counter.textContent = document.getElementById('agentInput').value.length;
}

function handleAgentSend() {
    const input = document.getElementById('agentInput');
    const text = input.value.trim();
    if (!text || agentState.isLoading) return;

    input.value = '';
    updateCharCounter();
    agentState.messages.push({ role: 'user', content: text });
    agentAppendUserMessage(text);
    setAgentLoading(true);

    setTimeout(() => {
        try {
            const reply = ruleBasedResponse(text);
            agentState.messages.push({ role: 'assistant', content: reply });
            agentAppendAssistantMessage(reply);
        } catch (err) {
            agentAppendError('Fehler: ' + err.message);
        } finally {
            setAgentLoading(false);
        }
    }, 300 + Math.random() * 400);
}

function ruleBasedResponse(userMessage) {
    const msg = userMessage.trim();
    const lower = msg.toLowerCase();

    if (agentState.flow) {
        const flow = agentState.flow;
        agentState.flow = null;
        switch (flow) {
            case 'boolean_ask_role': return handleBooleanIntent(msg, lower);
            case 'outreach_ask_role': return handleOutreachIntent(msg, lower);
            case 'interview_ask_role': return handleInterviewIntent(msg, lower);
            case 'jobpost_ask_role': return handleJobpostIntent(msg, lower);
            case 'screen_ask_role': return handleScreenIntent(msg, lower);
            case 'strategy_ask_role': return handleStrategyIntent(msg, lower);
            case 'salary_ask_role': return handleSalaryIntent(lower);
        }
    }

    const intent = detectIntent(lower);
    switch (intent) {
        case 'boolean': return handleBooleanIntent(msg, lower);
        case 'outreach': return handleOutreachIntent(msg, lower);
        case 'interview': return handleInterviewIntent(msg, lower);
        case 'jobpost': return handleJobpostIntent(msg, lower);
        case 'screen': return handleScreenIntent(msg, lower);
        case 'strategy': return handleStrategyIntent(msg, lower);
        case 'salary': return handleSalaryIntent(lower);
        case 'help': return handleHelpResponse();
        default: return handleUnknownIntent(msg, lower);
    }
}

function getQuickActionWelcome(action) {
    const map = {
        boolean: `## 🔍 Boolean-Suche erstellen\n\nFür welche Stelle suchst du Kandidaten?\n\nNenne mir **Jobtitel** und optional Seniority oder Skills – ich generiere sofort einen optimierten Suchstring für LinkedIn, Google X-Ray, GitHub und XING.\n\n**Beispiele:**\n- "Senior Java Developer mit Kubernetes"\n- "UX Designer für mobile Apps"\n- "DevOps Engineer AWS"\n- "Fachinformatiker Systemintegration ITIL"`,
        outreach: `## ✉️ Outreach-Anschreiben\n\nFür welche **Rolle** möchtest du eine InMail-Nachricht schreiben?\n\nNenne mir Jobtitel und optional 1–2 Besonderheiten der Stelle.`,
        interview: `## 🎯 Interviewfragen erstellen\n\nFür welche **Rolle** soll ich einen Fragenkatalog erstellen?\n\nIch liefere Fragen zu Fachkompetenz, Verhalten, Kulturfit und rollenspezifischen Themen.`,
        jobpost: `## 📝 Stellenausschreibung\n\nFür welchen **Jobtitel** soll ich eine Vorlage erstellen?\n\nNenne mir Jobtitel und optional Unternehmenskontext.`,
        screen: `## 👤 Kandidaten-Screening\n\nFür welche **Rolle** soll ich eine Screening-Checkliste erstellen?\n\nNenne mir den Jobtitel.`,
        strategy: `## 💡 Sourcing-Strategie\n\nFür welche **Rolle oder Zielgruppe** brauchst du Tipps?\n\nIch gebe dir Plattformempfehlungen, Sourcing-Tipps und Gehaltsrahmen.`,
    };
    return map[action] || map.strategy;
}

function handleBooleanIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    if (!roleKey) {
        agentState.flow = 'boolean_ask_role';
        return `Ich habe keinen bekannten Jobtitel erkannt. Versuche es mit:\n- "Senior Java Developer"\n- "UX Designer"\n- "DevOps Engineer AWS"\n- "HR Manager"\n- "Fachinformatiker Systemintegration"\n\n**Für welche Stelle suchst du?**`;
    }
    const seniority = detectSeniority(lower);
    const platform = detectPlatform(lower);
    const role = ROLE_KB[roleKey];
    const boolStr = buildBooleanFromRole(roleKey, seniority, platform);

    return `## 🔍 Boolean-Suchstring: ${role.titles[0]}

**Plattform:** ${platform.charAt(0).toUpperCase() + platform.slice(1)} | **Seniority:** ${seniority}

\`\`\`
${boolStr}
\`\`\`

**Empfohlene Plattformen:** ${role.platforms.join(', ')}

**Sourcing-Tipp:** ${role.tip}

---
Varianten: *"Für Google X-Ray"*, *"Senior-Variante"*, *"XING-Version"*, *"Anschreiben dazu schreiben"*`;
}

function handleOutreachIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    if (!roleKey) {
        agentState.flow = 'outreach_ask_role';
        return `Für welche Rolle möchtest du eine Outreach-Nachricht schreiben? (z.B. "Java Developer", "DevOps Engineer", "HR Manager")`;
    }
    const role = ROLE_KB[roleKey];
    return `## ✉️ InMail-Vorlage: ${role.titles[0]}

---
Hallo [VORNAME],

Ihr Profil als [AKTUELLE ROLLE] hat sofort meine Aufmerksamkeit geweckt – besonders Ihre Erfahrung im Bereich **${role.titles[0]}**.

Ich recruite aktuell eine spannende **${role.titles[0]}**-Position bei [UNTERNEHMEN]:

✅ [HIGHLIGHT 1 – z.B. moderner Tech-Stack / Produkt]
✅ [HIGHLIGHT 2 – z.B. Remote/Hybrid-Option]
✅ [HIGHLIGHT 3 – z.B. Teamgröße, Impact, Wachstum]

Wäre ein kurzes 15-minütiges Gespräch diese Woche für Sie interessant?

Mit freundlichen Grüßen,
[IHR NAME] | [KONTAKT]

---

**💡 Tipps für hohe Rücklaufquote:**
- 1 konkretes Detail aus dem Profil nennen ("Ihr Artikel über X hat mich beeindruckt")
- Unter 150 Wörter halten
- Konkrete Gehaltsspanne nennen (erhöht Response Rate um ~30 %)
- Versandzeit: Di–Do, 9–11 Uhr`;
}

function handleInterviewIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    if (!roleKey) {
        agentState.flow = 'interview_ask_role';
        return `Für welche Rolle soll ich Interviewfragen erstellen? (z.B. "Senior Java Developer", "Product Manager", "UX Designer")`;
    }
    const role = ROLE_KB[roleKey];
    const q = getInterviewQuestions(roleKey);
    return `## 🎯 Interviewfragen: ${role.titles[0]}

### Fachkompetenz
${q.technical.map(x => `- ${x}`).join('\n')}

### Verhalten & Soft Skills
${q.behavioral.map(x => `- ${x}`).join('\n')}

### Kulturfit & Motivation
${q.culture.map(x => `- ${x}`).join('\n')}

### Rollenspezifisch
${q.roleSpecific.map(x => `- ${x}`).join('\n')}

---
**💡 STAR-Methode** für Verhaltensfragen: Situation → Task → Action → Result`;
}

function handleJobpostIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    const role = roleKey ? ROLE_KB[roleKey] : null;
    const title = role ? role.titles[0] : '[JOBTITEL]';
    const must = role ? role.mustSkills.join(', ') : '[CORE SKILL]';
    const nice = role ? role.niceSkills.slice(0, 3).join(', ') : '[WEITERE SKILLS]';
    const salary = role ? role.salary : '[GEHALTSRANGE]';

    return `## 📝 Stellenausschreibung: ${title}

---
**${title} (m/w/d) – [UNTERNEHMEN]**

🚀 **Deine Aufgaben**
- [HAUPTAUFGABE 1]
- [HAUPTAUFGABE 2]
- [HAUPTAUFGABE 3]
- [HAUPTAUFGABE 4]

✅ **Das bringst du mit**
- Fundierte Kenntnisse in ${must}
- Erfahrung mit ${nice} – von Vorteil
- [X] Jahre Berufserfahrung in [BEREICH]
- Teamfähigkeit und eigenverantwortliche Arbeitsweise

🎁 **Das bieten wir**
- ${salary} p.a. (je nach Erfahrung)
- Remote/Hybrid – [X] Tage Home Office
- [BENEFIT 1 – z.B. Weiterbildungsbudget 2.000 €/Jahr]
- [BENEFIT 2 – z.B. Urban Sports Club / EGYM Wellpass]
- [BENEFIT 3 – z.B. Deutschlandticket / Jobrad]

📍 **Standort:** [STADT] oder Remote

---
**💡 Tipps für bessere Bewerbungsquoten:**
- Gehaltsrahmen nennen (+30 % mehr Bewerbungen)
- Max. 6 Must-Have-Anforderungen (nicht 15!)
- Echte Benefits, keine Floskeln ("flache Hierarchien")
- Inklusive Sprache (m/w/d oder *)`;
}

function handleScreenIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    const role = roleKey ? ROLE_KB[roleKey] : null;
    const mustList = role ? role.mustSkills.map(s => `- ☐ **${s}** vorhanden?`).join('\n') : '- ☐ Kernkompetenz vorhanden?';
    const niceList = role ? role.niceSkills.slice(0, 4).map(s => `- ☐ ${s}`).join('\n') : '- ☐ Nice-to-Have Skills';

    return `## 👤 Screening-Checkliste${role ? ': ' + role.titles[0] : ''}

### Must-Have (K.O.-Kriterien)
${mustList}
- ☐ Seniority passt zur Stelle?
- ☐ Erfahrungsjahre ausreichend?

### Nice-to-Have
${niceList}

### Allgemeine Kriterien
- ☐ Karriereverlauf nachvollziehbar?
- ☐ Keine unerklärten Lücken > 6 Monate?
- ☐ Stationen zeigen Wachstum?
- ☐ Standort / Remote-Situation passt?
- ☐ LinkedIn/GitHub aktiv?

### Scoring
| Punkte | Bedeutung |
|--------|-----------|
| 8–10 | Sofort kontaktieren |
| 5–7 | Interessant, näher prüfen |
| 3–4 | Potenzial mit Gap |
| 0–2 | Nicht geeignet |`;
}

function handleStrategyIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    if (!roleKey) {
        agentState.flow = 'strategy_ask_role';
        return `Für welche Rolle oder Zielgruppe brauchst du Sourcing-Tipps?\n\nOder stelle mir eine konkrete Frage:\n- "Wie erreiche ich passive Kandidaten?"\n- "Welche Plattform für Data Scientists?"\n- "Wie verbessere ich meine Rücklaufquote?"`;
    }
    const role = ROLE_KB[roleKey];
    return `## 💡 Sourcing-Strategie: ${role.titles[0]}

### Beste Plattformen
${role.platforms.map(p => `- **${p}**`).join('\n')}

### Sourcing-Tipp
${role.tip}

### Active Sourcing Empfehlung
- **Boolean-String** direkt generieren: *"Boolean für ${role.titles[0]}"*
- **Personalisierung**: 1 konkretes Profil-Detail im ersten Satz des Anschreibens
- **Timing**: Versende Nachrichten Di–Do zwischen 9 und 11 Uhr
- **Follow-up**: 1x nach 5–7 Tagen nachhaken (Response Rate +20 %)

### Gehaltsrahmen (DACH)
💰 ${role.salary}`;
}

function handleSalaryIntent(lower) {
    const roleKey = detectRoleFromText(lower);
    if (!roleKey) {
        agentState.flow = 'salary_ask_role';
        return `Für welche Rolle möchtest du den Gehaltsrahmen wissen? (z.B. "Senior Java Developer", "UX Designer", "DevOps Engineer")`;
    }
    const role = ROLE_KB[roleKey];
    const seniority = detectSeniority(lower);
    const adj = { junior: '−20–25 % vom Midrange', mid: 'entspricht dem Midrange', senior: '+20–30 % über Midrange', manager: '+30–50 % über Midrange' };
    return `## 💰 Gehaltsrahmen: ${role.titles[0]}

**DACH-Markt:** ${role.salary}

**Seniority (${seniority}):** ${adj[seniority] || adj.mid}

**Regional:**
- 🏙️ München / Frankfurt: +15–20 %
- 🏙️ Berlin / Hamburg: +10–15 %
- 🌍 Remote-first: oft +5–10 % durch nationalen Wettbewerb

*Richtwerte – Abweichungen je nach Unternehmensgröße und Branche möglich.*`;
}

function handleHelpResponse() {
    return `## ❓ Was kann ich für dich tun?

| Funktion | Beispiel |
|----------|---------|
| 🔍 Boolean-Suche | *"Boolean für Senior Java Developer"* |
| ✉️ Anschreiben | *"Anschreiben für DevOps Engineer"* |
| 🎯 Interviewfragen | *"Interviewfragen für Product Manager"* |
| 📝 Stellenanzeige | *"Stellenanzeige für UX Designer"* |
| 👤 Screening | *"Screening-Checkliste für Data Scientist"* |
| 💡 Sourcing-Tipp | *"Strategie für Kubernetes-Experten"* |
| 💰 Gehalt | *"Gehalt Senior React Developer DACH"* |

Oder nutze die **Schnellaktionen** oben!`;
}

function handleUnknownIntent(msg, lower) {
    const roleKey = detectRoleFromText(lower);
    if (roleKey) {
        const role = ROLE_KB[roleKey];
        return `Ich habe erkannt, dass du nach **${role.titles[0]}**-Kandidaten suchst. Was soll ich tun?\n\n- **"Boolean erstellen"** – Suchstring generieren\n- **"Anschreiben"** – InMail-Vorlage\n- **"Interviewfragen"** – Fragenkatalog\n- **"Strategie"** – Sourcing-Tipps\n- **"Gehalt"** – Gehaltsrahmen DACH`;
    }
    return `Ich bin nicht sicher, wie ich helfen kann. Versuche:\n\n- *"Boolean für [Rolle]"*\n- *"Anschreiben für [Rolle]"*\n- *"Interviewfragen für [Rolle]"*\n- *"Hilfe"* – alle Funktionen anzeigen`;
}

function getInterviewQuestions(roleKey) {
    const behavioral = [
        'Beschreibe eine Situation, in der du unter starkem Zeitdruck ein Projekt erfolgreich abgeschlossen hast.',
        'Erzähle von einem Konflikt mit einem Kollegen – wie hast du ihn gelöst?',
        'Wie gehst du vor, wenn Anforderungen unklar oder widersprüchlich sind?',
    ];
    const culture = [
        'Was motiviert dich beruflich am meisten?',
        'Wie bevorzugst du zu arbeiten – eigenständig oder im Team?',
        'Wo siehst du dich in 3 Jahren?',
    ];
    const specific = {
        java: {
            technical: ['Erkläre den Unterschied zwischen JVM, JDK und JRE.', 'Welche Design Patterns nutzt du und warum?', 'Wie gehst du mit Concurrency um?', 'Erfahrungen mit Spring Boot und Microservices?'],
            roleSpecific: ['Welche Build-Tools nutzt du (Maven/Gradle)?', 'Wie sieht dein Code-Review-Prozess aus?'],
        },
        python: {
            technical: ['Unterschied zwischen List und Generator?', 'Wie gehst du mit async/await um?', 'Was ist das GIL?', 'Welche Frameworks für REST-APIs?'],
            roleSpecific: ['Wie testest du Python-Code?', 'Zeige ein Python-Projekt, auf das du stolz bist.'],
        },
        frontend: {
            technical: ['Erkläre Virtual DOM.', 'Unterschied state vs. props?', 'Wie optimierst du Web-Performance?', 'Erfahrungen mit Browser-Kompatibilität?'],
            roleSpecific: ['Wie arbeitest du mit Designern zusammen?', 'Zeige uns etwas aus deinem Portfolio.'],
        },
        devops: {
            technical: ['Wie baust du eine CI/CD-Pipeline auf?', 'Erkläre Kubernetes Deployments, Services und Ingress.', 'Wie managst du Secrets?', 'Monitoring-Strategie?'],
            roleSpecific: ['Wie hast du Deployment-Zeiten reduziert?', 'Beschreibe einen kritischen Incident und deine Reaktion.'],
        },
        product: {
            technical: ['Wie priorisierst du den Backlog?', 'Welche Metriken nutzt du?', 'Wie gehst du mit widersprüchlichen Stakeholder-Anforderungen um?', 'A/B-Testing-Erfahrungen?'],
            roleSpecific: ['Beschreibe ein Produkt, das du von 0 auf 1 gebaut hast.', 'Wie arbeitest du mit Entwicklern zusammen?'],
        },
        ux: {
            technical: ['Wie gestaltest du deinen User-Research-Prozess?', 'Erfahrungen mit Usability-Tests?', 'Wie misst du UX-Erfolg?', 'Design-System-Erfahrungen?'],
            roleSpecific: ['Zeige 2–3 Case Studies aus deinem Portfolio.', 'Wie überzeugst du Stakeholder von Designentscheidungen?'],
        },
        data: {
            technical: ['Erkläre Overfitting und wie du es vermeidest.', 'Supervised vs. Unsupervised Learning?', 'Umgang mit fehlenden Daten?', 'Welche SQL-Abfragen nutzt du täglich?'],
            roleSpecific: ['Beschreibe ein ML-Modell, das du in Production gebracht hast.', 'Wie kommunizierst du Ergebnisse an nicht-technische Stakeholder?'],
        },
        it_support: {
            technical: ['Wie gehst du bei einem Netzwerkausfall vor?', 'Erfahrungen mit Active Directory?', 'Welche Ticketing-Systeme hast du genutzt?', 'Erfahrungen mit Windows Server Administration?'],
            roleSpecific: ['Beschreibe einen komplexen IT-Incident, den du gelöst hast.', 'Wie dokumentierst du IT-Prozesse?'],
        },
    };
    const q = specific[roleKey] || {
        technical: ['Welche Tools nutzt du täglich?', 'Wie bleibst du fachlich auf dem Laufenden?', 'Was war deine größte Herausforderung und wie hast du sie gelöst?', 'Beschreibe deinen typischen Arbeitstag.'],
        roleSpecific: ['Warum interessiert dich diese Stelle?', 'Was macht dich besonders geeignet?'],
    };
    return { technical: q.technical, behavioral, culture, roleSpecific: q.roleSpecific };
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
            <p>Hallo! Ich bin dein <strong>Recruiting-Assistent</strong>. Ich helfe dir sofort &ndash; kein API-Key erforderlich:</p>
            <ul class="agent-list">
                <li>&#128269; <strong>Boolean-Suchstrings</strong> &ndash; optimiert f&uuml;r LinkedIn, Google X-Ray &amp; GitHub</li>
                <li>&#9993; <strong>Outreach-Vorlagen</strong> &ndash; personalisierte InMail-Nachrichten</li>
                <li>&#127919; <strong>Interviewfragen</strong> &ndash; rollenspezifische Kataloge</li>
                <li>&#128221; <strong>Stellenausschreibungen</strong> &ndash; moderne Vorlagen</li>
                <li>&#128100; <strong>Screening-Checklisten</strong> &ndash; strukturierte Kandidatenbewertung</li>
                <li>&#128161; <strong>Sourcing-Strategie</strong> &ndash; Plattformen, Tipps &amp; Gehaltsrahmen</li>
            </ul>
            <p>Nutze die <strong>Schnellaktionen</strong> oben oder schreib direkt, f&uuml;r welche Rolle du suchst!</p>
        </div>
    </div>`;
}
