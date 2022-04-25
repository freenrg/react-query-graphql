import { useState } from "react";
import Departments from "./Departments";
import Dropdown from "./Dropdown";
import "./styles.css";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
    const [selectedEntity, setSelectedEntity] = useState("D1");
    console.log("selectedEntity: ", selectedEntity);

    return (
        <div className='App'>
            <h3>Select: Entity</h3>
            <Dropdown
                selected={selectedEntity}
                setSelected={setSelectedEntity}
            />
            <Departments entity={selectedEntity} />
            <ReactQueryDevtools />
        </div>
    );
};

export default App;
