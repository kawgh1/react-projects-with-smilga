import "./App.css";
import BasicForm from "./components/BasicForm";
import MultipleInputsForm from "./components/MultipleInputsForm";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";

function App() {
    return (
        <div className="App">
            {/* <BasicForm /> */}
            {/* <MultipleInputsForm /> */}
            {/* <UseRef /> */}
            <UseReducer />
        </div>
    );
}

export default App;
