import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const blockStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '30px',
    width: '100%',
    maxWidth: '1000px',
    margin: '40px auto',
    minHeight: 'calc(100vh / 3)',
    boxSizing: 'border-box'
  };

  const h1Style = {
    textAlign: 'center',
    fontSize: '28px',
    color: '#1c3faa'
  };

  const h2Style = {
    color: '#1c3faa',
    marginTop: '20px'
  };

  const pStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginTop: '15px'
  };

  const ulStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    marginLeft: '20px'
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/* Weather App */}
      <div style={blockStyle}>
        <h1 style={h1Style}>Weather App</h1>
        <p style={pStyle}>
          Простое приложение прогноза погоды с поиском города, картой и графиком температуры. Есть поддержка трёх языков.
        </p>
        <h2 style={h2Style}>Плюсы</h2>
        <ul style={ulStyle}>
          <li>Поиск города и карта</li>
          <li>График температуры</li>
          <li>3 языка интерфейса</li>
        </ul>
        <h2 style={h2Style}>Что улучшить</h2>
        <ul style={ulStyle}>
          <li>Избранные города</li>
          <li>Прогноз на больше дней</li>
        </ul>
      </div>

      {/* Smart Travel Planner */}
      <div style={blockStyle}>
        <h1 style={h1Style}>Smart Travel Planner</h1>
        <p style={pStyle}>
          Планировщик поездки с прогнозом погоды, бюджетом и списком дел. Полезно для организации путешествия.
        </p>
        <h2 style={h2Style}>Плюсы</h2>
        <ul style={ulStyle}>
          <li>Погода по городу</li>
          <li>Учёт бюджета</li>
          <li>To Do List</li>
        </ul>
        <h2 style={h2Style}>Что улучшить</h2>
        <ul style={ulStyle}>
          <li>История поездок</li>
          <li>Анализ расходов</li>
        </ul>
      </div>

      {/* Air Astana */}
      <div style={blockStyle}>
        <h1 style={h1Style}>Air Astana</h1>
        <p style={pStyle}>
          Прототип сайта авиакомпании с онлайн-бронированием билетов и отслеживанием статуса рейса.
        </p>
        <h2 style={h2Style}>Плюсы</h2>
        <ul style={ulStyle}>
          <li>Онлайн-бронирование</li>
          <li>Понятный дизайн</li>
          <li>Отслеживание рейсов</li>
        </ul>
        <h2 style={h2Style}>Что улучшить</h2>
        <ul style={ulStyle}>
          <li>Личный кабинет</li>
          <li>Бонусная программа</li>
        </ul>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <button onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1c3faa',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
          Back to main page
        </button>
      </div>
    </div>
  );
}
