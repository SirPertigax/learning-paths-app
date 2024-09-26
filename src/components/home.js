import React from 'react';
import { Button } from "@/components/ui/button";

const Home = ({ onNavigate }) => {
  const learningPaths = [
    { id: 1, title: 'Electricidad', path: 'electricity' },
    { id: 2, title: 'Electrónica', path: 'electronics' },
    { id: 3, title: 'Robótica', path: 'robotics' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Caminos de Aprendizaje</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {learningPaths.map((path) => (
          <Button key={path.id} onClick={() => onNavigate(path.path)} className="bg-blue-600 text-white p-4 rounded shadow hover:bg-blue-700">
            {path.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
