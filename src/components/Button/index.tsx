import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from '@/components/Button/styles';

import { theme } from '@/global/theme';

type ButtonProps = {
  isLoading: boolean;
} & TouchableOpacityProps;

export function Button({ isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
}
