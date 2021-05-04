import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setAdminData } from "../store/user/action";
import { GET_ADMIN } from "../graphql/queries";

const useApp = (authorization) => {
  const client = useApolloClient();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const authorizationToken = localStorage.getItem(authorization);

      if (authorizationToken) {
        const res = await client.query({
          query: GET_ADMIN,
          fetchPolicy: "no-cache",
        });

        const { firstname, lastname } = await res.data.admin;

        dispatch(
          setAdminData({
            firstName: firstname,
            lastName: lastname,
            signedIn: true,
            isDataFetched: true,
          })
        );
      } else {
        dispatch(
          setAdminData({
            isDataFetched: true,
          })
        );

        history.replace("/sign-in");
      }

      return {};
    })();
  }, []);
};

export default useApp;
