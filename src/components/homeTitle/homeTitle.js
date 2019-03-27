import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import arrowRight from './assets/arrow-right.png'
import './homeTitle.scss'

 export default class HomeTitle extends Component {

    render () {
        return (
            <View className='homeTitleView'>
                <Text className='titleDesc'>{this.props.title}</Text>
                <View className='homeContentView'>
                    {this.props.children}
                </View>
                <View className='titleRightView'>
                    <Text className='titleTxt'>更多</Text>
                    <Image className='homeTitleIcon' src={ arrowRight }/>
                </View>
            </View>
        )
    }

} 