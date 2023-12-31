class myHeader extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback()
    {
        this.innerHTML =`<div id="many-page-container">
                            <span id="header-icon" class="header-icon" onclick="iconClick()"> > </span>
                                <div class="other-page-nav" >
                                    <ul id="page-list" style="list-style: none;visibility: collapse;">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="yahtzee.html">Yahtzee</a></li>
                                        <li><a href="../EmergencyWaitlist/Emergency%20waitlist%20frontend/Login%20page/login.html">Emergency Wait List</a></li>
                                        <li><a href="Technologies.html">Technologies Used</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="header-container">
                                <h1 id="main-header" class="main-header"></h1>
                                <h3 id="info-about-me" style="font-size:1em;"></h3>

                            </div>

                            <nav class="nav-bar">

                            <ul style="list-style: none" >
                                <li id="skill-button" class="nav-item" style="-webkit-text-fill-color: var(--skills-color);"><a onclick="skillsClick()">Skills</a> </li>
                                <li id="exp-button" class="nav-item" style="-webkit-text-fill-color: var(--exp-color);"><a onclick="experienceClick()">Work Experience</a> </li>
                                <li id="edu-button" class="nav-item" style="-webkit-text-fill-color: var(--education-color);"><a onclick="educationClick()">Education</a></li>
                            </ul>
                            </nav>`;
    }
}

window.customElements.define('my-header', myHeader)