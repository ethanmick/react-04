type StorageOptions = {
  json?: boolean
}

export const useStorage = <T = any>(
  key: string,
  { json }: StorageOptions = {}
) => {
  const get = (): T | null => {
    const value = localStorage.getItem(key)
    if (!value) {
      return value as unknown as T
    }
    if (json) {
      try {
        return JSON.parse(value)
      } catch {}
    }
    return value as unknown as T
  }

  const set = (value: T) => {
    const saving = typeof value !== 'string' ? JSON.stringify(value) : value
    localStorage.setItem(key, saving)
  }

  const remove = () => localStorage.removeItem(key)

  return {
    get,
    set,
    remove
  }
}
