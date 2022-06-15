import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import esLocale from '@fullcalendar/core/locales/pt-br';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState, useRef } from 'react';
import AddEventModal from './AddEventModal';
import axios from "axios";
import moment from "moment";
//import interactionPlugin from "@fullcalendar/interaction";
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//import "@fullcalendar/core/main.css";

// eslint-disable-next-line 
export default function () {
  
    const [modalOpen, setModalOpen] = useState(false);
    const [ events, setEvents ] = useState([]);
    const calendarRef = useRef(null);
    
    const onEventAdded = (event) => {
      let calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent({
        start: moment(event.start).toDate(),
        end: moment(event.end).toDate(),
        title: event.title
      });
    }

   

    async function handleEventAdd(data) {
      //quando vai gravar ==> passa por aqui
      //console.log("vai gravar: "+data.event);
      await axios.post("http://localhost:5000/create-event", data.event);
    }
    
    async function handleDatesSet(data){
      // quando carrega a página ==> passa por aqui
      //console.log("dataID: "+data.id);
      //console.log("dataEnd: "+data.end);
      //console.log("data é: "+data.start);
      const response = await axios.get(
        "http://localhost:5000/get-events?start="+moment(data.start).toISOString()+
        "&end="+moment(data.end).toISOString()+
        "&title="+data.title+"&id="+data.id,
      );
      setEvents(response.data);
    }
    //console.log(events)
    async function handleEventClick(info){
      //let id = info.event.id;
      //await axios.post("http://localhost:5000/delete-event", id);
      
      //console.log(info.event.id)
      
    };



    return (
      <section>
        <button onClick={() => setModalOpen(true)}>Agende seu horário</button>
        <div style={{position: "relative", zIndex: 0}} >
        <FullCalendar
          ref={calendarRef}
          events= { events }
          plugins={[ dayGridPlugin, timeGridPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }}
          locale={esLocale}
          eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
          eventClick={(info) => handleEventClick(info) }
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