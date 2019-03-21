import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Tag } from '../../../components'
import './recommend.css'

export default class Recommend extends Component {
    render () {
        return (
            <View className='recommend-view'>
                <Text className='recommend-title'>为你推荐</Text>
                <View className='recommend-list-view'>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/1ff21a48ff35db41c09cd3036e9e3b2e.png' className='recommend-icon'/>
                            <Text className='recommend-icon-txt'>非油炸 好吃不上火</Text>
                        </View>
                        <Tag title='特价'/>
                        <Text className='recommend-content-txt'>大丈夫冻干牛肉面</Text>
                        <View>
                            <Text className='recommend-price'>¥22.80</Text>
                            <Text className='recommend-origin-price'>¥28.5</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/2eb6470db733c1f4d3608ecb4c5afeb8.jpg' className='recommend-desc-icon'/>
                            <Text className='recommend-desc-txt'>加班狗的福音，特别好，偶尔需要方便面的时候就选它没错了！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>10种颜色可选，柔软好心情</Text>
                        </View>
                        <Text className='recommend-content-txt'>玩趣彩虹四季拖鞋</Text>
                        <View>
                            <Text className='recommend-price'>¥19.90</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/04a607d7b2f3d0f8a3beea7c0ffa3a72.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>传统工艺，芝麻香浓郁，颗颗精髓</Text>
                        </View>
                        <Tag title='好货内部价'/>
                        <Text className='recommend-content-txt'>黑芝麻丸</Text>
                        <View>
                            <Text className='recommend-price'>¥69.00</Text>
                            <Text className='recommend-origin-price'>¥99</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/67a5869930e13a0df9bf9098f2d533c5' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>虽然等了几天才收到货，但胡庆余堂的品质绝对值得信赖！挺大一颗，还没打开包装就闻到芝麻香辣，软软糯糯的非常好吃，也不是很甜，赞👍！生产日期也比较新，非常好，期待吃出好健康！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/a10ed5c19533c9e1e2abf1d8cb843c24.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>100%原木浆，融水即化</Text>
                        </View>
                        <Tag title='特价'/>
                        <Text className='recommend-content-txt'>10卷/提 谷风一木3层小卷纸</Text>
                        <View>
                            <Text className='recommend-price'>¥27.9</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/81084e4ce1ddc2c35831a71762060ca5' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>挺不错的，纸质超级好！！而且特别优质！！还会回购！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/1ff21a48ff35db41c09cd3036e9e3b2e.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>非油炸 好吃不上火</Text>
                        </View>
                        <Tag title='特价' />
                        <Text className='recommend-content-txt'>大丈夫冻干牛肉面</Text>
                        <View>
                            <Text className='recommend-price'>¥22.80</Text>
                            <Text className='recommend-origin-price'>¥28.5</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/2eb6470db733c1f4d3608ecb4c5afeb8.jpg' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>加班狗的福音，特别好，偶尔需要方便面的时候就选它没错了！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>10种颜色可选，柔软好心情</Text>
                        </View>
                        <Text className='recommend-content-txt'>玩趣彩虹四季拖鞋</Text>
                        <View>
                            <Text className='recommend-price'>¥19.90</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/04a607d7b2f3d0f8a3beea7c0ffa3a72.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>传统工艺，芝麻香浓郁，颗颗精髓</Text>
                        </View>
                        <Tag title='好货内部价' />
                        <Text className='recommend-content-txt'>黑芝麻丸</Text>
                        <View>
                            <Text className='recommend-price'>¥69.00</Text>
                            <Text className='recommend-origin-price'>¥99</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/67a5869930e13a0df9bf9098f2d533c5' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>虽然等了几天才收到货，但胡庆余堂的品质绝对值得信赖！挺大一颗，还没打开包装就闻到芝麻香辣，软软糯糯的非常好吃，也不是很甜，赞👍！生产日期也比较新，非常好，期待吃出好健康！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/a10ed5c19533c9e1e2abf1d8cb843c24.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>100%原木浆，融水即化</Text>
                        </View>
                        <Tag title='特价' />
                        <Text className='recommend-content-txt'>10卷/提 谷风一木3层小卷纸</Text>
                        <View>
                            <Text className='recommend-price'>¥27.9</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/81084e4ce1ddc2c35831a71762060ca5' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>挺不错的，纸质超级好！！而且特别优质！！还会回购！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/1ff21a48ff35db41c09cd3036e9e3b2e.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>非油炸 好吃不上火</Text>
                        </View>
                        <Tag title='特价' />
                        <Text className='recommend-content-txt'>大丈夫冻干牛肉面</Text>
                        <View>
                            <Text className='recommend-price'>¥22.80</Text>
                            <Text className='recommend-origin-price'>¥28.5</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/2eb6470db733c1f4d3608ecb4c5afeb8.jpg' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>加班狗的福音，特别好，偶尔需要方便面的时候就选它没错了！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/0466a812b3bd56197650d0b618abbf62.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>10种颜色可选，柔软好心情</Text>
                        </View>
                        <Text className='recommend-content-txt'>玩趣彩虹四季拖鞋</Text>
                        <View>
                            <Text className='recommend-price'>¥19.90</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/04a607d7b2f3d0f8a3beea7c0ffa3a72.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>传统工艺，芝麻香浓郁，颗颗精髓</Text>
                        </View>
                        <Tag title='好货内部价' />
                        <Text className='recommend-content-txt'>黑芝麻丸</Text>
                        <View>
                            <Text className='recommend-price'>¥69.00</Text>
                            <Text className='recommend-origin-price'>¥99</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/67a5869930e13a0df9bf9098f2d533c5' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>虽然等了几天才收到货，但胡庆余堂的品质绝对值得信赖！挺大一颗，还没打开包装就闻到芝麻香辣，软软糯糯的非常好吃，也不是很甜，赞👍！生产日期也比较新，非常好，期待吃出好健康！</Text>
                        </View>
                    </View>
                    <View className='recommend-list'>
                        <View className='recommend-icon-view'>
                            <Image src='https://yanxuan.nosdn.127.net/a10ed5c19533c9e1e2abf1d8cb843c24.png' className='recommend-icon' />
                            <Text className='recommend-icon-txt'>100%原木浆，融水即化</Text>
                        </View>
                        <Tag title='特价' />
                        <Text className='recommend-content-txt'>10卷/提 谷风一木3层小卷纸</Text>
                        <View>
                            <Text className='recommend-price'>¥27.9</Text>
                        </View>
                        <View className='recommend-desc'>
                            <Image src='https://yanxuan.nosdn.127.net/81084e4ce1ddc2c35831a71762060ca5' className='recommend-desc-icon' />
                            <Text className='recommend-desc-txt'>挺不错的，纸质超级好！！而且特别优质！！还会回购！</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}