const quiz = [
    {
        question : '名前が人物に由来しているのは次のうちどれ？',
        answers : [
            'そら豆',
            'えんどう豆',
            'いんげん豆',
            'ひよこ豆',
        ],
        correct : 'いんげん豆'
    },
    {
        question : 'ジンベイザメは英語で何シャーク？',
        answers : [
            'エレファント',
            'ホエール',
            'ダイナソー',
            'メガ',
        ],
        correct : 'ホエール'
    },
    {
        question : 'デビュー作の発表が最も早いのは？',
        answers : [
            '東野圭吾',
            '宮部みゆき',
            '池井戸 潤',
            '村上春樹',
        ],
        correct : '村上春樹'
    },
    {
        question : '心臓が無い生き物は？',
        answers : [
            'カニ',
            'ナマコ',
            'タコ',
            'ホタテ',
        ],
        correct : 'ナマコ'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');
    }

    quizIndex++;

    if (quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！！' + quizLength + '問中'  + score + '問正解');
    }
};

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    while (buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};

setupQuiz();


const setupHandler = () => {
    let handlerIndex = 0;
    while (handlerIndex < buttonLength ) {
        $button[handlerIndex].addEventListener('click', (e)=>{
            clickHandler(e);
        });
        handlerIndex++;
    };
};

setupHandler();


