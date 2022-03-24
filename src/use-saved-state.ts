import { useEffect, useState } from 'react'
import { useStorage } from './storage-hook'

export const useSavedState = <T>(
  key: string,
  initial: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const { get, set } = useStorage<T>(key, { json: true })
  const [state, setState] = useState<T>(get() || initial)

  useEffect(() => {
    set(state)
  }, [JSON.stringify(state)])

  return [state, setState]
}
