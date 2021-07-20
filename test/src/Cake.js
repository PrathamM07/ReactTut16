function Cake(props)
{
    return(
        
        <div className="card" style={{width:'16rem'}}>
<img style={{height:'16rem'}} src={props.data.image} className="card-img-top" alt="..."></img>
<div className="card-body">
    <h5 className="card-title">{props.data.Name}</h5>
    <p className="card-text">{props.data.Price}</p>
</div>
        </div>

    )
}

export default Cake