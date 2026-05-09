export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Mousuf Nayon",
  title: "Software Developer",
  institution: "London, UK",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "mousuf.nayon@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "mousufcz",
  linkedinUsername: "mousuf",
  //twitterUsername: "janesmith",
  blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1lo7aGCzTB4ZA1sIznQ63zRtIY2rEom64/view?usp=share_link",
  institutionUrl: "https://www.citystgeorges.ac.uk",
  // altName: "",
  // secretDescription: "I like dogs.",
};
