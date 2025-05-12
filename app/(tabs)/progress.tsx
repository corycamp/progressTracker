import { styles } from "@/assets/styles";
import CalendarView from "@/components/ui/CalendarView";
import RecentItemContainer, {
  itemData,
} from "@/components/ui/RecentItemContainer";
import RecentItemPropUp from "@/components/ui/RecentItemPopUp";
import { testData } from "@/constants/data";
import { useState } from "react";
import { SafeAreaView, View, Text, Modal } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [isModalOpen, openModal] = useState<boolean>(false);
  const [activitySelected, selectActivity] = useState<itemData>();
  const data = Array.from(testData.values());
  const recentItemClicked = (selectedItem: string) => {
    const dataSelected = testData.get(selectedItem);
    selectActivity(dataSelected);
    openModal(!isModalOpen);
  };
  const closeModal = () => {
    openModal(!isModalOpen);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainViewContainer}>
        <Modal visible={isModalOpen} transparent={true} animationType="slide">
          <RecentItemPropUp
            closeModal={closeModal}
            dataSelected={activitySelected}
          />
        </Modal>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Progress Tracker</Text>
        </View>
        <CalendarView />
        <RecentItemContainer data={data} onItemClicked={recentItemClicked} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
