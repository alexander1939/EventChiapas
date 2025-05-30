import React from 'react';
import Header from './Header';
import '../assets/styles/style.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;