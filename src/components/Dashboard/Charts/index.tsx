import React from 'react'
import { BarChart, Bar, XAxis } from 'recharts'

import { CardContainer, CardDashboard } from './style'

type DataItem = {
  name: string
  value: number
}

type ChartProps = {
  data: DataItem[]
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <CardContainer>
      <CardDashboard>
      <div>
        <p>Últimas transações</p>
      </div>
      <BarChart width={250} height={250} data={data} layout="horizontal">
        <Bar dataKey="value" fill="#08d" />
        <XAxis dataKey="name" />
      </BarChart>
      </CardDashboard>
    </CardContainer>
  )
}

export default Chart
