import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '../../../components'
import './limitShop.css'

export default class LimitShop extends Component {

    render () {
        return (
            <View className='limitView'>
                <HomeTitle title='限时购'>
                    <View className='timeView'>
                        <Text className='timeTxt'>23</Text>
                        <Text className='timeSplit'>:</Text>
                        <Text className='timeTxt'>21</Text>
                        <Text className='timeSplit'>:</Text>
                        <Text className='timeTxt'>12</Text>
                    </View> 
                </HomeTitle>
                <View className='limitContent'>
                    <View className='limitItem'>
                        <Image src='https://yanxuan.nosdn.127.net/8951aad48bfdc62b06ae445b8082d47d.png' className='imageView'/>
                        <View>
                            <Text className='pirce'>¥23.8</Text>
                            <Text className='litoriginPrice'>¥28</Text>
                        </View>
                    </View>
                    <View className='limitItem'>
                        <Image src='https://yanxuan.nosdn.127.net/5a07b6a1c9d8d5e039e8360d0f92c396.png' className='imageView' />
                        <View>
                            <Text className='pirce'>¥139</Text>
                            <Text className='litoriginPrice'>¥199</Text>
                        </View>
                    </View>
                    <View className='limitItem'>
                        <Image src='https://yanxuan.nosdn.127.net/9e5fd06c92b89b6a67ea73de7ecfcb6d.png' className='imageView' />
                        <View>
                            <Text className='pirce'>¥169</Text>
                            <Text className='litoriginPrice'>¥199</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}