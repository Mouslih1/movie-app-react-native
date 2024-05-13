import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLORS, SPACING} from '../theme/Theme';
import {
  popularMovies,
  upComingMovies,
  baseUrlImage,
  nowPlayingMovies,
} from '../api/apiCall';
import InputHeader from '../components/InputHeader';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';

const {width, height} = Dimensions.get('window');

const getNowPlayingMovie = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = response.json();
    return json;
  } catch (error) {
    console.error('Something is wrong in getNowPlayingMovie', error);
  }
};

const getPopularMovie = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = response.json();
    return json;
  } catch (error) {
    console.error('Something is wrong in getPopularMovie', error);
  }
};

const getUpComingMovie = async () => {
  try {
    let response = await fetch(upComingMovies);
    let json = response.json();
    return json;
  } catch (error) {
    console.error('Something is wrong in getUpComingMovie', error);
  }
};

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] =
    React.useState<any>(undefined);
  const [upComingMoviesList, setUpComingMoviesList] =
    React.useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] =
    React.useState<any>(undefined);

  React.useEffect(() => {
    (async () => {
      let tempNowPlayingMovies = await getNowPlayingMovie();
      setNowPlayingMoviesList(tempNowPlayingMovies.results);

      let tempUpComingMovies = await getUpComingMovie();
      setUpComingMoviesList(tempUpComingMovies.results);

      let tempPopularMovies = await getPopularMovie();
      setPopularMoviesList(tempPopularMovies.results);
    })();
  }, []);

  const searchMoviesFunction = () => {
    navigation.navigate('Search');
  };

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
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar hidden />
      <View style={styles.inputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View>
      <CategoryHeader title={'Now Playing'} />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <SubMovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {movie_id: item.id});
            }}
            cardWith={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === upComingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseUrlImage('w342', item.poster_path)}
          />
        )}
      />
      <CategoryHeader title={'Popular'} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <SubMovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {movie_id: item.id});
            }}
            cardWith={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === upComingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseUrlImage('w342', item.poster_path)}
          />
        )}
      />
      <CategoryHeader title={'Up Coming'} />
      <FlatList
        data={upComingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <SubMovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {movie_id: item.id});
            }}
            cardWith={width / 3}
            isFirst={index === 0 ? true : false}
            isLast={index === upComingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseUrlImage('w342', item.poster_path)}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
  containerGap36: {
    gap: SPACING.space_36,
  },
});

export default HomeScreen;
