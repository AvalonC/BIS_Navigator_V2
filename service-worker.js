if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let b={};const f=e=>a(e,d),c={module:{uri:d},exports:b,require:f};s[d]=Promise.all(i.map((e=>c[e]||f(e)))).then((e=>(r(...e),b)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-SRpu89Ub.js",revision:"7212153f7e24a018c4110ead20c122fc"},{url:"assets/404.html-wbMHzEog.js",revision:"38846bb972aa172ef1ecc3862166a01d"},{url:"assets/about.html-_1HxaztG.js",revision:"19839fc7b860beae6f41a8dff0c90e85"},{url:"assets/about.html-63RzNzvI.js",revision:"0f60b55a68a000747164f3d7a43b06fa"},{url:"assets/AC5511.html--8adN78Q.js",revision:"88c2e6e6f474cb60d593918766b9d210"},{url:"assets/AC5511.html-Gp7Pr5UY.js",revision:"0610b569582d286b65cef20728a31279"},{url:"assets/alumni_share.html-kQHuP796.js",revision:"ee37ad3e765d0056bfe842f7fb328435"},{url:"assets/alumni_share.html-NmJzAOMj.js",revision:"57b954902dbc673060c00816d8339cce"},{url:"assets/app-jSqeFDj7.js",revision:"760dc0744988b9748145cee2d744f6e2"},{url:"assets/appreciate.html-NZwO_18p.js",revision:"36c981d3e31d20f4bc9579becfdb4325"},{url:"assets/appreciate.html-ZDjx8FfH.js",revision:"10b58bf091c82008fe98c5e62e319cb1"},{url:"assets/BIS_resource.html--6YrYLMb.js",revision:"747884bb49bbcf6b2af89da2a1315d79"},{url:"assets/BIS_resource.html-VDweF14E.js",revision:"43fb622d8fe16ffdefaee1c7c9127a18"},{url:"assets/Canvas.html-J4o1-_Jf.js",revision:"36c5b27cb581a651a0e25d2c83503c9c"},{url:"assets/Canvas.html-znCPK1ID.js",revision:"77f5fc718dd599bc818cf2919bc4626b"},{url:"assets/CityU_Portal.html-aztEcsdn.js",revision:"98171c50d3a83c2fe929f06e3a0b6660"},{url:"assets/CityU_Portal.html-ke2GfUU2.js",revision:"450b8b5d39086042888c35c0d543340f"},{url:"assets/EF5042.html-E7gH_F8R.js",revision:"b0595cdcd386259a26994c89892d0201"},{url:"assets/EF5042.html-kfzJCYfy.js",revision:"c6e6833895d6e02ab6cce53999fea845"},{url:"assets/EF5052.html-Bc22VzpX.js",revision:"634006ff4ff0ddfa0da089ea7649c5c1"},{url:"assets/EF5052.html-LKShwzH_.js",revision:"570d9ed3ca76b83fd532f268b697ec33"},{url:"assets/giscus-unEZQsJ0.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/Hall_of_Fame.html-DLEiA9zQ.js",revision:"8650280467d2dda4bead286ada5bc6c4"},{url:"assets/Hall_of_Fame.html-Mx2dXf8n.js",revision:"9d68056241716887c4f5139cc594755f"},{url:"assets/highlight.esm-d5-mOmZz.js",revision:"6bf7288803e670103bd9dbe2f2d21c86"},{url:"assets/how_to.html-bg8_gP03.js",revision:"71c972d9613bfe896839e6d0377aa001"},{url:"assets/how_to.html-ugFLfjRb.js",revision:"4f03fc1e25209cba62f38040886e633f"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/文字详情.svg",revision:"d36c4a5d4e94e3047fdc796af3685b3c"},{url:"assets/image/权限.svg",revision:"b450d25072f10e1ec58d8ee8cea0d0f7"},{url:"assets/image/查询.svg",revision:"428863e2d75481583360abf8b84555f2"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-_P6GjQH3.js",revision:"ac333f17e5b88a7bcd7898e960a7b241"},{url:"assets/index.html-_uBTDn3O.js",revision:"7160ab9a959c5f025b8dd01e1518b95f"},{url:"assets/index.html--cpFGiE0.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-0yBrxLBK.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-29iObDFR.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-2cg2ZPd6.js",revision:"4333556a3d358088f937abbfb10494d3"},{url:"assets/index.html-2FtD2uNT.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-31iRVhmI.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-36oPBNcZ.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-4rWs8Pa6.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-5rBwbLei.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-6YMexPRi.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-7gVOcMsw.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-7nxWeC7i.js",revision:"5f253afc28ef2d534db433eab5060da2"},{url:"assets/index.html-7Wq2frBL.js",revision:"998b825704b85476bd28bc1cc6b14225"},{url:"assets/index.html-7YNRVzi4.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-82wSM1DA.js",revision:"86f0fcd1423f4b9457e96f7994c38df6"},{url:"assets/index.html-8fnXqQ6N.js",revision:"0a339b8a47349ab526681d6b24ec1020"},{url:"assets/index.html-8KyhR8lM.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-a30C0xGW.js",revision:"f95dfbf2ef822c917856a33e51fbbbe9"},{url:"assets/index.html-ACIcY76H.js",revision:"7189fe487c91f6eb3ca6e8229f846163"},{url:"assets/index.html-aGSqiOHO.js",revision:"ce733ebd253f838adb3b54955ba03e4f"},{url:"assets/index.html-aO4k8iUa.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-BEmDRnlT.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-cHsWQPqF.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-cl38Z8Fl.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-cYaF2ROp.js",revision:"6aef94e1936025606258766f1a6f3b24"},{url:"assets/index.html-dFME2Uz-.js",revision:"b591c34326d0db44b00603f545847d30"},{url:"assets/index.html-Dg_c2zjZ.js",revision:"e1d3f009aecf2d7bdea6195ca746730f"},{url:"assets/index.html-dRB3rT-x.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-DSRmTc3y.js",revision:"31f003b7ffff0ff4258a3db812680665"},{url:"assets/index.html-ei5CmC_R.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-EiR3fuUW.js",revision:"d6ce71f3c686b17467c0f9156468f8b9"},{url:"assets/index.html-emh6kAUK.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-Ep8HGqTx.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-FfU5NvUJ.js",revision:"2d0f76050ca3dba0767f12e91a0b20e7"},{url:"assets/index.html-G4uzdpTx.js",revision:"b98ae004997475f71059b01f00c4587f"},{url:"assets/index.html-hA0QisAc.js",revision:"15a1375db8e36c5426a2cb919bec99a0"},{url:"assets/index.html-iaCZQo78.js",revision:"0cb308ddd3bcb42071a6b807ec89498f"},{url:"assets/index.html-JAWrZDP8.js",revision:"fefa1a8bb7e2f63bff2fd7cf711ca1d9"},{url:"assets/index.html-JF6y4MT-.js",revision:"4174bfe550580a196415c4c8d620296e"},{url:"assets/index.html-JL-Ebcnk.js",revision:"9fc96d6284ed29baea3128086ba5a2a4"},{url:"assets/index.html-Jn9wAkqG.js",revision:"d689da770f133a799143285eb0b31b8e"},{url:"assets/index.html-jxogNObx.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-JZA8A89m.js",revision:"b6d615cac96c4c5527e56d2df664056c"},{url:"assets/index.html-K-s_JKm9.js",revision:"142fc7a93355b1b4352f2ce8d5102bc3"},{url:"assets/index.html-kFZtnZoZ.js",revision:"6ce6f992a7e21677c098983dc8d27fec"},{url:"assets/index.html-KnCnLTsG.js",revision:"4778324bc0d6dfe77bdd1693ea2201cc"},{url:"assets/index.html-LOEP8fKO.js",revision:"9d25f9b25bc1ede01e7b63c1a0085aa6"},{url:"assets/index.html-lsjEJv8l.js",revision:"51a31ad744641591f7b99ed3c14de960"},{url:"assets/index.html-mGlVmEFv.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-MPGg2Nxr.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-MUYTlpQ2.js",revision:"1dec83eeb867e0d7ba889bb71f273c02"},{url:"assets/index.html-NjtOq2cR.js",revision:"6fa0fb19a74d52896b0cfa056a78cb36"},{url:"assets/index.html-Npr5Q8z-.js",revision:"9f04bc7beb0e53a60e90b6f5ef566055"},{url:"assets/index.html-OD0s3BLz.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-ofBTek7g.js",revision:"ba9d819f2eeda79c9628a3c3d24af13e"},{url:"assets/index.html-P7TpAyWn.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-pgYYu8zu.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-QGxp0ekt.js",revision:"c103a4d67d1b64dd9315ddee458385a1"},{url:"assets/index.html-QwOiwXU9.js",revision:"09975ee9fe6233a4a389dcf93e6b51a4"},{url:"assets/index.html-RidUnnuF.js",revision:"7a299cae0ef05ac9ce2d9599f7fb4acc"},{url:"assets/index.html-rjqMVeV9.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-S4QCkyG0.js",revision:"72057701ed64663972ab0dcd55c1dffc"},{url:"assets/index.html-SVLfPT2g.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-SYJhBPfo.js",revision:"fe0bb355b1f42fef7b21ea5e79456fbb"},{url:"assets/index.html-uoOC0EPk.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-W1zZbWkI.js",revision:"779b390a12464fba74a8994d1b11e0db"},{url:"assets/index.html-wbTwQLNX.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-xbYW0n_D.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/index.html-xu9zbJWr.js",revision:"9f1b36505c5eedd2a583e525e4764c2f"},{url:"assets/index.html-XzJpAQZV.js",revision:"f6865b82d0cfa4bdcbe25b6a25761fa6"},{url:"assets/index.html-Y7PBtbjD.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-Yig7tsKt.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-yKQu5cg9.js",revision:"3306b750f0fe06d7774e98d263b6fbc2"},{url:"assets/index.html-ZYTPQE23.js",revision:"81916d054f66fc21da0abb67372b5995"},{url:"assets/IS5010.html-KO6wJiZO.js",revision:"9a4e3267a0a8a52ac304c106c08732d1"},{url:"assets/IS5010.html-oKZZhHzR.js",revision:"36fef9540f07d3b4704d287227be6509"},{url:"assets/IS5238.html-NIFhycxx.js",revision:"caf975f6f8ade6baaad95aa4fa706e80"},{url:"assets/IS5238.html-xUVMrkkF.js",revision:"342429e7e72ccc50bccc06592e358f59"},{url:"assets/IS5311.html-K0xKub-d.js",revision:"d7bcb20a2842f84c303cf36df3b61c21"},{url:"assets/IS5311.html-loqZ98Lh.js",revision:"a2b37cd36e4cb1bdd7834c598c95c465"},{url:"assets/IS5312.html-OdZZH0S3.js",revision:"94e598bbe7d2392527870356c34f2214"},{url:"assets/IS5312.html-rIn5O38s.js",revision:"77906616e6d8f4e127a62970e1960e42"},{url:"assets/IS5313.html-pN2RCWqX.js",revision:"447c15277b0f7558dca235a8fdf28343"},{url:"assets/IS5313.html-w-ryIvWL.js",revision:"e7b79ec571a6e54f8d230e71fff310a3"},{url:"assets/IS5314.html-aB4fkeQk.js",revision:"f6c543a3ecfe7234dfd8fe7847fd7640"},{url:"assets/IS5314.html-sQalRY24.js",revision:"d464073d8f23e1771f89041dc8893b69"},{url:"assets/IS5411.html-n2kWMhNg.js",revision:"40cc05012b970aa926970fc09c9ee41e"},{url:"assets/IS5411.html-YP9M-lvc.js",revision:"c19c9164e0e72cfbe984203b38bc99b8"},{url:"assets/IS5413.html-bHoQHQEY.js",revision:"6fb6958095f71fd8f36ada7ddaf95f29"},{url:"assets/IS5413.html-wuzK4nhd.js",revision:"1622b3768f46dac2b00a68c837ab3c36"},{url:"assets/IS5540.html-DbQ8NCzl.js",revision:"7c005fdb19dbc407feab537b61d58084"},{url:"assets/IS5540.html-HgU-IjSZ.js",revision:"909c559bfe7b0319a3c0a250d691bfa8"},{url:"assets/IS5540.html-iZfDU-69.js",revision:"a5a99d07b2bf6af2d20c3d1006cf3e1b"},{url:"assets/IS5540.html-SNdR1F3V.js",revision:"b3a2e7210ad70c851d3b46653f1074fc"},{url:"assets/IS5542.html-m1ZLPTdc.js",revision:"1dfe8284142b0d5c3c63f0be7e7cb158"},{url:"assets/IS5542.html-Yr-_tJo_.js",revision:"cd0faa5ccc3ab8f38717df44ddc5549c"},{url:"assets/IS5740.html-Y1uFBhNe.js",revision:"f2510f30434775cde9b1dcd78be27004"},{url:"assets/IS5740.html-Zw4Mas3Q.js",revision:"76476b4d9d96be3ba69b4c34fc897450"},{url:"assets/IS5743.html-G0vs_k9W.js",revision:"2b4b0379c6b942f077bd81e5f434a9d9"},{url:"assets/IS5743.html-MD6Hbeu9.js",revision:"1a35b25aa3686dbd57e1f9b49756a3a5"},{url:"assets/IS5940.html-eat1VRnC.js",revision:"ab63423a01436ae56e96ece457363755"},{url:"assets/IS5940.html-UL8h-QYW.js",revision:"5c1a4381dd8e941b15019d310a4edb39"},{url:"assets/IS6200.html-9suXQRkV.js",revision:"a8975ed8d781916cb731c03c6fc97227"},{url:"assets/IS6200.html-dOfln_Om.js",revision:"01946cb9257c4ebd55bdfef78337db80"},{url:"assets/IS6322.html-2Y8Y9w-T.js",revision:"2db0b1d5a3abe9b2fdb432b79d8f8c3a"},{url:"assets/IS6322.html-BxCKb7hV.js",revision:"503b4585b838a60e5dff1a715d3f1c6e"},{url:"assets/IS6335.html-IJz_qkej.js",revision:"05bc121550e1516061d7b6908fdf8e58"},{url:"assets/IS6335.html-sizPvNYC.js",revision:"035d87f402f0019b130cd925ec31fedd"},{url:"assets/IS6400.html-9Jrd_A-Y.js",revision:"3cce55a63ce08a69c52a3eaaa95dc956"},{url:"assets/IS6400.html-cv1-39ik.js",revision:"7b531c4c62e6184d695c250df5716c9b"},{url:"assets/IS6421.html--XJaIxfb.js",revision:"d2b2336c18deb923015d99898a14d865"},{url:"assets/IS6421.html-bnblRX5n.js",revision:"46b26a90df3a57c1f9ba9b9cd7c0511c"},{url:"assets/IS6523.html-85Q80YYA.js",revision:"9c3c6d1c1eaa1c7d7d946ab9b27eb5a4"},{url:"assets/IS6523.html-xlwvcRo0.js",revision:"feb392393033d12cc589ba473b2ce9ed"},{url:"assets/IS6620.html-qSELN0of.js",revision:"b806209b414540395484c7257c534086"},{url:"assets/IS6620.html-WseMX_9H.js",revision:"9310b1c919c1d8999ef351a047356bbd"},{url:"assets/IS6640.html-S08YMdnO.js",revision:"74e0c146478be7f99e6d444ddae4651f"},{url:"assets/IS6640.html-u6if9i-3.js",revision:"ec764d14db5120083f3c4dcc3eb9a614"},{url:"assets/IS6912.html-P4i3x7a4.js",revision:"3a60b0aa7d55ea63bca196060397a3f7"},{url:"assets/IS6912.html-XipauVQK.js",revision:"0744844b1a190ec9c9c2eb3bfbbe0b81"},{url:"assets/IS6921.html-0iNcPsbY.js",revision:"da2c29cacc559d10d93a2b5b66064294"},{url:"assets/IS6921.html-cmO-bdHs.js",revision:"3aa46eaa57253dda191ce3e2c945dd40"},{url:"assets/IS6930.html-Jfm--hnp.js",revision:"b99b9e517f933a3dc404fc40ac139db4"},{url:"assets/IS6930.html-zoSDhxSU.js",revision:"db305475de76437d9702c6d6840ae161"},{url:"assets/IS6940C.html-RrkUkfS6.js",revision:"ed056cd56e94d7622044e69aafcc5b26"},{url:"assets/IS6940C.html-TRDphEgG.js",revision:"26c0d64fc543c211da011df9c4658aae"},{url:"assets/IS6941.html-09aUwoP3.js",revision:"aafb32f9f99642792e3e9799f0c1c672"},{url:"assets/IS6941.html-Iw2_9Jpk.js",revision:"6fbc637b9ed267324469504824d9d56e"},{url:"assets/it_services.html-TVzWGSAz.js",revision:"45fb03f18c32f59a86077fb954232f38"},{url:"assets/it_services.html-vQ0V1liw.js",revision:"6b9fd14d1bfcb0e6150c10fd361d47d7"},{url:"assets/league-gothic-h3edOfrm.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/league-gothic-oOjv4w16.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-wxYXAA-7.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/markdown.esm-ldiezHYe.js",revision:"dfebc8121864151002204ef714f81472"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quickstart.html-93POk_L1.js",revision:"809bac70a889b279f055758797d753e1"},{url:"assets/quickstart.html-lG0mkO3f.js",revision:"d52a490a1f45f7d83a8828b7ed9bcf53"},{url:"assets/recurit.html-GU5vgsk1.js",revision:"0abcff3abe9e4d1135a1c76fd0be92a1"},{url:"assets/recurit.html-n5nPPVRH.js",revision:"8d50d5da62481ef66f0ce15b4e403f87"},{url:"assets/reveal.esm-VPkcmA5b.js",revision:"1b338671488d39e2bf97507b369d4760"},{url:"assets/search.esm-KGLrHMK2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-wJLzJDEX.js",revision:"6800f824ebbded054fb56914ffb7f88d"},{url:"assets/source-sans-pro-italic-kXLDr8ko.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-italic-r_ZvIQue.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-URCxwoo9.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-regular-1WEW6-y9.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-7ugzKlOX.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-vMQH-Lno.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-8K4hAz36.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-CdFA3Jgq.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-yZBXeD4J.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-0pB0ab1n.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-R0KDpyfN.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/source-sans-pro-semibolditalic-wk7IoV6c.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/style-R39-d4Hn.css",revision:"5caaf17ef0868fb7719b81c3729eeb4f"},{url:"assets/time_arrangement.html-Hx30mUiz.js",revision:"505b01007910483c7da60301e4aa100e"},{url:"assets/time_arrangement.html-vMBLo83D.js",revision:"22565c5237783dab026e0b4dace8fe4b"},{url:"assets/trans_mse_tutorial.html-8UnyMyAz.js",revision:"51965572b7216f03cd5a0e1f7e98cfaf"},{url:"assets/trans_mse_tutorial.html-YMNb10Ns.js",revision:"9e9964faaabdba2e1b6c3b99b80cbb11"},{url:"assets/useful_data.html-21tx3GMa.js",revision:"9352292e2ac4df913ec9ea9febf1240b"},{url:"assets/useful_data.html-sohzVtua.js",revision:"1ff7d2f0d53466604ee851b235889bde"},{url:"assets/zoom.esm-w3VbP3hY.js",revision:"e6e8f9a61302e3ca14aa4dbeec242607"},{url:"bg1.svg",revision:"7896ae1dad5215c72a8f4e779db28e5f"},{url:"home.svg",revision:"4c402382516c2dec63d36202c30348c1"},{url:"mb.svg",revision:"ef50830d615567d9f32dec21a09eda13"},{url:"sb1.svg",revision:"9684f1de4c13ed9551c7f185c0acc53b"},{url:"sb1dark.svg",revision:"564405dc0e6bcc27191a1bd5f6437a13"},{url:"404.html",revision:"fc29f20d624cdc54b3225b3749a53e87"},{url:"article/index.html",revision:"802a45a77b612278b2b0a7a29766ca06"},{url:"category/index.html",revision:"5ae022b3b99c1e125722cf9470eb7763"},{url:"category/专业方向介绍/index.html",revision:"2824f6c516e5d5797ffc36ab925cef0e"},{url:"category/课程相关/index.html",revision:"b0406520870d2bb2eac40baf1b21115b"},{url:"elective/index.html",revision:"b04cc35064994ee02a15a6b42de7cedd"},{url:"elective/IS5/index.html",revision:"341c2a2a701486035c9ed0712c60f704"},{url:"elective/IS5/IS5314.html",revision:"97a473ac3d5960f6554c2a9106179ca6"},{url:"elective/IS5/IS5542.html",revision:"bad9e5ca3d4dbae5aed92727cd095d5b"},{url:"elective/IS5/IS5743.html",revision:"3b74e74edb8338bddffb825b3ff5d612"},{url:"elective/IS5/IS5940.html",revision:"0b221d90ce6ea2dda1410b04b9a2df96"},{url:"elective/IS6/index.html",revision:"db2b6cd3a3a81b9257e8235d2456dc6a"},{url:"elective/IS6/IS6200.html",revision:"21b61f90249502f143dd7fca1752c267"},{url:"elective/IS6/IS6322.html",revision:"1e99c8380d9eabd10d579aec53ba9e31"},{url:"elective/IS6/IS6421.html",revision:"8a732a1ed8b4a868c9a96a4c33f0c20a"},{url:"elective/IS6/IS6620.html",revision:"e9c634e0827b35456eefdede3aa4d35e"},{url:"elective/IS6/IS6640.html",revision:"241945e514271502aa3b5a93a2af46be"},{url:"elective/IS6/IS6912.html",revision:"a461112d26db901ee27252ed338c0553"},{url:"elective/IS6/IS6921.html",revision:"f399eb856bdb8f5b9f9686b0d635ac66"},{url:"elective/IS6/IS6930.html",revision:"1bdc7d7aa58860158b3325dafbf2c1fb"},{url:"elective/IS6/IS6940C.html",revision:"7d44fffbc0951fdb65c01d5f25ad691e"},{url:"FIT/Core_Course/AC5511.html",revision:"84e3d350a843f2363dff2e9d04186a1a"},{url:"FIT/Core_Course/EF5042.html",revision:"470c35c1425dcf6aec75b95719025a93"},{url:"FIT/Core_Course/index.html",revision:"e57e14a347a35bc49901868ec320b2a3"},{url:"FIT/Core_Course/IS5540.html",revision:"7caa98d281b42458f9dfec16b79b4f60"},{url:"FIT/Core_Course/IS5740.html",revision:"3df5172954d9102bb9ddcceef282d140"},{url:"FIT/Core_Course/IS6400.html",revision:"01974ada03353bf6d44a60ebde3d2538"},{url:"FIT/Core_Course/IS6523.html",revision:"9a37c29dd9aec436cd0a0fa57de6ccd4"},{url:"FIT/FIT_Elective/EF5052.html",revision:"00a9be04c17cf8bcbae28fc3bd63ee23"},{url:"FIT/FIT_Elective/index.html",revision:"67d726e2d151bffc76db7299fabfb96b"},{url:"FIT/FIT_Elective/IS5010.html",revision:"d1a0729364235c9b37f9c6218e2f57ea"},{url:"FIT/FIT_Elective/IS5238.html",revision:"2c5b4edc66adf570cfe3e9f022ddc8ad"},{url:"FIT/FIT_Elective/IS6941.html",revision:"14cfc94dd97af6696baab234c3b1b303"},{url:"FIT/index.html",revision:"df79969b4af0021b3419d7024eb7df19"},{url:"General/about.html",revision:"6121248908113529f63cc72ca312b3cf"},{url:"General/alumni_share.html",revision:"071235fca4808be9fbcd43cd3331bbe0"},{url:"General/appreciate.html",revision:"b401608c8e2051e9e1c9f0f072e96b9c"},{url:"General/Hall_of_Fame.html",revision:"9ca81504685afb2421357f5816bc0f73"},{url:"General/index.html",revision:"a7bfa089a41b41ffb5b6a14309ba3e6d"},{url:"General/quickstart.html",revision:"69b7f39b8cdcf2489353c8f1522ef3da"},{url:"General/recurit.html",revision:"882fbad329e7cc9427e13c34104c7d1c"},{url:"index.html",revision:"2a7ce659d7178b7f7da82fdfdcb31430"},{url:"MIS/Core_Course/index.html",revision:"4e459f037ce00725bb77228edce61f58"},{url:"MIS/Core_Course/IS5311.html",revision:"a0335ca3776f5c342a77e2a208918d2b"},{url:"MIS/Core_Course/IS5312.html",revision:"5ba72d6cb8914e863f054cac082595ca"},{url:"MIS/Core_Course/IS5313.html",revision:"d0f81773d4795d96afca3a72370e05c4"},{url:"MIS/Core_Course/IS5411.html",revision:"b4f5209caf88d6d3c36939bfa6b69cd1"},{url:"MIS/Core_Course/IS5413.html",revision:"f076806320f14352654784b040baf140"},{url:"MIS/Core_Course/IS5540.html",revision:"aff919957e65926d74111fe9a99b809b"},{url:"MIS/index.html",revision:"ce676abab9e9680af5050e7b618a11d7"},{url:"MIS/MIS_Elective/index.html",revision:"6d5ff49c44c06d8ff3460adf92a8b983"},{url:"MIS/MIS_Elective/IS6335.html",revision:"4c01f3c771811226c607dba135e74b5f"},{url:"star/index.html",revision:"ed6bb0c958fa1895ebf2e0114fb20693"},{url:"tag/fit必修/index.html",revision:"a2676b66f8a4fb3fca901c95d2eac034"},{url:"tag/fit计划内选修/index.html",revision:"9417e1ab7a05f809c8f7950e37a85dd5"},{url:"tag/index.html",revision:"2f3a64bc59b26d1197514c03b9fc0136"},{url:"tag/mis必修/index.html",revision:"d407391532eddf91b988d6a286b57b25"},{url:"tag/mis计划内选修/index.html",revision:"c3f03d7345cec78b89a8d40be7a9c09b"},{url:"tag/sema/index.html",revision:"50f917a9802ffb7149c8082d939bc06f"},{url:"tag/semasemb/index.html",revision:"e6b0b9678fd5cd95438250b6cf2b01dc"},{url:"tag/semb/index.html",revision:"8449267f9492a11fb91baa0e23856402"},{url:"tag/st课程/index.html",revision:"f73b7677155dd01183f534c63d95e212"},{url:"tag/unknown/index.html",revision:"78e437d738d8cadf7fe5568d6b2f7fa2"},{url:"tag/公共选修课程/index.html",revision:"ea4ad45503965375ef01b0fe507d725d"},{url:"tag/技术支持/index.html",revision:"2b064ed671cc117f7380e9732e4f48b9"},{url:"tag/网选/index.html",revision:"54e5631e14818476fefedfd17e04cc15"},{url:"tag/论文课程/index.html",revision:"27670133477675eb20b9313a2119b1dc"},{url:"tag/资源/index.html",revision:"2f891f62e7154120b08ff1002a3e73b5"},{url:"tag/选课/index.html",revision:"d927fb0e4d5e74b7c88e5130c1611e13"},{url:"tag/非网选/index.html",revision:"ccf9a9a4afa014ec2694dfcc4c2da90b"},{url:"Tech/Canvas.html",revision:"efba08836820e21ea453ce86e2084c36"},{url:"Tech/CityU_Portal.html",revision:"0419e9c3ffd89a23ae36b67af3dc4fa6"},{url:"Tech/index.html",revision:"1c5a089a0295ac70db9c467153f1986f"},{url:"Tech/it_services.html",revision:"c7d4db51d4654d6c1f1aed4405d18858"},{url:"timeline/index.html",revision:"dda970b4d0c11ce7dad5c232ccc116d9"},{url:"Useful/CourseEnroll/how_to.html",revision:"aed26a9d498c0111a389d8f5ee28fac6"},{url:"Useful/CourseEnroll/index.html",revision:"12ecd3a774e7083f5e7be5f5516e037b"},{url:"Useful/CourseEnroll/time_arrangement.html",revision:"b03824f9fd004ad47fc02e4793b5874f"},{url:"Useful/CourseEnroll/useful_data.html",revision:"784ea47ad27c6bc97e759621b482ef03"},{url:"Useful/index.html",revision:"352d5ec857c21ca44893eaffce523da9"},{url:"Useful/Learning/BIS_resource.html",revision:"15311bea60026807743d23a80f756859"},{url:"Useful/Learning/index.html",revision:"5e0e152fed5e604b12b1ba92cf5621d9"},{url:"Useful/Learning/trans_mse_tutorial.html",revision:"5b1da6af6af73b107267f1273fe85791"},{url:"AIMS_1.png",revision:"2ae4aee04c5608604b789faa89823dac"},{url:"AIMS_2.png",revision:"af35e3c10822031422242bb418f054f2"},{url:"AIMS_3.png",revision:"83f786b7abd2866bde1a55c4a660bacd"},{url:"AIMS_4.png",revision:"d51187c62b8dd8ac3cd49516d70f294e"},{url:"AIMS_5.png",revision:"5aae2f9db769813e42518b6e599d1dba"},{url:"ARRO_2.png",revision:"d2a64cd815a4eb670ef301897f626c4f"},{url:"assets/icon/apple-icon-152.png",revision:"c1660433e69bd633e170e835e487edeb"},{url:"assets/icon/chrome-192.png",revision:"f5e887aaa327ffd5cd24ac3a1f37a3c1"},{url:"assets/icon/chrome-512.png",revision:"66227a40d0a45aa520c069ea16e3d55c"},{url:"assets/icon/chrome-mask-192.png",revision:"e1c291574ef9f118a6cbe0c19c03c770"},{url:"assets/icon/chrome-mask-512.png",revision:"46b772147934d783f3c425420b983e0f"},{url:"assets/icon/ms-icon-144.png",revision:"5b196a3159578be35b1a2e0e5ff78f5d"},{url:"bg1dark.png",revision:"1a613b0b7124fc4b979735d016c2b82b"},{url:"BISlogo.jpg",revision:"b28de214fbe58704fe73234e0f08e146"},{url:"Canvas_1.png",revision:"6a611764027e824c2c1a5274fe1f7a1b"},{url:"Canvas_2.png",revision:"15ff41bd190950e70ef86865dec12955"},{url:"Canvas_3.png",revision:"88d22e06874d6817f05e343f96716ac2"},{url:"Canvas.png",revision:"b1dc1837db24cbc1b891543b784810ab"},{url:"CityUPortal.png",revision:"88db5c1a44935df88798035d0df16993"},{url:"logo.png",revision:"0fd58fab18c0a87073b8546907af35b2"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map