import React from 'react';
import ReactDOM from 'react-dom';

import {topics} from "./modules/topics.js";
import {quotes} from "./modules/quotes.js";
import {authors} from "./modules/authors.js";
import {themes} from "./modules/themes.js";

class FakeQuotesCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topicsList: this.props.topics, // zaciąganie baz danych
      quotesList: this.props.quotes,
      authorsList: this.props.authors,
      themesList: this.props.themes,

      topicsSelected: 0, // stany na polach select
      quotesSelected: 0,
      authorsSelected: 0,
      themesSelected: 0,

      quotesDisplay: "Wybierz cytat", // wartości wyświetlane w Board
      authorsDisplay: "Wybierz autora",
      themesDisplay: {
        name: "Początkowy - Biały",
        color: "black",
        backgroundColor: "white"
      }
    }
  }

  render() {
    return (
      <div>
        <section className="dashboard">
          <div className="container">
            <div className="row outer">

              <Header className="col-12 title" title={this.props.title} size="h1"/>
              <Header className="col-12 subtitle" title={this.props.subtitle} size="h2"/>

              <form className="col-12" action="index.html" method="post" onSubmit={this.state.handleSubmit}>

                <div className="row inner">
                  <Select className="topics" label="Tematyka:" value={this.state.topicsSelected} list={this.state.topicsList} onChange={this.handleSelectChange}/>
                  <Select className="quotes" label="Cytaty:" value={this.state.quotesSelected} list={this.state.quotesList} onChange={this.handleSelectChange}/>
                  <Select className="authors" label="Autorzy:" value={this.state.authorsSelected} list={this.state.authorsList} onChange={this.handleSelectChange}/>

                  <Select className="themes" label="Szablony:" value={this.state.themesSelected} list={this.state.themesList} onChange={this.handleSelectChange}/>

                  <RandomBtn onClick={this.handleClick}/>
                </div>

              </form>

            </div>
          </div>
        </section>
        <Board quotesDisplay={this.state.quotesDisplay} authorsDisplay={this.state.authorsDisplay} themesDisplay={this.state.themesDisplay}/>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleSelectChange = (value, className) => {
    console.log("change!");
    console.log("value: " + value, "className: " + className);

    let selected = className + "Selected";
    let display = className + "Display";
    let list = className + "List";

    let newState = {
      [selected]: event.target.value,
      [display]: this.state.themesList[value]
    }
    console.log(newState);
    this.setState(newState);
  }
}

class Select extends React.Component {

  // info o formularzach kontrolowanych
  // https://facebook.github.io/react/docs/forms.html

  helper = () => {
    return this.props.onChange(this.props.value, this.props.className);
  }

  render() {
    let list;
    list = this.props.list.map((el, idx) => {
      if (el.name) {
        return <option key={idx} value={idx}>{el.name}</option>
      } else {
        return <option key={idx} value={idx}>{el}</option>
      }
    });

    return (
      <div className="col-2">
        <span>{this.props.label}</span>
        <select className={this.props.className} name={this.props.className} value={this.props.value} onChange={this.helper}>
          {list}
        </select>
      </div>
    );
  }
}

class Board extends React.Component {

  render() {
    return (
      <section className="board">
        <div className="container">
          <div className="row outer" style={this.props.themesDisplay}>
            <div className="col-12 quote">
              <p>
                <span>"</span>
                {this.props.quotesDisplay}
                <span>"</span>
              </p>
            </div>
            <div className="col-12 author">
              <h3>{this.props.authorsDisplay}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class RandomBtn extends React.Component {
  render() {
    return (
      <div className="col-2">
        <span>Losowy cytat:</span>
        <button className="randomBtn" type="button" name="button">Losuj
        </button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <this.props.size>{this.props.title}</this.props.size>
      </div>
    );
  }
}



document.addEventListener('DOMContentLoaded', function () {

  const title = "Kreator Zmyślonych Cytatów";
  const subtitle = "Przypisywanie dowolnych słów wielkim osobistościom jeszcze nigdy nie było tak proste";

  ReactDOM.render(
    <FakeQuotesCreator title={title} subtitle={subtitle} topics={topics} quotes={quotes} authors={authors} themes={themes}/>, document.getElementById('app'));
});
