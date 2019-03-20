import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '../../../components'
import './brandFactory.css'

export default class BrandFactory extends Component {
    
    render () {
        return (
            <View className='brandView'>
                <HomeTitle title='品牌制造商直供'/>
                <View className='brandImageArea'>
                    <View className='brandItemView'>
                        <View className='brandListView'>
                            <Text className='brandTitle'>来自海外制造商</Text>
                            <View>
                                <Text className='priceTxt'>9.9元起</Text>
                                <Text className='itemTag'>上新</Text>
                            </View>
                        </View>
                        <Image src='https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png' className='brandItemIcon'/>
                    </View>
                    <View className='brandItemView'>
                        <View className='brandListView'>
                            <Text className='brandTitle'>来自CK制造商</Text>
                            <View>
                                <Text className='priceTxt'>32.9元起</Text>
                                <Text className='itemTag'>上新</Text>
                            </View>
                        </View>
                        <Image src='https://yanxuan.nosdn.127.net/f0ab529d1d34b61357889029793e1086.png' className='brandItemIcon' />
                    </View>
                    <View className='brandItemView'>
                        <View className='brandListView'>
                            <Text className='brandTitle'>来自新秀丽制造商</Text>
                            <View>
                                <Text className='priceTxt'>34.9元起</Text>
                            </View>
                        </View>
                        <Image src='https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png' className='brandItemIcon' />
                    </View>
                    <View className='brandItemView'>
                        <View className='brandListView'>
                            <Text className='brandTitle'>来自Nine West制造商</Text>
                            <View>
                                <Text className='priceTxt'>219元起</Text>
                            </View>
                        </View>
                        <Image src='https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png' className='brandItemIcon' />
                    </View>
                </View>
            </View>
        )
    }
}