import React from 'react';
import {Image, Text, View} from 'react-native';
import {Book} from '../../../core/domain/models/book';
import Button from '../../atoms/Button';
import styles from './styles';

export default function ({author, cover, description, publisher, title}: Book) {
  return (
    <Button style={styles.wrapper}>
      <View>
        <Image source={{uri: cover}} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.titleText} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.descriptionText} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <View style={styles.authorSection}>
          <Text style={styles.authorText} numberOfLines={1}>
            {author}
          </Text>
          <Text style={styles.publisherText} numberOfLines={1}>
            {publisher}
          </Text>
        </View>
      </View>
    </Button>
  );
}
