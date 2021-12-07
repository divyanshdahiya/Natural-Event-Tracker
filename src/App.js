import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import IconsInfo from "./components/IconsInfo";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Header />

      {!loading ? (
        <>
          <Map eventData={eventData} /> <IconsInfo />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
