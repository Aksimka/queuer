import styles from 'styles/Home.module.css'
import MenuLayout from 'layouts/menu'
import { ReactElement, useEffect, useState } from 'react'
import MainLayout from 'layouts/main'
import CommonCard from 'components/cards/CommonCard/CommonCard'
import UiLink from 'components/typography/UiLink'
import Request from '../../request/Request'
import { QueueCard } from '@/types/queues'

export default function Queues(): ReactElement {
  // console.log(Request, 'Request')
  const [queues, setQueues] = useState<QueueCard[]>([])

  useEffect(() => {
    Request.api.getShortenedQueues().then((res: QueueCard[]) => {
      setQueues(res)
    })
  })

  console.log(queues, 'queues')

  return (
    <div className={styles.Main}>
      <div className={styles.Cards}>
        {queues.map((card: QueueCard, index: number) => {
          return (
            <div className={styles.Card} key={index}>
              <UiLink href="/queues/1">
                <CommonCard
                  badges={card.badges}
                  description={card.description}
                  id={card.id}
                  name={card.name}
                  imagePath={card.imagePath}
                  peopleCount={card.peopleCount}
                />
              </UiLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Queues.withLayout = (page: ReactElement) => {
  return (
    <MenuLayout>
      <MainLayout heading="Все очереди" footer="footer">
        {page}
      </MainLayout>
    </MenuLayout>
  )
}
