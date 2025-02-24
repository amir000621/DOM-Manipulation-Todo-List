//DOMcontentLoaded--------->when this event is fires------>execute our logic
//document ek global vairable hai jo hamare html document ko use krke bana hai is global variable ka use krke ham bht sare event ko target kr sakte hai
/*document.addEventlistener("event name",()=>{//function
    }) */
   function loadTodos(){
    //this function will load todos from the browser and we store data in local storage
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList":[]};//here we access localstorage mean BOM ko access kr rahe hai // null ya undefined hone pr empty array set kr diya ke agar local storage se todos ke corresponding kuchh nhi mila to empty array vo tha na agar pehli value hi truthy hai to vahi return hoga verna 2nd wali  
    console.log(todos);
    return todos;
    };

    function addTodoToLocalStorage(todoText){
      const todos = loadTodos();//this fetch all todos
      todos.todoList.push(todoText);//todos ke andar is todoText ko push krdo mean end mein laga do
      localStorage.setItem("todos",JSON.stringify(todos));
    }

   
    document.addEventListener("DOMContentLoaded",()=>{
     const todoInput = document.getElementById("todoInput")

     const submitButton = document.getElementById("addTodo")
     submitButton.addEventListener("click",(event)=>{
        const todoText = todoInput.value;//todoInput ke aandar jo bhi value padi hai vo fetch ho jaye event fire hone pr and event kya hai click
        if(todoText === ""){
            alert("please write something")
        }
        else{
            addTodoToLocalStorage(todoText);  
        }
     })

     todoInput.addEventListener("input",(event)=>{
        //this call back method fires everytime there is a change in input tag
       // console.log("something change",todoInput.value)//te todoInput.value se jo bhi likha hai use ham access kr sakte hai to jaise hi mein vaha live server pe jake kuchh likh raha hu vo value console pr mil rahi hai
       const todoText = event.target.value;//isse just uper wala comment """"""
       event.target.value = todoText.trim();
       console.log(event.target.value)
     })
        loadTodos();//loadTodos when whole document is loaded
      })