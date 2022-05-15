import React, { useState } from 'react';
import { TextBox } from './TextBox';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

interface HoroscopeReqData {

    sun: string;

    moon: string;

    rising: string;
}

interface HoroscopeResData {

    horoscope: string[];

}

function Horoscope() {

    const [sun, setSun] = useState('');
    const [moon, setMoon] = useState('');
    const [rising, setRising] = useState('');

    const [horoscope, setHoroscope] = useState<string[]>([]);
    
    const requestHoroscope = async () => {
        const res = await fetch('http://localhost:4567/horoscope', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                sun: sun,
                moon: moon,
                rising: rising
            })
        });
        const data: HoroscopeResData = await res.json();
        setHoroscope(data.horoscope);
    };

    return (
        <div>

            <TextBox label={"Sun Sign"} changeHandler={setSun} />
            <TextBox label={"Moon Sign"} changeHandler={setMoon}/>
            <TextBox label={"Rising Sign"} changeHandler={setRising}/>

            <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>
            <ul>

                {horoscope.map(item => <li>{item}</li>)}
            
            </ul>
        </div>
    );
}

export default Horoscope;
