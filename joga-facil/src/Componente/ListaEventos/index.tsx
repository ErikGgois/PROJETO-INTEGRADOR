import React from "react";
import "../../style/Style.css"


interface EventCardProps {
  sport: string;
  image: string;
  participants: string;
  date: string;
  location: string;
  color: string;
}

const EventCard: React.FC<EventCardProps> = ({
  sport,
  image,
  participants,
  date,
  location,
  color,
}) => {
  return (
    <div className="event-card" style={{ backgroundColor: color }}>
      <div className="event-header">
        <span>{sport}</span>
        <span>{participants}</span>
      </div>
      <img src={image} alt={sport} className="event-image" />
      <div className="event-info">
        <p>📅 {date}</p>
        <p>📍 {location}</p>
      </div>
      <button className="event-button">Participar</button>
    </div>
  );
};

const EventList: React.FC = () => {
  const events = [
    {
      sport: "Futebol",
      image: "/images/futebol.jpg",
      participants: "7/12",
      date: "10/04/2025",
      location: "Quadra 1",
      color: "#FF4D4D",
    },
    {
      sport: "Vôlei",
      image: "/images/volei.jpg",
      participants: "10/12",
      date: "12/04/2025",
      location: "Quadra 2",
      color: "#FFD700",
    },
    {
      sport: "Tênis",
      image: "/images/tenis.jpg",
      participants: "1/2",
      date: "15/04/2025",
      location: "Quadra 3",
      color: "#9B59B6",
    },
  ];

  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default EventList;