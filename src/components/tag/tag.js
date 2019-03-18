import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './tag.css'

export default class Tag extends Component {
    render() {
        return (
            <View>
                <Text className='txt'>{this.props.title}</Text>
            </View>
        )
    }
}