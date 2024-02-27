import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_email: details.from_email,
        subject: details.subject,
        message: details.message,
        from_name: details.name,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { sendCustomEmail };
