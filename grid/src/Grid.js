import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "jquery/dist/jquery.min.js"
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';


function Grid() {

    const [coviddata, setcoviddata] = useState([])


    useEffect(() => {
        axios.get("https://api.covid19api.com/summary").then(res => {
            console.log(res.data)
            setcoviddata(res.data.Countries)
        }).catch(err => { console.log(err) })


        $(document).ready(function () {
            $('#myTable').DataTable();
        });

    }, [coviddata])

    function ctry(st) {
        return (st)

    }

    const datatabl = coviddata.map(obj => {

        return (



            <tr><td><a href={obj.Country}>{obj.Country}</a></td>
                <td>{obj.TotalConfirmed}</td><td>{obj.TotalConfirmed - obj.TotalDeaths}</td><td>{obj.TotalRecovered}</td><td>{obj.TotalDeaths}</td>
            </tr>

        );

    })



    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <h1>CovidStats</h1>
                <table id="myTable" className='table'>
                    <thead>
                        <tr><td>Country</td><td>Confirmed</td><td>Active</td><td>Recovered</td><td>Death</td></tr></thead>
                    <tbody>
                        {datatabl}
                    </tbody>
                </table></div>
        </div>
    );
}
export default Grid;
