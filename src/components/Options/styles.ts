import { StyleSheet } from 'react-native';

import { theme } from '@/global/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 22,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  options: {
    width: '100%',
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
