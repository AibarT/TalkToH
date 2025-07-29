import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate('');

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      padding: '40px',
      maxWidth: '800px',
      margin: '40px auto'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <h1 style={{
          fontSize: '32px',
          color: '#1c3faa',
          textAlign: 'center'
        }}>
          My Profile
        </h1>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.6'
        }}>
          I'm 15, I was born in 2010 in Almaty, I am a student in NPMSh-Almaty in Kazakhstan.
        </p>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.6'
        }}>
          I like playing video games and coding.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={() => navigate('/projects')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1c3faa',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Projects
        </button>
      </div>
    </div>
  );
}

export default Profile;
