export const CardTile = (props) => {
  return <div className ="card-content">
  <div className="card-front">{props.front}</div>
  <div className="card-back">{props.back}</div>
  <div className="card-tag">
    Tags: {props.tags.map(tag => <span key={tag.id}>{tag.text+','}</span>)}
  </div>
</div>
}