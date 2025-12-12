import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TechnologyCard from './TechnologyCard';
import Photo_profile from './assets/photo_profile.jpg';
import { useState, useEffect } from "react";
import Statistics from './Statistics';
import QuickActions from './QuickActions';
import FilterTabs from './FilterTabs';

function App() {

  const [technologies, setTechnologies] = useState(() => {
    const saved = localStorage.getItem('technologies');
    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {id: 1, title: 'JSX и React', desc: 'Изучение работы JSX b React компонентов для контрольной работы', status: 'in-progress', category: 'Frontend', icon: '(-_-)', note: ''},
      {id: 2, title: 'SQL', desc: 'Изучение функций SQL к контрольной работе', status: 'completed', category: 'Backend', icon: '(-^-)', note: ''},
      {id: 3, title: 'C#', desc: 'Изучение базовых функций C# к контрольной работе', status: 'not-started', category: 'Backend', icon: '(>_<)', note: ''},
      {id: 4, title: 'Python', desc: 'Изучение языка Python для решения задач по ИИ и базам данных', status: 'in-progress', category: 'Data Science', icon: '<(-~-)>', note: ''}
    ];
  });

  const [filter, setFilter] = useState('all');
  const [ searchQuery, setSearchQuery ] = useState('');

  useEffect(() => {
    localStorage.setItem('technologies', JSON.stringify(technologies));
  }, [technologies]);

  const markAllCompleted = () => {
    setTechnologies(prev => prev.map(t => ({...t, status: 'completed'})));
  }

  const resetAll = () => {
    setTechnologies(prev => prev.map(t => ({...t, status: 'not-started'})));
  }

  const pickRandom = () => {
    const notCompleted = technologies.filter(t => t.status !== 'completed');
    if (notCompleted.length === 0) return;
    const random = notCompleted[Math.floor(Math.random() * notCompleted.length)];
    setTechnologies(prev => prev.map(t => t.id === random.id ? {...t, status: 'in-progress'}: t));
  };

  const updateStatus = (id) => {
    setTechnologies(prev => prev.map(t => {
      if (t.id ===  id) {
        const order = ['not-started', 'in-progress', 'completed'];
        const next = (order.indexOf(t.status) + 1) % 3;
        return {...t, status: order[next]};
      }
      return t;
    }));
  };

  const updateNote = (id, newNote) => {
    setTechnologies(prev =>prev.map(t => t.id === id ? {...t, note: newNote} : t));
  };

  const filteredTechs = technologies
  .filter(t => filter === 'all' || t.status === filter)
  .filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resultCount = filteredTechs.length;

  return (
    <div className='App'>
      <Greeting />
      <UserCard 
        name="Оля Гузаирова"
        role="Глав админ или просто чел"
        avatarUrl={Photo_profile}
        isOnline={true} 
      />
      <header className="App-header">
        <h1>Что-то на потом, возможно</h1>
        <Statistics technologies={technologies} />
      </header>

      <div className='search-bar'>
        <input
          type='text'
          placeholder='Поиск по названию или описанию'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='search-input'
        />
        <span className='result-search'>
          Найдено: {resultCount} {resultCount === 1 ? 'технология' : 'технологии(й)'}
        </span>
      </div>

      <QuickActions onMarkAll={markAllCompleted}
      onReset={resetAll}
      onRandom={pickRandom} />

      <FilterTabs currentFilter={filter} onFilterChange={setFilter} />

      <main className="tech-grid">
        {filteredTechs.length === 0 ? (
          <p className="empty-message">
            Ничего не найдено по фильтру "{filter}"
          </p>
        ) : (
          filteredTechs.map(tech => (
            <TechnologyCard 
              key={tech.id} 
              tech={tech} 
              onStatusChange={updateStatus}
              onNoteChange={updateNote}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
