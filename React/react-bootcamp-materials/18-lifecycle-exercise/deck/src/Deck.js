import React, { Component } from 'react'
import axios from 'axios'
const API_URL= "https://deckofcardsapi.com/api/deck";


class Deck extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             deck:null,
             drawnCards:[]
        }
        this.getCard = this.getCard.bind(this);
    }

    async getCard(){
        let id=this.state.deck.deck_id;
        try{
            let cardUrl=`${API_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if(cardRes.data.remaining===0){
                throw new Error("No more cards");
            }
        
       
        console.log(cardRes);
        let card = cardRes.data.cards[0];
        this.setState(st=>({
            drawnCards:[
                ...st.drawnCards,
                {
                    id:card.code,
                    image:card.image,
                    name:`${card.suit} ${card.value}`
                }
            ]
        }));

    } catch(Error){
        console.log(Error)
    }
        
    }
   async componentDidMount(){
        let deck = await axios.get(`${API_URL}/new/shuffle/`);
        this.setState({deck:deck.data})
    }
    render() {
        return (
            <div>
                <h1>Card dealer</h1>
                <button onClick={this.getCard}>Hello</button>
            </div>
        )
    }
    
}

export default Deck