import { useState } from 'react';
import { Form } from './Form';
import { Crud } from './Crud';

function App() {
  const [records, setRecords] = useState([]);

  return (
    <div style={{ padding: '20px' }}>
      <Form onAdd={(newRecord) => setRecords(prev => [...prev, newRecord])} />
      <Crud data={records} />
    </div>
  );
}

export default App;
