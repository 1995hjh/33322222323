import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@taojs/components'
import { HomeTitle } from '../../../components/homeTitle/homeTitle'
import './pin.css'

const picUrls = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552378874720&di=66a17888638112c15f3654404e8b976e&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100713%2F1954049_091647155567_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552378875517&di=c341e3e304a232a367354f138a5fe033&imgtype=0&src=http%3A%2F%2Fwww.chinapoesy.com%2FUploadFiles%2FPoesy%2F20141015_92b4978b-973a-472c-b4e8-33d89e01853f.jpg'
];

const list = [
    {
        id: 'group1',
        group: [
            {
                pic: 'https://yanxuan.nosdn.127.net/0bc4bbf53f8db1e362eb45ba5a53f335.jpg',
                price: 20,
                originPrice: 25,
                userNum: 3
            },
            {
                pic: 'https://yanxuan.nosdn.127.net/eab47ea7ad4f22b295d8e83bac082d2f.jpg',
                price: 26.6,
                originPrice: 30.5,
                userNum: 2
            },
            {
                pic: 'https://yanxuan.nosdn.127.net/bf2437da0edadff541e1e5116c69d067.jpg',
                price: 36.8,
                originPrice: 40,
                userNum: 5
            }
        ]
    },
    {
        id: 'group2',
        group: [
            {
                pic: 'https://yanxuan.nosdn.127.net/f5013decc37151e9e1a92ace7fe97487.jpg',
                price: 35,
                originPrice: 45.8,
                userNum: 10
            },
            {
                pic: 'https://yanxuan.nosdn.127.net/40aba7b71d0d9f6385fc1c9a0f1018fd.jpg',
                price: 18.8,
                originPrice: 22.2,
                userNum: 3
            },
            {
                pic: 'https://yanxuan.nosdn.127.net/040cf6e5c5dfbdb31f7724af1ddf63c7.jpg',
                price: 120,
                originPrice: 125,
                userNum: 2
            }
        ]
    }
];

export default class Pin extends Component {
    render () {
        return (
            <View>
                {
                    picUrls.map((item, index) => (
                        <Image src={item} key={item} className='pinIcon'/>
                    ))
                }
                <HomeTitle title='免邮拼团'
                    link='#'
                />
                <Swiper
                    className='pinSwiperView'
                    autoplay
                    indicatorDots
                    indicatorActiveColor='rgba(178, 42, 49)'
                >
                    {
                        list.map((it, index) => (
                            <SwiperItem key={it.id} className='pinSwiperItem'>
                                {
                                    it.group.map((item) => (
                                        <View key={item.pic} className='pinList'>
                                            <Image src={item.pic} className='pinSwiperIcon'/>
                                            <View>
                                                <Text className='pinPrice'>拼团价¥{item.price}</Text>
                                                <Text className='pinOriginPrice'>¥{item.originPrice}</Text>
                                            </View>
                                            <View className='pinNumView'>
                                                <Text>{item.userNum}人团</Text>
                                            </View>
                                        </View>
                                    ))
                                }
                            </SwiperItem>
                        ))
                    }
                </Swiper>
            </View>
        )
    }
}