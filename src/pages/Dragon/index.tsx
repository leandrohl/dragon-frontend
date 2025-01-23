import { useEffect, useState } from 'react';
import './styles.scss';
import { Dragon } from '@/types/dragon';
import toast from 'react-hot-toast';
import api from '@services/api';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

function DragonsList () {
  const [dragons, setDragons] = useState<Dragon[]>([])

  const navigate = useNavigate();

  const handleSearchDragons = async () => {
    try {
      const response = await api.get('/dragon');
      
      setDragons(response.sort((a: Dragon, b: Dragon) => a.name.localeCompare(b.name)));
    } catch {
      toast.error('Erro ao buscar dragões')
    }
  }

  useEffect(() => {
    handleSearchDragons()
  }, [])

  const handleViewDetails = (id: string) => {
   navigate(`/dragon/${id}`)
  };

  const handleAddDragon = () => {
    navigate(`/dragon/add`)
   };

   const handleEditDragon = (id: string) => {
    navigate(`/dragon/edit/${id}`)
   };

  const handleDeleteDragon = async (id: string) => {
    try {
      await api.delete(`/dragon/${id}`);
      setDragons(dragons.filter(dragon => dragon.id !== id));
      toast.success('Dragão excluído com sucesso')
    } catch {
      toast.error('Houve um erro ao excluir o dragão. Por favor, tente novamente!')
    }
  };

  return (
    <div className="dragons-list">
      <div className='header'>
        <h1>Lista de Dragões</h1>
        <Button
          onClick={() => handleAddDragon()}
          testid='add-dragon'
        >
          Adicionar Dragão
        </Button>
      </div>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id} className="dragon-card">
            <div>
              <h2>{dragon.name}</h2>
              <p><strong>Tipo:</strong> {dragon.type}</p>
            </div>
            <div className="buttons">
              <Button
                onClick={() => handleViewDetails(dragon.id)}
                testid={`view-dragon-${dragon.id}`}
              >
                Visualizar
              </Button>
              <Button
                onClick={() => handleEditDragon(dragon.id)}
                testid={`edit-dragon-${dragon.id}`}
              >
                Alterar
              </Button>
              <Button
                onClick={() => handleDeleteDragon(dragon.id)}
                testid={`delete-dragon-${dragon.id}`}
              >
                Excluir 
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragonsList;
