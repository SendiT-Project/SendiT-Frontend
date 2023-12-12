import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l1s8szd', 'template_aqonpc5', e.target, '3QNd17XLk5m-9T7ad')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending email. Please try again.');

        }
      );

    e.target.reset();
  };

  return (
    <div className="container mx-auto p-10 bg-color-secondary">
      <h1 className="text-4xl font-bold mb-4">Contact Us Page</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border">Office</th>
              <th className="p-2 border">Contact Number</th>
              <th className="p-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Nairobi Office</td>
              <td className="p-2 border">+254 123 4567</td>
              <td className="p-2 border">info@nairobioffice.com</td>
            </tr>
            <tr>
              <td className="p-2 border">Kisumu Office</td>
              <td className="p-2 border">+254 987 6543</td>
              <td className="p-2 border">info@kisumuoffice.com</td>
            </tr>
            <tr>
              <td className="p-2 border">Mombasa Office</td>
              <td className="p-2 border">+254 234 5678</td>
              <td className="p-2 border">info@mombasaoffice.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className="max-w-md mx-auto bg-color-secondary p-8 border rounded-md shadow-md">
  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        className="mt-1 p-2 w-full border rounded-md"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-color-tertiary text-white p-2 rounded-md hover:bg-blue-600"
    >
      Send Message
    </button>
  </form>
</div>


    </div>
  );
};

export default Contact;
