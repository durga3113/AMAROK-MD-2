const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const Amarok = require('../lib')

 //---------------------------------------------------------------------------
 //------TRUTH GAME
 //---------------------------------------------------------------------------

Amarok.addCMD({
            pattern: "truth",
            isOwner: false,
            desc: "truth game",
            
        },
        async(conn, match, text) => {
            return await conn.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
    //---------DARE GAME
    //---------------------------------------------------------------------------

 Amarok.addCDM({
            pattern: "dare",
            isOwner: false,
            desc: "dare same as the truth",
        },
        async(conn, match, text) => {
            return await conn.reply(`${dare()}`);
        }
    )
   
 //---------------------------------------------------------------------------
 //-----------FACT GAME 
 //---------------------------------------------------------------------------

Amarok.addCDM({
        pattern: "fact",
        isOwner: false,
        desc: "fact on everything",
        
    },
    async(conn, match, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return conn.reply(`*Fact:* ${data.fact}\n\n*Powered by Amarok*`)   
    }
  )
