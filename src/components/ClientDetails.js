import React from 'react'

const ClientDetails = ({ clientName, clientAddress }) => {
  return (
    <div>
      <section className="mt-8">
        <h2 className="uppercase text-2xl font-bold mb-1 md:text-4xl">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </div>
  );
}

export default ClientDetails;
