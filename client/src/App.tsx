import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/purchases');
      const jsonRes = await response.json();
      setData(jsonRes);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
