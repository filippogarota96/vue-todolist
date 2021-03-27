var app = new Vue(
 {
   el: '#app',
   data: {
     tasks:["Fare la spesa", "Pulire Casa"],
     newTask: ""
   },
   methods: {
     deleteItem: function(tasksIndex) {
       this.tasks.splice(tasksIndex, 1)
     },
     addTask: function() {
       if (this.newTask != "") {
         this.tasks.push(this.newTask)
         this.newTask = ""
       }
     }
   }
 }
);
