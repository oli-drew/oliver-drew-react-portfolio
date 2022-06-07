import sociifyImg from "../img/sociify.gif";
import babImg from "../img/bab.gif";
import techImg from "../img/tech-blog.gif";
import quizImg from "../img/javascript-quiz.gif";
import weatherImg from "../img/weather-dashboard.gif";
import plannerImg from "../img/work-planner.gif";
import wordImg from "../img/word-guess.png";

const workProjects = {
  work: [
    {
      title: "Sociify",
      description:
        "A simple portfolio site for aspiring developers, built with Node, Express, Handlebars, MySQL, and deployed to Heroku. Use it to create and edit your profile and search/view other peoples on the site.",
      gitURL: "https://github.com/gmadnani/Sociify",
      depURL: "https://sociify-fortran.herokuapp.com/",
      img: sociifyImg,
    },
    {
      title: "Birmingham Association Banquets",
      description:
        "BAB allows a user to search for a city, town or postcode and uses server-side APIs to find data relating to restaurants in that location.",
      gitURL: "https://github.com/oli-drew/bab-group-project-by-slackware",
      depURL: "https://oli-drew.github.io/bab-group-project-by-slackware/",
      img: babImg,
    },
    {
      title: "Tech Blog",
      description:
        "CMS-style blog site about all things tech, built with Node, Express, Handlebars, MySQL, and deployed to Heroku. Use it to create and comment on the latests tech trends and news.",
      gitURL: "https://github.com/oli-drew/technology-blog-bootcamp-hw14",
      depURL: "https://tech-blog-bootcamp-hw14.herokuapp.com/",
      img: techImg,
    },
    {
      title: "JavaScript Quiz Game",
      description:
        "A timed quiz on the fundamentals of JavaScript created as part of a homework assignment. The player has 5 minutes to answer the 10 multiple choice questions.",
      gitURL:
        "https://github.com/oli-drew/timed-quiz-on-javascript-fundamentals-for-bootcamp-hw4",
      depURL:
        "https://oli-drew.github.io/timed-quiz-on-javascript-fundamentals-for-bootcamp-hw4/",
      img: quizImg,
    },
    {
      title: "Weather Dashboard",
      description:
        "A dashboard to see the weather outlook for multiple cities, built using the OpenWeather API. This weather dashboard has been designed to help users plan trips by saving previous searches, so the user can easily review the weather for their favourite locations.",
      gitURL: "https://github.com/oli-drew/weather-dashboard-for-bootcamp-hw6",
      depURL: "https://oli-drew.github.io/weather-dashboard-for-bootcamp-hw6/",
      img: weatherImg,
    },
    {
      title: "Work Day Planner",
      description:
        "A simple calendar application to manage your time hour by hour during the working day. The working day is split into hourly timeblocks. These timeblocks are colour coded depending on whether they are past, present or future. The user can add events to each timeblock, these events are saved in localstorage.",
      gitURL:
        "https://github.com/oli-drew/work-day-scheduler-application-for-bootcamp-hw5",
      depURL:
        "https://oli-drew.github.io/work-day-scheduler-application-for-bootcamp-hw5/",
      img: plannerImg,
    },
    {
      title: "Word Guess",
      description:
        "A timed word guessing game. The user has 30 seconds to guess the word. When a user correctly guesses a letter, the corresponding blank '_' is replaced by the letter.",
      gitURL: "https://github.com/oli-drew/Word-Guess-Game-Mini-Project",
      depURL: "https://oli-drew.github.io/Word-Guess-Game-Mini-Project/",
      img: wordImg,
    },
  ],
};

export default workProjects;
