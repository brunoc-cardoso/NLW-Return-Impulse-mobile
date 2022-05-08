import { Text, View } from 'react-native';

import { feedbackTypes } from '@/utils/feedbackTypes';

import { Copyright } from '@/components/Copyright';
import { Option } from '@/components/Option';
import { styles } from '@/components/Options/styles';

type OptionsProps = {};

export function Options({}: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
