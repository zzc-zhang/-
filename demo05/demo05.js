// pages/demo05/demo05.js
Page({

    data: {
        //标签字符串
        htmll:'<div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; place-content: flex-start center; flex-shrink: 0; width: 375px; -webkit-box-align: center; align-items: center; -webkit-box-pack: center;"><a href="https://suning.tmall.com/?pos=1&amp;acm=201704071.1003.64.1699747&amp;scm=1003.64.201704071.OTHER_1547149173937_1699747&amp;spm=a211ue.11501597.icon.1" data-spm-c="icon" data-spm-d="1" style="text-decoration: none; text-align: center;" data-appeared="true"><img placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" autoremovescheme="true" autoreplacedomain="true" autoscaling="true" autowebp="true" ignoregif="true" autocompress="true" highquality="true" compresssuffix="Q75,Q50" defaultheight="750rem" lazyload="false" autopixelratio="true" data-once="true" fallbacksource="[object Object]" src="//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" style="display: initial; width: 48px; height: 48px; margin: 5px 11px 2px;"><span style="white-space: pre-wrap; border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; text-align: center; line-height: 15px; align-self: center; color: rgb(0, 0, 0);">苏宁易购</span></a><a href="https://chaoshi.m.tmall.com/?pos=2&amp;acm=201704071.1003.64.1699747&amp;_ig=shoumao&amp;scm=1003.64.201704071.OTHER_1545931209467_1699747&amp;spm=a211ue.11501597.icon.2" data-spm-c="icon" data-spm-d="2" style="text-decoration: none; text-align: center;" data-appeared="true"><img placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" autoremovescheme="true" autoreplacedomain="true" autoscaling="true" autowebp="true" ignoregif="true" autocompress="true" highquality="true" compresssuffix="Q75,Q50" defaultheight="750rem" lazyload="false" autopixelratio="true" data-once="true" fallbacksource="[object Object]" src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp" style="display: initial; width: 48px; height: 48px; margin: 5px 11px 2px;"><span style="white-space: pre-wrap; border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; text-align: center; line-height: 15px; align-self: center; color: rgb(0, 0, 0);">天猫超市</span></a><a href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&amp;pos=3&amp;acm=201704071.1003.64.1699747&amp;scm=1003.64.201704071.OTHER_1547673722287_1699747&amp;spm=a211ue.11501597.icon.3" data-spm-c="icon" data-spm-d="3" style="text-decoration: none; text-align: center;" data-appeared="true"><img placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" autoremovescheme="true" autoreplacedomain="true" autoscaling="true" autowebp="true" ignoregif="true" autocompress="true" highquality="true" compresssuffix="Q75,Q50" defaultheight="750rem" lazyload="false" autopixelratio="true" data-once="true" fallbacksource="[object Object]" src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" style="display: initial; width: 48px; height: 48px; margin: 5px 11px 2px;"><span style="white-space: pre-wrap; border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; text-align: center; line-height: 15px; align-self: center; color: rgb(0, 0, 0);">天猫国际</span></a><a href="//tb.cn/x/ju?pos=4&amp;acm=201704071.1003.64.1699747&amp;scm=1003.64.201704071.OTHER_1547844648097_1699747&amp;spm=a211ue.11501597.icon.4" data-spm-c="icon" data-spm-d="4" style="text-decoration: none; text-align: center;" data-appeared="true"><img placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" autoremovescheme="true" autoreplacedomain="true" autoscaling="true" autowebp="true" ignoregif="true" autocompress="true" highquality="true" compresssuffix="Q75,Q50" defaultheight="750rem" lazyload="false" autopixelratio="true" data-once="true" fallbacksource="[object Object]" src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp" style="display: initial; width: 48px; height: 48px; margin: 5px 11px 2px;"><span style="white-space: pre-wrap; border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; text-align: center; line-height: 15px; align-self: center; color: rgb(0, 0, 0);">聚划算</span></a><a href="//pages.tmall.com/wow/list/act/list-classify-new?pos=5&amp;acm=201704071.1003.64.1699747&amp;scm=1003.64.201704071.OTHER_1547681032767_1699747&amp;spm=a211ue.11501597.icon.5" data-spm-c="icon" data-spm-d="5" style="text-decoration: none; text-align: center;" data-appeared="true"><img placeholder="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" autoremovescheme="true" autoreplacedomain="true" autoscaling="true" autowebp="true" ignoregif="true" autocompress="true" highquality="true" compresssuffix="Q75,Q50" defaultheight="750rem" lazyload="false" autopixelratio="true" data-once="true" fallbacksource="[object Object]" src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" style="display: initial; width: 48px; height: 48px; margin: 5px 11px 2px;"><span style="white-space: pre-wrap; border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; text-align: center; line-height: 15px; align-self: center; color: rgb(0, 0, 0);">分类</span></a>' +
            '</div>',
        // 对象数组
        html:[
            {
                //1.div标签 name属性来指定
                name:"div",
                // 2.标签上有那些属性
                attrs:{
                //    标签上的属性 class style
                    class:"my_div",
                    style:"color:red;"
                },
                children:[
                    {
                        name:"p",
                        attrs:{},
                    //    放文本
                        children:[
                            {
                                type:"text",
                                text:"hello"
                            }
                        ]
                        
                        
                    }
                ]
            }
        ]
    },
    
})