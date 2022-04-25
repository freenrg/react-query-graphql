// import { useITASQuery } from "./useITASQuery";
import { useQuery } from "react-query";
import { Fragment } from "react";
// import { useEffect } from "react";
import axios from "axios";

const token = process.env.REACT_APP_ITAS_AUTH_TOKEN;

const Departments = ({ entity }) => {
    const GET_DEPARTMENTS = `
        query {
            Departments(TradingEntityId: "${entity}") {
                TradingEntityID
                DepartmentId
            }
        }
    `;

    console.log(
        "new re-rendering of Departments... GET_DEPARTMENTS(entity):",
        GET_DEPARTMENTS
    );
    console.log("new re-rendering of Departments... entity:", entity);

    const { status, data, error } = useQuery(
        "departments",
        async () => {
            const { data } = await axios({
                method: "post",
                url: process.env.REACT_APP_ITAS_SERVICES_URL,
                headers: {
                    authorization: `bearer ${token}`,
                    "Content-Type": "text/plain",
                },
                data: GET_DEPARTMENTS,
            });
            return data;
        },
        {}
    );

    console.log("Departments ", data);

    return (
        <Fragment>
            <br />
            <br />
            <br />
            <h1>Departments in {entity}</h1>
            <br />
            <br />
            {status === "loading" && <div>Loading data...</div>}

            {status === "error" && <div>Error fetching data: {error}</div>}

            {status === "success" &&
                data.Data.Departments.map(dep => (
                    <div key={dep.DepartmentId}>
                        {dep.TradingEntityId} - {dep.DepartmentId}
                    </div>
                ))}
        </Fragment>
    );
};

export default Departments;

// -------------------------

// Query as a function:
//
// const GET_DEPARTMENTS = entityString => `
//     query {
//         Departments(TradingEntityId: "${entityString}") {
//             TradingEntityID
//             DepartmentId
//         }
//     }
// `;
