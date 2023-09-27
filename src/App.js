
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { useTranslation } from 'react-i18next';

import EmailjsInit from './components/emailjs/emailjs';

import { ToastContainer } from 'react-toastify';
import SocialsBar from './components/SocialsBar/SocialsBar';
import Main from './components/main/Main';

function App() {
  const [locale, setLocale] = useState('AR');
  const { t } = useTranslation();


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup: unobserve the elements when component is unmounted
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [locale]);

  return (

    <div className="App">


      <Main />

      <ToastContainer />
    </div>

  );
}

export default App;
