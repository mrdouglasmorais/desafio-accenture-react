import React, { useState, useEffect, ChangeEvent, useCallback } from 'react'

import { Contas } from '../../../types/dash-board'
import Balance from '../Balance'
import Extract from '../Extract'
import Chart from '../Charts'
import api from '../../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStore } from '../../../store'
import Loader from '../../Loader'
import { set_transaction_data } from '../../../store/dashboard/actions'

import { BalanceExtractContainer, ContainerFilter } from './style'

const Transactions: React.FC = () => {

  const data = [
    {
      name: "Conta Banco",
      value: 1500
    },
    {
      name: "Conta crédito",
      value: 11000
    }
  ]

  const [ contas, setContas ] = useState<Contas>()
  const [ loaded, setLoaded ] = useState(true)
  const [ referenceDate, setReferenceDate ] = useState(1)
  // const [ chartData, setChartData ] = useState()

  const user = useSelector( (state: ApplicationStore) => state.user )
  const dashboard = useSelector(( state: ApplicationStore ) => state.dashboard)

  const dispatch = useDispatch()

  const formatDate = useCallback((date:string) => {
    setLoaded(false)

    const d = new Date(date)
    let month = '' + (d.getMonth() + 1), day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2)
        month = '0' + month
    if (day.length < 2)
        day = '0' + day

    return [year, month, day].join('-')
  }, [])

  useEffect(() => {
    if ( contas )
      dispatch( set_transaction_data({ accounts: contas }) )
  }, [dispatch, contas])

  useEffect( ()=> {
    if ( dashboard.transactions_data ) {
      setContas(dashboard.transactions_data.accounts)
      // if (dashboard.transactions_data.contaBanco.lancamentos) {

      // }

      return
    }

    const getDashboardValues = async() => {
      try {
        setLoaded(false)

        const date = new Date()
        const newD = new Date()
        const newDate = new Date(date.setMonth(date.getMonth()-referenceDate))
        const dateFormated = (newD.getFullYear() + "-" + ((newD.getMonth() + 1)) + "-" + (newD.getDate() ))
        const newDateFormated = (newDate.getFullYear() + "-" + ((newDate.getMonth() + 1)) + "-" + (newDate.getDate() ))
        const result = await api.get(`/dashboard?fim=${formatDate(dateFormated)}&inicio=${formatDate(newDateFormated)}&login=${user?.login}`, {
          headers: {
            Authorization: user?.token,
          }
        })
        setContas(result.data)
        setLoaded(true)

      }catch (err) {
        console.log(err)
      }
    }

    getDashboardValues()
  }, [ referenceDate, user?.login, user?.token, formatDate, dashboard ])

  const updateReference = (event:ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value > 0 && value <= 12)
      setReferenceDate(value)
  }

  if ( loaded )return (
    <BalanceExtractContainer>
      {/* Componente para página principal */}

      <Balance contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>

      <ContainerFilter>
        <p>Meses para filtrar: </p>
        <input  type="number" min={1} max={12} value={referenceDate} onChange={updateReference}/>
      </ContainerFilter>

      <Extract contaBanco={contas?.contaBanco} contaCredito={contas?.contaCredito}/>
      {/* <FiArrowLeft onClick={() => {props.func('')}}/> */}

      <Chart data={data} />

    </BalanceExtractContainer>
  )
  else return <Loader style={{ border: '4px solid #f0f0f0' }} />

}

export default Transactions
