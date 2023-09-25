import Diena from "./Diena";
function App(){
    return (
        <>
        <h1>Hi mom</h1>
        <Diena />
        <Diena />
        </>
    );
};
export default App;
/*
import Diena from "./Diena";
function App(){
    return (
        <>
        <h1>Hi mom</h1>
        <Diena nosaukums="pirmdiena"/>
        <Diena nosaukums="otrdiena"/>
        <Diena nosaukums="tresdiena"/>
        </>
    );
}
function Diena(props) {
    return <p> Sodien ir {props.nosaukums}</p>;
}
export default App;