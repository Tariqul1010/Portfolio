export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills & Tools', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-tariqul-islam-34990b289',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Tariqul1010',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tariqul.islam.analytics@gmail.com',
    mailto: 'mailto:tariqul.islam.analytics@gmail.com',
    icon: 'email',
  },
];

export const tools = [
  { name: 'Excel', type: 'excel' },
  { name: 'SQL', type: 'mysql' },
  { name: 'PostgreSQL', type: 'postgresql' },
  { name: 'Power BI', type: 'powerbi' },
  { name: 'GitHub', type: 'github' },
  { name: 'Python', type: 'python' },
  { name: 'Tableau', type: 'tableau' },
];

export const skills = [
  {
    group: 'Data & querying',
    items: [
      {
        name: 'PostgreSQL',
        desc: 'CTEs, subqueries, window functions · developing',
        icon: 'postgresql',
      },
      {
        name: 'SQL',
        desc: 'Filtering, joins and analytical queries',
        icon: 'mysql',
      },
      {
        name: 'GitHub',
        desc: 'Repository-based project sharing · growing',
        icon: 'github',
      },
      {
        name: 'Python',
        desc: 'Data cleaning and analysis · PyCharm, VS Code',
        icon: 'python',
      },
    ],
  },
  {
    group: 'Reporting & visualization',
    items: [
      {
        name: 'Microsoft Excel',
        desc: 'Formulas, data organization and analysis',
        icon: 'excel',
      },
      {
        name: 'Power BI',
        desc: 'Power Query, modeling and dashboards · developing',
        icon: 'powerbi',
      },
      {
        name: 'Tableau',
        desc: 'Interactive dashboards and visual analysis · learning',
        icon: 'tableau',
      },
      {
        name: 'Presentation',
        desc: 'Communicating findings and recommendations',
        icon: 'presentation',
      },
    ],
  },
  {
    group: 'Domain knowledge',
    items: [
      {
        name: 'Finance & Banking',
        desc: 'Academic foundation',
        icon: 'finance',
      },
      {
        name: 'Business analysis',
        desc: 'KPI interpretation and problem framing',
        icon: 'analysis',
      },
      {
        name: 'Data storytelling',
        desc: 'Presenting insights clearly',
        icon: 'storytelling',
      },
      {
        name: 'Financial modeling',
        desc: 'NPV, IRR and amortization scheduling',
        icon: 'modeling',
      },
    ],
  },
];

export const projects = [
  {
    id: 'hr-workforce',
    category: 'bi',
    title: 'HR Workforce & Attrition Dashboard',
    shortTitle: 'Workforce & Attrition',
    label: 'Power BI · HR analytics',
    image: '/projects/hr-workforce-dashboard.jpg',
    imageAlt: 'Screenshot of the HR Workforce and Attrition Power BI dashboard showing employee KPIs, gender, education, salary, satisfaction and hiring versus termination trends',
    status: 'done',
    statusLabel: 'Completed',
    description: 'An interactive dashboard that shows how attrition and workforce composition vary across an organisation of 1,470 employee records.',
    question: 'Where is attrition concentrated, and which workforce factors sit alongside it?',
    built: [
      'KPI cards: total, current and terminated employees, and termination rate',
      'Breakdowns by gender, education, employment type, department, job role and tenure group',
      'Job-satisfaction and work-life-balance distributions, average salary, and monthly hires versus terminations',
      'Two slicers for filtering the whole report',
    ],
    method: 'Data cleaning in Power Query, a data model with a calendar table, and DAX measures including USERELATIONSHIP for hire and termination dates.',
    findings: '237 of 1,470 employees (16.1%) left. Attrition was highest in Sales (20.6%) versus Research & Development (13.8%), and employees working overtime left at 30.5% versus 10.4% for those who did not.',
    implication: 'Retention work may be best focused on the Sales team and on overtime workload. These patterns show association, not cause.',
    tags: ['Power BI', 'Power Query', 'DAX', 'Data modeling'],
    download: { label: 'Download .pbix', href: '/projects/HR_Workforce_Attrition_Dashboard.pbix' },
    github: 'https://github.com/Tariqul1010/HR-Workforce-Attrition-Dashboard',
  },
  {
    id: 'sales-analytics',
    category: 'bi',
    title: 'Sales Analytics Dashboard',
    shortTitle: 'Sales Analytics',
    label: 'Power BI · Sales analytics',
    image: '/projects/sales-dashboard.jpg',
    imageAlt: 'Overview image of the Sales Analytics Power BI dashboard with KPI cards, sales trend, customer segment, category and region charts, key influencers and a decomposition-style flow',
    status: 'done',
    statusLabel: 'Completed',
    description: 'A sales report built on 350 transactions, for exploring revenue by category, region, product and customer segment over time.',
    question: 'What drives sales, and how do results differ across products, regions and customer segments?',
    built: [
      'KPI cards for total sales, transaction count, number of categories and number of regions',
      'Sales by category (donut), by region and product (bar and column charts), and over time (line chart)',
      'A decomposition tree and a key influencers visual for exploring drivers',
      'Slicers for date, region and customer segment fields',
    ],
    method: 'Data preparation in Power Query and dynamic DAX measures such as Total Sales and Transaction Count.',
    findings: '350 transactions from 1 January to 16 December 2025, across 30 products, 5 categories and 4 regions. Total sales were 204,090; Electronics (82,750) and Furniture (60,140) led by category, East was the strongest region (62,520), and August and November were the highest months.',
    tags: ['Power BI', 'Power Query', 'DAX', 'Decomposition tree', 'Key influencers'],
    download: { label: 'Download .pbix', href: '/projects/Sales_Analytics_Dashboard.pbix' },
    github: 'https://github.com/Tariqul1010/Sales-Analytics-Dashboard',
  },
  {
    id: 'hr-excel',
    category: 'excel',
    title: 'HR Analytics Dashboard (Excel)',
    shortTitle: 'HR Dashboard',
    label: 'Excel · HR analytics',
    image: '/projects/hr-excel-dashboard.jpg',
    imageAlt: 'Screenshot of the HR Analytics Excel dashboard showing KPI cards, filters, gender, education, job satisfaction, work-life balance and salary charts',
    status: 'done',
    statusLabel: 'Completed',
    description: 'A fully interactive Excel dashboard that summarises workforce demographics, compensation and satisfaction for 1,470 employees.',
    built: [
      '17 PivotTables feeding 7 dynamic charts on a single dashboard sheet',
      'A slicer for filtering, plus KPI cards such as total employees',
      'A 1,470-row, 28-column dataset covering demographics, job role, satisfaction, performance and salary',
    ],
    findings: 'The workforce is 882 male and 588 female employees (39.5% female). Attrition was 16.1% overall.',
    tags: ['Excel', 'PivotTables', 'Slicers', 'Dashboard design'],
    download: { label: 'Download workbook', href: '/projects/HR_Analytics_Dashboard.xlsx' },
    github: 'https://github.com/Tariqul1010/HR-Analytics-Dashboard',
  },
  {
    id: 'sales-sql',
    category: 'sql',
    title: 'Sales Analytics & Database Querying',
    shortTitle: 'Sales Database',
    label: 'MySQL · SQL analysis',
    isChart: true,
    status: 'done',
    statusLabel: 'Completed',
    description: 'A structured SQL project covering database design, joins, aggregation and validation, built on a 20-order practice sales dataset.',
    built: [
      'A sales table and a products table, with an INNER JOIN to bring in product categories',
      'Queries moving from SELECT, WHERE and ORDER BY to aggregates, GROUP BY and dashboard-style KPI queries',
      'Final validation queries: row counts, join consistency and a grand-total check',
    ],
    findings: 'Total sales were 16,950. Laptops led by revenue (6,000), the South was the strongest region (5,300), and Electronics made up 16,250 of the total versus 700 for Accessories.',
    tags: ['MySQL', 'SQL', 'Joins', 'Aggregation', 'Data validation'],
    download: { label: 'Download SQL script', href: '/projects/Sales_Analytics_Database.sql' },
    github: 'https://github.com/Tariqul1010/Sales-Analytics-Database',
  },
];

export const education = [
  {
    type: 'university',
    logo: '/JUST-logo.jpg',
    logoAlt: 'Jashore University of Science and Technology official logo',
    status: 'Undergraduate · In progress',
    done: false,
    kicker: "Bachelor's degree",
    title: 'Bachelor of Business Administration (BBA)',
    dept: 'Department of Finance and Banking',
    institution: 'Jashore University of Science and Technology (JUST), Bangladesh',
    websiteHref: 'https://just.edu.bd/',
    websiteLabel: 'University website',
    facts: [
      { label: 'Started', value: '2023' },
      { label: 'Expected completion', value: '2027' },
      { label: 'Major', value: 'Finance & Banking' },
    ],
    timeline: [
      { year: '2023', desc: 'Began BBA in Finance and Banking' },
      { year: '2023 – 2027', desc: 'Core studies in finance, banking and business' },
      {
        year: 'Alongside the degree',
        desc: 'Excel, SQL, PostgreSQL, Power BI, Python and Tableau through structured learning and practice',
      },
    ],
  },
  {
    type: 'college',
    logo: '/GCPSC-logo.png',
    logoAlt: 'Ghatail Cantonment Public School and College logo',
    status: 'Completed · 2021',
    done: true,
    kicker: 'Higher secondary',
    title: 'Higher Secondary Certificate (HSC)',
    dept: 'Ghatail Cantonment Public School & College',
    institution: 'Ghatail, Tangail, Bangladesh',
    websiteHref: 'https://www.gcpsc.edu.bd/',
    websiteLabel: 'College website',
    facts: [
      { label: 'Level', value: 'HSC' },
      { label: 'Passed', value: '2021' },
      { label: 'GPA', value: '5.00' },
    ],
  },
  {
    type: 'school',
    logo: '/DSABHS-logo.jpg',
    logoAlt: 'Dr. Showket Ali Bhuiyan High School logo',
    status: 'Completed · 2019',
    done: true,
    kicker: 'Secondary education',
    title: 'Secondary School Certificate (SSC)',
    dept: 'Dr. Showket Ali Bhuiyan High School',
    institution: 'Ghatail, Tangail, Bangladesh',
    facts: [
      { label: 'Level', value: 'SSC' },
      { label: 'Passed', value: '2019' },
      { label: 'GPA', value: '4.00' },
    ],
  },
];

export const certificates = [
  {
    id: 'ostad',
    thumb: '/certs/ostad-career-track-1.jpg',
    thumbAlt: 'Ostad Certificate of Completion for the AI Driven Data Analytics Career Track Program',
    date: 'Certificate ID: C49312',
    title: 'AI Driven Data Analytics Career Track Program',
    issuer: 'Ostad',
    description: 'Completed a hands-on data analytics career track, learning advanced Excel, SQL and Power BI to clean and query data, analyse it and present clear, decision-ready insights through reports and dashboards.',
    tags: ['Advanced Excel', 'SQL', 'Power BI', 'Data analytics'],
  },
  {
    id: 'excel-workshop',
    thumb: '/certs/excel-workshop-1.jpg',
    thumbAlt: 'Certificate for Corporate Excel and Professional CV Making Practical Workshop 2024',
    date: '20 September 2024',
    title: 'Corporate Excel and Professional CV Making: Practical Workshop',
    issuer: 'Finance and Banking Club, Jashore University of Science and Technology',
    description: 'Two-day practical workshop covering corporate Excel, professional CV making and a corporate talk show, led by finance professionals from EDOTCO Bangladesh Co. Ltd.',
    tags: [
      'Pivot tables',
      'VLOOKUP / HLOOKUP',
      'SUMIFS · COUNTIFS',
      'IF & nested IF',
      'Goal Seek & amortization',
      'Charts & sparklines',
    ],
  },
  {
    id: 'fintech',
    thumb: '/certs/fintech-symposium-1.jpg',
    thumbAlt: 'Certificate of Participation for the National Symposium 2025 on fintech',
    date: 'August 2025',
    title: 'Certificate of Participation: National Fintech Symposium 2025',
    issuer: 'Department of Finance and Banking, Jashore University of Science and Technology',
    description: 'Participated in the national symposium on technological advancement in the fintech industry (innovation, inclusion and security) and attended training on the basic operational framework for fintech interoperability, delivered by the CISO of Bank Asia.',
    tags: ['Fintech', 'Interoperability', 'Digital security', 'Financial inclusion'],
  },
];

export const contactInfo = {
  email: 'tariqul.islam.analytics@gmail.com',
  whatsapp: 'https://wa.me/8801627193124',
  whatsappDisplay: '+8801627193124',
  phone: 'tel:+8801610271927',
  phoneDisplay: '+8801610-271927',
  linkedin: 'https://www.linkedin.com/in/md-tariqul-islam-34990b289',
  github: 'https://github.com/Tariqul1010',
};
