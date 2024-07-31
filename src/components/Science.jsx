import React from 'react'
import Maths from "../components/Maths"

function Science() {
  return (
    <div>
      <div className="Demo-section">
        <div className="containers">
          {Maths.map((item) => (
            <div className="card-containers" key={item.id}>
              <iframe
                width="320"
                height="200"
                src={item.Url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                allowfullscreen
              </iframe>
              <p className="paragraphs">{item.paragraph}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Science;
