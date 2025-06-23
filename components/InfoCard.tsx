import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  value: string;
  unit?: string;
}

export const InfoCard = ({ title, value, unit }: Props) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>
      {value} {unit}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    color: '#aaa',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
