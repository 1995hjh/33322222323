import Taro, { Component } from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import Profile from './profile/profile'
import { getWindowHeight } from '../../utils/style'
import Menu from './menu/menu'
import './user.css'


export default class User extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      
    const { userInfo } = this.props;

    return (
        <ScrollView className='userBG'
            scrollY
            style={{ height: getWindowHeight() }}>
            <Profile userInfo = { userInfo } />
            <Menu/>
        </ScrollView>
    )
  }
}

