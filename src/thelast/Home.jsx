// Home.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const characters = [
  { id: "napoleon", name: "Наполеон", icon: "🪖", color: "#fdc2c2ff", darkColor: "#624545" },
  { id: "einstein", name: "Эйнштейн", icon: "🧠", color: "#c6d4ffff", darkColor: "#2E3A87" },
  { id: "cleopatra", name: "Клеопатра", icon: "👑", color: "#FEF3C7", darkColor: "#8C7845" },
  { id: "tesla", name: "Тесла", icon: "⚡", color: "#c1ded0ff", darkColor: "#1A5C4E" },
  { id: "lincoln", name: "Линкольн", icon: "🎩", color: "#EDE9FE", darkColor: "#4B3D87" },
  { id: "daVinci", name: "Да Винчи", icon: "🎨", color: "#f7d9eaff", darkColor: "#8C4562" },
];

const getRandomColor = (name) => {
  const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", 
    "#98D8C8", "#F06292", "#7986CB", "#9575CD"
  ];
  const hash = name.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  return colors[hash % colors.length];
};

const Home = () => {
  const defaultCharacters = [
  { id: "napoleon", name: "Наполеон", icon: "🪖", color: "#fdc2c2ff", darkColor: "#624545" },
  { id: "einstein", name: "Эйнштейн", icon: "🧠", color: "#c6d4ffff", darkColor: "#2E3A87" },
  { id: "cleopatra", name: "Клеопатра", icon: "👑", color: "#FEF3C7", darkColor: "#8C7845" },
  { id: "tesla", name: "Тесла", icon: "⚡", color: "#c1ded0ff", darkColor: "#1A5C4E" },
  { id: "lincoln", name: "Линкольн", icon: "🎩", color: "#EDE9FE", darkColor: "#4B3D87" },
  { id: "daVinci", name: "Да Винчи", icon: "🎨", color: "#f7d9eaff", darkColor: "#8C4562" },
  ];
  const [characters, setCharacters] = useState(() => {
  const saved = localStorage.getItem("characters");
  return saved ? JSON.parse(saved) : defaultCharacters;
  });
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountCard, setShowAccountCard] = useState(false);
  const [showSettingsCard, setShowSettingsCard] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false); // NEW
  const [newCharacter, setNewCharacter] = useState({ name: "", icon: "", color: "#ddd" });
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [formData, setFormData] = useState({
    nickname: userData.nickname || "Гость",
    avatar: userData.avatar || "",
    password: userData.password || ""
  });
  
  const accountCardRef = useRef(null);
  const settingsCardRef = useRef(null);
  const menuRef = useRef(null);

  // Применяем тему при загрузке и изменении
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const avatarColor = getRandomColor(formData.nickname);
  const avatarLetter = formData.nickname.charAt(0).toUpperCase();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
      if (accountCardRef.current && !accountCardRef.current.contains(event.target)) {
        setShowAccountCard(false);
      }
      if (settingsCardRef.current && !settingsCardRef.current.contains(event.target)) {
        setShowSettingsCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleAccountClick = () => {
    setShowAccountCard(true);
    setShowMenu(false);
  };

  const handleSettingsClick = () => {
    setShowSettingsCard(true);
    setShowMenu(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedUser = {
      ...userData,
      nickname: formData.nickname,
      password: formData.password,
      avatar: formData.avatar
    };
    
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUserData(updatedUser);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setFormData({
      nickname: userData.nickname,
      avatar: userData.avatar,
      password: userData.password
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  useEffect(() => {
  localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);


  const handleAddCharacter = () => {
  if (!newCharacter.name || !newCharacter.icon || !newCharacter.color) return;

  const id = newCharacter.name.toLowerCase().replace(/\s+/g, "-");
  const newChar = {
    id,
    name: newCharacter.name,
    icon: newCharacter.icon,
    color: newCharacter.color,
    darkColor: "#333"
  };

  setCharacters(prev => [...prev, newChar]);
  setNewCharacter({ name: "", icon: "", color: "#ddd" });
  setShowAddCard(false); // <--- Закрытие окна после добавления
};


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="home-container">
      <header className="app-header">
        <h1 className="app-title">HistoryChat</h1>
        <div className="header-controls">
          <div className="menu-container" ref={menuRef}>
            <button 
              className="menu-button"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Меню пользователя"
            >
              <span className="menu-dots">⋯</span>
            </button>
            
            {showMenu && (
              <div className="dropdown-menu">
                <div className="user-info">
                  {userData.avatar ? (
                    <img src={userData.avatar} alt="Аватар" className="user-avatar" />
                  ) : (
                    <div className="avatar-placeholder" style={{ backgroundColor: avatarColor }}>
                      {avatarLetter}
                    </div>
                  )}
                  <span className="user-name">{formData.nickname}</span>
                </div>
                <hr className="menu-divider" />
                <button className="menu-item" onClick={handleAccountClick}>
                  <span className="menu-icon">👤</span>
                  <span>Аккаунт</span>
                </button>
                <button className="menu-item" onClick={handleSettingsClick}>
                  <span className="menu-icon">⚙️</span>
                  <span>Настройки</span>
                </button>
                <button className="menu-item logout" onClick={handleLogout}>
                  <span className="menu-icon">🚪</span>
                  <span>Выйти</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="main-content">
        <h2 className="characters-title">Выберите историческую личность</h2>
        <div className="character-grid">
          {characters.map((char) => (
            <div 
              key={char.id} 
              className="character-card"
              style={{ backgroundColor: char.color }}
              onClick={() => navigate(`/chat/${char.id}`)}
            >
              <div className="character-icon">{char.icon}</div>
              <div className="character-name">{char.name}</div>
            </div>
          ))}

          {/* NEW: Кнопка добавления */}
          <div 
            className={`character-card add-card ${showAddCard ? "expanded" : ""}`} 
            onClick={() => setShowAddCard(true)}
            style={{ backgroundColor: "#e0e0e0", justifyContent: "center", alignItems: "center" }}
          >
            {!showAddCard ? (
              <div className="plus-icon" style={{ fontSize: "3rem" }}>+</div>
            ) : (
              <div className="add-form">
                <input 
                  type="text" 
                  placeholder="Имя персонажа" 
                  value={newCharacter.name}
                  onChange={e => setNewCharacter({ ...newCharacter, name: e.target.value })}
                />
                <input 
                  type="text" 
                  placeholder="Смайлик" 
                  value={newCharacter.icon}
                  onChange={e => setNewCharacter({ ...newCharacter, icon: e.target.value })}
                />
                <input 
                  type="color" 
                  value={newCharacter.color}
                  onChange={e => setNewCharacter({ ...newCharacter, color: e.target.value })}
                />
                <button onClick={handleAddCharacter}>Добавить</button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Карточка аккаунта */}
      {showAccountCard && (
        <div className="account-card-overlay">
          <div 
            className={`account-card ${showAccountCard ? "slide-in" : ""}`}
            ref={accountCardRef}
          >
            <div className="account-card-header">
              <h3>Ваш аккаунт</h3>
              <button 
                className="close-button"
                onClick={() => setShowAccountCard(false)}
              >
                ×
              </button>
            </div>
            
            <div className="account-card-body">
              <div className="avatar-section">
                {formData.avatar ? (
                  <img src={formData.avatar} alt="Аватар" className="account-avatar" />
                ) : (
                  <div 
                    className="account-avatar-placeholder"
                    style={{ backgroundColor: avatarColor }}
                  >
                    {avatarLetter}
                  </div>
                )}
                
                {isEditing && (
                  <div className="avatar-upload">
                    <label htmlFor="avatar-upload" className="upload-button">
                      Изменить аватар
                    </label>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>
              
              <div className="account-info">
                <div className="info-row">
                  <label>Email:</label>
                  <div className="info-value">{userData.email}</div>
                </div>
                
                <div className="info-row">
                  <label>Имя пользователя:</label>
                  <div className="info-value">{userData.nickname}</div>
                </div>
                
                <div className="info-row">
                  <label>Пароль:</label>
                  {isEditing ? (
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="edit-input"
                    />
                  ) : (
                    <div className="info-value">••••••••</div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="account-card-footer">
              {isEditing ? (
                <>
                  <button className="save-button" onClick={handleSaveClick}>
                    Сохранить
                  </button>
                  <button className="cancel-button" onClick={handleCancelClick}>
                    Отмена
                  </button>
                </>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  Редактировать
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Карточка настроек */}
      {showSettingsCard && (
        <div className="account-card-overlay">
          <div 
            className={`account-card ${showSettingsCard ? "slide-in" : ""}`}
            ref={settingsCardRef}
          >
            <div className="account-card-header">
              <h3>Настройки</h3>
              <button 
                className="close-button"
                onClick={() => setShowSettingsCard(false)}
              >
                ×
              </button>
            </div>
            
            <div className="account-card-body">
              <div className="settings-section">
                <h4>Внешний вид</h4>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <span className="setting-icon">🌓</span>
                    <div>
                      <div className="setting-title">Темная тема</div>
                      <div className="setting-description">Измените внешний вид приложения</div>
                    </div>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={darkMode}
                      onChange={toggleDarkMode}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              
              <div className="settings-section">
                <h4>Экспорт данных</h4>
                
                <button className="export-button">
                  <span className="export-icon">💾</span>
                  Экспортировать историю чатов
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;