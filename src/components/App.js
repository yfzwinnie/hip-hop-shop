import React from 'react';
// import logo from './logo.svg';
import '../css/App.css';
import Header from './Header';
import Gallery from './Gallery';
import AddProductForm from './AddProductForm';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addProductPost = this.addProductPost.bind(this);

    this.state = {
        products: [{
          name: "Behind the Beat: Hip Hop Home Studios",
          link: "https://www.barnesandnoble.com/p/behind-the-beat-hip-hop-home-studios-raph/1013453807/2677858725942?st=PLA&sid=BNB_DRS_Marketplace+Shopping+Books_00000000&2sid=Google_&sourceId=PLGoP4094&k_clickid=3x4094",
          image: "http://t0.gstatic.com/images?q=tbn:ANd9GcQqTuLTLOTmvbCx5MPfLfXlezesiH5KiN88obWvVa4sdJeq4DZa",
          description: "Step into the private world of the hip hop home studio and dis­cover its inner workings",
          price: 1735,
          category: "Book",
          fullWidth: false
        }, {
          name: "Biggie Smalls Socks",
          link: "http://www.eastbay.com/product/model:258941/sku:M545TIL/stance-the-illest-crew-socks-mens/multicolor/&SID=7726&inceptor=1&cm_mmc=SEM-_-PLA-_-Google-_-m545til&gclid=Cj0KCQjw0K7NBRC7ARIsAEaqLRHe2p2FYYw_ZGIIclA7if_xlLByVic9hJgCGiBDb-3QxORAfIZo6ooaAvl8EALw_wcB",
          image: "http://images.footlocker.com/is/image/EBFL2/M545TIL_fr_ven_sc7?id=898RF0&wid=751&hei=856&fmt=jpg",
          description: "Puttin' 5 carats in my baby girl's ear... and 77% cotton on her feet with these Biggie Smalls tribute socks",
          price: 1599,
          category: "Clothing",
          fullWidth: false
        }, {
          name: "IDFWU Sweater",
          link: "https://www.etsy.com/listing/263131139/idfwu-hoodie-408?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=idfwu&ref=sc_gallery_10&plkey=dbb5f03e8326ddc5e721b1f3a9655b825b49335e:263131139",
          image: "http://i.ebayimg.com/00/s/MTI1MFgxMDAw/z/NjAAAOSwQNRXLO7j/$_57.JPG?set_id=8800005007",
          description: "Having problems with people approaching you when you don't want to be approached? This sweater can help.",
          price: 2900,
          category: "Clothing",
          fullWidth: false
        }, {
          name: "Tyler the Creator Print",
          link: "https://society6.com/product/tyler-the-creator-nextgen-rappers_print?utm_source=google&utm_medium=cpc&utm_campaign=1027&c_kid=1506960p4145&gclid=Cj0KCQjw0K7NBRC7ARIsAEaqLRHT-J1iDiSLO4_HOgYq4gVdLsdIY6tLF6qIQP4QX2QN_WJ4o9cWoRoaAg_5EALw_wcB#1=45&adpos=1o2&creative=102421901566&device=c&matchtype=&network=g",
          image: "https://ctl.s6img.com/society6/img/YYKWmNMnOxuRlq4YYZc-cJ57KVc/h_550,w_550/prints/~artwork/s6-0017/a/6009841_2993645/~~/tyler-the-creator-nextgen-rappers-prints.jpg",
          description: "Gallery quality Giclée print on natural white, matte, ultra smooth, 100% cotton rag, acid and lignin free archival paper using Epson K3 archival inks. Custom trimmed with 1\" border for framing.",
          price: 1520,
          category: "Home",
          fullWidth: false
        }, {
          name: "Biggie and Tupac Bobbleheads",
          link: "http://www.ebay.com/itm/like/172482439375?chn=ps&dispItem=1",
          image: "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/gVoAAOSwqrtWpeJe/$_57.JPG?set_id=880000500F",
          description: "These realistic representations of Biggie and Tupac headbob to funky fresh beats",
          price: 16800,
          category: "Home",
          fullWidth: false
        }, {
          name: "808 The Movie",
          link: "http://808themovie.com/",
          image: "http://img.cdn2.wmgecom.com/media/catalog/product/cache/864/image/1200x/9df78eab33525d08d6e5fb8d27136e95/0/7/075679926876.jpg",
          description: "Find out where the deep bass sound from dirty south hip-hop originated from",
          price: 1499,
          category: "Entertainment",
          fullWidth: false
        }, {
          name: "The Art of Organized Noize",
          link: "https://www.netflix.com/title/80094521",
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODhkZDU3MzQtNTE1Yi00YTkwLWFhYTUtY2ZjZjM4NTI2ZWE3XkEyXkFqcGdeQXVyMTM4NzA3NQ@@._V1_.jpg",
          description: "This documentary charts the rise of Organized Noize, the influential producers behind megahits from Outkast, Goodie Mob, TLC and more.",
          price: 999,
          category: "Entertainment",
          fullWidth: false
        }, {
          name: "Dr. Dre Prayer Candle",
          link: "https://celebrityprayercandles.com/product/dr-dre-prayer-candle/",
          image: "https://i0.wp.com/celebrityprayercandles.com/wp-content/uploads/2017/04/drdre.jpg?fit=584%2C857&ssl=1",
          description: "This is something you can legally light up around the cops",
          price: 1499,
          category: "Home",
          fullWidth: false
      }]
    };
  }

  addProductPost(product) {

    const products = {...this.state.products}
    const timestamp = Date.now();
    products[`product-${timestamp}`] = product;

    this.setState({ products: products})
  }

  render() {
    return (
      <div>
        <Header products={this.state.products}/>
        <div className="container">
          <Route path="(/|/fresh)" exact
              render={() => <Gallery products={this.state.products}
               />}
            />
          <Route path="/admin" exact
              render={() => <AddProductForm addProductPost={this.addProductPost}/>}
            />
        </div>
      </div>
    );
  }
}

export default App;
