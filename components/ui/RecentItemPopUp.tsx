import { styles } from "@/assets/styles";
import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { IconSymbol } from "./IconSymbol";
import { itemData } from "./RecentItemContainer";
import React from "react";
import ActivityLogItem from "./ActivityLogItem";

interface RecentItemPopUpProps {
  closeModal: () => void;
  dataSelected?: itemData;
}

export default function RecentItemPropUp(props: RecentItemPopUpProps) {
  const { dataSelected, closeModal } = props;
  return (
    <>
      {dataSelected && (
        <SafeAreaProvider>
          <SafeAreaView style={styles.mainViewPopUpModal}>
            <View style={styles.popUpModalTopSection}>
              <Text style={styles.popUpModalHeader}>Activity Log</Text>
              <Pressable onPress={closeModal}>
                <IconSymbol size={28} name="xmark" color={"black"} />
              </Pressable>
            </View>
            <View style={styles.popUpModalDateContainer}>
              <Text style={styles.popUpModalDate}>{dataSelected.date}</Text>
            </View>
            <View>
              <FlatList
                data={dataSelected.activities}
                renderItem={({ item, index }) => (
                  <ActivityLogItem
                    key={index}
                    Exercise={item.name}
                    reps={item.reps}
                    sets={item.sets}
                    duration={item.duration}
                  />
                )}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      )}
    </>
  );
}
