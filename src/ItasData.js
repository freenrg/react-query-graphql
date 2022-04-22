import { useITASQuery } from "./useITASQuery";
import { useQueryClient } from "react-query";
import { Fragment } from "react";
import { useEffect } from "react/cjs/react.production.min";

const GET_DEPARTMENTS = entityString => `
    query {
        Departments(TradingEntityId: "${entityString}") {
            TradingEntityID
            DepartmentId
        }
    }
`;

const ItasData = ({ entity }) => {
    const queryClient = useQueryClient();

    console.log("GET_DEPARTMENTS(entity):", GET_DEPARTMENTS(entity));

    const { status, data, error, isFetching } = useITASQuery(
        "departments",
        GET_DEPARTMENTS(entity),
        {}
    );
    console.log("ItasData: ", data);
    // console.log("data.Data.Departments: ", data.Data.Departments);

    return (
        <Fragment>
            <br />
            <br />
            <br />
            <br />
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

export default ItasData;
