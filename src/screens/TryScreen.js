import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

const TryScreen = () => {
  return (
    <>
      <View style={styles.cellBox1}>
        <DropDownPicker
          items={[
            { label: "5", value: 5 },
            { label: "10", value: 10 },
            { label: "20`", value: 20 },
            { label: "45`", value: 45 },
            { label: "57`", value: 57 },
          ]}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{
            backgroundColor: "#fafafa",
          }}
          onChangeItem={(item) =>
            buyOfferStore.setBatchQuantityInTons(item.value)
          }
        />
      </View>
      <View style={styles.cellBox2}>
        <DropDownPicker
          items={[
            { label: "5", value: 5 },
            { label: "10", value: 10 },
            { label: "20`", value: 20 },
            { label: "45`", value: 45 },
            { label: "57`", value: 57 },
          ]}
          itemStyle={{
            justifyContent: "flex-start",
            overflow: "visible",
          }}
          containerStyle={{ width: 150, height: 70 }}
          dropDownStyle={{ backgroundColor: "black", overflow: "visible" }}
          onChangeItem={(item) =>
            buyOfferStore.setBatchQuantityInTons(item.value)
          }
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  cellBox1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    padding: 10,
    minHeight: 55,
    height: 20,
    marginTop: -1,

    zIndex: 2,
  },
  cellBox2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    padding: 10,
    minHeight: 55,
    height: 20,
    marginTop: -1,
    overflow: "visible",
  },
});

export default TryScreen;
