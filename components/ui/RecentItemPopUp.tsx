import { styles } from '@/assets/styles';
import {View, Text, Modal, SafeAreaView, Pressable} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IconSymbol } from './IconSymbol';

interface RecentItemPopUpProps{
    closeModal: ()=>void;
}

export default function RecentItemPropUp(props:RecentItemPopUpProps){
    const {closeModal} = props;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainViewContainer}>
                <View style={styles.popUpModalTopSection}>
                    <Text style={styles.popUpModalHeader}>Test</Text>
                    <Pressable onPress={closeModal}><IconSymbol size={28} name="xmark" color={"black"} /></Pressable>
                </View>
                <View><Text>Test</Text></View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}