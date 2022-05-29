import MenuLayout from '@/layouts/Menu/menu'
import { ReactElement } from 'react'
import MainLayout from '@/layouts/Main/main'
import CommonCard from 'components/ui/cards/CommonCard/CommonCard'
import UiLink from 'components/ui/typography/UiLink'
import { QueueCard } from '@/types/queues'
import CardsList from '@/components/ui/cards/CardsList/CardsList'
import useQueues from './hooks/useQueues'

export default function Queues(): ReactElement {
  const { queues } = useQueues()

  return (
    <div>
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
