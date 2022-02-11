import React, { Component } from 'react';

class Json extends Component {
    render() {

        const mylist=[
            {
                city:"Dhaka",
                zip:"6000"
            },
            {
                city:"Rangpur",
                zip:"4000"
            },
            {
                city:"Shibpur",
                zip:"3000"
            },
            {
                city:"Narsingdi",
                zip:"2000"
            }
        ]

        const dataitem=mylist.map((data)=>{
            return <option>{data.city}</option>
        });


        return (
            <div>
                <select>{dataitem}</select>
            </div>
        );
    }
}

export default Json;