import { styles } from "@/assets/styles";
import { View, Text } from "react-native";

export interface ActivityLogItemProps {
  Exercise: string;
  reps?: number;
  sets?: number;
  duration?: {
    hours: number;
    minutes: number;
  };
}

export default function ActivityLogItem(props: ActivityLogItemProps) {
  const { Exercise, reps, sets, duration } = props;
  const durationText = !!duration
    ? `${!!duration?.hours ? `${duration.hours} h` : ""} ${
        !!duration?.minutes ? `${duration.minutes} min` : ""
      }`
    : "";

  return (
    <View style={styles.activityItemContainer}>
      <View style={styles.activityItemColumn}>
        <Text style={styles.activityItemHeader} numberOfLines={1}>
          Exercise: {Exercise}
        </Text>
        {sets ? (
          <Text style={styles.activityItems}>Sets: {!!sets ? sets : 0}</Text>
        ) : null}
        {reps ? (
          <Text style={styles.activityItems}>Reps: {!!reps ? reps : 0}</Text>
        ): null}
        {duration ? (
          <Text style={styles.activityItems}>Duration: {durationText}</Text>
        ) : null}
      </View>
    </View>
  );
}
