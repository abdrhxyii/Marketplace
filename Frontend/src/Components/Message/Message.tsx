// const Message = () => {
//   const messages = [
//     { id: 1, text: 'Hello, how are you?', sender: 'John Doe', type: 'received' },
//     { id: 2, text: 'I am good, thanks! How about you?', sender: 'Jane Smith', type: 'sent' },
//     { id: 3, text: 'I am doing well, thank you!', sender: 'John Doe', type: 'received' },
//     { id: 4, text: 'That’s great to hear!', sender: 'Jane Smith', type: 'sent' },
//     { id: 5, text: 'Let’s catch up soon.', sender: 'John Doe', type: 'received' },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="max-w-md w-full bg-white shadow-md rounded-lg flex flex-col">
//         <div className="flex-1 p-4 overflow-y-auto">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex mb-4 ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div
//                 className={`max-w-xs w-auto p-3 rounded-lg ${
//                   message.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
//                 }`}
//               >
//                 <div className="text-sm">{message.sender}</div>
//                 <div>{message.text}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="p-4 bg-gray-200 border-t border-gray-300">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
