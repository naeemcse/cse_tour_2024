import React from 'react';

const ContactPage = () => {
  const friends = [
    { name:  'Shihab Udiin Himel ', contact: '01302-982717' },
{ name: 'Rudro mohammad Sohidullah ', contact: '987-654-3210' },
    { name: ' Nayon', contact: '555-123-4567' },
    { name: 'Tarek Muhammad Rony ', contact: 'tarekmahmud500@gmail.com' },
    { name: 'Najmul Islam Naeem', contact: '018672 10 892' },



    // ... add more friends as needed
  ];

  return (
    <div className="container mx-auto mt-8 mb-40">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Contact</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((friend, index) => (
            <tr key={index} className={(index + 1) % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b">{friend.name}</td>
              <td className="py-2 px-4 border-b">{friend.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactPage;
