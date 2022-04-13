import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineTranslate } from 'react-icons/hi'
const lngs = {
    enUS: { source:'https://cdn-icons-png.flaticon.com/128/197/197484.png', nativeName: 'English'},
    es:{ source:'https://cdn-icons-png.flaticon.com/512/197/197593.png', nativeName: 'Español'}
  };
  
  const Changelanguage = () => {
      const { i18n } = useTranslation();
      const [visibility, setVisibility] = React.useState(false);
      const setTrue = () => setVisibility(true);
      const setFalse = () => setVisibility(false)
    return (
        <div className='language'>
            <HiOutlineTranslate  onClick={setTrue} />
            {visibility && 
            <div className="language__popup">

                <div className='language__popup--closing-background' onClick={setFalse}></div>
                <div className="language__popup--content">
                    <button href="#" onClick={setFalse} className="language__popup--content-close">&times;</button>
                            {Object.keys(lngs).map((lng) => (
                                <div className="language__popup--content-flag-box">
                                    <img alt={lngs[lng].nativeName + 'flag'} src={lngs[lng].source} className={`language__popup--content-flag ${i18n.resolvedLanguage === lng ? 'active-lng': null}`} key={lng} type="submit" onClick={() => i18n.changeLanguage(lng).then(()=>setFalse())}></img>
                                    <p className={ `language__popup--content-flag-title ${i18n.resolvedLanguage === lng ? 'active-lng': null}`} >{lngs[lng].nativeName}</p> 
                                </div>
                            ))}
                    </div>
                </div>

            
            }
        </div>
    );
}

export default Changelanguage;
