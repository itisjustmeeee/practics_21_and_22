import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';

function App() {
  return (
    <div className='App'>
      <Greeting />
      <UserCard 
        name="Оля Гузаирова"
        role="Глав админ или просто чел"
        avatarUrl="/photo_profile.jpg"
        isOnline={true} 
      />
      <TaskList />
    </div>
  );
}

export default App;
