const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=app=>{
    app.use(
        createProxyMiddleware('/oauth/access_token',
        {
            target:'https://api.instagram.com',
            changeOrigin:true,
        })
    )
}