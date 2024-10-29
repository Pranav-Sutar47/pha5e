import React, { useState } from 'react'
import LanguageContext from './LanguageContext';

export default function LanguageState(props) {
    const [language,setLanguage] = useState('EN');

  return (
    <LanguageContext.Provider value={{language,setLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
}
