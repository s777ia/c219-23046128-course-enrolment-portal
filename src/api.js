const diplomas = [
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