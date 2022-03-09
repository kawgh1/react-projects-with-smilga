import "./App.css";
import BasicForm from "./components/BasicForm";
import MultipleInputsForm from "./components/MultipleInputsForm";
import PropDrilling from "./components/PropDrilling";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import ContextAPI from "./components/ContextAPI";
import CustomHookUseFetch from "./components/CustomHookUseFetch";

function App() {
    return (
        <div className="App">
            {/* <BasicForm /> */}
            {/* <MultipleInputsForm /> */}
            {/* <UseRef /> */}
            {/* <UseReducer /> */}
            {/* <PropDrilling /> */}
            {/* <ContextAPI /> */}
            <CustomHookUseFetch />
        </div>
    );
}

export default App;
