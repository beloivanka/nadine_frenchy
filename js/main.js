let photo = document.querySelectorAll(".avis-photo");
let nom = document.querySelectorAll(".avis-nom");
let test = document.querySelectorAll(".test");
let text = document.querySelectorAll(".avis-text");
let arrowForward = document.querySelectorAll(".arrow-forward");
let arrowBack = document.querySelectorAll(".arrow-back");
let compteur = 0;
let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");

let imgCard = document.getElementById("card-mobile");
let title = document.getElementById("card-title");
let iconText1 = document.getElementById("icon-text1");
let iconText2 = document.getElementById("icon-text2");
let iconText3 = document.getElementById("icon-text3");
let textCard = document.getElementById("text-card");
let arrowForwardCard = document.getElementById("arrow-forward-card");
let arrowBackCard = document.getElementById("arrow-back-card");

let rond1 = document.getElementById("rond1");
let rond2 = document.getElementById("rond2");
let rond3 = document.getElementById("rond3");
let rond4 = document.getElementById("rond4");


// Avis Slider

let avisEleve = [
    {
      nom:   "Татьяна О.",
      photo:   "img/avis-photo1.png",
      text:   "Я начала заниматься с Надей уже имея сертификат DELF B2, но все же с довольно сырыми знаниями. Когда я стала готовиться к переезду во Францию, мы перешли от обсуждения французских пироженок к составлению резюме и подготовке к собеседованию. Благодаря урокам с Надей я перешла от страха во время заказа булочки к работе во французской компании. Без сомнений, за эти полтора года занятий, Надя как преподаватель не только помогла мне повысить уровень владения французским языком, но и найти свое место в новой стране, во Франции.",
      circle: circle1
    },

    {
      nom:    "Рена Ш.",
      photo:  "img/avis-photo2.png",
      text:   "Очень благодарна своему преподавателю Надежде, благодаря которой я влюбилась во французский. На уроках мне очень нравится современный подход и тщательно подготовленные занятия. Я даже не замечаю, как летит время! Недавно мы с родителями путешествовали по Франции и Монако. Так вот, я спокойно могу заказать еду, сделать резерв на ресторан, попросить убрать мою комнату, попросить дополнительные полотенца, вызвать такси, узнать время и многое другое. Просто до этой поездки немного не видела практического применения, а сейчас ещё поняла, что все не зря!",
      circle: circle2
    },

    {
      nom:    "Дарья Ш.",
      photo:  "img/avis-photo3.png",
      text:   "Всем привет! Меня зовут Даша. Я - культуролог, поэтому мне без знания французского, как и без знания его искусства, - никуда. Поменяла 4 репетиторов, пока счастливый случай не свёл меня с Надей. Не могу не сказать о Надежде и ее профессионализме. Каждое занятие - это качественно подготовленный материал + интересные познавательные дискуссии, не без щепотки тонкого французского юмора. Жду всегда наши занятия с большим удовольствием. И планирую сдать в будущем экзамен по французскому языку. Спасибо, Надя, и только вперёд!",
      circle: circle3
    },

    {
      nom:   "Виктория Н.",
      photo: "img/avis-photo4.png",
      text:  "Я переехала во Францию 2 года назад, когда поступила в Парижский университет на магистратуру. Жизнь здесь - это квест, в котором без знания языка ты автоматически проиграл. Для меня главным стимулом к изучению французского стало желание влиться в среду, чувствовать себя комфортно и иметь возможность продолжить обучение в докторантуре на французском или устроиться на работу. Чтобы достичь нужного уровня мне понадобился год занятий с Надей, и это стало лучшим вложением на пути к адаптации во Франции.",
      circle: circle4
    }
];

nom.forEach(element => {
  element.innerHTML = avisEleve[compteur].nom;
});

photo.forEach(element => {
  element.src = avisEleve[compteur].photo;
});

text.forEach(element => {
  element.innerHTML = avisEleve[compteur].text;
});

avisEleve[compteur].circle.classList.toggle("filled");

arrowForward.forEach(element => {
  element.addEventListener('click', avisSuivant);
});


function avisSuivant(){
    compteur = compteur + 1;
    if (compteur > avisEleve.length -1){
      compteur = 0;
      // avisEleve[compteur].circle.classList.toggle("empty");
      avisEleve[compteur].circle.classList.toggle("filled");

      // avisEleve[avisEleve.length -1].circle.classList.toggle("empty");
      avisEleve[avisEleve.length -1].circle.classList.toggle("filled");
    }
    nom.forEach(element => {
      element.innerHTML = avisEleve[compteur].nom;
    });
    
    photo.forEach(element => {
      element.src = avisEleve[compteur].photo;
    });
    
    text.forEach(element => {
      element.innerHTML = avisEleve[compteur].text;
    });

    avisEleve[compteur - 1].circle.classList.toggle("filled");
    avisEleve[compteur -1].circle.classList.toggle("empty");
    avisEleve[compteur].circle.classList.toggle("empty");
    avisEleve[compteur].circle.classList.toggle("filled");
}

arrowBack.forEach(element => {
  element.addEventListener('click', avisPrecedent);
});

  function avisPrecedent(){
    compteur = compteur - 1;
    if (compteur < 0){
      compteur = avisEleve.length - 1;

      // avisEleve[0].circle.classList.toggle("empty");
      avisEleve[0].circle.classList.toggle("filled");

      avisEleve[avisEleve.length - 1].circle.classList.toggle("filled");
    }
    nom.forEach(element => {
      element.innerHTML = avisEleve[compteur].nom;
    });
    
    photo.forEach(element => {
      element.src = avisEleve[compteur].photo;
    });
    
    text.forEach(element => {
      element.innerHTML = avisEleve[compteur].text;
    });

    avisEleve[compteur + 1].circle.classList.toggle("filled");
    avisEleve[compteur + 1].circle.classList.toggle("empty");
    avisEleve[compteur].circle.classList.toggle("empty");
    avisEleve[compteur].circle.classList.toggle("filled");
  }

// Mobile cards slider

let cards = [
  {
    img: "img/card1.png", 
    title: "Групповые занятия", 
    iconText1: "A1 - В2", 
    iconText2: "80 мин", 
    iconText3: "3 - 6 max",
    text: "Cамый эффективный способ учить французский в маленькой душевной компании...", 
    rond: rond1
  },
  {
    img: "img/card2.png", 
    title: "Индивидуальные занятия", 
    iconText1: "A1 - C2", 
    iconText2: "60 мин", 
    iconText3: "индив",
    text: "Выбирайте удобное для Вас время и темп занятий! Полностью индивидуализированная программа...", 
    rond: rond2
  },
  {
    img: "img/card3.png",
    title: "Подготовка к DELF/DALF",
    iconText1: "A1 - C2",
    iconText2: "60 мин",
    iconText3: "индив",
    text: "Этот курс позволит Вам подготовиться к экзамену в кратчайшие сроки и получить заветный диплом...",
    rond: rond3
  },
  {
    img: "img/card4.png",
    title: "Деловой французский",
    iconText1: "B1 - B2",
    iconText2: "60 мин",
    iconText3: "3 - 6 max",
    text: "Хотите развить профессиональные навыки общения, узнать всё о ведении деловой переписки...",
    rond: rond4
  }

]

imgCard.src = cards[compteur].img;
title.innerHTML = cards[compteur].title;
iconText1.innerHTML = cards[compteur].iconText1;
iconText2.innerHTML = cards[compteur].iconText2;
iconText3.innerHTML = cards[compteur].iconText3;
textCard.innerHTML = cards[compteur].text;
cards[compteur].rond.classList.toggle("filled");

arrowForwardCard.addEventListener('click', cardSuivante);
arrowBackCard.addEventListener('click', cardPrecedente);

function cardSuivante (){
  compteur = compteur + 1;
  cards[compteur - 1].rond.classList.toggle("filled");
  if (compteur > cards.length - 1){
    compteur = 0;
  }
  cards[compteur].rond.classList.toggle("filled");
  
  imgCard.src = cards[compteur].img;
  title.innerHTML = cards[compteur].title;
  iconText1.innerHTML = cards[compteur].iconText1;
  iconText2.innerHTML = cards[compteur].iconText2;
  iconText3.innerHTML = cards[compteur].iconText3;
  textCard.innerHTML = cards[compteur].text;

}

function cardPrecedente (){
compteur = compteur - 1;
cards[compteur + 1].rond.classList.toggle("filled");
if (compteur < 0){
  compteur = cards.length - 1;
}
cards[compteur].rond.classList.toggle("filled");

imgCard.src = cards[compteur].img;
title.innerHTML = cards[compteur].title;
iconText1.innerHTML = cards[compteur].iconText1;
iconText2.innerHTML = cards[compteur].iconText2;
iconText3.innerHTML = cards[compteur].iconText3;
textCard.innerHTML = cards[compteur].text;

}


    