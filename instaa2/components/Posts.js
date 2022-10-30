import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'capture._it',
        userImg: 'https://th.bing.com/th/id/OIP.TUpugmNGD9Igi1m1uKI9wAHaHa?pid=ImgDet&rs=1',
        img: 'https://th.bing.com/th/id/OIP.FCg2zs2lT3GCLWz0XLCacQHaE6?pid=ImgDet&rs=1',
        caption: 'Peace.',
    },
    {
        id: '123',
        username: 'kits_day',
        userImg: 'https://th.bing.com/th/id/R.f39ce8c159b2213bd20c7d78343924da?rik=npm3N0U8yP9xGQ&riu=http%3a%2f%2forig06.deviantart.net%2f5991%2ff%2f2010%2f006%2f6%2f9%2fsquare_cat_by_bebebelkin.jpg&ehk=Q5P%2bkhL9MNHxtFYo215SL0AS2vOZ6UQWnqlRq8eFmz0%3d&risl=&pid=ImgRaw&r=0',
        img: 'https://th.bing.com/th/id/R.db7a38888dd1f2c009687c4defc4b12a?rik=%2b8kV9p%2bol3IjkA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f13400000%2fCat-cats-13494223-2304-1728.jpg&ehk=My5FUv%2biV5V3abRIZCceFEPs1mgvt4U58NoIuiwklTw%3d&risl=&pid=ImgRaw&r=0',
        caption: 'Furry furious.. <3',
    },
    {
        id: '123',
        username: 'thoughts._',
        userImg: 'https://i.pinimg.com/originals/f4/93/a6/f493a64e90deb5886f7f89cae78d7672.jpg',
        img: 'https://cdn.quotesgram.com/img/67/10/1525022657-BestQuotes.jpg',
        caption: '~about life',
    }
]

function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post 
            key={post.id} 
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption} />
        ))}
        
    </div>
  )
}

export default Posts