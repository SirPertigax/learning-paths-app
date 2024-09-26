import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from './contexts/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import LearningPathBoxes from './components/LearningPathBoxes';
import { electricityPathData } from './data/electricityPathData';

const App = () => {
  const auth = useAuth();
  const [currentRoute, setCurrentRoute] = useState('home');

  const navigateTo = (route) => {
    setCurrentRoute(route);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'login':
        return <Login onLogin={() => navigateTo('home')} />;
      case 'electricity':
        return (
          <LearningPathBoxes 
            pathData={electricityPathData} 
            canEdit={auth.user && (auth.user.role === 'admin' || auth.user.role === 'teacher')} 
          />
        );
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <Button onClick={() => navigateTo('home')} className="mr-4">Home</Button>
        {auth.user ? (
          <>
            <span className="mr-4">Welcome, {auth.user.username}</span>
            <Button onClick={() => { auth.logout(); navigateTo('home'); }}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => navigateTo('login')}>Login</Button>
        )}
      </nav>
      {renderContent()}
    </div>
  );
};

export default App;
