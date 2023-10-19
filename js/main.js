
let current = null;

function openCloseForm()
{
    let popupContainer = document.getElementById('popup-container');
    let popupForm = document.getElementById('popup-form');

    if(popupContainer.style.visibility == "visible") {
        popupContainer.style.visibility = "hidden";
    }
    else {
        popupContainer.style.visibility = "visible";
    }
}

const headerTitle = 'Ross Parker';
const infoText = 'Full Time Student || (xxx) xxx-xxxx || emailaddress@dnsserver.com';
function loadHeader(title= headerTitle, info=infoText)
{
    let cont = document.getElementById('top-container');
    let el = document.createElement('my-header');
    cont.append(el);

    document.getElementById('main-header').innerText = title;
    document.getElementById('info-about-me').innerText = info;
}




