import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import '../user.css'
import defaultAvatar from '../../../assets/default-avatar.png'
import qrCode from '../../../assets/qr-code.png'

export default class Profile extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {

        const { userInfo } = this.props;

        return (
            <View className='userView'>
               <Image src={userInfo.avatar || defaultAvatar}
                    className='userIcon'/>
                <View className='loginView'>
                    <Text className='userLogin'>{userInfo.login ? userInfo.nickname : '未登录'}</Text>
                    <Text className='userTip'>{userInfo.login ? '已登录' : '点击账号登录'}</Text>
                </View>
                <View className='qrView'>
                    <Image src={qrCode}
                        className='qrIcon'/>
                </View>  
            </View>
        )
    }
}

