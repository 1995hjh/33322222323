import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading } from '../../components'
import Banner from './banner/banner'
import Policy from './policy/policy'
import Pin from './pin/pin'
import Operation from './operation/operation'
import BrandFactory from './brandFactory/brandFactory'
import LimitShop from './limitShop/limitShop'
import Popular from './popular/popular'
import Category from './category/category'
import Recommend from './recommend/recommend'
import searchIcon from '../../assets/search.png'
import { getWindowHeight } from '../../utils/style.js'
import './home.css'

export default class Home extends Component {

  config = {
    navigationBarTitleText: '网易严选'
  }

  state = {
      loaded: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    if (!this.state.loaded) {
        return <Loading />
    }
    
    return (
      <View className='home'>
            <View className='homeSearchView'>
                <Image src={searchIcon} className='searchIcon'/>
                <Text className='searchTxt'>
                    搜索商品，共783款好物
                </Text>
            </View>
            <ScrollView
                scrollY
                style={{ height: getWindowHeight() }}
                className='homeScrollView'
            >
                <Banner/>
                <Policy/>
                <Pin/>
                <Operation/>
                <BrandFactory/>
                <LimitShop/>
                <Popular/>
                <Category/>
                <Recommend/>
            </ScrollView>
      </View>
    )
  }
}

