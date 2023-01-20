import React from 'react'
import Cards from '../Cards';
// import DZNoviBG from '/assets/dznovibg.jpg';
// import Image2 from '../assets/img2.jpg';
// import Image3 from '../assets/img3.jpg';

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
    return (
        <div>
            <Cards data1={locations1} data2 = {locations2} title='LOKACIJE' type='locations' />
        </div>
    )

}

export default Locations