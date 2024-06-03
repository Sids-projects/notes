import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  appHeader: any = {
    headOne: [
      {
        Key: 'javascript',
        routeLink: 'jsHelloComponent',
        toolTip: 'Javascript',
        icon: 'fa-brands fa-js',
      },
      {
        Key: 'css',
        routeLink: 'cssHelloComponent',
        toolTip: 'Css',
        icon: 'fa-brands fa-css3-alt',
      },
      {
        Key: 'javascript',
        routeLink: 'jsHelloComponent',
        toolTip: 'Javascript',
        icon: 'fa-brands fa-sass',
      },
      {
        Key: 'javascript',
        routeLink: 'jsHelloComponent',
        toolTip: 'Javascript',
        icon: 'fa-brands fa-angular',
      },
    ],
  };

  topicList: any = {
    jsTopics: {
      set01: [
        {
          route: 'jsIntroComponent',
          icon: 'fa-solid fa-note-sticky',
          h3: 'Intro',
        },
      ],
      set02: [
        {
          route: 'jsStrictComponent',
          icon: 'fa-solid fa-hand-fist',
          h3: 'Strict Mode',
        },
        {
          route: 'jsVariablesComponent',
          icon: 'fa-solid fa-database',
          h3: 'Variables',
        },
        {
          route: 'jsOperatorsComponent',
          icon: 'fa-solid fa-equals',
          h3: 'Operators',
        },
      ],
      set03: [
        {
          route: 'jsTliteralsComponent',
          icon: 'fa-solid fa-link',
          h3: 'Template <br />Literals',
        },
        {
          route: 'jsConversionComponent',
          icon: 'fa-solid fa-shuffle',
          h3: 'Conversion <br />& Coercion',
        },
        {
          route: 'jsTruefalseComponent',
          icon: 'fa-solid fa-code-fork',
          h3: 'Truthy Falsy',
        },
        {
          route: 'jsBooleanComponent',
          icon: 'fa-solid fa-network-wired',
          h3: 'Boolean Logic',
        },
      ],
      set04: [
        {
          route: 'jsEqualityComponent',
          icon: 'fa-solid fa-scale-balanced',
          h3: 'Equality <br />Operators',
        },
        {
          route: 'jsStateexprComponent',
          icon: 'fa-solid fa-file-signature',
          h3: 'Statement <br />Expression',
        },
        {
          route: 'jsIfelseComponent',
          icon: 'fa-solid fa-spell-check',
          h3: 'If else',
        },
        {
          route: 'jsSwitchComponent',
          icon: 'fa-solid fa-list-check',
          h3: 'Switch Case',
        },
      ],
      set05: [
        {
          route: 'jsPromptComponent',
          icon: 'fa-regular fa-window-maximize',
          h3: 'Prompt',
        },
        {
          route: 'jsFunctionComponent',
          icon: 'fa-solid fa-box',
          h3: 'Functions',
        },
        {
          route: 'jsArrayComponent',
          icon: 'fa-regular fa-object-group',
          h3: 'Array',
        },
      ],
    },
  };

  jsIntro: any = {
    titles: [
      { title: 'Intro', percent: '50%' },
      { title: 'Releases', percent: '100%' },
    ],
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

  jsStrictMode: any = {
    titles: [{ title: 'Strict Mode', percent: '100%' }],
    data01: {
      ul: [
        {
          li1: 'Strict is a special mode that we activate in the JavaScript which make it easier to write a secure code.',
          li2: 'Strict mode use pana nambe secure code panalam.',
        },
        {
          li1: 'This line must be the first line of the JavaScript Code.',
          li2: 'Indha line dha js la 1st line ah irukanum',
        },
        {
          li1: 'It creates visible errors in the developer console.',
          li2: 'Developer console la error la kamikum',
        },
      ],
    },
  };

  jsVariables: any = {
    titles: [
      { title: 'Variable', percent: '50%' },
      { title: 'Declaration', percent: '100%' },
    ],
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
    titles: [
      { title: 'Typeof', percent: '30%' },
      { title: 'Assignment', percent: '60%' },
      { title: 'Comparison', percent: '100%' },
    ],
    data01: {
      ul: [
        {
          li1: 'We can use to show the type of a value.',
          li2: 'Ena type of value nu show panum',
        },
      ],
    },
  };

  jsTliterals: any = {
    titles: [{ title: 'Template Literals ES6', percent: '100%' }],
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
    titles: [
      { title: 'Type Conversion', percent: '50%' },
      { title: 'Type Coercion', percent: '100%' },
    ],

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
          li2: 'Type coercion js la illana nmaba dha manual ah type convert panra mathri irukum',
        },
        {
          li1: 'Not all operators have type coercion',
          li2: 'Ella operator um type coercion panadhu',
        },
      ],
    },
  };

  jsTruthyFalsy: any = {
    titles: [
      { title: 'Truthy', percent: '50%' },
      { title: 'Falsy', percent: '100%' },
    ],
    data01: {
      ul: [
        {
          li1: 'Any string that is not an empty string is a truthy value.',
          li2: 'Empty ah illadha string lam truthy value',
        },
      ],
    },
    data02: {
      ul: [
        {
          li1: 'Falsy value are value that are not exactly false, but will become false when we try to convert them into a boolean.',
          li2: 'Falsy value default ah ve false la irukadhu namba adha adha boolean ah convert panumbodhu aagum',
        },
        {
          li1: 'falsy values: 0, "", undefined, null, nan',
          li2: 'falsy values: 0, "", undefined, null, nan',
        },
      ],
    },
  };

  jsIfelse: any = {
    titles: [
      { title: 'If Else', percent: '50%' },
      { title: 'Else If', percent: '100%' },
    ],
    data01: {
      h3: 'Rules to name a variable',
      ul: [
        {
          li1: 'if/else statement also known as control section.',
          li2: 'if/else statement ah control structure num soluvanga',
        },
        {
          li1: 'Because this structure allows us to have more control over the way that our code is executed.',
          li2: 'Ean apdi soluvanga if/else la namaku ethana controls venumo veachikalam namba conditions ku eatha mathri',
        },
        {
          li1: 'We can control block of the code that can execute and block of the code the cannot execute.',
          li2: 'Namaku endha block of code run aaganum aaga kudadhu nu namba set panikalam',
        },
        {
          li1: 'The condition declared inside of the if/else block will not be accessible outside of the block.',
          li2: 'If/else ulla declare pana block ah veliya access pana mudiyadhu',
        },
      ],
    },
    data02: {
      h3: 'Rules to name a variable',
      ul: [
        {
          li1: 'If the if part is false then js move to else if part.',
          li2: 'If part false ah irundhuchina else if run aagum',
        },
      ],
    },
  };

  jsSwitch: any = {
    titles: [{ title: 'Switch Case', percent: '100%' }],
    data01: {
      h3: 'Rules to name a variable',
      ul: [
        {
          li1: 'The switch expression is evaluated once.',
          li2: 'Oru time dha check panum',
        },
        {
          li1: 'The value of the expression is compared with the values of each case.',
          li2: 'kudutha value oru oru case la um check panum',
        },
        {
          li1: 'If there is a match, the associated block of code is executed.',
          li2: 'Edhachi oru case la value match aachina adha block of code run aagum',
        },
        {
          li1: 'If there is no match, the default code block is executed.',
          li2: 'Edha match um illana default code block run aagum',
        },
      ],
    },
  };

  jsEquality: any = {
    titles: [
      { title: 'Loose Equality Opeartor', percent: '50%' },
      { title: 'Strict Equality Opeartor', percent: '100%' },
    ],
    data01: {
      ul: [
        {
          li1: 'Loose Equality Operator does type coercion',
          li2: 'Loose Equality Operator type coercion panum',
        },
      ],
    },
  };

  jsPrompt: any = {
    titles: [{ title: 'Prompt', percent: '100%' }],
    data01: {
      ul: [
        {
          li1: 'We can get the input from prompt input bar',
          li2: 'Prompt la iruka input bar la namba user data vangikalam',
        },
      ],
    },
  };

  jsBoolean: any = {
    titles: [
      { title: 'And', percent: '30%' },
      { title: 'Or', percent: '50%' },
      { title: 'Not', percent: '100%' },
    ],
    data01: {
      ul: [
        {
          li1: 'If one of the value is false then all of them will false.',
          li2: 'Oru value false ah irundha aprm ella value um false aagidum',
        },
      ],
    },
    data02: {
      ul: [
        {
          li1: 'If one of the value is true then all value is true.',
          li2: 'Oru value true ah irundha ella value um true ah irukum',
        },
      ],
    },
    data03: {
      ul: [
        {
          li1: 'It invert all value',
          li2: 'value va opposite ah mathidum',
        },
      ],
    },
  };

  jsStateExpres: any = {
    titles: [{ title: 'Statement and Expression', percent: '100%' }],
    data01: {
      h301: 'Statement',
      ul01: [
        {
          li1: 'A Declaration is like a complete sentence',
          li2: 'Declaration radhu oru sentence mathri',
        },
      ],
      h302: 'Expression',
      ul02: [
        {
          li1: 'A Expression are words in that build up the whole sentences',
          li2: 'Expression radhu oru sentence la iruka word mathri',
        },
        {
          li1: 'Expression is a peace of code that produces a value.',
          li2: 'Expression radhu oru peace of code mathri oru value va kudukum',
        },
      ],
    },
  };

  jsFunctions: any = {
    titles: [
      { title: 'Functions', percent: '20%' },
      { title: 'Expression & Declaration', percent: '40%' },
      { title: 'Arrow Function', percent: '60%' },
      { title: 'Functions calling other function', percent: '100%' },
    ],
    data01: {
      ul: [
        {
          li1: 'Function is a piece of code that we can reuse over and over again',
          li2: 'Functions radhu oru piece of code namba adhu ethana time venalum reuse panikalam',
        },
        {
          li1: 'A variable holds value but a function can hold one or more complete lines of code.',
          li2: 'Variable la oru value store panalam ana oru function la namba oru line ah ye store panikalam',
        },
        {
          li1: 'We can also pass data into a function and additionally, a function can also return data as well.',
          li2: 'Namba oru function ulla data va pass panikalam adhu andha data va return um panum',
        },
        {
          li1: 'Parameters are like variables that are specific only to this function and they will get defined when we call that function.',
          li2: 'Parameters lam andha function oda variables function ah call panumbodhu define aagum',
        },
      ],
    },
    data02: {
      h301: 'Expression & Declaration',
      ul01: [
        {
          li1: 'A Function without name is called as synonyms function so this code is basically an expression.',
          li2: 'Name illadha function ah synonyms function nu soluvanga andha function code oru expression ah irukum',
        },
      ],
      h302: 'Function Declaration',
      ul02: [
        {
          li1: 'A normal function',
          li2: 'Sadha function',
        },
      ],
    },
    data03: {
      ul: [
        {
          li1: 'An Arrow Function is simply a special form of function expression that is shorter and therefore faster to write.',
          li2: 'Arrow function simple aana oru function expression. short ah irukum',
        },
      ],
    },
  };

  jsArray: any = {
    titles: [
      { title: 'Array', percent: '10%' },
      { title: 'Property', percent: '30%' },
      { title: 'Usage', percent: '50%' },
      { title: 'Operators', percent: '80%' },
      { title: 'Tips', percent: '100%' },
    ],
    data01: {
      ul: [
        {
          li1: 'An Array is like a big container into which we can throw variables and then later reference them.',
          li2: 'Array vandhu oru periya container mathri adhukulla namba variables lam potutu aprm refer panikalam',
        },
        {
          li1: 'Array are 0 based',
          li2: 'Array ellam 0 based',
        },
        {
          li1: 'Array is not a primitive value so we can change the element inside an array even if we using const Keyword.',
          li2: 'Array oru primitive value adhunala array ulla iruka variable la const keyword use panirundhalum namba adha change panikalam',
        },
        {
          li1: 'We should not write a statement inside an array.',
          li2: 'Array ulla oru statement use pana mudiyadhu',
        },
      ],
    },
  };
}
