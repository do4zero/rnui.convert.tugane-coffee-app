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

const avatar = require('../../assets/avatar.jpg');

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: SPACING,
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
