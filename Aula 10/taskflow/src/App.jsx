import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Baixa");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const saved = localStorage.getItem("@taskflow_data");
    if (saved) setTaskList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("@taskflow_data", JSON.stringify(taskList));

  }, [taskList]);

  const addTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      priority: priority,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
      editing: false,
      editText: "",
      editPriority: "Baixa",
    };

    setTaskList([newTask, ...taskList]);
    setTaskText("");
  };

  const updateTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.map(t => {
      if (t.id !== id) return t;
      const updatedText = t.editText?.trim() || t.text;
      const updatedPriority = t.editPriority || t.priority;
      return {
        ...t,
        text: updatedText,
        priority: updatedPriority,
        editing: false,
      };
    }));
  };

  const handleEditChange = (id, field, value) => {
    setTaskList(taskList.map(t =>
      t.id === id ? { ...t, [field]: value } : t
    ));
  };

  const toggleTask = (id) => {
    setTaskList(taskList.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const toggleEdit = (id) => {
    setTaskList(taskList.map(t => {
      if (t.id !== id) return t;
      if (t.editing) return { ...t, editing: false };
      return {
        ...t,
        editing: true,
        editText: t.text,
        editPriority: t.priority,
      };
    }));
  };

  const deleteTask = (id) => {
    if(confirm("Deletar?")) setTaskList(taskList.filter(t => t.id !== id));
  };

  const filteredTasks = taskList.filter(t => {
    const matchesFilter = () => {
      if (filter === "Pendentes") return !t.completed;
      if (filter === "Concluídas") return t.completed;
      return true;
    };

    const matchesSearch = t.text.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter() && matchesSearch;
  });

  return (
    <div className="app-container">
      <header>
        <h1>TaskFlow</h1>
        <p>Gestão de Produtividade</p>
      </header>
      <section className="search-section">
        <input
          type="text"
          placeholder="Pesquisar tarefas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>
      <section className="form-section">
        <form onSubmit={addTask}>
          <input
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Descrição da tarefa..."
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
          <button type="submit">Criar</button>
        </form>
      </section>

      <section className="filter-section">
        {["Todas", "Pendentes", "Concluídas"].map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

      <main className="task-grid">
        {filteredTasks.map(item => (
          <div key={item.id} className={`task-card ${item.priority.toLowerCase()} ${item.completed
           ? 'done'  : ''}`}>
            <div className="task-content">
              <h3>{item.text}</h3>
              <span>Prioridade: {item.priority}</span>
              <small>Criada em: {item.createdAt}</small>
              <form onSubmit={(e) => updateTask(e, item.id)} className={item.editing ? "" : "hidden"}>
                <input
                  value={item.editText ?? item.text}
                  onChange={(e) => handleEditChange(item.id, "editText", e.target.value)}
                />
                <select
                  value={item.editPriority ?? item.priority}
                  onChange={(e) => handleEditChange(item.id, "editPriority", e.target.value)}
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                </select>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <button type="button" onClick={() => toggleEdit(item.id)}>
                    Cancelar
                  </button>
                  <button type="submit">Salvar</button>
                </div>
              </form>
            </div>
            <div className="task-actions">
              <button onClick={() => toggleTask(item.id)}>
                {item.completed ? "Reabrir" : "Concluir"}
              </button>
              <button onClick={() => toggleEdit(item.id)}>
                {item.editing ? "Cancelar" : "Editar"}
              </button>
              <button onClick={() => deleteTask(item.id)} className="delete">
                Remover
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>

  );
}

export default App;