import { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../i18n.js';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18next from 'i18next';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new  URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const urlParams = new  URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const { t, i18n } = useTranslation();

  return (
    <header className='bg-slate-200 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 h-[7vh]'>
          <Link to='/' className='flex object-cover hover:scale-125 duration-300'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Best</span>
                <span className='text-slate-700'>Domivka</span>
            </h1>
            <img className='rounded-full h-7 w-7' onClick={() => changeLanguage('uk')} src='https://firebasestorage.googleapis.com/v0/b/real-estate-7f0dd.appspot.com/o/App_don%E2%80%99t%20delete%2FBest%20domivka_gray.png?alt=media&token=0363d869-6be7-47b2-a54d-945e68b814e5' alt="Logo" />
          </Link>
            
            <form onSubmit={handleSubmit} className='bg-slate-100 rounded-lg flex items-center w-44 justify-between'>
                
                <input type="text" placeholder={t('header.search')} 
                className='bg-transparent focus:outline-none w-44 sm:w-24' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className='flex'>
                  <FaSearch className='text-slate-600' />
                </button>
                
            </form>
            <div className='flex gap-3'>
              
              {/* <button className='flex gap-2 bg-orange-300 m-5' onClick={() => changeLanguage('en')}>English</button>
              <button className='flex gap-2 bg-orange-300 m-5' onClick={() => changeLanguage('fr')}>Українська</button> */}
              <button disabled={i18next.language === 'uk'}><img className='rounded-full h-7 w-7 object-cover hover:scale-125 duration-300' onClick={() => changeLanguage('uk')} src='https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Ukraine.png' alt="Українська" /></button>
              
              <button disabled={i18next.language === 'en'}><img className='rounded-full h-7 w-7 object-cover hover:scale-125 duration-300' onClick={() => changeLanguage('en')} src='https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg' alt="English" /></button>
            </div>

            <ul className='flex gap-4'>
              <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>{t('header.home')}</li>
              </Link>
              <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>{t('header.about')}</li>
              </Link>
              <Link to='/profile'>
                {currentUser ? (
                  <img className='rounded-full h-7 w-7 object-cover hover:scale-125 duration-300' src={currentUser.avatar} alt="profile" />
                  
                ) : (
                    <li className='text-slate-700 hover:underline'>{t('header.signin')}</li>
                )}
                
              </Link>
              
            </ul>
        </div>
      
    </header>
  )
}
 