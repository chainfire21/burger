$(document).ready(()=>{

    $("burger-input").on("submit",(e)=>{
        e.preventDefault();
        $.post("/api/burger")
    });


});