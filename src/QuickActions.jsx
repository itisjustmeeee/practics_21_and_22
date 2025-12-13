import './QuickActions.css';
import Modal from './Modal';
import { useState } from 'react';

const QuickActions = ({onMarkAll, onReset, onRandom, onExport}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleAction = (type) => {
        setModalType(type);
        setModalOpen(true);
    };

    const confirmAction = () => {
        if (modalType === 'complete') onMarkAll();
        if (modalType === 'reset') onReset();
        if (modalType === 'export') onExport();
        setModalOpen(false);
    };
    
    return (
        <>
            <div className='quick-actions'>
                <button onClick={() => handleAction('complete')}>Отметить все как выполненное</button>
                <button onClick={() => handleAction('reset')}>Сбросить все</button>
                <button onClick={onRandom}>Случайная задача</button>
                <button onClick={() => handleAction('export')}>Экспорт данных</button>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Подтверждение">
                <p>
                    {modalType === 'complete' && 'Отметить все технологии как выполненные?'}
                    {modalType === 'reset' && 'Сбросить все статусы и заметки?'}
                    {modalType === 'export' && 'Скачать данные в JSON?'}
                </p>
                <div style={{textAlign: 'right', marginTop: '20px'}}>
                    <button onClick={() => setModalOpen(false)} style={{marginRight: '10px'}}>Отмена</button>
                    <button onClick={confirmAction}>Подтвердить</button>
                </div>
            </Modal>
        </>
    );
};

export default QuickActions;