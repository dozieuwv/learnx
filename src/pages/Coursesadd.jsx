// const Coursesadd = () => {
//   const tasks = [
//     {
//       id: "1000112251",
//       name: "Principles of Design",
//       date: "01/03/25",
//       time: "19:35pm",
//       facilitator: "John Paul",
//       facilitatorImg: "john_paul.jpg",
//       status: "Submitted",
//     },
//     {
//       id: "1000112258",
//       name: "User Research/ Personas",
//       date: "07/03/25",
//       time: "10:00am",
//       facilitator: "Annabel Francisca",
//       facilitatorImg: "annabel_francisca.jpg",
//       status: "Submitted",
//     },
//     {
//       id: "1000112261",
//       name: "Ideation",
//       date: "05/03/25",
//       time: "--------",
//       facilitator: "John Paul",
//       facilitatorImg: "john_paul.jpg",
//       status: "Pending",
//     },
//     // Empty rows for styling consistency
//     {
//       id: "--------",
//       name: "--------",
//       date: "--------",
//       time: "--------",
//       facilitator: "Annabel Francisca",
//       facilitatorImg: "annabel_francisca.jpg",
//       status: "",
//     },
//     {
//       id: "--------",
//       name: "--------",
//       date: "--------",
//       time: "--------",
//       facilitator: "John Paul",
//       facilitatorImg: "john_paul.jpg",
//       status: "",
//     },
//     {
//       id: "--------",
//       name: "--------",
//       date: "--------",
//       time: "--------",
//       facilitator: "Annabel Francisca",
//       facilitatorImg: "annabel_francisca.jpg",
//       status: "",
//     },
//   ];

//   return (
//     <div className="courseaddcontainer">
//       {/* Header Section */}
//       <div className="addtaskheader">
//         <button className="addweek-btn">Task Submission (Week 3)</button>
//         <div className="adddate-time">
//           <p>
//             <strong>Date:</strong> 14th March, 2025
//           </p>
//           <p>
//             <strong>Time:</strong> 12:00pm
//           </p>
//         </div>
//       </div>

//       {/* Task Submission Table */}
//       <div className="addtable-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Task Tracker ID</th>
//               <th>Task Name</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Facilitator</th>
//               <th>Submit Task</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task, index) => (
//               <tr key={index}>
//                 <td>{task.id}</td>
//                 <td>{task.name}</td>
//                 <td>{task.date}</td>
//                 <td>{task.time}</td>
//                 <td className="facilitator">
//                   <img src={task.facilitatorImg} alt={task.facilitator} />
//                   {task.facilitator}
//                 </td>
//                 <td
//                   className={`status ${
//                     task.status === "Pending" ? "pending" : ""
//                   }`}
//                 >
//                   {task.status}{" "}
//                   {task.status === "Submitted" && (
//                     <span className="checkmark">✔</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Coursesadd;
