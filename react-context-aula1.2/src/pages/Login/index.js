import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'Service/firebaseConfig';

function Login() {
  const history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      history.push("/feira");
      console.log(user._tokenResponse.idToken);
    } catch (error) {
      alert("login ou senha incorreto")
      console.log(error.message);
    }
  };



 

  return (
    <Container>
      <Titulo>
        Login
      </Titulo>
      <InputContainer>
        <InputLabel>
          Email
        </InputLabel>
        <Input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Senha
        </InputLabel>
        <Input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
      </InputContainer>
      <Button
        color="primary"
        onClick={login}
        disabled={loginEmail.length < 4 || loginPassword.length < 8}
      >
        Entrar
      </Button>
    </Container>
  )
};

export default Login;