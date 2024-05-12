import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../theme/Theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
  },
});

export default HomeScreen;
