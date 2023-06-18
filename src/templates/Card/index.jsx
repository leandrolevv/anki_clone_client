import logo from './logo.svg';
import './style.css';
import {Component} from 'react'
import { CardTile } from '../../CardTile';
import { DeckTitle } from '../../DeckTitle';
import {removeLastCaracter} from './utils/functions';

class Card extends Component{
  state = {
    cards: [],
    decks: []
  }

  loadCards = async () => {
    const cardResponse = fetch('http://localhost:5065/v1/Card');
    const deckResponse = fetch('http://localhost:5065/v1/Deck');
      const [card, deck] = await Promise.all([cardResponse, deckResponse]);
      const cardsjson = await card.json();
      const decksjson = await deck.json();
      this.setState({cards: cardsjson.data, decks: decksjson.data})
  }

  componentDidMount(){
    this.loadCards();
  }

  render(){
    const {cards, decks} = this.state;
    return (<div className="App">
    <section className="container">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
      {DeckTitle(decks)}
    <div className="cards">
      {cards.map(card => ( <div key={card.id}><CardTile id={card.id} front={card.front} back={card.back} tags={card.tags} removeLastCaracter={removeLastCaracter}/></div>))}
    </div>
      <button className="button" onClick={this.loadCards}>Refresh</button>
      </section>
  </div>)
  }
}

export default Card;
