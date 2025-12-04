import './FilterTabs.css';

const filters = [
    {id: 'all', label: 'Все', icon: 'All'},
    {id: 'not-started', label: 'Не начато', icon: 'To Do'},
    {id: 'in-progress', label: 'В процессе', icon: 'In Progress'},
    {id: 'completed', label: 'Завершено', icon: 'Done'},
];

function FilterTabs({currentFilter, onFilterChange}) {
    return (
        <div className='filter-tabs'>
            {filters.map(f => (
                <button key={f.id} className={`filter-btn ${currentFilter === f.id ? 'active' : ''}`}
                onClick={() => onFilterChange(f.id)}>
                    <span className='filter-icon'>{f.icon}</span>
                    {f.label}
                </button>
            ))}
        </div>
    );
}

export default FilterTabs;