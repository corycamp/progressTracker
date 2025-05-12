import { styles } from "@/assets/styles";
import { View, Text, Pressable } from "react-native";

interface RecentItemProps {
  date: string;
  activities: number;
  onItemClicked: (selectedItem: string) => void;
}

export default function RecentItem(props: RecentItemProps) {
  const { date, activities, onItemClicked } = props;
  return (
    <Pressable onPress={() => onItemClicked(date)}>
      <View style={styles.recentItemContainer}>
        <View style={styles.recentItemColumn}>
          <Text style={styles.recentItemHeader}>Date:</Text>
          <Text style={styles.recentItemValue}>{date}</Text>
        </View>
        <View style={styles.recentItemColumn}>
          <Text style={styles.recentItemHeader}>Activities:</Text>
          <Text style={styles.recentItemValue}>{activities}</Text>
        </View>
      </View>
    </Pressable>
  );
}
