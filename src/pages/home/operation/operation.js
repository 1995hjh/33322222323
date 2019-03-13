import Taro, { Component } from '@tarojs/taro'
import { View,  Text, Image } from '@tarojs/components'
import Opat1 from '../../../assets/opat1.gif'
import Opat2 from '../../../assets/opat2.jpg'
import Opat3 from '../../../assets/opat3.png'
import Opat4 from '../../../assets/opat4.png'
import Opat5 from '../../../assets/opat5.png'
import './operation.css'

export default class Operation extends Component {

    render () {
        return (
            <View className='OpaView'>
                <View className='OpaItemView'>
                    <Image src={Opat1} className='opatIcon'/>
                    <Image src={Opat2} className='opatIcon' />
                    <Image src={Opat3} className='opatIcon' />
                </View>
                <View className='OpaItemView'>
                    <View className='opatBFView'>
                        <Text className='opatBFTitle'>先领券更优惠</Text>
                        <View className='bfIconView'>
                            <Image src={Opat4} className='opatBFIcon' />
                            <View>
                                <Text className='opatJian'>每满149减15券</Text>
                                <Text className='opatGet'>马上去领取 ></Text>
                            </View>
                        </View>
                    </View>
                    <View className='opatBLView'>
                        <Text className='opatBFTitle'>特价商品</Text>
                        <View className='shopBLView'>
                            <Image src={Opat5} className='opatBLIcon'/>
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