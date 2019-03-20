import Taro, { Component } from '@tarojs/taro'
import { View,  Text, Image } from '@tarojs/components'
import './operation.css'

export default class Operation extends Component {

    render () {
        return (
            <View className='OpaView'>
                <View className='OpaItemView'>
                    <Image src='https://yanxuan.nosdn.127.net/9d28daebd03a8569cf1d4b12a67720dc.gif' className='opatIcon'/>
                    <Image src='https://yanxuan.nosdn.127.net/c68197c127719479a7d704b76ba7bd40.jpg' className='opatIcon' />
                    <Image src='https://yanxuan.nosdn.127.net/0c0b2faf47da784b3b5e34346373b01c.png' className='opatIcon' />
                </View>
                <View className='OpaItemView'>
                    <View className='opatBFView'>
                        <Text className='opatBFTitle'>先领券更优惠</Text>
                        <View className='bfIconView'>
                            <Image src='https://yanxuan.nosdn.127.net/c9b2668b0b4c5f41984569ddd1f62323.png' className='opatBFIcon' />
                            <View>
                                <Text className='opatJian'>每满149减15券</Text>
                                <Text className='opatGet'>马上去领取 ></Text>
                            </View>
                        </View>
                    </View>
                    <View className='opatBLView'>
                        <Text className='opatBFTitle'>特价商品</Text>
                        <View className='shopBLView'>
                            <Image src='https://yanxuan.nosdn.127.net/101198db97ec5a4ef9b7b6f67c44045e.jpg' className='opatBLIcon'/>
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