import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';

const SubMovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft: SPACING.space_36}
              : props.isLast
              ? {marginRight: SPACING.space_36}
              : {}
            : {},
          props.shoudlMarginatedAround ? {margin: SPACING.space_12} : {},
          {maxWidth: props.cardWith},
        ]}>
        <Image
          style={[styles.cardImage, {width: props.cardWith}]}
          source={{uri: props.imagePath}}
        />
        <Text numberOfLines={2} style={styles.textTitle}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.black,
  },
  cardImage: {
    aspectRatio: 2 / 3,
    borderRadius: BORDERRADIUS.radius_10,
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.white,
    textAlign: 'center',
    paddingVertical: SPACING.space_10,
  },
});

export default SubMovieCard;
