import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '../../../components/homeTitle/homeTitle'
import { Tag } from '../../../components/tag/tag'
import './popular.css'

export default class Popular extends Component {

    render() {
        return (
            <View className='popularArea'>
                <HomeTitle title='人气推荐' />
                <View className='popularView'>
                    <View className='popularContent'>
                        <Image src='https://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg' className='popularIcon'/>
                        <View className='popularTxt'>
                            <Tag title='居家特惠'/>
                            <Text className='contentDd'>全棉针织条纹四件套 新款</Text>
                            <Text className='contentdt'>超柔针织棉，亲肤可裸睡</Text>
                            <Text className='price'>¥269.00</Text>
                        </View>
                    </View>
                    <View className='listView'>
                        <View className='itemView'>
                            <Image src='https://yanxuan.nosdn.127.net/1cafde9d2e4bf4c87d1724d7d0cf0c5e.png' className='itemIcon'/>
                            <Tag title='好货内部价'/>
                            <Text className='itemPriceTxt'>Free Cross男式四面弹力牛仔裤 </Text><Text className='itemPrice'>¥194.00</Text>
                        </View>
                        <View className='itemView'>
                            <Image src='https://yanxuan.nosdn.127.net/04a607d7b2f3d0f8a3beea7c0ffa3a72.png' className='itemIcon' />
                            <Tag title='好货内部价' />
                            <Text className='itemPriceTxt'>黑芝麻 </Text><Text className='itemPrice'>¥69.00</Text>
                        </View>
                        <View className='itemView'>
                            <Image src='https://yanxuan.nosdn.127.net/9cf70438be99e0662c8123032228f870.png' className='itemIcon' />
                            <Tag title='限时购' />
                            <Text className='itemPriceTxt'>泰国制造 天然乳胶枕 护颈按摩 </Text><Text className='itemPrice'>¥169.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}