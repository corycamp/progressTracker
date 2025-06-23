import { styles } from "@/assets/styles";
import ActivityAdderContainer from "@/components/ui/ActivityAdderContainer";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.mainViewContainer}>
          <View style={styles.mainViewHeaderContainer}>
            <Text style={styles.mainViewHeaderText}>Workout Tracker</Text>
          </View>
          <View>
            <ActivityAdderContainer/>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
