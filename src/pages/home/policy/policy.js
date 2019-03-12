import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

const list = [
    {
        src: 'https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png',
        desc: '网易自营品牌'
    },
    {
        src: 'https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png',
        desc: '30天无忧退货'
    },
    {
        src: 'https://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png',
        desc: '48小时快速退款'
    }
]
export default class Policy extends Component {

    render () {

        return (
            <View className='policyView'>
                {
                    list.map((item, index) => (
                        <View key={item.desc} className='policyItem'>
                            <Image src={item.src} className='policyIcon'/>
                            <Text className='policyTxt'>{item.desc}</Text>
                        </View>
                    ))
                }
            </View>
        )
    }
}