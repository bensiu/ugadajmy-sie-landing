export const promiseAllWithConcurrency = async <T>(
  promisses: Promise<T>[],
  concurrency: number
): Promise<T[]> => {
  const executing: Promise<void>[] = []
  const results: T[] = []

  for (const promise of promisses) {
    const p = promise.then((result) => {
      executing.splice(executing.indexOf(p), 1)
      results.push(result)
    })

    executing.push(p)

    if (executing.length >= concurrency) {
      await Promise.race(executing)
    }
  }

  await Promise.all(executing)

  return results
}
