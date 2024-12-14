#!/php -q
<?php  
include "websocket.class.php";
class EchoServer extends WebSocket{
  function process($user,$msg){
    // 接続している全員にメッセージを送信する
    foreach ($this->sockets as $socket) {
      if ($socket != $this->master) {
        $this->send($socket, $msg);
      }
    }
  }
}
$ws = new EchoServer("localhost",12345);
$ws->listen();
