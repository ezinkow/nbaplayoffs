import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'


export default function Home() {


    return (
        <div>
            <Navbar />
            <div className='container'>
                <br></br>
                <br></br>
                <a href='https://docs.google.com/spreadsheets/d/1H_rJCvMUgG7mC8ya-yuO7Dh0gRaUqV7IAM1kZaE5eDY/edit#gid=0' target="_blank"><h3>Check out the google doc for your picks results</h3></a>
                <br></br>
                <br></br>
                <Link to="/picks"><h3>Current Round Picks</h3></Link>
                <br></br>
                <br></br>
                
                <a href='https://www.nba.com/games' target="_blank"><h5>Scores</h5></a>
                <a href='https://www.nba.com/playoffs/2023' target="_blank"><h5>Playoff Picture</h5></a>
            </div>
        </div>
    )
}