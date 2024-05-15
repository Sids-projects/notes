import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  topicList: any = [
    {
      key: 'js-Intro',
      h3: 'Intro',
      small: 'About Js',
    },
    {
      key: 'js-Variables',
      h3: 'Variables',
      small: 'Var, Let, and Const',
    },
    {
      key: 'js-Operators',
      h3: 'Operators',
      small: 'Mathematical, Assignment, & Etc.',
    },
    {
      key: 'js-TemplateLiterals',
      h3: 'Template Literals',
      small: 'Strings & Template Literals',
    },
    {
      key: 'js-Conversion',
      h3: 'Conversion & Coercion',
      small: 'Convert one type to another',
    },
  ];

  jsIntro: any = {
    titles: ['Intro', 'Releases'],
    data01: {
      ul: [
        {
          li1: 'JavaScript is a versatile programming language primarily used for <span class="blue-txt">client-side</span> scripting in web development.',
          li2: 'Javascript client-side scripting web development kaga use panuvanga',
        },
        {
          li1: 'It enables developers to add interactivity, dynamic content, and event-driven behavior to web pages.',
          li2: 'Developers use panradhukum dynamic ah content ah change panradhuku aprm events lam oru web page la set panikalam',
        },
        {
          li1: ' With JavaScript, you can respond to user actions, modify page content in real-time, and create engaging user experiences without reloading the entire page.',
          li2: 'Full page ah reload panama users webpage oda real-time interact pana js help pannum',
        },
        {
          li1: 'It is also used for server-side proramming, mobile app development, and game development.',
          li2: 'Server-side rendering ku use aagum mobile app development game development ku lam use aagum',
        },
      ],
    },
    data02: {
      ul: [
        {
          li: 'ES5',
          small: 'ECMAScript',
          icon: 'fa-solid fa-right-long',
        },
        {
          li: 'ES6/',
          small: 'ES2015',
          icon: 'fa-solid fa-right-long',
        },
        {
          li: 'ES7/',
          small: 'ES2016',
          icon: 'fa-solid fa-right-long',
        },
        {
          li: 'ES8/',
          small: 'ES2017',
          icon: 'fa-solid fa-right-long',
        },
        {
          li: 'ES9/',
          small: 'ES2018',
          icon: 'fa-solid fa-right-long',
        },
        {
          li: 'ES10/',
          small: 'ES2019',
          icon: 'fa-solid fa-right-long',
        },
        {
          li: 'ES11/',
          small: 'ES2020',
        },
      ],
    },
  };

  jsVariables: any = {
    titles: ['Variable', 'Declaration'],
    data01: {
      p: {
        p1: 'We can store a value into a variables and this way we can reuse them over and over again.',
        p2: 'Oru value va variable la store panitu adha namba marupidum marupidium reuse panikalam',
      },
      h3: 'Rules to name a variable',
      ul: [
        {
          li1: 'Use camelCase.',
          li2: 'Use camelCase.',
        },
        {
          li1: 'camelCase means whenever there is multiple words in a variable name, Write the first word with a lowercase and then all the next words with upper case.',
          li2: 'camelCase na endha variable la multiple words varudho adhu starting letter small la start aaganum next vara word starting letter capital la irukanum',
        },
        {
          li1: 'Variable names only contain Letters, Underscore, or the Dollar assign',
          li2: 'Variable names lam verum letters, Underscore aprm dollar symbol la start aagalam',
        },
        {
          li1: 'Cannot use variable name starts with a number.',
          li2: 'Variable name number la start aaga kudadhu',
        },
        {
          li1: 'Cannot use JavaScript reserved keyword.',
          li2: 'Js oda keywords use pana kudadhu',
        },
      ],
    },
    data02: {
      h3: '3 Different ways of declaring variables in JavaScript',
      ul01: {
        ulTitle01: 'Let',
        ul01: [
          {
            li1: "When you need to mutate (reassign) a variable, that's the perfect use case for using let.",
            li2: 'Namba oru variable ah reasign panom na let use panikala,',
          },
          {
            li1: 'We can declare a empty variable and then reassign  that variable.',
            li2: 'Initial ah oru empty variable declare panitu namba adha reassign panikalam',
          },
        ],
      },
      ul02: {
        ulTitle02: 'Const',
        ul02: [
          {
            li1: 'We use the const keyword to declare variable that are not suppose to change.',
            li2: 'Const keywrod use pana nambalala andha variable change pana mudiyadhu',
          },
          {
            li1: 'Const cannot accept empty variable, const need a initial value',
            li2: 'Const variable empty ah iruka kudadhu, const ku initial value kandipa irukanum',
          },
        ],
      },
      ul03: {
        ulTitle03: 'Var',
        ul03: [
          {
            li1: 'var keyword is the old way of defining variables prior to ES6. It works same as let.',
            li2: 'Var keyword let mathriye dha work aagum ES6 mudinadi use panadhu old method',
          },
        ],
      },
    },
  };

  jsOperators: any = {
    titles: ['Typeof', 'Assignment', 'Comparison'],
    data01: {
      h3: 'typeof',
      ul: [
        {
          li1: 'We can use to show the type of a value.',
          li2: 'Ena type of value nu show panum',
        },
      ],
    },
    data02: {
      h3: 'Assignment',
    },
    data03: {
      h3: 'Comparison',
    },
  };

  jsTliterals: any = {
    titles: ['Template Literals ES6'],
    data01: {
      ul: [
        {
          li1: 'A template literal can assemble multiple pieces into one final string.',
          li2: 'Nariya piece ah seathu oru string create panum',
        },
      ],
    },
  };

  jsConversion: any = {
    titles: ['Type Conversion', 'Type Coercion'],
    data01: {
      ul: [
        {
          li1: 'Type Conversion is when we manually convert from one type to another.',
          li2: 'Nambalave oru type la irundhu inoru type ku value va convert panuvom',
        },
      ],
    },
    data02: {
      ul: [
        {
          li1: 'In type coercion the js automatically convert type behind the scene for us.',
          li2: 'Javascript automatic type convert panikum',
        },
        {
          li1: 'Whenever there is a operator between a string and the number will be converted to a string.',
          li2: 'String nadula oru number irundha andha number string ah convert aagidum',
        },
        {
          li1: "If js don't have type coercion we need to use the string function in between them.",
          li2: 'String nadula oru number irundha andha number string ah convert aagidum',
        },
        {
          li1: 'Not all operators have type coercion',
          li2: 'Ella operator um type coercion panadhu',
        },
      ],
    },
  };
}
