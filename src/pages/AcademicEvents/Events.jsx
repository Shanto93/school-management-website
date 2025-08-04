"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";

import { useRef } from "react";

const Events = () => {
  const calendarRef = useRef(null);

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4">
      <div className="bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
        <div className="min-w-[320px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            {/* Left Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() =>
                  calendarRef.current?.getApi().today()
                }
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Today
              </button>
              <button
                onClick={() =>
                  calendarRef.current?.getApi().prev()
                }
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  calendarRef.current?.getApi().next()
                }
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
              >
                Next
              </button>
            </div>

            {/* Center Title */}
            <div className="text-center font-bold text-lg md:text-xl">
              {calendarRef.current?.getApi().view?.title || "Calendar"}
            </div>

            {/* Right Buttons (View switch) */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={() =>
                  calendarRef.current?.getApi().changeView("dayGridMonth")
                }
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
              >
                Month
              </button>
              {/* You can add Week/Day views here */}
            </div>
          </div>

          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={false} // Disable default header
            height="auto"
            aspectRatio={1.5}
            contentHeight="auto"
            events={[
              { title: "Orientation", date: "2025-08-03" },
              { title: "Science Fair", date: "2025-08-08" },
              { title: "Cultural Fest", date: "2025-08-15" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;













// ################################################################################

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// const Events = () => {
//   return (
//     <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4">
//       <div className="bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
//         <div className="min-w-[320px]">
//           <FullCalendar
//             plugins={[dayGridPlugin]}
//             initialView="dayGridMonth"
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth",
//             }}
//             buttonText={{
//               today: "Today",
//               month: "Month",
//             }}
//             height="auto"
//             events={[
//               { title: "Orientation", date: "2025-08-03" },
//               { title: "Science Fair", date: "2025-08-08" },
//               { title: "Cultural Fest", date: "2025-08-15" },
//             ]}
//             aspectRatio={1.5} 
//             contentHeight="auto"
//             windowResize={true}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

// ========================================================
// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const Events = () => {
//   const [date, setDate] = useState(new Date());

//   // Sample event list
//   const eventList = [
//     {
//       date: new Date(2025, 7, 3),
//       title: "Orientation Program",
//       description: "Orientation for new students in the auditorium.",
//     },
//     {
//       date: new Date(2025, 7, 8),
//       title: "Science Fair",
//       description: "Annual science fair with projects from all departments.",
//     },
//     {
//       date: new Date(2025, 7, 15),
//       title: "Cultural Fest",
//       description: "An evening of music, dance, and drama performances.",
//     },
//   ];

//   // Check if date has any event
//   const getEventByDate = (date) => {
//     return eventList.find(
//       (event) =>
//         event.date.getFullYear() === date.getFullYear() &&
//         event.date.getMonth() === date.getMonth() &&
//         event.date.getDate() === date.getDate()
//     );
//   };

//   const selectedEvent = getEventByDate(date);

//   const tileContent = ({ date, view }) => {
//     if (view === "month" && getEventByDate(date)) {
//       return (
//         <div className="w-full h-full flex items-center justify-center">
//           <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-1"></span>
//         </div>
//       );
//     }
//     return null;
//   };

//   const tileClassName = ({ date, view }) => {
//     if (view === "month" && getEventByDate(date)) {
//       return "relative text-blue-600 font-semibold";
//     }
//     return "";
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto p-6">
//       {/* Calendar */}
//       <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/2">
//         <h2 className="text-lg font-bold mb-2">Event Calendar</h2>
//         <Calendar
//           onChange={setDate}
//           value={date}
//           tileContent={tileContent}
//           tileClassName={tileClassName}
//         />
//       </div>

//       {/* Event Details */}
//       <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
//         <h2 className="text-lg font-bold mb-4">Event Details</h2>
//         <p className="text-gray-700 mb-2">
//           Selected Date:{" "}
//           <span className="font-medium">{date.toDateString()}</span>
//         </p>

//         {selectedEvent ? (
//           <div>
//             <h3 className="text-xl font-semibold text-blue-600">
//               {selectedEvent.title}
//             </h3>
//             <p className="text-gray-600 mt-2">{selectedEvent.description}</p>
//           </div>
//         ) : (
//           <p className="text-gray-500 italic">No event on this date.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;

/*************************************************/

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// const Events = () => {
//   const [date, setDate] = useState(new Date());

//   const eventDates = [
//     new Date(2025, 7, 3),
//     new Date(2025, 7, 8),
//     new Date(2025, 7, 15),
//   ];

//   // Check if date has event
//   const hasEvent = (date) => {
//     return eventDates.some(
//       (eventDate) =>
//         eventDate.getFullYear() === date.getFullYear() &&
//         eventDate.getMonth() === date.getMonth() &&
//         eventDate.getDate() === date.getDate()
//     );
//   };

//   const tileContent = ({ date, view }) => {
//     if (view === "month" && hasEvent(date)) {
//       return (
//         <div className="w-full h-full flex items-center justify-center">
//           <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-1"></span>
//         </div>
//       );
//     }
//     return null;
//   };

//   const tileClassName = ({ date, view }) => {
//     if (view === "month" && hasEvent(date)) {
//       return "relative text-blue-600 font-semibold";
//     }
//     return "";
//   };

//   return (
//     <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">Academic Event Calendar</h2>
//       <Calendar
//         onChange={setDate}
//         value={date}
//         tileContent={tileContent}
//         tileClassName={tileClassName}
//       />
//       <p className="mt-4 text-gray-700">
//         Selected Date:{" "}
//         <span className="font-medium">{date.toDateString()}</span>
//       </p>
//       {hasEvent(date) && (
//         <p className="text-green-600 mt-2 font-semibold">
//           An event is scheduled on this date.
//         </p>
//       )}
//     </div>
//   );
// };

// export default Events;
