const {createApp} = Vue

createApp ( {
data() {
     return {
todoList: [
     {
        text: "Quarterly Newsletter",
        done: true,
    },
    {
        text: "Mobile app luaunch",
        done: true,
    },
     {
        text: "Interview Jhon H",
        done: false,
    },
    {
        text: " Summit update to mobile storefronts",
        done: true,
    },
     {
        text: "Shedule meeting with Alexr",
        done: false,
    },
     {
        text: "Homepage refresh",
        done: true,
    },
     {
        text: "Onboard new Sales team members",
        done: false,
    },
   {
        text: "Review editorial calendar",
        done: true,
    },
]
    }
 },
 created() {
   
   },
methods: {
}
  }).mount("#app")