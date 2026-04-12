export default function () {
  // You can extend this to fetch from an external API (LaunchDarkly, Flagsmith, etc.)
  const production = process.env.NODE_ENV !== 'development' && process.env.STAGE === 'prod'
  const flags = computed(() => ({
    blogsPages: !production
  }))

  const isFlagEnabled = (flagName: keyof typeof flags.value) => {
    return flags.value[flagName] ?? false
  }

  return {
    flags,
    isFlagEnabled
  }
}
