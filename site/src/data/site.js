// All the text on the site lives here, so you can update it without touching the components.

export const profile = {
  name: "Adyan Marendra Ramadhani",
  shortName: "Ramadhani",
  initials: "AR",
  title: "Data, AI and Full Stack Engineer",
  location: "Seoul, Korea",
  email: "adyan.rendra@gmail.com",
  github: "https://github.com/ndrarendra",
  linkedin: "https://www.linkedin.com/in/adyanmarendra/",
  // Put your photo at public/images/profile/ramadhani.jpg (a square photo works best).
  // Until the file exists, the site shows your initials instead.
  photo: "/images/profile/ramadhani.jpg",
  // Add a PDF at public/resume.pdf and set this to "/resume.pdf".
  // While it is empty, the button opens your LinkedIn profile instead.
  resume: "",
  // Text that runs around the Hire Me badge on the home page.
  roles: "Data Engineer · Data Analyst · AI Engineer · Full Stack Developer · ",
};

export const home = {
  headline: "From Raw Data To Products People Actually Use.",
  intro:
    "I'm Ramadhani, a data, AI and full stack engineer in Seoul. I build the pipelines, check that the numbers hold up, add the models and ship the apps on top. Right now I'm moving a DB2 data warehouse to BigQuery at LG Uplus.",
};

export const about = {
  headline: "Go Back To The Source!",
  bio: [
    "I've done full stack development, data engineering, data analysis and AI engineering, and most of my projects have needed several of those at once. I'm happiest when the work ends up as something people actually use or act on.",
    "When numbers don't match, I go back to the source to find out why. At Jeonbuk Bank that meant comparing how three teams calculated the same metrics and agreeing on one definition for each. At LG Uplus it meant writing a tool that traces every column through more than 300 stored procedures.",
    "Before that I spent five years building clinical research systems, where every change to the data has to be explainable, and I still work that way. I have a PhD in Management Information Systems, I work in Korean and English, and I'm a permanent resident (F-5) in Seoul.",
  ],
  numbers: [
    { value: 10, suffix: "+", label: "years of experience, research included" },
    { value: 300, suffix: "+", label: "stored procedures traced at LG Uplus" },
    { value: 200, suffix: "K+", label: "images through one pipeline at Simyu" },
  ],
};

// x and y are offsets from the centre of the circle, in vw.
// Top left: data engineering. Top right: analysis. Bottom right: AI. Bottom left: full stack.
export const skills = {
  centre: "Data",
  groups: [
    { label: "Data engineering", corner: "top-left" },
    { label: "Analysis", corner: "top-right" },
    { label: "AI", corner: "bottom-right" },
    { label: "Full stack", corner: "bottom-left" },
  ],
  items: [
    { name: "BigQuery", x: "-20vw", y: "-11vw" },
    { name: "SQL", x: "-10vw", y: "-5vw" },
    { name: "DataStage", x: "-30vw", y: "-3vw" },
    { name: "dbt", x: "-12vw", y: "-17vw" },
    { name: "Tableau", x: "19vw", y: "-12vw" },
    { name: "SAS", x: "10vw", y: "-5vw" },
    { name: "Impala", x: "29vw", y: "-3vw" },
    { name: "Python", x: "8vw", y: "-17vw" },
    { name: "LLM", x: "10vw", y: "6vw" },
    { name: "RAG", x: "23vw", y: "11vw" },
    { name: "PyTorch", x: "13vw", y: "17vw" },
    { name: "TensorFlow", x: "31vw", y: "4vw" },
    { name: "FastAPI", x: "-11vw", y: "6vw" },
    { name: "React", x: "-23vw", y: "11vw" },
    { name: "Go", x: "-13vw", y: "17vw" },
    { name: "Flutter", x: "-31vw", y: "4vw" },
  ],
};

export const experience = [
  {
    position: "Data Engineer (Freelance)",
    company: "LG Uplus",
    companyLink: "https://www.lguplus.com",
    time: "Sep 2026 - Present",
    address: "Seoul",
    work: "On the team moving a DB2 data warehouse to BigQuery. I built a column-level lineage extractor in SQL and JavaScript UDFs that follows control flow, temp tables and dynamic SQL back to the source, which cut lineage analysis for 300+ stored procedures from about a month to one or two days. I also automated procedure conversion with an AI agent, checked by confirming the same input gives the same result on both platforms.",
  },
  {
    position: "Data Analyst",
    company: "Jeonbuk Bank (Bravo Korea)",
    companyLink: "https://www.jbbank.co.kr",
    time: "May 2025 - Jul 2026",
    address: "Seoul",
    work: "Worked on the bank's financial platform for foreign customers. Three teams were reporting different numbers for the same metrics, so I compared their logic, agreed on one definition per metric and wrote it into a shared data dictionary. I rebuilt the funnel and channel analysis, reaching a CTR of 8.5% and a CVR of 3.5% for financial members, and replaced a monthly report that took about two days by hand with automated SQL, Python and Tableau monitoring.",
  },
  {
    position: "Senior Researcher, Full Stack and Data",
    company: "Simyu",
    companyLink: "",
    time: "Jan 2020 - May 2025",
    address: "Seoul",
    work: "Built a clinical trial management system and other internal systems with Python, React and AWS, from requirements to deployment. Designed a five-stage pipeline for 200,000+ images with deep learning and LLM-based quality checks, built execution history tracking to FDA 21 CFR Part 11, and automated 1,000+ manual CRF captures with Python and Selenium.",
  },
  {
    position: "Research Assistant",
    company: "Dong-A University",
    companyLink: "https://www.donga.ac.kr",
    time: "Mar 2017 - Jan 2020",
    address: "Busan",
    work: "Ran industry-academia projects in e-government and applied AI, from data collection and preprocessing to CNN, DFFNN and Bayesian models in Python and R. Published five papers and received an excellent paper award at the 2019 autumn conference of 한국전산회계학회.",
  },
  {
    position: "Researcher",
    company: "BlackBerry Innovation Center, ITB",
    companyLink: "https://www.itb.ac.id",
    time: "Jan 2015 - Feb 2016",
    address: "Bandung, Indonesia",
    work: "Researched data processing for mobile and embedded systems, collected and analyzed data for new application services, and wrote the technical documentation (C, C++, Java).",
  },
];

export const education = [
  {
    type: "PhD in Management Information Systems",
    time: "2017 - 2020",
    place: "Dong-A University",
    info: "Deep learning research, including Twitter sentiment analysis and income prediction. GPA 4.30 / 4.5, five published papers.",
  },
  {
    type: "MS in Information Systems (dual degree)",
    time: "2016 - 2017",
    place: "Pukyong National University",
    info: "Dual degree program with Bandung Institute of Technology. GPA 4.5 / 4.5.",
  },
  {
    type: "MS in Computer Engineering (dual degree)",
    time: "2015 - 2017",
    place: "Bandung Institute of Technology",
    info: "Dual degree program with Pukyong National University. GPA 3.5 / 4.0.",
  },
  {
    type: "BS in Computer Science",
    time: "2009 - 2014",
    place: "Indonesia University of Education",
    info: "GPA 3.37 / 4.0.",
  },
];

export const certifications = [
  {
    name: "dbt Fundamentals",
    issuer: "dbt Labs",
    date: "Nov 2026",
    link: "https://credentials.getdbt.com/ff52d0f4-3e5f-4721-8d79-d911bbe02294",
  },
  {
    name: "Databricks Fundamentals Accreditation",
    issuer: "Databricks Academy",
    date: "Nov 2026",
    link: "https://credentials.databricks.com/08d0aea6-4685-4725-b33f-a249f59ed1de",
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google Skillshop",
    date: "Aug 2026",
    link: "",
  },
  {
    name: "빅데이터전문가 1급",
    issuer: "한국자격검정평가진흥원",
    date: "Jun 2026",
    link: "",
  },
];

// featured: true gives the project a full-width card.
// Leave link and github empty for work you can't share; the card then says so.
export const projects = {
  headline: "Built To Be Used.",
  items: [
    {
      featured: true,
      type: "Data engineering",
      title: "Column-Level Lineage For A DB2 To BigQuery Migration",
      summary:
        "A tool written in SQL and JavaScript UDFs that follows control flow, temp tables, variables and dynamic SQL back to the source columns. Every result is graded PASS, CHECK or UNRESOLVED, and static checks catch risky statements before anything runs. Lineage analysis for 300+ stored procedures went from about a month to one or two days.",
      img: "/images/projects/lineage.svg",
      link: "",
      github: "",
      note: "LG Uplus project. The code isn't public.",
    },
    {
      type: "Full stack and AI",
      title: "Pocket Teacher",
      summary:
        "An English speaking practice app for iOS and Android: Flutter front end, Go API on PostgreSQL and a FastAPI service with Azure Speech, deployed on Azure Container Apps.",
      img: "/images/projects/pocket-teacher.svg",
      link: "https://www.pocketteacherapp.com/",
      github: "",
    },
    {
      type: "Data engineering",
      title: "Change Data Capture Pipeline",
      summary:
        "Streams every change in a MySQL database through Debezium and Kafka into Elasticsearch and Kibana, with a small Flask view of incoming changes. Six services, one Docker Compose file.",
      img: "/images/projects/cdc.svg",
      link: "",
      github: "https://github.com/ndrarendra/Change-Data-Capture",
    },
    {
      featured: true,
      type: "Data analysis",
      title: "Funnel And Channel Analytics For Foreign Customers",
      summary:
        "A five-step funnel from simple to financial members, split by country, visa and sign-up channel. Ad data from Airbridge is joined to internal financial data, so marketing ranks channels by how many users become financial members instead of by traffic. Result: CTR 8.5% and CVR 3.5% for financial members.",
      img: "/images/projects/funnel.svg",
      link: "",
      github: "",
      note: "Jeonbuk Bank project. The data isn't public.",
    },
    {
      type: "AI",
      title: "Korean And English RAG",
      summary:
        "Retrieval-augmented generation tested on two backends, LLaMA through Ollama on my own machine and GPT through the OpenAI API, against Korean and English documents.",
      img: "/images/projects/rag.svg",
      link: "",
      github: "https://github.com/ndrarendra/LLM-project-RAG",
    },
    {
      type: "Data engineering",
      title: "Database Comparison Tool",
      summary:
        "A web tool that compares two MySQL or MariaDB databases for schema, metadata and row-level differences, and exports the report to Excel.",
      img: "/images/projects/db-compare.svg",
      link: "",
      github: "https://github.com/ndrarendra/python-db-compare",
    },
  ],
};

export const contact = {
  headline: "Let's Talk.",
  text: "I'm open to data engineering, analytics engineering and data or AI backend roles in Seoul. Email is the fastest way to reach me.",
  status: "Permanent resident (F-5), so no visa sponsorship is needed.",
};
