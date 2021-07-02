﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Yesabhishek",
  title: "नमस्ते, I'm Abhishek",
  subTitle: emoji("A passionate Computer Science Engineer 🚀 having an experience of building Full Stack Web application and developing  Data Analytical tools/Dashboards  with Python/ Django/ React JS and some other cool libraries and frameworks✌🏻"),
  resumeLink: "https://drive.google.com/file/d/1NVcDN2AW9z77_zOJW0IUWhGxy-YgKyhl/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/yesabhishek",
  linkedin: "https://www.linkedin.com/in/yesabhishek/",
  gmail: "choudhuryabhishek76@gmail.com",
  instagram: "https://www.instagram.com/yesabhishek/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills🎯",
  subTitle: "Enthusiastic developer who loves to learn new tech and write code. Setting up Infrastructure and file system in free time feels amazing.",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces with clean and hack-free backend for web applications."),
    emoji("⚡ Machine Learning and Data Engineering enthusiast."),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Google Cloud and API's to make powerful applications.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Postgres/SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",  
      company: "Blue Hex Software, Chennai",
      companylogo: require("./assets/images/bluehx.png"),
      date: "Jul 2021 – Present",
      desc: "Developing CRMs, Data Analytical Dashboards and Web Applications."
      ,
      descBullets: [
        "Working on several client projects which include Data Analytics and Dashboard.",
        "Implementation in Django, DRF, React Js and Postgres database. ",
        "Setting up infra and managing API to work with mobile applications in Flutter."
      ]
    },
    {
      role: "Software Developer",  
      company: "Bima Garage, Mumbai",
      companylogo: require("./assets/images/bimagarage.png"),
      date: "Dec 2020 – Jun 2021",
      desc: "Analyzed Business requirements, shared the best optimal solution and Developed using Python, Django framework, DRF."
      ,
      descBullets: [
        "Wrote scripts to Sync/Migrate data from one Database to another using AWS RabbitMQ, Django Signals and DRF.",
        "Set up Infra for all the projects in AWS EC2, static files(logs, images, uploads etc) in AWS S3 and AWS RDS for DB.",
        "Awarded as the ‘Superstar employee’ at the yearly Bima Garage awards ceremony."
      ]
    },
    {
      role: "Data Engineer",  
      company: "Sears Holdings, Pune",
      companylogo: require("./assets/images/SearsLogo.png"),
      date: "Oct 2019 – Jun 2020",
      desc: "Worked on Google Cloud Platform (BigQuery), Python and shell scripting.",
      descBullets: [
        "Migrated data from old servers (Teradata, Mainframes etc) to Google Cloud Platform (Big Query, Spanner).",
        "Wrote queries, performed extensively on Google Big Query to fetch/retrieve data from Tables.",
        "Analyzed and Developed scripts to perform ETL(Extract, Transform, Load)."
      ]
    },
    {
      role: "IT Intern",   
      company: "Tinplate Company of India Ltd.",
      companylogo: require("./assets/images/TinplateLogo.jpeg"),
      date: "May 2017 – July 2017",
      desc: "Developed a website TCIL Complaint Registration Service using ASP .Net and C#",
      descBullets: [
        "Studied the past scenario for registering complaints against company assets like monitors, CPU, projectors, Air conditioners etc.",
        "Resolved the issue of data redundancy, data entry errors and data loss"
      ]
    },
    
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "yesabhishek", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action, How's that. Available on around 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/00000032876b6e90?hl=en" }]
    },

    {
      title: "Hackerrank",
      subtitle: "Recieved certifications on Java and Python. Solution to the questions can be found on my Github link(below).",
      image: require("./assets/images/hackerranklogo.webp"),
      footerLink: [
        { name: "Badge", url: "https://www.hackerrank.com/yesabhishek" },
        { name: "Github Link", url: "https://github.com/yesabhishek/Solution-Snippets" }
      ]
    },
    {
      title: "Python Development",
      subtitle: "Aptech certified python developer. Trained for about 3 months at Aptech learning center.",
      image: require("./assets/images/aptechlogo.webp"),
      footerLink: [
        { name: "Certificate"  }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Song I am currently looped to 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/Yesabhishek%20Network"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7903717967",
  email_address: "choudhuryabhishek76@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "yasabhishek"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};