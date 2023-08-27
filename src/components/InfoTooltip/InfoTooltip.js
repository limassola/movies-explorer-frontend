import React, {useEffect, useState} from "react";
import successImage from '../../images/infotooltip_success_icon.svg';
import errorImage from '../../images/infotooltip_fail_icon.svg';
import './InfoTooltip.css';
function InfoToolTip ({ isSucceed, isOpen, setOpen, isEmailConflicted, userUpdated}) {
    console.log(userUpdated)

// const [imageSrc, setImageSrc] = useState(userUpdated ? successImage : errorImage);
// const [title, setTitle] = useState(userUpdated ? 'Вы успешно отредактировали профиль!' : 'Что-то пошло не так! Попробуйте ещё раз.');

// useEffect(() => {
//     if(userUpdated) {
//         setImageSrc(successImage);
//         setTitle('Вы успешно отредактировали профиль!');
//     } else {
//         setImageSrc(errorImage);
//         setTitle('Что-то пошло не так! Попробуйте ещё раз.');
//     }
// }, [userUpdated])

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
                <img src={`${userUpdated ? successImage : errorImage}`} alt={`${userUpdated ? 'Вы успешно отредактировали профиль!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}/>
                <p className="popup__title popup__title_type_info">{`${userUpdated ? 'Вы успешно отредактировали профиль!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</p>
            </div>
        </div>
    )
}

export default InfoToolTip;