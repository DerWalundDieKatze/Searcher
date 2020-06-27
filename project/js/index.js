$(function(){
    for(var j=0; j < itemsFront.length; j++){
        $('#front-end-row').append(itemsFront[j])
      
    }
    for(var j=0; j < itemsBack.length; j++){
        $('#back-end-row').append(itemsBack[j])
      
    }
    for(var j=0; j < itemsBlockchain.length; j++){
        $('#block-chain-row').append(itemsBlockchain[j])
      
    }
    for(var j=0; j < itemsGrowth.length; j++){
        $('#self-growth-row').append(itemsGrowth[j])
      
    }

 
})

var itemsFront = []
var itemsBack = []
var itemsBlockchain = []
var itemsGrowth = []


// 创建单个对象模板
itemTemplate = function(data){
    var color_style = ""
    if(data.author == "lsy"){
        color_style = "background:rgb(182, 226, 252);"
    }else if(data.author == "fjy"){
        color_style = "background:rgb(247, 208, 247);"
    }

    item = `
    <div class="col-sm-3">
    <div style="${color_style}" class="xe-widget xe-conversations box2 label-info" onclick="window.open('${data.url}', '_blank')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="${data.url}">
                <div class="xe-comment-entry" >
                    <a class="xe-user-img">
                        <img src='${data.img}' class="img-circle" width="40">
                    </a>
                    <div class="xe-comment">
                        <a href="#" class="xe-user-name overflowClip_1">
                            <strong>${data.name}</strong>
                        </a>
                        <p class="overflowClip_2">${data.doc}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    return item 
}


function webs(result){
    //回调函数名称(indexDemo)，需要与 src 中一致，而且要与文件地址中名一致。jsonp格式 名称({})
    //不然无法获取到对应的文件
    console.log(result)     //打印 indexDemo.json 中的数据


    for(var i=0; i < result.one.length; i++){
        // 前端项目
        item =  itemTemplate(result.one[i])
        itemsFront[i] = item
    }

    for(var i=0; i < result.two.length; i++){
        // 后端项目
        item =  itemTemplate(result.two[i])
        itemsBack[i] = item
    }

    for(var i=0; i < result.three.length; i++){
        // 区块链项目
        item =  itemTemplate(result.three[i])
        itemsBlockchain[i] = item
    }

    for(var i=0; i < result.four.length; i++){
        // 成长项目
        item =  itemTemplate(result.four[i])
        itemsGrowth[i] = item
    }

 
 
 
}