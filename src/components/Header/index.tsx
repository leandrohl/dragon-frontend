import Button from '../Button';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  onLogout: () => void;
};

function Header({ onLogout }: HeaderProps) {
  const navigate = useNavigate();
  
  const handleAddDragon = () => {
    navigate(`/dragon/add`)
  };

  const handleHome = () => {
    navigate(`/dragons`)
  };

  return (
    <header className="header">
      <h1 className="header-title" onClick={handleHome}>Home</h1>
      <div className="header-buttons">
        <Button onClick={handleAddDragon} testid='add-dragon'>
          Adicionar Dragão
        </Button>
        <Button variant='secondary' onClick={onLogout}>
          Sair
        </Button>
      </div>
    </header>
  );
};

export default Header;