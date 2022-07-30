document.querySelector(".hamburger").addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".slidebar").classList.toggle("active");
    document.querySelector(".section").classList.toggle("active");
})