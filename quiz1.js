gsap.set(".home-container",{
    y:"-100%",
    opacity:0
})
gsap.set(".home-container .left",{
    y:100,
    opacity:0
})
gsap.set(".home-container .right",{
    x:100,
    opacity:0
})
function loadeAnimation(){
var tl = gsap.timeline();

tl.from(".loader .welcome h1 span",{
    x:100,
    stagger:0.2,
    duration:1,
    delay:0.5,
    ease:Power3.easeInOut
})
tl.to(".loader .welcome h1",{
    y:"-120%",
    duration:1.3,
    ease:Circ.easeInOut
})
tl.to(".loader",{
    height:0,
    duration:1,
    ease:Power3.easeInOut
})
tl.to(".green",{
    height:"100%",
    top:0,
    duration:1,
    delay:-0.8,
    ease:Power3.easeInOut
})
tl.to(".green",{
    height:0,
    top:0,
    duration:1,
    delay:-0.4,
    ease:Power3.easeInOut
})
}
function homeAnimation(){
    var tl =  gsap.timeline();

    tl.to(".home-container",{
        y:0,
        opacity:1,
        duration:2,
        delay:5,
        ease:Expo.easeInOut
    })
    tl.to(".home-container .left",{
        y:0,
        opacity:1,
        duration:1.4,
        delay:0.1,
        ease:Expo.easeInOut
    })
    tl.to(".home-container .right",{
        x:0,
        opacity:1,
        duration:1.7,
        delay:-0.3,
        ease:Expo.easeInOut
    })
  
}
loadeAnimation();
homeAnimation();
   
let userData = {};
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let category = "";

var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click",function(){
    var userName = document.querySelector("#userName").value.trim();
    var userEmail = document.querySelector("#userEmail").value.trim();
    var userAddress = document.querySelector("#userAddress").value.trim();
   if(!userName || !userEmail || !userAddress){
     return alert("Please fill all the fields");
   } else{
       var tl = gsap.timeline();
         tl.to(".home-container .right",{     
         x:"100%",   
        opacity:0,
        duration:1.2,
        ease:Power3.easeInOut       
})
tl.to(".home-container .left",{
    y:"100%",  
    opacity:0,
    duration:1.2,
    delay:-0.5,
    ease:Power3.easeInOut
})
tl.to(".home-container",{
    opacity:0,
    duration:1, 
    ease:Power3.easeInOut
})
tl.to(".home",{
   height:0,
    duration:1, 
    ease:Power3.easeInOut
})
   var categoryPage = document.querySelector(".categoryPage");
   categoryPage.style.display="flex"; 
  userData = {userName,userEmail,userAddress}
  gsap.set(".category-box",{
    opacity:0,
    y:50
})
gsap.set(".categoryPage h2",{
    y:-50,
    opacity:0
})

tl.to(".categoryPage h2",{
    opacity:1,
    y:0,
    duration:1.2,
    delay:0.6,
    ease:Power3.easeInOut
})
tl.to(".categoryPage .category-box",{
    opacity:1,
    y:0,
    duration:2,
    delay:-0.2,
    stagger:0.3,
    ease:Power3.easeInOut
})


}
});

let quizes = {
    islamic:[
        {
            question:"What is the first pillar of Islam?",  
            options:["Shahada","Salat","Zakat","Sawm"],
            answer:0
        },
        {
            question:"How many times a day do Muslims pray?",  
            options:["3","4","5","6"],
            answer:2
        },
        {   
            question:"What is the holy book of Islam?",  
            options:["Bible","Quran","Torah","Vedas"],
            answer:1
        }
        ,
        {
            question: "Who is considered the last prophet in Islam?",
            options: ["Jesus", "Moses", "Muhammad", "Abraham"],
            answer: 2
        },
        {
            question: "In which city was Prophet Muhammad (PBUH) born?",
            options: ["Medina", "Mecca", "Jerusalem", "Taif"],
            answer: 1
        },
        {
            question: "What is the Arabic word for prayer in Islam?",
            options: ["Zakat", "Sawm", "Salat", "Hajj"],
            answer: 2
        },
        {
            question: "Which month do Muslims fast during daylight hours?",
            options: ["Muharram", "Ramadan", "Shawwal", "Dhul-Hijjah"],
            answer: 1
        },
        {
            question: "How many chapters (surahs) are in the Quran?",
            options: ["99", "114", "120", "66"],
            answer: 1
        },
        {
            question: "Which is the longest surah in the Quran?",
            options: ["Al-Fatiha", "Al-Baqarah", "An-Nisa", "Yasin"],
            answer: 1
        },
        {
            question: "What is the direction Muslims face during prayer?",
            options: ["North", "Qibla (towards Kaaba)", "East", "West"],
            answer: 1
        },
        {
            question: "What pilgrimage must every Muslim perform once if able?",
            options: ["Umrah", "Zakat", "Hajj", "Sawm"],
            answer: 2
        },
        {
            question: "Which of the following is not one of the Five Pillars of Islam?",
            options: ["Shahada", "Salat", "Sunnah", "Zakat"],
            answer: 2
        },
        {
            question: "What does 'Salah' refer to?",
            options: ["Charity", "Prayer", "Fasting", "Pilgrimage"],
            answer: 1
        },
        {
            question: "What is the Night of Power (Laylat al-Qadr) associated with?",
            options: ["Birth of the Prophet", "First revelation of the Quran", "Battle victory", "Eid celebration"],
            answer: 1
        },
        {
            question: "What is Zakat primarily intended for?",
            options: ["Education", "Charity for needy", "Building mosques", "Buying land"],
            answer: 1
        },
        {
            question: "Which cave did the Prophet receive the first revelation in?",
            options: ["Thawr", "Hira", "Ghar-e-Safa", "Uhud"],
            answer: 1
        },
        {
            question: "Which day is Jumu'ah (Friday prayer) observed?",
            options: ["Saturday", "Sunday", "Friday", "Monday"],
            answer: 2
        },
        {
            question: "Which two major festivals mark the Islamic calendar?",
            options: ["Eid al-Fitr and Eid al-Adha", "Ramadan and Muharram", "Laylat al-Qadr and Isra", "Hajj and Umrah"],
            answer: 0
        },
        {
            question: "Who succeeded Prophet Muhammad as the first Caliph?",
            options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Abu Bakr", "Uthman ibn Affan"],
            answer: 2
        },
        {
            question: "What is the Arabic term for fasting?",
            options: ["Hajj", "Sawm", "Zakat", "Salah"],
            answer: 1
        },
        {
            question: "Which city is the Kaaba located in?",
            options: ["Medina", "Mecca", "Jerusalem", "Cairo"],
            answer: 1
        },
        {
            question: "What is the primary source of Islamic law?",
            options: ["Hadith", "Quran", "Ijma", "Sunnah"],
            answer: 1
        },
        {
            question: "Who is known for compiling many authentic Hadiths in Sahih collections?",
            options: ["Imam Bukhari", "Ibn Sina", "Al-Khwarizmi", "Imam Malik"],
            answer: 0
        },
        {
            question: "What is the meaning of 'Islam'?",
            options: ["Peace and submission to God", "Knowledge", "Charity", "Holy book"],
            answer: 0
        },
        {
            question: "What is the fast-breaking meal at sunset called?",
            options: ["Suhoor", "Iftar", "Eid", "Witr"],
            answer: 1
        },
        {
            question: "Which angel delivered revelations to the Prophet?",
            options: ["Israfil", "Mikail", "Jibril (Gabriel)", "Azrael"],
            answer: 2
        },
        {
            question: "What language was the Quran revealed in?",
            options: ["Arabic", "Hebrew", "Greek", "Latin"],
            answer: 0
        },
        {
            question: "What does the Hijra refer to in Islamic history?",
            options: ["Battle of Badr", "Migration to Medina", "Prayer ritual", "Type of charity"],
            answer: 1
        },
        {
            question: "Followers who accept the first four caliphs are commonly called?",
            options: ["Shia", "Sunni", "Sufi", "Kharijite"],
            answer: 1
        },
        {
            question: "Approximately what percentage of wealth is commonly given as Zakat on eligible savings?",
            options: ["1%", "2.5%", "10%", "20%"],
            answer: 1
        }
    ],
    technology:[
        {
            question:"What does CPU stand for?",
            options:["Central Processing Unit","Computer Personal Unit","Central Performance Unit","Control Processing Unit"],
            answer:0
        },
        {
            question:"What is the main programming language used for web development?",
            options:["Python","JavaScript","C++","Java"],
            answer:1
        },
        {
            question:"What does HTML stand for?",
            options:["HyperText Markup Language","HyperText Machine Language","HighText Markup Language","HyperTool Markup Language"],
            answer:0
        },
        {
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Application Protocol Interface", "Advanced Programming Interface", "Application Process Interface"],
            answer: 0
        },
        {
            question: "Which company originally developed the JavaScript language?",
            options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
            answer: 0
        },
        {
            question: "What is Node.js built on?",
            options: ["V8 JavaScript engine", "SpiderMonkey", "Chakra", "Java VM"],
            answer: 0
        },
        {
            question: "Which protocol is used to securely browse the web?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            answer: 2
        },
        {
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"],
            answer: 0
        },
        {
            question: "Which HTTP status code means Not Found?",
            options: ["200", "301", "403", "404"],
            answer: 3
        },
        {
            question: "What is the primary purpose of Git?",
            options: ["Package management", "Version control", "Database", "Code formatter"],
            answer: 1
        },
        {
            question: "What does CSS primarily do?",
            options: ["Structure a webpage", "Style a webpage", "Add interactivity", "Serve files"],
            answer: 1
        },
        {
            question: "Which HTML element creates a hyperlink?",
            options: ["a","link","href","url"],
            answer: 0
        },
        {
            question: "What is JSON?",
            options: ["Java Standard Object Notation", "JavaScript Object Notation", "JavaScript Operational Notation", "Just Simple Object Notation"],
            answer: 1
        },
        {
            question: "Which sorting algorithm has average-case O(n log n)?",
            options: ["Bubble sort", "Quick sort", "Insertion sort", "Selection sort"],
            answer: 1
        },
        {
            question: "Which database is document-oriented?",
            options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
            answer: 1
        },
        {
            question: "What does RAM stand for?",
            options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Rapid Access Memory"],
            answer: 1
        },
        {
            question: "Which tool is commonly used for containerization?",
            options: ["Docker", "VirtualBox", "Vagrant", "Jenkins"],
            answer: 0
        },
        {
            question: "What is the main benefit of responsive web design?",
            options: ["Faster server response", "Works well on multiple screen sizes", "Better SEO only", "Uses less bandwidth"],
            answer: 1
        },
        {
            question: "Which language is primarily used for Android native development today?",
            options: ["Swift", "Kotlin", "C#", "Ruby"],
            answer: 1
        },
        {
            question: "Which of these is a NoSQL key-value store?",
            options: ["Redis", "Oracle", "MariaDB", "SQL Server"],
            answer: 0
        },
        {
            question: "Which command initializes a new Git repository?",
            options: ["git start", "git init", "git create", "git new"],
            answer: 1
        },
        {
            question: "Which of these is a JavaScript library/framework?",
            options: ["Laravel", "Django", "React", "Rails"],
            answer: 2
        },
        {
            question: "What does CDN stand for?",
            options: ["Content Delivery Network", "Content Distribution Node", "Central Data Network", "Content Data Net"],
            answer: 0
        },
        {
            question: "Which port is the default for HTTPS?",
            options: ["80", "21", "443", "25"],
            answer: 2
        },
        {
            question: "What does MVC stand for?",
            options: ["Model View Controller", "Module View Component", "Manage View Control", "Model Variable Controller"],
            answer: 0
        },
        {
            question: "Which HTTP method is typically used to update a resource?",
            options: ["GET", "POST", "PUT", "DELETE"],
            answer: 2
        },
        {
            question: "What is virtualization in computing?",
            options: ["Running multiple OS on a single physical machine", "Compiling code for different platforms", "Encrypting data in transit", "Scaling horizontally"],
            answer: 0
        },
        {
            question: "Which language is used for native iOS app development?",
            options: ["Objective-C/Swift", "Java", "Kotlin", "C#"],
            answer: 0
        },
        {
            question: "Which of these is a package manager for JavaScript?",
            options: ["pip", "npm", "gem", "composer"],
            answer: 1
        },
        {
            question: "What is the binary representation of decimal 10?",
            options: ["1010", "1001", "1110", "1101"],
            answer: 0
        }
        
    ],
    science: [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: 1
        },
        {
            question: "What is H2O commonly known as?",
            options: ["Hydrogen", "Oxygen", "Salt", "Water"],
            answer: 3
        },
        {
            question: "What force keeps objects on the surface of the Earth?",
            options: ["Magnetism", "Friction", "Gravity", "Electricity"],
            answer: 2
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "H2"],
            answer: 0
        },
        {
            question: "What is the center of an atom called?",
            options: ["Nucleus", "Electron", "Proton", "Neutron"],
            answer: 0
        },
        {
            question: "Which gas do plants absorb for photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: 1
        },
        {
            question: "Which organ pumps blood throughout the body?",
            options: ["Liver", "Brain", "Heart", "Lungs"],
            answer: 2
        },
        {
            question: "Approximately what is the speed of light in vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "3,000 km/s"],
            answer: 0
        },
        {
            question: "What is known as the powerhouse of the cell?",
            options: ["Mitochondria", "Ribosome", "Nucleus", "Cell membrane"],
            answer: 0
        },
        {
            question: "What is the unit of electrical resistance?",
            options: ["Ohm", "Ampere", "Volt", "Watt"],
            answer: 0
        },
        {
            question: "Which subatomic particle has a negative charge?",
            options: ["Proton", "Electron", "Neutron", "Positron"],
            answer: 1
        },
        {
            question: "What is the approximate acceleration due to gravity on Earth?",
            options: ["9.8 m/s^2", "3.7 m/s^2", "1.6 m/s^2", "0.98 m/s^2"],
            answer: 0
        },
        {
            question: "Which gas makes up most of Earth's atmosphere?",
            options: ["Nitrogen", "Oxygen", "Argon", "Carbon Dioxide"],
            answer: 0
        },
        {
            question: "What does Newton's third law state?",
            options: ["For every action there is an equal and opposite reaction", "Force equals mass times acceleration", "Objects in motion stay in motion", "Energy cannot be created or destroyed"],
            answer: 0
        },
        {
            question: "Which type of chemical bond is formed by sharing electrons?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            answer: 1
        },
        {
            question: "What is the study of fossils called?",
            options: ["Paleontology", "Geology", "Archaeology", "Anthropology"],
            answer: 0
        },
        {
            question: "Which vitamin is produced in the skin through sunlight exposure?",
            options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
            answer: 1
        },
        {
            question: "What is the process by which plants make food using sunlight?",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
            answer: 1
        },
        {
            question: "Which organelle contains most of a cell's genetic material?",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
            answer: 1
        },
        {
            question: "Which atmospheric layer contains the ozone layer that protects from UV?",
            options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
            answer: 0
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["0°C", "50°C", "100°C", "212°C"],
            answer: 2
        },
        {
            question: "What type of electricity results from the build-up of electric charge on a surface?",
            options: ["Static electricity", "Current electricity", "Nuclear electricity", "Thermal electricity"],
            answer: 0
        },
        {
            question: "Which planet is the largest in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: 2
        },
        {
            question: "Which gas is the primary contributor to the greenhouse effect?",
            options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
            answer: 0
        },
        {
            question: "Which scale is used to measure the acidity or alkalinity of a solution?",
            options: ["pH scale", "Richter scale", "Beaufort scale", "Celsius scale"],
            answer: 0
        },
        {
            question: "What is the chemical formula for common table salt?",
            options: ["NaCl", "KCl", "H2O", "CO2"],
            answer: 0
        },
        {
            question: "Which type of cell division results in two identical daughter cells?",
            options: ["Mitosis", "Meiosis", "Binary Fission", "Conjugation"],
            answer: 0
        },
        {
            question: "What does the atomic number of an element represent?",
            options: ["Number of protons", "Number of neutrons", "Number of electrons", "Atomic mass"],
            answer: 0
        },
        {
            question: "Which scientist is famous for the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            answer: 1
        },
        {
            question: "What is the SI unit of force?",
            options: ["Newton", "Joule", "Pascal", "Watt"],
            answer: 0
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
            answer: 1
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: ["Romans", "Greeks", "Egyptians", "Mayans"],
            answer: 2
        },
        {
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1939"],
            answer: 1
        },
        {
            question: "What was the primary cause of the American Civil War?",
            options: ["Economic competition", "Slavery", "Religious differences", "Territorial disputes"],
            answer: 1
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "James Madison"],
            answer: 2
        },
        {
            question: "Which empire was ruled by Genghis Khan?",
            options: ["Roman Empire", "Mongol Empire", "Ottoman Empire", "Persian Empire"],
            answer: 1
        },
        {
            question: "The Renaissance began in which country?",
            options: ["France", "England", "Italy", "Spain"],
            answer: 2
        },
        {
            question: "Who was the British Prime Minister during most of World War II?",
            options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Stanley Baldwin"],
            answer: 1
        },
        {
            question: "What year did the French Revolution begin?",
            options: ["1789", "1776", "1804", "1799"],
            answer: 0
        },
        {
            question: "Which wall divided Berlin from 1961 to 1989?",
            options: ["Hadrian's Wall", "Great Wall", "Berlin Wall", "Antonine Wall"],
            answer: 2
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic?",
            options: ["Amelia Earhart", "Bessie Coleman", "Sally Ride", "Valentina Tereshkova"],
            answer: 0
        },
        {
            question: "What ancient city was destroyed by the eruption of Mount Vesuvius in 79 AD?",
            options: ["Pompeii", "Athens", "Carthage", "Sparta"],
            answer: 0
        },
        {
            question: "Who led the Indian independence movement using nonviolent resistance?",
            options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh"],
            answer: 2
        },
        {
            question: "Which 19th-century invention revolutionized long-distance communication?",
            options: ["Telephone", "Steam engine", "Telegraph", "Radio"],
            answer: 2
        },
        {
            question: "The Cold War was primarily between which two superpowers?",
            options: ["USA and China", "USA and USSR", "USA and Germany", "USA and Japan"],
            answer: 1
        },
        {
            question: "Who was the Egyptian queen famous for her relationships with Roman leaders Julius Caesar and Mark Antony?",
            options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Tiye"],
            answer: 2
        },
        {
            question: "What treaty ended World War I?",
            options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Ghent"],
            answer: 0
        },
        {
            question: "Who discovered penicillin?",
            options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Gregor Mendel"],
            answer: 0
        },
        {
            question: "Which empire built Machu Picchu?",
            options: ["Aztec", "Inca", "Maya", "Olmec"],
            answer: 1
        },
        {
            question: "What movement sought to end racial segregation and discrimination in the U.S. during the 1950s and 1960s?",
            options: ["Labor movement", "Civil Rights movement", "Progressive movement", "Temperance movement"],
            answer: 1
        },
        {
            question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
            options: ["Queen Victoria", "King George III", "Queen Elizabeth I", "King Henry VIII"],
            answer: 0
        },
        {
            question: "Which event triggered the start of World War I?",
            options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Sinking of Lusitania", "Zimmermann Telegram"],
            answer: 0
        },
        {
            question: "Which ancient Greek city-state was known for its military society?",
            options: ["Athens", "Sparta", "Thebes", "Corinth"],
            answer: 1
        },
        {
            question: "Who was the Roman leader assassinated on the Ides of March?",
            options: ["Augustus", "Brutus", "Julius Caesar", "Cicero"],
            answer: 2
        },
        {
            question: "What was the primary purpose of the Silk Road?",
            options: ["Military conquest", "Trade network", "Religious pilgrimage", "Scientific research"],
            answer: 1
        },
        {
            question: "Which 20th-century conflict involved the Tet Offensive?",
            options: ["World War II", "Korean War", "Vietnam War", "Persian Gulf War"],
            answer: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Michelangelo", "Leonardo da Vinci", "Raphael"],
            answer: 2
        },
        {
            question: "Which empire was ruled from Constantinople?",
            options: ["Byzantine Empire", "Mongol Empire", "Ottoman Empire", "Roman Empire"],
            answer: 0
        },
        {
            question: "Which document established limits on the English monarchy in 1215?",
            options: ["Magna Carta", "English Bill of Rights", "Act of Settlement", "Common Law"],
            answer: 0
        },
        {
            question: "Which global pandemic occurred in 1918–1919?",
            options: ["HIV/AIDS pandemic", "Black Death", "Spanish Flu", "Asian Flu"],
            answer: 2
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
            answer: 1
        }
    ],
    generel: [
        {
            question: "How many players does a soccer team have on the field?",
            options: ["9", "10", "11", "12"],
            answer: 3
        },
        {
            question: "Which sport uses a shuttlecock?",
            options: ["Tennis", "Table Tennis", "Badminton", "Squash"],
            answer: 2
        },
        {
            question: "How many rings are on the Olympic flag?",
            options: ["4", "5", "6", "7"],
            answer: 1
        },
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: 2
        },
        {
            question: "Which element has atomic number 1?",
            options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            answer: 1
        },
        {
            question: "Which planet has rings?",
            options: ["Mars", "Venus", "Saturn", "Mercury"],
            answer: 2
        },
        {
            question: "What is the largest ocean?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: 3
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            answer: 1
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Yen", "Dollar", "Won"],
            answer: 1
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            answer: 2
        },
        {
            question: "Which animal is known as the king of the jungle?",
            options: ["Tiger", "Lion", "Elephant", "Gorilla"],
            answer: 1
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Gd", "Go"],
            answer: 0
        },
        {
            question: "Which instrument has keys, pedals, and strings?",
            options: ["Guitar", "Piano", "Violin", "Flute"],
            answer: 1
        },
        {
            question: "What gas do humans exhale?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: 2
        },
        {
            question: "Which country hosts the Great Barrier Reef?",
            options: ["USA", "Australia", "India", "Brazil"],
            answer: 1
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: 2
        },
        {
            question: "Which language has the most native speakers?",
            options: ["English", "Mandarin", "Spanish", "Hindi"],
            answer: 1
        },
        {
            question: "What is 100 in Roman numerals?",
            options: ["C", "L", "X", "M"],
            answer: 0
        },
        {
            question: "Which month has 28 days in common years?",
            options: ["February", "March", "April", "May"],
            answer: 0
        },
        {
            question: "How many seconds are in a minute?",
            options: ["30", "45", "60", "90"],
            answer: 2
        },
        {
            question: "Which is the tallest land animal?",
            options: ["Elephant", "Giraffe", "Rhino", "Hippo"],
            answer: 1
        },
        {
            question: "Which organ filters blood in the human body?",
            options: ["Liver", "Kidney", "Lung", "Heart"],
            answer: 1
        },
        {
            question: "What is the boiling point of water in Celsius?",
            options: ["0", "50", "100", "150"],
            answer: 2
        },
        {
            question: "Which color is formed by mixing red and white?",
            options: ["Pink", "Purple", "Orange", "Brown"],
            answer: 0
        },
        {
            question: "Which country is known for maple syrup?",
            options: ["Canada", "Mexico", "Sweden", "Japan"],
            answer: 0
        },
        {
            question: "What tool is used to measure temperature?",
            options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
            answer: 1
        },
        {
            question: "Which metal is liquid at room temperature?",
            options: ["Gold", "Iron", "Mercury", "Aluminum"],
            answer: 2
        },
        {
            question: "Which bird is known for its colorful tail display?",
            options: ["Sparrow", "Eagle", "Peacock", "Penguin"],
            answer: 2
        },
        {
            question: "Which sport uses a hoop and a ball?",
            options: ["Soccer", "Basketball", "Baseball", "Tennis"],
            answer: 1
        },
        {
            question: "What do bees collect from flowers to make honey?",
            options: ["Nectar", "Pollen", "Sap", "Leaves"],
            answer: 0
        }
    ],
    mathematics: [
        {
            question: "What is the value of Pi (π) rounded to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            answer: 1
        },
        {
            question: "What is 7 multiplied by 8?",
            options: ["54", "56", "58", "60"],
            answer: 1
        },
        {
            question: "What is the square root of 64?",
            options: ["6", "7", "8", "9"],
            answer: 2
        },
        {
            question: "What is 12 divided by 3?",
            options: ["2", "3", "4", "6"],
            answer: 2
        },
        {
            question: "What is 9 + 10?",
            options: ["18", "19", "20", "21"],
            answer: 1
        },
        {
            question: "What is 5 factorial (5!)?",
            options: ["120", "60", "24", "720"],
            answer: 0
        },
        {
            question: "What is the next prime after 7?",
            options: ["9", "10", "11", "13"],
            answer: 2
        },
        {
            question: "What is the formula for the area of a circle?",
            options: ["πr^2", "2πr", "πd", "πr"],
            answer: 0
        },
        {
            question: "What is the slope of the line through (0,0) and (2,4)?",
            options: ["1", "2", "4", "0.5"],
            answer: 1
        },
        {
            question: "What is sqrt(81)?",
            options: ["7", "8", "9", "10"],
            answer: 2
        },
        {
            question: "Solve for x: 2x + 3 = 7",
            options: ["1", "2", "3", "4"],
            answer: 1
        },
        {
            question: "What is the volume of a cube with side length 3?",
            options: ["9", "18", "27", "81"],
            answer: 2
        },
        {
            question: "What is 0 divided by 5?",
            options: ["0", "1", "Undefined", "5"],
            answer: 0
        },
        {
            question: "What is the derivative of x^2?",
            options: ["2x", "x", "x^2", "2"],
            answer: 0
        },
        {
            question: "What is the integral of 1 dx from 0 to 1?",
            options: ["0", "1", "1/2", "Undefined"],
            answer: 1
        },
        {
            question: "What is binary 1010 in decimal?",
            options: ["8", "9", "10", "12"],
            answer: 2
        },
        {
            question: "What is 2^5?",
            options: ["10", "16", "32", "64"],
            answer: 2
        },
        {
            question: "What is the mean of [2, 4, 6, 8]?",
            options: ["4", "5", "6", "7"],
            answer: 1
        },
        {
            question: "Which of these is an irrational number?",
            options: ["22/7", "3.14", "√2", "4"],
            answer: 2
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            answer: 2
        },
        {
            question: "If two angles in a triangle are 90 and 45 degrees, what is the third?",
            options: ["30", "45", "60", "90"],
            answer: 1
        },
        {
            question: "What is the circumference of a circle with radius r?",
            options: ["2πr", "πr^2", "πd", "πr"],
            answer: 0
        },
        {
            question: "What best describes a line with slope 0?",
            options: ["Horizontal line", "Vertical line", "Diagonal line", "Curved line"],
            answer: 0
        },
        {
            question: "What is the LCM of 4 and 6?",
            options: ["6", "12", "24", "8"],
            answer: 1
        },
        {
            question: "What is the GCD of 14 and 21?",
            options: ["2", "3", "7", "14"],
            answer: 2
        },
        {
            question: "What is the decimal representation of 1/4?",
            options: ["0.2", "0.25", "0.5", "0.75"],
            answer: 1
        },
        {
            question: "Which shape has four equal sides and four right angles?",
            options: ["Rectangle", "Square", "Rhombus", "Parallelogram"],
            answer: 1
        },
        {
            question: "What is the sum of the interior angles of a triangle?",
            options: ["90", "180", "270", "360"],
            answer: 1
        },
        {
            question: "Which form represents the slope-intercept equation of a line?",
            options: ["y = mx + b", "ax^2 + bx + c", "x^2 + y^2 = r^2", "y - k = a(x - h)"],
            answer: 0
        },
        {
            question: "Which describes common Fibonacci starting numbers?",
            options: ["0,1,1,2", "1,1,2,3", "2,3,5,8", "Both A and B"],
            answer: 3
        }
    ],
    development: [
        {
            question: "What does CSS stand for?",
            options: ["Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"],
            answer: 0
        },
        {
            question:"Which HTML tag is used to define an internal style sheet?",
            options:["style","css","script","link"],
            answer: 0
        },
        {   
            question:"Which property is used to change the background color in CSS?",
            options:["color","bgcolor","background-color","backgroundColor"],
            answer: 2
        },
        {
            question: "What is the purpose of package.json in a Node project?",
            options: [
                "To store project metadata and dependencies",
                "To compile code",
                "To serve files",
                "To run a database"
            ],
            answer: 0
        },
        {
            question: "Which command installs a package and adds it to dependencies?",
            options: [
                "npm install --save package",
                "npm remove package",
                "npm update package",
                "npm init"
            ],
            answer: 0
        },
        {
            question: "What does 'this' refer to in an arrow function by default?",
            options: [
                "The global object",
                "The invoking object",
                "Lexical this (surrounding scope)",
                "Undefined"
            ],
            answer: 2
        },
        {
            question: "Which method converts a JavaScript object to a JSON string?",
            options: [
                "JSON.parse()",
                "JSON.stringify()",
                "toJSON()",
                "Object.toString()"
            ],
            answer: 1
        },
        {
            question: "Which HTML attribute is used to include an external JavaScript file?",
            options: [
                "src",
                "href",
                "link",
                "rel"
            ],
            answer: 0
        },
        {
            question: "What is Cross-Origin Resource Sharing (CORS) used for?",
            options: [
                "To restrict file uploads",
                "To control access to resources between domains",
                "To encrypt data",
                "To compress responses"
            ],
            answer: 1
        },
        {
            question: "Which HTTP method is idempotent and commonly used to retrieve data?",
            options: [
                "POST",
                "GET",
                "PUT",
                "DELETE"
            ],
            answer: 1
        },
        {
            question: "Which tool is used to bundle JavaScript modules for the web?",
            options: [
                "Webpack",
                "Babel",
                "ESLint",
                "Prettier"
            ],
            answer: 0
        },
        {
            question: "What does transpiling mean?",
            options: [
                "Converting code to machine code",
                "Converting code from one language/version to another",
                "Compressing code",
                "Encrypting code"
            ],
            answer: 1
        },
        {
            question: "Which CSS unit is relative to the root font-size?",
            options: [
                "px",
                "em",
                "rem",
                "%"
            ],
            answer: 2
        },
        {
            question: "Which Git command creates a new branch and switches to it?",
            options: [
                "git branch new",
                "git checkout -b new",
                "git merge new",
                "git init new"
            ],
            answer: 1
        },
        {
            question: "What is a closure in JavaScript?",
            options: [
                "A function with no name",
                "An inner function that has access to outer scope variables",
                "A way to close streams",
                "A private class"
            ],
            answer: 1
        },
        {
            question: "Which block catches exceptions thrown in a try block?",
            options: [
                "catch",
                "throw",
                "finally",
                "error"
            ],
            answer: 0
        },
        {
            question: "What does REST stand for?",
            options: [
                "Representational State Transfer",
                "Remote State Transfer",
                "Representational Service Transfer",
                "RESTful State Transfer"
            ],
            answer: 0
        },
        {
            question: "Which HTTP status code indicates success?",
            options: [
                "200",
                "404",
                "500",
                "301"
            ],
            answer: 0
        },
        {
            question: "Which operator is used for strict equality in JavaScript?",
            options: [
                "=",
                "==",
                "===",
                "!=="
            ],
            answer: 2
        },
        {
            question: "Which array method returns a new array with the results of calling a function on every element?",
            options: [
                "forEach",
                "map",
                "filter",
                "reduce"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of 'use strict' in JavaScript?",
            options: [
                "Enable experimental features",
                "Opt into a restricted variant of JS",
                "Minify code",
                "Transpile code"
            ],
            answer: 1
        },
        {
            question: "Which CSS property controls the box model's outer spacing?",
            options: [
                "padding",
                "margin",
                "border",
                "gap"
            ],
            answer: 1
        },
        {
            question: "Which data structure uses key-value pairs?",
            options: [
                "Array",
                "Set",
                "Map/Object",
                "Queue"
            ],
            answer: 2
        },
        {
            question: "What is the event loop responsible for?",
            options: [
                "Scheduling tasks and handling asynchronous callbacks",
                "Rendering CSS",
                "Parsing HTML",
                "Managing memory"
            ],
            answer: 0
        },
        {
            question: "Which promise method is used to handle a fulfilled result?",
            options: [
                "catch()",
                "finally()",
                "then()",
                "all()"
            ],
            answer: 2
        },
        {
            question: "Which tool checks JavaScript code for errors and style problems?",
            options: [
                "Babel",
                "Webpack",
                "ESLint",
                "TypeScript"
            ],
            answer: 2
        },
        {
            question: "Which of the following is a CSS preprocessor?",
            options: [
                "Sass",
                "React",
                "Node",
                "Parcel"
            ],
            answer: 0
        },
        {
            question: "Which TypeScript feature adds static typing to JavaScript?",
            options: [
                "Interfaces and types",
                "Promises",
                "Async/await",
                "Hoisting"
            ],
            answer: 0
        },
        {
            question: "What is tree shaking in build tools?",
            options: [
                "Removing dead code",
                "Compressing images",
                "Optimizing CSS",
                "Transpiling to ES5"
            ],
            answer: 0
        },
        {
            question: "Which keyword is used to import modules in ES6?",
            options: [
                "require",
                "include",
                "import",
                "export"
            ],
            answer: 2
        }
    ]
};  

  function startQuiz(selectedCategory){
    category = selectedCategory;
    currentQuiz = quizes[category];
    var categoryPage = document.querySelector(".categoryPage");
    categoryPage.style.display="none"; 
    var quizPage = document.querySelector(".quizPage");
    quizPage.style.display="flex"; 
    loadQuiz();
} 

function loadQuiz(){
    let q = currentQuiz[currentIndex];
    document.getElementById("questionEl").innerHTML = q.question;
    var optionEl = document.getElementById("optionEl");
    optionEl.innerHTML = "";
    q.options.forEach((elem,ind)=>{
        let div = document.createElement("div");
        div.classList.add("option");
        div.innerHTML = elem;
        optionEl.appendChild(div);
         div.addEventListener("click",()=>{
        checkAnswer(ind);
       });
   })
}
function checkAnswer(ans){
    let correctAnswer = currentQuiz[currentIndex].answer;
    let allOptions = document.querySelectorAll(".option");
    allOptions.forEach((elem,ind)=>{

         elem.style.pointerEvents = "none";
              if(ind === correctAnswer){
            elem.style.background= "#60db09ff";
            elem.style.color="#fff";
            document.getElementById("nextBtn").style.display = "inline-block"
           }else if(ind === ans){
              elem.style.background= "#f91202ff";
               elem.style.color="#fff";
               document.getElementById("nextBtn").style.display = "inline-block"
           }
         })
         if(ans === correctAnswer){   
        score++;
       }
}
document.getElementById("nextBtn").addEventListener("click",()=>{
     currentIndex++;
        if(currentIndex<currentQuiz.length){   
        loadQuiz();
     }
        else{
        showResult();
     }
     document.querySelector("#nextBtn").style.display = "none"
 });
function showResult(){
    var quizPage = document.querySelector(".quizPage");
    quizPage.style.display="none"; 
    var resultPage = document.querySelector(".result");
    resultPage.style.display="flex"; 
   document.querySelector(".name").innerHTML = userData.userName;
   document.querySelector(".green-text").innerHTML = userData.userAddress;
    document.getElementById("score").innerHTML = score + " out of " + currentQuiz.length;
   document.getElementById("restartBtn").style.display = "inline-block";
   document.getElementById("downloadtBtn").style.display = "inline-block";
}
document.getElementById("restartBtn").addEventListener("click",()=>{
    currentIndex = 0;
    score = 0;
    var resultPage = document.querySelector(".result");
    resultPage.style.display="none"; 
    var categoryPage = document.querySelector(".categoryPage");                                             
    categoryPage.style.display="flex";
    var quizPage = document.querySelector(".quizPage");
    quizPage.style.display="none";

});

let today = new Date();
let day = String(today.getDate()).padStart(2,'0');
let month  = String(today.getMonth()).padStart(2,'0');
let year =  today.getFullYear();

var date = document.getElementById("date");
date.innerHTML = `${day}/${month}/${year}`;

var downloadtBtn = document.getElementById("downloadBtn");

downloadtBtn.addEventListener("click",function(){
    let certificate = document.querySelector(".certificate");
    html2canvas(certificate,{
        backgroundColor:'#fff',
        useCORS:true,
        scale:2,
        logging:true
    }).then(canvas =>{
        let link = document.createElement("a");
        link.download = 'Certificate.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});


