import './QuickActions.css';
function QuickActions({onMarkAll, onReset, onRandom}) {
    return (
        <div className='quick-actions'>
            <button onClick={onMarkAll} className='action-btn success'>Отметить все как выполненное</button>
            <button onClick={onReset} className='action-btn danger'>Сбросить все</button>
            <button onClick={onRandom} className='action-btn random'>Случайная задача</button>
        </div>
    );
}

export default QuickActions;