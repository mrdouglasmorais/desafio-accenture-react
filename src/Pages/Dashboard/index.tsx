import React, { useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiLogOut, FiAlignRight } from 'react-icons/fi'
import logoNow from '../../assets/logonow.png'
import CardMenu from '../../components/Dashboard/CardMenu'
import Deposit from '../../components/Dashboard/Deposit'
import Payments from '../../components/Dashboard/Payments'
import Plans from '../../components/Dashboard/Plans'
import Transactions from '../../components/Dashboard/Transactions'
import { useDispatch, useSelector } from 'react-redux'
import { remove_user } from '../../store/user/actions'
import { ApplicationStore } from '../../store'
import { change_screen } from '../../store/dashboard/actions'
import { Screen } from '../../store/dashboard/types'
import ExitModal from '../../components/Dashboard/ExitModal'
import { DashboardContainerMobile,
  DashMainMobile,
  DashNavigationMobile,
  DashboardContainer,
  DashMain,
  DashNavigation
} from './styles'

import {
  BtnContainerMobile, BtnIconMobile, LabelMobile
} from '../../styles/DashBoardButtons'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen)

  const [ modalIsOpen, setIsOpen ] = useState(false)
  const [ isExiting, setIsExiting ] = useState(false)
  const [ width, setWidth ] = useState<number>(window.innerWidth)
  const [ isMobile, setIsMobile ] = useState(false)

  const handleWindowSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('isMobile ?', isMobile)
    window.addEventListener('resize', handleWindowSize)
    width < 768
      ? setIsMobile(true)
      : setIsMobile(false)
    return () => {
        window.removeEventListener('resize', handleWindowSize)
    }
  }, [])
  //Setting data accounts;
  const changeComponent = useCallback((title: Screen) => {
    setIsOpen(false)
    dispatch( change_screen(title) )
  }, [dispatch])

  const handleLogOut = useCallback((accepted: boolean) => {
    if ( accepted ) {
      dispatch(remove_user())

      history.push('/')
    } else {
      setIsExiting(false)
    }
  }, [ dispatch, history ])

  function setModal() {
    if (modalIsOpen === true)
      setIsOpen(false)
    else
      setIsOpen(true)
  }

  //       {
  //         modalIsOpen && ( <div onClick={setModal}>

  //           <div onClick={ () => {
  //             setIsExiting(true)
  //             setIsOpen(false)
  //           }}>
  //             <FiLogOut size={16} color="#fff" style={{ marginRight: 8 }} />
  //             Sair
  //           </div>
  //         </div>
  //       )}

        // <div style={{border: '2px solid pink'}}>
        //   <img className="logo" src={gamaIcon} alt="Gama icon"/>
        //   <div>
        //     <FiAlignRight color="#999" size={ 60 } onClick={() => setModal()} ></FiAlignRight>
        //   </div>
        // </div>
  return (
    <>
      { isExiting && <ExitModal isMobile={isMobile} setResponse={ handleLogOut } /> }

      {
        isMobile
        ?
          <DashboardContainerMobile>

            <DashMainMobile>
              <main>
                {/* Render component by currentScreen */}
                {currentScreen === 'Depósitos' && <Deposit />}
                {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
                {currentScreen === 'Planos' && <Plans />}
                {currentScreen === 'Transações' && <Transactions></Transactions>}
              </main>
            </DashMainMobile>

            <DashNavigationMobile>
              <nav>
                  <CardMenu isMobile={isMobile} title='Depósitos' onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
                  <CardMenu isMobile={isMobile} title='Planos' onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />
                  <CardMenu isMobile={isMobile} title='Pagamentos' onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
                  <CardMenu isMobile={isMobile} title='Transações' onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />

                  <BtnContainerMobile onClick={ () => setIsExiting(true) }>
                      <BtnIconMobile className="material-icons icon">
                          logout
                      </BtnIconMobile>
                      <LabelMobile>Sair</LabelMobile>
                  </BtnContainerMobile>

              </nav>
            </DashNavigationMobile>

          </DashboardContainerMobile>
        :
          <DashboardContainer>

            <DashNavigation>
              <div className="top">
                <img className="logo" style={{ margin: '0.5rem 0 0.5rem 4rem', width: '15%' }} src={logoNow} alt="NowBank icon"/>
                <button onClick={ () => setIsExiting(true) } >
                  <FiLogOut color="#fff" size={ 20 } />
                </button>
              </div>
              <nav className="bottom">
                  <CardMenu isMobile={isMobile} title='Depósitos' onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
                  <CardMenu isMobile={isMobile} title='Planos' onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />
                  <CardMenu isMobile={isMobile} title='Pagamentos' onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
                  <CardMenu isMobile={isMobile} title='Transações' onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />
              </nav>
            </DashNavigation>

            <DashMain>
              <main>
                {/* Render component by currentScreen */}
                {currentScreen === 'Depósitos' && <Deposit />}
                {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
                {currentScreen === 'Planos' && <Plans />}
                {currentScreen === 'Transações' && <Transactions></Transactions>}
              </main>
            </DashMain>

          </DashboardContainer>
      }
    </>
  )
}

export default Dashboard
