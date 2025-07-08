import { useEffect } from 'react';
import { Navbar } from './components/atoms/Navbar';
import { Hero } from './components/organisms/Hero';
import { OurService } from './components/organisms/OurService';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/purchases');
      const jsonRes = await response.json();
      console.log(jsonRes);
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex w-full flex-col">
        <Hero />
        <OurService />
      </main>
    </div>
  );
}

export default App;
