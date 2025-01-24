import { useEffect, useState } from 'react';
import './styles.scss';
import { Dragon } from '@/types/dragon';
import toast from 'react-hot-toast';
import api from '@services/api';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import Loading from '@components/Loading';
import DragonCard from '@components/DragonCard';

function DragonsList () {
  const [dragons, setDragons] = useState<Dragon[]>([])
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearchDragons = async () => {
    setLoading(true);
    try {
      const response = await api.get('/dragon');
      
      setDragons(response.sort((a: Dragon, b: Dragon) => a.name.localeCompare(b.name)));
    } catch {
      toast.error('Erro ao buscar dragões')
    } finally {
      setLoading(false)
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

  if (loading) return <Loading />

  return (
    <div className="dragons-list">
      <div className='header'>
        <h1>Lista de Dragões</h1>
        <div className='header-right'>
          <Button
            onClick={() => handleAddDragon()}
            testid='add-dragon'
          >
            Adicionar Dragão
          </Button>
        </div>
      </div>
      <ul>
        {dragons.map((dragon) => (
          <DragonCard
            key={dragon.id}
            dragon={dragon}
            onViewDetails={handleViewDetails}
            onEdit={handleEditDragon}
            onDelete={handleDeleteDragon}
          />
        ))}
      </ul>
    </div>
  );
};

export default DragonsList;
