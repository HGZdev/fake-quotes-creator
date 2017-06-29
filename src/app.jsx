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
      topicsList: this.props.topics,
      quotesList: this.props.quotes,
      authorsList: this.props.authors,
      themesList: this.props.themes,

      topicSelected: "0",
      quoteSelected: "0",
      authorSelected: "0",
      themeSelected: "0",

      quoteDisplay: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      authorDisplay: "Marek Tulliusz Cyceron",
      themeDisplay: {
        name: "",
        color: "#FFFFFF",
        backgroundColor: "#252387"
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
                  <Select className="topicsList" label="Tematyka:" value={this.state.topicSelected} list={this.state.topicsList} onChange={this.handleSelectChange}/>
                  <Select className="quotesList" label="Cytaty:" value={this.state.quoteSelected} list={this.state.quotesList} onChange={this.handleSelectChange}/>
                  <Select className="authorsList" label="Autorzy:" value={this.state.authorSelected} list={this.state.authorsList} onChange={this.handleSelectChange}/>
                  <Select className="themesList" label="Szablony:" value={this.state.themeSelected} list={this.state.themesList} onChange={this.handleSelectChange}/>
                  <RandomBtn onClick={this.handleClick}/>
                </div>

              </form>

            </div>
          </div>
        </section>
        <Board quoteDisplay={this.state.quoteDisplay} authorDisplay={this.state.authorDisplay} themeDisplay={this.state.themeDisplay}/>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleSelectChange = (value) => {
    let newState = {
      themeSelected: event.target.value,
      themeDisplay: this.state.themesList[event.target.value]
    }
    this.setState(newState);
  }
}

class Select extends React.Component {
  helper = () => {
    this.props.onChange(this.props.value)
  }
  render() {
      let list;
    if (this.props.className === "themesList") {
      list = this.props.list.map((el, idx) => {
        return <option key={idx} value={idx}>{el.name}</option>
      });
    } else {
      list = this.props.list.map((el, idx) => {
        return <option key={idx} value={idx}>{el}</option>
      });
    }
    return (
      <div className="col-2">
        <span>{this.props.label}</span>
        <select className={this.props.className} name={this.props.className} value={this.props.value} onClick={this.helper}>
          {list}
        </select>
      </div>
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

class Board extends React.Component {

  render() {
    return (
      <section className="board">
        <div className="container">
          <div className="row outer" style={this.props.themeDisplay}>
            <div className="col-12 quote">
              <p>
                <span>"</span>
                {this.props.quoteDisplay}
                <span>"</span>
              </p>
            </div>
            <div className="col-12 author">
              <h3>{this.props.authorDisplay}</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

document.addEventListener('DOMContentLoaded', function () {

  const title = "Kreator Fałszywych Cytatów";
  const subtitle = "Przypisywanie dowolnych słów wielkim osobistościom jeszcze nigdy nie było tak proste";

  ReactDOM.render(
    <FakeQuotesCreator title={title} subtitle={subtitle} topics={topics} quotes={quotes} authors={authors} themes={themes}/>, document.getElementById('app'));
});
