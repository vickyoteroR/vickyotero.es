const app = new Vue({
  el: "#app",
  data: {
    titulo: "Hola mundo con Vue",
    navitems: ["Inicio", "Experiencia", "Portfolio", "Tecnologías", "accesibilidad"],
    experiences: [
      {
        cliente: "RTVE",
        consultora: "EVOLUCIONA",
        fecha: "Enero 2014 - Marzo-2016",
        logo: "src=images/experience/client_4.png",
      },
      {
        cliente: "VECI",
        consultora: "AT Sistemas",
        fecha: "Enero 2019 - Abril 2020",
        logo: "images/experience/client_3.png",
      },
    ],
  },
  methods: {
    agregarImagen() {},
  },
});
