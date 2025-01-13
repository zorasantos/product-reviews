import hash from '@adonisjs/core/services/hash'

import { TEncryptAdapter } from '#protocols/encrypt_adapter'

export class EncryptAdapter implements TEncryptAdapter {
  make(value: string): Promise<string> {
    return hash.make(value)
  }

  verify(hashValue: string, value: string): Promise<boolean> {
    return hash.verify(value, hashValue)
  }
}
