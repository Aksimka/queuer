import styles from '@/styles/pages/Home.module.css'
import MenuLayout from 'layouts/menu'
import { ReactElement, useEffect, useState } from 'react'
import MainLayout from 'layouts/main'
import CommonCard from 'components/cards/CommonCard/CommonCard'
import UiLink from 'components/typography/UiLink'
import Request from '../../request/Request'
import { QueueCard } from '@/types/queues'
import CardsList from '@/components/cards/CardsList/CardsList'
import User from '@/store/User'

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
      <CardsList cardWidth={300}>
        {queues.map((card: QueueCard, index: number) => {
          return (
            <UiLink href="/queues/1" key={index}>
              <CommonCard
                badges={card.badges}
                description={card.description}
                id={card.id}
                name={card.name}
                imagePath={card.imagePath}
                peopleCount={card.peopleCount}
              />
            </UiLink>
          )
        })}
      </CardsList>
    </div>
  )
}

Queues.withLayout = (page: ReactElement) => {
  const userStore = User
  return (
    <MenuLayout>
      <MainLayout userStore={userStore} heading="Все очереди" footer="footer">
        {page}
      </MainLayout>
    </MenuLayout>
  )
}
