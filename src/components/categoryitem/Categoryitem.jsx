import "./Categoryitem.css"
function Categoryitem(props)
{
    return(
        <div className="categoryitems">
            <img src={props.image} width={70} height={70}/>
            <h4>{props.title}</h4>
        </div>
    );
}
export default Categoryitem;