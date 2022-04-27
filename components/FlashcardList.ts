

interface flashcard_data {
        id: number;
        question: string;
        answer: string;
        options: [string, string, string];
        exam: string;
        topic: number;
        module: number;
}


const FlashcardList: Array<flashcard_data> = [

    //       Topic 1

    // Module 1.1
    {
        id: 0,
        question: "Linux",
        answer: "An operating system inspired by UNIX. Linus Torvalds began developing Linux in 1991. Although Linux uses UNIX principles, it does not contain any UNIX code, and it is freely available to be used by anyone without restrictions.",
        options: [
            'A Silicon Graphics 3D File System Navigator for IRIX- an OS based on Unix. ',
            'An operating system inspired by UNIX. Linus Torvalds began developing Linux in 1991',
            'A family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, whose development started in 1969',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 1,
        question: "Distribution",
        answer: "A bundle that consists of a Linux kernel and a selection of applications that are maintained by a company or user community",
        options: [
            'A bundle that consists of a Linux kernel and a selection of applications that are maintained by a company or user community',
            'The Linux command to release a new software update',
            'Software released under a license in which the copyright holder grants users rights to use, study, change, and distribute the software and its source code to anyone and for any purpose',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 2,
        question: "What is the goal of a linux distribution?",
        answer: "To optimize the kernel and the applications that run on the operating system for a certain use case or user group",
        options: [
            'To enable individuals pursuing their own interest to maximize social benefits',
            'To optimize the kernel and the applications that run on the operating system for a certain use case or user group',
            'To seize the means of production',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 3,
        question: "dpkg",
        answer: "The Debian distribution's package manager",
        options: [
            "The Debian distribution's package manager",
            'A popular toolkit for creating programs with a graphical user interface that works with the X Window System or, more recently, Wayland',
            'A free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 4,
        question: "Package",
        answer: "A bundle of software and a corresponding configuration and documentation that makes it easier for the user to install, update and use the software",
        options: [
            'Hardware and software systems designed for cross-platform compatibility',
            "Amazonian vessels for presents you buy yourself",
            'A bundle of software and a corresponding configuration and documentation that makes it easier for the user to install, update and use the software',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 5,
        question: "What is the largest distribution in the Debian family? Who launched it?",
        answer: "Debian GNU/Linux, launched by Ian Murdock in 1993",
        options: [
            'Debian GNU/Linux, launched by Ian Murdock in 1993',
            'Ubuntu, launched by Mark Shuttleworth and his team in 2004',
            'Kali Linux, launched by Mati Aharoni and Devon Kearns of Offensive Security in 2013',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 6,
        question: "Ubuntu",
        answer: "A Debian-based distribution created by Mark Shuttleworth and his team in 2004, aiming to be an easy-to-use distribution. Ubuntu has a scheduled release every six months, with a long-term support (LTS) release every 2 years",
        options: [
            'An Arch-based distribution released in 2011, with a focus on user-friendliness and accessibility',
            'A Linux distribution started by Eelco Dolstra in 2003, built on top of the Nix package manager',
            'A Debian-based distribution created by Mark Shuttleworth and his team in 2004, aiming to be an easy-to-use distribution',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 7,
        question: "Red Hat (RHEL)",
        answer: "A Linux distribution developed and maintained by the Red Hat software company, acquired by IBM in 2019. The distribution started in 1994, and was rebranded to Red Hat Enterprise Linux (REHL) in 2003. It includes software to make Linux easier to use in professional server environments. Some components require fee-based subscriptions or licenses. CentOS uses REHL source code and compiles it into a distribution that is free, but does not include commercial support. All Red Hat distributions use the package format rpm",
        options: [
            'A Linux distribution started in 1994, and acquired by IBM in 2019. It includes software to make Linux easier to use in professional server environments',
            'A Linux distribution founded in 1994, mostly known for its YaST configuration tool',
            'A Debian-based distribution created by Mark Shuttleworth and his team in 2004, aiming to be an easy-to-use distribution',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 8,
        question: "CentOS",
        answer: "Like REHL, CentOS is a distribution optimized for professional server environments, but is completely free. As a tradeoff, it does not come with commercial support",
        options: [
            'An Arch-based distribution released in 2011, with a focus on user-friendliness and accessibility',
            'Like REHL, CentOS is a distribution optimized for professional server environments, but is completely free',
            'A Linux distribution founded in 1994, mostly known for its YaST configuration tool',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 9,
        question: "Fedora",
        answer: "Initiated by Red Hat, this distribution was founded in 2003, and is aimed at desktop computers. Like all Red Hat distributions, it uses the rpm package format. Fedora is progressive and adopts new technologies quickly, and is sometimes considered a test-bed for technologies that might later be included in RHEL",
        options: [
            'Initiated by Red Hat, this distribution was founded in 2003. Because it adopts new technologies quickly, some consider it a "test bed" for REHL',
            'A Linux distribution started by Eelco Dolstra in 2003, built on top of the Nix package manager',
            'A Debian-based distribution created by Mark Shuttleworth and his team in 2004, aiming to be an easy-to-use distribution',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 10,
        question: "SUSE Linux",
        answer: "The first version of SUSE Linux was released in 1994. SUSE Linux is mostly known for its YaST configuration tool, which allows administrators to install and configure software and hardware, set up servers and networks. In 2004, SUSE released the openSUSE project.",
        options: [
            'A distribution released in 1994 that is known for its YaST configuration tool',
            'A Linux distribution started by Eelco Dolstra in 2003, built on top of the Nix package manager',
            'An Arch-based distribution released in 2011, with a focus on user-friendliness and accessibility',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 11,
        question: "Embedded System",
        answer: "A combination of computer hardware and software designed for a specific function within a larger system. These systems are found in automotive, medical, and military applications. Two of the most popular embedded software projects are Android (mostly for mobile phones) and Raspbian (mostly for Raspberry Pi)",
        options: [
            'A bundle of software and a corresponding configuration and documentation',
            'A bundle that consists of a linux kernel and a selection of applications that are maintained by a company or user community',
            'A combination of computer hardware and software designed for a specific function within a larger system',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 12,
        question: "What are some major advantages of Linux over proprietary embedded software?",
        answer: "Cross-vendor platform compatibility, development, support, and no license fees",
        options: [
            'I use arch, btw',
            'Cross-vendor platform compatibility, development, support, and no license fees',
            'Universal hardware support, one standardized edition (distribution), and an easy learning curve',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 13,
        question: "Android",
        answer: "An operating system primarily for mobile devices developed by Google. Android Inc. was founded in 2003 in Palo Alto, CA, and was bought by Google in 2005. The base of Android is a modified Linux Kernel with additional open source software. Android is freely available in open source as Android Open Source Project (AOSP), although Google also offers proprietary components including Google Calendar, Google Maps, Google Mail, Chrome browser, and Google Play Store.",
        options: [
            'An operating system primarily for mobile devices developed by Google',
            'An operating system primarily for enterprise servers developed by Meta (formerly Facebook, Inc.)',
            'An advanced robot operating with artificial intelligence, sometimes meeting crewmembers of the Enterprise (NCC-1701)',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 14,
        question: "Raspberry Pi",
        answer: "Raspberry Pi is a low cost, credit-card sized computer that can function as a full-functionality desktop computer, but can also be used within an embedded Linux system. Raspberry Pis include General Purpose Input-Output (GPIO) pins which can be used to attach electronic devices and extension boards.",
        options: [
            'A baked dish made of pastry dough casing that contains a filling of edible fruit from a multitude of species in the genus Rubus of the rose family',
            'An operating system primarily for mobile devices developed by Google',
            'A low cost, credit-card sized computer that can function as a full-functionality desktop computer',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 15,
        question: "Raspbian",
        answer: "A Debian-based Linux distribution for the Raspberry Pi (Raspberry + Debian = Raspbian)",
        options: [
            'A Debian-based Linux distribution for the Raspberry Pi',
            'A SUSE-based Linux distribution for the Raspberry Pi',
            'An RHEL-based Linux distribution for the Raspberry Pi',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 16,
        question: "Cloud Computing",
        answer: "A standardized way of consuming computing resources, either by buying them for a public cloud provider or by a running a private cloud. As of 2017, Linux runs 90% of the public cloud workload.",
        options: [
            "A pedagogical technique for explaining the conglomeration of individual technological advances, or 'droplets', popularized in the mid-2000's",
            'A new iteration of the World Wide Web based on blockchain technology, emphasizing decentralization and token-based economics',
            'A standardized way of consuming computing resources, either by buying them from a public cloud provider or by running a private cloud',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 17,
        question: "IaaS",
        answer: "Infrastructure as a Service (IaaS) instances are virtual machines that are provisioned within minutes in the cloud. (B is PaaS, C is SaaS)",
        options: [
            'IaaS instances are virtual machines that are provisioned within minutes in the cloud',
            'IaaS instances hardware and software tools available for purchase within the cloud',
            "IaaS instances are software that's available via a third-party over the internet",
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 18,
        question: "How is Debian GNU/Linux different from Ubuntu? Name two aspects.",
        answer: "1) Ubuntu is optimized for ease of use, and is often recommended to beginners for that reason- 2) Debian is considered more stable than Ubuntu, because it receives fewer updates that are more thoroughly tested. As a tradeoff, Debian is less likely to have the newest technologies and software releases.",
        options: [
            '1) Ubuntu optimized for ease of use, 2) Debian is considered more stable',
            '1) Ubuntu comes from the RHEL family, 2) Debian is considered more progressive',
            '1) Ubuntu is free, 2) Debian is considered more hipster',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 19,
        question: "What are the most common environments/platforms Linux is used for? Name three different environments/platforms and name one distribution you can use for each.",
        answer: "Smartphone (Android), Desktop (Ubuntu, Debian, Fedora), and Server (CentOS, RHEL)",
        options: [
            'IoT (Mint), Desktop (Fedora), and Content Management Systems (RHEL)',
            'Smartphone (Gentoo), Robotics (Kali), and Server (openSUSE)',
            'Smartphone (Android), Desktop (Ubuntu), and Server (CentOS)',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 20,
        question: "You are planning to install a Linux distribution in a new environment. Name at least four things that you should consider when choosing a distribution.",
        answer: "Cost, Performance, Scalability, Stability, Hardware Demands",
        options: [
            'Hardware Demands, Licensing, Algorithmic Complexity, Cost',
            'Cost, Performance, Scalability, Stability',
            'Legality, Aesthetic, Salinity, Hopium',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 21,
        question: "Explain three major advantages of cloud computing",
        answer: "Flexibility, Easy to Recover, and Low Use Cost",
        options: [
            'Flexibility, Easy to Recover, and Low Use Cost',
            'Visibility, Communication, and Technological Density',
            'Easy to Recover, Momentum, and Bracketing',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 22,
        question: "Considering cost and performance, which distributions are mostly suitable for a business that aims to reduce licensing costs, while keeping performance at its highest? Explain why.",
        answer: "CentOS includes Red Hat products while being free. Ubuntu LTS guarantees long support cycles, and Debian GNU/Linux are also often used in enterprise environments",
        options: [
            'GoboLinux',
            'RHEL',
            'CentOS',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 23,
        question: "What are the major advantages of the Raspberry Pi and which functions can they take in business?",
        answer: "Very small hardware and low cost. Can handle web traffic, it can be used as a server, a firewall, main board for robots and other small devices",
        options: [
            'Very small hardware and low cost',
            'Can replace high-end GPUs',
            'nom nom nom',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },

    {
        id: 24,
        question: "What range of distributions does Amazon Cloud Services and Google Cloud offer? Name at least three common ones and two different ones.",
        answer: "The common distributions between Amazon and Google Cloud Services are Ubuntu, CentOS and Red Hat Enterprise Linux. Each cloud provider also offers specific distributions that the other one doesn’t. Amazon has Amazon Linux and Kali Linux, while Google offers the use of FreeBSD and Windows Servers.",
        options: [
            'Common: Fedora, CentOS and SUSE',
            'Common: Ubuntu, CentOS and Red Hat Enterprise Linux',
            'Common: Gentoo, Linux Mint and Arch',
        ],
        exam: "essentials",
        topic: 1,
        module: 1.1
    },



    // Module 1.2



    // {
    //     id: 25,
    //     question: "25",
    //     answer: "25",
    //     options: [
    //         'A',
    //         'B',
    //         'C',
    //     ],
    //     exam: "essentials",
    //     topic: 1,
    //     module: 1.2
    // },

]


export default FlashcardList