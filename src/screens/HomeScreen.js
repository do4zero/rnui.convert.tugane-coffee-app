import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SPACING from '../config/SPACING';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import SearchField from '../components/SearchField';

const avatar = require('../../assets/avatar.jpg');

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: SPACING,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                borderRadius: SPACING,
                overflow: 'hidden',
                width: SPACING * 4,
                height: SPACING * 4,
              }}
            >
              <BlurView
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name='menu'
                  size={SPACING * 2.5}
                  color={colors.secondary}
                />
              </BlurView>
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: 'hidden',
              borderRadius: SPACING,
            }}
          >
            <BlurView
              style={{
                height: '100%',
                padding: SPACING / 2,
              }}
            >
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: SPACING,
                }}
                source={avatar}
              />
            </BlurView>
          </View>
        </View>

        <View style={{ width: '80%', marginVertical: SPACING * 3 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 3.5,
              fontWeight: '600',
            }}
          >
            Find the best coffe for you
          </Text>
        </View>

        <SearchField />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
