import { styles } from "@/assets/styles";
import { View, Text, TextInput } from "react-native";

interface ActivityItemProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSets: React.Dispatch<React.SetStateAction<string>>
  setReps: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
  setHours: React.Dispatch<React.SetStateAction<string>>
  name:string;
  sets:string;
  reps:string;
  minutes:string;
  hours:string;
}

export default function ActivityItemInput(props: ActivityItemProps) {
  const { setName, setSets, setReps, setMinutes, setHours, hours, minutes, sets, reps, name } = props;

  return (
    <View style={styles.activityItemContainer}>
      <View style={styles.activityItemColumn}>
        <View style={styles.activityInputText}>
          <Text>Excercise Name:</Text>
          <TextInput
            style={styles.activityDataInputBox}
            placeholder="Enter exercise Name"
            onChangeText={(newText) => setName(newText)}
            defaultValue={name}
          />
        </View>
        <View style={styles.activityInputText}>
          <Text>Sets:</Text>
          <TextInput
            style={{
              ...styles.activityDataInputBox,
              width: 90,
            }}
            placeholder="How many Sets?"
            onChangeText={(newText) => setSets(newText)}
            defaultValue={sets}
            keyboardType="numeric"
            contextMenuHidden={true}
          />
          <Text>Reps:</Text>
          <TextInput
            style={{
              ...styles.activityDataInputBox,
              width: 90,
            }}
            placeholder="How many Reps?"
            onChangeText={(newText) => setReps(newText)}
            defaultValue={reps}
            keyboardType="numeric"
            contextMenuHidden={true}
          />
        </View>
        <View style={styles.activityInputText}>
          <Text>Duration:</Text>
          <TextInput
            style={{
              ...styles.activityDataInputBox,
              width: 80,
            }}
            placeholder="Hours"
            onChangeText={(newText) => setHours(newText)}
            defaultValue={hours}
            keyboardType="numeric"
            contextMenuHidden={true}
          />
          <Text>:</Text>
          <TextInput
            style={{
              ...styles.activityDataInputBox,
              width: 80,
            }}
            placeholder="Minutes"
            onChangeText={(newText) => setMinutes(newText)}
            defaultValue={minutes}
            keyboardType="numeric"
            contextMenuHidden={true}
          />
        </View>
      </View>
    </View>
  )
}
