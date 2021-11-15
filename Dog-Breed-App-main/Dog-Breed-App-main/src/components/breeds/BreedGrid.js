import React from 'react'
import Breeditems from './Breeditems'
import Spin from '../ui/Spinner'

const BreedGrid = ({ items, isloading }) => {
    return isloading ? ( < Spin / > ) : ( 
        <section className = "cards" > {
            items.map((item) => ( 
            <Breeditems key = { item.id }
                item = { item } > </Breeditems>
            ))
        } </section>
    )
}

export default BreedGrid