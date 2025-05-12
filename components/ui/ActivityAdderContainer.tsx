import { View, Text, FlatList, ScrollView } from "react-native";
import RecentItem from "./RecetItem";
import { styles } from "@/assets/styles";
import ActivityItem from "./ActivityItem";

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

export default function ActivityAdderContainer(
  props: ActivityAdderContainerProps
) {
  const { activities } = props;
  return (
    <View style={styles.recentContainer}>
      <Text style={styles.recentHeader}>Recent Workouts:</Text>
      <ScrollView>{}</ScrollView>
    </View>
  );
}
