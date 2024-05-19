export type PROJECTS_DATA_TYPE = {
  card: {
    title: string,
    image: string,
    subTitle: string,
    description: string,
  },
  image: string,
  imageType: "VERTICAL" | "HORIZONTAL"
}

export const PROJECTS_DATA: PROJECTS_DATA_TYPE[] = [
  {
    card: {
      title: "Tyag",
      subTitle: "IOS + ANDROID + WEBPAGE",
      image: "https://raw.githubusercontent.com/Shreyans13/Tyag-web/main/images/app_logo.png",
      description: "Reconnect with your spiritual essence using the Tyag app – your ultimate companion for a mindful and disciplined spiritual journey. The app created for freelancing soon to be live in play store and App Store."
    },
    image: "https://raw.githubusercontent.com/Shreyans13/Tyag-web/main/images/screenshots/8.png",
    imageType: "VERTICAL"
  },
  {
    card: {
      title: "Havo - Backend",
      subTitle: "NODE js + Express + MongoDB + Swagger",
      image: "https://raw.githubusercontent.com/200-DevelopersFound/Havo-Backend/main/screenshots/0.png",
      description: "The Node.js backend for the mobile application serves a noble purpose by empowering individuals who are unable to speak. Through the integration of a Machine Learning Library, it enables the conversion of handwritten text into speech, allowing users to save their daily conversations in the form of phrases."
    },
    image: "https://raw.githubusercontent.com/200-DevelopersFound/Havo/main/screenshots/3.png",
    imageType: "VERTICAL"
  },
  {
    card: {
      title: "Eats",
      subTitle: "web + mweb",
      image: "https://shreyans13.github.io/Eats/img/eats.28d63b9a.png",
      description: "Developed a web app based on a real-life scenario, this application offers a delightful and intuitive user experience for ordering food online."
    },
    image: "https://raw.githubusercontent.com/Shreyans13/Eats/main/screenshots/pc/2.png",
    imageType: "HORIZONTAL"
  },
  {
    card: {
      title: "Github Profile Finder",
      subTitle: "Ios + Android",
      image: "https://raw.githubusercontent.com/Shreyans13/Github-Profile-Finder/main/assets/images/gpf.jpg",
      description: "The Flutter-based cross-platform application, leverages the power of Github's API to provide users with a seamless and intuitive experience for exploring Github profiles."
    },
    image: "https://raw.githubusercontent.com/Shreyans13/Github-Profile-Finder/main/screenshots/7.png",
    imageType: "VERTICAL"
  },
  {
    card: {
      title: "CLI Portfolio",
      subTitle: "HTML + Css + Javascript",
      image: "https://shreyans13.github.io/CLI-Portfolio/svg%20icons/terminal.svg",
      description: "My command line interface based portfolio - CLI Portfolio"
    },
    image: "https://raw.githubusercontent.com/Shreyans13/CLI-Portfolio/master/screenshots/1.png",
    imageType: "HORIZONTAL"
  }
]


