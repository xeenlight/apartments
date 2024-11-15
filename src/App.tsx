import React from 'react';
import ApartmentDetail from '../src/ApartmentDetail/ApartmentDetail'; // Импортируем компонент
import { GlobalStyle } from './Global.style'; // Импортируем глобальные стили

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />  {/* Добавляем глобальные стили здесь */}
      <div className="App">
        <h1>Детали квартиры</h1>
        <ApartmentDetail /> {/* Вставляем компонент для отображения данных о квартире */}
      </div>
    </>
  );
};

export default App;
