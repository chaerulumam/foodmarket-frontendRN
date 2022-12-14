import {Picker} from '@react-native-picker/picker';
import {View, Text, StyleSheet} from 'react-native';

const Select = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bogor" value="Bogor" />
          <Picker.Item label="Depok" value="Depok" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Tangerang" value="Tangerang" />
          <Picker.Item label="Bekasi" value="Bekasi" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Reqular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
