export interface TEncryptAdapter {
  make(value: string): Promise<string>
  verify(hashValue: string, value: string): Promise<boolean>
}
