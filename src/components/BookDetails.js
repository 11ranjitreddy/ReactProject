import React from 'react';

function BookDetails() {
  return (
    <div>
      <h1>Book Details</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>Master React</strong></li>
        <li>670</li>
        <li><strong>Deep Dive into Angular 11</strong></li>
        <li>800</li>
        <li><strong>Mongo Essentials</strong></li>
        <li>450</li>
      </ul>
    </div>
  );
}

export default BookDetails;