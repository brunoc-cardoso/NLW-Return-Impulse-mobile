import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import * as FileSystem from 'expo-file-system';
import { ArrowLeft } from 'phosphor-react-native';

import { api } from '@/libs/api';
import { feedbackTypes } from '@/utils/feedbackTypes';

import { Button } from '@/components/Button';
import { styles } from '@/components/Form/styles';
import { ScreenshotButton } from '@/components/ScreenshotButton';
import { FeedbackType } from '@/components/Widget';

import { theme } from '@/global/theme';

type FormProps = {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: (value: boolean) => void;
};

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
}: FormProps) {
  const [comment, setComment] = useState<string | null>('');
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.1,
    })
      .then(uri => {
        setScreenShot(uri);
      })
      .catch(error => Alert.alert(error));
  }

  function handleScreenshotRemove() {
    setScreenShot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return;
    }
    setIsSendingFeedback(true);

    const screenshotBase64 =
      screenShot &&
      (await FileSystem.readAsStringAsync(screenShot, { encoding: 'base64' }));

    console.log('[screenshot]: ', screenShot, '\n');
    console.log('[screenshotBase64]: ', screenshotBase64);

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64,${screenshotBase64}`,
        comment,
      });

      onFeedbackSent(true);
    } catch (error) {
      console.log('[error]: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
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
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenShot}
        />
        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>
    </View>
  );
}
