<?php

header('Content-Type: text/html; charset=utf-8');

//type => 0 娱乐八卦
//type => 1 时政焦点
$data[0] = ['question' => '2014年柯震东和房祖名两大男神发生了什么大事?', 'type'=>0, 
			'point' => array('出柜', '生孩子', '吞云吐雾'), 'key' => 2];

$data[1] = ['question' => '2014年最渴望上头条的大咖是?', 'type'=>0,
			'point' => array('成龙', '汪峰', '何炅'), 'key' => 1];

$data[2] = ['question' => '史上第一位因出轨变成国际巨星的华人演员是?', 'type'=>0,
			'point' => array('文章', '姚笛', '朱芳雨'), 'key' => 0];

$data[3] = ['question' => '杨幂生的小孩乳名叫?', 'type'=>0,
			'point' => array('小屁屁', '矮冬瓜', '小糯米'), 'key' => 2];

$data[4] = ['question' => '2014年好莱坞艳照门女星都使用以下那款手机?', 'type'=>0,
			'point' => array('爱疯', '小米', '三星'), 'key' => 0];

$data[5] = ['question' => '2014年周星驰因为谁被黑出翔?', 'type'=>0,
			'point' => array('刘德华', '向华强', '张国荣'), 'key' => 1];

$data[6] = ['question' => '娱乐圈最不应该得罪的是什么人?', 'type'=>0,
			'point' => array('黑社会大佬', '韩粉', '都叫兽'), 'key' => 1];

$data[7] = ['question' => '郭敬明和韩寒的什么方面经常被粉丝拿来比较?', 'type'=>0,
			'point' => array('身高', '小时代和后会无期', '性别'), 'key' => 0];

$data[8] = ['question' => '我们亲切地称呼习近平为?', 'type'=>1,
			'point' => array('习主席', '媛媛她老公', '习大大'), 'key' => 2];

$data[9] = ['question' => '以下哪句是阿里巴巴上市路演视频中马云说的话', 'type'=>1,
			'point' => array('今天爽，明天更爽，后天倍儿爽', '今天困苦，明天更苦，后天会是美丽的', '今天是屌丝，明天是屌丝，一辈子是屌丝'), 'key' => 1];



$json_data = json_encode($data, JSON_UNESCAPED_UNICODE);

echo $json_data;

?>