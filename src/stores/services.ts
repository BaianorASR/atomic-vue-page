import { defineStore } from "pinia";

export const servicesStore = defineStore("counter", {
  state: () => ({
    services: [
      {
        id: 1,
        title: "Back-end",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: "fas fa-code",
      },
      {
        id: 2,
        title: "Front-end",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: "fas fa-paint-brush",
      },
      {
        id: 3,
        title: "Full-stack",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: "fas fa-chart-line",
      },
    ],
  }),

  getters: {
    $getAllServices: (state) => state.services,
  },
});
