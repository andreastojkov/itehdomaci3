import React from 'react'
import Cards from '../Cards';
import { useInterval } from '@react-hooks-library/core'
import {useState} from 'react'
import { useCallback } from "react";

function Locations() {
    const locations1=[
        {
            name: 'Novi Beograd',
            text: 'Novi Beograd, Goce Delčeva 30',
            src: 'https://nova.rs/wp-content/uploads/2022/11/15/1668520221-dom-zdravlja-novi-beograd-15-1024x461.jpg'
        },
        {
            name: 'Zemun',
            text: 'Rada Končara 46',
            src: 'http://zemun.rs/wp-content/uploads/2017/10/NASLOVNA-3.jpg'
        },
        {
            name: 'Vračar',
            text: 'Bojanska 16',
            src: 'https://studiob.rs/wp-content/uploads/2020/02/dom-zdravlja-vracar-greb.jpg'
        },

    ];

    const locations2=[
        {
            name: 'Zvezdara',
            text: 'Olge Jovanović 11',
            src: 'https://dzzvezdara.rs/wp-content/uploads/2022/10/Dom-zdravlja-Zvezdara3.jpg'
        },
        {
            name: 'Voždovac',
            text: 'Ustanička 16',
            src: 'https://vozdovac.rs/wp-content/uploads/2020/09/Dom-zdravlja-Vozdovac.jpg'
        },
        {
            name: 'Rakovica',
            text: 'Kraljice Jelene 22',
            src: 'https://nova.rs/wp-content/uploads/2021/09/04/1630750341-dom-zdravlja-rakovica-foto-google-maps-1200x800.jpg'
        },

    ];

    //CUSTOM HOOK -     brojac sekundi provedenih na stranici
    const [count, setCount] = useState(0)

    const increment = useCallback(() => setCount((c) => c + 1), [])
  
    useInterval(increment, 1000) //povecava za sekund
    return (
        <div>
            <Cards data1={locations1} data2 = {locations2} title='LOKACIJE' type='locations' /> 
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.537097077485!2d20.409657950738726!3d44.83099428338882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65750cff2abb%3A0x8732c0c30a46db91!2sDom%20Zdravlja%20Novi%20Beograd!5e0!3m2!1sen!2srs!4v1674296104069!5m2!1sen!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.816767130396!2d20.3844563507392!3d44.84566478242009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65c6688511d1%3A0xea8ae857d77a63a8!2sZemun%20Community%20Health%20Center!5e0!3m2!1sen!2srs!4v1674296158903!5m2!1sen!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5662.216659033673!2d20.471877396899824!3d44.79898087900265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70777d303c31%3A0x4c9c10e69f965b06!2sDom%20zdravlja%20Vra%C4%8Dar!5e0!3m2!1sen!2srs!4v1674296285223!5m2!1sen!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.4659563604564!2d20.501671492408068!3d44.79169181945374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083673e73c3%3A0xc9915f5951e047d9!2sZvezdara%20Community%20Health%20Centre!5e0!3m2!1sen!2srs!4v1674296355755!5m2!1sen!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.6924605056774!2d20.473852050737154!3d44.787074786286816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7068aaf6e531%3A0x1bcc9554af6f4258!2z0JTQvtC8INC30LTRgNCw0LLRmdCwINCS0L7QttC00L7QstCw0YY!5e0!3m2!1sen!2srs!4v1674296398261!5m2!1sen!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.7407046207713!2d20.439063550735728!3d44.74530658904095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71912b3ae80b%3A0xafb471d0e9a42b87!2sDom%20zdravlja%20Rakovica!5e0!3m2!1sen!2srs!4v1674296438996!5m2!1sen!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <p>Provedeno vreme na stranici - {count} sec </p>
        </div>
         
    )

}

export default Locations