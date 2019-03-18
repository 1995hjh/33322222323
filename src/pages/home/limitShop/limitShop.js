import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '../../../components/homeTitle/homeTitle'
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
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/limit1.png' className='imageView'/>
                        <View>
                            <Text className='pirce'>¥23.8</Text>
                            <Text className='originPrice'>¥28</Text>
                        </View>
                    </View>
                    <View className='limitItem'>
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/limit2.png' className='imageView' />
                        <View>
                            <Text className='pirce'>¥139</Text>
                            <Text className='originPrice'>¥199</Text>
                        </View>
                    </View>
                    <View className='limitItem'>
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/limit3.png' className='imageView' />
                        <View>
                            <Text className='pirce'>¥169</Text>
                            <Text className='originPrice'>¥199</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}