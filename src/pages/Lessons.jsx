import "./Lessons.css"
import { useState } from "react";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function Lessons() {
    const [hour, setHour] = useState(1);
    const [participants, setParticipants] = useState(1);
    const pricePerHour = 30;
    const totalPrice = hour * participants * pricePerHour;

    const increaseHour = () => {
        setHour(hour + 1);
    };

    const increaseParticipants = () => {
        setParticipants(participants + 1);
    };

    return ( 
        <div className="lessons">
            <Navigation />
            <Container>
            <h1>Lessons</h1> 
            <div className="service-list">
                <h2>Which one do you choose?</h2>
                <ul>
                    <li>
                        <span className="service-name">Snowboard lesson:
                        </span>
                        <div className="service-details">
                            <div>
                                <span>
                                    <button onClick={increaseHour}>+</button>
                                    {hour} hour{hour > 1 ? "s" : ""}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <button onClick={increaseParticipants}>+</button>
                                    {participants} person{participants > 1 ? "s" : ""}
                                </span>
                            </div>
                            </div>
                            <span className="total-price">Total Price: {totalPrice}EUR</span>
                            <button>Book Now</button>
                    </li>
                </ul>
            </div>
            </Container>
        </div>
    );
}

export default Lessons;
