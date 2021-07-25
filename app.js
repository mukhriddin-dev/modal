document.getElementById("show").onclick = function () {
    document.getElementById("mymod").style.display = "block";
};


document.getElementById("close").onclick = function () {
    document.getElementById("mymod").style.display = "none";
};

window.onclick = function (event, target) {
    var sm = document.getElementById("mymod");
    console.log(event.target);

    if (sm == event.target)
    {
        sm.style.display = "none";
    }


};

