import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) {
      navigate('/login');
    }
  }, [navigate]);
}

export default useAuth;
