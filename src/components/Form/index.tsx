import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';

import { feedbackTypes } from '@/utils/feedbackTypes';

import { Button } from '@/components/Button';
import { styles } from '@/components/Form/styles';
import { ScreenshotButton } from '@/components/ScreenshotButton';
import { FeedbackTypeProps } from '@/components/Widget';

import { theme } from '@/global/theme';

type FormProps = {
  feedbackType: FeedbackTypeProps;
};

export function Form({ feedbackType }: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot="https://github.com/brunoc-cardoso.png"
        />
        <Button isLoading={false} />
      </View>
    </View>
  );
}
