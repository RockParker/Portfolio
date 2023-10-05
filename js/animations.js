





function iconClick()
{
    let rotatable = document.getElementById('header-icon');
    let otherPageNav = document.getElementById('many-page-container');
    let list = document.getElementById('page-list');

    if(rotatable.classList.contains('rotate')) //if it is there, remove it
    {
        rotatable.classList.remove('rotate')
        otherPageNav.classList.remove('icon-clicked')
        list.style.visibility = 'hidden';

    }
    else
    {
        rotatable.classList.add('rotate')
        otherPageNav.classList.add('icon-clicked')
        list.style.visibility = 'visible';

    }




}