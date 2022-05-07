import { View, Text } from 'react-native';

import { styles } from '@/components/Widget/styles';

type WidgetProps = {};

export function Widget({}: WidgetProps) {
  return (
    <View style={styles.container}>
      <Text>component snippet</Text>
    </View>
  );
}
