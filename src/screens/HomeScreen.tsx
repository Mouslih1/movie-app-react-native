import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StatusBar,
} from 'react-native';
import {COLORS, SPACING} from '../theme/Theme';
import { 
    popularMovies, 
    upComingMovies, 
    baseUrlImage,
    nowPlayingMovies
 } from '../api/apiCall';
import InputHeader from '../components/InputHeader';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] =
    React.useState<any>(undefined);
  const [upComingMoviesList, setUpComingMoviesList] =
    React.useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] =
    React.useState<any>(undefined);

  if (
    nowPlayingMoviesList === undefined &&
    nowPlayingMoviesList == null &&
    upComingMoviesList === undefined &&
    upComingMoviesList == null &&
    popularMoviesList === undefined &&
    popularMoviesList == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />
        <View style={styles.inputHeaderContainer}>
          <InputHeader />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.orange} />
        </View>
      </ScrollView>
    );
  }

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
});

export default HomeScreen;
