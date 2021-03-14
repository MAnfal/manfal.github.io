const closeIconID = "header__mobile-icon-close";
const openIconID = "header__mobile-icon-open";
const menuID = "header__mobile-menu";

function hideIcon(iconID: string) {
    const element = document.getElementById(iconID);

    if (element.classList.contains("block")) {
        element.classList.remove("block");
    }

    if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
    }
}

function showIcon(iconID: string) {
    const element = document.getElementById(iconID);

    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    }

    if (!element.classList.contains("block")) {
        element.classList.add("block");
    }
}

function showMenu() {
    document.getElementById(menuID).style.display = "block";
}

function hideMenu() {
    document.getElementById(menuID).style.display = "none";
}

document.getElementById(closeIconID).onclick = function (e) {
    hideIcon(closeIconID);
    showIcon(openIconID);

    hideMenu();
};

document.getElementById("header__mobile-icon-open").onclick = function (e) {
    hideIcon(openIconID);
    showIcon(closeIconID);

    showMenu();
};
