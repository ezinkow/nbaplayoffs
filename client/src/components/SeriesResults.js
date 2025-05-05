import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function SeriesResults() {
    const [series, setSeries] = useState([])

    useEffect(() => {
        async function fetchSeries() {
            try {
                const response = await axios(`api/series`)
                console.log('response', response.data)
                setSeries(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchSeries()
    }, []);
    return (
        <div className="table resultsTable">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th key='game id'>Series #</th>
                        <th key='higher seed'>Higher seed</th>
                        <th key='lower seed'>Lower Seed</th>
                        <th key='winner'>Winner</th>
                        <th key='games'>Games</th>
                    </tr>
                </thead>
                <tbody>
                    {series.length > 0 ? series.map(thisSeries =>
                        <tr>
                            <td key={thisSeries.id}>{thisSeries.id}</td>
                            <td key={thisSeries.higher_seed}>(thisSeries.higher_seed_seed) {thisSeries.higher_seed}</td>
                            <td key={thisSeries.lower_seed}>(thisSeries.lower_seed_seed) {thisSeries.lower_seed}</td>
                            <td key={thisSeries.winner}>{thisSeries.winner}</td>
                            <td key={thisSeries.games}>{thisSeries.games}</td>
                        </tr>
                    ) : ""
                    }
                </tbody>
            </Table>
        </div>
    )
}