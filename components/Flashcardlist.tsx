// Comment out to see if this line is needed:
//import React from 'react'


// We could make serparate FlashcardList Variables for each Exam? 
// or each Topic even potentially?

const FlashcardList = [
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id:20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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
        id: 25,
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

]


export default FlashcardList