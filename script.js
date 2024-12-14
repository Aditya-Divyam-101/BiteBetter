window.onload = loader;
function loader() {
    document.querySelector(".pre-loader").style.transition = "opacity 2s ease-in-out";
    document.querySelector(".pre-loader").style.opacity = "0";
    
    setTimeout(function() {
        document.querySelector(".pre-loader").style.display = "none";
    }, 2000);
}