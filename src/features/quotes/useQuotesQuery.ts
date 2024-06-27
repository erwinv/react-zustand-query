import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'

export const quoteSchema = z.object({
  id: z.number(),
  quote: z.string(),
  author: z.string(),
})

export const quotesApiResponseSchema = z.object({
  quotes: z.array(quoteSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
})

export type Quote = z.infer<typeof quoteSchema>
export type QuotesApiResponse = z.infer<typeof quotesApiResponseSchema>

export function useGetQuotesQuery(limit = 10) {
  return useQuery({
    queryKey: ['quotes', { limit }],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=${limit}`,
      )
      const apiResponse = await response.json()
      return quotesApiResponseSchema.parse(apiResponse)
    },
  })
}
