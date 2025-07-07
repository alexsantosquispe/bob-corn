import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/data");
      const jsonRes = await response.json();
      setData(jsonRes);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
