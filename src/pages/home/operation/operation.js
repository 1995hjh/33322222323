import Taro, { Component } from '@tarojs/taro'
import { View,  Text, Image } from '@tarojs/components'
import './operation.css'

export default class Operation extends Component {

    render () {
        return (
            <View className='OpaView'>
                <View className='OpaItemView'>
                    <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/opat1.gif' className='opatIcon'/>
                    <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/opat2.jpg' className='opatIcon' />
                    <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/opat3.png' className='opatIcon' />
                </View>
                <View className='OpaItemView'>
                    <View className='opatBFView'>
                        <Text className='opatBFTitle'>先领券更优惠</Text>
                        <View className='bfIconView'>
                            <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/opat4.png' className='opatBFIcon' />
                            <View>
                                <Text className='opatJian'>每满149减15券</Text>
                                <Text className='opatGet'>马上去领取 ></Text>
                            </View>
                        </View>
                    </View>
                    <View className='opatBLView'>
                        <Text className='opatBFTitle'>特价商品</Text>
                        <View className='shopBLView'>
                            <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/opat5.png' className='opatBLIcon'/>
                            <View className='shoppingView'>
                                <Text className='price'>¥69</Text>
                                <Text className='originPrice'>¥119</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}