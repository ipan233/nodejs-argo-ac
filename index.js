const FILE_PATH = process.env.FILE_PATH || './temp'; // 运行文件夹，节点文件存放目录
const projectPageURL = process.env.URL || '';        // 填写项目域名可开启自动访问保活，非标端口的前缀是http://
const intervalInseconds = process.env.TIME || 120;   // 自动访问间隔时间（120秒）
const UUID = process.env.UUID || '66fee850-56d8-45d7-a9e5-bb79d27bed55';
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nz-data.pbot.eu.org';  // 哪吒3个变量不全不运行
const NEZHA_PORT = process.env.NEZHA_PORT || '443';           // 哪吒端口为{443,8443,2096,2087,2083,2053}其中之一时开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || '';                 // 哪吒客户端密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || '';             // 固定隧道域名，留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || '';                 // 固定隧道json或token，留空即启用临时隧道
const CFIP = process.env.CFIP || 'skk.moe';              // 优选域名或优选ip
const CFPORT = process.env.CFPORT || 443;                      // 节点端口
const NAME = process.env.NAME || 'Vls';                        // 节点名称
const port = process.env.PORT || 3000;                         // http服务端口，也是订阅端口，游戏玩具平台改为分配的端口，否则无法订阅
const ArgoPort = process.env.ARGO_PORT || 8080;                // Argo端口，使用固定隧道token需和cf后台设置的端口对应

const _0x516fea=_0x5012;(function(_0x29c570,_0x359621){const _0x2fdf77=_0x5012,_0x2c8c2f=_0x29c570();while(!![]){try{const _0x18c82c=parseInt(_0x2fdf77(0x1ae))/0x1+-parseInt(_0x2fdf77(0x1f9))/0x2+parseInt(_0x2fdf77(0x1d7))/0x3*(parseInt(_0x2fdf77(0x1a2))/0x4)+parseInt(_0x2fdf77(0x1c3))/0x5*(-parseInt(_0x2fdf77(0x1cf))/0x6)+-parseInt(_0x2fdf77(0x1a7))/0x7+parseInt(_0x2fdf77(0x1a6))/0x8+parseInt(_0x2fdf77(0x20f))/0x9;if(_0x18c82c===_0x359621)break;else _0x2c8c2f['push'](_0x2c8c2f['shift']());}catch(_0x29a1ec){_0x2c8c2f['push'](_0x2c8c2f['shift']());}}}(_0x1526,0x70b7c));const express=require(_0x516fea(0x1ce)),app=express(),axios=require(_0x516fea(0x1cb)),os=require('os'),fs=require('fs'),path=require(_0x516fea(0x21a)),{promisify}=require('util'),exec=promisify(require(_0x516fea(0x200))[_0x516fea(0x22d)]),{execSync}=require('child_process');!fs['existsSync'](FILE_PATH)?(fs[_0x516fea(0x218)](FILE_PATH),console['log'](FILE_PATH+_0x516fea(0x1a9))):console[_0x516fea(0x1bd)](FILE_PATH+'\x20already\x20exists');const pathsToDelete=[_0x516fea(0x1db),_0x516fea(0x221),'npm',_0x516fea(0x1e0),'boot.log'];function cleanupOldFiles(){pathsToDelete['forEach'](_0x3828fb=>{const _0x834f47=_0x5012,_0x303ea0=path[_0x834f47(0x1ca)](FILE_PATH,_0x3828fb);fs[_0x834f47(0x1d8)](_0x303ea0,_0x4fa9b8=>{const _0x5570b2=_0x834f47;_0x4fa9b8?console[_0x5570b2(0x1e6)]('Skip\x20Delete\x20'+_0x303ea0):console[_0x5570b2(0x1bd)](_0x303ea0+'\x20deleted');});});}cleanupOldFiles(),app[_0x516fea(0x208)]('/',function(_0x13895c,_0x4f8351){const _0x43bd75=_0x516fea;_0x4f8351['send'](_0x43bd75(0x1b3));});function generateConfig(){const _0xa3027f=_0x516fea,_0x292da0={'log':{'access':_0xa3027f(0x1ad),'error':_0xa3027f(0x1ad),'loglevel':_0xa3027f(0x1da)},'inbounds':[{'port':ArgoPort,'protocol':_0xa3027f(0x228),'settings':{'clients':[{'id':UUID,'flow':'xtls-rprx-vision'}],'decryption':_0xa3027f(0x1da),'fallbacks':[{'dest':0xbb9},{'path':_0xa3027f(0x212),'dest':0xbba},{'path':_0xa3027f(0x1ea),'dest':0xbbb},{'path':_0xa3027f(0x1ff),'dest':0xbbc}]},'streamSettings':{'network':_0xa3027f(0x1fc)}},{'port':0xbb9,'listen':_0xa3027f(0x1d5),'protocol':_0xa3027f(0x228),'settings':{'clients':[{'id':UUID}],'decryption':'none'},'streamSettings':{'network':'ws','security':_0xa3027f(0x1da)}},{'port':0xbba,'listen':_0xa3027f(0x1d5),'protocol':_0xa3027f(0x228),'settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':'none'},'streamSettings':{'network':'ws','security':_0xa3027f(0x1da),'wsSettings':{'path':'/vless'}},'sniffing':{'enabled':!![],'destOverride':['http','tls',_0xa3027f(0x207)],'metadataOnly':![]}},{'port':0xbbb,'listen':'127.0.0.1','protocol':'vmess','settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0xa3027f(0x1ea)}},'sniffing':{'enabled':!![],'destOverride':[_0xa3027f(0x1e2),_0xa3027f(0x1af),'quic'],'metadataOnly':![]}},{'port':0xbbc,'listen':'127.0.0.1','protocol':'trojan','settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':_0xa3027f(0x1da),'wsSettings':{'path':'/trojan'}},'sniffing':{'enabled':!![],'destOverride':[_0xa3027f(0x1e2),_0xa3027f(0x1af),'quic'],'metadataOnly':![]}}],'dns':{'servers':[_0xa3027f(0x1c0)]},'outbounds':[{'protocol':_0xa3027f(0x1d9)},{'tag':'WARP','protocol':'wireguard','settings':{'secretKey':'YFYOAdbw1bKTHlNNi+aEjBM3BO7unuFC5rOkMRAz9XY=','address':[_0xa3027f(0x216),_0xa3027f(0x1fb)],'peers':[{'publicKey':_0xa3027f(0x1b1),'allowedIPs':[_0xa3027f(0x22b),_0xa3027f(0x1e1)],'endpoint':_0xa3027f(0x1d3)}],'reserved':[0x4e,0x87,0x4c],'mtu':0x500}}],'routing':{'domainStrategy':_0xa3027f(0x206),'rules':[{'type':_0xa3027f(0x1c4),'domain':[_0xa3027f(0x220),_0xa3027f(0x1d0)],'outboundTag':_0xa3027f(0x1a8)}]}};fs['writeFileSync'](path['join'](FILE_PATH,_0xa3027f(0x226)),JSON[_0xa3027f(0x203)](_0x292da0,null,0x2));}generateConfig();function getSystemArchitecture(){const _0x430e51=_0x516fea,_0x3ca8ce=os[_0x430e51(0x1a4)]();return _0x3ca8ce===_0x430e51(0x1f6)||_0x3ca8ce===_0x430e51(0x217)?_0x430e51(0x1f6):_0x430e51(0x1ef);}function downloadFile(_0x1f9e6b,_0x10cdf3,_0x34827b){const _0x814891=_0x516fea,_0x59035b=path[_0x814891(0x1ca)](FILE_PATH,_0x1f9e6b),_0x1e0504=fs[_0x814891(0x1e8)](_0x59035b);axios({'method':_0x814891(0x208),'url':_0x10cdf3,'responseType':'stream'})[_0x814891(0x1eb)](_0x39591e=>{const _0x4d5d06=_0x814891;_0x39591e['data'][_0x4d5d06(0x1b8)](_0x1e0504),_0x1e0504['on'](_0x4d5d06(0x201),()=>{const _0x55d702=_0x4d5d06;_0x1e0504[_0x55d702(0x1c7)](),console[_0x55d702(0x1bd)](_0x55d702(0x204)+_0x1f9e6b+_0x55d702(0x1dd)),_0x34827b(null,_0x1f9e6b);}),_0x1e0504['on'](_0x4d5d06(0x1e6),_0x149869=>{const _0x59985a=_0x4d5d06;fs[_0x59985a(0x1d8)](_0x59035b,()=>{});const _0x51bc6c=_0x59985a(0x204)+_0x1f9e6b+_0x59985a(0x20c)+_0x149869['message'];console[_0x59985a(0x1e6)](_0x51bc6c),_0x34827b(_0x51bc6c);});})[_0x814891(0x1b7)](_0x3b1a26=>{const _0x1b3e64=_0x814891,_0x1016d6=_0x1b3e64(0x204)+_0x1f9e6b+'\x20failed:\x20'+_0x3b1a26[_0x1b3e64(0x20a)];console[_0x1b3e64(0x1e6)](_0x1016d6),_0x34827b(_0x1016d6);});}async function downloadFilesAndRun(){const _0x220069=_0x516fea,_0x16dc52=getSystemArchitecture(),_0x498ca3=getFilesForArchitecture(_0x16dc52);if(_0x498ca3[_0x220069(0x1d6)]===0x0){console[_0x220069(0x1bd)]('Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture');return;}const _0x2f0512=_0x498ca3[_0x220069(0x230)](_0x4f446e=>{return new Promise((_0x4fcaf9,_0x277bf4)=>{const _0x4f9186=_0x5012;downloadFile(_0x4f446e[_0x4f9186(0x1f1)],_0x4f446e[_0x4f9186(0x19e)],(_0x113fd0,_0x3aeec4)=>{_0x113fd0?_0x277bf4(_0x113fd0):_0x4fcaf9(_0x3aeec4);});});});try{await Promise['all'](_0x2f0512);}catch(_0xa205b9){console[_0x220069(0x1e6)](_0x220069(0x1ee),_0xa205b9);return;}function _0x317488(_0x496dfb){const _0x29a64e=_0x220069,_0x3a3013=0x1fd;_0x496dfb[_0x29a64e(0x1df)](_0x55a91a=>{const _0x4bfba1=_0x29a64e,_0x4c7b41=path[_0x4bfba1(0x1ca)](FILE_PATH,_0x55a91a);fs[_0x4bfba1(0x22c)](_0x4c7b41,_0x3a3013,_0x4eb838=>{const _0x4b5d6a=_0x4bfba1;_0x4eb838?console['error'](_0x4b5d6a(0x1d2)+_0x4c7b41+':\x20'+_0x4eb838):console[_0x4b5d6a(0x1bd)](_0x4b5d6a(0x1dc)+_0x4c7b41+':\x20'+_0x3a3013[_0x4b5d6a(0x1fe)](0x8));});});}const _0x1bac70=['./npm','./web','./bot'];_0x317488(_0x1bac70);let _0x285d08='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){const _0x136809=['443',_0x220069(0x20e),_0x220069(0x1a3),_0x220069(0x1cc),_0x220069(0x1f8),_0x220069(0x1d1)];_0x136809['includes'](NEZHA_PORT)?_0x285d08=_0x220069(0x22f):_0x285d08='';const _0x5dd21a=_0x220069(0x1e3)+FILE_PATH+_0x220069(0x209)+NEZHA_SERVER+':'+NEZHA_PORT+_0x220069(0x1c9)+NEZHA_KEY+'\x20'+_0x285d08+_0x220069(0x20d);try{await exec(_0x5dd21a),console[_0x220069(0x1bd)](_0x220069(0x1f7)),await new Promise(_0x3ba871=>setTimeout(_0x3ba871,0x3e8));}catch(_0x9f4b1b){console['error']('npm\x20running\x20error:\x20'+_0x9f4b1b);}}else console[_0x220069(0x1bd)](_0x220069(0x219));const _0x93d69f='nohup\x20'+FILE_PATH+_0x220069(0x229)+FILE_PATH+_0x220069(0x202);try{await exec(_0x93d69f),console['log'](_0x220069(0x1b6)),await new Promise(_0x1d13cd=>setTimeout(_0x1d13cd,0x3e8));}catch(_0x45e183){console[_0x220069(0x1e6)]('web\x20running\x20error:\x20'+_0x45e183);}if(fs[_0x220069(0x1c5)](path[_0x220069(0x1ca)](FILE_PATH,_0x220069(0x221)))){let _0x1a6ac9;if(ARGO_AUTH[_0x220069(0x1be)](/^[A-Z0-9a-z=]{120,250}$/))_0x1a6ac9=_0x220069(0x1e9)+ARGO_AUTH;else ARGO_AUTH['match'](/TunnelSecret/)?_0x1a6ac9=_0x220069(0x224)+FILE_PATH+_0x220069(0x214):_0x1a6ac9='tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20'+FILE_PATH+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ArgoPort;try{await exec('nohup\x20'+FILE_PATH+'/bot\x20'+_0x1a6ac9+_0x220069(0x20d)),console[_0x220069(0x1bd)](_0x220069(0x210)),await new Promise(_0x39a602=>setTimeout(_0x39a602,0x7d0));}catch(_0x71a024){console[_0x220069(0x1e6)](_0x220069(0x1ac)+_0x71a024);}}await new Promise(_0x3438da=>setTimeout(_0x3438da,0x1388));}function getFilesForArchitecture(_0x5e2ae8){const _0x4f9c83=_0x516fea;if(_0x5e2ae8===_0x4f9c83(0x1f6))return[{'fileName':_0x4f9c83(0x1ec),'fileUrl':_0x4f9c83(0x1a5)},{'fileName':_0x4f9c83(0x1db),'fileUrl':'https://github.com/eooce/test/releases/download/ARM/web'},{'fileName':_0x4f9c83(0x221),'fileUrl':'https://github.com/eooce/test/releases/download/arm64/server'}];else{if(_0x5e2ae8===_0x4f9c83(0x1ef))return[{'fileName':_0x4f9c83(0x1ec),'fileUrl':'https://github.com/eooce/test/releases/download/amd64/npm'},{'fileName':_0x4f9c83(0x1db),'fileUrl':_0x4f9c83(0x1b5)},{'fileName':_0x4f9c83(0x221),'fileUrl':_0x4f9c83(0x227)}];}return[];}function argoType(){const _0x189b99=_0x516fea;if(!ARGO_AUTH||!ARGO_DOMAIN){console[_0x189b99(0x1bd)]('ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels');return;}if(ARGO_AUTH['includes'](_0x189b99(0x1c2))){fs[_0x189b99(0x22a)](path[_0x189b99(0x1ca)](FILE_PATH,_0x189b99(0x222)),ARGO_AUTH);const _0x16a41c=_0x189b99(0x1c1)+ARGO_AUTH[_0x189b99(0x19f)]('\x22')[0xb]+_0x189b99(0x1cd)+path[_0x189b99(0x1ca)](FILE_PATH,_0x189b99(0x222))+_0x189b99(0x1ed)+ARGO_DOMAIN+_0x189b99(0x1ba)+ArgoPort+'\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20';fs[_0x189b99(0x22a)](path['join'](FILE_PATH,_0x189b99(0x1a1)),_0x16a41c);}else console['log'](_0x189b99(0x205));}argoType();async function extractDomains(){const _0xe3cd64=_0x516fea;let _0x4bc159;if(ARGO_AUTH&&ARGO_DOMAIN)_0x4bc159=ARGO_DOMAIN,console[_0xe3cd64(0x1bd)](_0xe3cd64(0x21e),_0x4bc159),await _0x177f89(_0x4bc159);else try{const _0x28f667=fs[_0xe3cd64(0x1bf)](path[_0xe3cd64(0x1ca)](FILE_PATH,_0xe3cd64(0x1fd)),'utf-8'),_0x143a69=_0x28f667[_0xe3cd64(0x19f)]('\x0a'),_0x3c58f9=[];_0x143a69[_0xe3cd64(0x1df)](_0x1ec21f=>{const _0x369b91=_0x1ec21f['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x369b91){const _0x5eabd7=_0x369b91[0x1];_0x3c58f9['push'](_0x5eabd7);}});if(_0x3c58f9[_0xe3cd64(0x1d6)]>0x0)_0x4bc159=_0x3c58f9[0x0],console[_0xe3cd64(0x1bd)](_0xe3cd64(0x1f3),_0x4bc159),await _0x177f89(_0x4bc159);else{console[_0xe3cd64(0x1bd)]('ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain'),fs[_0xe3cd64(0x21b)](path[_0xe3cd64(0x1ca)](FILE_PATH,_0xe3cd64(0x1fd))),await new Promise(_0x3f33c3=>setTimeout(_0x3f33c3,0x7d0));const _0x5a35fc=_0xe3cd64(0x1c6)+FILE_PATH+_0xe3cd64(0x20b)+ArgoPort;try{await exec('nohup\x20'+path[_0xe3cd64(0x1ca)](FILE_PATH,_0xe3cd64(0x221))+'\x20'+_0x5a35fc+_0xe3cd64(0x20d)),console['log'](_0xe3cd64(0x1ab)),await new Promise(_0x6ae3a2=>setTimeout(_0x6ae3a2,0xbb8)),await extractDomains();}catch(_0x514fb7){console[_0xe3cd64(0x1e6)]('Error\x20executing\x20command:\x20'+_0x514fb7);}}}catch(_0x1ba38f){console[_0xe3cd64(0x1e6)](_0xe3cd64(0x1f4),_0x1ba38f);}async function _0x177f89(_0x52c7ba){const _0x4e5876=_0xe3cd64,_0x597134=execSync(_0x4e5876(0x1b0),{'encoding':_0x4e5876(0x21d)}),_0x2c2adc=_0x597134[_0x4e5876(0x22e)]();return new Promise(_0x1d6ffc=>{setTimeout(()=>{const _0x51c275=_0x5012,_0x5db7a3={'v':'2','ps':NAME+'-'+_0x2c2adc,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':_0x51c275(0x1da),'net':'ws','type':_0x51c275(0x1da),'host':_0x52c7ba,'path':_0x51c275(0x1bb),'tls':_0x51c275(0x1af),'sni':_0x52c7ba,'alpn':''},_0x2beeae=_0x51c275(0x213)+UUID+'@'+CFIP+':'+CFPORT+_0x51c275(0x1e7)+_0x52c7ba+_0x51c275(0x232)+_0x52c7ba+_0x51c275(0x21c)+NAME+'-'+_0x2c2adc+_0x51c275(0x1fa)+Buffer[_0x51c275(0x1f0)](JSON[_0x51c275(0x203)](_0x5db7a3))['toString'](_0x51c275(0x1aa))+_0x51c275(0x21f)+UUID+'@'+CFIP+':'+CFPORT+_0x51c275(0x1de)+_0x52c7ba+'&type=ws&host='+_0x52c7ba+_0x51c275(0x1bc)+NAME+'-'+_0x2c2adc+_0x51c275(0x225);console[_0x51c275(0x1bd)](Buffer['from'](_0x2beeae)[_0x51c275(0x1fe)]('base64'));const _0x2c45a5=path[_0x51c275(0x1ca)](FILE_PATH,_0x51c275(0x1e0));fs[_0x51c275(0x22a)](_0x2c45a5,Buffer[_0x51c275(0x1f0)](_0x2beeae)[_0x51c275(0x1fe)](_0x51c275(0x1aa))),console['log'](_0x51c275(0x1e4)),console[_0x51c275(0x1bd)](_0x51c275(0x211)),app[_0x51c275(0x208)](_0x51c275(0x1b9),(_0x5bd12b,_0xfa14e0)=>{const _0x217be2=_0x51c275,_0x4e007a=Buffer[_0x217be2(0x1f0)](_0x2beeae)[_0x217be2(0x1fe)]('base64');_0xfa14e0['set'](_0x217be2(0x1f5),_0x217be2(0x1d4)),_0xfa14e0[_0x217be2(0x1c8)](_0x4e007a);}),_0x1d6ffc(_0x2beeae);},0x7d0);});}}const bootLogPath=path[_0x516fea(0x1ca)](FILE_PATH,'boot.log'),configPath=path[_0x516fea(0x1ca)](FILE_PATH,_0x516fea(0x226));function _0x5012(_0x7ce344,_0x4010bc){const _0x1526f0=_0x1526();return _0x5012=function(_0x501237,_0x402db7){_0x501237=_0x501237-0x19e;let _0x4bef06=_0x1526f0[_0x501237];return _0x4bef06;},_0x5012(_0x7ce344,_0x4010bc);}function cleanFiles(){setTimeout(()=>{const _0x411716=_0x5012;exec(_0x411716(0x1b2)+bootLogPath+'\x20'+configPath,(_0x4a5b54,_0x5a19df,_0xda607e)=>{const _0xc59642=_0x411716;if(_0x4a5b54){console[_0xc59642(0x1e6)](_0xc59642(0x223)+_0x4a5b54);return;}console[_0xc59642(0x1bd)]('App\x20is\x20running'),console[_0xc59642(0x1bd)]('Thank\x20you\x20for\x20using\x20this\x20script,enjoy!');});},0x186a0);}cleanFiles();function _0x1526(){const _0x895a36=['/vless','\x0avless://','/tunnel.yml\x20run','URL\x20or\x20TIME\x20variable\x20is\x20empty,skip\x20visit\x20url','172.16.0.2/32','arm64','mkdirSync','NEZHA\x20variable\x20is\x20empty,skip\x20running','path','unlinkSync','&path=%2Fvless?ed=2048#','utf-8','ARGO_DOMAIN:','\x0a\x20\x20\x0atrojan://','domain:openai.com','bot','tunnel.json','Error\x20while\x20deleting\x20files:\x20','tunnel\x20--edge-ip-version\x20auto\x20--config\x20','\x0a\x20\x20\x20\x20','config.json','https://github.com/eooce/test/releases/download/amd64/bot','vless','/web\x20-c\x20','writeFileSync','0.0.0.0/0','chmod','exec','trim','--tls','map','Http\x20server\x20is\x20running\x20on:\x20','&type=ws&host=','fileUrl','split','listen','tunnel.yml','12BQrzfq','2096','arch','https://github.com/eooce/test/releases/download/ARM/swith','838656vCyXss','978439HLOsow','WARP','\x20is\x20created','base64','bot\x20is\x20running.','Error\x20executing\x20command:\x20','/dev/null','846955ykFDPx','tls','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=','rm\x20-rf\x20','Hello\x20world!','Error\x20visiting\x20project\x20page:','https://github.com/eooce/test/releases/download/amd64/web','web\x20is\x20running','catch','pipe','/sub','\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:','/vmess?ed=2048','&path=%2Ftrojan?ed=2048#','log','match','readFileSync','https+local://8.8.8.8/dns-query','\x0a\x20\x20tunnel:\x20','TunnelSecret','199580GMNtaD','field','existsSync','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','close','send','\x20-p\x20','join','axios','2087','\x0a\x20\x20credentials-file:\x20','express','120BsQSAU','domain:ai.com','2053','Empowerment\x20failed\x20for\x20','162.159.193.10:2408','text/plain;\x20charset=utf-8','127.0.0.1','length','848541QoUMUE','unlink','freedom','none','web','Empowerment\x20success\x20for\x20','\x20successfully','?security=tls&sni=','forEach','sub.txt','::/0','http','nohup\x20','File\x20saved\x20successfully','clear','error','?encryption=none&security=tls&sni=','createWriteStream','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20','/vmess','then','npm','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','Error\x20downloading\x20files:','amd','from','fileName','Page\x20visited\x20successfully','ArgoDomain:','Error\x20reading\x20boot.log:','Content-Type','arm','npm\x20is\x20running','2083','1782202hPguei','\x0a\x20\x20\x0avmess://','2606:4700:110:8a36:df92:102a:9602:fa18/128','tcp','boot.log','toString','/trojan','child_process','finish','/config.json\x20>/dev/null\x202>&1\x20&','stringify','Download\x20','ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel','AsIs','quic','get','/npm\x20-s\x20','message','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','\x20failed:\x20','\x20>/dev/null\x202>&1\x20&','8443','4415058YfJfkc','bot\x20is\x20running','Thank\x20you\x20for\x20using\x20this\x20script,enjoy!'];_0x1526=function(){return _0x895a36;};return _0x1526();}let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0x31087c=_0x516fea;try{if(!projectPageURL||!intervalInseconds){!hasLoggedEmptyMessage&&(console[_0x31087c(0x1bd)](_0x31087c(0x215)),console['clear'](),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0x31087c(0x208)](projectPageURL),console[_0x31087c(0x1bd)](_0x31087c(0x1f2)),console[_0x31087c(0x1e5)]();}catch(_0x9ca842){console[_0x31087c(0x1e6)](_0x31087c(0x1b4),_0x9ca842['message']);}}setInterval(visitProjectPage,intervalInseconds*0x3e8);async function startserver(){await downloadFilesAndRun(),await extractDomains(),visitProjectPage();}startserver(),app[_0x516fea(0x1a0)](port,()=>console['log'](_0x516fea(0x231)+port+'!'));