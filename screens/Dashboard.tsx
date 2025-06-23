import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Button, Linking } from 'react-native';
import { InfoCard } from '../components/InfoCard';
import { BarChartCard, BarChartCardWater, BarChartCardFreqCard, BarChartPassos } from '../components/BarChartCard';
import { Header } from '../components/Header';

export default function Dashboard() {
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [hydration, setHydration] = useState(0);
  const [heartRate, setHeartRate] = useState(0);

  useEffect(() => {'./screens/Dashboard'
    // Dados simulados
    setSteps(8421);
    setSleep(7.5);
    setHydration(2.3);
    setHeartRate(56);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <InfoCard title="Passos de hoje" value={steps.toString()} unit="passos" />
      <InfoCard title="Horas de sono" value={sleep.toString()} unit="h" />
      <InfoCard title="Hidratação" value={hydration.toString()} unit="L" />
      <InfoCard title="Frequência cardíaca" value={heartRate.toString()} unit="bpm" />

      <BarChartCard
        title="Horas de Sono (últimos dias)"
        data={[2.2, 4.2,5.2, 6.8, 7.5, 9.1, 6.3]}
        labels={['S','T', 'Q', 'Q', 'Sex', 'S', 'D']}
        color="#9575CD"
      />

      <BarChartCardWater
        title="Hidratação (últimos dias)"
        data={[1.5,1.2, 1.8, 2.0, 2.3, 2.5, 1.9]}
        labels={['S','T', 'Q', 'Q', 'Sex', 'S', 'D']}
        color="#4DD0E1"
      />

      <BarChartCardFreqCard
        title="Frequência Cardíaca (últimos dias)"
        data={[61,60, 62, 58, 56, 55, 57]}
        labels={['S','T', 'Q', 'Q', 'Sex', 'S', 'D']}
        color="#FF7043"
      />

      <BarChartPassos
        title="Passos (últimos dias)"
        data={[2000, 5000, 6000, 7000, 8000, 3000, 2000]}
        labels={['S','T', 'Q', 'Q', 'Sex', 'S', 'D']}
        color="#66BB6A"
      />

      <View style={styles.button}>
        <Button
          title="Ver mais informações"
          color="#00bcd4"
          onPress={() => Linking.openURL('https://www.saude.gov.br/')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  button: {
    marginTop: 20,
    marginBottom: 60
  },
});
