import { scrypt, randomBytes, timingSafeEqual } from 'crypto'

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16)
  const key = await new Promise<Buffer>(
    (resolve, reject) => {
      scrypt(
        password,
        salt,
        64,
        { N: 16384, r: 8, p: 1 },
        (error, deriveKey) => {
          if (error) {
            reject(error)
          } else {
            resolve(deriveKey)
          }
        }
      )
    }
  )

  return `${salt.toString('hex')}:${key.toString('hex')}`
}

export async function verifyPassword(storedHash: string, suppliedPassword: string): Promise<boolean> {
  const [saltHex, keyHex] = storedHash.split(':')
  const salt = Buffer.from(saltHex as string, 'hex')
  const key = Buffer.from(keyHex as string, 'hex')

  const deriveKeyResult = await new Promise<Buffer>(
    (resolve, reject) => {
      scrypt(
        suppliedPassword,
        salt,
        64,
        { N: 16384, r: 8, p: 1 },
        (error, deriveKey) => {
          if (error) {
            reject(error)
          } else {
            resolve(deriveKey)
          }
        }
      )
    }
  )

  return timingSafeEqual(key, deriveKeyResult)
}
