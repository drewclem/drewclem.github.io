//fade in on load
const body = document.getElementById("body");

window.onload = function() {
    body.classList.add("fadeIn");
};


//toggle nav
function toggleNav() {
    const element = document.getElementById("navToggle")
    
    element.classList.toggle("navCollapse");
}

//toggle blog
function toggleBlog() {
    const element= document.getElementById("blogPost")

    element.classList.toggle("blogExpand");
}



