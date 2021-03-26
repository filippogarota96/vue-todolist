var app = new Vue(
 {
   el: '#app',
   data: {
     tasks:['Fare la spesa', "Tagliare l'erba", "Pulire il garage"],
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
