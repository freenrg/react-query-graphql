import gql from "graphql-tag";
import { useState } from "react";
import { useGQLQuery } from "./useGQLQuery";
import ItasData from "./ItasData";
import Dropdown from "./Dropdown";
import "./styles.css";

const GET_COUNTRIES = gql`
    query {
        countries {
            code
            name
        }
    }
`;

const App = () => {
    const [selectedEntity, setSelectedEntity] = useState("D1");

    const { data, isLoading, error } = useGQLQuery(
        "countries",
        GET_COUNTRIES,
        {}
    );
    console.log(data);
    console.log("selectedEntity: ", selectedEntity);

    if (isLoading) return <div>Loading ...</div>;
    if (error) return <div>Something went wrong ...</div>;

    return (
        <div>
            <h3>Select: Entity</h3>
            <Dropdown
                selected={selectedEntity}
                setSelected={setSelectedEntity}
            />
            <ItasData entity={selectedEntity} />

            {/* {data.countries.map(country => (
                <div key={country.name}>{country.name}</div>
            ))} */}
        </div>
    );
};

export default App;
