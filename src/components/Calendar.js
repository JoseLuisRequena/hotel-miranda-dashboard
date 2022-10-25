import styled from "styled-components";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const CalendarWrapper = styled.div`
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 10px;
  width: 100%;
  background-color: #ffffff;
  height: 100%;
`;
const FullCalendarWrapper = styled.div`
  
  padding: 2rem 2rem;
  font-family: "Poppins", sans-serif;
  .fc-media-screen {
    max-height: 300px;
    width: 100%;
    margin: 0;
  }
  .fc-theme-standard .fc-scrollgrid,
  .fc-theme-standard th,
  .fc-scrollgrid td {
    border: 0;
  }
  th {
    font-weight: 400;
    color: #799283;
  }
  .fc .fc-toolbar-chunk:first-child:before {
    content: ;
    color: #393939;
  }
  .fc .fc-toolbar-chunk:last-child {
    div {
      
      grid-template-columns: 30px 1fr 30px;
      gap: 1rem;
    }
  }
  h2.fc-toolbar-title,
  .fc .fc-toolbar-chunk:first-child:before {
    font-weight: 500;
    font-size: 1.125rem;
    color: #393939;
  }
  .fc .fc-button {
    padding: 3px;
  }
  .fc-button-primary {
    background-color: #ffffff;
    color: #799283;
    border: 0;
    transition: 0.2s;
    :hover,
    :active {
      box-shadow: 0px 4px 4px #00000005;
      background-color: #ebf1ef;
      color: #135846;
      border: 0;
    }
  }
  .fc .fc-daygrid-day-frame,
  .fc .fc-daygrid-day-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .fc-daygrid-day-frame:before,
  .fc-daygrid-day-events:before,
  .fc-daygrid-event-harness:before,
  .fc-daygrid-day-frame:after,
  .fc-daygrid-day-events:after,
  .fc-daygrid-event-harness:after {
    display: none;
  }
  .fc-daygrid-day,
  .fc-day-today {
    :hover {
      background-color: #135846;
      color: #ffffff;
      border-radius: 8px;
    }
  }
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    display: none;
  }
  .fc .fc-scroller-liquid-absolute {
    overflow: hidden !important;
  }
  .fc .fc-daygrid-day .fc-day-today {
    background-color: inherit;
    font-weight: bold;
  }
`;

export default function Calendar() {
  
    return (
        <CalendarWrapper>
            <FullCalendarWrapper>
                <FullCalendar
                  plugins={[ dayGridPlugin ]}
                  initialView="dayGridMonth"
                />
            </FullCalendarWrapper>
      </CalendarWrapper>
    )

}