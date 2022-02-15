import { Fragment, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const onClickHandler = () => {
    console.log("okey");
    setLoading(true);
    axios
      .get("https://randomuser.me/api")
      .then((response) => {
        console.log(response);
        setdata(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  };

  return (
    <div className="App">
      <div className="border">
        <h2>Random User</h2>
        <Button isActive={activeUser} clicked={onClickHandler} />
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            {data.map((data, index) => {
              return (
                <Fragment key={data.cell}>
                  <img src={data.picture.large} alt="pic" />
                  <div>
                    <h1>
                      Name : {data.name.first} {""}
                    </h1>
                    <p> Email : {data.email}</p>
                    <p>City: {data.location.city}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Age: {data.dob.age} years</p>
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
