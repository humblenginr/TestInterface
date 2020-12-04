import React from 'react'
import "../../CSS/AboutCard.css"

export const Aboutcard = () => {
    return (
        <div>
            <div className="card profile-card-4">
            <div className="card-img-block">
              <img src="https://images.unsplash.com/photo-1588410670460-cdab54625253" alt="profile" class="card-img-top"></img>
            </div>
           <div className="card-body pt-0">
            <h5 className="card-title">Kogila S</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit est adipisci obcaecati? Mollitia quo maxime unde. Sed, tenetur quaerat!</p>
            <a href="#" class="btn btn-outline-info btn-block">click</a>
           </div>
          </div>

        </div>
    )
}
