import { View, Text, Image, TouchableOpacity } from 'react-native';

import successImg from '@/assets/success.png';

import { Copyright } from '@/components/Copyright';
import { styles } from '@/components/Success/styles';

type SuccessProps = {
  onSendAnotherFeedback: () => void;
};

export function Success({ onSendAnotherFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback</Text>

      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
