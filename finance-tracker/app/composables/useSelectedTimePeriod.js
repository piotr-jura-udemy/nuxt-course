import { startOfYear, endOfYear, sub, startOfDay, endOfDay, startOfMonth, endOfMonth } from 'date-fns'

export const useSelectedTimePeriod = (period) => {
  const current = computed(
    () => {
      switch (period.value) {
        case 'Yearly':
          return {
            from: startOfYear(new Date()),
            to: endOfYear(new Date())
          }
        case 'Monthly':
          return {
            from: startOfMonth(new Date()),
            to: endOfMonth(new Date())
          }
        case 'Daily':
          return {
            from: startOfDay(new Date()),
            to: endOfDay(new Date())
          }
      }
    }
  )

  const previous = computed(
    () => {
      switch (period.value) {
        case 'Yearly':
          return {
            from: startOfYear(sub(new Date(), { years: 1 })),
            to: endOfYear(sub(new Date(), { years: 1 }))
          }
        case 'Monthly':
          return {
            from: startOfMonth(sub(new Date(), { months: 1 })),
            to: endOfMonth(sub(new Date(), { months: 1 }))
          }
        case 'Daily':
          return {
            from: startOfDay(sub(new Date(), { days: 1 })),
            to: endOfDay(sub(new Date(), { days: 1 }))
          }
      }
    }
  )

  return { current, previous }
}