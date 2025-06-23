import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

interface Props {
  title: string;
  data: number[];
  labels: string[];
  color?: string;
}

export const BarChartCard = ({ title, data, labels, color = '#00bcd4' }: Props) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>{title}</Text>
      <BarChart
        data={{
          labels,
          datasets: [{ data }],
        }}
        width={Dimensions.get('window').width - 32}
        height={200}
        yAxisLabel=""
        yAxisSuffix="h"
        chartConfig={{
          backgroundColor: '#121212',
          backgroundGradientFrom: '#121212',
          backgroundGradientTo: '#121212',
          fillShadowGradient: color,
          fillShadowGradientOpacity: 1,
          color: () => color,
          labelColor: () => '#ccc',
          decimalPlaces: 1,
        }}
        style={styles.chart}
        fromZero
        showValuesOnTopOfBars
      />
    </View>
  );
};

export const BarChartCardWater = ({ title, data, labels, color = '#00bcd4' }: Props) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>{title}</Text>
      <BarChart
        data={{
          labels,
          datasets: [{ data }],
        }}
        width={Dimensions.get('window').width - 32}
        height={200}
        yAxisLabel=""
        yAxisSuffix="L"
        chartConfig={{
          backgroundColor: '#121212',
          backgroundGradientFrom: '#121212',
          backgroundGradientTo: '#121212',
          fillShadowGradient: color,
          fillShadowGradientOpacity: 1,
          color: () => color,
          labelColor: () => '#ccc',
          decimalPlaces: 1,
        }}
        style={styles.chart}
        fromZero
        showValuesOnTopOfBars
      />
    </View>
  );
};

export const BarChartCardFreqCard = ({ title, data, labels, color = '#00bcd4' }: Props) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>{title}</Text>
      <BarChart
        data={{
          labels,
          datasets: [{ data }],
        }}
        width={Dimensions.get('window').width - 32}
        height={200}
        yAxisLabel=""
        yAxisSuffix="BPM"
        chartConfig={{
          backgroundColor: '#121212',
          backgroundGradientFrom: '#121212',
          backgroundGradientTo: '#121212',
          fillShadowGradient: color,
          fillShadowGradientOpacity: 1,
          color: () => color,
          labelColor: () => '#ccc',
          decimalPlaces: 1,
        }}
        style={styles.chart}
        fromZero
        showValuesOnTopOfBars
      />
    </View>
  );
};

export const BarChartPassos = ({ title, data, labels, color = '#00bcd4' }: Props) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>{title}</Text>
      <BarChart
        data={{
          labels,
          datasets: [{ data }],
        }}
        width={Dimensions.get('window').width - 32}
        height={200}
        yAxisLabel=""
        yAxisSuffix="P"
        chartConfig={{
          backgroundColor: '#121212',
          backgroundGradientFrom: '#121212',
          backgroundGradientTo: '#121212',
          fillShadowGradient: color,
          fillShadowGradientOpacity: 1,
          color: () => color,
          labelColor: () => '#ccc',
          decimalPlaces: 1,
        }}
        style={styles.chart}
        fromZero
        showValuesOnTopOfBars
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    marginBottom: 24,
  },
  title: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 8,
  },
  chart: {
    borderRadius: 16,
  },
});
