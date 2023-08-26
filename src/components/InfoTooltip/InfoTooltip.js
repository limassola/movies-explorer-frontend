import React, {useEffect} from "react";
import successImage from '../../images/infotooltip_success_icon.svg';
import errorImage from '../../images/infotooltip_fail_icon.svg';
import './InfoTooltip.css';
function InfoToolTip ({ isSucceed, isOpen, setOpen}) {
const imageSrc = isSucceed ? successImage : errorImage;
const title = isSucceed ? 'Вы успешно отредактировали профиль!' : 'Что-то пошло не так! Попробуйте ещё раз.'

useEffect(() => {
const closeByEscape = (e) => {
    if ( e.key === 'Escape' ) {
        setOpen(false)
    }
}

     if(isOpen){window.addEventListener('keydown', closeByEscape)}
        return(()=>{window.removeEventListener('keydown', closeByEscape)})
    },[])

    // const closeByCLick = (e) => {
    //     if ( e.target.classList.contains('InfoToolTip') ) {
    //         setOpen(false)
    //     }
    // }
    const closeByButtonCLick = () => {
        setOpen(false);
    } 

    return(
        <div className={isOpen ? 'popup popup_opened' : 'popup'}>
            <div className={`popup__container popup__container_type_info`}>
                <button type="button" className="button popup__button" onClick={closeByButtonCLick}></button>
                <img src={imageSrc} alt={title}/>
                <p className="popup__title popup__title_type_info">{title}</p>
            </div>
        </div>
    )
}

export default InfoToolTip;