let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", function() {
    sidebar.style.left = "0";
});

closeBtn.addEventListener("click", function() {
    sidebar.style.left = "-200px";
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        sidebar.style.left = "-200px";
    }
});


window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    document.getElementById("hero").style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


let projects = document.querySelectorAll(".project");

projects.forEach(function(project) {
    project.addEventListener("mouseover", function() {
        project.style.background = "orange";
    });

    project.addEventListener("mouseout", function() {
        project.style.background = "lightblue";
    });
});


let video = document.getElementById("myVideo");

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.5 });

observer.observe(video);

let projBtns = document.querySelectorAll(".projBtn");

projBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let targetId = btn.getAttribute("data-target");
        let box = document.getElementById(targetId);
        document.querySelectorAll(".vidBox").forEach(function(v) {
            v.style.display = "none";
            let vid = v.querySelector("video");
            if (vid) vid.pause();
        });
        box.style.display = "block";
    });
});
