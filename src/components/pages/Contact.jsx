import React from "react";
const Contact = () => {
  return (
    <>
      <h2>Student Contact Form</h2>
      <form
        action="https://formsubmit.co/martin.nogueroles@gmail.com"
        subject="NOREPLY"
        method="POST"
      >
        <p>Name:</p> <input type="text" name="name" />
        <p>Name:</p>
        <input type="text" name="subject" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Contact;
