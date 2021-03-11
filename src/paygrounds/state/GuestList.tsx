import { useState } from 'react';

const GuestList: React.FC = () => {
  //everytime we use useSate, if the useSate cannot figure out what type the default value is, we need to specify it
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h1>GuestList</h1>
      <ul>
        {guests.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
