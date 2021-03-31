import React, { HTMLAttributes } from 'react'

import pixIcon from '../../../assets/svgs/pix-icon.svg'
import { BtnContainer,BtnContainerMobile } from './styles'

interface ComponentProp extends HTMLAttributes<HTMLDivElement> {
    title: string;
    selected: boolean;
    isMobile: boolean;
}

const CardMenu: React.FC<ComponentProp> = ( { selected, isMobile, ...props } ) => {

    return (
        <>
            {
                isMobile
                ?
                    <BtnContainerMobile { ...props } className={selected ? 'card-selected' : ''}>
                        {isMobile && <p>Mobile</p>}
                        <img src={pixIcon} alt="pix icon" />
                        <span>{props.title}</span>
                    </BtnContainerMobile>
                :
                    <BtnContainer { ...props } className={selected ? 'card-selected' : ''}>
                        {isMobile && <p>Mobile</p>}
                        <img src={pixIcon} alt="pix icon" />
                        <span>{props.title}</span>
                    </BtnContainer>
            }
        </>
    )
}

export default CardMenu
