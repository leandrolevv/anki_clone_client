export const DeckTitle = (decks) => {
    return <div class="decks">
        <div>Todos os Decks: {
            decks.map((deck, index) => {
                var comma = ', ';
                if (index === decks.length - 1){
                    comma = '';
                }
                return (
                    <span key={index}>
                        {
                        deck.title + comma
                        }
                    </span>  
                )
            })
        } </div>
    </div>
}