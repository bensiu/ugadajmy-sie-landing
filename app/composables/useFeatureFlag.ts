export default function () {
  // const production = process.env.NODE_ENV !== 'development' && process.env.STAGE === 'prod'
  const flags = {
    blogsPages: true // !production
  }

  const isFlagEnabled = (flagName: keyof typeof flags) => {
    return flags[flagName] ?? false
  }

  return {
    flags,
    isFlagEnabled
  }
}
