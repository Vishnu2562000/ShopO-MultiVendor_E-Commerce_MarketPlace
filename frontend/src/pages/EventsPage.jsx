import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeHeading={4} />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="flex-grow">
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default EventsPage;
