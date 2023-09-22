// import React, { createContext, useContext } from 'react';

// // Create the context
// const InstantChatContext = createContext();

// // Create a function to send emails using Nodemailer
// const sendEmail = async (emailData) => {
//   // Implement your Nodemailer logic here
//   // This function should send emails
//   // You can use async/await to handle asynchronous email sending
//   try {
//     // Your Nodemailer logic here
//     // ...
//     // Example: Sending an email
//     // const info = await transporter.sendMail(emailData);

//     // Return the result or handle errors as needed
//     // return info;
//   } catch (error) {
//     // Handle errors
//     console.error('Error sending email:', error);
//     throw error;
//   }
// };

// const InstantChatProvider = ({ children }) => {
//     return (
//       <InstantChatContext.Provider value={{ sendEmail }}>
//         {children}
//       </InstantChatContext.Provider>
//     );
//   };

// export { InstantChatProvider, useInstantChat };