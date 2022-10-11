import "../global.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core"
import { faCheck,  faXmark  } from '@fortawesome/free-solid-svg-icons'

function Card(props) {

    return (
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
            <h6 className="card-price text-center">${props.card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                props.card.featuresAccessible.map((item)=>{
                  return <li><span className="fa-li"> <FontAwesomeIcon icon={faCheck} /></span>{item.features}</li>
                })
              }</ul>
             <ul className="fa-ul">
              {props.card.featuresNotaccessible.map((item)=>{
                  return <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faXmark} /></span>
                  {item.features}</li>
                })}
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;