import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CheckBox, Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {swaptoeth} from '../../actions/swapAction';
import Header from '../../components/Header';
import {CustomModal} from '../../components/CustomModal';
import {message} from '../../constant/message';

import styles from './styles';
const SwapToEth = ({navigation}) => {
  const dispatch = useDispatch();
  const [countHDT, setCountHDT] = useState(0);
  const [error, setError] = useState({});
  const [checked, setChecked] = useState(true);
  const [modalData, setModalData] = useState('');
  const [visible, setVisible] = useState(false);
  const store = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile);
  const errors = useSelector(state => state.errors);

  const swap = async () => {
    await axios
      .get('https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT')
      .then(res => {
        const price = res.data.weightedAvgPrice;
        if (price > 0) {
          if (isNaN(countHDT)) {
            setError({countHDT: 'only input number'});
          } else {
            if (checked) {
              dispatch(
                swaptoeth(
                  store.user.id,
                  Number(profile.profiledata.countHDT),
                  price,
                  onShowModal,
                ),
              );
            } else {
              dispatch(swaptoeth(store.user.id, Number(countHDT), price));
            }
          }
        }
      });
  };
  const onShowModal = async flag => {
    console.log(flag);
    const data = {
      message: message[1].message,
      flag: flag,
    };
    await setModalData(data);
    await setVisible(!visible);
  };
  useEffect(() => {
    setError(errors);
  }, [errors]);

  return (
    <>
      <Header text="SWAP TO ETH" navigation={navigation} />
      <CustomModal item={modalData} visible={visible} setVisible={setVisible} />
      <View style={styles.container}>
        <View>
          <Text style={styles.headText}>SWAP TO ETH</Text>
        </View>
        <View style={styles.userDiv}>
          <Text style={styles.labelText}>Current HDT Amount</Text>
          <Input
            value={profile.profiledata.countHDT.toString() + ' HDT'}
            disabled
          />
          <Text style={styles.labelText}>Current ETH Amount</Text>
          <Input
            value={profile.profiledata.countETH.toString() + ' ETH'}
            disabled
          />
          <Text style={styles.labelText}>HDT</Text>
          <Input
            value={
              checked
                ? profile.profiledata.countHDT.toString()
                : countHDT.toString()
            }
            placeholder="Please input HDT Amount"
            onChangeText={message => {
              setCountHDT(message);
            }}
            errorStyle={{color: 'red'}}
            keyboardType="numeric"
            errorMessage={error.countHDT}
            disabled={checked ? true : false}
          />
        </View>
        {/* <View style={styles.userDiv}>
          <Text style={styles.labelText}>ETH</Text>
          <Input
            value={countETH.toString()}
            placeholder="Please input ETH Amount"
            onChangeText={message => {
              setCountETH(message);
            }}
            errorStyle={{color: 'red'}}
            keyboardType="numeric"
            errorMessage={error.countETH}
          />
        </View> */}
        <CheckBox
          center
          title="ALL"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
        <TouchableOpacity
          style={styles.submitButtonStyle}
          activeOpacity={0.5}
          onPress={() => {
            swap();
          }}>
          <Text style={styles.TextStyle}>SWAP</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default SwapToEth;
