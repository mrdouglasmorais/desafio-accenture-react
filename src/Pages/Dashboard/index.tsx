import React, { useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiLogOut, FiAlignRight } from 'react-icons/fi'
import gamaIcon from '../../assets/svgs/gama-icon.svg'
import CardMenu from '../../components/Dashboard/CardMenu'
import CardMenuMobile from '../../components/Dashboard/CardMenuMobile'
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
import { DashboardContainer,
  DashMain,
  DashNavigation
} from './styles'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen)

  const [ modalIsOpen, setIsOpen ] = useState(false)
  const [ isExiting, setIsExiting ] = useState(false)
  const [ width, setWidth ] = useState<number>(window.innerWidth)
  const [ isMobile, setIsMobile] = useState(false)


  // Set Width
  const handleWindowSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('is Mobile?', isMobile)
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

  //           <div style={{border: '2px solid red'}}>
  //             <CardMenuMobile title = 'Depósitos' func={changeComponent} />
  //             <CardMenuMobile title = 'Planos' func={changeComponent} />
  //             <CardMenuMobile title = 'Pagamentos' func={changeComponent}  />
  //             <CardMenuMobile title = 'Transações' func={changeComponent} />
  //           </div>

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

      <DashboardContainer className={ isMobile ? 'is-mobile' : 'is-desktop'}>
        <DashMain className='dash-main' style={ isMobile ? {order: 1} : {order: 2} }>
          <main style={{border: '2px solid green'}}>
            {/* Render component by currentScreen */}
            {currentScreen === 'Depósitos' && <Deposit />}
            {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
            {currentScreen === 'Planos' && <Plans />}
            {currentScreen === 'Transações' && <Transactions></Transactions>}
          </main>
        </DashMain>

        <DashNavigation className='dash-navigation' style={ isMobile ? {order: 2} : {order: 1}}>
          <nav>
              <CardMenu title='Depósitos' onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
              <CardMenu title='Planos' onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />
              <CardMenu title='Pagamentos' onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
              <CardMenu title='Transações' onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />

              <button onClick={ () => setIsExiting(true) } >
                <FiLogOut color="#fff" size={ 20 } />
              </button>
          </nav>
        </DashNavigation>
      </DashboardContainer>
    </>
  )
}

export default Dashboard
