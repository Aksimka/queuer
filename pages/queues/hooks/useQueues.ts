import { useEffect, useState } from 'react'
import { QueueCard } from '@/types/queues'
import Request from '@/request/Request'

const useQueues = () => {
  const [queues, setQueues] = useState<QueueCard[]>([])

  useEffect(() => {
    Request.api.getShortenedQueues().then((res: QueueCard[]) => {
      setQueues(res)
    })
  })

  return { queues }
}

export default useQueues
