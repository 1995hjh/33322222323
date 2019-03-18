import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/compponent'
import { HomeTitle } from '../../../components/homeTitle/homeTitle.js'
import './brandFactory.css'

export default class BrandFactory extends Component {
    
    render () {
        return (
            <View className='brandView'>
                <HomeTitle title='品牌制造商直供'/>
                <View className='brandImageArea'>
                    <View className='brandItemView'>
                        <View className='listView'>
                            <Text className='brandTitle'>来自海外制造商</Text>
                            <View>
                                <Text className='priceTxt'>9.9元起</Text>
                                <Text className='itemTag'>上新</Text>
                            </View>
                        </View>
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/brand1.png' className='itemIcon'/>
                    </View>
                    <View className='brandItemView'>
                        <View className='listView'>
                            <Text className='brandTitle'>来自CK制造商</Text>
                            <View>
                                <Text className='priceTxt'>32.9元起</Text>
                                <Text className='itemTag'>上新</Text>
                            </View>
                        </View>
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/brand2.png' className='itemIcon' />
                    </View>
                    <View className='brandItemView'>
                        <View className='listView'>
                            <Text className='brandTitle'>来自新秀丽制造商</Text>
                            <View>
                                <Text className='priceTxt'>34.9元起</Text>
                            </View>
                        </View>
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/brand3.png' className='itemIcon' />
                    </View>
                    <View className='brandItemView'>
                        <View className='listView'>
                            <Text className='brandTitle'>来自Nine West制造商</Text>
                            <View>
                                <Text className='priceTxt'>219元起</Text>
                            </View>
                        </View>
                        <Image src='cloud://wxminprogram-0653f4.7778-wxminprogram-0653f4/brand4.png' className='itemIcon' />
                    </View>
                </View>
            </View>
        )
    }
}