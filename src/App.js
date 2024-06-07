import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    axios.get('/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const addData = () => {
    axios.post('/api/data', { name, age })
      .then(response => {
        setData([...data, response.data]);
        setName('');
        setAge('');
      })
      .catch(error => console.error('Error adding data: ', error));
  };

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.name} - {item.age}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <button onClick={addData}>Add Data</button>
      </div>
    </div>
  );
};

export default App;

