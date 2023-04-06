// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 3;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 500;

// Value used to drive
var driveTime = driveSlides * driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 10;
var followBearing = 0;
var followPitch = 50;

var config = {
    style: 'mapbox://styles/hronna/clg07z2du000201rzlba9vzf8',
    accessToken: 'pk.eyJ1IjoiaHJvbm5hIiwiYSI6ImNsMGo1ODB1bzA3ZHMzY3B3MmxjOThxZHcifQ.KliABdQT-tKWHju3pramog',
    showMarkers: false,
    use3dTerrain: true,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'intro  ',
            alignment: 'left',
            title: '高人气景点',
            image: '',
            description: '通过地图来探索，进行一场 <span class="highlight">地图观光体验</span>',
            mapAnimation: 'flyTo',
            location: {
                center: [118.09,24.48],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'firstloc',
            alignment: 'right',
            title: '白鹭洲公园',
            image: 'assets/img/白鹭洲公园.jpg',
            link: 'https://www.instagram.com/p/CbtS0JbP452211/',
            linktext: '白鹭洲',
            description: '以音乐喷泉广场为主题,以白鹭女神像和鸽子广场为中心,厦门最大的全开放广场公园。<br> ',
            rotateAnimation: true,
            mapAnimation: 'flyTo',
            location: {
                center: [118.0892236,24.4726933],
                zoom: 16,
                pitch: 66,
                bearing: 180,
                speed: 1,
                curve: 2,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'thirdloc',
            alignment: 'right',
            title: '厦门市博物馆',
            image: 'assets/img/厦门市博物馆.jpg',
            linktext: '厦门市博物馆',
            link: 'https://www.instagram.com/p/CbBkrlvhAvW11/',
            description: '致力于闽台两岸及传世珍贵文物的收藏、保护、研究、陈列，利用博物馆直观的展品，<br>宣传文物政策，普及文物知识，弘扬中华民族的传统文化，进行爱国主义教育。',
            rotateAnimation: true,
            mapAnimation: 'flyTo',
            location: {
                center: [118.11,24.49],
                zoom: 16,
                pitch: 70,
                bearing: 160,
                speed: 0.9,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'secondloc',
            alignment: 'right',
            title: '厦门鼓浪屿菽庄花园',
            image: 'assets/img/菽庄花园.jpg',
            link: 'https://www.instagram.com/p/CbFCxFYPa_J11/',
            linktext: '菽庄花园',
            description: '位于福建省厦门市思明区鼓浪屿岛南部，建于民国二年（1913年），<br>面向大海，背倚日光岩，',
            rotateAnimation: true,
            mapAnimation: 'flyTo',
            location: {
                center: [118.0700177, 24.4393271],
                zoom: 16,
                pitch: 75,
                bearing: 180,
                speed: 0.9,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'secondloc',
            alignment: 'right',
            title: '厦门鼓浪屿毓园',
            image: 'assets/img/毓园.jpg',
            link: 'https://www.instagram.com/p/CbFCxFYPa_J11/',
            linktext: '毓园',
            description: '毓园位于福建省厦门鼓浪屿东南部复兴路，即林巧稚大夫纪念园，<br>为纪念人民医学家林巧稚大夫而建',
            rotateAnimation: true,
            mapAnimation: 'flyTo',
            location: {
                center: [118.0700177, 24.4393271],
                zoom: 16,
                pitch: 75,
                bearing: 180,
                speed: 0.9,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'break',
            alignment: 'left',
            title: '香港城市徒步爬山',
            image: '',
            description: '制作爬山线路，提供线路信息',
            mapAnimation: 'flyTo',
            location: {
                center: [118.073467444834, 24.4509680645289],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'trail',
            alignment: 'right',
            title: '香港爬山路线',
            image: 'assets/img/XGPS.jpg',
            description: 'Maclehose Trail Section 8 - Lead Mine Pass to Route Twisk<br>麥理浩徑',
            mapAnimation: 'flyTo',
            location: {
                center: [114.12911, 22.41206],
                zoom: 13,
                pitch: 50,
                bearing: 0,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            alignment: 'left',
            title: '距离 & 耗时',
            description: ' ',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            alignment: 'right',
            title: '沿途景色',
            image: 'assets/img/loc_3.png',
            description: ' ',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            alignment: 'right',
            title: '旅游地图规划提升',
            image: 'assets/img/network.png',
            description: '（1）收集景点评论，探寻景点之间关联<br>（2）进一步细化分类景点，制作定制化旅游路线',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-3',
            alignment: 'center',
            title: '旅途愉快!',
            image: '',
            description: '',
            mapAnimation: 'flyTo',
            location: {
                center: [114.12911, 22.41206],
                zoom: 13,
                pitch: 50,
                bearing: 0,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
