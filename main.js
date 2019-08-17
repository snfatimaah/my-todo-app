var app = new Vue({
    el: '#app',
    data: {
     todos:[],
     newToDoName:""
    },
    created: function() {
        if(localStorage.getItem("todos")){
            this.todos = JSON.parse(localStorage.getItem("todos"))
          
        }
    },
    methods: {
        addTodo: function(){
            const newToDo = {
                name:this.newToDoName,
                isDone:false
            }
            this.todos.unshift(newToDo);

            this.newToDoName = "";

            this.persistData();
     },
     deleteTodo: function(index) {
        this.todos.splice(index, 1);

        this.persistData();
     },
     toggleDone: function(index) {
         this.todos[index].isDone = !this.todos[index].isDone;

         this.persistData();
     },
     persistData: function() {
         localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    }
  });