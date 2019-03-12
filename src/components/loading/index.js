import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import loading from './assets/loading.gif'
import './index.css'

export default class Loading extends Component {
    render () {
        return (
            <View className='loadView'>
                <Image src={loading} className='loadIcon'/>
            </View>
        )
    }
}