import { useEffect, useState } from "react";
import axios from 'axios';


const getURl = (page) => `https://randomuser.me/api?page=${page}`;


function BenAwardReactQuestions() {
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(1);
  const [apiData, setApiData] = useState([]);

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const fetchApiData = async () => {
    const data = await axios.get(getURl(page)).then(response => response.data.results);
    setApiData(apiData => [...apiData, ...data])
    setPage(page + 1);
  };


  useEffect(() => {
    fetchApiData();
  }, [])




  return (
    <div>
      <p>Cont: {counter}</p>
      <button onClick={handleIncrement}>
        Increment Count
      </button>
      <h1>USer Information Section</h1>
      {
        apiData.map((data, index) => (
          <div key={index}>
            <div>
              Name: {[data.name.title, data.name.first, data.name.last].join(' ')}
            </div>

            <img src={data.picture.large} alt="Profile" style={{ objectFit: "cover" }} />

          </div>
        ))
      }
      <button onClick={fetchApiData}>Display Data</button>
      <button onClick={fetchApiData}>Load More users</button>
    </div>
  );
}

export default BenAwardReactQuestions;
