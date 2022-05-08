import { View, Text } from 'react-native';

import { styles } from '@/components/Copyright/styles';

type CopyrightProps = {};

export function Copyright({}: CopyrightProps) {
  return (
    <View>
      <Text style={styles.text}>Feito com ♥ pela Rocketseat</Text>
    </View>
  );
}
