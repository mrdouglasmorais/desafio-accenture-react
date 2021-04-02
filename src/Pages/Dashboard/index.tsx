import React, { useCallback, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
import { IoMdPower, IoMdCash } from "react-icons/io"
import { GiBanknote } from "react-icons/gi"
import { FaPiggyBank } from "react-icons/fa"
import { RiBankCardFill } from "react-icons/ri"
import { AiOutlineBank } from "react-icons/ai"

import {
  DashboardContainerMobile,
  DashMainMobile,
  DashNavigationMobile,
  DashboardContainer,
  DashMain,
  DashNavigation,
  CardMenuWeb,
  CardDesc
} from './styles'

import {
  BtnContainerMobile, BtnIconMobile, LabelMobile, ExitBtnContainer
} from '../../styles/DashBoardButtons'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const store = useSelector((state: ApplicationStore) => state.user)

  const currentScreen = useSelector((store: ApplicationStore) => store.dashboard.current_screen)

  const [user, setUser] = useState('')
  const [isExiting, setIsExiting] = useState(false)
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const handleWindowSize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (store) setUser(store.name)
  }, [store])

  useEffect(() => {
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
    dispatch(change_screen(title))
  }, [dispatch])

  const handleLogOut = useCallback((accepted: boolean) => {
    if (accepted) {
      dispatch(remove_user())

      history.push('/')
    } else {
      setIsExiting(false)
    }
  }, [dispatch, history])


  return (
    <>
      { isExiting && <ExitModal isMobile={isMobile} setResponse={handleLogOut} />}

      {
        isMobile
          ?
          <DashboardContainerMobile>

            <DashMainMobile>
              <main>
                {/* Render component by currentScreen */}
                {currentScreen === 'Transações' && <Transactions></Transactions>}
                {currentScreen === 'Depósitos' && <Deposit />}
                {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
                {currentScreen === 'Planos' && <Plans />}
              </main>
            </DashMainMobile>

            <DashNavigationMobile> {/** Não estou conseguindo identificar esse campo */}
              <nav>
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Transações'
                  onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Depósitos'
                  onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Pagamentos'
                  onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
                <CardMenu isMobile={isMobile}
                  backgroundColor='#7cc5ea'
                  title='Planos'
                  onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />

                <BtnContainerMobile backgroundColor='#7cc5ea' onClick={() => setIsExiting(true)}>
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
              <nav>
                <ul>
                  <img style={{ width: '30%' }} src={logoNow} alt="NowBank icon" />
                </ul>
                <ul>
                  <li>
                    {user.split(' ')[0]}
                  </li>
                  <li>
                    <a onClick={() => setIsExiting(true)}><IoMdPower /></a>
                  </li>
                </ul>
              </nav>

            </DashNavigation>
            <CardMenuWeb>
              <CardDesc>
 
                <header style={{background:'rgba(5, 47, 236, 0.952)'}}>Transações</header>
                <section style={{background:'rgba(1, 46, 245, 0.534)'}}>
                <span><AiOutlineBank/> </span>
                </section>
              </CardDesc>
              <CardDesc>
                <header style={{background:'rgba(61, 201, 5, 0.952)'}}>Depósito</header>
                <section style={{background:'rgba(61, 201, 5, 0.534)'}}>
                <span><GiBanknote/> <h3>R$: 20,00</h3></span>
                </section>
              </CardDesc>
              <CardDesc>
                <header style={{background:'rgba(243, 161, 8, 0.952)'}}>Pagamentos</header>
                <section style={{background:'rgba(243, 161, 8, 0.534)'}}>
                <span><RiBankCardFill/> <h3>R$: 50,00</h3></span>
                </section>
              </CardDesc>
              <CardDesc>
                <header style={{background:'rgba(112, 0, 216, 0.952)'}}>Planos</header>
                <section style={{background:'rgba(112, 0, 216, 0.534)'}}>
                <span><FaPiggyBank/> <h3>10</h3></span>
                </section>
              </CardDesc>


            </CardMenuWeb>
          
         {/**
          *    <nav className="bottom">
              <CardMenu isMobile={isMobile}
                backgroundColor='#7cc5ea'
                title='Transações'
                onClick={() => changeComponent('Transações')} selected={currentScreen === 'Transações'} />
              <CardMenu isMobile={isMobile}
                backgroundColor='#78DA78'
                title='Depósitos'
                onClick={() => changeComponent('Depósitos')} selected={currentScreen === 'Depósitos'} />
              <CardMenu isMobile={isMobile}
                backgroundColor='#FDBC7E'
                title='Pagamentos'
                onClick={() => changeComponent('Pagamentos')} selected={currentScreen === 'Pagamentos'} />
              <CardMenu isMobile={isMobile}
                backgroundColor='#A2ABFE'
                title='Planos'
                onClick={() => changeComponent('Planos')} selected={currentScreen === 'Planos'} />
            </nav>
          */}

            <DashMain>
              <main>
                {/* Render component by currentScreen */}
                {currentScreen === 'Transações' && <Transactions></Transactions>}
                {currentScreen === 'Depósitos' && <Deposit />}
                {currentScreen === 'Pagamentos' && <Payments func={changeComponent}></Payments>}
                {currentScreen === 'Planos' && <Plans />}
              </main>
            </DashMain>

          </DashboardContainer>
      }
    </>
  )
}

export default Dashboard
