import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {CommonText} from '../../components/Common';
import Header from '../../components/Header';
import {getUserById} from '../../actions/userAction';
const SelectedUser = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [activeSections, setActiveSections] = useState([]);
  const SECTIONS = [
    {
      title: 'STAKING DETAILS',
      content: <Text>'Lorem ipsum...'</Text>,
    },
    {
      title: 'REFERRAL DETAILS',
      content: 'Lorem ipsum...',
    },
    {
      title: 'WITHDRAWAL DETAILS',
      content: <Text>'Lorem ipsum...'</Text>,
    },
    {
      title: 'TRANSFER DETAILS',
      content: <Text>'Lorem ipsum...'</Text>,
    },
  ];

  const _renderHeader = section => {
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: 20,
              backgroundColor: 'rgb(223, 100, 71)',
              paddingVertical: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {section.title}
          </Text>
        </View>
      </View>
    );
  };

  const _renderContent = section => {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _updateSections = activeSections => {
    setActiveSections(activeSections);
  };
  const store = useSelector(state => state.user);
  useEffect(() => {
    dispatch(getUserById(route.params.id));
  }, [route]);
  return (
    <>
      <Header text="User Detail" navigation={navigation} />
      <ScrollView>
        <View style={{width: '100%', padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View>
              <CommonText color="rgb(223, 100, 71)" fontSize="15px">
                USER ETH ADDRESS
              </CommonText>
            </View>
            <View
              style={{
                width: '50%',
              }}>
              <CommonText color="rgb(223, 100, 71)" fontSize="14px">
                {store.selectedUser.address}
              </CommonText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View>
              <CommonText color="rgb(223, 100, 71)" fontSize="15px">
                PASSWORD
              </CommonText>
            </View>
            <View
              style={{
                width: '50%',
              }}>
              <CommonText color="rgb(223, 100, 71)" fontSize="14px">
                {store.selectedUser.password}
              </CommonText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View>
              <CommonText color="rgb(223, 100, 71)" fontSize="15px">
                USER BALANCE
              </CommonText>
            </View>
            <View
              style={{
                width: '50%',
              }}>
              <CommonText color="rgb(223, 100, 71)" fontSize="14px">
                $5000
              </CommonText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 60,
            }}>
            <View>
              <View style={{backgroundColor: 'rgb(223, 100, 71)', padding: 10}}>
                <CommonText>HDT BALANCE</CommonText>
              </View>
              <View
                style={{
                  backgroundColor: 'rgb(248,227,224)',
                }}>
                <View style={{padding: 15}}>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'rgb(223, 100, 71)',
                    }}>
                    <TextInput
                      keyboardType="numeric"
                      style={{
                        padding: 4,
                        fontWeight: 'bold',
                        maxWidth: 110,
                      }}>
                      {store.selectedUser.countHDT}
                    </TextInput>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      paddingVertical: 3,
                      backgroundColor: 'rgb(223,100,71)',
                      borderRadius: 20,
                      borderWidth: 1,
                      width: 60,
                      borderColor: '#fff',
                    }}>
                    <CommonText color="white" fontSize="12px">
                      EDIT
                    </CommonText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      paddingVertical: 3,
                      backgroundColor: 'rgb(223,100,71)',
                      borderRadius: 20,
                      borderWidth: 1,
                      width: 60,
                      borderColor: '#fff',
                    }}>
                    <CommonText color="white" fontSize="12px">
                      APPLY
                    </CommonText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <View style={{backgroundColor: 'rgb(223, 100, 71)', padding: 10}}>
                <CommonText>ETH BALANCE</CommonText>
              </View>
              <View
                style={{
                  backgroundColor: 'rgb(248,227,224)',
                }}>
                <View style={{padding: 15}}>
                  <View
                    style={{
                      borderWidth: 3,
                      borderColor: 'rgb(223, 100, 71)',
                    }}>
                    <TextInput
                      keyboardType="numeric"
                      style={{padding: 4, fontWeight: 'bold', maxWidth: 110}}>
                      {store.selectedUser.countETH}
                    </TextInput>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      paddingVertical: 3,
                      backgroundColor: 'rgb(223,100,71)',
                      borderRadius: 20,
                      borderWidth: 1,
                      width: 60,
                      borderColor: '#fff',
                    }}>
                    <CommonText color="white" fontSize="12px">
                      EDIT
                    </CommonText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      paddingVertical: 3,

                      backgroundColor: 'rgb(223,100,71)',
                      borderRadius: 20,
                      borderWidth: 1,
                      width: 60,
                      borderColor: '#fff',
                    }}>
                    <CommonText color="white" fontSize="12px">
                      APPLY
                    </CommonText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
            }}>
            <Accordion
              sections={SECTIONS}
              activeSections={activeSections}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
              onChange={_updateSections}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default SelectedUser;
