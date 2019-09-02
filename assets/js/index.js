$(function(){
    console.log($('#new-row').append(item0))
    console.log($('#new-row').append(item1))
    console.log($('#new-row').append(item2))
})



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
        var name = result.new[0].name
        var url = result.new[0].url
        var doc = result.new[0].doc
        var img = result.new[0].img
        console.log(result.new[0].name)
        console.log(result.new[0].url)
        console.log(result.new[0].doc)
        console.log(result.new[0].img)
            // 创建一条内容
        item0 = itemTemplate(result.new[0])
        item1 = itemTemplate(result.new[1])
        item2 = itemTemplate(result.new[2])
     
}