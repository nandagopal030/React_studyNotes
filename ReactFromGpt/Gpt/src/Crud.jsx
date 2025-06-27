// File: src/Crud.jsx
import './crud.css';
import { useEffect, useState } from 'react';

export const Crud = ({ data }) => {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(stored);
  }, [data]);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(records[index]);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm({ ...editForm, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSave = () => {
    const updated = [...records];
    updated[editingIndex] = editForm;
    localStorage.setItem('records', JSON.stringify(updated));
    setRecords(updated);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    localStorage.setItem('records', JSON.stringify(updated));
    setRecords(updated);
  };

  const filteredRecords = records.filter(record =>
    Object.values(record).join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            {Object.keys(records[0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((rec, index) => (
            <tr key={index}>
              {Object.keys(rec).map((key) => (
                <td key={key}>
                  {editingIndex === index ? (
                    <input
                      name={key}
                      value={key === 'remember' ? undefined : editForm[key]}
                      checked={key === 'remember' ? editForm[key] : undefined}
                      type={typeof rec[key] === 'boolean' ? 'checkbox' : 'text'}
                      onChange={handleEditChange}
                    />
                  ) : (
                    rec[key]?.toString()
                  )}
                </td>
              ))}
              <td className="actions">
                {editingIndex === index ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
