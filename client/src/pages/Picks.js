import React from 'react'
import Navbar from '../components/Navbar'
import Picks from '../components/Picks'
import PicksTiebreaker from '../components/PicksTiebreaker'

export default function PicksContainer() {


    return (
        <div>
            <Navbar />
            <div className='=container'>
                <Picks />
            </div>
        </div>
    )
}