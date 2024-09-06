import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JadeList } from "./jade/JadeList";
import { JadeCreate } from "./jade/JadeCreate";
import { JadeEdit } from "./jade/JadeEdit";
import { JadeShow } from "./jade/JadeShow";
import { AuctionList } from "./auction/AuctionList";
import { AuctionCreate } from "./auction/AuctionCreate";
import { AuctionEdit } from "./auction/AuctionEdit";
import { AuctionShow } from "./auction/AuctionShow";
import { BidList } from "./bid/BidList";
import { BidCreate } from "./bid/BidCreate";
import { BidEdit } from "./bid/BidEdit";
import { BidShow } from "./bid/BidShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"JadeTradingPlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Jade"
          list={JadeList}
          edit={JadeEdit}
          create={JadeCreate}
          show={JadeShow}
        />
        <Resource
          name="Auction"
          list={AuctionList}
          edit={AuctionEdit}
          create={AuctionCreate}
          show={AuctionShow}
        />
        <Resource
          name="Bid"
          list={BidList}
          edit={BidEdit}
          create={BidCreate}
          show={BidShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
