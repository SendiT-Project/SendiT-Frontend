import React from 'react';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l1s8szd', 'template_aqonpc5', e.target, '3QNd17XLk5m-9T7ad')
      .then(
        (result) => {
          console.log(result.text);
          enqueueSnackbar('Email sent successfully!', { variant: 'success' });
        },
        (error) => {
          console.log(error.text);
          enqueueSnackbar('Error sending email. Please check your information and try again.', { variant: 'success' });

        }
      );

    e.target.reset();
  };

  return (
    <div className="container mx-auto p-10 bg-color-secondary">    
      <div className="max-w-md mx-auto bg-color-secondary p-10 border rounded-md shadow-md ">
        <div className='border shadow-md p-10'>
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full text-purple-700 bg-color-secondary border-2 border-black rounded-3xl p-2 hover:bg-color-tertiary"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center mt-20 text-purple-700">Contact Information</h2>
        <table className="w-full border-collapse border border-gray-300 ml-30">
          <thead>
            <tr>
              <th className="p-2 border text-start">Office</th>
              <th className="p-2 border text-start">Contact Number</th>
              <th className="p-2 border text-start">Email</th>
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
    </div>
  );
};

export default Contact;