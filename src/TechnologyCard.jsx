import './TechnologyCard.css';

const statusConfig = {
    'completed': {label: 'DONE', color: '#4ade80'},
    'in-progress': {label: 'LOADING', color: '#60a5fa'},
    'not-started': {label: 'NOT STARTED', color: '#fca5a5'}
}

function TechnologyCard({tech, onStatusChange}) {
    const { label, color } = statusConfig[tech.status];

    return (
        <div className = {`tech-card ${tech.status}`}
        onClick={() => onStatusChange(tech.id)}
        style={{
            borderColor: color,
            boxShadow: `0 8px 20px rgba(0,0,0,0.1)`,
            transition: 'all 0.4s ease'
        }}>
            <div className='card-header'>
                <h3>{tech.title}</h3>
            </div>

            <p className='description'>{tech.desc}</p>

            <div className='card-footer'>
                <span className='category'>{tech.category}</span>
                <span className='status-badge' style={{backgroundColor: color}}>
                    {label}
                </span>
            </div>
            <div className='click-hint'>Нажмите, чтобы изменить статус</div>
        </div>
    );
}

export default TechnologyCard;