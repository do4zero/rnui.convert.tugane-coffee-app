import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import categories from '../config/categories';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ marginRight: SPACING * 2, alignItems: 'center' }}
          onPress={() => handlePress(item.id)}
        >
          <Text
            style={[
              { color: colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && {
                color: colors.primary,
              },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: SPACING / 2,
                width: SPACING / 2,
                backgroundColor: colors.primary,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
