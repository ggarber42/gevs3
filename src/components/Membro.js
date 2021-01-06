import React from 'react'

const Membro = ({image, nome, lates}) => {
    return (
        <div>
          <img src={image} />
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: nome}} />
            <a href={lates} target="_blank">Lattes</a>
          </div>
        </div>
    )
}

export default Membro
