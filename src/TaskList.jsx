function TaskList() {
    const tasks = [
        { id: 1, title: 'Изучить работу JSX и React', completed: false },
        { id: 2, title: 'Сделать 7 тетрадку по SQL', completed: true },
        { id: 3, title: 'Освоить работу с props и разобраться с компонентами', completed: false },
        { id: 4, title: 'Научиться делать саьтуху)', completed: false }
    ];

    return (
        <div className="task-list">
            <h2>Списочек задачек на попозже</h2>
            <ul>
                {tasks.map(task => (
                    <li 
                      key={task.id}
                      className={task.completed ? 'completed' : 'pending'}
                    >
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;