import * as React from "react";
import { useState, useEffect } from 'react';
import { graphObjects } from '../testData/graphObjects'
import Card from "../components/Card"
import { Modal } from "../components/Modal"

export default function Main() {
    let [show, setShow] = useState(false)
    let [card, setCard] = useState(0)
    let createdCards: any[];

    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://covid19api.herokuapp.com/')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    function showModal() {
        setShow(show = true)
    }

    function hideModal() {
        setShow(show = false)
    }

    function sendCard(clickedCard: any) {
        setCard(card = clickedCard)
    }

    function renderCards(array: any[]) {
        let cards = array;
        createdCards = cards.map(card => {
            return (<div className={"card-" + card.order} onClick={() => {
                sendCard(<Card order={card.order} classes={card.classes + " clicked"} type={card.type} data={card.data} title={card.title} />)
                showModal();
            }}>
                <Card order={card.order} classes={card.classes} type={card.type} data={card.data} title={card.title} />
            </div>)
        })
        return createdCards;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(data);
        return (
            <div className="main">
                <div className="main-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="card-layout">
                    {renderCards(graphObjects)}
                </div>
                <Modal show={show} handleClose={hideModal} card={card} />
            </div >
        )
    }

}

