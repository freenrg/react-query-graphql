import { useITASQuery } from "./useITASQuery";
import { useQueryClient } from "react-query";

const GET_DEPARTMENTS = `
    query {
        Departments(TradingEntityId: "D1") {
            DepartmentId
        }
    }
`;

const ItasData = () => {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = useITASQuery(
        "departments",
        GET_DEPARTMENTS,
        {}
    );
    console.log("ItasData: ", data);

    return <h1>Hello from ItasQuery</h1>;
};

export default ItasData;

// -----------------------------

// import gql from "graphql-tag";
// import { useITASQuery } from "./useITASQuery";

// const GET_DEPARTMENTS = gql`
//     {
//         Departments(TradingEntityId: "D1") {
//             DepartmentId
//         }
//     }
// `;

// const ItasQuery = () => {
//     const { data, isLoading, error } = useITASQuery(
//         "departments",
//         GET_DEPARTMENTS,
//         {}
//     );
//     console.log(data);

//     return <h1>Hello from ItasQuery</h1>;
// };

// export default ItasQuery;
