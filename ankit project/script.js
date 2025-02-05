const MainContainer  = document.getElementById('main');

function Infrastructure(){
    MainContainer.innerHTML=''
    MainContainer.innerHTML=`
            <div id="category">
                <p>Category - Infrastructure</p>
            </div>
            <div id="category-images">
                <div class="img">
                    <img src="saag.webp">
                    <p>SAAG</p>
                    <a id="Infrastructure-1">Infrastructure</a>&nbsp;<a href="#" class="project">Project</a>
                </div>
                <div class="img">
                    <img src="pier10.webp">
                    <p>Pier 10</p>
                    <a id="Infrastructure-2" >Infrastructure</a>&nbsp;<a href="#" class="project" >Project</a>
                </div>
            </div>`
            intializeEvent();
}
function Project(){
    MainContainer.innerHTML=''
    MainContainer.innerHTML=`
            <div id="category">
                <p>Category - Project</p>
            </div>
            <div id="category-images">
                <div class="img">
                    <img src="saag.webp">
                    <p>SAAG</p>
                    <a id="Infrastructure-1">Infrastructure</a>&nbsp;<a href="#" class="project">Project</a>
                </div>
                <div class="img">
                    <img src="london-fields.webp">
                    <p>London Fields</p>
                    <a href="#corporate">Corporate</a>&nbsp;<a href="#" class="project" >Project</a>
                </div>
                <div class="img">
                    <img src="pier10.webp">
                    <p>Pier 10</p>
                    <a id="Infrastructure-2" >Infrastructure</a>&nbsp;<a href="#" class="project" >Project</a>
                </div>
                <div class="img">
                    <img src="0restad.webp">
                    <p>Ørestad</p>
                    <a href="#" class ="project" >Project</a>&nbsp;<a href="#residental">Residental</a>
                </div>
            </div>`
            intializeEvent();
}

function Corporate(){
    MainContainer.innerHTML=''
    MainContainer.innerHTML=`
            <div id="category">
                <p>Category - Corporate</p>
            </div>
            <div id="category-images">
                <div class="img">
                    <img src="london-fields.webp">
                    <p>London Fields</p>
                    <a href="#corporate">Corporate</a>&nbsp;<a href="#" class="project" >Project</a>
                </div>
            </div>`
            intializeEvent();
}
function Residental(){
    MainContainer.innerHTML=''
    MainContainer.innerHTML=`
            <div id="category">
                <p>Category - Residental</p>
            </div>
            <div id="category-images">
                <div class="img">
                    <img src="0restad.webp">
                    <p>Ørestad</p>
                    <a href="#" class ="project" >Project</a>&nbsp;<a href="#residental">Residental</a>
                </div>
            </div>`
            intializeEvent();
}

function intializeEvent() {
    const infrastructure = document.querySelectorAll('#Infrastructure-1, #Infrastructure-2');
    infrastructure.forEach(infra => {
        infra.addEventListener('click', Infrastructure);
    });
    const project = document.querySelectorAll('.project');
    project.forEach(pro => {
        pro.addEventListener('click', Project);
    });
    const corporate = document.querySelector('[href="#corporate"]');
    if (corporate) {
        corporate.addEventListener('click', Corporate);
    }
    const residental = document.querySelector('[href="#residental"]');
    if (residental) {
        residental.addEventListener('click', Residental);
    }
}

intializeEvent();

document.getElementById('menu-icons').addEventListener('click', function(){
    document.getElementById('menu-bar').style.display='block';
    document.getElementById('menu-icons').style.display='none';
});