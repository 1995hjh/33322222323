import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './banner.css'

const list = [
'http://img17.3lian.com/d/file/201703/06/c86fa4b4233dd931dcc4e25cd19971f1.jpg',
    'http://img1.imgtn.bdimg.com/it/u=3065334699,3776385488&fm=26&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=3276271275,3607507153&fm=11&gp=0.jpg',
    'http://img3.redocn.com/tupian/20150416/shouqianshoudeyiqunxiaohaishouhuitu_4018364.jpg'
]

export default class Banner extends Component {

    static defaultProps = {
        list: []
    }

    render() {

        return (
            <View>
                <Swiper
                    circular
                    autoplay
                    indicatorDots
                    indicatorActiveColor='rgb(178,42,49)'
                >
                    {
                        list.map(item => (
                            <SwiperItem
                                key={item}>
                                <Image
                                    className='bannerIcon'
                                    src={item}
                                />
                            </SwiperItem>
                        ))
                    }
                </Swiper>
            </View>
        )
    }

}