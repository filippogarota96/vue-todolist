var app = new Vue(
 {
   el: '#app',
   data: {
     tasks:['Fare la spesa', "Tagliare l'erba", "Pulire il garage"]
   },
   methods: {
     deleteItem: function(tasksIndex) {
       this.tasks.splice(tasksIndex, 1)
     }
   }
 }
);
