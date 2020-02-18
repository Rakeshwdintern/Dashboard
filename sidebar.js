function showsidebar() {

    var sidebar = document.getElementById('sidebar-mobile');

    if (sidebar.style.left === "-100%") {
        sidebar.style.left = "0%";
    }
    else {
        sidebar.style.left = "-100%";
    }




}



function showsidebar1() {

    var sidebar = document.getElementById('tablet-only');

    if (sidebar.style.left === "-100%") {
        sidebar.style.left = "0%";
    }
    else {
        sidebar.style.left = "-100%";
    }




}

function merpic1(){
    var sidebar2 = document.getElementById('mer-button1');
    var sidebar1 = document.getElementById('mer-button2');

    sidebar1.style.background ="transparent";
    sidebar2.style.background  = "#ff8a00";
    sidebar2.style.color ="white";
    sidebar1.style.color="black";


}




function merpic2(){
    var sidebar2 = document.getElementById('mer-button2');
    var sidebar1 = document.getElementById('mer-button1');

    sidebar2.style.background  = "#ff8a00";
    sidebar1.style.background ="transparent";
    sidebar2.style.color ="white";
    sidebar1.style.color="black";
}

function hidesidebar() {

    var sidebar = document.getElementById('sidebar-mobile');

    if (sidebar.style.left === "0%") {
        sidebar.style.left = "-100%";
    }

}