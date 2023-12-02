import React from 'react';

const Contact = () => {
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

      <div>
        <h2 className="text-2xl font-bold mb-2">Working Hours</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border">Office</th>
              <th className="p-2 border">Monday-Friday</th>
              <th className="p-2 border">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Nairobi Office</td>
              <td className="p-2 border">9:00 AM - 6:00 PM</td>
              <td className="p-2 border">9:00 AM - 2:00 PM</td>
            </tr>
            <tr>
              <td className="p-2 border">Kisumu Office</td>
              <td className="p-2 border">8:30 AM - 5:30 PM</td>
              <td className="p-2 border">9:00 AM - 1:00 PM</td>
            </tr>
            <tr>
              <td className="p-2 border">Mombasa Office</td>
              <td className="p-2 border">9:30 AM - 6:30 PM</td>
              <td className="p-2 border">10:00 AM - 3:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
