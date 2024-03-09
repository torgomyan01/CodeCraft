const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

const languages = [
    {
        code: 'ru',
        img: 'flag-ru.svg'
    },
    {
        code: 'ru',
        img: 'flag-ru.svg'
    }
];

AOS.init();

$('.gradient-card-running-line').each((index, elem) => {
    const gradientCardRunningLine = $(elem).text();
b//1;
    $(elem).text('');

    for (let i = 0; i < gradientCardRunningLine.length - 1; i++) {
        $(elem).append(`<span>${gradientCardRunningLine[i]}</span>`)
    }

    const thisChild = $(elem).children('span');

    let count = 0;
    thisChild.each((index, elemSpan) => count += $(elemSpan).width())

    $(elem).css('width', `${count}px`);
    $(elem).css('animation', `gradient-card-line ${count / 80}s linear`);
    $(elem).css('animation-iteration-count', `infinite`);
    $(elem).css('animation-play-state', `paused`);

})


// ....... Menu


const menu = document.querySelector('.menu');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');
const yellowMobile = document.querySelector('.yellow-mobile');
const greenMobile = document.querySelector('.green-mobile');
const purpleMobile = document.querySelector('.purple-mobile');
const changeLanguage = document.querySelectorAll('.change-language');

window.onload = () => {
    setTimeout(() => {
        yellow.classList.add('active')
        green.classList.add('active')
        purple.classList.add('active')
        yellowMobile.classList.add('active')
        greenMobile.classList.add('active')
        purpleMobile.classList.add('active')

        setTimeout(()=>{
            yellow.classList.add('no-trans')
            green.classList.add('no-trans')
            purple.classList.add('no-trans')
        },300)
        const tl = gsap.timeline({ease: "slow", duration: 1})
          if(window.innerWidth > 992){

              document.addEventListener("mousemove", e => {
                  gsap.utils.toArray(".circle").forEach(layer => {
                      if(window.scrollY > 800){
                          const depth = layer.dataset.depth * 2;
                          const moveX = ((e.pageX)-(window.innerWidth/2)) / 3;
                          const moveY = ((e.pageY)-(window.innerHeight/2) / 3);
                          tl.to(layer, {
                              x: moveX/depth,
                              y: moveY/depth,
                              rotate: 15
                          }, 0);
                      }
                  });

              });
          }
    }, 1500)
}

$(window).on('scroll', ()=>{
    const scroly = window.scrollY;
    if(scroly >= 10){
        menu.classList.add('active')
    } else if(scroly <= 10){
        menu.classList.remove('active')
    }
}).scroll()

changeLanguage.forEach((item) => {
    item.addEventListener('click', function (){
        const lang = this.dataset.lang;
        if(lang){
            translateSite(lang)
        } else {
            console.log('Lang err')
        }
    })
})


const choose_green = $('#choose-green').offset().top


ScrollTrigger.create({
    start: `top -${choose_green - 400}`,
    end: 9999,
    toggleClass: {className: 'active', targets: '.choose-green '},
});

const buttons = gsap.utils.toArray('.etap-work-svg');
buttons.forEach((btn) => {
    gsap.from(btn, {
        scrollTrigger: {
            start: 'top bottom',
            end: 'bottom top',
            trigger: btn,
            toggleClass: 'active'
        }
    });
});


const mobileMenBoard = document.querySelector('.mobile-menu-board');
const menuItemMobile = document.querySelector('.menu-item-mobile');
const menuItemMobileLink = document.querySelectorAll('.menu-item-mobile ul .menu-item-mobile-link');
mobileMenBoard.addEventListener('click', function (){
    if(this.classList.contains(active)){
        this.classList.remove(active);
        menuItemMobile.classList.remove(active);
        document.body.style.overflow = null;
    } else {
        this.classList.add(active);
        menuItemMobile.classList.add(active);
        document.body.style.overflow = 'hidden';
    }
})

menuItemMobileLink.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(mobileMenBoard.classList.contains(active)){
            mobileMenBoard.classList.remove(active);
            menuItemMobile.classList.remove(active);
            document.body.style.overflow = null;
        } else {
            mobileMenBoard.classList.add(active);
            menuItemMobile.classList.add(active);
            document.body.style.overflow = 'hidden';
        }
    })
})

//. Works

const Works  = [
    {
        name: "Sdney",
        imgUrl: 'images/Sydney.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/Sdney/'
            }
        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Empover-Prosper",
        imgUrl: 'images/Empower-Prosper.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/empower-prospe/'
            }
        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Aniox",
        imgUrl: 'images/Aniox.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/Aniox/'
            },
            {
                name: 'confirm-email.html',
                url: 'https://armanpinachyan.github.io/Aniox/confirm-email.html'
            },
            {
                name: 'email.html',
                url: 'https://armanpinachyan.github.io/Aniox/email.html'
            },
            {
                name: 'finish.html',
                url: 'https://armanpinachyan.github.io/Aniox/finish.html'
            },
            {
                name: 'login.html',
                url: 'https://armanpinachyan.github.io/Aniox/login.html'
            },
            {
                name: 'new-ticket.html',
                url: 'https://armanpinachyan.github.io/Aniox/new-ticket.html'
            },
            {
                name: 'robo.html',
                url: 'https://armanpinachyan.github.io/Aniox/robo.html'
            },
            {
                name: 'steps.html',
                url: 'https://armanpinachyan.github.io/Aniox/steps.html'
            },
            {
                name: 'ticket.html',
                url: 'https://armanpinachyan.github.io/Aniox/ticket.html'
            },
            {
                name: 'ticket-message.html',
                url: 'https://armanpinachyan.github.io/Aniox/ticket-message.html'
            },
            {
                name: 'trial.html',
                url: 'https://armanpinachyan.github.io/Aniox/trial.html'
            },


        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Lagom",
        imgUrl: 'images/Lagom.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/Lagom/'
            }

        ],
        created: 'HTML CSS SCSS JS jQUERY GSAP'
    },
    {
        name: "Arthall-Synergy",
        imgUrl: 'images/ArtHall-Synergy.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/Arthall-Synergy/'
            }

        ],
        created: 'HTML CSS JS'
    },
    {
        name: "Artel",
        imgUrl: 'images/ARTEL1.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/Artel/'
            }

        ],
        created: 'HTML CSS SCSS JS jQUERY GSAP '
    },
    {
        name: "RimPlitka",
        imgUrl: 'images/RIM-PLITKA.png',
        links: [
            {
                name: 'index.html',
                url: 'https://mrs-rimplitka.ru/'
            }

        ],
        created: 'HTML CSS JS BOOTSTRAP'
    },
    {
        name: "Arthall",
        imgUrl: 'images/ArtHall.png',
        links: [

            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/arthall/'
            },
            {
                name: 'applications-for-participation.html',
                url: 'https://torgomyan01.github.io/arthall/applications-for-participation.html'
            },
            {
                name: 'art-critic-profile.html',
                url: 'https://torgomyan01.github.io/arthall/art-critic-profile.html'
            },
            {
                name: 'art-critics.html',
                url: 'https://torgomyan01.github.io/arthall/art-critics.html'
            },
            {
                name: 'art-dealer-profile.html',
                url: 'https://torgomyan01.github.io/arthall/art-dealer-profile.html'
            },
            {
                name: 'artist-profile.html',
                url: 'https://torgomyan01.github.io/arthall/artist-profile.html'
            },
            {
                name: 'dealers.html',
                url: 'https://torgomyan01.github.io/arthall/dealers.html'
            },
            {
                name: 'exhibition-space-profile.html',
                url: 'https://torgomyan01.github.io/arthall/exhibition-space-profile.html'
            },
            {
                name: 'inserts.html',
                url: 'https://torgomyan01.github.io/arthall/inserts.html'
            },
            {
                name: 'sign-up.html',
                url: 'https://torgomyan01.github.io/arthall/sign-up.html'
            },

        ],
        created: 'HTML SCSS Bootstrap JS'
    },
    {
        name: "Max-Asfalt",
        imgUrl: 'images/max-asfalt.png',
        links: [
            {
                name: 'index.html',
                url: 'https://mir-darog.ru/'
            }

        ],
        created: 'HTML CSS JAVASCRIPT'
    },
    {
        name: "Easy Card",
        imgUrl: 'images/EasyCards-Ru-Home.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/easyCard/'
            },
            {
                name: 'bakai-card.html',
                url: 'https://armanpinachyan.github.io/easyCard/bakai-card.html'
            },
            {
                name: 'freedom-card.html',
                url: 'https://armanpinachyan.github.io/easyCard/freedom-card.html'
            },
            {
                name: 'kazakhstan.html',
                url: 'https://armanpinachyan.github.io/easyCard/kazakhstan.html'
            },
            {
                name: 'kirghizia.html',
                url: 'https://armanpinachyan.github.io/easyCard/kirghizia.html'
            },
            {
                name: 'optimal-card.html',
                url: 'https://armanpinachyan.github.io/easyCard/optimal-card.html'
            },
        ],
        created: 'HTML CSS JS JQUERY AOS-JS'
    },
    {
        name: "Neural-Network",
        imgUrl: 'images/Widgets.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/neural-network/'
            },
            {
                name: 'widgets.html',
                url: 'https://torgomyan01.github.io/neural-network/widgets.html'
            },
            {
                name: 'services.html',
                url: 'https://torgomyan01.github.io/neural-network/services.html'
            },
            {
                name: 'Trash-detection.html',
                url: 'https://torgomyan01.github.io/Trash-detection.html'
            },
            {
                name: 'widget.html',
                url: 'https://torgomyan01.github.io/widget.html'
            },
            {
                name: 'Classification-of-skin-diseases.html',
                url: 'https://torgomyan01.github.io/neural-network/Classification-of-skin-diseases.html'
            },
            {
                name: 'contacts.html',
                url: 'https://torgomyan01.github.io/neural-network/contacts.html'
            },
            {
                name: 'Definition-of-baggage-security.html',
                url: 'https://torgomyan01.github.io/neural-network/Definition-of-baggage-security.html'
            },
            {
                name: 'definition-of-hand-gestures.html',
                url: 'https://torgomyan01.github.io/neural-network/definition-of-hand-gestures.html'
            },
            {
                name: 'Detection-of-free-parking-spaces.html',
                url: 'https://torgomyan01.github.io/neural-network/Detection-of-free-parking-spaces.html'
            },
            {
                name: 'fixing-the-movement-of-people.html',
                url: 'https://torgomyan01.github.io/neural-network/fixing-the-movement-of-people.html'
            },
            {
                name: 'neural-network-capabilities.html',
                url: 'https://torgomyan01.github.io/neural-network/neural-network-capabilities.html'
            },
            {
                name: 'recognition-of-emotions-in-photo.html',
                url: 'https://torgomyan01.github.io/neural-network/recognition-of-emotions-in-photo.html'
            },
            {
                name: 'Removing-people-from-a-video.html',
                url: 'https://torgomyan01.github.io/neural-network/Removing-people-from-a-video.html'
            },
            {
                name: 'Segmentation-bacteria-under-the-microscope.html',
                url: 'https://torgomyan01.github.io/neural-network/Segmentation-bacteria-under-the-microscope.html'
            },
            {
                name: 'segmentation-of-people-in-the-photo.html',
                url: 'https://torgomyan01.github.io/neural-network/segmentation-of-people-in-the-photo.html'
            },
        ],
        created: 'HTML CSS JS JQUERY'
    },
    {
        name: "Kupon",
        imgUrl: 'images/Kupon.png',
        links: [
            {
                name: 'index.html',
                url: 'https://armanpinachyan.github.io/Kupon/'
            },
            {
                name: 'product.html',
                url: 'https://armanpinachyan.github.io/Kupon/product.html'
            },
            {
                name: 'sale.html',
                url: 'https://armanpinachyan.github.io/Kupon/sale.html'
            },
        ],
        created: 'HTML CSS JS BOOTSTRAP'
    },
    {
        name: "Neuron",
        imgUrl: 'images/neuron.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/neuron/'
            }
        ],
        created: 'HTML CSS JS BOOTSTRAP JS'
    },
    {
        name: "RosMigrant",
        imgUrl: 'images/ros-mirgrant.png',
        links: [
            {
                name: 'index.html',
                url: 'https://torgomyan01.github.io/RosMigrant/'
            },
            {
                name: 'news.html',
                url: 'https://torgomyan01.github.io/RosMigrant/news.html'
            },
            {
                name: 'wiframe.html',
                url: 'https://torgomyan01.github.io/RosMigrant/wiframe.html'
            },
        ],
        created: 'HTML CSS Bootstrap JAVASCRIPT'
    },
];


const works_row = document.querySelector('#works-row')

Works.forEach((elem =>{
    works_row.insertAdjacentHTML('beforeend', PrintWorks(elem))

}))


function PrintWorks (elem){
        return (
          `
          <div class="col-md-4 col-sm-6 col-12 mb-30 h-500">
            <div style="background-image: url(${elem.imgUrl})" class="works-box">
              <div class="works-box-pages-link">
                <a class="github-link" href="#">${elem.name}</a>
                <div class="link-box overflow-y-auto">
                ${elem.links.map((link) => `<a class="link" target="_blank" href="${link.url}">${link.name}</a>`).join(' ')}
                 
              
                </div>
                <p class="page-about">${elem.created}</p>
              </div>
            </div>
          </div>

`
        )
}


const tl = gsap.timeline({ease: "slow", duration: 1})
$(window).on('mousemove', function (e){
    gsap.utils.toArray(".calc-images-img").forEach(layer => {
        const depth = layer.dataset.depth * 2;
        const moveX = ((e.pageX)-(window.innerWidth/2)) / 5;
        const moveY = ((e.pageY)-(window.innerHeight/2) / 2);
        tl.to(layer, {
            x: moveX/depth,
            y: moveY/depth / 4,
            rotate: 0
        }, 0);
    });
})
// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input, .def-input textarea');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
        if($(e).children('textarea').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})




// -------------- FOR DEFAULT INPUT FUNCTION -------------------


//... Pages


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});



let $canvas = $('#blob canvas'),
    canvas = $canvas[0],
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: canvas.getContext('webgl2'),
        antialias: true,
        alpha: true
    }),
    simplex = new SimplexNoise();

renderer.setSize($canvas.width(), $canvas.height());
renderer.setPixelRatio(window.devicePixelRatio || 1);

let scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);

camera.position.z = 5;

let geometry = new THREE.SphereGeometry(.8, 128, 128);

let material = new THREE.MeshPhongMaterial({
    color: 0xA60EDB,
    shininess: 100,
    opacity: 0.8
});

let lightTop = new THREE.DirectionalLight(0xFFFFFF, .7);
lightTop.position.set(0, 500, 200);
lightTop.castShadow = true;
scene.add(lightTop);

let lightBottom = new THREE.DirectionalLight(0xFF5FFF, .25);
lightBottom.position.set(0, -500, 400);
lightBottom.castShadow = true;
scene.add(lightBottom);

let ambientLight = new THREE.AmbientLight(0x798296);
scene.add(ambientLight);

let sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

let update = () => {

    let time = performance.now() * 0.0005,
        spikes = 0.75;

    for (let i = 0; i < sphere.geometry.vertices.length; i++) {
        let p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(1 + 0.3 * simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time));
    }

    sphere.geometry.computeVertexNormals();
    sphere.geometry.normalsNeedUpdate = true;
    sphere.geometry.verticesNeedUpdate = true;

}

function animate() {
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);



// .... language

const flag2 = document.querySelectorAll('.dropdown-flag-body .imgs2')
const flag = document.querySelectorAll('.dropdown-flag-body .imgs')


flag2.forEach((elem, index) =>{
    elem.addEventListener('click', ()=>{
      flag.forEach((el, i) =>{
          if(elem.classList[1] === 'img-am'){
              el.classList.remove('active')
              flag[0].classList.add('active')
          }
          else if(elem.classList[1] === 'img-ru'){
              el.classList.remove('active')
              flag[1].classList.add('active')
          }
          else if(elem.classList[1] === 'img-en'){
              el.classList.remove('active')
              flag[2].classList.add('active')
          }
      })
    })
})

const translateKeys = [
    {
        key: 'about',
        am: 'Մեր Մասին',
        ru: `О нас`,
        en: `About`
    },
    {
        key: 'works',
        am: 'Մեր Աշխատանքները',
        ru: `Наши работы`,
        en: `english`
    },
    {
        key: 'contact',
        am: 'Կապ',
        ru: 'Контакт',
        en: `Contact`
    },
    {
        key: 'services',
        am: 'Ծառայություններ',
        ru: 'Услуги',
        en: `Services`
    },
    {
        key: 'calc',
        am: 'Հաշվիչ',
        ru: `Калькулятор`,
        en: 'Calculator'
    },
    {
        key: 'pages',
        am: 'Գործընկերներ',
        ru: 'коллеги',
    },
    {
        key: 'header_title',
        am: 'Վեբ Կայքերի Պատրաստում',
        ru: 'Подготовка Веб-Сайтов'
    },
    {
        key: 'key_2',
        am: `Ունեցիր քո կայքը, քո սեփական բիզնեսի համար, և ավելցրու քո եկամուտը.
             <br><br>
             Ցանկացած ժամանակակից բիզնես պետքե ունենա իր կայքը քանի որ այն կարող է եկամուտի մէջ մեծ տարբերություն տալ
        `,
        ru: `Имейте собственный сайт для своего бизнеса.
              и увеличивайте свой доход.
                <br><br>
              Любой современный бизнес должен иметь свой сайт
              потому что,это может существенно повлиять на доход.`
    },
    {
        key: 'btn-header1',
        am: `Կապ մեզ հետ
           <i class="fa-solid fa-phone ps-10"></i>`,
        ru: `Связаться с нами
        <i class="fa-solid fa-phone ps-10"></i>
        `,
    },
    {
        key: 'head1',
        am: `Ինչու ընտրել մեզ`,
        ru: 'Почему выбирают нас',
    },
    {
        key: 'p1',
        am: `<span>Նորարարություն և ստեղծագործականություն.</span> Մենք ստեղծում ենք ժամանակակից վեբ
                նախագծեր և կրթական ծրագրեր, որոնք միշտ մեկ քայլ առաջ են միտումներից:`,
        ru: `
        <span>Инновации и творчество.</span> Мы создаем современные веб-проекты и образовательные
         программы, которые всегда на шаг впереди тенденций.
        `,
        en: `English`
    },
    {
        key: 'p2',
        am: `<span>Պրոֆեսիոնալ թիմ.</span> Մեր փորձառու մշակողները և հրահանգիչները
                ապահովում են ամենաբարձր մակարդակի գիտելիքներն ու հմտությունները:`,
        ru: `
        <span>Профессиональная команда.</span> Наши опытные разработчики и преподаватели обеспечивают высочайший уровень знаний и навыков.
        `,
        en: `English`
    },
    {
        key: 'p3',
        am: `<span>Գործնական փորձ.</span> Սովորել անելով: Ուսանողները լուծում են իրական խնդիրներ՝
                պատրաստվելով հաջող կարիերայի։`,
        ru: `
        <span>Практический опыт.</span>
         Обучение в процессе работы. Студенты решают реальные проблемы, готовясь к успешной карьере.
        `,
        en: `English`
    },
    {
        key: 'p4',
        am: `<span>Ճկունություն և անհատականություն.</span> Մեր ծրագրերը հարմար են հմտությունների բոլոր մակարդակների
                համար, և ճկուն գրաֆիկները
                հարմարեցված են ձեզ համապատասխան:`,
        ru: `
        <span>Гибкость и индивидуальность.</span>
         Наши программы подходят для всех уровней квалификации, а гибкий график специально разработан для вас.
        `,
        en: `English`
    },
    {
        key: 'p5',
        am: `<span>Ոգեշնչող համայնք. </span> Դուք դառնում եք ակտիվ համայնքի մի մասը, որտեղ ձեր
                գաղափարները աջակցվում են:`,
        ru: `
        <span>Вдохновляющее сообщество.</span>
         Вы становитесь частью активного сообщества, где ваши идеи поддерживаются.
        `,
        en: `English`
    },
    {
        key: 'p6',
        am: `<span>Իրական արդյունքներ</span> շրջանավարտները հաջողությամբ կիրառում են գիտելիքները
                սկսելով կարիերա ՏՏ ոլորտում կամ սկսելով իրենց սեփական նախագծերը:`,
        ru: `
        <span>Реальные результаты. </span>
         выпускники успешно применяют полученные знания, чтобы начать карьеру в сфере SS или запустить собственные проекты
        `,
        en: `English`
    },
    {
        key: 'p7',
        am: `Միացե՛ք մեզ և դարձե՛ք հաջողության մի մասը վեբ մշակման և ՏՏ ոլորտում:`,
        ru: 'Присоединяйтесь к нам и станьте частью успеха в веб-разработке и SS.',
        en: `English`
    },
    {
        key: 'head2',
        am: `ՄԵՐ ԱՇԽԱՏԱՆՔՆԵՐԸ `,
        ru: 'НАШИ РАБОТЫ',
        en: "English"
    },
    {
        key: 'btn2',
        am: `Տեսնել Ավելին`,
        ru: 'Посмотреть больше',
        en: "English"
    },
    {
        key: 'head3',
        am: `ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ`,
        ru: 'КОНТАКТЫ',
        en: "English"
    },
    {
        key: 'name',
        am: `ԱՆԴՐԱՆԻԿ ԹՈՐԳՈՄՅԱՆ`,
        ru: 'Андраник Торгомян ',
        en: "Andranik Torgomyan"
    },
    {
        key: 'head4',
        am: `Կայքը ըստ փուլերի`,
        ru: 'Сайт по этапам',
        en: "English"
    },
    {
        key: 'head5',
        am: `Մեր ծառայությունները`,
        ru: 'Наши сервисы',
        en: "English"
    },
    {
        key: 'head6',
        am: `ՀԱՇՎԻՉ`,
        ru: 'КАЛЬКУЛЯТОР',
        en: "English"
    },
    {
        key: 'calc-h3',
        am: ` Խնդրում եմ լրացրեք տվյալները`,
        ru: 'Пожалуйста, заполните информацию',
        en: "English"
    },
    {
        key: 'calc-sp1',
        am: `Ձեր Անունը`,
        ru: 'Ваше имя',
        en: "English"
    },
    {
        key: 'calc-sp2',
        am: `Հեռախոսահամար`,
        ru: 'Номер телефона',
        en: "English"
    },
    {
        key: 'calc-sp3',
        am: `Նկարագրություն`,
        ru: 'Описание',
        en: "English"
    },
    {
        key: 'calc-btn',
        am: `
        Ուղղարկել
        <i class="fa-regular fa-paper-plane ms-2"></i>`,
        ru: `Отправлять
        <i class="fa-regular fa-paper-plane ms-2"></i>
        `,
        en: "English"
    },
    {
        key: 'head7',
        am: `ՄԵԶ ՎՍՏԱՀՈՒՄ ԵՆ`,
        ru: 'НАМ ДОВЕРЯЮТ',
        en: "English"
    },
]

const elmTranslate = document.querySelectorAll('.tr-site');



function translateSite(isoCode){
    elmTranslate.forEach((item) => {
        const getKey = item.dataset.key;
        if(getKey){
            const getKeyTranslate = translateKeys.find((tr) => tr.key === getKey);

            if(getKeyTranslate){
                item.innerHTML = getKeyTranslate[isoCode]
            } else {
                console.error('No key for translateKeys Array');
            }
        } else {
            console.error('No Data Key');
        }
    })
}

function Request(url, option = {}){
    return fetch(url, option).then((res) => res.json());
}

Request('https://ipapi.co/json').then((res) => {
    console.log(res?.country_code)
    translateSite(res.country_code.toLowerCase());
})