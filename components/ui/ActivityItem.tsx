import { styles } from "@/assets/styles";
import { View, Text, Pressable } from "react-native";
import { Activity } from "./ActivityAdderContainer";

interface ActivityItemProps {
  activities: Activity[];
}

export default function ActivityItem(props: ActivityItemProps) {
  const { activities } = props;

  return (
    <View style={styles.activityItemContainer}>
      <View style={styles.activityItemColumn}></View>
    </View>
  );
}
