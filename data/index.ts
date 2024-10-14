import {
    FaPython,
    FaJs,
    FaJava,
    FaDatabase,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGit,
    FaAws,
    FaFigma,
    FaReact,
} from 'react-icons/fa';
import {
    SiCsharp,
    SiPytorch,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiMongodb,
    SiPostgresql,
    SiNeo4J,
    SiFlask,
    SiDjango,
    SiBootstrap,
    SiTailwindcss,
    SiGithub,
    SiSelenium,
    SiPuppeteer,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiPowerbi,
    SiAmazonec2,
    SiAmazons3,
    SiAmazoniam,
    SiAmazoncloudwatch,
    SiPlaywright,
    SiSketch,
    SiAdobexd,
    SiFastapi,
    SiGitlab,
    SiElasticsearch,
    SiExpress,
    SiMeta,
    SiLangchain,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { LuSoup } from 'react-icons/lu';

export const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
];

export const getAllSkills = () => [
    {
        domain: 'Programming Languages',
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'JavaScript', icon: FaJs },
            { name: 'Java', icon: FaJava },
            { name: 'C#', icon: SiCsharp },
        ],
    },
    {
        domain: 'Data Science & Analysis',
        skills: [
            { name: 'NumPy', icon: SiNumpy },
            { name: 'Pandas', icon: SiPandas },
            { name: 'Matplotlib', icon: SiPowerbi },
            { name: 'Data Cleaning', icon: FaPython },
            { name: 'Data Augmentation', icon: FaPython },
            { name: 'Data Wrangling', icon: FaPython },
        ],
    },
    {
        domain: 'AI/ML Frameworks & Libraries',
        skills: [
            { name: 'PyTorch', icon: SiPytorch },
            { name: 'Scikit-learn', icon: SiScikitlearn },
            { name: 'LlamaIndex', icon: FaPython },
            { name: 'LangChain', icon: SiLangchain },
            { name: 'CrewAI', icon: FaPython },
        ],
    },
    {
        domain: 'Natural Language Processing',
        skills: [
            { name: 'Retrieval Augmented Generation (RAG)', icon: FaPython },
            { name: 'Agents', icon: FaPython },
            { name: 'Chatbot Development', icon: FaPython },
            { name: 'Transformers', icon: FaPython },
            { name: 'Neural Networks', icon: FaPython },
            { name: 'Model Fine-Tuning', icon: FaPython },
        ],
    },
    {
        domain: 'Databases',
        skills: [
            { name: 'MySQL', icon: GrMysql },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'Neo4J', icon: SiNeo4J },
        ],
    },
    {
        domain: 'Vector Databases',
        skills: [
            { name: 'Elasticsearch', icon: SiElasticsearch },
            { name: 'ChromaDB', icon: FaDatabase },
            { name: 'Faiss', icon: SiMeta },
            { name: 'Pinecone', icon: FaDatabase },
        ],
    },
    {
        domain: 'Backend Technologies',
        skills: [
            { name: 'Flask', icon: SiFlask },
            { name: 'Django', icon: SiDjango },
            { name: 'Fast-API', icon: SiFastapi },
            { name: 'Node.js', icon: FaNodeJs },
        ],
    },
    {
        domain: 'Frontend Technologies',
        skills: [
            { name: 'ReactJS', icon: FaReact },
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'CSS3', icon: FaCss3Alt },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
        ],
    },
    {
        domain: 'Version Control',
        skills: [
            { name: 'Git', icon: FaGit },
            { name: 'GitHub', icon: SiGithub },
            { name: 'GitLab', icon: SiGitlab },
        ],
    },
    {
        domain: 'Design & Prototyping Tools',
        skills: [
            { name: 'Figma', icon: FaFigma },
            { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
            { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
            { name: 'Adobe XD', icon: SiAdobexd },
        ],
    },
    {
        domain: 'Cloud Platforms & Services',
        skills: [
            { name: 'Amazon Web Services (AWS)', icon: FaAws },
            { name: 'EC2 (AWS)', icon: SiAmazonec2 },
            { name: 'S3 Bucket (AWS)', icon: SiAmazons3 },
            { name: 'Cloudwatch (AWS)', icon: SiAmazoncloudwatch },
        ],
    },
    {
        domain: 'Web Scraping & Automation',
        skills: [
            { name: 'Selenium', icon: SiSelenium },
            { name: 'Puppeteer', icon: SiPuppeteer },
            { name: 'BeautifulSoup4', icon: LuSoup },
            { name: 'Playwright', icon: SiPlaywright },
        ],
    },
    // Add more domains and skills as needed
];

export const gridItems = [
    {
        id: 1,
        title: "Solving Tomorrow's Problems with Today’s Technology",
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '/b1.svg',
        spareImg: '',
    },
    {
        id: 2,
        title: 'Collaboration is key: Building innovative AI solutions together',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
        style: {
            zIndex: 9999,
            userSelect: 'none',
        },
    },
    {
        id: 3,
        title: 'My Tech Stack',
        description: 'Click to view my',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2 cursor-pointer',
        imgClassName: '',
        titleClassName: 'justify-center',
        img: '',
        spareImg: '',
    },
    {
        id: 4,
        title: 'AI enthusiast with a drive for innovation and development',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '/grid.svg',
        spareImg: '/b4.svg',
    },

    {
        id: 5,
        title: 'Currently building an Agentic RAG-based Chatbot',
        description: 'The Inside Scoop',
        className: 'md:col-span-3 md:row-span-2',
        imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
        titleClassName: 'justify-center md:justify-start lg:justify-center',
        img: '/b5.svg',
        spareImg: '/grid.svg',
    },
    {
        id: 6,
        title: 'Have a vision? Let’s connect and create',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
        img: '',
        spareImg: '',
    },
];

export const projects = [
    {
        id: 1,
        title: '3D Solar System Planets to Explore',
        des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
        img: '/p1.svg',
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
        link: '/ui.earth.com',
    },
    {
        id: 2,
        title: 'Yoom - Video Conferencing App',
        des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
        img: '/p2.svg',
        iconLists: [
            '/next.svg',
            '/tail.svg',
            '/ts.svg',
            '/stream.svg',
            '/c.svg',
        ],
        link: '/ui.yoom.com',
    },
    {
        id: 3,
        title: 'AI Image SaaS - Canva Application',
        des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
        img: '/p3.svg',
        iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
        link: '/ui.aiimg.com',
    },
    {
        id: 4,
        title: 'Animated Apple Iphone 3D Website',
        des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
        img: '/p4.svg',
        iconLists: [
            '/next.svg',
            '/tail.svg',
            '/ts.svg',
            '/three.svg',
            '/gsap.svg',
        ],
        link: '/ui.apple.com',
    },
];

export const companies = [
    {
        id: 1,
        name: 'cloudinary',
        img: '/cloud.svg',
        nameImg: '/cloudName.svg',
    },
    {
        id: 2,
        name: 'appwrite',
        img: '/app.svg',
        nameImg: '/appName.svg',
    },
    {
        id: 3,
        name: 'HOSTINGER',
        img: '/host.svg',
        nameImg: '/hostName.svg',
    },
    {
        id: 4,
        name: 'stream',
        img: '/s.svg',
        nameImg: '/streamName.svg',
    },
    {
        id: 5,
        name: 'docker.',
        img: '/dock.svg',
        nameImg: '/dockerName.svg',
    },
];

export const workExperience = [
    {
        id: 1,
        title: 'AI/ML Intern',
        companyName: 'ALOIS Solutions',
        loc: 'Vadodara, Gujarat, India',
        duration: 'May 2024 - Present',
        points: [
            'Developed tools to automate document summarization and lead generations, improving recruitment workflow efficiency.',
            'Built Agentic Chatbots using Retriecal Augmented Generation (RAG) for job search assistance, gaining hands-on experience in NLP and machine learning.',
            'Finetuned LLMs for Feature Extraction and Classification.',
        ],
        className: 'md:col-span-2',
        thumbnail: '/exp1.svg',
    },
];

export const socialMedia = [
    {
        id: 1,
        img: '/git.svg',
        link: 'https://github.com/abhie7',
    },
    {
        id: 2,
        img: '/link.svg',
        link: 'https://linkedin.com/in/abhirajc',
    },
];
