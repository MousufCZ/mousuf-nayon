export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "July 2024 - Present",
    title: "Software Developer",
    company: "Freelance, London",
    /*description:
      "Developed novel algorithms for causal structure learning in reinforcement learning settings",
    advisor: "Peter Wang",
    companyUrl: "https://deepmind.com",*/
  },
  {
    date: "Oct 2023 - May 2024",
    title: "Data Scientist Intern",
    company: "Stealth Mode Startup, London",
    /*description:
      "Worked on improving robustness of large language models to distribution shifts",
    manager: "Elise Brown",
    companyUrl: "https://google.com",*/
  },
  {
    date: "April 2020 - Oct 2021",
    title: "Founder",
    company: "StemVCovid19, London",
    /*description:
      "Worked on improving robustness of large language models to distribution shifts",
    manager: "Elise Brown",
    companyUrl: "https://google.com",*/
  },

];
