/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './styles.scss';
import { Dragon } from '@/types/dragon';
import toast from 'react-hot-toast';
import api from '@services/api';
import { useParams } from 'react-router-dom';

function DragonDetails () {
  const [dragon, setDragon] = useState<Dragon | null>(null)

  const { id } = useParams<{ id: string }>();

  const handleSearchDragonById = async () => {
    try {
      const response = await api.get(`/dragon/${id}`);
      
      setDragon(response);
    } catch {
      toast.error('Erro ao buscar detalhes do dragão')
    }
  }

  useEffect(() => {
    handleSearchDragonById()
  }, [])

  if (!dragon) {
    return <div className="dragon-details">Dragão não encontrado.</div>;
  }

  const formattedDate = new Date(dragon.createdAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="dragon-details">
      <h1 className="title">Detalhes do Dragão</h1>
      <div className="details-container">
        <p>
          <strong>Nome:</strong> {dragon.name}
        </p>
        <p>
          <strong>Tipo:</strong> {dragon.type}
        </p>
        <p>
          <strong>Criado em:</strong> {formattedDate}
        </p>
        <div>
          <strong>Histórico:</strong>
          {dragon.histories.length > 0 ? (
            <ul>
              {dragon.histories.map((history, index) => (
                <li key={index}>{history}</li>
              ))}
            </ul>
          ) : (
            <p>Sem histórico registrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DragonDetails;
