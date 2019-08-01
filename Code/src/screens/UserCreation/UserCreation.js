import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import SideMenu from "react-native-side-menu";
import styles from './UserCreation.styles'
import {
  Header,
  Button
} from '../../components'
export default class UserCreation extends Component {
  static navigationOptions = ({navigation, screenProps})=> ({
    title: '3BB Stream',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: "center",
      justifyContent: 'center',
      flex: 1,
      fontWeight: '300',
      fontSize: 16,
      color: '#004056',
    },
    headerLeft:(
      <TouchableOpacity style={{paddingLeft: 15}}  onPress={navigation.getParam('toggleMenu')}>
        <Icon size={20} color="#004056" name='bars'></Icon>
      </TouchableOpacity>
    ),
    headerRight: (<View></View>)
  });
  state = {
    tab: this.props.navigation.getParam('selectedSegment')
  }
  constructor (props) {
    super(props);
    this.state = {isOpen: false};
  };

  componentDidMount() {
    this.props.navigation.setParams({ toggleMenu: this._toggleMenu });
  }

  _toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  };

  closeMenu = () =>{
    this.setState({ isOpen: false });
  }

  render () {
    const menu = <Menu navigation={this.props.navigation} parentNode={this}/>;

    return (
      <SideMenu
        isOpen={this.state.isOpen} 
        menu={menu}
      >
        <View style={styles.container}>
          <View style={styles.viewContainer}>
            <Text style={styles.heading}>Download and dash</Text>
            <Text style={styles.text}>Save your data, aligator. Watch offline on the{'\n'}tube, train... or tractor</Text>
            <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/userCreation.png')} />
          </View>
          <Button onPress={() => this.props.navigation.navigate('Signup')} text='JOIN FREE FOR A MONTH' />
        </View>
      </SideMenu>
    )
  }
}
