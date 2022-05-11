// ==UserScript==
// @name        Block Zhihu Ad Question
// @namespace   undefined
// @description 屏蔽知乎带广告回答
// @include     *://www.zhihu.com/question/*
// @version     0.02
// @connect-src       www.zhihu.com
// ==/UserScript==
(function () {
        'use strict';
        setInterval(() => {
            let answerItem = document.getElementsByClassName("AnswerItem");
            for (let key in answerItem) {
                try {
                    let answerItemElement = answerItem[key];
                    let cards = answerItemElement.getElementsByClassName("GoodsRecommendCard");
                    let ads = answerItemElement.getElementsByClassName("ecommerce-ad-commodity");
                    console.log(cards)
                    console.log(cards.length)
                    if (cards.length + ads.length > 0) {
                        answerItemElement.style.display = "none"
                    }
                } catch (e) {

                }
            }
        }, 2000)
    }
)
();
