import { NativeModules } from 'react-native';
const { NativeNavigationModule } = NativeModules;

interface LoginResult {
  password: string;
  username: string;
}

interface NativeNavigationInterface {
  showLoginActivity(): Promise<LoginResult>;
}

export default NativeNavigationModule as NativeNavigationInterface;
