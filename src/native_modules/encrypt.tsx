import { NativeModules } from 'react-native';
const { EncryptModule } = NativeModules;

interface EncryptInterface {
  encryptText(
    text: string,
    onFailure: (error: Error) => void,
    onSuccess: (encryptedText: string) => void,
  ): void;
  encryptTextPromise(text: string): Promise<string>;
}

export default EncryptModule as EncryptInterface;
