import React from 'react';

const blackCard = {
    backgroundColor: '#000',
    color: '#fff',
}

const whiteCard = {
    backgroundColor: '#fff',
    color: '#000',
}

export const BigCards = (prop:any) => {
    if (prop.order == 0){
    return (
        <>
            <div className="CardContainer">
            <div className="BigCard" style={blackCard}>
                <p>{prop.upperTitle1}</p>
                <h2>{prop.title1}</h2>
                <p>{prop.comp1}</p>
            </div>  
            <div className="BigCard" style={whiteCard}>
                <p>{prop.upperTitle2} </p>
                <h2>{prop.title2}</h2>
                <p>{prop.comp2}</p>
            </div>
            </div>
        </>
    )} else {
        return (
        <>
            <div className="CardContainer">
            <div className="BigCard" style={whiteCard}>
                <p>{prop.upperTitle1}</p>
                <h2>{prop.title1}</h2>
                <p>{prop.comp1}</p>
            </div>  
            <div className="BigCard" style={blackCard}>
                <p>{prop.upperTitle2} </p>
                <h2>{prop.title2}</h2>
                <p>{prop.comp2}</p>
            </div>
            </div>
        </>
    )

}};