import classes from '@/styles/pages/Home.module.css'
import MenuLayout from 'layouts/menu'
import { ReactElement, useEffect, useState } from 'react'
import MainLayout from 'layouts/main'
import CommonCard from 'components/ui/cards/CommonCard/CommonCard'
import UiLink from 'components/ui/typography/UiLink'
import Request from '../../request/Request'
import { QueueCard } from '@/types/queues'
import CardsList from '@/components/ui/cards/CardsList/CardsList'

export default function Queues(): ReactElement {
  const [queues, setQueues] = useState<QueueCard[]>([])

  useEffect(() => {
    Request.api.getShortenedQueues().then((res: QueueCard[]) => {
      setQueues(res)
    })
  })

  console.log(queues, 'queues')

  return (
    <div className={classes.Main}>
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
  return (
    <MenuLayout>
      <MainLayout footer=".queuer">{page}</MainLayout>
    </MenuLayout>
  )
}
