import { View, Text, FlatList, ScrollView } from "react-native";
import RecentItem from "./RecetItem";
import { styles } from "@/assets/styles";
import ActivityItemInput from "./ActivityItemInput";

export interface Activity {
  name: string;
  reps?: number;
  sets?: number;
  duration?: {
    hours: number;
    minutes: number;
  };
}

interface ActivityAdderContainerProps {
  activities: Activity[];
  setActivityCounter: React.Dispatch<React.SetStateAction<number>>;
  activityCounter: number;
}

export default function ActivityAdderContainer() {
  // props: ActivityAdderContainerProps
  // const { activities } = props;
  return (
    <View style={styles.addActivityContainer}>
      <Text style={styles.recentHeader}>Enter Workout:</Text>
      <ActivityItemInput activities={[]} />
      <View style={styles.recentContainer}>
        <Text>Workouts Entered:</Text>
        <FlatList
          data={[]}
          renderItem={({ item }) => <>HI</>}
          // keyExtractor={(item) => item.date}
        />
      </View>
    </View>
  );
}
