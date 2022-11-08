// Popular Variabls
let html = document.querySelector('.html')
let body = document.querySelector('.body')
let nav = document.querySelector('.nav')
let mainContent = document.querySelector('.mainContent')
let footer = document.querySelector('.footer');
let topArrowBtn = document.querySelector('.topArrow');

// Website Sittings Showen ( Language - Mood )
const settingsBtn = document.querySelector('.nav #settingsBtn')
const moodBtn = document.querySelector('.nav #moodBtn')
const languageBtn = document.querySelector('.nav #languageBtn')
settingsBtn.addEventListener('click', () => {
    settingsBtn.classList.toggle('active')
    languageBtn.classList.toggle('active')
    moodBtn.classList.toggle('active')

    // Closing settings aftter 2.5s 
    // if (settingsBtn.classList.contains('active')) {
    //     let test = setTimeout(() => {
    //         closeSettings()
    //     }, 2500);
    // }
})
function closeSettings() {
    settingsBtn.classList.remove('active')
    languageBtn.classList.remove('active')
    moodBtn.classList.remove('active')
}

// Website Mood ( Light Mood - Dark Mood )
function lightMood() {
    window.localStorage.setItem('mood', 'light');
    moodBtn.classList.remove('dark');
    html.classList.remove('dark');
    moodBtn.classList.add('light');
    html.classList.add('light');
}
function darkMood() {
    window.localStorage.setItem('mood', 'dark');
    moodBtn.classList.remove('light');
    html.classList.remove('light');
    moodBtn.classList.add('dark');
    html.classList.add('dark');
}

moodBtn.addEventListener('click', () => {
    if (moodBtn.classList.contains('light')) {
        darkMood()
    } else if (moodBtn.classList.contains('dark')) {
        lightMood()
    }
    closeSettings()
})
if (window.localStorage.hasOwnProperty('mood')) {
    if (localStorage.valueOf('mood').mood !== 'dark') {
        lightMood();
    } else {
        darkMood();
    }
} else {
    lightMood();
}

// Language Changeing
function english() {
    window.localStorage.setItem('language', 'english');
    languageBtn.classList.remove('arabic');
    html.classList.remove('arabic');
    languageBtn.classList.add('english');
    html.classList.add('english');
}
function arabic() {
    window.localStorage.setItem('language', 'arabic');
    languageBtn.classList.remove('english');
    html.classList.remove('english');
    languageBtn.classList.add('arabic');
    html.classList.add('arabic');
}

languageBtn.addEventListener('click', () => {
    if (languageBtn.classList.contains('english')) {
        arabic()
    } else if (languageBtn.classList.contains('arabic')) {
        english()
    }
    closeSettings()
})
if (window.localStorage.hasOwnProperty('language')) {
    if (localStorage.valueOf('language').language !== 'english') {
        arabic();
    } else {
        english();
    }
} else {
    english();
}

// Scralling Transition 
function homeTransition() {
    let shape1 = document.querySelector('.homeSectionContent .shape1')
    let shape2 = document.querySelector('.homeSectionContent .shape2')
    let shape3 = document.querySelector('.homeSectionContent .shape3')
    shape1.style['top'] = `-${window.pageYOffset}px`
    shape2.style['left'] = `-${window.pageYOffset}px`
    shape2.style['bottom'] = `-${window.pageYOffset}px`
    shape3.style['right'] = `-${window.pageYOffset}px`
    shape3.style['bottom'] = `-${window.pageYOffset}px`

    let temp = document.querySelector('#about')
    if (temp.getBoundingClientRect().top < window.innerHeight - 150) {
        document.querySelector('.mainShape').style['opacity'] = 0
    } else {
        document.querySelector('.mainShape').style['opacity'] = 1
    }

}
function topArrow() {
    if (window.innerWidth < 450) {
        // console.log('phone')
        if (window.scrollY > 2750) {
            topArrowBtn.classList.add('show')
        } else {
            topArrowBtn.classList.remove('show')
        }
    } else {
        // document.querySelector('.portfolio').clientHeight
        if (1750 < window.scrollY) {
            topArrowBtn.classList.add('show')
        } else {
            topArrowBtn.classList.remove('show')
        }
    }
}
function reveal() {
    let sections = document.querySelectorAll('.reveal')
    for (let i = 0; i < sections.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = sections[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            sections[i].classList.add('active');
            if (sections[i].classList.contains('skills')) {
                if (!skillsNumsAnimation) {
                    let nums = document.querySelectorAll('.skills .numsAnimation')
                    nums.forEach((num) => startCount(num))
                }
                skillsNumsAnimation = true;
                let skillsBars = document.querySelectorAll('.skills .skillBar');
                skillsBars.forEach((bar) => {
                    bar.classList.add('active')
                })
            } else if (sections[i].classList.contains('facts')) {
                if (!factsNumsAnimation) {
                    let nums = document.querySelectorAll('.facts .numsAnimation')
                    nums.forEach((num) => startCount(num))
                }
                factsNumsAnimation = true;
            }
        } else {
            sections[i].classList.remove('active');
            if (sections[i].classList.contains('skills')) {
                skillsNumsAnimation = false;
                let nums = document.querySelectorAll('.skills .numsAnimation')
                nums.forEach((num) => {
                    num.textContent = 0
                })
                let skillsBars = document.querySelectorAll('.skills .skillBar');
                skillsBars.forEach((bar) => {
                    bar.classList.remove('active')
                })
            } else if (sections[i].classList.contains('facts')) {
                factsNumsAnimation = false;
                let nums = document.querySelectorAll('.facts .numsAnimation')
                nums.forEach((num) => {
                    num.textContent = 0
                })
            }
        }
    }
}
function startCount(el) {
    let goal = Number(el.getAttribute('goal'));
    let counter = setInterval(() => {
        el.textContent++;
        if (Number(el.textContent) === goal) {
            clearInterval(counter);
        }
    }, 1250 / goal)
}

let skillsNumsAnimation = false;
let factsNumsAnimation = false;
window.addEventListener('scroll', () => {
    homeTransition();
    topArrow();
    reveal();
});

let navMobileBtn = document.getElementById('navMobileBtn')
function navMobileShow(BTN) {
    if (BTN.classList.contains('open')) {
        BTN.classList.remove('open')
        BTN.classList.add('close')
        nav.setAttribute('mobile', 'open')
    } else if (BTN.classList.contains('close')) {
        BTN.classList.remove('close')
        BTN.classList.add('open')
        nav.setAttribute('mobile', 'close')
    }
}
navMobileBtn.addEventListener('click', () => {
    navMobileShow(navMobileBtn)
})
document.querySelectorAll('.nav li').forEach((el) => {
    el.addEventListener('click', () => {
        if (el.id !== 'settingsBtn') {
            navMobileShow(navMobileBtn)
        }
    })
})

// Projects type showen 
function showProjects() {
    let projectsChoices = document.querySelectorAll('.portfolio .controls span')
    projectsChoices.forEach((choice) => {
        choice.addEventListener('click', () => {
            projectsChoices.forEach((choice) => {
                choice.classList.remove('clicked')
            })
            choice.classList.add('clicked')
            let cards = document.querySelectorAll('.portfolio .card')
            cards.forEach((card) => {
                let choiceType = choice.getAttribute('proType')
                if (card.getAttribute('proType').match(choiceType)) {
                    card.classList.add('show')
                    let tags = document.querySelectorAll('.portfolio .card .details .tags span')
                    tags.forEach((tag) => {
                        if (tag.getAttribute('proType').match(choiceType)) {
                            tag.classList.add('active')
                        } else {
                            tag.classList.remove('active')
                        }
                    })
                } else {
                    card.classList.remove('show')
                }
            })
        })
    })
}
showProjects()

function projectsColumns() {
    let parent = document.getElementById('Content')
    let column1 = `
        <div class="column column1">
            <div class="content">
                <div class="title">
                    <p class="english">About Project :</p>
                    <p class="arabic">نبذة عن المشروع :</p>
                </div>
                <div class="resumeContent">
                    <p class="english">
                        a website that provides tech articles and explanations
                    </p>
                    <p class="arabic">
                        موقع الكتروني يقدم مقالات وشروحات تقنية
                    </p>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <p class="english">Technologies Used :</p>
                    <p class="arabic">التقنيات المستخدمة :</p>
                </div>
                <div class="resumeContent">
                    <ul class="flex">
                        <li class="topDot">
                            <p class="english">Design :</p>
                            <p class="arabic">مرحلة التصميم :</p>
                            <div class="subContent">
                                <span class="english fontBold shape">ADOBE XD</span> <br>
                                <span class="english fontBold shape">ADOBE PHOTOSHOP</span> <br>
                                <span class="english fontBold shape">ADOBE ILLUSTRATOR</span>
                            </div>
                        </li>
                        <li class="topDot">
                            <p class="english">Development :</p>
                            <p class="arabic">مرحلة البرمجة :</p>
                            <div class="subContent">
                                <span class="english fontBold shape">HTML5</span> <br>
                                <span class="english fontBold shape">CSS3</span> <br>
                                <span class="english fontBold shape">JAVASCRIPT</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <p class="english">Project Owner :</p>
                    <p class="arabic">مالك المشروع :</p>
                </div>
                <div class="resumeContent projectOwner">
                    <div class="personalInfo">
                        <div class="icon">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <p class="english">Abdullaziz Aldawk</p>
                        <p class="arabic">عبدالعزيز الداعوك</p>
                    </div>
                    <div class="subContent">
                        <div class="social flex-center">
                            <a href="https://www.linkedin.com/in/abdulaziz-aldawk-199907132" target="_blank"
                                class="icon Neum flex-center linkedin">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/ImLegend4658" target="_blank"
                                class="icon Neum flex-center github">
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <p class="english">Project Links :</p>
                    <p class="arabic">روابط المشروع :</p>
                </div>
                <div class="resumeContent">
                    <div class="social flex-center">
                        <a href="https://eqla3tech.com/" target="_blank" class="icon Neum flex-center github">
                            <i class="fa fa-link" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/iGreato1/Eqla3Tech" target="_blank"
                            class="icon Neum flex-center github">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <!-- <a href="https://www.behance.net/AbdullahAlqahtani1" target="_blank"
                                class="icon Neum flex-center behance">
                                <i class="fa fa-behance" aria-hidden="true"></i> -->
                        </a>
                        <a href="https://twitter.com/MrLegend2000/status/1484527844336324610?s=20&t=Gv2LNZbF3yPM-HPAWXdBCg"
                            target="_blank" class="icon Neum flex-center twitter">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
    let column2 = `
        <div class="column column2 flex-center">
            <img src="../../imgs/portfolioProjects/project1.svg" alt="">
        </div>
    `
    if (window.innerWidth < 1024) {
        console.log('phone')
        console.log(parent)
        document.getElementById('Content').innerHTML = column2 + column1
    } else {
        document.getElementById('Content').innerHTML = column1 + column2
    }
}