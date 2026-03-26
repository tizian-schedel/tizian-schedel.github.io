// Script zur dynamischen Navigation und Hervorhebung der aktuellen Seite

function loadNavigation() {
    const headerHTML = `
        <header>
            <div class="header-content">
            <div class="logo">
                
            </div>
            <div class="header-text">
                <h1>Tizian Schedel</h1>
                <p>Maschinenbau-Student DHBW Ravensburg / HENSOLDT</p>
            </div>
        </div>
        </header>`;
        
    const navHTML = `
        <nav class="main-nav">
             <div class="container">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/Projekte/">Projekte</a></li>
                <li><a href="/Über mich/">Über mich</a></li>
            </ul>
        </div>
        </nav>`;

    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('nav-placeholder').innerHTML = navHTML;
    
    highlightCurrentPage();
}

function highlightCurrentPage() {
    // Ermittelt den aktuellen Pfad im Browser
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.main-nav a');
    
    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        // Prüft, ob der Pfad des Links im aktuellen Pfad enthalten ist
        if (currentPath === linkPath || (currentPath.includes(linkPath) && linkPath !== BASE_PATH)) {
            link.style.borderBottom = "2px solid #00aaff";
            link.style.color = "#00aaff";
        }
    });
}

document.addEventListener('DOMContentLoaded', loadNavigation);