function toggleNav() {
    var sideNav = document.getElementById("sideNav");
    var menuIcon = document.querySelector(".menu-icon");

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        menuIcon.style.left = "20px"; // Move icon back to original position
    } else {
        sideNav.style.width = "250px";
        menuIcon.style.left = "250px"; // Move icon along with side-nav
    }
}
