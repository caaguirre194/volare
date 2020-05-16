export const environment = {
  production: true,
};

export const portfolioConfig = {
  email: "https://caaguirre-email.herokuapp.com/formulario",
};

export const PROJECTS = [
  {
    title: "Users App",
    img: "assets/img/plans/mobile-app.svg",
    description: "App para el manejo de usuarios",
    link: ["https://github.com/caaguirre194/UsersApp"],
  },
  {
    title: "Snake Game",
    img: "assets/img/plans/snake.svg",
    description: "Juego web de la culebrita",
    link: ["https://github.com/caaguirre194/SnakeGame"],
  },
  {
    title: "Shoes Page",
    img: "assets/img/plans/sale.svg",
    description: "Página web de venta de zapatos",
    link: ["https://github.com/caaguirre194/ShoesPage"],
  },
  {
    title: "Schedule App",
    img: "assets/img/plans/android-character.svg",
    description: "Agenda de manejo de usuarios",
    link: ["https://github.com/caaguirre194/ScheduleApp"],
  },
  {
    title: "API REST Golang - Angular",
    img: "assets/img/plans/api2.svg",
    description: "API REST Golang - Angular",
    link: ["https://github.com/caaguirre194/ApiGo"],
  },
  {
    title: "API REST - Spring Boot",
    img: "assets/img/plans/api.svg",
    description: "API REST en Spring Boot",
    link: ["https://github.com/caaguirre194/OwnProject"],
  },
  {
    title: "Emails with Node.js",
    img: "assets/img/plans/plane.svg",
    description: "Servidor de correos con Node.js",
    link: ["https://github.com/caaguirre194/EmailWithNode"],
  },
  {
    title: "CRUD Python",
    img: "assets/img/plans/python.svg",
    description: "Proyecto CRUD en Python",
    link: ["https://github.com/caaguirre194/Python_CRUD"],
  },
  {
    title: "Native Android Calculator",
    img: "assets/img/plans/android.svg",
    description: "App nativa desarrollada en Java",
    link: ["https://github.com/caaguirre194/CalculatorApp"],
  },
  {
    title: "Web Editor",
    img: "assets/img/plans/design.svg",
    description: "Editor Web estilo CODEPEN",
    link: ["https://github.com/caaguirre194/WebEditor"],
  },
];

export const ParticlesConfig1 = {
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#c1c1c1",
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 160,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
