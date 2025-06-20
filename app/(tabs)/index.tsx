import { styles } from "@/assets/styles";
import ActivityAdderContainer, {
  Activity,
} from "@/components/ui/ActivityAdderContainer";
import { itemData } from "@/components/ui/RecentItemContainer";
import { SetStateAction, useState } from "react";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [activityCounter, setActivityCounter] = useState<number>(1);
  const activities: Activity[] = [];
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.mainViewContainer}>
          <View style={styles.mainViewHeaderContainer}>
            <Text style={styles.mainViewHeaderText}>Workout Tracker</Text>
          </View>
          <View>
            <Text>Workout Tracker</Text>
            <ActivityAdderContainer
            // activities={[]}
            // setActivityCounter={setActivityCounter}
            // activityCounter={0}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
