document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".cal");
    const message = document.getElementById("message");
    const date = document.getElementById("date-select");
    const close = document.getElementById("close");
    const post = document.getElementById("post-button");


    button.addEventListener("click", () => {
        message.classList.add("message-active");
        date.classList.add("date-active");
        button.classList.add("cal-remove");
        post.classList.add("post-button-grow");
        post.textContent = "Schedule" 
    });

    close.addEventListener("click", () => {
        message.classList.remove("message-active");
        date.classList.remove("date-active");
        button.classList.remove("cal-remove")
        post.classList.remove("post-button-grow");
        post.textContent = "Post" 
    });
});