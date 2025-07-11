<script type="text/babel">
  const App = () => {
    const estilo = {
      backgroundColor: "#282c34",
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      fontFamily: "Arial"
    };

    return (
      <div style={estilo}>
        <h1>Olá, React com CSS inline!</h1>
        <p>Este é um exemplo usando estilo direto no componente.</p>
        <h1 style={{ color: "blue", fontSize: "30px" }}>Título com estilo direto</h1>

      </div>
    );
  };

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>

css_externo
styles.css
.container {
  background-color:rgb(16, 91, 241);
  color: white;
}

app.js
import "./styles.css";

function App() {
    return <div className="container">backgroundColor Azul</div>;
}

CSS Modules
styles.module.css
.container {
  background-color:rgb(16, 91, 241);
  color: white;
}
app.js
import styles from './styles.module.css'

export default function App() {
    return <div className="container">backgroundColor Azul</div>;
}

CSS-in-JS   
app.js
- Não necessita de arquivos .css
import styled from "styled-components";

const Container = styled.div`
    background-color: lightblue;
    padding: 20px;
`;

export default function App() {
    return <Container>backgroundColor Azul</Container>
}

Sass e outros pré-processadores
styles.scss
$bg-color: lightblue;

.container {
    backgroundColor: $bg-color;
    padding: 20px;
}

app.js
import "./styles.scss";

function App() {
    return <div className="container">backgroundColor Azul</div>;
}

TailwindCSS e outras bibliotecas
app.js
export default function App() {
    return <div className="bg-blue-300 p-5">backgroundColor Azul</div>
}

EXEMPLO DE COMPONENTES DINÂMICOS

function Button({children, variant}) {
  return(
    <button className={variant === 'primary' ? 'bg-purple-500' : 'bg-gray-500'}>
      {children}
    </button>
  )
}

function APP() {
  return (
    <Button variant="primary">Meu botao azul</Button>
  )
}