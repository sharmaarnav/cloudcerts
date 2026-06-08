// CloudCerts - Certification Data
// Comprehensive dataset of cloud certifications for Azure, AWS, and GCP

const PROVIDERS = {
  azure: { name: "Microsoft Azure", color: "#0078d4", icon: "fa-microsoft" },
  aws: { name: "Amazon Web Services", color: "#FF9900", icon: "fa-aws" },
  gcp: { name: "Google Cloud", color: "#4285F4", icon: "fa-google" }
};

const LEVELS = {
  foundational: { name: "Foundational", order: 1 },
  associate: { name: "Associate", order: 2 },
  professional: { name: "Professional", order: 3 },
  expert: { name: "Expert", order: 4 },
  specialty: { name: "Specialty", order: 5 }
};

const CERTS = [
  // ===================== MICROSOFT AZURE - FUNDAMENTALS =====================
  {
    id: "AZ-900", code: "AZ-900", name: "Microsoft Azure Fundamentals",
    provider: "azure", level: "foundational", domain: ["business", "admin"],
    description: "Validates foundational knowledge of cloud concepts and Microsoft Azure services. It covers core Azure services, pricing, governance, and security basics. Ideal as a first step into the Azure ecosystem.",
    whoIsItFor: "Anyone new to the cloud, including students, sales professionals, and IT staff beginning their Azure journey.",
    whyGetIt: "Establishes cloud fluency and provides a recognized credential that opens the door to deeper Azure specializations.",
    skills: [
      { name: "Cloud concepts", percentage: 25 },
      { name: "Azure architecture and services", percentage: 35 },
      { name: "Azure management and governance", percentage: 30 },
      { name: "Pricing and support", percentage: 10 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean", "German", "French", "Spanish"] },
    careerRoles: ["Cloud Sales Associate", "IT Support", "Business Analyst"],
    nextCerts: ["AZ-104", "AZ-204", "AI-900", "DP-900", "SC-900"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn AZ-900 Path", type: "Free Course", url: "#" },
      { title: "AZ-900 Practice Assessment", type: "Practice Test", url: "#" }
    ]
  },
  {
    id: "AI-900", code: "AI-900", name: "Microsoft Azure AI Fundamentals",
    provider: "azure", level: "foundational", domain: ["data", "business"],
    description: "Covers fundamental concepts of artificial intelligence and machine learning, and how Azure services implement them. Includes computer vision, NLP, and generative AI basics. A great entry point for AI on Azure.",
    whoIsItFor: "Beginners exploring AI and machine learning concepts, both technical and non-technical.",
    whyGetIt: "Builds AI literacy and positions you for the AI-102 associate certification.",
    skills: [
      { name: "AI workloads and considerations", percentage: 20 },
      { name: "Machine learning principles", percentage: 25 },
      { name: "Computer vision", percentage: 20 },
      { name: "Natural language processing", percentage: 20 },
      { name: "Generative AI", percentage: 15 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean", "Spanish"] },
    careerRoles: ["AI Enthusiast", "Data Analyst", "Product Manager"],
    nextCerts: ["AI-102", "DP-100"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn AI-900 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DP-900", code: "DP-900", name: "Microsoft Azure Data Fundamentals",
    provider: "azure", level: "foundational", domain: ["data"],
    description: "Introduces core data concepts and how they are implemented using Azure data services. Covers relational, non-relational, and analytics workloads. A foundation for data-focused Azure roles.",
    whoIsItFor: "Individuals starting in data, including aspiring data analysts and engineers.",
    whyGetIt: "Provides the data foundation needed for DP-203, DP-300, and DP-100.",
    skills: [
      { name: "Core data concepts", percentage: 25 },
      { name: "Relational data on Azure", percentage: 25 },
      { name: "Non-relational data on Azure", percentage: 25 },
      { name: "Analytics workloads on Azure", percentage: 25 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Data Analyst", "Database Administrator", "Data Engineer"],
    nextCerts: ["DP-203", "DP-300", "DP-100", "DP-420"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn DP-900 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SC-900", code: "SC-900", name: "Microsoft Security, Compliance, and Identity Fundamentals",
    provider: "azure", level: "foundational", domain: ["security"],
    description: "Covers the fundamentals of security, compliance, and identity across Microsoft cloud services. Introduces concepts like Zero Trust, identity management, and compliance solutions. A foundation for security careers.",
    whoIsItFor: "Anyone interested in Microsoft security, compliance, and identity offerings.",
    whyGetIt: "Provides the security foundation for SC-200, SC-300, and SC-100.",
    skills: [
      { name: "Security, compliance, identity concepts", percentage: 20 },
      { name: "Microsoft Entra capabilities", percentage: 30 },
      { name: "Microsoft security solutions", percentage: 35 },
      { name: "Microsoft compliance solutions", percentage: 15 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean", "German", "French", "Spanish"] },
    careerRoles: ["Security Analyst", "Compliance Officer", "IT Administrator"],
    nextCerts: ["SC-200", "SC-300", "SC-400", "AZ-500"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn SC-900 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "PL-900", code: "PL-900", name: "Microsoft Power Platform Fundamentals",
    provider: "azure", level: "foundational", domain: ["business", "developer"],
    description: "Introduces the business value and product capabilities of Microsoft Power Platform. Covers Power Apps, Power Automate, Power BI, and Power Virtual Agents. An entry point for low-code solutions.",
    whoIsItFor: "Business users and aspiring makers exploring low-code automation and apps.",
    whyGetIt: "Foundation for the Power Platform maker and developer certifications.",
    skills: [
      { name: "Business value of Power Platform", percentage: 20 },
      { name: "Core components", percentage: 20 },
      { name: "Power Apps", percentage: 20 },
      { name: "Power Automate", percentage: 20 },
      { name: "Power BI and Copilot Studio", percentage: 20 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Business Analyst", "Citizen Developer", "Functional Consultant"],
    nextCerts: ["PL-100", "PL-200", "PL-400"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn PL-900 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MB-910", code: "MB-910", name: "Microsoft Dynamics 365 Fundamentals (CRM)",
    provider: "azure", level: "foundational", domain: ["business"],
    description: "Covers the customer engagement capabilities of Dynamics 365 including Sales, Customer Service, Field Service, and Marketing. Introduces shared features across the CRM apps. A foundation for Dynamics 365 CRM roles.",
    whoIsItFor: "People starting with Dynamics 365 customer engagement applications.",
    whyGetIt: "Validates baseline CRM knowledge for functional consultant pathways.",
    skills: [
      { name: "Dynamics 365 Marketing", percentage: 15 },
      { name: "Dynamics 365 Sales", percentage: 20 },
      { name: "Dynamics 365 Customer Service", percentage: 20 },
      { name: "Dynamics 365 Field Service", percentage: 20 },
      { name: "Shared features", percentage: 25 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["CRM Consultant", "Business Analyst", "Sales Operations"],
    nextCerts: ["PL-200"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn MB-910 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MB-920", code: "MB-920", name: "Microsoft Dynamics 365 Fundamentals (ERP)",
    provider: "azure", level: "foundational", domain: ["business"],
    description: "Covers the finance and operations capabilities of Dynamics 365 including Finance, Supply Chain Management, and Commerce. Introduces shared ERP features. A foundation for Dynamics 365 ERP roles.",
    whoIsItFor: "People starting with Dynamics 365 finance and operations applications.",
    whyGetIt: "Validates baseline ERP knowledge for functional consultant pathways.",
    skills: [
      { name: "Dynamics 365 finance and operations", percentage: 25 },
      { name: "Dynamics 365 Finance", percentage: 20 },
      { name: "Dynamics 365 Supply Chain Management", percentage: 25 },
      { name: "Dynamics 365 Commerce and HR", percentage: 30 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["ERP Consultant", "Finance Analyst", "Supply Chain Analyst"],
    nextCerts: [],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn MB-920 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MS-900", code: "MS-900", name: "Microsoft 365 Fundamentals",
    provider: "azure", level: "foundational", domain: ["admin", "business"],
    description: "Validates foundational knowledge of Microsoft 365 cloud services and productivity solutions. Covers collaboration, security, compliance, and pricing. An entry point to Microsoft 365 administration.",
    whoIsItFor: "Those seeking to understand Microsoft 365 cloud offerings and adoption.",
    whyGetIt: "Foundation for Microsoft 365 admin roles such as MS-700.",
    skills: [
      { name: "Cloud concepts", percentage: 15 },
      { name: "Microsoft 365 apps and services", percentage: 35 },
      { name: "Security, compliance, identity", percentage: 25 },
      { name: "Pricing, licensing, support", percentage: 25 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 40, duration: "45 minutes", passingScore: "700/1000", cost: "$99 USD", format: "Multiple choice", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["IT Support", "Microsoft 365 Administrator", "Collaboration Specialist"],
    nextCerts: ["MS-700", "SC-900"],
    prevCerts: [],
    studyResources: [
      { title: "Microsoft Learn MS-900 Path", type: "Free Course", url: "#" }
    ]
  },

  // ===================== MICROSOFT AZURE - ASSOCIATE =====================
  {
    id: "AZ-104", code: "AZ-104", name: "Microsoft Azure Administrator",
    provider: "azure", level: "associate", domain: ["admin", "infrastructure"],
    description: "Validates the skills to implement, manage, and monitor an organization's Azure environment. Covers identities, governance, storage, compute, and virtual networking. A core credential for Azure operations.",
    whoIsItFor: "Cloud administrators managing Azure resources and infrastructure.",
    whyGetIt: "One of the most in-demand Azure certs, foundational for architect and DevOps paths.",
    skills: [
      { name: "Manage Azure identities and governance", percentage: 22 },
      { name: "Implement and manage storage", percentage: 18 },
      { name: "Deploy and manage Azure compute resources", percentage: 25 },
      { name: "Implement and manage virtual networking", percentage: 18 },
      { name: "Monitor and maintain Azure resources", percentage: 17 }
    ],
    prerequisites: { experience: "6+ months hands-on Azure administration.", certs: ["AZ-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies, labs", languages: ["English", "Japanese", "Chinese", "Korean", "German", "French", "Spanish"] },
    careerRoles: ["Azure Administrator", "Cloud Engineer", "Systems Administrator"],
    nextCerts: ["AZ-305", "AZ-500", "AZ-700", "AZ-400"],
    prevCerts: ["AZ-900"],
    studyResources: [
      { title: "Microsoft Learn AZ-104 Path", type: "Free Course", url: "#" },
      { title: "AZ-104 Hands-on Labs", type: "Lab", url: "#" }
    ]
  },
  {
    id: "AZ-204", code: "AZ-204", name: "Developing Solutions for Microsoft Azure",
    provider: "azure", level: "associate", domain: ["developer"],
    description: "Validates skills in designing, building, testing, and maintaining cloud applications on Azure. Covers compute, storage, security, monitoring, and connecting to Azure services. The key credential for Azure developers.",
    whoIsItFor: "Developers building cloud-native applications on Azure.",
    whyGetIt: "Essential for Azure developer roles and a stepping stone to AZ-400 and AZ-305.",
    skills: [
      { name: "Develop Azure compute solutions", percentage: 25 },
      { name: "Develop for Azure storage", percentage: 15 },
      { name: "Implement Azure security", percentage: 20 },
      { name: "Monitor, troubleshoot, optimize", percentage: 15 },
      { name: "Connect to and consume services", percentage: 25 }
    ],
    prerequisites: { experience: "1-2 years development experience, proficiency in one Azure-supported language.", certs: ["AZ-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean", "German", "French", "Spanish"] },
    careerRoles: ["Azure Developer", "Cloud Software Engineer", "Backend Developer"],
    nextCerts: ["AZ-400", "AZ-305", "DP-420"],
    prevCerts: ["AZ-900"],
    studyResources: [
      { title: "Microsoft Learn AZ-204 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-400", code: "AZ-400", name: "Designing and Implementing Microsoft DevOps Solutions",
    provider: "azure", level: "expert", domain: ["devops", "developer"],
    description: "Validates expertise in combining people, processes, and technologies to deliver value continuously. Covers CI/CD, infrastructure as code, security, and monitoring. The premier Azure DevOps credential.",
    whoIsItFor: "DevOps engineers automating delivery on Azure.",
    whyGetIt: "Demonstrates advanced DevOps capability, highly valued for senior engineering roles.",
    skills: [
      { name: "Configure processes and communications", percentage: 11 },
      { name: "Design and implement source control", percentage: 19 },
      { name: "Design and implement build/release pipelines", percentage: 33 },
      { name: "Develop a security and compliance plan", percentage: 16 },
      { name: "Implement instrumentation strategy", percentage: 21 }
    ],
    prerequisites: { experience: "Experience with Agile, administration, and development.", certs: ["AZ-104", "AZ-204"] },
    examDetails: { questions: 50, duration: "150 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["DevOps Engineer", "Site Reliability Engineer", "Platform Engineer"],
    nextCerts: ["AZ-305"],
    prevCerts: ["AZ-104", "AZ-204"]
    ,
    studyResources: [
      { title: "Microsoft Learn AZ-400 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-500", code: "AZ-500", name: "Microsoft Azure Security Technologies",
    provider: "azure", level: "associate", domain: ["security"],
    description: "Validates skills in implementing security controls, managing identity and access, and protecting data, applications, and networks. Covers Microsoft Entra, security operations, and platform protection. A core Azure security credential.",
    whoIsItFor: "Security engineers implementing protections on Azure.",
    whyGetIt: "Key credential for cloud security roles and prerequisite mindset for SC-100.",
    skills: [
      { name: "Manage identity and access", percentage: 25 },
      { name: "Secure networking", percentage: 20 },
      { name: "Secure compute, storage, databases", percentage: 20 },
      { name: "Manage security operations", percentage: 35 }
    ],
    prerequisites: { experience: "Hands-on Azure administration and security experience.", certs: ["AZ-104", "SC-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Azure Security Engineer", "Cloud Security Analyst", "Security Operations"],
    nextCerts: ["SC-100", "SC-200"],
    prevCerts: ["AZ-104", "SC-900"],
    studyResources: [
      { title: "Microsoft Learn AZ-500 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-700", code: "AZ-700", name: "Designing and Implementing Microsoft Azure Networking Solutions",
    provider: "azure", level: "associate", domain: ["infrastructure", "admin"],
    description: "Validates skills in planning, implementing, and managing Azure networking. Covers virtual networks, hybrid connectivity, routing, private access, and load balancing. A specialized networking credential.",
    whoIsItFor: "Network engineers designing Azure connectivity solutions.",
    whyGetIt: "Deepens networking expertise valued in infrastructure and architecture roles.",
    skills: [
      { name: "Design and implement core networking", percentage: 25 },
      { name: "Design and implement routing", percentage: 30 },
      { name: "Secure and monitor networks", percentage: 15 },
      { name: "Design and implement private access", percentage: 30 }
    ],
    prerequisites: { experience: "Solid networking and Azure administration knowledge.", certs: ["AZ-104"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Network Engineer", "Cloud Network Architect", "Infrastructure Engineer"],
    nextCerts: ["AZ-305"],
    prevCerts: ["AZ-104"],
    studyResources: [
      { title: "Microsoft Learn AZ-700 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AI-102", code: "AI-102", name: "Designing and Implementing a Microsoft Azure AI Solution",
    provider: "azure", level: "associate", domain: ["data", "developer"],
    description: "Validates skills in building, managing, and deploying AI solutions using Azure AI services. Covers computer vision, NLP, knowledge mining, and generative AI. The associate-level Azure AI engineer credential.",
    whoIsItFor: "AI engineers and developers building AI solutions on Azure.",
    whyGetIt: "Validates applied AI skills increasingly demanded across industries.",
    skills: [
      { name: "Plan and manage Azure AI solution", percentage: 20 },
      { name: "Implement generative AI solutions", percentage: 15 },
      { name: "Implement computer vision solutions", percentage: 20 },
      { name: "Implement natural language processing", percentage: 25 },
      { name: "Implement knowledge mining and document intelligence", percentage: 20 }
    ],
    prerequisites: { experience: "Programming experience and familiarity with Azure AI services.", certs: ["AI-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["AI Engineer", "Machine Learning Developer", "Cognitive Services Developer"],
    nextCerts: ["DP-100"],
    prevCerts: ["AI-900"],
    studyResources: [
      { title: "Microsoft Learn AI-102 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DP-100", code: "DP-100", name: "Designing and Implementing a Data Science Solution on Azure",
    provider: "azure", level: "associate", domain: ["data"],
    description: "Validates skills in applying data science and machine learning to implement and run workloads on Azure. Covers Azure Machine Learning, model training, deployment, and MLOps. The associate Azure data scientist credential.",
    whoIsItFor: "Data scientists operating ML workloads on Azure.",
    whyGetIt: "Demonstrates production ML skills valued for data science roles.",
    skills: [
      { name: "Design and prepare ML solution", percentage: 25 },
      { name: "Explore data and train models", percentage: 35 },
      { name: "Prepare a model for deployment", percentage: 20 },
      { name: "Deploy and retrain a model", percentage: 20 }
    ],
    prerequisites: { experience: "Python, data science, and ML experience.", certs: ["DP-900", "AI-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Data Scientist", "ML Engineer", "AI Specialist"],
    nextCerts: [],
    prevCerts: ["DP-900", "AI-900"],
    studyResources: [
      { title: "Microsoft Learn DP-100 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DP-203", code: "DP-203", name: "Data Engineering on Microsoft Azure",
    provider: "azure", level: "associate", domain: ["data"],
    description: "Validates skills in integrating, transforming, and consolidating data into structures suitable for analytics. Covers data storage, processing, security, and optimization on Azure. The Azure data engineer credential.",
    whoIsItFor: "Data engineers building analytics pipelines on Azure.",
    whyGetIt: "Highly demanded credential for data engineering and analytics roles.",
    skills: [
      { name: "Design and implement data storage", percentage: 15 },
      { name: "Develop data processing", percentage: 40 },
      { name: "Secure, monitor, optimize storage and processing", percentage: 30 },
      { name: "Implement data solutions with Fabric", percentage: 15 }
    ],
    prerequisites: { experience: "Knowledge of SQL, Python, and data processing.", certs: ["DP-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Data Engineer", "Analytics Engineer", "BI Developer"],
    nextCerts: ["DP-500"],
    prevCerts: ["DP-900"],
    studyResources: [
      { title: "Microsoft Learn DP-203 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DP-300", code: "DP-300", name: "Administering Microsoft Azure SQL Solutions",
    provider: "azure", level: "associate", domain: ["data", "admin"],
    description: "Validates skills in managing and administering SQL Server and Azure SQL database solutions. Covers deployment, security, performance, high availability, and automation. The Azure database administrator credential.",
    whoIsItFor: "Database administrators managing Azure SQL workloads.",
    whyGetIt: "Validates DBA expertise for hybrid and cloud SQL environments.",
    skills: [
      { name: "Plan and implement data platform resources", percentage: 20 },
      { name: "Implement a secure environment", percentage: 15 },
      { name: "Monitor, configure, optimize performance", percentage: 30 },
      { name: "Automate tasks and high availability", percentage: 35 }
    ],
    prerequisites: { experience: "Experience with SQL Server and Azure data services.", certs: ["DP-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Database Administrator", "Data Platform Engineer", "SQL Specialist"],
    nextCerts: ["DP-500"],
    prevCerts: ["DP-900"],
    studyResources: [
      { title: "Microsoft Learn DP-300 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DP-420", code: "DP-420", name: "Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB",
    provider: "azure", level: "associate", domain: ["data", "developer"],
    description: "Validates skills in designing and implementing data models and data distribution with Azure Cosmos DB. Covers performance optimization, integration, and maintenance. A specialized NoSQL development credential.",
    whoIsItFor: "Developers building cloud-native apps on Azure Cosmos DB.",
    whyGetIt: "Differentiates developers with NoSQL and globally distributed data skills.",
    skills: [
      { name: "Design and implement data models", percentage: 35 },
      { name: "Design and implement data distribution", percentage: 5 },
      { name: "Integrate an Azure Cosmos DB solution", percentage: 25 },
      { name: "Optimize and maintain a solution", percentage: 35 }
    ],
    prerequisites: { experience: "Development experience with Azure and NoSQL databases.", certs: ["DP-900", "AZ-204"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Cloud Developer", "NoSQL Developer", "Application Engineer"],
    nextCerts: [],
    prevCerts: ["DP-900", "AZ-204"],
    studyResources: [
      { title: "Microsoft Learn DP-420 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SC-200", code: "SC-200", name: "Microsoft Security Operations Analyst",
    provider: "azure", level: "associate", domain: ["security"],
    description: "Validates skills in mitigating threats using Microsoft Sentinel, Defender, and related tools. Covers threat detection, investigation, and response. A core security operations credential.",
    whoIsItFor: "Security operations analysts and SOC team members.",
    whyGetIt: "Demonstrates hands-on threat hunting and response with Microsoft tools.",
    skills: [
      { name: "Manage a security operations environment", percentage: 20 },
      { name: "Configure protections and detections", percentage: 15 },
      { name: "Manage incident response", percentage: 35 },
      { name: "Manage security threats with Sentinel", percentage: 30 }
    ],
    prerequisites: { experience: "Familiarity with Microsoft security tooling.", certs: ["SC-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Security Operations Analyst", "SOC Analyst", "Threat Hunter"],
    nextCerts: ["SC-100"],
    prevCerts: ["SC-900"],
    studyResources: [
      { title: "Microsoft Learn SC-200 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SC-300", code: "SC-300", name: "Microsoft Identity and Access Administrator",
    provider: "azure", level: "associate", domain: ["security"],
    description: "Validates skills in designing, implementing, and operating identity and access management using Microsoft Entra. Covers identity governance, authentication, and access. A core identity credential.",
    whoIsItFor: "Identity and access administrators managing Entra ID.",
    whyGetIt: "Demonstrates identity governance skills central to Zero Trust.",
    skills: [
      { name: "Implement identities in Microsoft Entra", percentage: 20 },
      { name: "Manage authentication and access", percentage: 30 },
      { name: "Manage application access", percentage: 25 },
      { name: "Plan and implement identity governance", percentage: 25 }
    ],
    prerequisites: { experience: "Experience with identity and access concepts.", certs: ["SC-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Identity Administrator", "IAM Engineer", "Security Administrator"],
    nextCerts: ["SC-100"],
    prevCerts: ["SC-900"],
    studyResources: [
      { title: "Microsoft Learn SC-300 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SC-400", code: "SC-400", name: "Microsoft Information Protection and Compliance Administrator",
    provider: "azure", level: "associate", domain: ["security"],
    description: "Validates skills in planning and implementing information protection, data loss prevention, and compliance. Covers Microsoft Purview capabilities. A specialized compliance credential.",
    whoIsItFor: "Compliance and information protection administrators.",
    whyGetIt: "Validates data governance and compliance expertise.",
    skills: [
      { name: "Implement information protection", percentage: 35 },
      { name: "Implement data loss prevention", percentage: 30 },
      { name: "Implement data lifecycle and records management", percentage: 35 }
    ],
    prerequisites: { experience: "Familiarity with Microsoft 365 compliance solutions.", certs: ["SC-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Compliance Administrator", "Data Protection Officer", "Information Governance Specialist"],
    nextCerts: ["SC-100"],
    prevCerts: ["SC-900"],
    studyResources: [
      { title: "Microsoft Learn SC-400 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "PL-100", code: "PL-100", name: "Microsoft Power Platform App Maker",
    provider: "azure", level: "associate", domain: ["business", "developer"],
    description: "Validates skills in building solutions to simplify and automate tasks using Power Platform. Covers app design, data modeling, and automation for makers. An entry associate credential.",
    whoIsItFor: "Citizen developers building business apps with low code.",
    whyGetIt: "Validates practical maker skills for automating business processes.",
    skills: [
      { name: "Design business solutions", percentage: 20 },
      { name: "Create solutions", percentage: 55 },
      { name: "Analyze and visualize data", percentage: 25 }
    ],
    prerequisites: { experience: "Domain expertise and basic data modeling.", certs: ["PL-900"] },
    examDetails: { questions: 45, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["App Maker", "Citizen Developer", "Business Analyst"],
    nextCerts: ["PL-400", "PL-200"],
    prevCerts: ["PL-900"],
    studyResources: [
      { title: "Microsoft Learn PL-100 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "PL-200", code: "PL-200", name: "Microsoft Power Platform Functional Consultant",
    provider: "azure", level: "associate", domain: ["business"],
    description: "Validates skills in configuring Microsoft Dataverse, building apps, creating flows, and implementing chatbots. Covers functional consulting for Power Platform. A consultant-focused credential.",
    whoIsItFor: "Functional consultants implementing Power Platform solutions.",
    whyGetIt: "Validates the breadth needed for Power Platform consulting roles.",
    skills: [
      { name: "Configure Microsoft Dataverse", percentage: 25 },
      { name: "Create apps by using Power Apps", percentage: 20 },
      { name: "Create and manage Power Automate", percentage: 15 },
      { name: "Implement Power Virtual Agents and integrations", percentage: 40 }
    ],
    prerequisites: { experience: "Experience with Power Platform components.", certs: ["PL-900"] },
    examDetails: { questions: 45, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Functional Consultant", "Solution Consultant", "Business Applications Specialist"],
    nextCerts: ["PL-600"],
    prevCerts: ["PL-900"],
    studyResources: [
      { title: "Microsoft Learn PL-200 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "PL-400", code: "PL-400", name: "Microsoft Power Platform Developer",
    provider: "azure", level: "associate", domain: ["developer", "business"],
    description: "Validates skills in designing, developing, and extending Power Platform solutions with code. Covers custom connectors, plug-ins, and integrations. A pro-developer credential.",
    whoIsItFor: "Developers extending Power Platform with custom code.",
    whyGetIt: "Validates pro-code extensibility skills for enterprise Power Platform.",
    skills: [
      { name: "Create a technical design", percentage: 10 },
      { name: "Configure Microsoft Dataverse", percentage: 15 },
      { name: "Create and configure Power Apps", percentage: 15 },
      { name: "Configure business process automation", percentage: 10 },
      { name: "Extend the user experience and platform", percentage: 50 }
    ],
    prerequisites: { experience: "Development experience with JavaScript, C#, and APIs.", certs: ["PL-900"] },
    examDetails: { questions: 45, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Power Platform Developer", "Solution Developer", "Integration Engineer"],
    nextCerts: ["PL-600"],
    prevCerts: ["PL-900", "PL-100"],
    studyResources: [
      { title: "Microsoft Learn PL-400 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "PL-600", code: "PL-600", name: "Microsoft Power Platform Solution Architect",
    provider: "azure", level: "expert", domain: ["architect", "business"],
    description: "Validates skills in leading successful Power Platform implementations as a solution architect. Covers requirements, architecture, and implementation oversight. The expert-level Power Platform credential.",
    whoIsItFor: "Solution architects leading Power Platform engagements.",
    whyGetIt: "Premier credential for Power Platform architecture leadership.",
    skills: [
      { name: "Perform solution envisioning and requirement analysis", percentage: 35 },
      { name: "Architect a solution", percentage: 40 },
      { name: "Implement the solution", percentage: 25 }
    ],
    prerequisites: { experience: "Functional and technical Power Platform experience.", certs: ["PL-200", "PL-400"] },
    examDetails: { questions: 45, duration: "150 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Solution Architect", "Lead Consultant", "Enterprise Architect"],
    nextCerts: [],
    prevCerts: ["PL-200", "PL-400"],
    studyResources: [
      { title: "Microsoft Learn PL-600 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MS-700", code: "MS-700", name: "Managing Microsoft Teams",
    provider: "azure", level: "associate", domain: ["admin"],
    description: "Validates skills in planning, deploying, configuring, and managing Microsoft Teams. Covers collaboration, meetings, and governance. A Teams administrator credential.",
    whoIsItFor: "Microsoft Teams administrators managing collaboration.",
    whyGetIt: "Validates Teams platform administration expertise.",
    skills: [
      { name: "Configure and manage a Teams environment", percentage: 35 },
      { name: "Manage chat, teams, channels, apps", percentage: 35 },
      { name: "Manage meetings and calling", percentage: 30 }
    ],
    prerequisites: { experience: "Experience administering Microsoft 365 and Teams.", certs: ["MS-900"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Teams Administrator", "Collaboration Engineer", "Microsoft 365 Administrator"],
    nextCerts: ["MS-720"],
    prevCerts: ["MS-900"],
    studyResources: [
      { title: "Microsoft Learn MS-700 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MS-720", code: "MS-720", name: "Microsoft Teams Voice Engineer",
    provider: "azure", level: "associate", domain: ["admin"],
    description: "Validates skills in planning, designing, and configuring Teams Phone, calling, and meeting solutions. Covers voice routing and device management. A Teams voice specialization.",
    whoIsItFor: "Engineers managing Teams telephony and voice.",
    whyGetIt: "Validates specialized Teams Phone and voice engineering skills.",
    skills: [
      { name: "Plan and configure Teams Phone", percentage: 40 },
      { name: "Manage Teams Phone", percentage: 35 },
      { name: "Plan and manage meetings and devices", percentage: 25 }
    ],
    prerequisites: { experience: "Teams administration and telephony experience.", certs: ["MS-700"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Teams Voice Engineer", "Telephony Engineer", "Unified Communications Specialist"],
    nextCerts: ["MS-740"],
    prevCerts: ["MS-700"],
    studyResources: [
      { title: "Microsoft Learn MS-720 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MS-740", code: "MS-740", name: "Troubleshooting Microsoft Teams",
    provider: "azure", level: "associate", domain: ["admin"],
    description: "Validates skills in troubleshooting Microsoft Teams environments including calling, meetings, and connectivity. Covers diagnostic methodologies and remediation. A Teams support specialization.",
    whoIsItFor: "Support engineers resolving Teams issues.",
    whyGetIt: "Validates advanced Teams troubleshooting capability.",
    skills: [
      { name: "Troubleshoot teams, channels, apps", percentage: 30 },
      { name: "Troubleshoot meetings and calling", percentage: 40 },
      { name: "Troubleshoot connectivity and access", percentage: 30 }
    ],
    prerequisites: { experience: "Teams administration and support experience.", certs: ["MS-700"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English"] },
    careerRoles: ["Teams Support Engineer", "Service Desk Lead", "Collaboration Support Specialist"],
    nextCerts: [],
    prevCerts: ["MS-700"],
    studyResources: [
      { title: "Microsoft Learn MS-740 Path", type: "Free Course", url: "#" }
    ]
  },

  // ===================== MICROSOFT AZURE - EXPERT =====================
  {
    id: "AZ-305", code: "AZ-305", name: "Designing Microsoft Azure Infrastructure Solutions",
    provider: "azure", level: "expert", domain: ["architect", "infrastructure"],
    description: "Validates expertise in designing cloud and hybrid solutions covering compute, network, storage, monitoring, and security. Covers translating business requirements into secure, scalable designs. The Azure Solutions Architect Expert credential.",
    whoIsItFor: "Solution architects designing end-to-end Azure infrastructure.",
    whyGetIt: "Premier architect credential commanding senior-level roles and salaries.",
    skills: [
      { name: "Design identity, governance, monitoring", percentage: 25 },
      { name: "Design data storage solutions", percentage: 20 },
      { name: "Design business continuity solutions", percentage: 20 },
      { name: "Design infrastructure solutions", percentage: 35 }
    ],
    prerequisites: { experience: "Advanced experience in IT operations and Azure administration.", certs: ["AZ-104"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies, design", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Cloud Solutions Architect", "Azure Architect", "Enterprise Architect"],
    nextCerts: ["AZ-400", "SC-100"],
    prevCerts: ["AZ-104"],
    studyResources: [
      { title: "Microsoft Learn AZ-305 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-600", code: "AZ-600", name: "Configuring and Operating a Hybrid Cloud with Microsoft Azure Stack Hub",
    provider: "azure", level: "specialty", domain: ["infrastructure", "admin"],
    description: "Validates skills in providing cloud services to end users with Azure Stack Hub. Covers managing infrastructure, offering services, and securing the platform. A hybrid cloud specialty.",
    whoIsItFor: "Engineers operating Azure Stack Hub for hybrid scenarios.",
    whyGetIt: "Validates niche hybrid cloud operations expertise.",
    skills: [
      { name: "Provide services", percentage: 40 },
      { name: "Implement data center integration", percentage: 25 },
      { name: "Manage infrastructure", percentage: 35 }
    ],
    prerequisites: { experience: "Azure administration and data center operations.", certs: ["AZ-104"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Hybrid Cloud Engineer", "Data Center Operator", "Azure Stack Administrator"],
    nextCerts: [],
    prevCerts: ["AZ-104"],
    studyResources: [
      { title: "Microsoft Learn AZ-600 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-800", code: "AZ-800", name: "Administering Windows Server Hybrid Core Infrastructure",
    provider: "azure", level: "associate", domain: ["infrastructure", "admin"],
    description: "Validates skills in administering Windows Server core workloads in on-premises and hybrid environments. Covers identity, storage, compute, and networking. Part of the Windows Server Hybrid Administrator path.",
    whoIsItFor: "Administrators managing Windows Server in hybrid setups.",
    whyGetIt: "Validates hybrid Windows Server administration skills.",
    skills: [
      { name: "Deploy and manage AD DS in hybrid", percentage: 30 },
      { name: "Manage Windows Servers and workloads", percentage: 20 },
      { name: "Manage virtual machines and containers", percentage: 20 },
      { name: "Implement and manage networking", percentage: 30 }
    ],
    prerequisites: { experience: "Windows Server administration experience.", certs: ["AZ-104"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Windows Server Administrator", "Hybrid Infrastructure Engineer", "Systems Engineer"],
    nextCerts: ["AZ-801"],
    prevCerts: ["AZ-104"],
    studyResources: [
      { title: "Microsoft Learn AZ-800 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-801", code: "AZ-801", name: "Configuring Windows Server Hybrid Advanced Services",
    provider: "azure", level: "expert", domain: ["infrastructure", "admin"],
    description: "Validates skills in configuring advanced Windows Server services in hybrid environments. Covers security, high availability, disaster recovery, and migration. Completes the Windows Server Hybrid Administrator path.",
    whoIsItFor: "Administrators implementing advanced hybrid Windows Server services.",
    whyGetIt: "Validates advanced hybrid administration including DR and migration.",
    skills: [
      { name: "Secure Windows Server on-prem and hybrid", percentage: 25 },
      { name: "Implement high availability", percentage: 20 },
      { name: "Implement disaster recovery", percentage: 15 },
      { name: "Migrate servers and workloads, monitor", percentage: 40 }
    ],
    prerequisites: { experience: "Advanced Windows Server and Azure experience.", certs: ["AZ-800"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Hybrid Infrastructure Engineer", "Senior Systems Engineer", "Cloud Migration Specialist"],
    nextCerts: ["AZ-305"],
    prevCerts: ["AZ-800"],
    studyResources: [
      { title: "Microsoft Learn AZ-801 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SC-100", code: "SC-100", name: "Microsoft Cybersecurity Architect",
    provider: "azure", level: "expert", domain: ["security", "architect"],
    description: "Validates expertise in designing and evolving cybersecurity strategy to protect an organization. Covers Zero Trust, GRC, security operations, and data and application security architecture. The expert security architect credential.",
    whoIsItFor: "Cybersecurity architects designing enterprise security strategy.",
    whyGetIt: "Top-tier security credential for architect and CISO-track roles.",
    skills: [
      { name: "Design a Zero Trust strategy and architecture", percentage: 30 },
      { name: "Evaluate GRC technical strategies", percentage: 20 },
      { name: "Design security for infrastructure", percentage: 25 },
      { name: "Design strategy for data and applications", percentage: 25 }
    ],
    prerequisites: { experience: "Advanced security experience; one associate security cert required.", certs: ["AZ-500", "SC-200", "SC-300"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies, design", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["Cybersecurity Architect", "Security Lead", "Principal Security Engineer"],
    nextCerts: [],
    prevCerts: ["AZ-500", "SC-200", "SC-300"],
    studyResources: [
      { title: "Microsoft Learn SC-100 Path", type: "Free Course", url: "#" }
    ]
  },

  // ===================== MICROSOFT AZURE - SPECIALTY =====================
  {
    id: "AZ-120", code: "AZ-120", name: "Planning and Administering Microsoft Azure for SAP Workloads",
    provider: "azure", level: "specialty", domain: ["infrastructure", "architect"],
    description: "Validates skills in planning, migrating, and operating SAP solutions on Azure. Covers infrastructure design, migration, and operations for SAP. A specialized enterprise workload credential.",
    whoIsItFor: "Architects and engineers running SAP on Azure.",
    whyGetIt: "Validates rare and lucrative SAP-on-Azure expertise.",
    skills: [
      { name: "Migrate SAP workloads to Azure", percentage: 15 },
      { name: "Design an Azure solution for SAP", percentage: 30 },
      { name: "Build and deploy Azure for SAP", percentage: 25 },
      { name: "Validate and operate Azure for SAP", percentage: 30 }
    ],
    prerequisites: { experience: "SAP and Azure administration experience.", certs: ["AZ-104"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["SAP on Azure Architect", "Enterprise Workload Engineer", "Cloud Migration Specialist"],
    nextCerts: [],
    prevCerts: ["AZ-104"],
    studyResources: [
      { title: "Microsoft Learn AZ-120 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AZ-140", code: "AZ-140", name: "Configuring and Operating Microsoft Azure Virtual Desktop",
    provider: "azure", level: "specialty", domain: ["infrastructure", "admin"],
    description: "Validates skills in planning, delivering, and managing virtual desktop experiences with Azure Virtual Desktop. Covers host pools, images, security, and user experience. A virtual desktop specialty.",
    whoIsItFor: "Administrators delivering virtual desktops on Azure.",
    whyGetIt: "Validates AVD expertise for modern workplace and VDI roles.",
    skills: [
      { name: "Plan and implement an AVD infrastructure", percentage: 40 },
      { name: "Manage access and security", percentage: 20 },
      { name: "Manage user environments and apps", percentage: 20 },
      { name: "Monitor and maintain an AVD infrastructure", percentage: 20 }
    ],
    prerequisites: { experience: "Azure administration and virtualization experience.", certs: ["AZ-104"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese", "Chinese", "Korean"] },
    careerRoles: ["AVD Administrator", "VDI Engineer", "Modern Workplace Engineer"],
    nextCerts: [],
    prevCerts: ["AZ-104"],
    studyResources: [
      { title: "Microsoft Learn AZ-140 Path", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DP-500", code: "DP-500", name: "Designing and Implementing Enterprise-Scale Analytics Solutions Using Microsoft Azure and Microsoft Fabric",
    provider: "azure", level: "specialty", domain: ["data"],
    description: "Validates skills in implementing and managing enterprise-scale analytics solutions with Azure and Microsoft Fabric and Power BI. Covers data modeling, exploration, and governance. An advanced analytics specialty.",
    whoIsItFor: "Senior analytics professionals and BI architects.",
    whyGetIt: "Validates enterprise analytics leadership across Azure and Fabric.",
    skills: [
      { name: "Implement and manage a data analytics environment", percentage: 25 },
      { name: "Query and transform data", percentage: 20 },
      { name: "Implement and manage data models", percentage: 25 },
      { name: "Explore and visualize data", percentage: 30 }
    ],
    prerequisites: { experience: "Experience with data analytics and Power BI.", certs: ["DP-203", "DP-300"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "700/1000", cost: "$165 USD", format: "Multiple choice, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Analytics Engineer", "BI Architect", "Data Analytics Lead"],
    nextCerts: [],
    prevCerts: ["DP-203", "DP-300"],
    studyResources: [
      { title: "Microsoft Learn DP-500 Path", type: "Free Course", url: "#" }
    ]
  },

  // ===================== AWS - FOUNDATIONAL =====================
  {
    id: "CLF-C02", code: "CLF-C02", name: "AWS Certified Cloud Practitioner",
    provider: "aws", level: "foundational", domain: ["business", "admin"],
    description: "Validates foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support. It is the entry point to all AWS certifications. Ideal for individuals new to AWS.",
    whoIsItFor: "Anyone seeking foundational AWS Cloud knowledge across technical and non-technical roles.",
    whyGetIt: "Establishes AWS fluency and serves as a launchpad for associate-level certs.",
    skills: [
      { name: "Cloud concepts", percentage: 24 },
      { name: "Security and compliance", percentage: 30 },
      { name: "Cloud technology and services", percentage: 34 },
      { name: "Billing, pricing, and support", percentage: 12 }
    ],
    prerequisites: { experience: "No prior experience required; up to 6 months AWS exposure recommended.", certs: [] },
    examDetails: { questions: 65, duration: "90 minutes", passingScore: "700/1000", cost: "$100 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Spanish", "German", "French", "Portuguese"] },
    careerRoles: ["Cloud Sales", "Project Manager", "IT Support"],
    nextCerts: ["SAA-C03", "DVA-C02", "SOA-C02", "AIF-C01"],
    prevCerts: [],
    studyResources: [
      { title: "AWS Skill Builder CLF-C02", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "AIF-C01", code: "AIF-C01", name: "AWS Certified AI Practitioner",
    provider: "aws", level: "foundational", domain: ["data", "business"],
    description: "Validates foundational knowledge of AI, machine learning, and generative AI concepts and AWS AI services. Covers responsible AI, prompt engineering basics, and use cases. An entry point for AI on AWS.",
    whoIsItFor: "Individuals building AI literacy and exploring AWS AI services.",
    whyGetIt: "Validates AI fundamentals increasingly valued across business and tech roles.",
    skills: [
      { name: "Fundamentals of AI and ML", percentage: 20 },
      { name: "Fundamentals of generative AI", percentage: 24 },
      { name: "Applications of foundation models", percentage: 28 },
      { name: "Responsible AI", percentage: 14 },
      { name: "Security, compliance, governance", percentage: 14 }
    ],
    prerequisites: { experience: "No prior experience required; basic AWS familiarity helpful.", certs: [] },
    examDetails: { questions: 65, duration: "90 minutes", passingScore: "700/1000", cost: "$100 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Spanish", "Portuguese"] },
    careerRoles: ["AI Enthusiast", "Business Analyst", "Product Manager"],
    nextCerts: ["MLA-C01", "MLS-C01"],
    prevCerts: [],
    studyResources: [
      { title: "AWS Skill Builder AIF-C01", type: "Free Course", url: "#" }
    ]
  },

  // ===================== AWS - ASSOCIATE =====================
  {
    id: "SAA-C03", code: "SAA-C03", name: "AWS Certified Solutions Architect – Associate",
    provider: "aws", level: "associate", domain: ["architect", "infrastructure"],
    description: "Validates the ability to design secure, resilient, high-performing, and cost-optimized architectures on AWS. Covers a broad range of AWS services and design principles. One of the most popular cloud certifications.",
    whoIsItFor: "Solutions architects and engineers designing AWS solutions.",
    whyGetIt: "Highly valued credential that significantly boosts earning potential.",
    skills: [
      { name: "Design secure architectures", percentage: 30 },
      { name: "Design resilient architectures", percentage: 26 },
      { name: "Design high-performing architectures", percentage: 24 },
      { name: "Design cost-optimized architectures", percentage: 20 }
    ],
    prerequisites: { experience: "1 year of hands-on AWS experience recommended.", certs: ["CLF-C02"] },
    examDetails: { questions: 65, duration: "130 minutes", passingScore: "720/1000", cost: "$150 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese", "Spanish", "German", "French", "Portuguese"] },
    careerRoles: ["Solutions Architect", "Cloud Engineer", "Infrastructure Architect"],
    nextCerts: ["SAP-C02", "ANS-C01", "SCS-C02"],
    prevCerts: ["CLF-C02"],
    studyResources: [
      { title: "AWS Skill Builder SAA-C03", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DVA-C02", code: "DVA-C02", name: "AWS Certified Developer – Associate",
    provider: "aws", level: "associate", domain: ["developer"],
    description: "Validates skills in developing, deploying, and debugging cloud-based applications using AWS. Covers core services, security, deployment, and troubleshooting. The AWS developer credential.",
    whoIsItFor: "Developers building and maintaining AWS applications.",
    whyGetIt: "Validates applied AWS development skills for cloud engineering roles.",
    skills: [
      { name: "Development with AWS services", percentage: 32 },
      { name: "Security", percentage: 26 },
      { name: "Deployment", percentage: 24 },
      { name: "Troubleshooting and optimization", percentage: 18 }
    ],
    prerequisites: { experience: "1+ year developing on AWS, proficiency in one language.", certs: ["CLF-C02"] },
    examDetails: { questions: 65, duration: "130 minutes", passingScore: "720/1000", cost: "$150 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Cloud Developer", "Software Engineer", "Backend Developer"],
    nextCerts: ["DOP-C02"],
    prevCerts: ["CLF-C02"],
    studyResources: [
      { title: "AWS Skill Builder DVA-C02", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SOA-C02", code: "SOA-C02", name: "AWS Certified SysOps Administrator – Associate",
    provider: "aws", level: "associate", domain: ["admin", "devops"],
    description: "Validates skills in deploying, managing, and operating workloads on AWS. Covers monitoring, reliability, deployment, security, networking, and automation. The AWS operations credential.",
    whoIsItFor: "Systems administrators and operations engineers on AWS.",
    whyGetIt: "Validates operational excellence skills for cloud operations roles.",
    skills: [
      { name: "Monitoring, logging, remediation", percentage: 20 },
      { name: "Reliability and business continuity", percentage: 16 },
      { name: "Deployment, provisioning, automation", percentage: 18 },
      { name: "Security and compliance", percentage: 16 },
      { name: "Networking and content delivery", percentage: 18 },
      { name: "Cost and performance optimization", percentage: 12 }
    ],
    prerequisites: { experience: "1+ year operating AWS workloads.", certs: ["CLF-C02"] },
    examDetails: { questions: 65, duration: "130 minutes", passingScore: "720/1000", cost: "$150 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["SysOps Administrator", "Cloud Operations Engineer", "DevOps Engineer"],
    nextCerts: ["DOP-C02"],
    prevCerts: ["CLF-C02"],
    studyResources: [
      { title: "AWS Skill Builder SOA-C02", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DEA-C01", code: "DEA-C01", name: "AWS Certified Data Engineer – Associate",
    provider: "aws", level: "associate", domain: ["data"],
    description: "Validates skills in implementing data pipelines and monitoring, troubleshooting, and optimizing cost and performance. Covers ingestion, transformation, storage, and governance. The AWS data engineering credential.",
    whoIsItFor: "Data engineers building pipelines on AWS.",
    whyGetIt: "Validates in-demand data engineering skills on AWS.",
    skills: [
      { name: "Data ingestion and transformation", percentage: 34 },
      { name: "Data store management", percentage: 26 },
      { name: "Data operations and support", percentage: 22 },
      { name: "Data security and governance", percentage: 18 }
    ],
    prerequisites: { experience: "2-3 years data engineering, 1-2 years AWS experience.", certs: ["CLF-C02"] },
    examDetails: { questions: 65, duration: "130 minutes", passingScore: "720/1000", cost: "$150 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Data Engineer", "Analytics Engineer", "ETL Developer"],
    nextCerts: ["DAS-C01", "MLA-C01"],
    prevCerts: ["CLF-C02"],
    studyResources: [
      { title: "AWS Skill Builder DEA-C01", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MLA-C01", code: "MLA-C01", name: "AWS Certified Machine Learning Engineer – Associate",
    provider: "aws", level: "associate", domain: ["data", "developer"],
    description: "Validates skills in building, operationalizing, deploying, and maintaining ML solutions and pipelines on AWS. Covers data preparation, model development, deployment, and monitoring. The AWS ML engineering credential.",
    whoIsItFor: "ML engineers operationalizing models on AWS.",
    whyGetIt: "Validates applied MLOps skills for production machine learning.",
    skills: [
      { name: "Data preparation for ML", percentage: 28 },
      { name: "ML model development", percentage: 26 },
      { name: "Deployment and orchestration", percentage: 22 },
      { name: "Monitoring, maintenance, security", percentage: 24 }
    ],
    prerequisites: { experience: "1+ year using ML on AWS.", certs: ["AIF-C01"] },
    examDetails: { questions: 65, duration: "130 minutes", passingScore: "720/1000", cost: "$150 USD", format: "Multiple choice, multiple response, new question types", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["ML Engineer", "MLOps Engineer", "Applied Scientist"],
    nextCerts: ["MLS-C01"],
    prevCerts: ["AIF-C01"],
    studyResources: [
      { title: "AWS Skill Builder MLA-C01", type: "Free Course", url: "#" }
    ]
  },

  // ===================== AWS - PROFESSIONAL =====================
  {
    id: "SAP-C02", code: "SAP-C02", name: "AWS Certified Solutions Architect – Professional",
    provider: "aws", level: "professional", domain: ["architect", "infrastructure"],
    description: "Validates advanced skills in designing complex, optimized solutions across the breadth of AWS. Covers organizational complexity, migration, cost control, and continuous improvement. The premier AWS architecture credential.",
    whoIsItFor: "Senior architects designing complex multi-account AWS solutions.",
    whyGetIt: "One of the highest-paying IT certifications and a senior-role differentiator.",
    skills: [
      { name: "Design solutions for organizational complexity", percentage: 26 },
      { name: "Design for new solutions", percentage: 29 },
      { name: "Continuous improvement for existing solutions", percentage: 25 },
      { name: "Accelerate workload migration and modernization", percentage: 20 }
    ],
    prerequisites: { experience: "2+ years hands-on AWS architecture experience.", certs: ["SAA-C03"] },
    examDetails: { questions: 75, duration: "180 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Senior Solutions Architect", "Principal Architect", "Cloud Architect Lead"],
    nextCerts: ["ANS-C01", "SCS-C02"],
    prevCerts: ["SAA-C03"],
    studyResources: [
      { title: "AWS Skill Builder SAP-C02", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DOP-C02", code: "DOP-C02", name: "AWS Certified DevOps Engineer – Professional",
    provider: "aws", level: "professional", domain: ["devops", "developer"],
    description: "Validates advanced skills in provisioning, operating, and managing distributed systems with AWS DevOps practices. Covers CI/CD, IaC, monitoring, and incident response. The premier AWS DevOps credential.",
    whoIsItFor: "DevOps engineers automating AWS delivery at scale.",
    whyGetIt: "Validates advanced automation and reliability engineering skills.",
    skills: [
      { name: "SDLC automation", percentage: 22 },
      { name: "Configuration management and IaC", percentage: 17 },
      { name: "Resilient cloud solutions", percentage: 15 },
      { name: "Monitoring and logging", percentage: 15 },
      { name: "Incident and event response", percentage: 14 },
      { name: "Security and compliance", percentage: 17 }
    ],
    prerequisites: { experience: "2+ years provisioning and operating AWS environments.", certs: ["DVA-C02", "SOA-C02"] },
    examDetails: { questions: 75, duration: "180 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["DevOps Engineer", "Site Reliability Engineer", "Platform Engineer"],
    nextCerts: ["SCS-C02"],
    prevCerts: ["DVA-C02", "SOA-C02"],
    studyResources: [
      { title: "AWS Skill Builder DOP-C02", type: "Free Course", url: "#" }
    ]
  },

  // ===================== AWS - SPECIALTY =====================
  {
    id: "ANS-C01", code: "ANS-C01", name: "AWS Certified Advanced Networking – Specialty",
    provider: "aws", level: "specialty", domain: ["infrastructure"],
    description: "Validates expertise in designing and implementing complex AWS and hybrid networking architectures. Covers connectivity, network design, management, and security. An advanced networking specialty.",
    whoIsItFor: "Network engineers designing complex AWS networking.",
    whyGetIt: "Validates rare advanced networking expertise on AWS.",
    skills: [
      { name: "Network design", percentage: 30 },
      { name: "Network implementation", percentage: 26 },
      { name: "Network management and operation", percentage: 20 },
      { name: "Network security, compliance, governance", percentage: 24 }
    ],
    prerequisites: { experience: "5 years networking, 2 years AWS networking.", certs: ["SAA-C03"] },
    examDetails: { questions: 65, duration: "170 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Network Architect", "Cloud Network Engineer", "Connectivity Specialist"],
    nextCerts: [],
    prevCerts: ["SAA-C03"],
    studyResources: [
      { title: "AWS Skill Builder ANS-C01", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "SCS-C02", code: "SCS-C02", name: "AWS Certified Security – Specialty",
    provider: "aws", level: "specialty", domain: ["security"],
    description: "Validates expertise in securing AWS workloads and architectures. Covers threat detection, incident response, infrastructure security, identity, and data protection. The AWS security specialty.",
    whoIsItFor: "Security professionals securing AWS environments.",
    whyGetIt: "Validates deep AWS security expertise for specialized roles.",
    skills: [
      { name: "Threat detection and incident response", percentage: 14 },
      { name: "Security logging and monitoring", percentage: 18 },
      { name: "Infrastructure security", percentage: 20 },
      { name: "Identity and access management", percentage: 16 },
      { name: "Data protection", percentage: 18 },
      { name: "Management and security governance", percentage: 14 }
    ],
    prerequisites: { experience: "3-5 years security, 2 years AWS security.", certs: ["SAA-C03"] },
    examDetails: { questions: 65, duration: "170 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Cloud Security Engineer", "Security Architect", "Security Consultant"],
    nextCerts: [],
    prevCerts: ["SAA-C03"],
    studyResources: [
      { title: "AWS Skill Builder SCS-C02", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "MLS-C01", code: "MLS-C01", name: "AWS Certified Machine Learning – Specialty",
    provider: "aws", level: "specialty", domain: ["data"],
    description: "Validates expertise in building, training, tuning, and deploying ML models on AWS. Covers data engineering, exploratory analysis, modeling, and ML implementation and operations. The AWS ML specialty.",
    whoIsItFor: "Data scientists and ML practitioners on AWS.",
    whyGetIt: "Validates deep machine learning expertise for advanced roles.",
    skills: [
      { name: "Data engineering", percentage: 20 },
      { name: "Exploratory data analysis", percentage: 24 },
      { name: "Modeling", percentage: 36 },
      { name: "ML implementation and operations", percentage: 20 }
    ],
    prerequisites: { experience: "2+ years ML/deep learning on AWS.", certs: ["AIF-C01"] },
    examDetails: { questions: 65, duration: "180 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Machine Learning Specialist", "Data Scientist", "AI Engineer"],
    nextCerts: [],
    prevCerts: ["AIF-C01"],
    studyResources: [
      { title: "AWS Skill Builder MLS-C01", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DBS-C01", code: "DBS-C01", name: "AWS Certified Database – Specialty",
    provider: "aws", level: "specialty", domain: ["data"],
    description: "Validates expertise in recommending, designing, and maintaining AWS database solutions. Covers workload-specific design, deployment, migration, and operations. The AWS database specialty.",
    whoIsItFor: "Database professionals working with AWS database services.",
    whyGetIt: "Validates specialized database design and operations skills on AWS.",
    skills: [
      { name: "Workload-specific database design", percentage: 26 },
      { name: "Deployment and migration", percentage: 20 },
      { name: "Management and operations", percentage: 18 },
      { name: "Monitoring and troubleshooting", percentage: 18 },
      { name: "Database security", percentage: 18 }
    ],
    prerequisites: { experience: "5 years databases, 2 years AWS experience.", certs: ["SAA-C03"] },
    examDetails: { questions: 65, duration: "180 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Database Engineer", "Data Platform Specialist", "DBA"],
    nextCerts: [],
    prevCerts: ["SAA-C03"],
    studyResources: [
      { title: "AWS Skill Builder DBS-C01", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "DAS-C01", code: "DAS-C01", name: "AWS Certified Data Analytics – Specialty",
    provider: "aws", level: "specialty", domain: ["data"],
    description: "Validates expertise in designing, building, securing, and maintaining analytics solutions on AWS. Covers collection, storage, processing, analysis, and visualization. The AWS data analytics specialty.",
    whoIsItFor: "Data analytics professionals building AWS analytics solutions.",
    whyGetIt: "Validates end-to-end analytics expertise on AWS.",
    skills: [
      { name: "Collection", percentage: 18 },
      { name: "Storage and data management", percentage: 22 },
      { name: "Processing", percentage: 24 },
      { name: "Analysis and visualization", percentage: 18 },
      { name: "Security", percentage: 18 }
    ],
    prerequisites: { experience: "5 years analytics, 2 years AWS experience.", certs: ["SAA-C03"] },
    examDetails: { questions: 65, duration: "180 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["Data Analytics Specialist", "Analytics Architect", "BI Engineer"],
    nextCerts: [],
    prevCerts: ["SAA-C03", "DEA-C01"],
    studyResources: [
      { title: "AWS Skill Builder DAS-C01", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "PAS-C01", code: "PAS-C01", name: "AWS Certified SAP on AWS – Specialty",
    provider: "aws", level: "specialty", domain: ["infrastructure", "architect"],
    description: "Validates expertise in designing, implementing, migrating, and operating SAP workloads on AWS. Covers SAP architecture, migration, and operations. A specialized enterprise workload credential.",
    whoIsItFor: "Architects and engineers running SAP workloads on AWS.",
    whyGetIt: "Validates rare SAP-on-AWS expertise commanding premium roles.",
    skills: [
      { name: "Design of SAP workloads on AWS", percentage: 30 },
      { name: "Implementation of SAP workloads on AWS", percentage: 24 },
      { name: "Migration of SAP workloads to AWS", percentage: 26 },
      { name: "Operation and maintenance of SAP on AWS", percentage: 20 }
    ],
    prerequisites: { experience: "5 years SAP, 1 year SAP on AWS.", certs: ["SAA-C03"] },
    examDetails: { questions: 65, duration: "170 minutes", passingScore: "750/1000", cost: "$300 USD", format: "Multiple choice, multiple response", languages: ["English", "Japanese", "Korean", "Simplified Chinese"] },
    careerRoles: ["SAP on AWS Architect", "Enterprise Workload Engineer", "Migration Specialist"],
    nextCerts: [],
    prevCerts: ["SAA-C03"],
    studyResources: [
      { title: "AWS Skill Builder PAS-C01", type: "Free Course", url: "#" }
    ]
  },

  // ===================== GCP - FOUNDATIONAL =====================
  {
    id: "GCP-CDL", code: "GCP-CDL", name: "Google Cloud Digital Leader",
    provider: "gcp", level: "foundational", domain: ["business"],
    description: "Validates foundational knowledge of cloud concepts and Google Cloud products, services, and tools. Covers digital transformation and the value of cloud technology. The entry point to Google Cloud.",
    whoIsItFor: "Professionals seeking foundational Google Cloud knowledge.",
    whyGetIt: "Builds cloud literacy and a foundation for Google Cloud certifications.",
    skills: [
      { name: "Digital transformation with Google Cloud", percentage: 10 },
      { name: "Infrastructure and application modernization", percentage: 30 },
      { name: "Data and AI/ML innovation", percentage: 30 },
      { name: "Trust, security, scaling, operations", percentage: 30 }
    ],
    prerequisites: { experience: "No prior experience required.", certs: [] },
    examDetails: { questions: 50, duration: "90 minutes", passingScore: "Not disclosed (~70%)", cost: "$99 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese", "Spanish", "Portuguese"] },
    careerRoles: ["Cloud Sales", "Project Manager", "Business Decision Maker"],
    nextCerts: ["GCP-ACE"],
    prevCerts: [],
    studyResources: [
      { title: "Google Cloud Skills Boost - Digital Leader", type: "Free Course", url: "#" }
    ]
  },

  // ===================== GCP - ASSOCIATE =====================
  {
    id: "GCP-ACE", code: "GCP-ACE", name: "Google Associate Cloud Engineer",
    provider: "gcp", level: "associate", domain: ["admin", "infrastructure"],
    description: "Validates skills in deploying applications, monitoring operations, and managing enterprise solutions on Google Cloud. Covers setup, deployment, and operations using the console and CLI. The core Google Cloud associate credential.",
    whoIsItFor: "Cloud engineers managing Google Cloud resources.",
    whyGetIt: "Foundation for all Google Cloud professional certifications.",
    skills: [
      { name: "Setting up a cloud solution environment", percentage: 20 },
      { name: "Planning and configuring a cloud solution", percentage: 20 },
      { name: "Deploying and implementing a cloud solution", percentage: 25 },
      { name: "Ensuring successful operation", percentage: 20 },
      { name: "Configuring access and security", percentage: 15 }
    ],
    prerequisites: { experience: "6+ months hands-on Google Cloud experience.", certs: ["GCP-CDL"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$125 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese", "Spanish", "Portuguese"] },
    careerRoles: ["Cloud Engineer", "Cloud Administrator", "DevOps Engineer"],
    nextCerts: ["GCP-PCA", "GCP-PCD", "GCP-PCDE", "GCP-PCNE", "GCP-PCSE"],
    prevCerts: ["GCP-CDL"],
    studyResources: [
      { title: "Google Cloud Skills Boost - ACE", type: "Free Course", url: "#" }
    ]
  },

  // ===================== GCP - PROFESSIONAL =====================
  {
    id: "GCP-PCA", code: "GCP-PCA", name: "Google Professional Cloud Architect",
    provider: "gcp", level: "professional", domain: ["architect", "infrastructure"],
    description: "Validates skills in designing, developing, and managing robust, secure, scalable Google Cloud architectures. Covers business and technical requirements, design, and operations. The premier Google Cloud architect credential.",
    whoIsItFor: "Architects designing solutions on Google Cloud.",
    whyGetIt: "Consistently among the highest-paying cloud certifications.",
    skills: [
      { name: "Designing and planning a cloud solution architecture", percentage: 24 },
      { name: "Managing and provisioning infrastructure", percentage: 15 },
      { name: "Designing for security and compliance", percentage: 18 },
      { name: "Analyzing and optimizing processes", percentage: 18 },
      { name: "Managing implementation and reliability", percentage: 25 }
    ],
    prerequisites: { experience: "3+ years industry experience, 1+ year on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select, case studies", languages: ["English", "Japanese"] },
    careerRoles: ["Cloud Architect", "Solutions Architect", "Enterprise Architect"],
    nextCerts: ["GCP-PCD", "GCP-PCSE", "GCP-PCNE"],
    prevCerts: ["GCP-ACE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Cloud Architect", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PCD", code: "GCP-PCD", name: "Google Professional Cloud Developer",
    provider: "gcp", level: "professional", domain: ["developer"],
    description: "Validates skills in building scalable, reliable cloud-native applications on Google Cloud. Covers application design, build, deploy, and integration with Google Cloud services. The Google Cloud developer credential.",
    whoIsItFor: "Developers building cloud-native apps on Google Cloud.",
    whyGetIt: "Validates production application development skills on Google Cloud.",
    skills: [
      { name: "Designing highly scalable applications", percentage: 20 },
      { name: "Building and testing applications", percentage: 24 },
      { name: "Deploying applications", percentage: 18 },
      { name: "Integrating Google Cloud services", percentage: 22 },
      { name: "Managing deployed applications", percentage: 16 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese"] },
    careerRoles: ["Cloud Developer", "Software Engineer", "Application Engineer"],
    nextCerts: ["GCP-PCDE"],
    prevCerts: ["GCP-ACE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Cloud Developer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PCDE", code: "GCP-PCDE", name: "Google Professional Cloud DevOps Engineer",
    provider: "gcp", level: "professional", domain: ["devops"],
    description: "Validates skills in efficient development operations balancing reliability and delivery speed on Google Cloud. Covers SRE practices, CI/CD, monitoring, and incident management. The Google Cloud DevOps credential.",
    whoIsItFor: "DevOps and SRE engineers on Google Cloud.",
    whyGetIt: "Validates SRE and DevOps practices for reliability-focused roles.",
    skills: [
      { name: "Bootstrapping a Google Cloud organization for DevOps", percentage: 15 },
      { name: "Building and implementing CI/CD pipelines", percentage: 25 },
      { name: "Applying SRE practices to services", percentage: 20 },
      { name: "Implementing observability", percentage: 20 },
      { name: "Optimizing service performance", percentage: 20 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese"] },
    careerRoles: ["DevOps Engineer", "Site Reliability Engineer", "Platform Engineer"],
    nextCerts: [],
    prevCerts: ["GCP-ACE", "GCP-PCD"],
    studyResources: [
      { title: "Google Cloud Skills Boost - DevOps Engineer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PCNE", code: "GCP-PCNE", name: "Google Professional Cloud Network Engineer",
    provider: "gcp", level: "professional", domain: ["infrastructure"],
    description: "Validates skills in implementing and managing network architectures in Google Cloud. Covers VPC design, hybrid connectivity, network services, and security. The Google Cloud networking credential.",
    whoIsItFor: "Network engineers implementing Google Cloud networking.",
    whyGetIt: "Validates specialized cloud networking expertise.",
    skills: [
      { name: "Designing and planning a network", percentage: 26 },
      { name: "Implementing Virtual Private Cloud", percentage: 22 },
      { name: "Configuring network services", percentage: 24 },
      { name: "Implementing hybrid connectivity", percentage: 14 },
      { name: "Managing network operations and security", percentage: 14 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese"] },
    careerRoles: ["Network Engineer", "Cloud Network Architect", "Connectivity Specialist"],
    nextCerts: [],
    prevCerts: ["GCP-ACE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Network Engineer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PCSE", code: "GCP-PCSE", name: "Google Professional Cloud Security Engineer",
    provider: "gcp", level: "professional", domain: ["security"],
    description: "Validates skills in designing and implementing secure infrastructure on Google Cloud. Covers identity, access, network security, data protection, and compliance. The Google Cloud security credential.",
    whoIsItFor: "Security engineers securing Google Cloud environments.",
    whyGetIt: "Validates cloud security expertise for specialized roles.",
    skills: [
      { name: "Configuring access", percentage: 27 },
      { name: "Securing communications and boundary protection", percentage: 21 },
      { name: "Ensuring data protection", percentage: 20 },
      { name: "Managing operations", percentage: 19 },
      { name: "Supporting compliance requirements", percentage: 13 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese"] },
    careerRoles: ["Cloud Security Engineer", "Security Architect", "Security Consultant"],
    nextCerts: [],
    prevCerts: ["GCP-ACE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Security Engineer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PCDBE", code: "GCP-PCDBE", name: "Google Professional Cloud Database Engineer",
    provider: "gcp", level: "professional", domain: ["data"],
    description: "Validates skills in designing, managing, and troubleshooting Google Cloud databases. Covers migrations, scalable solutions, and database operations. The Google Cloud database credential.",
    whoIsItFor: "Database engineers managing Google Cloud database solutions.",
    whyGetIt: "Validates specialized database engineering skills on Google Cloud.",
    skills: [
      { name: "Designing scalable and highly available solutions", percentage: 28 },
      { name: "Managing a solution for migration", percentage: 22 },
      { name: "Deploying scalable and highly available databases", percentage: 25 },
      { name: "Managing mission-critical databases", percentage: 25 }
    ],
    prerequisites: { experience: "Database management and Google Cloud experience.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English"] },
    careerRoles: ["Database Engineer", "Data Platform Engineer", "DBA"],
    nextCerts: [],
    prevCerts: ["GCP-ACE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Database Engineer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PDE", code: "GCP-PDE", name: "Google Professional Data Engineer",
    provider: "gcp", level: "professional", domain: ["data"],
    description: "Validates skills in designing and building data processing systems and operationalizing ML models on Google Cloud. Covers data ingestion, storage, processing, and analysis. The Google Cloud data engineering credential.",
    whoIsItFor: "Data engineers building data systems on Google Cloud.",
    whyGetIt: "Validates in-demand data engineering and analytics skills.",
    skills: [
      { name: "Designing data processing systems", percentage: 22 },
      { name: "Ingesting and processing data", percentage: 25 },
      { name: "Storing the data", percentage: 20 },
      { name: "Preparing and using data for analysis", percentage: 15 },
      { name: "Maintaining and automating workloads", percentage: 18 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English", "Japanese"] },
    careerRoles: ["Data Engineer", "Analytics Engineer", "ML Engineer"],
    nextCerts: ["GCP-PMLE"],
    prevCerts: ["GCP-ACE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Data Engineer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PMLE", code: "GCP-PMLE", name: "Google Professional Machine Learning Engineer",
    provider: "gcp", level: "professional", domain: ["data", "developer"],
    description: "Validates skills in designing, building, and productionizing ML models to solve business challenges on Google Cloud. Covers ML problem framing, development, and MLOps. The Google Cloud ML credential.",
    whoIsItFor: "ML engineers building and operationalizing models on Google Cloud.",
    whyGetIt: "Validates applied machine learning and MLOps expertise.",
    skills: [
      { name: "Architecting low-code ML solutions", percentage: 13 },
      { name: "Collaborating to manage data and models", percentage: 14 },
      { name: "Scaling prototypes into ML models", percentage: 18 },
      { name: "Serving and scaling models", percentage: 20 },
      { name: "Automating and orchestrating ML pipelines", percentage: 22 },
      { name: "Monitoring ML solutions", percentage: 13 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year designing ML on Google Cloud.", certs: ["GCP-ACE"] },
    examDetails: { questions: 60, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English"] },
    careerRoles: ["Machine Learning Engineer", "MLOps Engineer", "AI Engineer"],
    nextCerts: [],
    prevCerts: ["GCP-ACE", "GCP-PDE"],
    studyResources: [
      { title: "Google Cloud Skills Boost - ML Engineer", type: "Free Course", url: "#" }
    ]
  },
  {
    id: "GCP-PGWA", code: "GCP-PGWA", name: "Google Professional Google Workspace Administrator",
    provider: "gcp", level: "professional", domain: ["admin"],
    description: "Validates skills in transforming business objectives into tangible Google Workspace configurations and policies. Covers provisioning, security, and operations. The Google Workspace administration credential.",
    whoIsItFor: "Administrators managing Google Workspace deployments.",
    whyGetIt: "Validates productivity and collaboration administration expertise.",
    skills: [
      { name: "Planning and implementation", percentage: 22 },
      { name: "Object and resource management", percentage: 20 },
      { name: "Access management", percentage: 18 },
      { name: "Data and endpoint security", percentage: 20 },
      { name: "Support, monitoring, troubleshooting", percentage: 20 }
    ],
    prerequisites: { experience: "3+ years industry, 1+ year administering Google Workspace.", certs: ["GCP-CDL"] },
    examDetails: { questions: 50, duration: "120 minutes", passingScore: "Not disclosed (~70%)", cost: "$200 USD", format: "Multiple choice, multiple select", languages: ["English"] },
    careerRoles: ["Workspace Administrator", "Collaboration Engineer", "IT Administrator"],
    nextCerts: [],
    prevCerts: ["GCP-CDL"],
    studyResources: [
      { title: "Google Cloud Skills Boost - Workspace Admin", type: "Free Course", url: "#" }
    ]
  }
];

// Domain display names
const DOMAINS = {
  developer: "Developer",
  devops: "DevOps / SRE",
  data: "Data / AI / ML",
  security: "Security",
  architect: "Architecture",
  admin: "IT Admin",
  business: "Business / Management",
  infrastructure: "Infrastructure"
};

// Helper lookups
function getCertById(id) {
  return CERTS.find(c => c.id === id);
}
function getCertsByProvider(provider) {
  return CERTS.filter(c => c.provider === provider);
}

if (typeof module !== "undefined") {
  module.exports = { CERTS, PROVIDERS, LEVELS, DOMAINS, getCertById, getCertsByProvider };
}
