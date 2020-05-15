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
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#c1c1c1",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#c1c1c1",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
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
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
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
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
};
