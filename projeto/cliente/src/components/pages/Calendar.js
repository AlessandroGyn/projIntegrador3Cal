import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useState, useRef } from 'react';
import AddEventModal from './AddEventModal';
import axios from "axios";
import moment from "moment";

// eslint-disable-next-line 
export default function () {
  
    const [modalOpen, setModalOpen] = useState();
    const [events, setEvents ] = useState();
    const calendarRef = useRef(null);
    const onEventAdded = event => {
      let calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent({
        start: moment(event.start).toDate(),
        end: moment(event.end).toDate(),
        title: event.title
      });
    }
    async function handleEventAdd(data) {
      //quando vai gravar ==> passa por aqui
      console.log("dataevent foi gravar: "+data.event);
      await axios.post("http://localhost:5000/create-event", data.event);
    }
    
    async function handleDatesSet(data){
      // quando carrega a página ==> passa por aqui
      
      
      
      console.log("atualizou");
      
      //console.log("dataStart: "+data.start);
      //console.log("dataEnd: "+data.end);
      //console.log("data é: "+data.start);
      const response = await axios.get(
        "http://localhost:5000/get-events?start=" +
        moment(data.start).toISOString() +
        "&end=" +
        moment(data.end).toISOString(),
      );
      setEvents(response.data);
    }
    console.log(events)
    return (
      <section>
        <button onClick={() => setModalOpen(true)}>Agende seu horário</button>
        <div style={{position: "relative", zIndex: 0}} >
        <FullCalendar
          ref={calendarRef}
          events= { events }
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
        />
        </div>
        <AddEventModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          onEventAdded={(event) => onEventAdded(event)} 
        />
      </section>
    );
}