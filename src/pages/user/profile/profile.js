import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import '../user.scss'
import defaultAvatar from '../../../assets/default-avatar.png'
import qrCode from '../../../assets/qr-code.png'

export default class Profile extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {

        return (
            <View className='userView'>
               <Image src={defaultAvatar}
                    className='userIcon'/>
                <View className='loginView'>
                    <Text className='userLogin'>{ '未登录'}</Text>
                    <Text className='userTip'>{'点击账号登录'}</Text>
                </View>
                <View className='qrView'>
                    <Image src={qrCode}
                        className='qrIcon'/>
                </View>  
            </View>
        )
    }
}

