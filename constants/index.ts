export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/borrow-records",
    text: "Borrow Records",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullname: "Full name",
  email: "Email",
  universityId: "University ID Number",
  password: "Password",
  universityCard: "Upload University ID Card",
};

export const FIELD_TYPES = {
  fullname: "text",
  email: "email",
  universityId: "number",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson",
    genre: "Computer Science",
    rating: 4.7,
    total_copies: 20,
    available_copies: 10,
    description:
      "Structure and Interpretation of Computer Programs (SICP) is a computer science textbook by Massachusetts Institute of Technology professors Harold Abelson and Gerald Jay Sussman with Julie Sussman. It is known as the 'Wizard Book' in hacker culture. It teaches fundamental principles of computer programming, including recursion, abstraction, modularity, and programming language design and implementation.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/71BBXQnykuL._SL1500_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "This has been recommended as the best introduction to Programming and CS by many prominent Computer Scientists and programmers alike.",
  },
  {
    id: 2,
    title: "Mathematics for Computer Science",
    author: "Eric Lehman",
    genre: "Mathematics",
    rating: 3.6,
    total_copies: 99,
    available_copies: 50,
    description:
      "his book covers elementary discrete mathematics for computer science and engineering. It emphasizes mathematical definitions and proofs as well as applicable methods. Topics include formal logic notation, proof methods; induction, well-ordering; sets, relations; elementary graph theory; integer congruences; asymptotic notation and growth of functions; permutations and combinations, counting principles; discrete probability. Further selected topics may also be covered, such as recursive definition and structural induction; state machines and invariants; recurrences; generating functions.",
    color: "#ad435a",
    cover: "https://m.media-amazon.com/images/I/51TPn051e9L._SL1360_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "This book will serve as a first introduction to proof based mathematics and contains excellent exercises and problem sets. Many of the exercises are challenging and will require considerable independent study and research outside the materials which are directly presented in the book. One of the proofs required exploring Gelfond–Schneider theorem -- something which require the reader to explore further on his own. But nevertheless, these exercises present excellent opportunities for mathematical thinking.",
  },
  {
    id: 3,
    title: "Computer Systems: A Programmer's Perspective",
    author: "Randal Bryant",
    genre: "Computer Science",
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      "Computer systems: A Programmer’s Perspective explains the underlying elements common among all computer systems and how they affect general application performance. Written from the programmer’s perspective, this book strives to teach readers how understanding basic elements of computer systems and executing real practice can lead them to create better programs. Spanning across computer science themes such as hardware architecture, the operating system, and systems software, the Third Edition serves as a comprehensive introduction to programming. This book strives to create programmers who understand all elements of computer systems and will be able to engage in any application of the field--from fixing faulty software, to writing more capable programs, to avoiding common flaws. It lays the groundwork for readers to delve into more intensive topics such as computer architecture, embedded systems, and cybersecurity.",
    color: "#dedfd9",
    cover: "https://m.media-amazon.com/images/I/81ZugrP5S3L._SY342_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Its a very good book and it's organization is fantastic as well. The most Important thing about this book is that it introduces Computer architecture from a very practice oriented viewpoint.What happens underneath your C code and How the computer deals with it.",
  },
  {
    id: 4,
    title: "Operating Systems: Three Easy Pieces",
    author: "Remzi H. Arpaci-Dusseau",
    genre: "Computer Science",
    rating: 4.6,
    total_copies: 78,
    available_copies: 50,
    description:
      "OSTEP ('oh step'), or the 'the comet book', represents the culmination of years of teaching intro to operating systems to both undergraduates and graduates at the University of Wisconsin-Madison Computer Sciences department for nearly 20 years.The book is organized around three concepts fundamental to OS construction: virtualization (of CPU and memory), concurrency (locks and condition variables), and persistence (disks, RAIDS, and file systems).The material, if combined with serious project work and homeworks, will lead students to a deeper understanding and appreciation of modern OSes.The authors, Remzi and Andrea Arpaci-Dusseau, are both professors of Computer Sciences at the University of Wisconsin-Madison. They have been doing research in computer systems for over 20 years, working together since their first graduate operating systems class at U.C. Berkeley in 1993.Since that time, they have published over 100 papers on the performance and reliability of many aspects of modern computer systems, with a special focus on file and storage systems. Their work has been recognized with numerous best-paper awards, and some of their innovations can be found in the Linux and BSD operating systems today.",
    color: "#000000",
    cover: "https://m.media-amazon.com/images/I/61UIpzqnkRL._SL1499_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "If you are looking for an introductory text for OS then this is it. This book goes in just the right amount of detail and it manages to simplify a seemingly difficult subject. While Galvin is a great book, its language is too dry in comparison to this book's interactive approach. In that way, it is quite similar to the Head First series.",
  },
  {
    id: 5,
    title: "Computer Networking: A Top-Down Approach",
    author: "James Kurose",
    genre: "Computer Science",
    rating: 4.3,
    total_copies: 23,
    available_copies: 23,
    description:
      "For courses in Networking/Communications Motivates readers with a top-down, layered approach to computer networking Unique among computer networking texts, the Seventh Edition of the popular Computer Networking: A Top Down Approach builds on the author’s long tradition of teaching this complex subject through a layered approach in a “top-down manner. ” The text works its way from the application layer down toward the physical layer, motivating readers by exposing them to important concepts early in their study of networking. Focusing on the Internet and the fundamentally important issues of networking, this text provides an excellent foundation for readers interested in computer science and electrical engineering, without requiring extensive knowledge of programming or mathematics. The Seventh Edition has been updated to reflect the most important and exciting recent advances in networking.",
    color: "#9794b1",
    cover: "https://m.media-amazon.com/images/I/81ewUnANZPL._SL1500_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "This is an excellent book for undergraduate seniors and first year graduate course on computer networks. Except for physical layer, all TCP/IP layers are discussed in orderly manner with principles and examples. Must have for networking specialists. Publisher, Pearson High Education, provides enough resources for both instructors and students to augment their studies.",
  },
  {
    id: 6,
    title:
      "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
    author: "Martin Kleppmann",
    genre: "Computer Science",
    rating: 4.7,
    total_copies: 56,
    available_copies: 56,
    description:
      " Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords? In this practical and comprehensive guide, author Martin Kleppmann helps you navigate this diverse landscape by examining the pros and cons of various technologies for processing and storing data. Software keeps changing, but the fundamental principles remain the same. With this book, software engineers and architects will learn how to apply those ideas in practice, and how to make full use of data in modern applications. Peer under the hood of the systems you already use, and learn how to use and operate them more effectively Make informed decisions by identifying the strengths and weaknesses of different tools Navigate the trade-offs around consistency, scalability, fault tolerance, and complexity Understand the distributed systems research upon which modern databases are built Peek behind the scenes of major online services, and learn from their architectures.",
    color: "#e81838",
    cover: "https://m.media-amazon.com/images/I/71YL95jVDpL._SL1331_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "This is a gold standard book for distributed systems design especially focusing on storage components with not just theoretical aspects but, practical insights as well. Although the book is very dense but one can learn innumerable things while going through it patiently.",
  },
  {
    id: 7,
    title: "Calculus With Analytic Geometry",
    author: "George Simmons",
    genre: "mathematics",
    rating: 4.7,
    total_copies: 25,
    available_copies: 3,
    description:
      "Written by acclaimed author and mathematician George Simmons, this revision is designed for the calculus course offered in two and four year colleges and universities. It takes an intuitive approach to calculus and focuses on the application of methods to real-world problems. Throughout the text, calculus is treated as a problem solving science of immense capability.",
    color: "#b7743d",
    cover: "https://m.media-amazon.com/images/I/61ayFJ0TSxL._SL1000_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "This book is a treasure! Very clear, and actually enjoyable to read. It's my go-to when I come up against any tricky concepts in calculus. The author understands calculus so thoroughly, and loves it so much, that he's able to make even subtle concepts crystal clear and interesting.",
  },
  {
    id: 8,
    title: "The Algorithm Design Manual",
    author: "Steven S Skiena",
    genre: "Computer Science",
    rating: 4.5,
    total_copies: 10,
    available_copies: 5,
    description:
      "Most professional programmers that I've encountered are not well prepared to tackle algorithm design problems.This is a pity, because the techniques of algorithm design form one of the core practical technologies of computer Science. Designing correct, e? Cient, and implementable algorithms for real-world problems requires access to two distinct bodies of knowledge: - techniques - good algorithm designers understand several fundamental - algorithm design techniques, including data structures, dynamic programming, depth-? rst search, Backtracking, and heuristics. Perhaps the single most - portantdesigntechniqueismodeling, the art of abstracting a messy real-world application into a clean problem suitable for algorithmic attack. - resources - good algorithm designers stand on the shoulders of giants. Ratherthanlaboringfromscratchtoproduceanewalgorithmforeverytask, they can? Gure out what is known about a particular problem. Rather than re-implementing popular algorithms from scratch, they seek existing Imp- mentations to serve as a starting point. They are familiar with many classic algorithmic problems, which provide students? Cient source material to model most any application. This book is intended as a manual on algorithm design, providing access to combinatorial algorithm technology for both students and Computer professionals.",
    color: "#d91a22",
    cover: "https://m.media-amazon.com/images/I/61cqQC9+H9L._SL1153_.jpg",
    videoUrl: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "Skiena is absolute ace. Explanations are accurate and to-the-point, coverage of topics is amazingly broad without being overwhelming, there are plenty of solved examples, and the exercises are very good. The book may not be for the beginners though, but would be an excellent second book. The best part is that the second half of the book is devoted entirely to a catalog of problems one is likely to encounter in practice - and very detailed discussions of approaches to solve them. This alone makes this book immensely valuable (besides making it much more practical and applied than any other algorithms book on the market). Be sure however to implement the algorithms though, otherwise you will not see your skills improve. Especially use it in conjunction with TopCoder, CodeChef etc. and see your skills skyrocket.",
  },
];

export const sorts = [
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "available",
    label: "Available",
  },
  {
    value: "highestRated",
    label: "Highest Rated",
  },
];

export const userRoles = [
  {
    value: "user",
    label: "User",
    bgColor: "bg-[#FDF2FA]",
    textColor: "text-[#C11574]",
  },
  {
    value: "admin",
    label: "Admin",
    bgColor: "bg-[#ECFDF3]",
    textColor: "text-[#027A48]",
  },
];

export const borrowStatuses = [
  {
    value: "overdue",
    label: "Overdue",
    bgColor: "bg-[#FFF1F3]",
    textColor: "text-[#C01048]",
  },
  {
    value: "borrowed",
    label: "Borrowed",
    bgColor: "bg-[#F9F5FF]",
    textColor: "text-[#6941C6]",
  },
  {
    value: "returned",
    label: "Returned",
    bgColor: "bg-[#F0F9FF]",
    textColor: "text-[#026AA2]",
  },
];
