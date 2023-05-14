'use strict';

function TestIdentical() {
  this.exec = (token, array) => (array.includes(token))
}

function isLetter(token, index = 0) {
  return token[index] >= 'A' && token[index] <= 'Z'
}

function TestContainsFirst() {
  this.exec = (token, array) => {
    for (var a of array) {
      if (token.length >= 1) {
        if (isLetter(token) && !isLetter(token, 1)) {
          if (token[0] === a) return true
        }
      }
    }
    return false;
  }
}

function Highlighter() {
  this.init = () => {
    this.keyword = [{
      name: 'keyword',
      keys: [
        'BSHAPE', 'ESHAPE', 'WHILE', 'IF', 'GOTO', 'THEN', 'END', 'DO', 'ELSE', 'POCKET', 'TOOL', 'SLOT', 'CYCLE', 'PATTERN', 'SURFACE', 'SHOULDER', 'SET', 'SETTOOL', 'DELTOOL', 'THREADING', 'DRILLING', 'BORING', 'MIRROR', 'SHIFT', 'ZOOM', 'ROTATE', 'CUSTOM'
      ],
      test: new TestIdentical(),
      color: '#C677DD'
    }, {
      name: 'function',
      keys: [
        'COS', 'SIN', 'TAN', 'SQRT', 'ABS', 'ROUND', 'FIX', 'FUP', 'LN', 'EXP', 'POW', 'ASIN', 'ACOS', 'ATAN'
      ],
      test: new TestIdentical(),
      color: 'dodgerBlue'
    }, {
      name: 'operators',
      keys: [
        'EQ', 'GE', 'GT', 'LT', 'LE', 'NE', 'AND', 'XOR', 'OR', '=', '-', '+', 'MOD', '*', '/', '==', '>', '<', '>=', '<=', '!='
      ],
      test: new TestIdentical(),
      color: 'orange'
    }, {
      name: 'operators',
      keys: [
        '#'
      ],
      test: new TestIdentical(),
      color: '#66E0FF'
    }, {
      name: 'coordinates',
      keys: [
        'X', 'Y'
      ],
      test: new TestContainsFirst(),
      color: '#6666FF'
    }, {
      name: 'some',
      keys: [
        'A', 'P', 'B', 'C', 'V', 'W', 'U', 'L'
      ],
      test: new TestContainsFirst(),
      color: '#CA9663'
    }, {
      name: 'modal',
      keys: [
        'G'
      ],
      test: new TestContainsFirst(),
      color: '#98C478'
    }, {
      name: 'z',
      keys: [
        'Z'
      ],
      test: new TestContainsFirst(),
      color: '#FF0000'
    }, {
      name: 'z',
      keys: [
        'M'
      ],
      test: new TestContainsFirst(),
      color: 'green'
    }, {
      name: 'brackets',
      keys: [
        '[', ']'
      ],
      test: new TestIdentical(),
      color: 'gray'
    }, {
      name: 'variables',
      keys: [
        '#'
      ],
      test: new TestContainsFirst(),
      color: '#66E0FF'
    }, {
      name: 'line-number',
      keys: [
        'N'
      ],
      test: new TestContainsFirst(),
      color: 'gray'
    }, {
      name: 'feed',
      keys: [
        'F'
      ],
      test: new TestContainsFirst(),
      color: 'pink'
    }, {
      name: 'variables',
      keys: [
        'I', 'J', 'K', 'R'
      ],
      test: new TestContainsFirst(),
      color: 'dodgerBlue'
    }]
  }

  this.exec = (string = '') => {
    const array = string.split('\n').slice(1)
    return array.filter((line, i) => i !== array.length - 1).map(line => this.color(line) + '<br/>').join('');
  }

  this.colorComments = string => {
    let ns = ''
    let isInComment = false
    let isTag = false
    for (let i = 0, l = string.length; i < l; i++) {
      if (string.charAt(i) === '(') {
        ns += '<span style="color: #545454;">'
        isInComment = true
      }
      if (isInComment) {
        if (string.charAt(i) === '<') isTag = true
        ns += isTag ? '' : string.charAt(i)
        if (string.charAt(i) === '>') isTag = false

      } else {
        ns += string.charAt(i)
      }

      if (string.charAt(i) === ')') {
        ns += '</span>'
        isInComment = false
      }
    }
    return ns
  }

  this.color = string => {
    let tokens = string.split(' '), ns = '', found = false;
    for (var token of tokens) {
      found = false;
      for (var key of this.keyword) {
        if (key.test.exec(token, key.keys)) {
          ns += '<span style="color:' + key.color + ';"> ' + token + ' </span>';
          found = true;
        }
      }
      if (token.length !== 0) if (!found) ns += '<span style="color:#fff;"> ' + token + ' </span>';
    }
    return this.colorComments(ns);
  }

  this.init();
}
