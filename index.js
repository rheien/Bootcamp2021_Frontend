const jquery=require('jquery')
//
$=window.$=window.jQuery=jquery;

$(function(){
    let endpoint='https://jsonplaceholder.typicode.com/todos'
    $.ajax({
        url:endpoint,
        contentType:"application/json",
        dataType:'json',
        success: function(result){
            
            result.forEach((el) => {
                $(".container").append(`
            
                <div class="Card" id="c_${el.id}">

                    <p class="pID" id="${el.id}"> ${el.id}</p>
                    <p class="pTitle" id="${el.id}"> ${el.title}</p>
                    <p class="pCompleted" id="${el.id}"> ${el.completed}</p>
                </div>

                `)
            });
            
           
            
            
            
            /*
            console.log(result)
            var id=document.getElementById("todoID")
            var title=document.getElementById("todoTitle")
            var isCompleted=document.getElementById("isC")
            id.innerHTML='ID: '+result.id
            title.innerHTML='Title: '+result.title
            isCompleted.innerHTML='is Completed: '+result.completed
            */
        },
    });
});