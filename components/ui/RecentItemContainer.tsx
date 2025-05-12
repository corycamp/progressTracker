import { View, Text, FlatList } from "react-native";
import RecentItem from "./RecetItem";
import { styles } from "@/assets/styles";

export interface itemData {
  date: string;
  activities: {
    name: string;
    reps?: number;
    sets?: number;
    duration?: {
      hours: number;
      minutes: number;
    };
  }[];
}

interface RecentItemContainerProps {
  data: itemData[];
  onItemClicked: (selectedItem: string) => void;
}

export default function RecentItemContainer(props: RecentItemContainerProps) {
  const { data, onItemClicked } = props;
  return (
    <View style={styles.recentContainer}>
      <Text style={styles.recentHeader}>Recent Workouts:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RecentItem
            key={item.date}
            date={item.date}
            activities={item.activities.length}
            onItemClicked={onItemClicked}
          />
        )}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
}
