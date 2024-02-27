import { sendCustomEmail } from "./email";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      name: formData.get("name"),
    };

    try {
      await sendCustomEmail(payload);
      showSuccessMessage();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const showSuccessMessage = () => {
    alert(
      "Thank you for reaching out. I will get back to you within 3 business days."
    );
    window.location.reload();
  };

  return (
    <section id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center">
          I would love to hear from you! Please fill out the form below with
          your information, and I’ll get back to you within 3 business days.
        </p>
        <form
          action="#"
          method="POST"
          className="space-y-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-brandblue"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-brandgreen"
              placeholder="E.g. Dylan Luc"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-brandblue"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring focus:ring-brandgreen"
              placeholder="nguyd.luc@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-brandblue"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-brandgreen"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-brandblue"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring focus:ring-brandgreen"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-brandoffwhite bg-brandblue hover:bg-brandbeige hover:text-brandblue rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 duration-500"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
