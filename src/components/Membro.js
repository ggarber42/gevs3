import React from 'react'
import Img from 'gatsby-image'

const Membro = ({image, nome, lates}) => {
    return (
        <>
          <Img fixed={image} />
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: nome}} />
            <a href={lates} target="_blank">lattes</a>
          </div>
        </>
    )
}

export default Membro
