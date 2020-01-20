import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedOne = 'generalHeaders';
  queHeaders = {
    'one': {
      sort: true,
      isCollapsed: false
    },
    'three': {
      sort: false,
      isCollapsed: false
    },
    'four': {
      sort: false,
      isCollapsed: false
    },
    'five': {
      sort: false,
      isCollapsed: false
    }
  };
  generalHeaders = {
    'one': {
      sort: true,
      className: 'special-header',
      isCollapsed: false
    },
    'two': {
      sort: false,
      isCollapsed: false
    },
    'three': {
      sort: false,
      className: 'special-header',
      isCollapsed: false
    },
    'five': {
      sort: false,
      isCollapsed: false
    },
    'six': {
      sort: false,
      isCollapsed: false
    }
  };
  historyHeaders = {
    'one': {
      sort: true,
      isCollapsed: false
    },
    'three': {
      sort: false,
      isCollapsed: false
    },
    'five': {
      sort: false,
      isCollapsed: false
    },
    'six': {
      sort: false,
      isCollapsed: false
    },
    'eight': {
      sort: false,
      isCollapsed: false
    },
    'ten': {
      sort: false,
      isCollapsed: false
    }
  };
  config = {
    fields: {
    },
    data: [
      {
        one: '1stRow-one',
        two: '1stRow-two',
        three: '1stRow-three',
        four: '1stRow-four',
        five: '1stRow-five',
        six: '1stRow-six',
        seven: '1stRow-seven',
        eight: '1stRow-eight',
        nine: '1stRow-nine',
        ten: '1stRow-ten'
      },
      {
        one: '2stRow-one',
        two: '2stRow-two',
        three: '2stRow-three',
        four: '2stRow-four',
        five: '2stRow-five',
        six: '2stRow-six',
        seven: '2stRow-seven',
        eight: '2stRow-eight',
        nine: '2stRow-nine',
        ten: '2stRow-ten'
      },
      {
        one: '3stRow-one',
        two: '3stRow-two',
        three: '3stRow-three',
        four: '3stRow-four',
        five: '3stRow-five',
        six: '3stRow-six',
        seven: '3stRow-seven',
        eight: '3stRow-eight',
        nine: '3stRow-nine',
        ten: '3stRow-ten'
      }
    ]
  };
  ngOnInit() {
    this.config.fields = this.generalHeaders;
  }

  selectOne(value) {
    this.selectedOne = value;
    this.config.fields = this[value];
  }
}
