import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Dragon } from '@/types/dragon';
import toast from 'react-hot-toast';
import api from '@/services/api';
import Button from '@components/Button';

function DragonsList () {
  const [dragons, setDragons] = useState<Dragon[]>([])

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
    alert(`Visualizando detalhes do dragão com ID: ${id}`);
  };

  const handleDeleteDragon = async (id: string) => {
    try {
      await api.delete(`/dragon/${id}`);
      setDragons(dragons.filter(dragon => dragon.id !== id));
      toast.success('Dragão excluido com sucesso')
    } catch {
      toast.error('Houve um erro ao excluir o dragão. Por favor, tente novamente!')
    }
  };

  return (
    <div className="dragons-list">
      <div className='header'>
        <h1>Lista de Dragões</h1>
        <Button
          onClick={() => {}}
        >
          Cadastrar Dragão
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
              >
                Visualizar
              </Button>
              <Button
                onClick={() => handleViewDetails(dragon.id)}
              >
                Alterar
              </Button>
              <Button
                onClick={() => handleDeleteDragon(dragon.id)}
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
