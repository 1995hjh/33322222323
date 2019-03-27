import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './category.scss'

export default class Category extends Component {
    render () {
        return (
            <View className='cateView'>
                <Text className='cateTitle'>类目热销榜</Text>
                <View className='cateContent'>
                    <View className='cateFItem'>
                        <View>
                            <Text className='cateFTxt'>热销榜</Text>
                            <View className='cateFLine'></View>
                        </View>
                        <Image src='https://yanxuan.nosdn.127.net/e5bd9ad313799c0470e288d59c83f0d8.png' className='cateFIcon'/>
                    </View>
                    <View className='cateFItem cateFItemBlueBg'>
                        <View>
                            <Text className='cateFTxt'>好评榜</Text>
                            <View className='cateFLine'></View>
                        </View>
                        <Image src='https://yanxuan.nosdn.127.net/350e6d826e0012e9059d0cadbec3422e.png' className='cateFIcon' />
                    </View>
                </View>
                <View className='cateContent'>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>居家生活榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg' className='cateSIcon'/>
                    </View>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>服饰鞋包榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/1cafde9d2e4bf4c87d1724d7d0cf0c5e.png' className='cateSIcon' />
                    </View>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>美食酒水榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/04a607d7b2f3d0f8a3beea7c0ffa3a72.png' className='cateSIcon' />
                    </View>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>数码家电榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png' className='cateSIcon' />
                    </View>
                </View>
                <View className='cateContent'>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>个护清洁榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/acccca2cb5615ee557cddaf6512ee589.png' className='cateSIcon' />
                    </View>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>礼品特色榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/55425f24345d01992d61a1646325ac94.png' className='cateSIcon' />
                    </View>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>运动旅行榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/8d7a619fe512f9a100bd3b3ebe20ae9c.png' className='cateSIcon' />
                    </View>
                    <View className='cateSItem'>
                        <Text className='cateSTxt'>母婴亲子榜</Text>
                        <Image src='https://yanxuan.nosdn.127.net/0390a3aa000eeb416101e2c10cba9883.png' className='cateSIcon' />
                    </View>
                </View>
            </View>
        )
    }
}
