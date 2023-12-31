import "../component-style.css"; 

const RoomDetails = ({ room, onRoomClick}) => {



    return (


      <div className = "card">

        <div className="card__body">
        <div class="card__image-container">
          <img src={room.roomImg} className="card__image"/>
          </div>
          <h2 className="card__title"> {room.roomName} </h2>
          <p className="card__description">₱ {room.price} /Per night</p>
          <p className="card__description">₱ {room.addPrice} /Per person</p>
          <p className="card__description">Capacity: Max persons {room.capacity}</p>
          <p className="card__description">{room.desc}</p>
        </div>

        <button type="button" className="btn btn-arrow btn-pill btn-medium btn-dark" onClick={onRoomClick}>Book Room</button>
      </div>
 
    )
    }
  
  export default RoomDetails