import React from "react";

import Feed from "../components/Feed";
import recipeMock from "../mock/recipeMock";

const Home = () => <Feed items={recipeMock.results} quantity={10} />;

export default Home;
