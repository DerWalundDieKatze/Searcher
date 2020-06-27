$(function(){
    for(var j=0; j < itemsFind.length; j++){
        $('#find-row').append(itemsFind[j])
      
    }
 
    for(var j=0; j < itemsBlog.length; j++){
        $('#blog-row').append(itemsBlog[j])
      
    }
    for(var j=0; j < itemsInfo.length; j++){
        $('#info-row').append(itemsInfo[j])
      
    }
    for(var j=0; j < itemsTool.length; j++){
        $('#tool-row').append(itemsTool[j])
      
    }
    for(var j=0; j < itemsLink.length; j++){
        $('#link-row').append(itemsLink[j])
      
    }
 
})

var itemsFind = []
var itemsBlog = []
var itemsInfo = []
var itemsTool = []
var itemsLink = []

// 创建单个对象模板
itemTemplate = function(data){
    item = `
    <div class="col-sm-3">
    <div class="xe-widget xe-conversations box2 label-info" onclick="window.open('${data.url}', '_blank')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="${data.url}">
                <div class="xe-comment-entry">
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


    for(var i=0; i < result.find.length; i++){
        // 资源寻找
        item =  itemTemplate(result.find[i])
        itemsFind[i] = item
    }

    for(var i=0; i < result.blog.length; i++){
        // 社区论坛
        item =  itemTemplate(result.blog[i])
        itemsBlog[i] = item
    }

    for(var i=0; i < result.info.length; i++){
        // 资讯信息
        item =  itemTemplate(result.info[i])
        itemsInfo[i] = item
    }

    for(var i=0; i < result.tool.length; i++){
        // 工具实践
        item =  itemTemplate(result.tool[i])
        itemsTool[i] = item
    }

    for(var i=0; i < result.link.length; i++){
        // 职业导航
        item =  itemTemplate(result.link[i])
        itemsLink[i] = item
    }
 
 
}