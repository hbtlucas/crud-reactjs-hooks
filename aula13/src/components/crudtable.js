import React, { useState } from 'react';

const CrudTable = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [editIndex, setEditIndex] = useState(null);

  // Função para lidar com mudanças no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Adicionar novo item ou editar
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Editar
      const updatedData = [...data];
      updatedData[editIndex] = formData;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Adicionar
      setData([...data, formData]);
    }
    setFormData({ name: '', age: '' });
  };

  // Função para editar um item
  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  // Função para excluir um item
  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  return (
    <div>
      <h1>CRUD Simples em React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Idade"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? 'Editar' : 'Adicionar'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
