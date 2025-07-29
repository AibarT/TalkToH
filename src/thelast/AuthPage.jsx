
// AuthPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthPage.css";

const API_URL = "https://68578eda21f5d3463e557cff.mockapi.io/api/project/users";
const IMGBB_API_KEY = "d6181f1a9eb64f33667dbbd04be20254";

const AuthPage = () => {
  const [mode, setMode] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const uploadAvatarToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
      formData
    );

    return data.data.url;
  };

const handleAuth = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    if (!email || !password) throw new Error("Заполните все обязательные поля");

    const { data: users } = await axios.get(API_URL);
    const existingUser = users.find((user) => user.email === email);

    if (mode === "signup") {
      if (existingUser) throw new Error("Пользователь с таким email уже существует. Пожалуйста, войдите.");

      if (password !== confirmPassword) throw new Error("Пароли не совпадают");
      if (!nickname) throw new Error("Введите никнейм");
      if (password.length < 8) throw new Error("Пароль должен содержать минимум 8 символов");

      let avatarUrl = null;
      if (avatar) {
        avatarUrl = await uploadAvatarToImgbb(avatar);
      }

      const userData = {
        email,
        nickname,
        password,
        avatar: avatarUrl,
        createdAt: new Date().toISOString(),
      };

      const response = await axios.post(API_URL, userData);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("auth", "true");
      if (avatarUrl) localStorage.setItem("avatar", avatarUrl);
      navigate("/", { replace: true });

    } else if (mode === "login") {
      if (!existingUser) throw new Error("Пользователь не найден. Зарегистрируйтесь.");
      if (existingUser.password !== password) throw new Error("Неверный пароль");

      localStorage.setItem("user", JSON.stringify(existingUser));
      localStorage.setItem("auth", "true");
      if (existingUser.avatar) localStorage.setItem("avatar", existingUser.avatar);
      navigate("/", { replace: true });
    }

  } catch (err) {
    alert(err.message);
    localStorage.removeItem("auth");
  } finally {
    setIsLoading(false);
  }
};


  const handleSocialLogin = (provider) => {
    alert(`Реализация входа через ${provider} будет добавлена позже`);
  };
  console.log("isLoading:", isLoading);


  return (
    <div className="auth-page">
      <div className="auth-box">
        {!mode ? (
          <>
            <h2>Доступ к миллионам персонажей</h2>
            <p>Зарегистрируйтесь за 10 секунд</p>

            <button className="google-btn" onClick={() => handleSocialLogin("Google")} disabled={isLoading}>
              {isLoading ? "Загрузка..." : "Войти через Google"}
            </button>

            <button className="apple-btn" onClick={() => handleSocialLogin("Apple")} disabled={isLoading}>
              {isLoading ? "Загрузка..." : "Войти через Apple"}
            </button>

            <div className="or">ИЛИ</div>

            <button className="email-btn" onClick={() => setMode("login")} disabled={isLoading}>Войти</button>
            <button className="email-btn" onClick={() => setMode("signup")} disabled={isLoading}>Регистрация</button>
          </>
        ) : (
          <form onSubmit={handleAuth} className="auth-form">
            <h3>{mode === "login" ? "Вход" : "Регистрация"}</h3>

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isLoading} />
            <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={isLoading} />

            {mode === "signup" && (
              <>
                <input type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required disabled={isLoading} />
                <input type="text" placeholder="Никнейм" value={nickname} onChange={(e) => setNickname(e.target.value)} required disabled={isLoading} />
                <div className="avatar-upload">
                  <div className="avatar-preview">
                    {avatar ? <img src={URL.createObjectURL(avatar)} alt="Preview" /> : <span>👤</span>}
                  </div>
                  <label>
                    <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} disabled={isLoading} className="file-input" />
                    <span className="upload-btn">{avatar ? "Изменить аватар" : "Выбрать аватар"}</span>
                  </label>
                </div>
              </>
            )}

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner" />
                ) : (mode === "login" ? "Войти" : "Зарегистрироваться")}
            </button>



            <button type="button" onClick={() => { setMode(null); setAvatar(null); }} disabled={isLoading} className="back-btn">← Назад</button>
          </form>
        )}
      </div>

      <div className="auth-image">
        <img src="https://jewish-museum.ru/upload/iblock/117/86erg2mj7am6ctfxq5bl0a91uak6ema0.jpg" alt="Исторический фон" />
      </div>
    </div>
  );
};

export default AuthPage;
