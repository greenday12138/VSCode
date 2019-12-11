<?php
$url = 'http://news.163.com/special/00011K6L/rss_newstop.xml';
$xmlContent = file_get_contents($url);//获取远程文件内容
$xmlArray = json_decode(json_encode((array) simplexml_load_string($xmlContent)), true);//将字符串转换为数组
echo json_encode($xmlArray);//格式化为JSON数据返回
?>