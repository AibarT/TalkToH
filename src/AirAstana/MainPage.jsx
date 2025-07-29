import { useState, useEffect } from "react"
import './Style.css'
import axios from "axios"

function MainPage() {
    const [page, setPage] = useState('buy')
    const [name, setName] = useState('')
    const [surename, setSurename] = useState('')
    const [brth, setBrth] = useState('')
    const [addr, setAddr] = useState('')
    const [num, setNum] = useState('')
    const [islog, setIsLog] = useState(false)
    const [ticks, setTicks] = useState([])
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [departDate, setDepartDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [budget, setBudget] = useState("")
    const [passengers, setPassengers] = useState(1)
    const [flightClass, setFlightClass] = useState("economy")

    useEffect(() => {
        axios.get('https://68578eda21f5d3463e557cff.mockapi.io/api/project/tickets')
            .then((response) => setTicks(response.data))
            .catch(error => console.error('Error fetching tickets:', error))
    }, [])
    useEffect(()=>{
    alert('Билет нашелся и забронирован')
    }, [ticks])

function Send() {
  if (
    !from.trim() ||
    !to.trim() ||
    !departDate.trim() ||
    !returnDate.trim() ||
    !budget.trim() ||
    !passengers || 
    !flightClass.trim()
  ) {
    alert('Заполните все поля!');
    return;
  }

  const newTicket = {
    from: from,
    to: to,
    departDate: departDate,
    returnDate: returnDate,
    budget: budget,
    passengers: passengers,
    class: flightClass,
    status: "confirmed"
  };

  axios.post('https://68578eda21f5d3463e557cff.mockapi.io/api/project/tickets', newTicket)
    .then(() => {
      setTicks([...ticks, newTicket]);
      setFrom('');
      setTo('');
      setDepartDate('');
      setReturnDate('');
      setBudget('');
      setPassengers(1);
      setFlightClass('economy');
    })
    .catch(error => console.error('Error adding ticket:', error));
}

    return (
        <div className="main-container">
            <header className="header">
                <div className="header-content">
                    <img src="https://assets-eu-01.kc-usercontent.com/d5eab2ce-d0cf-0106-dfb7-ff2154f01a04/2086c70e-4b88-441a-a57d-17254a69150c/Logo.png?fm=webp&q=80&auto=format" 
                         alt="Air Astana" 
                         className="logo" />
                    <nav className="nav-links">
                        <div className={`nav-link ${page === 'buy' ? 'active' : ''}`} onClick={() => setPage('buy')}>Купить билеты</div>
                        <div className={`nav-link ${page === 'check' ? 'active' : ''}`} onClick={() => setPage('check')}>Моя бронь</div>
                        <div className={`nav-link ${page === 'login' ? 'active' : ''}`} onClick={() => setPage('login')}>
                        {islog ? 'Мой аккаунт' : 'Войти'}
                        </div>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                {page === 'login' ? (
                    <div className="login-container">
                        {!islog ? (
                            <div className="login-form">
                                <h2>Регистрация</h2>
                                <div className="form-row">
                                    <input className="input-field" type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                                    <input className="input-field" type="text" placeholder="Фамилия" value={surename} onChange={(e) => setSurename(e.target.value)} />
                                </div>
                                <input className="input-field" type="date" placeholder="День рождения" value={brth} onChange={(e) => setBrth(e.target.value)} />
                                <input className="input-field" type="text" placeholder="Страна" value={addr} onChange={(e) => setAddr(e.target.value)} />
                                <input className="input-field" type="tel" placeholder="Номер телефона" value={num} onChange={(e) => setNum(e.target.value)} />
                                <button className="submit-btn" onClick={() => setIsLog(true)}>Зарегистрироваться</button>
                            </div>
                        ) : (
                            <div className="account-info">
                                <h2>Мой профиль</h2>
                                <div className="profile-card">
                                    <h3>{name} {surename}</h3>
                                    <p><strong>Дата рождения:</strong> {brth}</p>
                                    <p><strong>Страна:</strong> {addr}</p>
                                    <p><strong>Телефон:</strong> {num}</p>
                                    <button className="logout-btn" onClick={() => setIsLog(false)}>Выйти</button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : page === 'buy' ? (
                    <div className="booking-container">
                        <h2>Поиск рейсов</h2>
                        <div className="booking-form">
                            <div className="form-row">
                                <div className="input-group">
                                    <label>Откуда</label>
                                    <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Город или аэропорт" />
                                </div>
                                <div className="input-group">
                                    <label>Куда</label>
                                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Город или аэропорт" />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="input-group">
                                    <label>Дата вылета</label>
                                    <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <label>Дата возвращения</label>
                                    <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="input-group">
                                    <label>Пассажиры</label>
                                    <select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
                                        {[1, 2, 3, 4, 5, 6].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Класс</label>
                                    <select value={flightClass} onChange={(e) => setFlightClass(e.target.value)}>
                                        <option value="economy">Эконом</option>
                                        <option value="business">Бизнес</option>
                                        <option value="first">Первый класс</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Бюджет ($)</label>
                                    <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Максимальная цена" />
                                </div>
                            </div>
                            
                            <button className="search-btn" onClick={Send}>Найти рейсы</button>
                        </div>
                    </div>
                ) : (
                    <div className="bookings-container">
                        <h2>Мои бронирования</h2>
                        {ticks.length === 0 ? (
                            <p className="no-bookings">У вас нет активных бронирований</p>
                        ) : (
                            <div className="tickets-list">
                                {ticks.map((tick, index) => (
                                    <div key={index} className="ticket-card">
                                        <div className="ticket-header">
                                            <h3>{tick.from} → {tick.to}</h3>
                                            <span className={`status ${tick.status}`}>{tick.status}</span>
                                        </div>
                                        <div className="ticket-details">
                                            <p><strong>Дата вылета:</strong> {tick.departDate}</p>
                                            <p><strong>Дата возвращения:</strong> {tick.returnDate}</p>
                                            <p><strong>Пассажиры:</strong> {tick.passengers}</p>
                                            <p><strong>Класс:</strong> {tick.class}</p>
                                            <p><strong>Бюджет:</strong> ${tick.budget}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Air Astana. Все права защищены.(вообще-то нет)</p>
                    <div className="footer-links">
                        <a href="">Условия использования</a>
                        <a href="/Политика.html" target="_blank" rel="noopener noreferrer" >Политика конфиденциальности</a>
                        <a href="https://www.tiktok.com/@blyat_pochemu_dlya_.5">Контакты</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainPage