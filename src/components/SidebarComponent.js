import React from "react";
import contacts from "../assets/data/store";
import App from "../App";
const SidebarComponent = () => {
  return (
    <div className="col col-md-4 g-0 d-md-block" >
      <div className="row flex-column h-100 g-0">
        <div className="col-12 bg-my-grey d-flex justify-content-between p-3 align-items-center border-end">
          <div className="d-flex align-items-center">
            <div className="portrait">
              <img src="img/avatar_io.jpg" alt="photo_avatar_of _mine" />
            </div>
            <h5>Sofia</h5>
          </div>
          <div className="d-flex align-items-center">
            <a href="#">
              <i className="fa-solid fa-circle-notch me-4"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-message me-4"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-ellipsis-vertical me-4"></i>
            </a>
          </div>
        </div>
        <div className="col-12 bg-my-turquoise p-3">
          <div className="row ps-3 align-items-center">
            <div className="bell text-center col-3">
              <i className="fa-solid fa-bell-slash pt-3"></i>
            </div>
            <div className="col-9">
              <h5>Ricevi le notifiche di nuovi messaggi</h5>
              <a href="#" className="text-my-small-grey">
                Attiva notifiche desktop
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 input-group p-3 bg-my-grey">
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="text" className="form-control" placeholder="cerca..." />
        </div>
        <div className="col-12 flex-grow-1 overflow-y-auto h0">
          <ul className="list-group list-group-flush overflow-auto">
            {
                contacts.map((contact) => {
                    const {id} = contact
                    return <li>
                    <div key={id} className="row py-2 g-0">
                      <div className="portrait col-2">
                        <img src={contact.avatar} alt={`${contact.name}`} />
                      </div>
                      <div className="col">
                        <h5 className="mb-1">{contact.name}</h5>
                        <small className="text-my-small-grey">{
                            contact.messages[contact.messages.length - 1].message
                        }</small>
                      </div>
                      <div className="col-2">
                        <small className="text-my-small-grey">{
                            contact.messages[contact.messages.length - 1].date
                        }</small>
                      </div>
                    </div>
                  </li>
                })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
