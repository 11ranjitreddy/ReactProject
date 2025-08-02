import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="app">
      <h1>BloggerApp</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('book')}>Show Book</button>
        <button onClick={() => setActiveTab('blog')}>Show Blog</button>
        <button onClick={() => setActiveTab('course')}>Show Course</button>
        <button onClick={() => setActiveTab('all')}>Show All</button>
      </div>

      <div className="content">
        {activeTab === 'all' && (
          <>
            <h2>Blog Details</h2>
            <p><strong>React Learning</strong></p>
            <p><strong>Stephen Biz</strong></p>
            <p>Welcome to learning React!</p>

            <h2>Installation</h2>
            <p><strong>Master React</strong></p>
            <p>670</p>
            <p><strong>Deep Dive into Angular 11</strong></p>
            <p>800</p>
            <p><strong>Mongo Essentials</strong></p>
            <p>450</p>
            <p><strong>Angular</strong></p>
            <p>4/5/2021</p>
            <p><strong>React</strong></p>
            <p>6/3/2021</p>
            <hr />
            <p><strong>Schewzdenier</strong></p>
            <p>You can install React from npm.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;