import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from 'axios'

const Home = ({type}) => {

  const [lists,setLists]=useState([])
  const [genre,setGenre]=useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjRmNzJmZjRhMmI1MDQ1MDM1NjFmMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTMyNDMyNiwiZXhwIjoxNjM5NzU2MzI2fQ.P72XCYDwxVfC7faFvR6M9LQdTNdCl-rxkMI_GAOM-8Y",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
