module.exports = ({env}) => ({
    upload:{
        config:{
            provider:'cloudinary',
            providerOptions:{
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('ClOUDINARY_SECRET'),    
                cloud_url: env('CLOUDINARY_URL'),
            },
            actionOptions:{
                upload:{},
                uploadStream:{},
                delete:{},
            },

        },
    },
});
