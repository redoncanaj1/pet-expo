import React, { useState } from "react";
import EmailLink from "../components/EmailLink"

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    setFormSubmitted(true)
  };
  
  return (
    <div className=" bg-neutral-50 min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <section className=" bg-gradient-to-r from-blue-500 to-teal-500 dark:bg-gray-900 rounded-lg shadow-xl p-8 lg:p-16 max-w-screen-md w-full ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white ">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
          Let us know.
        </p>

        {formSubmitted ? (
          <div className="text-center text-white dark:text-green-400">
            The message was sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 ">
            
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
              onChange={e => setSubject(e.target.value)}
                type="text"
                value={subject}
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
              onChange={e => setMessage(e.target.value)}
              value={message}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <EmailLink
                email='redoncanaj1@gmail.com'
                subject={subject}
                body={message}
                onClick={handleSubmit}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 sm:w-fit hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 transition ease-in-out duration-300 transform hover:scale-105"
            >
              Send message
            </EmailLink>

          </form>
        )}
      </section>
    </div>
  );
};

export default Contact;
