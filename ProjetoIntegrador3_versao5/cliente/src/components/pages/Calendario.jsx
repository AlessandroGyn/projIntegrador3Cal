import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class Calendario extends React.Component {
  
  calendarRef = React.createRef()
  render() {
    return (
      <FullCalendar
        ref={this.calendarRef}
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        /*eventContent={renderEventContent}*/
      />
    )
  }
  
  handleDateClick = (arg) => { // função que captura o dia que foi clicado
    alert(arg.dateStr)
    console.log('click: '+arg.dateStr)
  }

  someMethod() {
    let calendarApi = this.calendarRef.current.getApi()
    calendarApi.next()
  }

}

/*function renderEventContent(eventInfo) {
  return (
    <>
      <b>{'eventInfo.timeText'}</b>
      <i>{'eventInfo.event.title'}</i>
    </>
  )
} //eventContent: { domNodes: arrayOfDomNodes }
*/