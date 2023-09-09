import "./Lessons.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navigation from "../components/Navigation";
import Container from "../components/Container";

function Lessons() {
  const [hour, setHour] = useState(1);
  const [participants, setParticipants] = useState(1);
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isBookButtonClicked, setIsBookButtonClicked] = useState(false);
  const pricePerHour = 180;
  const totalPrice = hour * participants * pricePerHour;

  const increaseHour = () => {
    if (hour < 8) {
      setHour(hour + 1);
    }
  };

  const clearHour = () => {
    setHour(1);
  };

  const increaseParticipants = () => {
    if (participants < 4) {
      setParticipants(participants + 1);
    }
  };

  const clearParticipants = () => {
    setParticipants(1);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = () => {
    setIsBookButtonClicked(true);

    if (!location) {
      console.log("Please select a location!");
      return;
    }

    if (selectedDate) {
      const bookedSlot = { date: selectedDate, hour, participants };
      setBookedSlots([...bookedSlots, bookedSlot]);
      console.log("Booking confirmed for", selectedDate);
    } else {
      console.log("Please select a date and time");
    }
  };

  return (
    <div className="lessons">
      <Navigation />
      <Container>
        <h1></h1>
        <div className="service-list">
          <h2>Choose your plan:</h2>
          <ul>
            <li>
              <span className="service-name"></span>
              <div className="service-details">
                <div>
                  <span>
                    <button onClick={increaseHour}>+</button>
                    {hour} hour{hour > 1 ? "s" : ""}
                  </span>
                  <button onClick={clearHour}>Clear selection</button>
                  <br />
                </div>
                <div>
                  <span>
                    <button onClick={increaseParticipants}>+</button>
                    {participants} person{participants > 1 ? "s" : ""}
                  </span>
                  <button onClick={clearParticipants}>Clear selection</button>
                  <br />
                </div>
              </div>
              <span className="total-price">Total Price: {totalPrice}RON</span>
              <div className="locations">
                <h2>Choose your playground:</h2>
                <select value={location} onChange={handleLocationChange} className={!location && isBookButtonClicked ? 'error' : ''}>
                  <option value="">Select location:</option>
                  <option value="Cavnic">Cavnic</option>
                  <option value="Suior">Suior</option>
                  <option value="Borsa">Borsa</option>
                </select>
                {!location && isBookButtonClicked && <span className="error-message">Please select a location!</span>}
              </div>
              <div className="date-picker">
                <h2>Choose a date and time:</h2>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMM d, yyyy h:mm aa"
                  placeholderText="Select date and time"
                  className={bookedSlots.some(
                    (slot) =>
                      slot.date.getTime() === selectedDate?.getTime() &&
                      slot.hour === hour &&
                      slot.participants === participants
                  )
                    ? "booked"
                    : ""}
                />
              </div>
              <button onClick={handleBooking}>Book Now</button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Lessons;
