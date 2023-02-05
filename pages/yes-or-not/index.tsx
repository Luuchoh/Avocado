import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { Header, Button } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
import { YesOrNotResponse } from '@services/avocado.services'


export async function getServerSideProps() {
  const initialResult = await YesOrNotResponse()
  return {
    props: {
      initialResult,
    },
  }
}

const YesOrNo = ({ initialResult }: { initialResult: string }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    YesOrNotResponse()
      .then((initialResult) => {
        setResult(initialResult)
        setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <Layout>
      <div>
        <Header as="h1" color={isLoading ? 'grey' : 'green'}>
          {result}
        </Header>

        <p>
          <Button
            color="green"
            onClick={onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            Intentar de nuevo
          </Button>
        </p>
        <p>
          <Link href="/" legacyBehavior>
            <a className="ui black button basic">Volver al inicio</a>
          </Link>
        </p>
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(h1.header) {
          font-size: 7rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo