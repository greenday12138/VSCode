<?php
$url = 'http://news.163.com/special/00011K6L/rss_newstop.xml';
$xmlContent = file_get_contents($url);//��ȡԶ���ļ�����
$xmlArray = json_decode(json_encode((array) simplexml_load_string($xmlContent)), true);//���ַ���ת��Ϊ����
echo json_encode($xmlArray);//��ʽ��ΪJSON���ݷ���
?>