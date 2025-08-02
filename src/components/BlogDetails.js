import React from 'react';

function BlogDetails() {
  return (
    <div>
      <h1>Blog Details</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>React Learning</strong></li>
        <li><strong>Stephen Biz</strong></li>
        <li>Welcome to learning React!</li>
      </ul>
      
      <h1>Installation</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><strong>Schewzdenier</strong></li>
        <li>You can install React from npm.</li>
      </ul>
    </div>
  );
}

export default BlogDetails;