import React from 'react'

const Breeditems = ({ item }) => {

    return ( 
        <div className='card'>
           <h1>{item.name}</h1>
        <div className='card-inner'>
          <div className='card-front'>
          <img key={item.id} src={item.image.url} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Breed Group:</strong> {item.breed_group}
              </li>
              <li>
                <strong>Bred For:</strong> {item.bred_for}
              </li>
              <li>
                <strong>Life Span:</strong> {item.life_span}
              </li>
              <li>
                <strong>Temperament:</strong> {item.temperament}
              </li>
              <li>
                <strong>Origin:</strong> {item.origin}
              </li> 
              <li>
              <strong>Height: </strong> {item.height.metric} kgs
            </li>
            <li>
              <strong>Weight: </strong> {item.weight.metric} kgs
            </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Breeditems