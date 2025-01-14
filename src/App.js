import React from "react";
import "./App.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; 

const App = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>CV - Sabahattin Furkan Taşdemir</h1>
      </header>

      <section className="personal-info">
        <h2>Kişisel Bilgiler</h2>
        <p>İsim: Sabahattin Furkan</p>
        <p>Soyad: Taşdemir</p>
        <p>Telefon: 0506 736 81 81</p>
      </section>

      <section className="education">
        <h2>Eğitim Bilgileri</h2>
        <p>Okuduğu Okul: Kapadokya Üniversitesi</p>
        <p>Bölüm: BPU</p>
        <p>Mezuniyet Yılı: 2025</p>
      </section>

      <section className="work-experience">
        <h2>İş Deneyimi</h2>
        <p>Şirket Adı: Philips</p>
        <p>Pozisyon: Teknisyen</p>
        <p>Çalışma Süresi: 12 Saat</p>
        <p>Açıklama: İrgat olarak çalışıyor</p>
      </section>

      <section className="skills">
        <h2>Yetenekler</h2>
        <p>Programlama Dilleri: HTML, CSS, Java, C#, Python, PHP</p>
        <p>Teknolojiler: IntelliJ IDEA, Visual Studio, Eclipse</p>
      </section>

      <section className="hobbies">
        <h2>Hobiler ve İlgi Alanları</h2>
        <p>Oto Sound, Oto Tuning, Basketbol, Müzik</p>
      </section>

      <section className="social-media">
        <h2>Sosyal Medya</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/furkantasdemır" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} />
          </a>
          <a href="https://www.instagram.com/tekel_furkan06/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
        </div>
      </section>

      <footer>
        <p>CV Uygulaması | 2025</p>
      </footer>
    </div>
  );
};

export default App;

