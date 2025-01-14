const sections = [
  {
    name: "General Enrolment Questions",
    id: "general-enrolment-questions",
    questions: [
      {
        title: "What courses are offered by the School of Infocomm?",
        answer: 'We offer diplomas in fields such as Information Technology, Digital Design & Development, Cybersecurity, and more. Visit the "Courses" page for a full list.'
      },
      {
        title: "What are the entry requirements for SOI courses?",
        answer: 'Entry requirements vary by course. Generally, you need to meet the GCE O-Level, Nitec, or Higher Nitec qualifications. Refer to the "Admissions Requirements" page for details.'
      },
      {
        title: "Can I switch courses after enrolling?",
        answer: "Course transfers are subject to approval. Please contact our Admissions Office for assistance."
      }
    ]
  },
  {
    name: "Financial Assistance and Scholarships",
    id: "fa-scholarship-questions",
    questions: [
      {
        title: "Are there scholarships available for SOI students?",
        answer: 'Yes, we offer various scholarships, including the RP Merit Scholarship and industry-sponsored scholarships. Visit the "Scholarships" page for more information.'
      },
      {
        title: "What financial assistance schemes are available?",
        answer: 'RP provides financial assistance schemes like the Tuition Fee Loan and Mendaki Tertiary Tuition Fee Subsidy. Visit the "Financial Assistance" page for more details.'
      },
      {
        title: "Can I pay my fees in installments?",
        answer: "Yes, installment payment plans are available for eligible students. Contact the Finance Office for further assistance."
      }
    ]
  },
  {
    name: "Course-Related Questions",
    id: "course-related-questions",
    questions: [
      {
        title: "What is the duration of each diploma course?",
        answer: "Diploma courses typically last three years, including internships or final-year projects.",
      },
      {
        title: "Is an internship part of the curriculum?",
        answer: "Yes, internships are mandatory for all diploma programs. They typically take place during the third year."
      },
      {
        title: "Can I take electives from other schools?",
        answer: "Yes, RP allows students to take electives from other schools as part of the broadening modules."
      }
    ]
  },
  {
    name: "Campus Life",
    id: "campus-life-questions",
    questions: [
      {
        title: "What facilities are available for SOI students?",
        answer: "SOI students have access to state-of-the-art labs, project rooms, and collaborative spaces. Additionally, RP offers facilities like a library, gym, and canteen."
      },
      {
        title: "Are there clubs or CCAs I can join?",
        answer: "Yes, RP offers a variety of Co-Curricular Activities (CCAs) such as the SOI Programming Club, Tech Club, and more."
      }
    ]
  }
]

export default sections;


const diplomas = [
  {
    name: "Information Technology",
    id: "information-technology",
    modules: [
      {
        name: "UI/UX Design for Apps",
        id: "C218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        lecturer: {
          name: "Azhar Kamar",
          title: "Lecturer"
        }
      },
      {
        name: "Mobile App Development",
        id: "C346",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        lecturer: {
          name: "Derek Lee",
          title: "Lecturer"
        }
      }
    ]
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    modules: [
      {
        name: "Software Application Development",
        id: "C237",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        lecturer: {
          name: "Hannah Lim",
          title: "Lecturer"
        }
      },
      {
        name: "Payment Technologies",
        id: "C372",
        desc: "This moule introduces students to different payment technologies and systems.",
        lecturer: {
          name: "Magdalene Lim",
          title: "Senior Lecturer"
        }
      }
    ]
  },
  {
    name: "Applied AI & Analytics",
    id: "applied-ai-analytics",
    modules: [
      {
        name: "AI Essentials and Innovations",
        id: "C240",
        desc: "Students will learn the AI terminology and landscape, the basic concepts and history of AI, and how to evaluate AI outputs.",
        lecturer: {
          name: "Olivia Tan",
          title: "Lecturer"
        }
      },
      {
        name: "Deep Learning for Visual Intelligence",
        id: "C384",
        desc: "This module aims to equip students with a comprehensive understanding of deep learning techniques and their applications in visual intelligence.",
        lecturer: {
          name: "John Lim",
          title: "Lecturer"
        }
      }
    ]
  },
  {
    name: "Enterprise Cloud Computing & Management",
    id: "cloud-computing-management",
    modules: [
      {
        name: "DevOps Fundamentals",
        id: "C270",
        desc: "This module covers the fundamentals of DevOps approaches that bridge the gap between software developers and IT operations teams through a practical and hands-on approach.",
        lecturer: {
          name: "Travis Seah",
          title: "Lecturer"
        }
      },
      {
        name: "Cloud Administration",
        id: "C320",
        desc: "This module covers essential skills in cloud platform administration. Students will learn how to manage cloud services that span storage, networking and cloud capabilities. They will also learn the concepts related to each service across the entire IT lifecycle.",
        lecturer: {
          name: "Sherrie Tey",
          title: "Senior Lecturer"
        }
      }
    ]
  },
  {
    name: "Cybersecurity & Digital Forensics",
    id: "cybersecurity-digital-forensics",
    modules: [
      {
        name: "Digital Security and Forensics",
        id: "C331",
        desc: "Digital Security includes learning the elements of IT security from a digital forensics perspective. It covers areas like Cryptography, Steganography, Intrusion Detection, and Malware where a forensics investigator should be familiar with in retrieving evidence from a digital media.",
        lecturer: {
          name: "Aini Izz",
          title: "Senior Lecturer"
        }
      },
      {
        name: "Internetworking Security",
        id: "C335",
        desc: "This module covers the principles of high availability and secure network architecture design. Students will be equipped with the necessary skills to be able to configure, troubleshoot and monitor network appliances in order to maintain confidentiality, integrity and availability of data.",
        lecturer: {
          name: "Linda Ong",
          title: "Lecturer"
        }
      }
    ]    
  },
  {
    name: "Common ICT Programme",
    id: "common-ict",
    modules: [
      {
        name: "Programming Fundamentals I",
        id: "C110",
        desc: "This module introduces students to computational thinking for problem-solving in computer programming and the fundamental concepts and constructs applicable to most programming languages.",
        lecturer: {
          name: "Leonard Gan",
          title: "Lecturer"
        }
      },
      {
        name: "Computer System Technologies",
        id: "C227",
        desc: "This module covers the concepts and fundamentals of computer systems and the various software that power computers today. Students will learn effective workstation administration and gain an understanding of network technologies. Problems designed to encourage practical hands-on exploration will be used.",
        lecturer: {
          name: "Kong Chee Chong",
          title: "Lecturer"
        }
      }
    ]
  }
]

export function getModules({ moduleId, diplomaId }) {
  return diplomas
  .find(({ id }) => id === diplomaId)
  .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
  return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id }) => ({ name, id }));
}