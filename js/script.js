//#1. 헤더공간을 구성(메뉴의 href를 통해서 사용자가 원하는 페이지를 불러올 수 있도록 구성하기 위함)
Vue.component("header-el", {
    data : () => {
        return {menuItem : [
            "animal", "history", "environment", "science", "travel"
        ]}
    },
    template : `
    <header>
        <div class="logo">
            <router-link to="/"><img src="./img/toplogo.png" alt=""></router-link>
        </div>
        <div class="menu">
            <ul>
                <li v-for="list in menuItem">
                    <router-link :to="'/'+list">{{ list }}</router-link>
                </li>
            </ul>
        </div>
        <div class="mypage">
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>

        <div class="resBtn">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    `
});


//const randIndex = Math.floor(Math.random() * 5);

const pageMain = {
    data : () => {
        return { 
            movieItem : [
                ["animal.mp4", "animal"],
                ["history.mp4", "history"],
                ["environment.mp4", "environment"],
                ["science.mp4", "science"],
                ["travel.mp4", "travel"],
            ],
            randIndex : Math.floor(Math.random() * 5)
        }
    },
    template : `
    <section id="main">
        <video :src="'./video/' + movieItem[randIndex][0]" autoplay loop muted playsinline></video>
        <div class="video_dark"></div>
        <div class="wrap">
            <div class="main_cont">
                <div class="content">
                    <img src="./img/yellowFrame.png" alt="">
                    <h2>{{movieItem[randIndex][1]}}</h2>
                </div>
            </div>
        </div>
    </section>
    `
}


//#2. data 패턴(2차 배열) - [이미지, 타이틀]
const pageAnimal = {
    data : () => {
        return {
            item : [
                ["animal_news_1.jpg", "animal_news_1"],
                ["animal_news_2.jpg", "animal_news_2"],
                ["animal_news_3.jpg", "animal_news_3"],
                ["animal_news_4.jpg", "animal_news_4"],
                ["animal_news_5.jpg", "animal_news_5"],
                ["animal_news_6.jpg", "animal_news_6"],
                ["animal_news_7.jpg", "animal_news_7"],
                ["animal_news_8.jpg", "animal_news_8"],
                ["animal_news_9.jpg", "animal_news_9"],
                ["animal_news_10.jpg", "animal_news_10"],
                ["animal_news_11.jpg", "animal_news_11"],
                ["animal_news_12.jpg", "animal_news_12"],
            ]
        }
    },
    template : `
    <section class="sub_item">
        <div class="wrap">
            <h2>Animal</h2>
            <div class="content">
                <div v-for="list in item" class="box">
                    <div class="bg_img" :style="'background-image: url(./img/animals/'+list[0]+')'"></div>
                    <div class="info"><h3>{{list[1]}}</h3></div>
                </div>
            </div>
        </div>
    </section>    
    `
} 

const pageHistory = {
    data : () => {
        return {
            item : [
                ["history_news_1.jpg", "history_news_1"],
                ["history_news_2.jpg", "history_news_2"],
                ["history_news_3.jpg", "history_news_3"],
                ["history_news_4.jpg", "history_news_4"],
                ["history_news_5.jpg", "history_news_5"],
                ["history_news_6.jpg", "history_news_6"],
                ["history_news_7.jpg", "history_news_7"],
                ["history_news_8.jpg", "history_news_8"],
                ["history_news_9.jpg", "history_news_9"],
                ["history_news_10.jpg", "history_news_10"],
                ["history_news_11.jpg", "history_news_11"],
                ["history_news_12.jpg", "history_news_12"],
            ]
        }
    },
    template : `
    <section class="sub_item">
        <div class="wrap">
            <h2>History</h2>
            <div class="content">
                <div v-for="list in item" class="box">
                    <div class="bg_img" :style="'background-image: url(./img/history/'+list[0]+')'"></div>
                    <div class="info"><h3>{{list[1]}}</h3></div>
                </div>
            </div>
        </div>
    </section>    
    `
}

const pageEnvironment = {
    data : () => {
        return {
            item : [
                ["environ_news_1.jpg", "environment_news_1"],
                ["environ_news_2.jpg", "environment_news_2"],
                ["environ_news_3.jpg", "environment_news_3"],
                ["environ_news_4.jpg", "environment_news_4"],
                ["environ_news_5.jpg", "environment_news_5"],
                ["environ_news_6.jpg", "environment_news_6"],
                ["environ_news_7.jpg", "environment_news_7"],
                ["environ_news_8.jpg", "environment_news_8"],
                ["environ_news_9.jpg", "environment_news_9"],
                ["environ_news_10.jpg", "environment_news_10"],
                ["environ_news_11.jpg", "environment_news_11"],
                ["environ_news_12.jpg", "environment_news_12"],
            ]
        }
    },
    template : `
    <section class="sub_item">
        <div class="wrap">
            <h2>Environment</h2>
            <div class="content">
                <div v-for="list in item" class="box">
                    <div class="bg_img" :style="'background-image: url(./img/environment/'+list[0]+')'"></div>
                    <div class="info"><h3>{{list[1]}}</h3></div>
                </div>
            </div>
        </div>
    </section>    
    `
} 

const pageScience = {
    data : () => {
        return {
            item : [
                ["science_news_1.jpg", "science_news_1"],
                ["science_news_2.jpg", "science_news_2"],
                ["science_news_3.jpg", "science_news_3"],
                ["science_news_4.jpg", "science_news_4"],
                ["science_news_5.jpg", "science_news_5"],
                ["science_news_6.jpg", "science_news_6"],
                ["science_news_7.jpg", "science_news_7"],
                ["science_news_8.jpg", "science_news_8"],
                ["science_news_9.jpg", "science_news_9"],
                ["science_news_10.jpg", "science_news_10"],
                ["science_news_11.jpg", "science_news_11"],
                ["science_news_12.jpg", "science_news_12"],
            ]
        }
    },
    template : `
    <section class="sub_item">
        <div class="wrap">
            <h2>science</h2>
            <div class="content">
                <div v-for="list in item" class="box">
                    <div class="bg_img" :style="'background-image: url(./img/science/'+list[0]+')'"></div>
                    <div class="info"><h3>{{list[1]}}</h3></div>
                </div>
            </div>
        </div>
    </section>    
    `
} 

const pageTravel = {
    data : () => {
        return {
            item : [
                ["travel_news_1.jpg", "travel_news_1"],
                ["travel_news_2.jpg", "travel_news_2"],
                ["travel_news_3.jpg", "travel_news_3"],
                ["travel_news_4.jpg", "travel_news_4"],
                ["travel_news_5.jpg", "travel_news_5"],
                ["travel_news_6.jpg", "travel_news_6"],
                ["travel_news_7.jpg", "travel_news_7"],
                ["travel_news_8.jpg", "travel_news_8"],
                ["travel_news_9.jpg", "travel_news_9"],
                ["travel_news_10.jpg", "travel_news_10"],
                ["travel_news_11.jpg", "travel_news_11"],
                ["travel_news_12.jpg", "travel_news_12"],
            ]
        }
    },
    template : `
    <section class="sub_item">
        <div class="wrap">
            <h2>Travel</h2>
            <div class="content">
                <div v-for="list in item" class="box">
                    <div class="bg_img" :style="'background-image: url(./img/travel/'+list[0]+')'"></div>
                    <div class="info"><h3>{{list[1]}}</h3></div>
                </div>
            </div>
        </div>
    </section>    
    `
} 
 



const rtRoutes = [
    {
        path : "/",
        component : pageMain
    },
    {
        path : "/animal",
        component : pageAnimal
    },
    {
        path : "/history",
        component : pageHistory
    },
    {
        path : "/environment",
        component : pageEnvironment
    },
    {
        path : "/science",
        component : pageScience
    },
    {
        path : "/travel",
        component : pageTravel
    }
];

const router1 = new VueRouter({
    routes : rtRoutes
});


const date = new Date();
const year = date.getFullYear();

const footer = {
    template : `<footer><p>Copyrights &copy; National Geographic ${year}</p></footer>`
}

new Vue({
    el : "#app",
    router : router1,
    components : {
        "footer-el" : footer
    }
});





/* 반응형 메뉴 resBtn 클릭시 */
const $body = document.querySelector("body");
const $menu = document.querySelector("header .menu");
const $resBtn = document.querySelector("header .resBtn");

//반응형메뉴 리스트 클릭시 서브 페이지와 연동 
const menuList = () => {
    const $menuList = document.querySelectorAll("header .menu.active li");
    for(const v of $menuList){
        console.log(v);
        v.addEventListener("click", () => {
            console.log("클릭 이벤트2");
            $body.classList.remove("showMenu");
            $menu.classList.remove("active");
            $resBtn.classList.remove("active");
        });
    }

    const $logo = document.querySelector("body.showMenu header .logo");
    $logo.addEventListener("click", () => {
        console.log("클릭 이벤트_로고");
        $body.classList.remove("showMenu");
        $menu.classList.remove("active");
        $resBtn.classList.remove("active");
    });
}


//반응형메뉴 클릭시 
$resBtn.addEventListener("click", function(){
    console.log("클릭 이벤트");
    const $active_resBtn = $resBtn.classList.contains("active");
    console.log($active_resBtn);
    if(!$active_resBtn){
        $body.classList.add("showMenu");
        $menu.classList.add("active");
        $resBtn.classList.add("active");
        menuList();
    }else{
        $body.classList.remove("showMenu");
        $menu.classList.remove("active");
        $resBtn.classList.remove("active");
    }
});














