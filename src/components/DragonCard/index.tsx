import React from 'react';
import './styles.scss'; 
import Button from '../Button';

interface DragonCardProps {
  dragon: {
    id: string;
    name: string;
    type: string;
  };
  onViewDetails: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DragonCard: React.FC<DragonCardProps> = ({ dragon, onViewDetails, onEdit, onDelete }) => {
  return (
    <li key={dragon.id} className="dragon-card">
      <div>
        <h2>{dragon.name}</h2>
        <p><strong>Tipo:</strong> {dragon.type}</p>
      </div>
      <div className="buttons">
        <Button
          onClick={() => onViewDetails(dragon.id)}
          testid={`view-dragon-${dragon.id}`}
        >
          Visualizar
        </Button>
        <Button
          onClick={() => onEdit(dragon.id)}
          testid={`edit-dragon-${dragon.id}`}
        >
          Alterar
        </Button>
        <Button
          onClick={() => onDelete(dragon.id)}
          testid={`delete-dragon-${dragon.id}`}
          variant='secondary'
        >
          Excluir
        </Button>
      </div>
    </li>
  );
};

export default DragonCard;
