let dbconfig=require('../dbconfig/db-connect');


dbconfig.connect(function (err) {
    if(err){
        console.log("connection error");
        process.exit(1);
    }
    else{
        console.log("connected successfully");

        dbconfig.get().collection('product').insertMany([{
            imagepath:'https://m.media-amazon.com/images/I/71cTCvSFJTL._AC_UL436_SEARCH212385_.jpg',
            title:'PUBG',
            description:'Multiplayer Game',
            price:'20'
        },
            {
                imagepath:'https://m.media-amazon.com/images/I/71tYtbd1wUL._AC_UL436_SEARCH212385_.jpg',
                title:'FIFA 19',
                description:'Football',
                price:'220'
            },

            {
                imagepath:'https://m.media-amazon.com/images/I/51NMBH825HL._AC_UL436_SEARCH212385_.jpg',
                title:'GTA Vice city',
                description:'Rockstar Games',
                price:'130'
            },
            {
                imagepath:'https://m.media-amazon.com/images/I/61rAZbhTV4L._AC_UL436_SEARCH212385_.jpg',
                title:'GTA SA',
                description:'Rockstar Games',
                price:'180'
            },
            {
                imagepath:'https://m.media-amazon.com/images/I/616FBaxXHFL._AC_UL436_SEARCH212385_.jpg',
                title:'NFS Payback',
                description:'Eletronic Arts',
                price:'330'
            },
            {
                imagepath:'https://www.g2deal.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/c/a/call-of-duty-advanced-warfare.jpg',
                title:'Call of Duty',
                description:'Activision Publishing, Inc',
                price:'430'
            },

        ]);
    }
});

