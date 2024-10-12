export const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
];

export const allSkills = [
    {
        domain: 'Programming Languages',
        skills: ['Python', 'JavaScript', 'Java', 'C#'],
    },
    {
        domain: 'AI/ML',
        skills: [
            'PyTorch',
            'Scikit-learn',
            'Natural Language Processing (NLP)',
            'Transformers',
            'Neural Networks',
            'Model Fine-Tuning',
            'Agents',
            'Retrieval-Augmented Generation (RAG)',
            'Chatbot Development',
        ],
    },
    {
        domain: 'Data Science & Analysis',
        skills: [
            'NumPy',
            'Pandas',
            'Matplotlib',
            'Seaborn',
            'Data Visualization',
            'Data Wrangling',
            'Web Scraping',
        ],
    },
    {
        domain: 'Databases',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4J'],
    },
    {
        domain: 'Vector Databases',
        skills: ['Pinecone', 'Faiss', 'ChromaDB', 'Milvus'],
    },
    {
        domain: 'Backend Technologies',
        skills: ['Flask', 'Django', 'Node.js'],
    },
    {
        domain: 'Frontend Technologies',
        skills: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind'],
    },
    {
        domain: 'Developer Tools & Version Control',
        skills: [
            'Git',
            'GitHub',
            'Amazon Web Services (AWS)',
            'Selenium',
            'Puppeteer',
        ],
    },
    {
        domain: 'Design Tools',
        skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
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
