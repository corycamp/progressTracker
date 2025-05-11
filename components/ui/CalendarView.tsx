import { styles } from "@/assets/styles";
import { View } from "react-native";
import {Calendar} from 'react-native-calendars';

export default function CalendarView() {
    return (
      <View style={styles.calendarContainer}>
            <Calendar />
        </View>
    )
}