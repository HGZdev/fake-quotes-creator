import React from 'react';
import ReactDOM from 'react-dom';

import {quotesDB} from "./modules/quotesDB.js";
import {themesDB} from "./modules/themesDB.js";

class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <div className="container row outer">
          <div className='col-12 title'>
            <h1>Kreator Zmyślonych Cytatów</h1>
          </div>
          <div className='col-12 subtitle'>
            <h2>Przypisywanie dowolnych słów wielkim osobistościom jeszcze nigdy nie było tak proste!</h2>
          </div>
        </div>
      </section>
    );
  }
}

class Form extends React.Component {
  render() {
    let labelsArray = ['Kategoria:', 'Cytaty:', 'Autorzy:', 'Szablony:'];
    let classNamesArray = ['categories', 'quotes', 'authors', 'themes'];
    let selectionMap = classNamesArray.map((el, i) => {
      return <Select key={el} label={labelsArray[i]} className={el} valuesArray={this.props.valuesArray} valuesSelected={this.props.valuesSelected} onChange={this.props.onChange}/>;
    })
    return (
      <section className="dashboard">
        <div className="container row outer">
          <form className="col-12 row inner" action="index.html" method="post" onSubmit={this.props.onSubmit}>
            {selectionMap}
            <RandomBtn className="random-button" onClick={this.props.onClick}/>
          </form>
        </div>
      </section>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
      <section className="board">
        <div className="container ">
          <div className="row outer" style={this.props.valuesDisplay.themes}>
            <div className="col-12 quote">
              <p>
                <span>"</span>
                {this.props.valuesDisplay.quotes}
                <span>"</span>
              </p>
            </div>
            <div className="col-12 author">
              <h3>{this.props.valuesDisplay.authors}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container row outer">
          <div className="col-3 social_media">
            <a href="#" target="_blank" rel="nofollow">
              <div className="social_icon google"></div>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <div className="social_icon facebook"></div>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <div className="social_icon twitter"></div>
            </a>
            <a href="#" target="_blank" rel="nofollow">
              <div className="social_icon pinterest"></div>
            </a>
          </div>
          <div className="col-5 title">Kreator Zmyślonych Cytatów</div>
          <div className="col-4 author">
            <p>
              <a href="https://github.com/HGZwebdesign" target="_blank" rel="nofollow">HGZ&nbsp;webdesign</a>&nbsp;&copy;&nbsp;2017
            </p>
          </div>
        </div>
      </section>
    );
  }
}

class Select extends React.Component {
  render() {
    let valuesArray = this.props.valuesArray[this.props.className];
    let optionsMap = valuesArray.map((el, i) => {
      return <option key={i} value={i}>{el.name || el}</option>
    });
    return (
      <div className="col-2">
        <span>{this.props.label}</span>
        <select className={this.props.className} name={this.props.className} value={this.props.valuesSelected[this.props.className]} onChange={this.props.onChange}>
          {optionsMap}
        </select>
      </div>
    );
  }
}

class RandomBtn extends React.Component {
  render() {
    return (
      <div className="col-2">
        <span>&nbsp;</span>
        <button type="button" name={this.props.className} className={this.props.className} onClick={this.props.onClick}>LOSUJ
        </button>
      </div>
    );
  }
}

class FakeQuotesCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      valuesDB: quotesDB,
      themesDB: themesDB,
      categoriesDB: "",
      valuesArray: {},
      valuesSelected: {},
      valuesDisplay: {}
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Form className="col-12 row inner" valuesArray={this.state.valuesArray} themesArray={this.state.themesArray} valuesSelected={this.state.valuesSelected} onSubmit={this.state.handleSubmit} onChange={this.handleSelectChange} onClick={this.handleRandomClick}/>
        <Board valuesDisplay={this.state.valuesDisplay}/>
        <Footer/>
      </div>
    );
  }

  componentWillMount() {
    let valuesDB = this.state.valuesDB;
    let newState = {
      categoriesDB: {},
      valuesArray: {}
    };

    // Set valuesArray
    newState = this.mapValues();

    // Set categoriesDB
    newState.categoriesDB = this.valuesToArray(valuesDB, 'c', 'Wybierz kategorię...');

    this.setState(newState);
  }

  mapValues = (filterBy) => {
    // Set valuesArray and reset valuesSelected and valuesDisplay
    let valuesDB = this.state.valuesDB;
    let newState = {
      valuesArray: {
        categories: this.valuesToArray(valuesDB, 'c', 'Wybierz kategorię...'),
        quotes: this.valuesToArray(valuesDB, 'q', 'Wybierz cytat...', filterBy),
        authors: this.valuesToArray(valuesDB, 'a', 'Wybierz autora...'),
        themes: this.state.themesDB
      },
      valuesSelected: {
        categories: 0,
        quotes: 0,
        authors: 0,
        themes: 0
      },
      valuesDisplay: {
        quotes: "Wybierz cytat",
        authors: "Wybierz autora",
        themes: {
          name: "Wybierz szablon...",
          color: "#242424",
          backgroundColor: "#FFFFFF"
        }
      }
    }

    return newState;
  }

  valuesToArray = (database, element, text, filterBy) => {
    let categoriesDB = this.state.categoriesDB;

    // Prepare raw array (filter by category if selected)
    let array = database.map((e, i) => {
      if (filterBy && filterBy != 0) {
        if (categoriesDB[filterBy] === e.c) {
          return e[element].trim();
        }
      } else {
        return e[element].trim();
      }
    })

    // Sort array, remove duplicates, undefined values and add initial selected option
    array = array.sort().filter((x, i, a) => !i || x != a[i - 1]);
    array = array.filter(n => n);
    if (text) {
      array.unshift(text);
    }
    return array;
  }

  handleSelectChange = (event) => {
    let value = event.target.value;
    let className = event.target.className;
    let classNamesArray = ['categories', 'quotes', 'authors', 'themes'];
    let newState = {
      valuesArray: this.state.valuesArray,
      valuesSelected: {},
      valuesDisplay: {}
    };

    // Filter quotes by category (if it was changed => update mapValues)
    if (className === "categories" && value !== 0) {
      newState = this.mapValues(value);
    }

    // Set values to select and display
    for (var i = 0; i < classNamesArray.length; i++) {
      if (classNamesArray[i] === className) {
        newState["valuesSelected"][classNamesArray[i]] = value;
        newState["valuesDisplay"][classNamesArray[i]] = this.state.valuesArray[className][value];
      } else {
        newState["valuesSelected"][classNamesArray[i]] = this.state.valuesSelected[classNamesArray[i]];
        newState["valuesDisplay"][classNamesArray[i]] = this.state.valuesDisplay[classNamesArray[i]];
      }
    }

    // If category was changed => reset selected quote
    if (className === "categories") {
      newState["valuesSelected"]["quotes"] = 0;
    }

    this.setState(newState);
  }

  handleRandomClick = (event) => {
    let classNamesArray = ['quotes', 'authors', 'themes'];

    // Reset valuesArray, selection and display board
    let newState = this.mapValues();

    // Random values generator + set values to select and display
    for (var i = 0; i < classNamesArray.length; i++) {
      let tempValuesArray = newState['valuesArray'][classNamesArray[i]];
      let random = Math.floor(Math.random() * (tempValuesArray.length - 1) + 1);
      newState["valuesSelected"][classNamesArray[i]] = random;
      newState["valuesDisplay"][classNamesArray[i]] = tempValuesArray[random];
    }
    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <FakeQuotesCreator/>, document.getElementById('app'));
});
