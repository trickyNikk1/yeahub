export const isEqual = <T>(a: T, b: T): boolean => {
  if (a === b) return true

  if (typeof a !== typeof b) return false

  if (a && b && typeof a === 'object') {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false
      return a.every((item, index) => isEqual(item, b[index]))
    }

    if (Object.keys(a).length !== Object.keys(b).length) return false

    return Object.keys(a).every(key =>
      isEqual(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key]
      )
    )
  }

  return false
}
