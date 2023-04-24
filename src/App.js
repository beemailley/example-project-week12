import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'lib/Card'

const ThinnerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="https://picsum.photos/500/300"
        thumbnailUrl="https://picsum.photos/100/100"
        title="This is the title"
        secondaryText="Secondary title">
        Child content here!
      </ThinnerCard>

      <Card title="Only a title" secondaryText="And a second text!" />

      <Card>
        <h1>Hello from children!</h1>
      </Card>
    </div>
  )
}
