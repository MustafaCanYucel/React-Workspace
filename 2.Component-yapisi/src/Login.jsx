import React from 'react'
export const users =[
    {
        username : "enes",
        password: "1"
    },
    {
        username : "ayse",
        password: "2"
    },{
        username : "erkan",
        password: "3"
    },
]

function Login() {
    return (
        <div>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />

            </div>
            <div>

                <p>Şifreniz</p>
                <input typr="text" />
            </div>

            <div>
                <button>Giriş Yap</button>


            </div>

            <div>Login</div>
        </div>
    )
}

export default Login