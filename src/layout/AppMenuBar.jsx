
import React from 'react';
import { Menubar as PrimeReactMenubar } from 'primereact/menubar';
import { Avatar as PrimeReactAvatar } from 'primereact/avatar';

const menus = [];


const AppMenuBar = () => {

  const onMenuToggle = () => { };

  const menuIcon = (
    <button type="button" className="p-link layout-menu-button layout-topbar-button mr-3" onClick={onMenuToggle}>
      <i className="pi pi-bars text-xl" />
    </button>
  );

  const start = (
    <div className="flex">
      {menuIcon}
      <span className="text-xl">
        Zesty Finance
      </span>
    </div>
  );

  const avatar = (
    <div className="flex align-items-center gap-2">
      <PrimeReactAvatar icon="pi pi-user" size="large" />
    </div>
  );

  return (
    <div className="app-menu-bar-container">
      <PrimeReactMenubar
        className="app-menu-bar"
        model={menus}
        start={start}
        end={avatar}
      />
    </div>
  );
}

export default AppMenuBar;
