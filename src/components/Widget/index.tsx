import { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import BottomSheet from '@gorhom/bottom-sheet';
import { ChatTeardropDots } from 'phosphor-react-native';

import { styles } from '@/components/Widget/styles';

import { theme } from '@/global/theme';

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          weight="bold"
          size="24"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <View>
          <Text>some thing another</Text>
        </View>
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget) as any;
