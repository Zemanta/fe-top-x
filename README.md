# FE Top X presentation page

This is a simple static website to host Frontend guild top X articles. 

## Adding new articles:
- Articles are being collected and voted on [goReflect](https://www.goreflect.com/Retrospective/Board/KTh1iEcygkOFLmbZT5qX6g)
- After the team agrees on which articles to present, move them to the "Next presentation" column
- Open Chrome DevTools and run this script:
```
const response = await fetch('https://www.goreflect.com/api/Board/KTh1iEcygkOFLmbZT5qX6g/Card/Active?orderByDateDescending=false');
const cards = await response.json();
const formattedCards=cards.Cards.filter(card=>card.CardCategory.Id==780514)
.map(card=>({...card, textRows: card.Title.split('\n').filter(row=>row.length>0)}))
.map(card=>({title: card.textRows[0], thumbnailUrl: 'TODO', url: card.textRows[1]}));
console.log(JSON.stringify(formattedCards, null, 2));
```
- Copy the results into a new entry in the `topx.json` file in this project
- Add the thumbnail URLs
