import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Produto from 'components/Produto';
import NavBar from './NavBar';
import { UsuarioContext } from 'common/context/Usuario';
import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth } from 'Service/firebaseConfig';
import { useHistory } from 'react-router-dom';


function Feira() {
  const {nome, saldo} = useContext(UsuarioContext);
  const history = useHistory();
  const logout = async () => {
    await signOut(auth);
    history.push("/");
  };
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {nome} !</h2>
          <h3> Saldo: R${Number(saldo).toFixed(2)}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
      <Button
        onClick={logout}
      >
      Sair
      </Button>
    </Container>

  )
}

export default Feira;