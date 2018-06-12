var dat='',g0='',g1='',g2='',g3='',g4='',g5=''; 
                      



function basestr() {
  
//    var path=require('path');            
    var fs = require('fs'); 
    var xltick =process.hrtime(); 
    var xltim = new Date();
    var xltima = new Date();
    var guidstore=[];    
    var x=this;                                                                            
//    var btoa = require('btoa');                  
//    var atob = require('atob');                                                                         

    basestr.prototype.os=require('os');                    
    basestr.prototype.funcno=0;
    basestr.prototype.funcresult='';
    basestr.prototype.syncset=0;                    
    basestr.prototype.syncstart=0;
    basestr.prototype.xdecrypt = function (ss,ky) { 
     var  i,result,sa='';
      if(ky==4321) return(ss);
      result=ss; //alert(ss);
      for(i=1;i<=ss.length;i++) { //alert('>>'+(ss.charCodeAt(i)^(ky >>> 8)));
     //  sa+=fc.chr(ss.charCodeAt(i)^(ky >>> 8)); //alert('>>'+sa+'<');
     //  ky= (ss.charCodeAt(i)+ky) * 52845 + 22719; 
       sa+=fc.chrb(fc.gb(ss,i)^(ky >> 8)); //alert('>>'+sa+'<');
       ky= (fc.gb(ss,i)+ky) * 52845 + 22719; 
      } 
    return(sa); 
    }
    basestr.prototype.xencrypt = function (ss,ky) { 
     var  i,result,sa='';
      if(ky==4321) return(ss);
      result=ss; 
      for(i=1;i<=ss.length;i++) { 
       sa+=fc.chrb(fc.gb(ss,i)^(ky >> 8)); 
       ky= (fc.gb(sa,i)+ky) * 52845 + 22719; 
      } 
    return(sa); 
    }



    basestr.prototype.syncdate = function (n) { 
     var sa = new Date(); //fb.log(n+'<<');
     if(n=='1') { this.syncset=1; this.syncstart=Number(sa)+2000;  return('ok'); }
     if(n=='2') { this.syncset=0; return('ok'); }
     if(n=='0') {
      if(this.syncset==0) { return('ok'); }
      else {  //fb.log(Number(sa)+':'+this.syncstart+':'+(this.syncstart-Number(sa))+':'+fb.baddressip());
       return((this.syncstart-Number(sa))+'');               
//      return (sa.getFullYear()+'-'+this.tadj(sa.getMonth() + 1)+'-'+this.tadj(sa.getDate())+' '+this.tadj(sa.getHours())+':'+this.tadj(sa.getMinutes())+':'+this.tadj(sa.getSeconds())+ '.' + this.right('000' + sa.getMilliseconds(), 3)      ); 
      }
     }
    };
    basestr.prototype.x64s = function (sarg) {  var buffer;  if(sarg instanceof Buffer) { buffer=sarg; } else {  buffer=new Buffer(sarg.toString(),'binary');  }     return buffer.toString('base64');    };
    basestr.prototype.xs64 = function (sarg) {     return new Buffer(sarg,'base64').toString('binary');    };
    basestr.prototype.xts = function (sarg) {  var buffer;  if(sarg instanceof Buffer) { buffer=sarg; } else {  buffer=new Buffer(sarg.toString(),'binary');  }     return buffer.toString('base64');    };
    basestr.prototype.xst = function (sarg) {     return new Buffer(sarg,'base64').toString('binary');    };
    basestr.prototype.evalrun = function (ss, sn) { if(typeof(sn)=='string') { sn='"'+sn+'"'; } if(sn===undefined) sn='';  return(eval('('+ss+')('+sn+')'));     };
    basestr.prototype.sleep = function(timeout) {  setTimeout(function(){ jxcore.utils.continue(); }, timeout);  jxcore.utils.pause(); };
basestr.prototype.guidjsl = function () {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });         
}
basestr.prototype.guidjs = function () {  return(this.ucase(this.guidjsl())); }
basestr.prototype.guidadd = function () {  var sa=this.guidjs(); guidstore.push(sa); return(sa); }
basestr.prototype.guidsec = function (ss) {  var n=guidstore.indexOf(ss); if (n > -1) return(true); else return(false); }
basestr.prototype.guiddel = function (ss) {  var n=guidstore.indexOf(ss); if (n > -1)  guidstore.splice(n, 1);  }
basestr.prototype.guidlen = function (ss) {  return(guidstore.length); }

//    basestr.prototype.xbtoa = function (sarg) { 
//        console.log('hii');
//        console.log('hii1');
//         try {
//         //var sa = (jxcore.utils.smartRequire())('btoa');
//         //sa('btoa');
//         } catch(e) {  }
//         console.log('hii3');
//
////      return(btoa(sarg));
//      //return('hello'); 
//    };
//    basestr.prototype.xatob = function (sarg) { return (atob(sarg)); };

    basestr.prototype.fileread = function (ss) {    var sa = ''; try { sa = fs.readFileSync(ss, 'binary'); } catch (e) { sa = ''; } return (sa);   }
    basestr.prototype.filewrite = function (sfn,sdat) { fs.writeFileSync(sfn,sdat, 'binary'); }
    basestr.prototype.fexist = function(ss) {    var sa =false; try { sa=fs.existsSync(ss); } catch (e) { sa =false; } return (sa);   }

    
    
    basestr.prototype.xbs = function(ss) { if(typeof(ss)=='string') return(new Buffer(ss,'binary')); else return(new Buffer(ss)); }

  basestr.prototype.ascb=function(ss) {  var cc=new Buffer(ss,'binary'); return(cc[0]); }
  basestr.prototype.ascw=function(ss) {  var cc=new Buffer(ss,'binary'); return(cc.readUInt16LE(0)); }
  basestr.prototype.ascd=function(ss) {  var cc=new Buffer(ss,'binary'); return(cc.readUInt32LE(0)); }
  basestr.prototype.ascdd=function(ss) {  var cc=new Buffer(ss,'binary'); return((4294967296*cc.readUInt32LE(4))+cc.readUInt32LE(0)); }
  basestr.prototype.gb=function(ss,p) { p--; var cc=new Buffer(ss.substr(p,1),'binary'); return(cc[0]); }
  basestr.prototype.gw=function(ss,p) { p--; var cc=new Buffer(ss.substr(p,2),'binary'); return(cc.readUInt16LE(0)); }
  basestr.prototype.gd=function(ss,p) { p--; var cc=new Buffer(ss.substr(p,4),'binary'); return(cc.readUInt32LE(0)); }
  basestr.prototype.gt=function(ss,p) {       var cc=new Buffer(ss.substr((p-1)*4,4),'binary'); return(cc.readUInt32LE(0)); }
  basestr.prototype.gdd=function(ss,p) {p--;  var cc=new Buffer(ss.substr(p,8),'binary'); return((4294967296*cc.readUInt32LE(4))+cc.readUInt32LE(0)); }
  //***************** ?????? ********************************
  basestr.prototype.qb=function(ss,p,n) { p--;var cc=new Buffer(ss,'binary'); cc[p]=n; return(cc.toString('binary')); }
  basestr.prototype.qw=function(ss,p,n) { p--;var cc=new Buffer(ss,'binary'); cc.writeUInt16LE(n,p); return(cc.toString('binary')); }
  basestr.prototype.qd=function(ss,p,n) { p--;var cc=new Buffer(ss,'binary'); cc.writeUInt32LE(n,p); return(cc.toString('binary')); }
  basestr.prototype.qt=function(ss,p,n) { p--; var cc=new Buffer(ss,'binary'); cc.writeUInt32LE(n,p*4); return(cc.toString('binary')); }
  basestr.prototype.qdd=function(ss,p,n) { p--; var cc=new Buffer(ss,'binary');
       if(n<4294967296) { cc.writeUInt32LE(n,p); cc.writeUInt32LE(0,p+4);       }
       else { 
         var MAX_UINT32 = 0x00000000FFFFFFFF;
         var high = 0;
         var signbit= n & 0xFFFFFFFF;
         var low=signbit < 0 ? (n & 0x7FFFFFFF) + 0x80000000 : signbit;
         if (n>MAX_UINT32) {   high = (n - low) / (MAX_UINT32 + 1);     } 
         cc.writeUInt32LE(low,p); 
         cc.writeUInt32LE(high,p+4); 
       }
      return(cc.toString('binary')); 
  }

//funcstr.prototype.gb = function (ss, n) {return (ss[n]); };
//funcstr.prototype.gw = function (ss, n) {return (ss[n]+(ss[n+1] << 8)); };
//funcstr.prototype.gd = function (ss, n) {return (ss[n]+(ss[n+1] << 8)+(ss[n+2] << 16)+(ss[n+3] << 24)); };
//funcstr.prototype.gdd = function (ss, n) { return (ss[n]+(ss[n+1] << 8)+(ss[n+2] << 16)+(ss[n+3] << 24)+(ss[n+4]*4294967296)+(ss[n+5]*1099511627776)); }; 
//funcstr.prototype.qb = function (ss, n,m) {ss[n]=m; };
//funcstr.prototype.qw = function (ss, n,m) { ss[n]=m & 0x00ff; ss[n+1]=m >>> 8; };
//funcstr.prototype.qd = function (ss, n,m) { ss[n]=m & 0x000000ff;  ss[n+1]=((m & 0x0000ff00) >>> 8); ss[n+2]=((m & 0x00ff0000) >>> 16); ss[n+3]=((m & 0xff000000) >>> 24); };
//funcstr.prototype.qdd = function (ss, n,m) {
// ss[n]=m & 0x000000ff;  ss[n+1]=((m & 0x0000ff00) >>> 8); ss[n+2]=((m & 0x00ff0000) >>> 16); ss[n+3]=((m & 0xff000000) >>> 24);  ss[n+4]=((m & 0x00000000) >>> 32); 
//};
  


  
  
  basestr.prototype.chrb=function(n) { var cc=new Buffer(1); cc[0]=n; return(cc.toString('binary')); }
  basestr.prototype.chrw=function(n) { var cc=new Buffer(2); cc.writeUInt16LE(n,0); return(cc.toString('binary')); }
  basestr.prototype.chrd=function(n) { var cc=new Buffer(4); cc.writeUInt32LE(n,0); return(cc.toString('binary')); }
  basestr.prototype.chrdd=function(n) { var cc=new Buffer(8);
       if(n<4294967296) { cc.writeUInt32LE(n,0); cc.writeUInt32LE(0,4);       }
       else { 
         var MAX_UINT32 = 0x00000000FFFFFFFF;
         var high = 0;
         var signbit= n & 0xFFFFFFFF;
         var low=signbit < 0 ? (n & 0x7FFFFFFF) + 0x80000000 : signbit;
         if (n>MAX_UINT32) {   high = (n - low) / (MAX_UINT32 + 1);     } 
         //low=n&0xFFFFFFFF;
         //high=(n-low)/4294967296;
         cc.writeUInt32LE(low,0); 
         cc.writeUInt32LE(high,4);  
       }
      return(cc.toString('binary')); 
  }


//
//
  

    

    basestr.prototype.log=function(ss) { console.log(ss); }
    basestr.prototype.xis = function (ss) { return (parseInt(ss)); };
    basestr.prototype.tadj = function (ss) { return (this.right('00' + ss, 2)); };  
    basestr.prototype.dateraw = function () { var sa = new Date(); return (sa.getFullYear()+this.tadj(sa.getMonth() + 1)+this.tadj(sa.getDate())+this.tadj(sa.getHours())+this.tadj(sa.getMinutes())+this.tadj(sa.getSeconds())); };
    basestr.prototype.daterawmil = function () { var sa = new Date(); return (sa.getFullYear()+this.tadj(sa.getMonth() + 1)+this.tadj(sa.getDate())+this.tadj(sa.getHours())+this.tadj(sa.getMinutes())+this.tadj(sa.getSeconds())+this.right('000' + sa.getMilliseconds(), 3)); };
    basestr.prototype.datefull = function () { var sa = new Date(); return (sa.getFullYear()+'.'+this.tadj(sa.getMonth() + 1)+'.'+this.tadj(sa.getDate())+' '+this.tadj(sa.getHours())+':'+this.tadj(sa.getMinutes())+':'+this.tadj(sa.getSeconds())+ '.' + this.right('000' + sa.getMilliseconds(), 3)      ); };
    basestr.prototype.datelong = function () { var sa = new Date(); return (sa.getFullYear() + '-' + this.tadj(sa.getMonth() + 1) + '-' + this.tadj(sa.getDate())    +' '+this.tadj(sa.getHours()) + ':' + this.tadj(sa.getMinutes()) + ':' + this.tadj(sa.getSeconds())     ); };

    basestr.prototype.mid = function (ss, n, m) { return (ss.substr(n - 1, m)); };
    basestr.prototype.left = function (ss, m) { return (ss.substr(0, m)); };
    basestr.prototype.right = function (ss, m) { return (ss.substr(ss.length - m, m)); };
    basestr.prototype.lcase = function (ss) { return (ss.toLowerCase()); };
    basestr.prototype.ucase = function (ss) { return (ss.toUpperCase()); };
    basestr.prototype.xs = function (ss) { return (ss+''); };
    basestr.prototype.len = function (ss) { return (ss.length); };  
    basestr.prototype.strout = function (ss, ss1) { var sa = ss; for (; ; ) { if (this.xinstr(1, sa, ss1) > 0) { sa = sa.replace(ss1, '') } else { break; } } return (sa) };
    basestr.prototype.strrep=function(ss,ssearch,sreplace) {   return(ss.split(ssearch).join(sreplace)); }
    basestr.prototype.xinstr = function (n, ss, ss1) { return (ss.indexOf(ss1, n - 1) + 1) }
    basestr.prototype.instr = function (n, ss, ss1) { return (ss.toLowerCase().indexOf(ss1.toLowerCase(), n - 1) + 1) };
    basestr.prototype.strrepp = function (ss, ss1, ss2) {
     var n = 0, m = 0, sa = ''; 
     for (;;) {
       n = ss.indexOf(ss1, m); 
       if (n < 0) { sa += ss.substr(m, ss.length - m); break; } 
       sa += ss.substring(m, n) + ss2; 
       m = n + ss1.length; 
      } 
      return (sa); 
    }

    basestr.prototype.xls = function (ss) { return (Number(ss)); };
    basestr.prototype.xds = function (ss) { return (parseFloat(ss)); };
    basestr.prototype.xsb = function(cc) { return(cc.toString('binary')); }    
    basestr.prototype.xxbs = function (ss) {  var bb=new Uint8Array(ss.length);    for(var i=0;i<ss.length;i++) {  bb[i]=ss.charCodeAt(i);  }  return(bb); };
    basestr.prototype.xxsbx = function (bb) {  return String.fromCharCode.apply(null, bb); }; //String
    basestr.prototype.xxsb = function (bb) {  var sa='';   for (var i=0;i<bb.length;i++) { sa+=String.fromCharCode(bb[i]); }  return(sa); }

    basestr.prototype.xsj = function (obj) {   return JSON.stringify(obj,function(key, value) { return (typeof value === 'function' ) ? value.toString() : value;  });  };
    basestr.prototype.xjs = function (str) {   return JSON.parse(str,function(key, value){ if(typeof value != 'string') return value; return (value.substring(0,8) == 'function') ? eval('('+value+')') : value; }); };
  
    basestr.prototype.xl = function (s,ln) { if(s.length>=ln) { return(this.mid(s,1,ln)); }  return(s+this.strdup(' ',ln-s.length));   }
    basestr.prototype.move = function (ss,ofs,sa) {   var sc=new Str(ss);  sc.qs(ofs,sa); sc.st(); return(sc.s);    }
    basestr.prototype.xcst = function (ss,ln,n) { //return(ss);
      var sa=this.strout(ss,' ');   var sb=this.xitemget(sa,1,'.');  var sc=this.xitemget(sa,2,'.');  sc=sb+'.'+this.left(sc+'0000',n);
      if(sc.length>ln) { return(this.left(sc,ln)) } else {    return(this.right(this.strdup(' ',ln)+sc,ln)); }
    }
    basestr.prototype.xleft = function (ss) { if (ss.length > 0) { return (ss.substring(0, ss.length - 1)); } else { return (''); } };
    basestr.prototype.xright = function (ss) { if (ss.length > 0) { return (ss.substr(1, ss.length - 1)); } else { return (''); } };
    basestr.prototype.rightback = function (ss, n) { if (ss.length > 0) { return (ss.substr(n - 1, ss.length - n + 1)); } else { return (''); } };
    basestr.prototype.itemcount = function (ss) { var sxa = ss.split(','); return (sxa.length); };
    basestr.prototype.xitemcount = function (ss, ssa) { var sxa = ss.split(ssa); return (sxa.length); };
    basestr.prototype.itemget = function (ss, n) { var sxa = ss.split(','); if (n > sxa.length) return (""); else return (sxa[n - 1]); };
    basestr.prototype.xitemget = function (ss, n, ssa) { var sxa = ss.split(ssa); if (n > sxa.length) return (""); else return (sxa[n - 1]); };
    basestr.prototype.itemgetback = function (ss, n) { var sxa = ss.split(','); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };
    basestr.prototype.xitemgetback = function (ss, n, ssa) { var sxa = ss.split(ssa); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };
    basestr.prototype.xitemgetfirst = function (ss, n, ssa) { var sxa = ss.split(ssa); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };
    basestr.prototype.itemrep = function (ss, ssb, n) { var sxa = ss.split(','); sxa[n - 1] = ssb; return (sxa.join(',')); };
    basestr.prototype.xitemrep = function (ss, ssb, n, ssa) { var sxa = ss.split(ssa); sxa[n - 1] = ssb; return (sxa.join(ssa)); };
    basestr.prototype.itemdel = function (ss, n) { var sxa = ss.split(','); sxa.splice(n - 1, 1); return (sxa.join(',')); };
    basestr.prototype.xitemdel = function (ss, n, ssa) { var sxa = ss.split(ssa); sxa.splice(n - 1, 1); return (sxa.join(ssa)); };
    basestr.prototype.itemins = function (ss, sbb, n) { var sxa = ss.split(','); sxa.splice(n - 1, 0, sbb); return (sxa.join(',')); };
    basestr.prototype.xitemins = function (ss, sbb, n, ssa) { var sxa = ss.split(ssa); sxa.splice(n - 1, 0, sbb); return (sxa.join(ssa)); };
    basestr.prototype.itemlast = function (ss, n) { var sxb, sxa = ss.split(','); sxb = sxa.slice(n, sxa.length); return (sxb.join(',')); };
    basestr.prototype.xitemlast = function (ss, n, ssa) { var sxb, sxa = ss.split(ssa); sxb = sxa.slice(n, sxa.length); return (sxb.join(ssa)); };
    basestr.prototype.itemfirst = function (ss, n) { var sxb, sxa = ss.split(','); sxb = sxa.slice(0, sxa.length - n); return (sxb.join(',')); };
    basestr.prototype.xitemfirst = function (ss, n, ssa) { var sxb, sxa = ss.split(ssa); sxb = sxa.slice(0, sxa.length - n); return (sxb.join(ssa)); };
    basestr.prototype.itemnum = function (ss, sa) { var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(','); for (i = 0; i < s1.length; i++) { if (s2 == s1[i]) { j = i + 1; break; } }; return (j); };
    basestr.prototype.xitemnum = function (ss, sa, sb) { var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(sb); for (i = 0; i < s1.length; i++) { if (s2 == s1[i]) { j = i + 1; break; } }; return (j); };
    basestr.prototype.itemnumin = function (ss, sa, sb) {  var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(',');  for (i = 0; i < s1.length; i++) { if (this.instr(1,s1[i],s2)>0) { j = i + 1; break; }  }; return (j);  };
    basestr.prototype.xitemnumin = function (ss, sa, sb) {  var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(sb);  for (i = 0; i < s1.length; i++) { if (this.instr(1,s1[i],s2)>0) { j = i + 1; break; }  }; return (j);  };
    
    basestr.prototype.tget = function (ss, n, ssa) { var sxa,ln=arguments.length;  if(ln!=3) { ssa=','; } sxa = ss.split(ssa); if(n>sxa.length) return(''); else return(sxa[n-1]); }
    basestr.prototype.tcount = function (ss, ssa) { var sxa,ln=arguments.length;  if(ln!=2) { ssa=','; }  sxa = ss.split(ssa); return (sxa.length); };
    basestr.prototype.trep = function (ss, ssb, n, ssa) { var sxa,ln=arguments.length;  if(ln!=4) { ssa=','; }  sxa = ss.split(ssa); sxa[n - 1] = ssb; return (sxa.join(ssa)); };
    basestr.prototype.tdel = function (ss, n, ssa) { var sxa,ln=arguments.length;  if(ln!=3) { ssa=','; }  sxa = ss.split(ssa); sxa.splice(n - 1, 1); return (sxa.join(ssa)); };
    basestr.prototype.tins = function (ss, sbb, n, ssa) { var sxa,ln=arguments.length;  if(ln!=4) { ssa=','; }  sxa = ss.split(ssa); sxa.splice(n - 1, 0, sbb); return (sxa.join(ssa)); };
    basestr.prototype.tlast = function (ss, n, ssa) { var sxb,sxa,ln=arguments.length;  if(ln!=3) { ssa=','; }  sxa = ss.split(ssa); sxb = sxa.slice(n, sxa.length); return (sxb.join(ssa)); };
    basestr.prototype.tfirst = function (ss, n, ssa) { var sxb,sxa,ln=arguments.length;  if(ln!=3) { ssa=','; }  sxa = ss.split(ssa); sxb = sxa.slice(0, sxa.length - n); return (sxb.join(ssa)); };
    basestr.prototype.tnum = function (ss, sa, sb) { var j = 0, i,s1,s2,ln=arguments.length;  if(ln!=3) { sb=','; }  s2 = sa.toLowerCase(); s1 = ss.toLowerCase().split(sb); for (i = 0; i < s1.length; i++) { if (s2 == s1[i]) { j = i + 1; break; } }; return (j); };
    basestr.prototype.tnumin = function (ss, sa, sb) {  var j = 0, i,s1,s2,ln=arguments.length;  if(ln!=3) { sb=','; }  s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(sb);  for (i = 0; i < s1.length; i++) { if (this.instr(1,s1[i],s2)>0) { j = i + 1; break; }  }; return (j);  };
    basestr.prototype.tgetback = function (ss, n, ssa) { var sxa,ln=arguments.length;  if(ln!=3) { ssa=','; } sxa = ss.split(ssa); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };

    
    basestr.prototype.trim = function (ss) { return (ss.trim()); };
    basestr.prototype.asc = function (ss) { return(ss.charCodeAt(0)); } // return (ss.fromCharCode(0)); };
    basestr.prototype.dateswap0 = function (s) {  if(this.trim(s)=='') { return('        '); }  
      var sa=new Str(s);  if(sa.cc[0]>=128) { sa.cc[0]=sa.cc[0]-128; }  sa.st(); 
      s=sa.s;
      return(this.right(s,2)+'.'+this.mid(s,4,2)+'.'+this.left(s,2)); 
    }
basestr.prototype.dateswap1 = function (s) {
var i,result,sa;
  if(this.trim(s)=='') { return('        '); }
  result=this.right(s,2)+'.'+this.mid(s,4,2)+'.'+this.left(s,2);
  i=x.xis(this.left(result,2));
  if((i>=0)&&(i<=50)) {   sa=new Str(result); sa.cc[0]=sa.cc[0]+128; sa.st();  return(sa.s);  }
  return(result);
}


  basestr.prototype.stick = function () {      xltick=process.hrtime(); };
  basestr.prototype.etick = function () {  var diff=process.hrtime(xltick); return(((diff[0]*1e9+diff[1])/1e6)+''); };
    basestr.prototype.timer = function () { xltim = new Date(); };
    basestr.prototype.timera = function () { xltima = new Date(); };
    basestr.prototype.etimer = function () { var curDate = new Date(); return (curDate - xltim); };
    basestr.prototype.etimera = function () { var curDate = new Date(); return (curDate - xltima); };
    basestr.prototype.timeout = function (ss, ms) { setTimeout(ss, ms); };
  
  basestr.prototype.buftostr=function(ss) {  return(ss.toString('binary')); }

  
  
  basestr.prototype.hex=function(ss) { var hex = '', sa = ''; for (var i = 0; i < ss.length; i++) { sa = ss.charCodeAt(i).toString(16); if (sa.length == 1) { sa = '0' + sa; }; hex += sa; }; return hex; }
  basestr.prototype.right =function (ss, m) { return (ss.substr(ss.length - m, m)); };
  basestr.prototype.strdup = function (ss, n) { var sa = ""; for (var i = 0; i < n; i++) { sa += ss; } return (sa) }  
  basestr.prototype.space = function (n) { var sa = ""; for (var i = 0; i < n; i++) { sa +=' '; } return (sa) }  
  basestr.prototype.chr = function (n) { return (String.fromCharCode(n)); };
  basestr.prototype.hexbincc=function(ss) { return(this.hexbin(ss.toString('binary'))); }
  basestr.prototype.hexbin=function(ss) { 
   var hex = '', sa = '',sb='',sc='',sd='',se='',j,k=0,l,n=16,m=16; n=m;j=0;
   for (var i = 0; i < ss.length; i++) { 
    sa=ss.charCodeAt(i).toString(16); 
    if (sa.length == 1) { sa = '0' + sa; };                                                               
    hex += sa+' '; 
    sb=ss[i]; //x.log(fc.asc(sb));
    if((fc.asc(sb)<32)||(fc.asc(sb)>126)) { sb='.'; }
    sc+=sb;
    j++; if(j>=n) {  sd+=hex+sc; hex=''; sc=''; j=0; k++; if(k==3) { n=m+1; } else { n=m; } 
       if(k==4) { k=0; se='----'; } else {se=''; } sd+=se+'\n'; 
    
    }
   }; 
   sd+=hex+sc+'\n';
   return sd; 
   }
}


function Str(sinit) {
    var x=this;
    function log(ss) { console.log(ss); }
//**************************????**************************
    Str.prototype.sl=function() { return(Number(this.s)); }
//**************************????**************************
    Str.prototype.s = '';
    Str.prototype.cc = new Buffer(0);
    Str.prototype.get = function () {  return(this.s); }   
    Str.prototype.asc = function (ss,n) { return (ss.charCodeAt(n)); };
    Str.prototype.chr = function (n) { return (String.fromCharCode(n)); };
//********************************************************************
    Str.prototype.set = function (ss) { this.s=ss; return(this); } 
    Str.prototype.setch= function(ss) { this.s=ss;   this.cc=new Buffer(this.s,'binary');   return(this); }
    Str.prototype.cat= function(ss) { this.s+=ss; return(this); }
    Str.prototype.catb= function(ss) { this.s=ss+this.s; return(this); }
    Str.prototype.len= function() { return(this.s.length); }
    Str.prototype.left=function(i) {  var l=this.s.length;  if(i>l) { i=l; }   return(this.s.substr(0,i));      }
    Str.prototype.sb=function() {if(this.s.charAt(0)=='1') return(true); else return(false); }      
    Str.prototype.si=function() { if(this.s.length==0) { return(0); } else { var i=parseInt(this.s); if(isNaN(i)===true) return(0); else return(i); } }
    Str.prototype.itemget=function(n,c) {  return(this.s.split(c)[n-1]);    }
    Str.prototype.mid=function(i,ln)   {                
          var l=this.s.length;
          if(i>l) { i=l; ln=0;} else {   if((i+ln-1)>l) { ln=l-i+1; }    } if(i<1) {i=1;}  
          i--; return(this.s.substring(i,i+ln)); 
      }
    Str.prototype.midc=function(i,ln)   { 
          var l=this.cc.length;
          if(i>l) { i=l; ln=0;} else {   if((i+ln-1)>l) { ln=l-i+1; }    } if(i<1) {i=1;}  
          i--; if(ln==0) return(""); 
          var ca=new Buffer(ln);
          for(var j=0;j<ln;j++) { ca[j]=this.cc[i+j]; }
          //this.cc.copy(ca,0,i,ln);  //buf2,tofs,sfrom,sto);
          return(ca.toString('binary'));
    }
    Str.prototype.right=function(i) {  
          var l=this.s.length;        if(i>l) { i=l; }
          return(this.s.substring(l-i,l));
    }
    Str.prototype.instr=function(i,sa) {
            var l=this.s.length;       if(i>l) { return(0); }
            i--; return(this.s.indexOf(sa,i)+1);   
    }
     Str.prototype.cmpc=function(sa) {
         var i=this.s.localeCompare(sa);
          if(i>0) { i=(-1); } else if(i<0) {i=1; }
          return(i);
     }
     Str.prototype.cmpn=function(sa) {
         var i=this.s.toLowerCase().localeCompare(sa.toLowerCase());
         if(i>0) { i=(-1); } else if(i<0) {i=1; }
         return(i);
       }
    Str.prototype.cmp=function(sa,p,l) { p--;
        var ss=this.cc.toString('binary',p,p+l);  
         var i=ss.toLowerCase().localeCompare(sa.toLowerCase());
         if(i>0) { i=(-1); } else if(i<0) {i=1; }
         return(i);
    }
    Str.prototype.trim=function() {     return(this.s.trim());   }
    Str.prototype.lcase=function() {   return(this.s.toLowerCase());   }
    Str.prototype.ucase=function() {    return(this.s.toUpperCase());    }
    Str.prototype.strreplace=function(ssearch,sreplace) {   return(this.s.split(ssearch).join(sreplace)); }
    Str.prototype.ch=function() { this.cc=new Buffer(this.s,'binary'); return(this);}
    Str.prototype.st=function() { this.s=this.cc.toString('binary'); return(this); } 
    Str.prototype.gb=function(p) { p--; return(this.cc[p]); }
    Str.prototype.gw=function(p) { p--; return(this.cc.readUInt16LE(p));  }
    Str.prototype.gd=function(p) { p--; return(this.cc.readUInt32LE(p));  }
    Str.prototype.gdd=function(p) { p--; return((4294967296*this.cc.readUInt32LE(p+4))+this.cc.readUInt32LE(p)); } //2^53=9007199254740992
    //************* put into char array ******************
    Str.prototype.qb=function(p,n) { p--;  this.cc[p]=n; return(this); }
    Str.prototype.qw=function(p,n) { p--; this.cc.writeUInt16LE(n,p);    return(this);     }
    Str.prototype.qd=function(p,n) { p--; this.cc.writeUInt32LE(n,p);     return(this);     }
    Str.prototype.qdd=function(p,n) { p--; 
       if(n<4294967296) { this.cc.writeUInt32LE(n,p); this.cc.writeUInt32LE(0,p+4);       }
       else { 
         var MAX_UINT32 = 0x00000000FFFFFFFF;
         var high = 0;
         var signbit= n & 0xFFFFFFFF;
         var low=signbit < 0 ? (n & 0x7FFFFFFF) + 0x80000000 : signbit;
         if (n>MAX_UINT32) {   high = (n - low) / (MAX_UINT32 + 1);     } 
         this.cc.writeUInt32LE(low,p); 
         this.cc.writeUInt32LE(high,p+4); 
       }
       return(this); 
      }
    Str.prototype.qs=function(p,ss) { p--;
        var ca=new Buffer(ss,'binary');
        for(var i=0;i<ca.length;i++) { this.cc[p+i]=ca[i]; }
        return(this);
    }
    Str.prototype.qspc=function(p,ca,ofs,ln) { p--; ofs--; //cc dest p=dest ca=source ofs=source
      for(var i=0;i<ln;i++) { this.cc[p+i]=ca[ofs+i]; }
      return(this);
    }
    Str.prototype.qsp=function(p,ofs,ln) { p--; ofs--; // p=dest ofs=source
         if(p<ofs) {
          for(var i=0;i<ln;i++) { this.cc[p+i]=this.cc[ofs+i]; }
         } else {
          for(var i=ln-1;i>=0;i--) { this.cc[p+i]=this.cc[ofs+i]; }
         }
         return(this);
    }
    Str.prototype.qset=function(p,ln,ba) { p--; 
      for(var i=0;i<ln;i++) { this.cc[p+i]=ba; }
      return(this);
    }
    Str.prototype.test=function() {  
        //var sa=chrdd(0x000101000000000);
        //log('>'+sa+'<'+ascdd(sa)+':'+hex(sa));
        return;
        x.setch('1234567890ABCDEFGCDESFRAAAAAAAAAAAAAAAAA'); 
        //var xx=new Str();
        x.qs(2,'BBBBBA');
//        x.cc[0]=0; 
//        x.cc[1]=0; 
//        x.cc[2]=0; 
//        x.cc[3]=0; 
//        x.cc[4]=0; 
//        x.cc[5]=0; 
//        x.cc[6]=0; 
//        x.cc[7]=2; 
//        x.cc[8]=0;  
//        x.cc[9]=0;  
        //x.cc[10]=0; 
         //x.qset(1,5,67);
         x.st();          log('>'+x.get()+'<');
         //x.qsp(3,1,10);
         x.st();          log('>'+x.get()+'<');
        //x.qdd(1,4294967295);
        //log('>>'+x.gdd(1));
        ///x.qdd(1,x.gdd(1))
        //log('>+'+x.gdd(1));
        
        //var sa=x.midc(1,20); 
//        x.setch('HELLOOneTwoOne');
//        log('>'+x.strreplace('t','B')+'<');
       // log('>'+x.instr(4,'DEX')+'<');
       // sa='ABCDE'+x.chr(255)+'FG';
        //log(x.get()+'>'+x.midc(1,20)+'<'+x.asc(sa,5)+':'+x.asc(this.s,5));
//        log(x.get()+':'+x.left(1)+':'+x.sl());
    }
    if(sinit===undefined) { this.s=''; this.cc=new Buffer(0);  } else { this.s=sinit; this.cc=new Buffer(this.s,'binary'); }
} 
function Files(sinit) {
    var fs = require('fs');
    var x=this;
    var sfilen="";
        
        Files.prototype.lpos=0;            
        Files.prototype.ln=0;
        Files.prototype.fx=0;
        Files.prototype.createopen=function(ss,sflag) { sfilen=ss; try {   this.fx=fs.openSync(ss,sflag,'0777');   return(true);  } catch (e) { return(false); }         }
        Files.prototype.open=function(ss) { this.lpos=0; if(!this.createopen(ss,'r+')) {  this.createopen(ss,'w+'); }}
        Files.prototype.close=function() {  try { fs.closeSync(this.fx);  } catch (e) {  }  return(this);} 
        Files.prototype.len=function() { try { var n=0;  var ca=fs.fstatSync(this.fx); n=ca.size; } catch (e) {  } return(n); }
        Files.prototype.getpos=function() {  return(this.lpos); }
        Files.prototype.fileread = function (ss) {  var sa = ''; try { sa = fs.readFileSync(ss, 'binary'); } catch (e) { sa = ''; } return (sa);        }
        Files.prototype.write=function(ca)    {  try { fs.writeSync(this.fx,new Buffer(ca,'binary'),0,ca.length); } catch (e) {  }  return(this);   }
        Files.prototype.pwrite=function(p,ca) {  try { fs.writeSync(this.fx,ca,0,ca.length,p); this.lpos=p+ca.length; } catch (e) {  }  return(this);   }
        Files.prototype.read=function(nn) {  var ca=new Buffer(nn);  fs.readSync(this.fx,ca,0,nn);  this.lpos+=ca.length; return(ca.toString('binary'));   } 
        Files.prototype.pread=function(p,nn) {  var ca=new Buffer(nn);  fs.readSync(this.fx,ca,0,nn,p); this.lpos=p+ca.length;   return(ca.toString('binary'));   } 
                                                                               
        Files.prototype.reads=function(nn) {  var ca=new Buffer(nn);  fs.readSync(this.fx,ca,0,nn);  this.lpos+=ca.length; return(ca.toString('binary'));   } 
        Files.prototype.preads=function(p,nn) {  var ca=new Buffer(nn);  fs.readSync(this.fx,ca,0,nn,p); this.lpos=p+ca.length;  return(ca.toString('binary'));   } 
        Files.prototype.readb=function(nn) {  var ca=new Buffer(nn);  fs.readSync(this.fx,ca,0,nn); this.lpos+=ca.length;  return(ca);   } 
        Files.prototype.preadb=function(p,nn) {  var ca=new Buffer(nn);  fs.readSync(this.fx,ca,0,nn,p);  this.lpos=p+ca.length; return(ca);   } 

        Files.prototype.writes=function(ca)    {  try { fs.writeSync(this.fx,new Buffer(ca,'binary'),0,ca.length); this.lpos+=ca.length;} catch (e) {  }  return(this);   }
        Files.prototype.pwrites=function(p,ca) {  try { fs.writeSync(this.fx,new Buffer(ca,'binary'),0,ca.length,p); this.lpos=p+ca.length;} catch (e) {  }  return(this);   }
        Files.prototype.writeb=function(ca)    {  try { fs.writeSync(this.fx,ca,0,ca.length); this.lpos+=ca.length;} catch (e) {  }  return(this);   }
        Files.prototype.pwriteb=function(p,ca) {  try { fs.writeSync(this.fx,ca,0,ca.length,p); this.lpos=p+ca.length;} catch (e) {  }  return(this);   }

        Files.prototype.log=function(ss) {  console.log(ss); }
        Files.prototype.test=function() {  
//          x.log(__dirname+'hello'+x.fileread('./data/hello2.txt'));
//          x.open('./data/hellog.txt');
//          x.log(x.len()+'<'+x.getpos());
//          x.write(new Buffer('1234567890'));
//          x.log(x.len()+'<'+x.getpos());
//          x.write(new Buffer('1234567890')); 
//          x.log(x.len()+'<'+x.getpos());
//          x.pwrite(50,new Buffer('ABCDE'));
//          x.log(x.len()+'<'+x.getpos());
//          x.pwrites(0,'ABCDEF123456');
//          x.pwrites(20,'1234567890');             
//          x.pwrites(30,'1234567890');
//          x.pwrites(40,'1234567890');
//          x.log(x.pread(0,10));
//          x.log(x.read(10));
//          x.log(x.read(10));
//          x.log(x.read(10));
//          x.close();
//          x.log('hier')
        }
          if(sinit===undefined) {   } else { this.open(sinit); }
} 



function Base(sinit) {
//        var x=new Base();
//        x.createfile('test01',20,7);     
//        x.open('test01'); x.close();
//        x.insert('ABC'+i,'>>>'+i);
//        sa=x.first();  for(;;) {  k++; sb=x.data();  sa=x.next(); if(sa=='') { break; } }  //x.last() x.prev();
//        key=x.findkey('ABC');
//        dat=x.findequ('ABC');
//        dat=x.find('ABC'); //equ or next

    var x=this;
     var ksecpre=new Buffer([0xFF,0xFE,0xFD,0xFC,0xFD,0xFE,0xFF]); //#255#254#253#252#253#254#255;
     var  ksecpost=new Buffer([0xFD,0xFC,0xFD,0xFE,0xFF]);//#253#252#253#254#255;
     var ksecpostdel=new Buffer([ 0x1,0x2,0x3,0x4,0x5]); //#1#2#3#4#5;                                         
     var kfld=String.fromCharCode(1); 
     var xkeyh=14,xnodem=1,xhdr=1;
     var fc=new basestr();
     //var hd;
     //var buf;
     //var stk1=new Array(33); 
     //var stk2=new Array(33);
     //var tstk1=new Array(33); var tstk2=new Array(33);
//     var err;   
//     var bfind,bold;
//     var info=[],fnam=[]; 
     //var flds=0,ifnam=0,inumfiles;
  
  Base.prototype.buf=new Str();
  Base.prototype.buf1=new Str();
  Base.prototype.stk1=new Array(33);
  Base.prototype.stk2=new Array(33);
  Base.prototype.err=0;  //??
  Base.prototype.stkp=0;  //??
  Base.prototype.frec=0;  //??
  Base.prototype.bfind=0;  //??
  Base.prototype.keylen=0;  
  Base.prototype.xdata='./data/';  
  Base.prototype.nfull=0;  
  Base.prototype.node1=0;  
  Base.prototype.node2=0;  
  Base.prototype.cell=0;  
  Base.prototype.cellno=0;  
  Base.prototype.nodelen=0;  
  Base.prototype.hd=0;  
  Base.prototype.eof=false;
  Base.prototype.bof=false;
  Base.prototype.filen='';
  Base.prototype.field='';
  Base.prototype.index='';
  Base.prototype.snohd='';
  Base.prototype.rofs='';
  Base.prototype.rlen='';
  Base.prototype.rtyp='';
  Base.prototype.renc='';
  Base.prototype.rdec='';
  Base.prototype.rnam='';
  Base.prototype.rinx='';
  Base.prototype.rinxx='';
  Base.prototype.rinxnam='';
  Base.prototype.recdata=''; // for records
  Base.prototype.nohd=0;
  Base.prototype.nodate=0;
  Base.prototype.hdt=0;
  Base.prototype.rcnt=0;
  Base.prototype.rinxcnt=0;
  Base.prototype.rinxlen=0;
  Base.prototype.rinxno=0;
  Base.prototype.reclength=0;
  Base.prototype.rmcnt=0;

    Base.prototype.btest=function (ss) {  }
    Base.prototype.berr=function () { return(this.err); }
    Base.prototype.init = function () { this.buf=new Str(); this.buf1=new Str(); 
     this.stk1=null;
     this.stk2=null;
     this.stk1=new Array(33);
     this.stk2=new Array(33);
     for(var i=0;i<33;i++) { this.stk1[i]=0; this.stk2[i]=0; }
    } 
    Base.prototype.initfolder = function (sd) { this.init(); this.xdata=sd; }
      
      
      Base.prototype.createfile = function (sa,l,n) { //old xdb (with 5 field  (60)
        var sb;       sb=this.xdata+fc.lcase(sa)+".xdb";   
        //x.log(sb+'<<');
        if(l===undefined) l=60; 
        if(n===undefined) n=5;  
        this.hd=new Files();  this.hd.createopen(sb,'w+');  
        //x.log(sb+'<<<<'+l+':'+n);
        this.dcreatefilex(sb,l,n,1,"",0); 
        this.frec=0;
      }

      Base.prototype.createfileindex = function (sa,l,n,sn) { //old xdb (with 5 field  (60)
        var sb;       sb=this.xdata+fc.lcase(sa)+sn;   
        if(l===undefined) l=60; 
        if(n===undefined) n=5;  
        
        this.hd=new Files();  this.hd.createopen(sb,'w+');    this.dcreatefilex(sb,l,n,1,"",0); this.frec=0;
      }

//      Base.prototype.createfile = function (String sdir,String sa,int l,int f) {
//        String sb;     
//        fmkdir(sdir); sb=sdir+"/"+sa+".xdb";   fcreate(sb); hd=new Files(sb); dcreatefilex(sb,l,6,f,"",0); frec=0;
//      }
                                                                              
          //filename,l-keylen,n-celln0,f=fields,ss-fieldnames,fn-numberindexfiles
    Base.prototype.dcreatefilex= function(s,l,n,f,ss,fnum) { 
        var r; var ia=ss.length; ia=0;                 
        this.err=0; this.eof=false; this.bof=false;
        this.keylen=l;this.cellno=n; 
        //x.log('hiii');
        this.calcnode(); // 1+(14+60keylen)*5cellno=nodelen
        //x.log('hooooiii');
        //x.log(l+':'+n+':'+this.nodelen+':'+(ia+10));
        //return;
        if((ia+10+xhdr)>this.nodelen)  this.buf.setch(fc.strdup(' ',ia+10+xhdr));    // never happend
        // 2keylen 2cellno 2fields 2frec 1indexes 2fldnamelen fldnames (code,name,desc) 
          //    x.log('hooooiii');

        this.buf.qw(1,l);   //   keylen
        this.buf.qw(3,n);   //   Many cells in a node
        
//        buf.qw(5,f);   //   Many fields in dat
//        buf.qw(7,0);   // frec
//        buf.qb(9,fnum);  //number of index files
//        buf.qw(9+xhdr,ia);  //length fieldnames
//        if(ia!=0) {  buf.qs(11+xhdr,ss); if((ia+10)>nodelen)  buf.qw(7,(ia+10)-nodelen);   }
     
        this.buf.qb(5,s.length);//   qb(@buf[5],length(s));
        this.buf.qs(6,fc.lcase(s)); //   qs(@buf[6],s); 
        r=this.hd.len(); //r=hd.seekend();
        this.hd.pwriteb(r,this.buf.cc); //result=r;
            //  x.log('hoooo'+r+':'+fc.hexbincc(this.buf.cc));
        this.buf.setch(fc.strdup(fc.chr(0),this.nodelen));
        this.buf.qb(2,2); this.buf.qb(3,1);//   qb(@buf[2],2);qb(@buf[3],1); 
        this.hd.pwriteb(r+this.nodelen,this.buf.cc);
              //        x.log('hooooiii2222');

        this.close();
      }
      //1    0                  8   2  4    1
     //[Node/Dat] [ Xkeyh         ofs ln][keyln   ]
     //nodelen =[XnodeM=1] [typ=1 keylen=1 4   4  key......]  [cell    ] [ cell ]  [cell  ] [cell  ]  ]
//               [2=eof]
 
    
    Base.prototype.open= function(s) { return(this.openx(s,0)); }
    Base.prototype.openx= function(s,n) {
      var sa,sb;               
       this.err=0; this.eof=false; this.frec=0; this.bof=false; //lockflag=0;
       if(n==0) sb=".xdb"; else sb=".x"+fc.right("00"+n,2);
       this.hd=new Files(this.xdata+fc.lcase(s)+sb); 
       this.filen=fc.lcase(s);                
       if(this.hd.len()<12) { this.err=14; return(false); }
       sa=this.hd.read(10+xhdr);  
       this.kdopen(sa); 
       return(true);
     }            
      Base.prototype.kdopen= function(ss) { var ia=0;  var sa=new Str(); sa.setch(ss); 
       this.err=0; this.eof=false;this.bof=false;   
       this.keylen=sa.gw(1);this.cellno=sa.gw(3);   
//       if(cellno!=5) { // 6
//         flds=sa.gw(5); frec=sa.gw(7); 
//         inumfiles=sa.gb(9);
//         ifnam=sa.gw(9+xhdr);  
//         if(ifnam>0) { fnam=hd.read(ifnam).split(","); } 
//         info=new Array(flds);  for(var i=0;i<flds;i++) info[i]=""; bold=false;  
//       } else 
       
       //bold=true;          
       this.calcnode(); 
     } 
      Base.prototype.calcnode= function() {
        this.cell=this.keylen+xkeyh; this.nodelen=this.cell*this.cellno+xnodem;  //(20*5)+1
        this.nfull=this.nodelen-this.cell+2;
        this.buf.setch(fc.strdup(' ',this.nodelen)); this.buf1.setch(fc.strdup('a',this.nodelen));
        //node2=cellno/2; 
//        node2= Math.floor(cellno/2)
        this.node2= (this.cellno/2)>>0;
        this.node1=this.cellno-this.node2; 
        //x.log(node1+':'+node2);
        this.node2++;
        
      }

     Base.prototype.close= function() {                             
       this.err=0; this.hd.close(); //if(hd===undefined)  { ] else { hd.close(); hd=undefined; }
     }
     Base.prototype.flush= function() {
      this.close(); this.open(this.filen);  
     }
     Base.prototype.lock= function() {}
     Base.prototype.unlock= function() {}
          //************** seek through database *************
     Base.prototype.dbseek= function(s) {
     var i,flg; var r; var ofs; var typ,nod,kl;

      ofs=0; kl=0; flg=0;//+
      r=this.frec+this.nodelen; this.stkp=0; // x.log(s); return;
      for(;;) {
       this.buf.setch(this.hd.pread(r,this.nodelen)); nod=this.buf.gb(1); //stem=buf.s; //item=buf.gw(1); 
       for(i=0;i<=(this.cellno-1);i++) { // go through node
          ofs=(i*this.cell)+1+xnodem;
          typ=this.buf.gb(ofs); kl=this.buf.gb(ofs+1);
          if(typ==2) { flg=(-2); break; }  
          
          if(this.buf.cmp(s,ofs+xkeyh,kl)<=0) { flg=0; break; }
       }
        this.stkp++; this.stk1[this.stkp]=r; this.stk2[this.stkp]=ofs; 
        if(nod==0) break; // data node
        r=this.buf.gdd(ofs+2);  //++
      }
       if(flg==0) { if(this.buf.cmp(s,ofs+xkeyh,kl)<0) { flg=(-1); } }
       return(flg); // 0= -1<  -2End
     }
     

     Base.prototype.findkey=function(ky) {
     var flg; var result="";
     this.lock(); 
      this.err=0; this.eof=false;
      flg=this.dbseek(ky); 
      if(flg==0)  result=this.key();
       else {
         if(flg==(-2)) { result=""; this.err=2; this.eof=true;  this.bof=true; }
         if(flg==(-1)) {
           result=this.key();
         }
       }
       this.unlock();
       return(result);
     }

    Base.prototype.findequkey=function(ky) {
       var flg;  this.err=0;
        flg=this.dbseek(ky);
        if(flg==0) return(true); else return(false);
    }
    Base.prototype.findequ=function(ky) {
     var  flg,ofs; var result="";
      this.lock();
      this.err=0; this.eof=false;
      flg=this.dbseek(ky); ofs=this.stk2[this.stkp];
      if(flg==0) { result=this.data(); }
       else { result=""; this.err=1;
         if(flg==(-2)) { this.eof=true; }
       }
       this.unlock();
       return(result);
     }

   Base.prototype.find=function(ky) {
     var flg,ofs; var result="",rky=""; this.bfind=false;
     this.lock();
      this.err=0; this.eof=false;
      flg=this.dbseek(ky); ofs=this.stk2[this.stkp];  
      if(flg==0) { rky=ky; result=this.data(); }
       else {
         if(flg==(-2)) { this.err=1;this.eof=true;rky="";result=""; }
         if(flg==(-1)) { this.bfind=true;
           rky=this.key();         
           result=this.data();
         }
       }
       this.unlock();
       return(result);
     }
    Base.prototype.first=function() { return(this.findkey("")); }
     Base.prototype.next=function() {
     var flg; var result=""; 
      this.lock();
      this.eof=false;
      flg=this.dbseek(this.key()); //**
      if(flg==0) { //**
       this.nextx();    
       if(this.err>0) { this.eof=true; result=""; }  else { result=this.key(); }
      } else { this.eof=true; result=""; } //
       this.unlock();
       return(result);
     }

    Base.prototype.nextx=function() {
     var j,nod,typ,ofs; var r;    
     this.err=0;
      for(;;) {
         if(this.stkp==0) { this.err=12; return; }
         this.buf.setch(this.hd.pread(this.stk1[this.stkp],this.nodelen)); ofs=this.stk2[this.stkp];
         j=((ofs-1-xnodem)/this.cell)>>0; nod=this.buf.gb(1);
         if( (j==(this.cellno-1)) || (this.buf.gb(ofs+this.cell+1)==0) ) this.stkp--;
         else {
           ofs=ofs+this.cell; this.stk2[this.stkp]=ofs; typ=this.buf.gb(ofs);
           if(nod==0) {  if(typ==2) this.err=2; return; }
           r=this.buf.gdd(ofs+2);
           for(;;) { // go down
            this.buf.setch(this.hd.pread(r,this.nodelen));nod=this.buf.gb(1);typ=this.buf.gb(2);
            this.stkp++; this.stk1[this.stkp]=r; this.stk2[this.stkp]=2;
            if(nod==0) {  if(typ==2) this.err=2; return; }
            r=this.buf.gdd(1+xnodem+2);
           }
         }
      }
     }
    Base.prototype.current=function() {
     var flg; var result="";
      this.lock();
       this.eof=false;
       flg=this.dbseek(this.key()); //**
       if(flg==0) result=this.key(); else { this.eof=true; result=""; } //
      this.unlock();
      return(result);
     }


     Base.prototype.prev=function() {
     var flg; var result;
      this.lock();
       this.bof=false; this.eof=false;
       flg=this.dbseek(this.key()); //**
       if(flg==0) {
        this.prevx();
        if(this.err>0) { this.bof=true; this.eof=true; result=""; }
        else result=this.key();
       } else { this.bof=true; this.eof=true; result=""; } //**
       this.unlock();
       return(result);
     }

     Base.prototype.prevno=function() {
     var flg; var result="";
      this.lock();
       this.bof=false; this.eof=false;
     //  flg:=dbseek(key()); //**
     //  if flg=0 then begin //**
        this.prevx();
        if(this.err>0) {  this.bof=true; this.eof=true; result=""; }
        else result=this.key();
     // end else begin bof:=true; eof:=true; result:=''; end; //**
       this.unlock();
       return(result);
     }
     Base.prototype.prevx=function() {
     var i,j,nod,ofs; var r;
      this.err=0;
      for(;;) {
         if(this.stkp==0) { this.err=3; return; }
         
         this.buf.setch(this.hd.pread(this.stk1[this.stkp],this.nodelen)); ofs=this.stk2[this.stkp];
         nod=this.buf.gb(1); j=xnodem+1;
         if(j==ofs)  this.stkp--; 
         else {
           ofs=ofs-this.cell; this.stk2[this.stkp]=ofs;
           if(nod==0) { return; }
           r=this.buf.gdd(ofs+2);
           for(;;) { // go down
            this.buf.setch(this.hd.pread(r,this.nodelen));nod=this.buf.gb(1);//typ:=gb(@buf[2]);
            for(i=0;i<=(this.cellno-1);i++) { // go to the end of node
             ofs=(i*this.cell)+1+xnodem;     if(this.buf.gb(ofs+1)==0) break;
            } i--;ofs=(i*this.cell)+1+xnodem;
            this.stkp++; this.stk1[this.stkp]=r; this.stk2[this.stkp]=ofs;
            if(nod==0) { return; }
            r=this.buf.gdd(ofs+2);
           }
         }
      }

     }
 

     Base.prototype.last=function() {
       this.findkey(fc.strdup(fc.chr(255),10));
       return(this.prevno());
     }


 //**********************************************************************************
 //**********************************************************************************

   Base.prototype.key=function() {
     var ofs;
      if(this.stkp==0) { this.eof=true; return(""); }
      ofs=this.stk2[this.stkp]; if(this.buf.gb(ofs)==2) {  this.eof=true; return(""); }  
      return(this.buf.mid(ofs+xkeyh,this.buf.gb(ofs+1)));
     }
                                                               
   Base.prototype.data=function() {
     var l,ofs; var r;
     ofs=this.stk2[this.stkp]; r=this.buf.gdd(ofs+2); l=this.buf.gd(ofs+10); 
      if(l==0) return(""); else return(this.hd.pread(r,l));
    }

    Base.prototype.putnode=function(datca) {
     var i;
       i=this.hd.len(); // new offset
       this.hd.pwriteb(i,datca); return(i);
     }
     Base.prototype.putdata=function(ky,dat,daton) {
     var l,ln; var i;     
       //    7        1              4          4           5
       // ksecpre | keyln | key | reallendat firstlendat | dat | ksecpost/ksecpostdel            
       if(daton==1) { return(fc.ascdd(dat)); }
       i=this.hd.len(); l=dat.length;  
       if(l==0) { return(i); }
       ln=ky.length; 
       this.hd.pwrites(i,fc.buftostr(ksecpre)+fc.chrb(ln)+ky+fc.chrd(l)+fc.chrd(l)+dat+fc.buftostr(ksecpost));
       return(i+7+1+ln+4+4); 
     }
     

//**************************************** insert **********************
     Base.prototype.filelen=function() { return(this.hd.len()); }
     Base.prototype.insert=function(ky,dat) { //update=false insert=true
     this.err=0; var ba=true;
      if(ky.length==0) { this.err=1; return(ba); } // couldnt have a empty key
      this.lock();
      if(this.dbseek(ky)==0) { 
        // x.log('update....'+ky);
         this.update(ky,dat); 
         ba=false; 
      } else { this.insertx(ky,dat); }
      this.unlock(); //flush;
      return(ba);
     }

    
    Base.prototype.insertx=function(ky,dat) {
     var celladd,daton,tm,ofs; var klf,kl; var r;
      daton=0;
      for(;;) {
        if(this.stkp==0) {
          r=this.putnode(this.buf.cc);
          this.buf.qdd((this.node2-1)*this.cell+xnodem+1+2,r); // set record
          this.buf.qb(1,1); // node XdxataX
          this.buf.qsp(2,(this.node2-2)*this.cell+xnodem+1,this.cell*2); //shift
          this.buf.qset(2*this.cell+xnodem+1,(this.cellno-2)*this.cell,0); //empty rest
           // insert second key
           kl=ky.length; ofs=2;
           this.buf.qb(ofs,0); this.buf.qb(ofs+1,kl); //insert key
           this.buf.qs(ofs+xkeyh,ky); //just a string
           r=this.putdata(ky,dat,daton); // data or node
           this.buf.qdd(ofs+2,r); this.buf.qd(ofs+10,dat.length); //insert data
           this.hd.pwriteb(this.stk1[this.stkp+1],this.buf.cc);  return;  // exit insert
         }

         this.buf.setch(this.hd.pread(this.stk1[this.stkp],this.nodelen)); ofs=this.stk2[this.stkp];
         klf=this.buf.gb(this.nfull); celladd=0;
          // insert key & data
         if(klf>0) { this.buf.st(); this.buf.setch(this.buf.s+fc.strdup(fc.chr(0),this.cell)); celladd=this.cell; }
           this.buf.qsp(ofs+this.cell,ofs,(this.nodelen+celladd)-ofs-this.cell+1); //make place
           if(ky.length>this.keylen)  kl=this.keylen; else kl=ky.length;
           this.buf.qb(ofs,0); this.buf.qb(ofs+1,kl); //insert key
           this.buf.qs(ofs+xkeyh,ky);
           r=this.putdata(ky,dat,daton); // data or node
           this.buf.qdd(ofs+2,r); this.buf.qd(ofs+10,dat.length); //insert data
         if(klf==0) { //**** insert key in node & exit
           this.hd.pwriteb(this.stk1[this.stkp],this.buf.cc); return; }
          else { // split node
          this.buf1.qset(1,this.nodelen,0);// empty new buffer
          this.buf1.qspc(1,this.buf.cc,1,this.cell*this.node1+xnodem); // copy first 3 cells
          r=this.putnode(this.buf1.cc); daton=1; tm=this.cell*(this.node1-1)+xnodem+1;
          this.buf1.st(); ky=this.buf1.mid(tm+xkeyh,this.buf1.gb(tm+1)); dat=fc.chrdd(r);

          this.buf.qsp(2,this.cell*this.node1+xnodem+1,this.cell*this.node2); // shift first node
          this.buf.qset(this.cell*this.node2+xnodem+1,this.cell*(this.node2-1),0); // empty rest
          this.buf.st(); this.buf.setch(this.buf.left(this.nodelen)); // ?buffer ......
          this.hd.pwriteb(this.stk1[this.stkp],this.buf.cc); this.stkp--; //
          }

      }
     }

     Base.prototype.update=function(ky,dat) {
     var l,ln,ofs; var r;
       this.buf.setch(this.hd.pread(this.stk1[this.stkp],this.nodelen)); ofs=this.stk2[this.stkp];
       r=this.buf.gdd(ofs+2);
       ln=dat.length;
       if(this.buf.gd(ofs+10)==0) if(ln==0) return;
     //  if gd(@buf[ofs+6])=0 then exit;
       l=fc.ascd(this.hd.pread(r-4,4)); 
       if(l>=ln) { //len can be replace
         //this.hd.setpos(hd.getpos()-8);
         this.hd.pwrites(r-8,fc.chrd(ln)+fc.chrd(l)+dat); this.buf.qd(ofs+10,ln);
       }  else { // put in chain
           this.hd.pwriteb(r+l,ksecpostdel); //*** write delete data
           r=this.putdata(ky,dat,0); this.buf.qdd(ofs+2,r); this.buf.qd(ofs+10,ln); //insert data
       }
       this.hd.pwriteb(this.stk1[this.stkp],this.buf.cc);
     }

     Base.prototype.delete=function(kyy) { this.lock(); this.deletex(kyy); this.unlock(); }
     Base.prototype.deletex=function(kyy) {
      var flg,i,off,nod,dflg,ofs; var ky=""; var kl=0; var r;
      this.err=0; this.eof=false;
       flg=this.dbseek(kyy); // buf  & stk[stkp,1]=r(buf)& stk[stkp,2]=ofs
       if(flg!=0) {  this.err=1;
          if(flg==(-2)) this.eof=true; return;    //flg=0 equ **** delete key
       }
       this.deletedata();
       dflg=0;
       for(;;) {
        r=this.stk1[this.stkp]; ofs=this.stk2[this.stkp];
        this.buf.setch(this.hd.pread(r,this.nodelen)); nod=this.buf.gb(1);
        for(i=0;i<=(this.cellno-1);i++) { // go to the end of node >off
          off=(i*this.cell)+1+xnodem;  if(this.buf.gb(off+1)==0) break;
        } i--;off=(i*this.cell)+1+xnodem;
        if(ofs<off) { // delete key node/data
          if(dflg==0) {
           this.buf.qsp(ofs,ofs+this.cell,(this.nodelen+1)-(ofs+this.cell));
           this.buf.qset(off,this.cell,0); // empty last cell
           this.hd.pwriteb(r,this.buf.cc); return;
          } else { //replace ky kl
           this.buf.qs(ofs+xkeyh,ky); this.buf.qb(ofs+1,kl); // kl?
           this.hd.pwriteb(r,this.buf.cc); return;
          }
        } else { // Last key
        if(dflg==0) {  // delete
         if(ofs==(xnodem+1)) this.stkp--; //last key in node
          else {
            this.buf.qset(ofs,this.cell,0); // empty cell
            this.hd.pwriteb(r,this.buf.cc);
            ofs=ofs-this.cell;  kl=this.buf.gb(ofs+1); this.buf.st(); ky=this.buf.mid(ofs+xkeyh,kl); // midc
            this.stkp--; dflg=1;
          }
        } else { // replace
           this.buf.qs(ofs+xkeyh,ky); this.buf.qb(ofs+1,kl); //kl?
           this.hd.pwriteb(r,this.buf.cc); this.stkp--;
        }
        }
       }
       
     }

     Base.prototype.deletedata=function() {
       var i,l,ofs; var r;
       // first a buf:=xpread(hd,stk[stkp,1],nodelen)
        ofs=this.stk2[this.stkp]; r=this.buf.gdd(ofs+2);l=this.buf.gd(ofs+10);
        if(l>0) {
         i=fc.ascd(this.hd.pread(r-4,4)); //hd.setpos(r+i);
         this.hd.pwriteb(r+i,ksecpostdel);
        }
     }     
     
    Base.prototype.dataaddress=function() {
     var l,ofs; var r;
      // first a buf:=xxpread(hd,stk[stkp,1],nodelen)
      ofs=this.stk2[this.stkp]; r=this.buf.gdd(ofs+2);l=this.buf.gd(ofs+10); //++
      if(l==0) return(0); else return(r-8);
     }

     Base.prototype.rec=function() {
     var ofs;
      ofs=this.stk2[this.stkp]; if(this.buf.gb(ofs)==2) { this.eof=true; return(0); }
      return(this.buf.gdd(ofs+2));
     }
     Base.prototype.reclen=function() {
     var ofs;
      ofs=this.stk2[this.stkp]; if(this.buf.gb(ofs)==2) { this.eof=true; return(0); }
      return(this.buf.gd(ofs+10));
     }
     

    Base.prototype.log=function(ss) {  console.log(ss); }

    
    Base.prototype.test= function(ss) {  
        var hdi=new Files(),k=0,j=0;
        var sb='',sa=Math.random()*10000+'';// x.log(sa.split('.')[0]);
        fc.stick();// return;
        x.createfile('test01',20,7);     
        x.log(fc.etick()+':create7'); fc.stick();
        x.open('test01'); 
        x.log(fc.etick()+':open'); fc.stick();
        for(var i=10001;i<=30000;i++) {
          sa=Math.random()*100000000+''; sa=sa.split('.')[0];
          x.insert('ABC'+i,'>>>'+i);
        }
        x.log(fc.etick()+':insert'); fc.stick();
        sa=x.first(); k=0;
        for(;;) {
          k++; sb=x.data(); //x.log(sa+'***'+k+':'+x.data()); // if(k>20) break;
          if(k<10) x.log(sa+sb);
          sa=x.next(); if(sa=='') { break; }
          
        }
        x.log(fc.etick()+':readdata'); fc.stick();
        sa=x.first(); k=0;
        for(;;) {
          k++; //sb=x.data(); //x.log(sa+'***'+k+':'+x.data()); // if(k>20) break;
          if(k<10) x.log(sa);
          sa=x.next(); if(sa=='') { break; }
        }
        x.log(fc.etick()+':readkey'); fc.stick();
        x.close();
    }

    Base.prototype.run=function(ss,res) { 
      var scmd=fc.xitemget(ss,1,'|');
      var sexec=fc.xitemlast(ss,1,'|');
      var sret='';
      fc.stick();
      if(scmd=='create') { x.createfile(sexec,60,5); }
      else if(scmd=='createlen') { x.createfile(fc.xitemget(sexec,1,'|'),fc.xis(fc.xitemget(sexec,2,'|')),5);          }
      else if(scmd=='dump') { 
         var hdi=new Files();
         var sa=hdi.fileread('./data/'+fc.xitemget(sexec,1,'|')+'.xdb');        
         x.log(fc.hexbin(sa));  
      }
      else if(scmd=='insert') { x.open(fc.xitemget(sexec,1,'|')); x.insert(fc.xitemget(sexec,2,'|'),fc.xitemlast(sexec,2,'|')); x.close(); } 
      else if(scmd=='get') { //get the whole file
        x.open(fc.xitemget(sexec,1,'|')); 
        var sa=x.first(); 
        for(;;) {
          if(sa=='') { break; }
          sb=x.data(); sret+=sa+':'+sb+'\n';
          sa=x.next(); 
        }
        x.close(); 
      } 
      
      x.log(fc.etick()+':'+scmd);

      //x.log('************start:'+ss);
      //x.test();
      //console.log(ss); 
      res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
      //res.write('hi'); 
      //setTimeout(function() {  x.log('end:'+ss); res.end(ss);    },500);
      res.end(sret);
      //return(ss);
    }

    if(sinit===undefined) { this.init();   } else { this.initfolder(sinit);  }


}           



//*********************************** main data base ********************************************
function DBase(sinit) {
//    var fb=this;
//    var fs = require('fs');

     var x=this;
     var xmaxfilehd=600;
     var dat=new Array(600);//:array[0..xMaxFilehd] of TKdbase;  dai:array[0..xMaxFilehd] of byte; 
     var dai=new Array(600);
     var cr='\r\n';
     var xerr=false;
     var fc=new basestr();
     var dataip='';
     var child = require('child_process');
     var urlrequest = require('request');                                                                  
     var Promise = require('promise');
     var sqlite3 = require('sqlite3').verbose();  
     var mysql; //require('mysql');                                                                    
     var sql;
     var zlib;
     var jsfor;
     var jsmin,jsminpro;
     var jstypes;


//****************************************************** sqlite ****************************************
    var sfdat = new Array();
    var sddat = new Array();                                      
    var sddatblock = new Array(); 
    var csep = String.fromCharCode(252); 
    var cdel = String.fromCharCode(254);  var sdel = cdel + '';
    var cblock = String.fromCharCode(253); var sblock = cblock + '';
  //  var db = [], dbname = [], dbfld = [], dbfldlen = [], dbcount = [], dbdata = [], dbid = 'idxx';
    var xatim=0;
    var stdat = new Array();                     
    var ihdb=new Array(500); 
    var qfiberflag=false,qip='',qipset='',qretdata='',qcurdat='',scurdat='',kcurdir='',scurdir="'./data/'";                                            
    var qbfn=false,qfnc;
    var qprac='1',qsess='1234',gres;


    DBase.prototype.qrawx = function (sa) { var rows=this.bcallfn(qcurdat+'|'+sa);  return(rows); }
    DBase.prototype.qraw = function (sa) {  var rows=this.bcallfn(qcurdat+'|'+sa);  return(rows); }
    DBase.prototype.qrawfn = function (sa,sfn) {  this.bcalllfn(qcurdat+'|'+sa,sfn); }
    DBase.prototype.qdatopen = function () { 
      var j=500;  
      if(ihdb.length==500) {
       for(var i=501;i<1000;i++) { ihdb[i]=0; }
      }                       
      for (var i=501;i<ihdb.length;i++) {
        if (ihdb[i]==0) { j = i; ihdb[i] = 1; break; }
      } //alert(j+'..'+i);
      //if(j==0) { j=ihdb.length; ihdb[j] = 1; if(j==0) { j++; ihdb[j] = 1;  }  }
      stdat[j]=''; sfdat[j]=''; sddat[j]=''; sddatblock[j]='';                
      return(j);
    };
    DBase.prototype.qdatclose = function (n) { ihdb[n]=0;  stdat[n]=''; sfdat[n]=''; sddat[n]=''; sddatblock[n]=''; } 
    DBase.prototype.qdattable = function (n,ss) { stdat[n]=ss;
      if(fc.xitemcount(ss,' ')>1) { return(ss); } else { return('select * from '+ss); }
    }
    DBase.prototype.qdatcount = function (n) {   if(n==0) { return(''); } else { return(' limit '+n); }  }
    DBase.prototype.qdatwhere = function (ss) { 
       var sa=fc.trim(ss);                                           
       if(sa=='') { return(sa); }  
       if(sa[0]=='$') {
        var sb=this.qpractice();   if (sb=="") { sb = "1"; }   sb = "PracticeId=" + sb;  sa = fc.xright(sa);
            if(fc.lcase(fc.xitemget(sa,1,' '))=='order') { return(' where '+sb+' '+sa); } else { return(' where '+sb+' and '+sa); }    
       } else {
        if(fc.lcase(fc.xitemget(sa,1,' '))=='order') { return(' '+ss); } else { return(' where '+ss); }    
       }    
    };

    DBase.prototype.qdatput = function (hd,rows) {  // nodejs
      var sa='',sb='',scol=''; //if(fc.instr(1,rows,'CategoryId')>0) { alert(rows); }
      rows=JSON.parse(rows);         
      for(var i=0;i<rows.length;i++) { 
        for(var key in rows[i]) {  
          if(i==0) { scol+=key+','; }
          sb=rows[i][key]+''; if(sb=='null') { sb='';   }
          sa+=sb+cdel;
        } 
        if(i==0) { sddat[hd]=fc.xleft(sa); }
        sa=fc.xleft(sa)+cblock;                                                           
     } 
      sfdat[hd]=fc.xleft(scol);
      sddatblock[hd]=fc.xleft(sa);
      if(sddatblock[hd]=='') { return(1); } else { return(0); }

    };                                                  
    
    
    DBase.prototype.qdatinsert = function (hd,sex,n) { 
      var sa='',sb='',sc='',scol='';
      for(var i=1;i<=fc.itemcount(sfdat[hd]);i++) {
        sb=fc.itemget(sfdat[hd],i); 
        if(sex!='') { 
          if(n==2) { if(fc.itemnum(sex,sb)>0) {  } else { continue; } }
              else { if(fc.itemnum(sex,sb)>0) { continue;  }   }
        }
        scol+=sb+',';
        //sc=fc.strrepp(fc.xitemget(sddat[hd],i,cdel),'"','""');
        //sa+='"'+fc.strrepp(sc,fc.chr(92),fc.chr(92)+fc.chr(92))+'",';
        sa+='"'+fc.xitemget(sddat[hd],i,cdel)+'",';
      }                                                                                          
      sa=' ('+fc.xleft(scol)+') values ('+fc.xleft(sa)+')';
      return(sa);
    } 
    DBase.prototype.qdatupdate = function (hd,sex,n) { 
      var sa='',sb='',sc='';
      for(var i=1;i<=fc.itemcount(sfdat[hd]);i++) {
        sb=fc.itemget(sfdat[hd],i); if(sex!='') { 
          if(n==2) { if(fc.itemnum(sex,sb)>0) {  } else { continue; } }
              else { if(fc.itemnum(sex,sb)>0) { continue;  }   }
        }
        //sc=fc.strrepp(fc.xitemget(sddat[hd],i,cdel),'"','""');
        //sa+=sb+'="'+fc.strrepp(sc,fc.chr(92),fc.chr(92)+fc.chr(92))+'",';
        sa+=sb+'="'+fc.xitemget(sddat[hd],i,cdel)+'",';
      }
      return(fc.xleft(sa));
    }

//*******************************************************************************************************    

DBase.prototype.qresult = function (ss) {  var hd=this.qdatopen();  
this.qdatput(hd,ss); ihdb[hd]=0; 
return(hd); 
}
DBase.prototype.qresultbuild = function (sf,ss) {  var hd=this.qdatopen();  
sfdat[hd]=sf;    sddatblock[hd]=ss;  //ihdb[hd]=0; 
return(hd); 
}

DBase.prototype.quse = function (ss) { var ln=arguments.length; if(ln==1) qcurdat=ss; else return(qcurdat); }
DBase.prototype.qopen = function (stable) { 
      var hd=this.qdatopen(); 
      var sb=this.qdattable(hd,stable); 
      var rows=this.qraw("pragma table_info('"+stable+"')");
      var sa=''; rows=JSON.parse(rows);  
      for(var i=0;i<rows.length;i++) {  
         for(var key in rows[i]) {  
            if((key+'')=='name') {     sa+=rows[i][key]+','; }
         }  
      } 
      sfdat[hd]=fc.xleft(sa); 
      return(hd);
};
DBase.prototype.qclose = function (shd) { this.qdatclose(shd); };  
DBase.prototype.qinsert = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      var rows=this.qraw(''+sa);  return(sa+'\n'+rows);
};
DBase.prototype.qinsertfn = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      this.bcalllfn('xqraw|'+qcurdat+'|'+sa);
      //var rows; //=this.qrawx(''+sa);  
      //return(sa+'\n');
};
DBase.prototype.qinsertget = function (shd, sex,sb) { 
      if(arguments.length==3) {
      var sa='insert into '+sb+this.qdatinsert(shd,sex,1); 
      return(sa)
          
      } else {
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      return(sa)
      }
      //var rows=this.yraw(''+sa);  return(sa+'\n'+rows);
};


DBase.prototype.qinsertin = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,2); 
      var rows=this.qrawx(''+sa); return(sa+'\n'+rows);
};
DBase.prototype.qdel = function (stable, sarg) {                 
      var sa='delete from '+stable+this.qdatwhere(sarg); 
      var rows=this.qrawx(''+sa);  return(sa+'\n'+rows);
}; 
DBase.prototype.qdelete = function (stable, sarg) {                 
      var sa='delete from '+stable+this.qdatwhere(sarg); 
      var rows=this.qrawx(''+sa); return(sa+'\n'+rows);
}; 

DBase.prototype.qupdate = function (shd, sarg, sex) { 
      var sa='update '+stdat[shd]+' set '+this.qdatupdate(shd,sex,1)+this.qdatwhere(sarg)+this.qdatcount(0);
      var rows=this.qrawx(''+sa);  return(sa+'\n'+rows);
};  //exclude
DBase.prototype.qupdatein = function (shd, sarg, sex) { 
      var sa='update '+stdat[shd]+' set '+this.qdatupdate(shd,sex,2)+this.qdatwhere(sarg)+this.qdatcount(0);
      rows=this.qrawx(''+sa);  return(sa+'\n'+rows);
};  //exclude




DBase.prototype.qgethd = function (stable, sno, sarg) { 
      var hd=this.qdatopen(); 
      var rows=this.qraw(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(sno));  
      if(rows=='[]') { return(hd); }  this.qdatput(hd,rows);  return(hd);
};
DBase.prototype.qgetfn = function (stable, sno, sarg,sfn) { 
      var hd=this.qdatopen(); ihdb[hd]=0;   
      this.qrawfn(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(sno),sfn);  
};
DBase.prototype.qgetret = function (rows) { 
 var hd=this.qdatopen(); 
 ihdb[hd]=0; 
 if(rows=='[]') { return(hd); }  this.qdatput(hd,rows);  return(hd); 
}
DBase.prototype.qgetrethd = function (rows) { 
 var hd=this.qdatopen(); 
 //ihdb[hd]=0; 
 if(rows=='[]') { return(hd); }  this.qdatput(hd,rows);  return(hd); 
}

DBase.prototype.qget = function (stable, sno, sarg) { var hd=this.qgethd(stable,sno,sarg);  ihdb[hd]=0; return(hd);  };


DBase.prototype.qwherehd = function (stable, sarg) {                                                   
      var hd=this.qdatopen();   
      var rows=this.qraw(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(0)); 
      if(rows=='[]') { ihdb[hd]=0; return(0); }  if(this.qdatput(hd,rows)) { ihdb[hd]=0;  return(0); } this.dnextno(hd,1); return(hd);
};
DBase.prototype.qwhere =  function (stable, sarg) { //var hd=this.ywherehd(stable,sarg); ihdb[hd]=0; return(hd); }
      var hd=this.qdatopen();   
      var rows=this.qraw(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(0)); 
       ihdb[hd]=0; if(rows=='[]') {   return(0); }  if(this.qdatput(hd,rows)) {  return(0); } this.dnextno(hd,1);  return(hd);
}      

DBase.prototype.qtables = function () { 
 var rows=this.qraw("SELECT * FROM sqlite_master WHERE type='table' order by name collate nocase"); 
 var sa=''; rows=JSON.parse(rows);  
      for(var i=0;i<rows.length;i++) {  
         for(var key in rows[i]) {  
            if((key+'')=='name') {     sa+=rows[i][key]+','; }
         }  
      } 
      return(fc.xleft(sa)); 
}

DBase.prototype.qcreate = function (sname,sarg) { //name,'key text,memo blob,amount real'
      var k=0; 
      var sb=this.qtables();
      if(fc.itemnum(sb,sname)>0) { this.qrawx('DROP TABLE '+sname); }
      var sb='',sc='';
      for(var i=1;i<=fc.itemcount(sarg);i++) {
        sb=fc.itemget(sarg,i); 
        sc=sc+sb+' collate nocase,'
        //sc=sc+sb+','
      }
      sc=fc.xleft(sc);
      var sa='CREATE TABLE '+sname+' ('+sc+')';
      var rows=this.qrawx(sa);  return(sa+'\n'+rows);
};
DBase.prototype.qcreateget = function (sname) { //name,'key text,memo blob,amount real'
 var rows=this.qraw("select sql from sqlite_master where type = 'table' and name = '"+sname+"'");
 rows=JSON.parse(rows);  
 return(rows[0].sql);
}

DBase.prototype.qsysput = function (sk,sd) {   
    var hd=this.qwhere('select D.num from setup D',"num='"+sk+"'");  
           if(hd>0) { hd=this.qopen('setup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qupdatein(hd,"num='"+sk+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('setup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qinsert(hd,'');                         this.qclose(hd); }
}
DBase.prototype.qsysfind = function (sa) {  
    var hd=this.qwhere('select D.keyinfo from setup D',"num='"+sa+"'"); 
      if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
}
DBase.prototype.sysput = function (sk,sd) {   
    var hd=this.qwhere('select D.num from syssetup D',"$num='"+sk+"'");  
           if(hd>0) { hd=this.qopen('syssetup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qupdatein(hd,"num='"+sk+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('syssetup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.dnput(hd,'PracticeId',this.qpractice()); this.qinsert(hd,'');                         this.qclose(hd); }
}
DBase.prototype.sysfind = function (sa) {  
    var hd=this.qwhere('select D.keyinfo from syssetup D',"$num='"+sa+"'"); 
      if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
}
 DBase.prototype.sysputtmp = function (sk,sd) {   
     var hd=this.qwhere('select D.num from systmp D',"$num='"+sk+qsess+"'");  
           if(hd>0) { hd=this.qopen('systmp');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk+qsess); this.qupdatein(hd,"num='"+sk+qsess+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('systmp');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk+qsess); this.dnput(hd,'PracticeId',this.qpractice()); this.qinsert(hd,'');                         this.qclose(hd); }
 }
 DBase.prototype.sysfindtmp = function (sa) {  
     var hd=this.qwhere('select D.keyinfo from systmp D',"$num='"+sa+qsess+"'"); 
       if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
 }
DBase.prototype.sysputgen = function (sk,sd) {   
    var hd=this.qwhere('select D.num from sysgen D',"num='"+sk+"'");  
           if(hd>0) { hd=this.qopen('sysgen');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qupdatein(hd,"num='"+sk+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('sysgen');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qinsert(hd,'');                         this.qclose(hd); }
}
DBase.prototype.sysfindgen = function (sa) {  
    var hd=this.qwhere('select D.keyinfo from sysgen D',"num='"+sa+"'"); 
      if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
}
DBase.prototype.qpractice = function (sa) {   if(arguments.length>0) qprac=sa; return(qprac);}
DBase.prototype.qsession = function (sa) {    if(arguments.length>0) qsess=sa; return(qsess);}
DBase.prototype.dpractice = function () {  return(qprac);}
DBase.prototype.qconvto = function (ss)   {  
  var sa=''; 
    for(var i=0;i<ss.length;i++)   {
     if(ss[i]==fc.chr(1))   { sa+=fc.chr(1)+fc.chr(65); continue;   }
     if(ss[i]==fc.chr(253))   { sa+=fc.chr(1)+fc.chr(67); continue;   }
     if(ss[i]==fc.chr(254))   { sa+=fc.chr(1)+fc.chr(68); continue;   }
     if(ss[i]==fc.chr(0))   { sa+=fc.chr(1)+fc.chr(69); continue;   }
     if(ss[i]==fc.chr(34))   { sa+=fc.chr(1)+fc.chr(70); continue;   }
     if(ss[i]==fc.chr(92))   { sa+=fc.chr(1)+fc.chr(71); continue;   }
     if(ss[i]>fc.chr(255))   { sa+=fc.chr(32); continue;   }
     sa+=ss[i];
    }
   return(sa);
}

DBase.prototype.qconvfrom = function (ss)   { 
  var sa='';  
    for(var i=0;i<ss.length;i++)   {
     if(ss[i]==fc.chr(1))   { 
       if(ss[i+1]==fc.chr(65))   { sa+=fc.chr(1); i++; continue; }
       if(ss[i+1]==fc.chr(67))   { sa+=fc.chr(253);  i++; continue; }
       if(ss[i+1]==fc.chr(68))   { sa+=fc.chr(254); i++; continue; }
       if(ss[i+1]==fc.chr(69))   { sa+=fc.chr(0);  i++; continue; }
       if(ss[i+1]==fc.chr(70))   { sa+=fc.chr(34); i++; continue; }
       if(ss[i+1]==fc.chr(71))   { sa+=fc.chr(92);  i++; continue; }
     }
     sa+=ss[i];
    } 
   return(sa);
}



    
                                                                                                   
    DBase.prototype.dn = function (shd, sf) { 
     var ia = fc.itemnum(sfdat[shd], sf); 
     if (ia > 0) { 
      var sa=fc.xitemget(sddat[shd], ia, cdel);
      if(fc.xinstr(1,sa,fc.chr(1))>0) {
        sa=this.qconvfrom(sa);
        return(sa)
      } else {  return(sa) }
     } 
     else { return (""); } 
    };  
    DBase.prototype.dnno = function (shd, sf) { 
        if (sf > 0) { 
         var sa=fc.xitemget(sddat[shd], sf, cdel); 
         if(fc.xinstr(1,sa,fc.chr(1))>0) {  sa=this.qconvfrom(sa);  return(sa)   } else {  return(sa) }
        } 
        else { return (""); } 
    };


    DBase.prototype.dnput = function (shd, sf, sd) { 
      var ia = fc.itemnum(sfdat[shd], sf); if (typeof(sd) == "undefined") { sd=''; }  
      sd=this.qconvto(sd);
      if (ia > 0) { sddat[shd] = fc.xitemrep(sddat[shd], sd, ia, sdel); }   };
    DBase.prototype.dset = function (shd, sf, sd) { var ia = fc.itemnum(sfdat[shd], sf); if (ia > 0) { sddat[shd] = fc.xitemrep(sddat[shd], sd, ia, sdel); }  };
    DBase.prototype.dnputno = function (shd, sf, sd) {if (sf > 0) { sddat[shd] =fc.xitemrep(sddat[shd], sd, sf, cdel);  } };
    DBase.prototype.drec = function (shd) { return (sddat[shd]); }
    DBase.prototype.dclear = function (shd) { sddat[shd]=fc.strdup(sdel,fc.itemcount(sfdat[shd])); return (sddat[shd]); }
    DBase.prototype.dblock = function (shd) { return (sddatblock[shd]); }
    DBase.prototype.dfields = function (shd) { return (sfdat[shd]); }
    DBase.prototype.dblockchange = function (shd,ss) { sddatblock[shd]=ss; }
    DBase.prototype.dfieldschange = function (shd,ss) { sfdat[shd]=ss; }
    DBase.prototype.dfieldsdata = function (sf,sdat) { var i=this.ydatopen(); sfdat[i]=sf; sddatblock[i]=sdat; ihdb[i]=0; return(i);  }
    DBase.prototype.dnextno = function (shd, sno) {
        if (sno > fc.xitemcount(sddatblock[shd], sblock)) return (1);
        sddat[shd] = fc.xitemget(sddatblock[shd], sno, sblock); if (sddat[shd] == '') { return (1) }
        return (0);
    };

DBase.prototype.bcallfn = function (ssa) {  
        var qretdat='[]'; 
        var sdb=fc.xitemget(ssa,1,'|'); 
        var ss=fc.xitemlast(ssa,1,'|');
        if(sdb=='') {  return('[]'); }
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                 qretdat='[]';
                console.log('error'+err);
            } else {
                qretdat=JSON.stringify(rows); 
            }
           fs.appendFile(__dirname+'/log.txt','','binary', function (err) { }); //bug
           jxcore.utils.continue(); 
            
    });   
   });
   jxcore.utils.jump();
   return(qretdat)
}

DBase.prototype.bcalllfn = function (ssa,sfn) {  
        var sdb=fc.xitemget(ssa,1,'|'); 
        var ss=fc.xitemlast(ssa,1,'|');
        if(sdb=='') { sfn('[]'); return; }
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                 sfn('[]');
                console.log('error'+err);
            } else {
                sfn(JSON.stringify(rows)); 
            }
    });   
   });
}

//************************************** promise for sqlite *************************************
DBase.prototype.bcallprom = function (ssa) {  
        var sdb=fc.xitemget(ssa,1,'|'); 
        var ss=fc.xitemlast(ssa,1,'|');
//        if(sdb=='') { sfn('[]'); return; }
  return new Promise(function (fulfill, reject) {
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                 fulfill('[]');
                console.log('error'+err);
            } else {
                fulfill(JSON.stringify(rows)); 
            }
    });   
  });
  });
}


DBase.prototype.promstart = function () {
  return new Promise(function (fulfill, reject){
    setTimeout(function() { fulfill(''); },0);
  });
}
DBase.prototype.qrawprom = function (sa) {  var rows=this.bcallprom(qcurdat+'|'+sa);  return(rows); }

DBase.prototype.qgetprom = function (stable, sno, sarg) { 
      var hd=this.qdatopen(); ihdb[hd]=0;   
      var rows=this.qrawprom(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(sno));  
      return(rows);
};
DBase.prototype.qwhereprom = function (stable, sarg) { 
      var hd=this.qdatopen(); ihdb[hd]=0;   
      var rows=this.qrawprom(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(1));  
      return(rows);
};
DBase.prototype.qinsertprom = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      var rows=this.qrawprom(''+sa); return(rows);
};


 DBase.prototype.qwhereret = function (rows) { 
  var hd=this.qdatopen(); 
  ihdb[hd]=0; 
  if(rows=='[]') { ihdb[hd]=0; return(0); }  if(this.qdatput(hd,rows)) { ihdb[hd]=0;  return(0); } this.dnextno(hd,1);   return(hd);
 }
DBase.prototype.qwhererethd = function (rows) { 
 var hd=this.qdatopen(); 
 if(rows=='[]') { ihdb[hd]=0; return(0); }  if(this.qdatput(hd,rows)) { ihdb[hd]=0;  return(0); } this.dnextno(hd,1); return(hd);
}



//****************************************************** sqlite ****************************************





DBase.prototype.datafolder='./data/';
DBase.prototype.datafolderbase='./data/';
//DBase.prototype.dataip='';
DBase.prototype.dinit=function() {  for(var i=0;i<xmaxfilehd;i++) { dai[i]=0; dat[i]='';  } this.datafolder='./data/'; } 
DBase.prototype.dinitfolder=function(sd) {  for(var i=0;i<xmaxfilehd;i++) { dai[i]=0; dat[i]='';  } this.datafolder=sd; } 
DBase.prototype.duse=function(sd) {  this.datafolder=sd; } 
DBase.prototype.buse=function(sd) {  this.datafolder=sd; } 
DBase.prototype.xts = function (sarg) {  var buffer;  if(sarg instanceof Buffer) { buffer=sarg; } else {  buffer=new Buffer(sarg.toString(),'binary');  }     return buffer.toString('base64');    };
DBase.prototype.xst = function (sarg) {     return new Buffer(sarg,'base64').toString('binary');    };

DBase.prototype.xsn=function(i) {   
var n;
 n=i;
  if(n>9) {         
   n=n-9; return(fc.chr(64+n));
  } else { return(fc.xs(n)) };
}

DBase.prototype.temd=function(i,n) {   //get field out recdata
var ofs,ln; 
 if((n==0)||(n>dat[i].rcnt)) { return(''); }
 ofs=fc.gd(dat[i].rofs,((n-1)*4)+1);
 ln=fc.gd(dat[i].rlen,((n-1)*4)+1);
 //x.log(ofs+'***'+ln);                                                      
 return(fc.mid(dat[i].recdata,ofs,ln));
}
 

DBase.prototype.dkey=function(i,n) { 
var j,k,l,m,a; var s;
 if(i==0) { return(''); }
 if((n==0)||(n>dat[i].rinxcnt)) { return(''); }
 k=0;s='';                                             
 for(j=1;j<=n;j++) {
   if(j==n) {
     l=fc.gd(dat[i].rinx,(k*4)+1); k++;
     for(m=1;m<=l;m++) { s=s+this.temd(i,fc.gd(dat[i].rinx,(k*4)+1)); k++; }
     //x.log('^^^'+s+'<<'+this.xsn(n));
     return(this.xsn(n)+fc.ucase(s)); // 1..9
   }
   k=k+fc.gd(dat[i].rinx,(k*4)+1)+1; 
}
 return('');
}

DBase.prototype.dfieldsx=function(i,n) {  
       if(n==0) {   return(dat[i].rnam+'|'); }      //field names
  else if(n==1) {   return(dat[i].field); }      //field names and types
  else if(n==2) {   return(dat[i].index); }     //index names and fields
  else if(n==3) {   return(dat[i].reclength); } //record length   
  else if(n==4) {           //ofs
    var r=dat[i].rofs; 
    var k=0,m=0,j=dat[i].rcnt;        
    var ss='';
    for(var ii=1;ii<=j;ii++) { ss+=fc.gd(r,((ii-1)*4)+1)+',';    }
    return(fc.xleft(ss));
  } //ofs
  else if(n==5) {           //lenthss
    var r=dat[i].rofs; 
    var k=0,m=1,j=dat[i].rcnt;        
    var ss='';
    for(var ii=2;ii<=j;ii++) { k=fc.gd(r,((ii-1)*4)+1); ss+=(k-m)+','; m=k;     }
    ss+=(k-m)+'';
    return(ss);
  } //ofs
  else if(n==6) { // return(dat[i].rtyp);         //types
    var r=dat[i].rtyp; 
    var ss='';
    for(var ii=0;ii<r.length;ii++) {  ss+=r[ii]+',';      }
    return(fc.xleft(ss));
  } //ofs
  else if(n==7) { // return(dat[i].rtyp);         //types
    var r=dat[i].rofs; 
    var rr=dat[i].rtyp; 
    var k=0,m=1,p=0,j=dat[i].rcnt;        
    var ss='',s1='';
    for(var ii=1;ii<=j;ii++) { 
     if(ii<j) { k=fc.gd(r,((ii)*4)+1); s1=(k-m)+''; m=k; }
     p=fc.gd(r,((ii-1)*4)+1);
     ss+=p+'-'+s1+'-'+rr[ii-1]+',';    
    
    
    }
    return(fc.xleft(ss));
  } //ofs

  
  
  return('');
}
DBase.prototype.ddata=function(i) {  
  //fc.hexbin(dat[i].recdata);
  return(dat[i].recdata);
}
DBase.prototype.ddataput=function(i,ss) {  
  dat[i].recdata=ss;
  //return(dat[i].recdata);
}

DBase.prototype.temdopen=function(i) {  
var ii,j,jj,k,kk,rl,ik,ia,it; var d,r,sa,sb;
               
 dat[i].field=dat[i].findequ('0f'); 
 dat[i].index=dat[i].findequ('0i');
 dat[i].nohd=fc.xis(dat[i].findequ('0x'));
 d=dat[i].findequ('0l');// d:=dat[i].findequ('0l'); // get field & index string
 j=fc.gd(d,1);
 dat[i].rcnt=j; k=5;                        //[j=3 ][ rcnt4] [ rofs4 ] [4 ] [4 ]  rl [4 ] [4 ] [ 4] [rtyp]
//  x.log(j+'>>'+fc.hexbin(d)); //***************

 dat[i].rofs=fc.mid(d,k,j*4); k=k+(j*4); //???? use
  //    x.log(fc.hexbin(dat[i].rofs));

 r=fc.mid(d,k,j*4); 
 rl=0; for(ii=1;ii<=j;ii++) { rl=rl+fc.gd(r,((ii-1)*4)+1);  }
 
 dat[i].recdata=fc.strdup(' ',rl); // reclen
 dat[i].reclength=rl;
 dat[i].rlen=r; k=k+(j*4);  //rl[ ][ ][ ]
 dat[i].rtyp=fc.mid(d,k,j); k=k+j;
//// if xmid(d,k,2)='00' then begin dat[i].Renc:=xmid(d,k,j); k:=k+j; end; //******enc
 dat[i].renc=fc.mid(d,k,j); k=k+j;  //******encryption
//// if xmid(d,k,2)='00' then begin dat[i].Rdec:=xmid(d,k,j); k:=k+j; end; //******dec
 dat[i].rdec=fc.mid(d,k,j); k=k+j;  //******dec?????
 //x.log(fc.hexbin(dat[i].rdec));
 j=fc.gd(d,k); k=k+4;   //**** length fieldnames
 dat[i].rnam=fc.mid(d,k,j); k=k+j; //fieldnames
     
//     x.log(dat[i].reclength);
//     x.log(dat[i].rnam);
 j=fc.gd(d,k); k=k+4;
 dat[i].rinxcnt=j; kk=k;   //*** index count
 for(ii=1;ii<=j;ii++) {
  jj=fc.gd(d,k); k=k+4; k=k+(jj*4);
 }
 dat[i].rinx=fc.mid(d,kk,k-kk); ik=k; //rinx [len2] [fieldno1 ] [fieldno2 ] [len1] [fieldno1] ....
  dat[i].rinxx='';k=0;// Rinxx
  for(ii=1;ii<=dat[i].rinxcnt;ii++) { k=k+1; 
//   it=fc.gd(dat[i].rinx,((k-1)*4)+1);
   it=fc.gt(dat[i].rinx,k);
   for(jj=1;jj<=it;jj++) { k=k+1;
//     dat[i].rinxx+=fc.xs(fc.gd(dat[i].rinx,((k-1)*4)+1))+',';
     dat[i].rinxx+=fc.xs(fc.gt(dat[i].rinx,k))+',';
   }
   dat[i].rinxx=fc.xleft(dat[i].rinxx)+'|';
  }
  dat[i].rinxx=fc.xleft(dat[i].rinxx);
  //x.log(dat[i].rinxx);
 k=ik;                        
 j=fc.gd(d,k); k=k+4;
 dat[i].rinxnam=fc.mid(d,k,j);
 dat[i].nodate=0;
 sa=dat[i].rinxnam;  // ********** date index
  for(ia=1;ia<=fc.itemcount(sa);ia++) {
   sb=fc.itemget(sa,ia);
   
   if(fc.lcase(fc.left(sb,8))=='datetime') { dat[i].nodate=ia; break; } // DateTime Index
  }
 //x.log(ia+':'+dat[i].nodate);
 dat[i].rinxno=1; 
 dat[i].rmcnt=fc.gb(dat[i].rdec,dat[i].rcnt)+1; // number of memos
 sa=this.dkey(i,1);  //keyno.............. (of rec)
 dat[i].rinxlen=sa.length;
// x.log('>'+sa+'<<'+dat[i].rinxlen);
//  x.log(fc.gb(dat[i].rdec,dat[i].rcnt)+'%'+dat[i].rdec.length+'$'+dat[i].rcnt+'$$$$'+fc.hexbin(dat[i].rdec));
//  x.log(ia+'<'+dat[i].rinxx+'+++'+dat[i].rinxnam);

}

DBase.prototype.dopen=function(s) {  
var i,ii,j,jj,k,kk,rl,ino,iresult; var d,r,sa,sb,s1;
 xerr=false;         
 for(i=1;i<xmaxfilehd;i++) { if(dai[i]==0) { break; } }
 if(i>=xmaxfilehd) {  return(0); }
 dat[i]=new Base(this.datafolder); //dir??/
 dat[i].open(s); 
 if(dat[i].berr()>0) { xerr=true; return(0); }
 this.temdopen(i); 
 dai[i]=1; dat[i].hdt=i;
 iresult=i; ino=i;
 //x.log(dat[iresult].findkey('1')+'****');

//********************************** open indexes ***************************
 sb=',';
//x.log(dat[ino].nohd+'<<');
if(dat[ino].nohd!=0) {// new indexes
  for(j=2;j<=dat[ino].nohd;j++) { //s1=fc.right('00'+j,2);
   for(i=1;i<xmaxfilehd;i++) { if(dai[i]==0) { break; } }
   if(i>=xmaxfilehd) { return(0); }
   dat[i]=new Base(this.datafolder); //dir ??
   //if xval(xitemget(s,2))>0 then sa:=xitemget(s,3)+xitemget(s,1) else sa:=slData+xitemget(s,1);
   dat[i].openx(s,j); if(dat[i].berr()>0) { xerr=true; return(0); }
   dai[i]=1;  dat[i].hdt=i;
   sb+=i+',';    
  } //j
  dat[ino].snohd=fc.xleft(sb); //xprint(sb)
//  x.log('>'+dat[ino].snohd+'<');
 }
// x.log(dat[iresult].findkey('1')+'****');
 return(iresult);    
}  

DBase.prototype.bopen=function(s,n) {  if(n===undefined) { n=0; } if(n==1) { n=0; }
var i,ii,j,jj,k,kk,rl,ino,iresult; var d,r,sa,sb,s1;
 xerr=false;       
 for(i=1;i<xmaxfilehd;i++) { if(dai[i]==0) { break; } }
 if(i>=xmaxfilehd) {  return(0); }
 dat[i]=new Base(this.datafolder); //dir??/
 dat[i].openx(s,n); 
 if(dat[i].berr()>0) { xerr=true; return(0); }
 dai[i]=1; dat[i].hdt=i;
 iresult=i; ino=i;
 return(iresult);    
}
DBase.prototype.bclose=function(j) {  dat[j].close();   dai[j]=0; }
DBase.prototype.bcreate=function(sf,ln,n) {  var xt=new Base(this.datafolder); if(ln===undefined) { ln=60; } if(n===undefined) { n=5; } xt.createfile(sf,ln,n);  }
DBase.prototype.bfirst=function(hd) { return(dat[hd].first()); }
DBase.prototype.bnext=function(hd) { return(dat[hd].next()); }
DBase.prototype.blast=function(hd) { return(dat[hd].last()); }
DBase.prototype.bprev=function(hd) { return(dat[hd].prev()); }
DBase.prototype.beof=function(hd) { if(dat[hd].eof()||dat[hd].bof()) { return(true); } else { return(false); } }
DBase.prototype.bfindkey=function(hd,ky) { return(dat[hd].findkey(ky)); } //key  =>
DBase.prototype.bfindequkey=function(hd,ky) { return(dat[hd].findequkey(ky)); } //true/false
DBase.prototype.bfind=function(hd,ky) { return(dat[hd].find(ky)); } // data
DBase.prototype.bfindequ=function(hd,ky) { return(dat[hd].findequ(ky)); }  //data
DBase.prototype.bkey=function(hd) { return(dat[hd].key()); }
DBase.prototype.bdata=function(hd) { return(dat[hd].data()); }
DBase.prototype.binsert=function(hd,ky,sdat) {  dat[hd].insert(ky,sdat); }
DBase.prototype.bdelete=function(hd,ky) { dat[hd].delete(ky); }




DBase.prototype.nclose=function(j) { 
var k,n,m;  
 //dat[j].close(); dai[j]=0; return;
 if(dat[j].nohd==0) {
   dat[j].close();   dai[j]=0; //x.log(j);
 } else { // new index
    for(k=2;k<=dat[j].nohd;k++) { 
     n=fc.xis(fc.itemget(dat[j].snohd,k));
     dat[n].close(); dai[n]=0;   
     //x.log(n+'<<*');
    } 
    dat[j].close();   dai[j]=0;  // x.log(dat[j].nohd+'>'+j+'>'+n);
 } //else
}



DBase.prototype.dclose=function(hd) { 
var i;                  
   if(hd==0) {
     for(i=1;i<xmaxfilehd;i++) { if(dai[i]==1) { this.nclose(i); }   }
   } else { if(hd>0) { this.nclose(hd); } }

}

//DBase.prototype.dindex=function(i,n) { 
// if(i==0) { dat[i].rinxno=1; return(1); }
// if((n==0)||(n>dat[i].rinxcnt)) { return(dat[i].rinxno) }
// dat[i].rinxno=n; //dat[i].Rinxlen:=length(Dkey(i,n));
// return(n);
//}

DBase.prototype.dindexno=function(i,n) { 
 if(i==0) { dat[i].rinxno=1; return(1); }
 if((n==0)||(n>dat[i].rinxcnt)) { return(dat[i].rinxno) }
 dat[i].rinxno=n; //dat[i].Rinxlen:=length(Dkey(i,n));                
 return(n);
}

DBase.prototype.dindex=function(hd,s) { 
var sa,i,ln;
  if(hd==0) { dat[hd].rinxno=1; return(1); }
  ln=s.length;
   for(i=1;i<=fc.itemcount(dat[hd].rinxnam);i++) {
    sa=fc.itemget(dat[hd].rinxnam,i);
    if(fc.lcase(fc.left(sa,ln))==fc.lcase(s)) { dat[hd].rinxno=i; return(i) }
   }
   dat[hd].rinxno=1;
  return(1);
}

DBase.prototype.dinx=function(i,n) { 
 if(dat[i].nohd==0) { return(i); }
   else {
     if(n==1) { return(i); } else  { return(fc.xis(fc.itemget(dat[i].snohd,n))); }
   }
}

DBase.prototype.deof=function(i) { // return(false);
  if(i==0) { return(true); }   //return(false):
 return(dat[this.dinx(i,dat[i].rinxno)].eof);
}       

DBase.prototype.beof=function(i) { 
 if(i==0) { return(true); }
 if((dat[this.dinx(i,dat[i].rinxno)].bof)||(dat[this.dinx(i,dat[i].rinxno)].eof)) { return(true); } else { return(false); }
}
DBase.prototype.dclearx=function(hd) { 
  if(hd==0) { return; }
   dat[hd].recdata=fc.strdup(' ',dat[hd].reclength)+fc.strdup(fc.chr(0),(dat[hd].rmcnt*4));
   //x.log(dat[hd].recdata.length);
}


DBase.prototype.dnnox=function(hd,n) { 
var i,j,k,m;
   m=n-1;
 //x.log(n+':'+dat[hd].rtyp[m]+':'+dat[hd].rcnt);
  if(hd==0) { return(''); }
//   xprint(xs(gt(rofs,n))+':'+xs(gt(rlen,n)));
   if((n==0)||(n>dat[hd].rcnt)) { return(''); }
   if(dat[hd].rtyp[m]=='s') return(fc.mid(dat[hd].recdata,fc.gt(dat[hd].rofs,n),fc.gt(dat[hd].rlen,n)));
   if(dat[hd].rtyp[m]=='d') return(fc.dateswap0(fc.mid(dat[hd].recdata,fc.gt(dat[hd].rofs,n),fc.gt(dat[hd].rlen,n))));
   if(dat[hd].rtyp[m]=='f') return(fc.mid(dat[hd].recdata,fc.gt(dat[hd].rofs,n),fc.gt(dat[hd].rlen,n)));
   if(dat[hd].rtyp[m]=='a') return(fc.mid(dat[hd].recdata,fc.gt(dat[hd].rofs,n),fc.gt(dat[hd].rlen,n)));
   if(dat[hd].rtyp[m]=='b') return(fc.mid(dat[hd].recdata,fc.gt(dat[hd].rofs,n),fc.gt(dat[hd].rlen,n)));
   if(dat[hd].rtyp[m]=='m') {       //x.log('heir'+dat[hd].rdec[m]); 
     j=fc.ascb(dat[hd].rdec[m]);    //x.log(j+'++');
                                   //x.log('%%%%%'+fc.hexbin(dat[hd].rdec))
     k=fc.gt(dat[hd].rofs,n); //x.log(k+'++'+n);
     for(i=1;i<=j;i++) { k=k+fc.gd(dat[hd].recdata,k)+4;  }
     return(fc.mid(dat[hd].recdata,k+4,fc.gd(dat[hd].recdata,k)));
   }
   return('');
//   else result:=xmid(recdata,gt(rofs,n),gt(rlen,n));
//  result:=dat[hd].fields[n].asstring;
}
DBase.prototype.dget=function(hd) { 
 var ss='',sdel=fc.chr(254); //x.log(dat[hd].rcnt+'hello'+dat[hd].rtyp.length);
 for(var i=1;i<=dat[hd].rcnt;i++) { ss+=this.dnnox(hd,i).trim()+sdel; }
 return(fc.xleft(ss)+fc.chr(253));
}

DBase.prototype.dset=function(hd,ss) { //x.log('hier...');
 var sdel=fc.chr(254); //x.log(dat[hd].rcnt+'hello'+dat[hd].rtyp.length);
 for(var i=1;i<=dat[hd].rcnt;i++) { this.dput(hd,i,fc.xitemget(ss,i,sdel)); }
}


DBase.prototype.dnx=function(hd,r) { 
var n;
    if(hd==0) { return(''); }
    n=fc.itemnum(dat[hd].rnam,r); 
    if(n>0) { return(this.dnnox(hd,n)); } else { return(''); }
}


DBase.prototype.dput=function(hd,n,s) { 
var ofs,ln,by,i,j,k,sa,m,sb,ii,sc;
  if(hd==0) { return; } 
  m=n-1;
   ofs=fc.gt(dat[hd].rofs,n);    ln=fc.gt(dat[hd].rlen,n);     by=fc.ascb(dat[hd].rdec[m]);
   if(dat[hd].rtyp[m]=='s') {   dat[hd].recdata=fc.move(dat[hd].recdata,ofs,fc.xl(s,ln)); }
//   x.log(ofs+':'+ln+':'+by+':'+s); return;

   if(dat[hd].rtyp[m]=='f') { dat[hd].recdata=fc.move(dat[hd].recdata,ofs,fc.xcst(s,ln,by)); }
   if(dat[hd].rtyp[m]=='a') { dat[hd].recdata=fc.move(dat[hd].recdata,ofs,fc.xcst(s,ln,by)); }
   if(dat[hd].rtyp[m]=='b') { dat[hd].recdata=fc.move(dat[hd].recdata,ofs,fc.xcst(s,ln,by)); }
   if(dat[hd].rtyp[m]=='d') { dat[hd].recdata=fc.move(dat[hd].recdata,ofs,fc.dateswap1(s)); }
//   if(dat[hd].rtyp[m]=='d') strmove(@RecData[ofs],@xdateswap1(xdateFormatz(s))[1],ln);
   if(dat[hd].rtyp[m]=='m') { // one memo multi....
    j=fc.ascb(dat[hd].rdec[m]); k=fc.gt(dat[hd].rofs,n);
    for(i=1;i<=j;i++) { k=k+fc.gd(dat[hd].recdata,k)+4;  }
    if(k>dat[hd].recdata.length){ dat[hd].recdata=dat[hd].recdata+fc.chrd(0); }
    var sd=dat[hd].recdata; //......[len4]memo[4]memo1[4]memo2[4]..
    var sm=fc.left(sd,k-1);
    var smln=fc.gd(sd,k)
    var sma=fc.right(sd,sd.length-(k+4+smln)+1);
    dat[hd].recdata=sm+fc.chrd(s.length)+s+sma; //dat[hd].recdata;
   }

//  dat[hd].fields[n].asstring:=s;
}


DBase.prototype.dnputx=function(hd,r,s) { 
var n,sa;

    if(hd==0) { return; }
    n=fc.itemnum(dat[hd].rnam,r);
    if(n>0) {this.dput(hd,n,s); }
}




DBase.prototype.dsecond=function(i,ky) {  
//var stkx:array[1..16,1..2] of longint; 
var k,j,l,stkpx; var kyy;
//  for k:=1 to 16 do for j:=1 to 2 do stkx[k,j]:=dat[i].stk[k,j]; stkpx:=dat[i].stkp;
   kyy=fc.right(ky,dat[i].rinxlen);
   //x.log(kyy+':'+ky+'<');
   dat[i].recdata=dat[i].findequ(kyy);//,dat[i].Reclength);
   if(dat[i].nohd==0) { dat[i].findequ(ky); } //**
//  for k:=1 to 16 do for j:=1 to 2 do dat[i].stk[k,j]:=stkx[k,j]; dat[i].stkp:=stkpx;
}


DBase.prototype.dfirst=function(i) {  
var ky,ch,n;         
 if(i==0) { return; }
 for(;;) {

    n=dat[i].rinxno;  
    ky=this.xsn(n); ch=ky[0];
    ky=dat[this.dinx(i,n)].findkey(ky+fc.chr(0));
    if(dat[this.dinx(i,n)].eof) { break; }
    if(ky[0]>ch) { dat[this.dinx(i,n)].eof=true; break; }
    if(n==1) { dat[i].recdata=dat[i].data();  } //,dat[i].Reclength)
    else  { 
     this.dsecond(i,ky); //return;
    }
  break;
 }  
  //x.log(this.deof(i));
 if(this.deof(i)) {   this.dclearx(i); }
}




DBase.prototype.dnext=function(i) {  
var ky,s,ch,n;
 if(i==0) { return; }
    n=dat[i].rinxno;   ky=this.xsn(n); ch=ky[0]; 
    ky=dat[this.dinx(i,n)].next(); 
   // x.log(dat[this.dinx(i,n)].eof+':'+n+':'+this.dinx(i,n)+':'+ky)
    if(dat[this.dinx(i,n)].eof==true) { return; }
    if(ky[0]>ch) { dat[this.dinx(i,n)].eof=true; return; }
    if(n==1) {dat[i].recdata=dat[i].data(); } //,dat[i].Reclength)
    else { this.dsecond(i,ky); }
// if Deof(i) then Dlast(i);
}  




DBase.prototype.dprev=function(i) {  
var ky,s,ch,n;
 if(i==0) { return; }

    n=dat[i].rinxno;   ky=this.xsn(n); ch=ky[0]; 
    ky=dat[this.dinx(i,n)].prev(); 
    if(dat[this.dinx(i,n)].bof) { return; }
    if(ky[0]!=ch) { dat[this.dinx(i,n)].bof=true;dat[this.dinx(i,n)].eof=true; return; }
    if(n==1) {dat[i].recdata=dat[i].data(); } //,dat[i].Reclength)
    else { this.dsecond(i,ky); }
// if Deof(i) then Dfirst(i);
}



DBase.prototype.dlast=function(i) {  
var ky,ch,n;
 if(i==0) { return; }
  for(;;) {
    this.dfirst(i); if(this.deof(i)==true) { break; }
    n=dat[i].rinxno;   ky=this.xsn(n); ch=ky[0]; 
    ky=dat[this.dinx(i,n)].findkey(ky+fc.chr(255));
    ky=dat[this.dinx(i,n)].prevno();
    if(dat[this.dinx(i,n)].bof==true) { break; }
    if(ky[0]>ch) { dat[this.dinx(i,n)].bof=true;dat[this.dinx(i,n)].eof=true; break; }
    if(n==1) {dat[i].recdata=dat[i].data(); } //,dat[i].Reclength)
    else { this.dsecond(i,ky); }
    break;
 }
 if(this.deof(i)) {   this.dclearx(i); }
}

DBase.prototype.dfind=function(i,s) { 
var ky,ch,n;
    if(i==0) { return(false); }
    s=fc.ucase(s);
    n=dat[i].rinxno; ky=this.xsn(n);ch=ky[0];
    ky=dat[this.dinx(i,n)].findkey(ky+s); 
    if(dat[this.dinx(i,n)].eof) { return(false); }
    if(ky[0]>ch) { dat[this.dinx(i,n)].eof=true; return(false); }
    if(n==1) { dat[i].recdata=dat[i].data(); }//,dat[i].Reclength)
    else { this.dsecond(i,ky); }
    return(true);
}

DBase.prototype.dkeyget=function(i) { 
var ky,s,ch,n,result;
    if(i==0) { return(''); }
    n=dat[i].rinxno;   return(fc.xright(this.dkey(i,n)));
    
    ky=this.xsn(n);ch=ky[0]; 
    ky=dat[this.dinx(i,n)].current();
    if(dat[this.dinx(i,n)].eof) { return(''); }
    if(ky[0]>ch) { dat[this.dinx(i,n)].eof=true; return(''); }
    return(ky);
// if Deof(i) then Dlast(i);
}



DBase.prototype.dfindequ=function(i,sa) { 
var ky,r,s,ch,n,ln;
    if(i==0) { return(false); }
    s=fc.ucase(sa);
    n=dat[i].rinxno; ky=this.xsn(n);ch=ky[0];
    r=dat[this.dinx(i,n)].findkey(ky+s); // xprint(']'+r+'['+xs(length(r)));
    if(dat[this.dinx(i,n)].eof) { this.dclearx(i); return(false); }
    if(r[0]>ch) { dat[this.dinx(i,n)].eof=true; this.dclearx(i); return(false); }
 if(n==1) {
     if(r!=(ky+s)) { this.dclearx(i); return(false); }
 } else {
    if((fc.mid(r,1,fc.len(r)-dat[i].rinxlen))!=(ky+s)) { this.dclearx(i); return(false); }
 }
 if(n==1) {dat[i].recdata=dat[i].data(); }
 else { this.dsecond(i,r); }
 return(true);
}

                        
DBase.prototype.dkeyset=function(hd,s) {  //return(false);
var sa,n;  
  if(hd==0) { return(s); }
  n=this.dindexno(hd,0); 
  sa=fc.xl(s,fc.gt(dat[hd].rlen,n));
  return(sa);
}

DBase.prototype.dfindid=function(hd,s) {  //return(false);
var sa,n,sb;
  if(hd==0) { return(false); }
  n=this.dindexno(hd,0); if(n!=1) { this.dindexno(hd,1); }
  sa=fc.xl(s,fc.gt(dat[hd].rlen,1));
//  if xitemcount(xxitemget(Dat[hd].Rinx,1,'|'))>1 then sa:=s;
  sb=this.dfindequ(hd,sa);
  if(n!=1) { this.dindexno(hd,n); }
//  result:=Dfindequ(hd,Dkey(hd,n));
  return(sb);
}

DBase.prototype.dfindfirst=function(hd,s) {  //return(false);
var sa,n,ilen,sb;
 n=dat[hd].rinxno; sa=this.dkey(hd,n); ilen=s.length; 
 if(this.dfind(hd,s)) { 
  for(;;) {               
   if(this.deof(hd)) { break; }
    sb=fc.xright(this.dkey(hd,n));
   if(s!=fc.xl(sb,ilen)) { break; }
   return(true);
  }
 }
  return(false);
}


DBase.prototype.dinsert=function(i) {  //return(false);
var ky,s,sa,sd; var j,fl;
 ky=''; sd='';fl=0;
  this.dnputx(i,'datetime',fc.dateraw());
  sa=dat[i].recdata;
  for(j=1;j<=dat[i].rinxcnt;j++) {
   if(j==1) {
    ky=this.dkey(i,j);
    if(dat[i].findequkey(ky)) { sd=dat[i].data(); fl=1; }
    dat[i].insert(ky,dat[i].recdata);     continue;
   }
   if(fl==1) { //change (if existed)
      dat[i].recdata=sd;
      s=this.dkey(i,j)+ky; dat[this.dinx(i,j)].delete(s);
      dat[i].recdata=sa;
   }
   dat[this.dinx(i,j)].insert(this.dkey(i,j)+ky,'')
  }
  dat[i].findequkey(ky);
}

DBase.prototype.ddelete=function(i) {
var ky,j;
 ky='';
  for(j=1;j<=dat[i].rinxcnt;j++) {
   if(j==1) { ky=this.dkey(i,j); dat[i].delete(ky); continue; }
   dat[this.dinx(i,j)].delete(this.dkey(i,j)+ky);
//x.log(j+':'+dat[i].nodate);
   if(j==dat[i].nodate) {
  this.dnputx(i,'datetime',fc.dateraw());

//    x.log('>>>>'+this.dkey(i,j)+':'+ky); 
//    x.log('>>>>'+':'+ky); 

    dat[this.dinx(i,j)].insert(this.dkey(i,j)+ky,'');
    continue;
   }
  }
}


DBase.prototype.temdcreate=function(sf,si) {
// Rcnt|Rofs...|Rlen...|Rtyp..|Renc...|Rdec...|()Rnam|rinx=[]()...|()...|()..|()Rinxnam
//function TDataLoc.temDcreate(sf,si:string):string;
var sn,sl,st,st1,st2,st3,st4,stem,rofs,rlen,rtyp,renc,rdec,rnam,rnamt,rinx,rinxnam,rinxln;
var r,i,j,k,l,iofs,rcnt,rinxcnt,mcnt,ia,ib,ic,xifloat;
   xifloat=16; rinxln='';
   sl=fc.strdup(' ',4); rcnt=fc.xitemcount(sf,'|'); iofs=1; mcnt=0;
   rofs=fc.space(rcnt*4); rlen=fc.strdup('a',rcnt*4); rnam='';
   rtyp=fc.xbs(fc.space(rcnt));
   renc=fc.xbs(fc.space(rcnt));
   rdec=fc.xbs(fc.space(rcnt));

   for(i=1;i<=rcnt;i++) { r=i-1;
     stem=fc.xitemget(sf,i,'|');
     rnam=rnam+fc.itemget(stem,1)+',';
     st1=fc.itemget(stem,2); rtyp[r]=fc.ascb('s'); st4=fc.chr(0);

     if(st1=='d') { 
      st1='8'; rtyp[i]=fc.ascb('d');
     } else if(st1=='f') {
       st1=fc.xs(xifloat); rtyp[r]=fc.ascb('f'); st3=fc.itemget(stem,5); st4=fc.chr(2);
       if(fc.len(fc.itemget(stem,3))>0) { if(fc.xis(fc.itemget(stem,3))>xifloat) { st1=fc.itemget(stem,3); }}
       if(fc.len(fc.itemget(stem,4))>0) { st4=fc.chr(fc.xis(fc.itemget(stem,4))); }
     } else if(st1=='a') {
       st1=fc.xs(xifloat); rtyp[r]=fc.ascb('f'); st3=fc.xitemget(stem,5); st4=fc.chr(4);
       if(fc.len(fc.itemget(stem,3))>0) { if(fc.xis(fc.itemget(stem,3))>xifloat) { st1=fc.itemget(stem,3); }}
       if(fc.len(fc.itemget(stem,4))>0) { st4=fc.chr(fc.xis(fc.itemget(stem,4))); }
     } else if(st1=='b') {
       st1='21'; rtyp[r]=fc.ascb('f'); st3=fc.xitemget(stem,5); st4=fc.chr(4);
       if(fc.len(fc.itemget(stem,3))>0) { st1=fc.itemget(stem,3); }
       if(fc.len(fc.itemget(stem,4))>0) { st4=fc.chr(fc.xis(fc.itemget(stem,4))); }
     } else if(st1=='m') {
        st1='0'; rtyp[r]=fc.ascb('m');    st4=fc.chr(mcnt); mcnt=mcnt+1;
     }  else { st3=fc.itemget(stem,3); }//encription

     if(fc.len(st3)>0) { renc[r]=fc.ascb('1') } else { renc[r]=fc.ascb('0'); }
     rdec[r]=fc.ascb(st4[0]);
     l=fc.xis(st1);
     rofs=fc.qd(rofs,((i-1)*4)+1,iofs);
     rlen=fc.qd(rlen,((i-1)*4)+1,l);
     iofs=iofs+l;
         //x.log(iofs+'>>'+i+'>>'+stem+'>'+st1+'>'+st3+'>'+fc.ascb(st4)+'>'+st1);

   } // for
   rnamt=fc.xleft(rnam);
   rnam=fc.space(4)+rnamt;
   rnam=fc.qd(rnam,1,fc.len(rnam)-4);
   sl=fc.qd(sl,1,rcnt);
   sl=sl+rofs+rlen+fc.xsb(rtyp)+fc.xsb(renc)+fc.xsb(rdec)+rnam;  //********** record layout
   //rtyp[0]=fc.ascb('A'); rtyp[1]=fc.ascb('F');
   //x.log(fc.hexbin(sl));return;


// ******* index decoding ***************
   rinxcnt=fc.xitemcount(si,'|'); st=fc.space(4);
   rinx=fc.space(4); rinx=fc.qd(rinx,1,rinxcnt);rinxnam=''; ia=0;
   for(i=1;i<=rinxcnt;i++) {
    stem=fc.xitemget(si,i,'|');iofs=fc.itemcount(stem); st2=''; ib=0;
    for(j=2;j<=iofs;j++) {
      st1=fc.itemget(stem,j);
      k=fc.itemnum(rnamt,st1); if(k==0) { break; }
      st=fc.qd(st,1,k); st2=st2+st;
      ib=ib+fc.gd(rlen,((k-1)*4)+1);
    }
    if(j>iofs) {
      st=fc.qd(st,1,iofs-1);
      rinx=rinx+st+st2; rinxnam=rinxnam+fc.itemget(stem,1)+',';
      if(i==1) { ia=ib; ic=ia+1; } else { ic=ia+ib+2; }
      rinxln=rinxln+fc.xs(ic)+',';
    }
   }
   
   rinxnam=fc.xleft(rinxnam); rinxln=fc.xleft(rinxln);
   st=fc.qd(st,1,fc.len(rinxnam)); rinxnam=st+rinxnam;
   sl=sl+rinx+rinxnam; // index out rinx=[]()...|()...|()..
   //x.log(rinxln);
//   x.log(fc.hexbin(rinx));
//   x.log(fc.hexbin(rinxnam));
   return(rinxln+'|'+sl);
}

DBase.prototype.dcreate=function(s) {                                          

var sn,sf,si,sl,sc,sa,sb,sdat,s1,s2,s3,rinxln; 
var ia,ib,i,j,k,ln,kn,hdfil,sfolder;
 
 xerr=false; sdat='';
 sf=s;
   hdfil=this.dopen('gfile',sfolder);
   if(this.dfindid(hdfil,'zz'+sf)) {
     sa=this.dnx(hdfil,'Memo');
   } else { sa=''; }
   this.dclose(hdfil);
   this.dcreatenew(sa);

}
DBase.prototype.dcreatenew=function(sa) {                                          
 //  gserv|No,6|IPname,30|User,30|flag,1|num,a|id,7|read,d|write,b|Datetime,14|Memo,m|Memofile,m#Numberix,No|IDix,ID,flag|Datetimefe,Datetime

//var dd:Tkdbase;   
var sn,sf,si,sl,sc,sa,sb,sdat,s1,s2,s3,rinxln,s; 
var ia,ib,i,j,k,ln,kn,hdfil;
  
 xerr=false; sdat='';
 s=fc.xitemget(sa,1,'|');
 sf=s;
 
// if xval(xitemget(s,2))>0 then sdat:='Common\'
// if xval(xitemget(s,2))>0 then sdat:=xitemget(s,3)
// else sdat:=lData;
//   hdfil=this.dopen('gfile');
//   if(this.dfindid(hdfil,'zz'+sf)) {
//     sa=this.dn(hdfil,'Memo');
//   } else { sa=''; }
//   this.dclose(hdfil);
   
//xprint('>'+sa);
   if(sa=='') { xerr=true; exit; }
// sa:=xget('zz'+s);
 sa=fc.strout(sa,fc.chr(10));
 sa=fc.strout(sa,fc.chr(13));
 sb=fc.strout(fc.xitemget(sa,1,'#'),cr); //layout
 sc=fc.strout(fc.xitemget(sa,3,'#'),cr); //keys
 si=fc.strout(fc.xitemget(sa,2,'#'),cr); if(si.length==0) { return; }
 sn=fc.xitemget(sb,1,'|'); sf=fc.xitemlast(sb,1,'|'); if(sf.length==0) { return; }
 sn=sdat+sn;
 

//
//xprint('>'+sn);
 // si:=sysfind(s+'index');
// sc:=sysfind(s+'create');

   sl=this.temdcreate(sf,si);
   rinxln=fc.xitemget(sl,1,'|');   sl=fc.xitemlast(sl,1,'|');

//  if(xindexfiles==0) {  
   ia=0;
//   for(ib=1;ib<=fc.itemcount(rinxln);ib++) {
//    if(fc.xis(fc.itemget(rinxln,ib))>ia){ ia=fc.xis(fc.itemget(rinxln,ib))+1; }
//   }
//  end else 

   ia=fc.xis(fc.itemget(rinxln,1))+1;

 dd=new Base(this.datafolder);       
  //if(sfolder!==undefined) { dd.xdata=sfolder; } 
  if(fc.len(sc)==0) {
    ln=60; kn=5;
    dd.createfile(sn,ia,kn);
   } else {
    ln=fc.xis(fc.itemget(sc,1));
    kn=fc.xis(fc.itemget(sc,2));
    if(kn<5) {  kn=5; }
    if(ln<10) { ln=10; }
    dd.createfile(sn,ia,kn);
   };
// x.log(ia+':'+rinxln);return;

   dd.open(sn); //add
   dd.insert('0n',sn);
   dd.insert('0f',sf);
   dd.insert('0i',si);
////   if xindexfiles<>0 then dd.insert('0x',xs(xxitemcount(si,'|')));
   dd.insert('0x',fc.xs(fc.xitemcount(si,'|')));
   dd.insert('0l',sl);
   dd.close();
   

// 
//
//// **************** create indexes - separate files ***************
 for(i=2;i<=fc.xitemcount(si,'|');i++) {
  s1=fc.xitemget(si,i,'|'); s2=fc.right('00'+fc.xs(i),2);
  ia=fc.xis(fc.itemget(rinxln,i))+1;
  dd=new Base(this.datafolder);
//  if(sfolder!==undefined) { dd.xdata=sfolder; } 
  dd.createfileindex(sn,ia,kn,'.x'+s2);
   dd.openx(sn,i);
   dd.insert('0n',sn+'.x'+s2);
   dd.insert('0f',fc.itemlast(s1,1));
   dd.insert('0i',fc.itemget(s1,1));
  dd.close(); 
 //x.log(ia+':'+s1);

 }

}

DBase.prototype.mssqlraw = function (res,ssa) {
        //x.log(ssa);
         if(sql===undefined) sql=require('mssql');
        var sdb=fc.xitemget(ssa,1,'|');
        var ss=fc.xitemlast(ssa,1,'|'); 
     //    res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
     //    res.end('hello'); return;

        var config = {
            user: 'sa',
            password: 'Tianw12tianw.', //'Tub350ck',
            server: '127.0.0.1',
            //stream:true,
            database: sdb,
            pool: {
                max: 300,
                min: 0,
                idleTimeoutMillis: 30000
            }
        };
        var connection = new sql.Connection(config, function (err) {
            if (err) {
                console.log('errorConnection:' + err);
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end('[]'); return;
            }

        var request = new sql.Request(connection);
        request.query(ss, function (err, rows) {
            //connection.close();
            if (err) {
                connection.close();
                console.log('errorRequest:' + err);
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end('[]');
            } else {
                connection.close();
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' }); 
                //x.log(JSON.stringify(rows));
                res.end(JSON.stringify(rows));
            }
        });          
        });
        
//        request.on('recordset',function(colums) {   });
//        request.on('recordset',function(row) {   });
//        request.on('error',function(err) {   });
//        request.on('done',function(ret) {   });
    }

//**************************** mssql ****************************************
    // funcstr.prototype.mssqlraw = function (res, ss) {
    //     var config = {
    //         user: 'sa',
    //         password: 'Tianw12tianw.',
    //         server: '127.0.0.1',
    //         database: 'agemr',
    //         pool: {
    //             max: 10,
    //             min: 0,
    //             idleTimeoutMillis: 30000
    //         }
    //     };
    //     var connection = new sql.Connection(config, function (err) {
    //         if (err) {
    //             console.log('error:' + err);
    //             res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
    //             res.end('[]'); return;
    //         }
    //     });
    //     var request = new sql.Request(connection);
    //     request.query(ss, function (err, rows) {
    //         connection.close();
    //         if (err) {
    //             console.log('error:' + err);
    //             res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
    //             res.end('[]');
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'application/octet-stream' }); 
    //           // this.log(JSON.stringify(rows));
    //             res.end(JSON.stringify(rows));
    //         }
    //     });
    // }



DBase.prototype.mysqlraw = function (res,ssa) {
        var sdb=fc.xitemget(ssa,1,'|');
        var ss=fc.xitemlast(ssa,1,'|');
        var connection = mysql.createConnection({
            host: 'localhost',
            port: 8922,
            database:sdb,
            supportBigNumbers:true,
            dateStrings:true,
            user: 'root',
//            password: 'Tub350ck'
//            password: 'tianw12tianw'
            password: ''
        }); 
        connection.connect(function (err) {
            if (err != null) {
                //x.log('error:' + err);
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end('[]'); return;
            } 
        });

        connection.query(ss, function (err, rows) {
            if (err != null) {
                connection.end();
                //x.log('error:' + err);
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end('[]');
            } else {
                connection.end();
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end(JSON.stringify(rows)); 
               // xthis.log(ssa+'>:'+xthis.etick());
            }
        });

}





 
DBase.prototype.qxsqlraw = function (res,ssa) { // fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); if(sdb=='') { fb.pagereturn(res,'[]'); return; }
        var ss=fc.xitemlast(ssa,1,'|'); //ss=this.qconvto(ss);
        var db = new sqlite3.cached.Database(sdb);
    db.serialize(function() {  
       try {
         db.run(ss);  
        // db.close();
         //x.log('OK');   
         fb.pagereturn(res,'[]');
       } catch(e) { 
//        x.log('error'+e.message);
        fb.pagereturn(res,'Error:'+e.message);
       }
     }); 

}       
DBase.prototype.qsqlraw = function (res,ssa) { //fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); 
        var ss=fc.xitemlast(ssa,1,'|');
        
        if(sdb=='') { fb.pagereturn(res,'[]'); return; }
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             //db.close();  
             if (err != null) {
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end('[]');
                console.log(ssa+':error'+err);
            } else {
        //      x.log('>>>'+fc.left(JSON.stringify(rows),100));
                //fc.sleep(100);    
         //       x.log(icnt+':'+fc.etimer()+':'+ss); fc.timer();
                res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
                res.end(JSON.stringify(rows)); 
            }
    });   
   });
}       

DBase.prototype.qsqlkey = function (res,styp,skey,ssa) { //fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); if(sdb=='') { res.writeHead(200, { 'Content-Type': styp });    res.end('');return; }
        var ss=fc.xitemlast(ssa,1,'|');
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                res.writeHead(200, { 'Content-Type': styp });    res.end('');
            } else {
                 //x.log(fc.left(JSON.stringify(rows),100));
                 //x.log('>>:'+fc.left(fb.qconvfrom(rows[0][skey]),50))
                res.writeHead(200, { 'Content-Type': styp });
                res.end(fb.qconvfrom(rows[0][skey])); 
            }
    });   
   });
}       
DBase.prototype.qsqlkeysource = function (res,styp,skey,ssa) { //fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); if(sdb=='') { res.writeHead(200, { 'Content-Type': styp });    res.end('');return; }
        var ss=fc.xitemlast(ssa,1,'|');
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                res.writeHead(200, { 'Content-Type': styp });    res.end('');
            } else {
                 //x.log(fc.left(JSON.stringify(rows),100));
                 //x.log('>>:'+fc.left(fb.qconvfrom(rows[0][skey]),50))
                res.writeHead(200, { 'Content-Type': styp });
                res.end(fc.xst(fb.qconvfrom(rows[0][skey])),'binary'); 
            }
    });   
   });
}       
DBase.prototype.qsqlkeyarea = function (res,req,sp,styp,skey,ssa) { //fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); if(sdb=='') { res.writeHead(200, { 'Content-Type': styp });    res.end('');return; }
        var ss=fc.xitemlast(ssa,1,'|');
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                res.writeHead(200, { 'Content-Type': styp });    res.end('');
            } else {
                 //x.log(fc.left(JSON.stringify(rows),100));
                 //x.log('>>:'+fc.left(fb.qconvfrom(rows[0][skey]),50))
                res.writeHead(200, { 'Content-Type': styp });
                var sa=fb.qconvfrom(rows[0][skey]);
                if(sp=='/jhtmlarea.css') {
                var sb='http://'+req.connection.localAddress+':'+req.connection.localPort+'/jhtmlarea.png'
//                fb.flog(fc.left(fc.xitemrep(sa,sb,2,"'"),300));
                res.end(fc.xitemrep(sa,sb,2,"'")); 
                 } 
                else if(sp=='/jquerytreetable.css') {
                 var sb='http://'+req.connection.localAddress+':'+req.connection.localPort+'/';
                var sc=sb+"toggle-expand-dark.png";  sa=fc.xitemrep(sa,sc,2,"'");  //console.log(sc);
                    sc=sb+"toggle-collapse-dark.png";  sa=fc.xitemrep(sa,sc,4,"'");
                    sc=sb+"toggle-expand-light.png";  sa=fc.xitemrep(sa,sc,6,"'");
                    sc=sb+"toggle-collapse-light.png";  sa=fc.xitemrep(sa,sc,8,"'"); //fb.flog(sa);
                    res.end(sa); 
                 }
                 else { res.end(''); }
            }
    });   
   });
}       





//function getFilesRecursive (folder) {
//    var fileContents = fs.readdirSync(folder),
//        fileTree = [],
//        stats;
// 
//    fileContents.forEach(function (fileName) {
//        stats = fs.lstatSync(folder + '/' + fileName);
// 
//        if (stats.isDirectory()) {
//            fileTree.push({
//                name: fileName,
//                children: getFilesRecursive(folder + '/' + fileName)
//            });
//        } else {
//            fileTree.push({
//                name: fileName
//            });
//        }
//    });
// 
//    return fileTree;
//};


DBase.prototype.baddressip=function() {   return(dataip); }
DBase.prototype.log=function(ss) {  console.log(ss); }
DBase.prototype.datefull=function() {  return(fc.datefull()); }
DBase.prototype.flog = function (ss) { // console.log(ss);
fs.appendFile(__dirname+'/log.txt',fc.datelong()+' '+ss+'\n','binary', function (err) { }); };
DBase.prototype.dlog = function (ss) {  fs.appendFileSync(__dirname+'/dlog.txt',ss+'<br>','binary', function (err) { }); };
DBase.prototype.filereadasc = function (ss) {    var sa = ''; try { sa = fs.readFileSync(ss, 'binary'); return(fc.x64s(sa));  } catch (e) { sa = ''; } return (sa);   }
DBase.prototype.filewriteend = function (sfn,sdat) {  fs.appendFileSync(sfn,sdat,'binary'); };
DBase.prototype.datadir=function() {  return(fc.strrepp(this.datafolderbase,'\\','/')); }
DBase.prototype.fileread = function (ss) {    var sa = ''; try { sa = fs.readFileSync(ss, 'binary');  } catch (e) { sa = ''; } return (sa);   }
DBase.prototype.fexist = function(ss) {    var sa =false; try { sa=fs.existsSync(ss); } catch (e) { sa =false; } return (sa);   }
DBase.prototype.filewrite = function (sfn,sdat) {  fs.writeFileSync(sfn,sdat, 'binary'); }
DBase.prototype.fmkdir = function(ss,smode) {    var sa =''; try { fs.mkdirSync(ss,smode); } catch (e) { sa =''; }    }
DBase.prototype.frmdir = function(path) {   
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        this.frmdir(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
//DBase.prototype.freaddir = function(ss)   {    var sa ='',sb; try   { sb=fs.readdirSync(ss); return(sb.join(',')); } catch (e)   { sa =''; } return(sa);   }

DBase.prototype.freaddir = function(ss) {    var sa ='',sb='',sc='',sl='',sla='';   //fb.log('hello'); //return(ss); 
var curPath='';
try { 
 fs.readdirSync(ss).forEach(function(sfn,index) { //fb.log('hhh'+sfn);
      curPath = ss+sfn; 
      //console.log(sfn+'>>>'+curPath);
      try {
       var ca=fs.lstatSync(curPath);
       if(ca.isDirectory()) { sc=sc+'^'+sfn+','; sla=sla+':'+parseInt(ca.mode.toString(8), 10)+','; } else { sb=sb+sfn+','; sl=sl+ca.size+':'+parseInt(ca.mode.toString(8), 10)+','; }
      } catch(e) { }
 });
  return(sc+sb+'|'+sla+sl);

} catch (e) { sa =''; console.log(curPath+'******************'); return(sc+sb+'|'+sla+sl); } return(sa);   
}

DBase.prototype.baseserver = function() { 
    var ss,sa,sb,sd,sc=''; 
    sa=fc.os.networkInterfaces(); 
    for(var key in sa) { sb=sa[key]; 
      for(var i=0;i<sb.length;i++) { sd=sb[i];  if(sd.family=='IPv4') { ss=sd.address+''; if(ss!='127.0.0.1') sc+=ss+','; } }
     } return(fc.xleft(sc));
}


DBase.prototype.unzip = function(ss) { 
   var sa,sb;
   if(zlib===undefined) {  zlib=require('zlib'); fb.log('hi'+zlib); }
   sa=fb.fileread(ss);
   sb=new Buffer(sa,'binary');
   fb.log('hello'+sb.length+':'); 
   zlib.unzip(sb,function(err,buf) { fb.log('hiieee'+err);
      if(!err) {
          fb.log(buf.toString())
      }
   
   });

}
DBase.prototype.jsformat = function(ss) { 
    if(jsfor===undefined) {   try { jsfor=require('js-beautify').js_beautify; } catch(e) { return(ss); }}
    return(jsfor(ss));
}    
DBase.prototype.jsformatmin = function(ss) { 
    if(jsmin===undefined) {  try { jsmin=require("uglify-js").parser; jsminpro=require("uglify-js").uglify; } catch(e) { return(ss); }}
     
     var ast = jsmin.parse(ss); // parse code and get the initial AST
     
    // return('hello');

     ast = jsminpro.ast_mangle(ast); // get a new AST with mangled names
     ast = jsminpro.ast_squeeze(ast); // get an AST with compression optimizations
     

     return(jsminpro.gen_code(ast));    
}    


DBase.prototype.jstypescriptold = function(ss) { 
    var sa;
    if(jstypes===undefined) {   try { jstypes=require('typescript'); } catch(e) { return(ss); }}
   // var sa = transpileModule(ss, { compilerOptions: compilerOptions, reportDiagnostics:true });
var transpileOptions = {  compilerOptions: {'noImplicitUseStrict':true,'sourceMap':true,'pretty':true}, reportDiagnostics: true};
// var sa = jstypes.transpileModule(ss, transpileOptions);
// console.log(sa.diagnostics);
// return(sa.outputText);
//    sa=jstypes.transpileModule(ss,{'noImplicitUseStrict':true,'sourceMap':true,'pretty':true});
//    return(sa.diagnostics+'***********'+sa.outputText);
// try {
// sa=jstypes.transpile(ss,{'noImplicitUseStrict':true,'sourceMap':true,'pretty':true});
// return(sa);
// } catch(e) {
// console.error(e);
// }

    return(jstypes.transpile(ss,{'noImplicitUseStrict':true,'sourceMap':true,'pretty':true})); //'removeComments':true,
}    
DBase.prototype.jstypescript = function(ss) { 
    var sa;
    if(jstypes===undefined) {   try { jstypes=require('typescript-simple'); } catch(e) { return(ss); }}
    try {
      sa=jstypes(ss); return(sa);
    } catch(e) {
      //console.error(e);
      return(fc.chr(234)+e.message);
        
    }
}    

DBase.prototype.fpath = function(ss) {    var sa =''; try { sa=fs.realpathSync(ss); } catch (e) { sa =''; } return (sa);   }
DBase.prototype.fdelete = function(ss) {    var sa =''; try { fs.unlinkSync(ss); } catch (e) { sa =''; }    }
DBase.prototype.pagereturn = function (res,ss) { res.writeHead(200, { "Content-Type": 'application/octet-stream'}); res.end(ss,'binary'); }
DBase.prototype.returnpage = function (res,ss) { res.writeHead(200, { "Content-Type": 'application/octet-stream'}); res.end(ss,'binary'); }
DBase.prototype.response = function () { return(gres); }
DBase.prototype.fork = function(ss,sparm) {  var res=gres;  var ba=false; 
           var cp=child.fork(ss,[sparm]);
           cp.on('message',function(m) {  ba=true;     fb.pagereturn(res,m);    });
           cp.on('close',function() {  if(ba==false) { fb.pagereturn(res,'[].error'+ss+sparm);  }  });
}
DBase.prototype.cmd = function(ss) {  var res=gres;  var ba=false; 
//{ encoding: 'utf8',timeout: 0,maxBuffer: 200*1024,killSignal: 'SIGTERM',cwd: null,  env: null }   child.exec(ss[,options,]function(err,stdout,stdin) {});
//cwd:currentworkdir,env:process.env
// var ret = jxcore.utils.cmdSync('jx node_modules/typescript/bin/tsc test.ts'); console.log(ret); // { out: 'v Beta-0.3.0.0\n', exitCode: 0 }
 //var ret = jxcore.utils.cmdSync(ss); console.log(ret); // { out: 'v Beta-0.3.0.0\n', exitCode: 0 }
//  console.log(ss); 
 var ret = jxcore.utils.cmdSync(ss);  
 //console.log(ret.out+"<<<"); 
 fb.pagereturn(res,ret.out); 
 return;

 child.exec(ss,function (error, stdout, stderr) {  if (error!== null) { fb.pagereturn(res,stdout);  } else { fb.pagereturn(res,stdout);  }});      
}
DBase.prototype.cmdon = function(ss,sdat) {  var res=gres;  var ba=false; var sky=fc.guidadd(); fb.pagereturn(res,''); fc.stick(); //console.log(fc.guidlen());
//{ encoding: 'utf8',timeout: 0,maxBuffer: 200*1024,killSignal: 'SIGTERM',cwd: null,  env: null }   child.exec(ss[,options,]function(err,stdout,stdin) {});
 var arg=[],i=0;
 for(i=1;i<=fc.itemcount(sdat);i++) { arg[i-1]=fc.itemget(sdat,i); } arg[i-1]=sky;
 var ls=child.spawn(ss,arg); 
 ls.stdout.on('data', function (data) { fb.log('>>>'+data);      }); 
 ls.stderr.on('data', function (data) { fb.flog('err'+data);   });
 ls.on('close', function (code) { fc.guiddel(sky); fb.flog('close:'+fc.etick()); fb.log(icnt+':'+fc.etick()); });
}

DBase.prototype.cmdonwait = function(ss,sdat) {  var res=gres;  var ba=false; var sky=fc.guidadd(); 
//fb.pagereturn(res,''); 
fc.stick(); //console.log(fc.guidlen());
//{ encoding: 'utf8',timeout: 0,maxBuffer: 200*1024,killSignal: 'SIGTERM',cwd: null,  env: null }   child.exec(ss[,options,]function(err,stdout,stdin) {});
 var arg=[],i=0;
 for(i=1;i<=fc.itemcount(sdat);i++) { arg[i-1]=fc.itemget(sdat,i); } arg[i-1]=sky;
 var ls=child.spawn(ss,arg); 
 ls.stdout.on('data', function (data) { fb.log('>>>'+data);      }); 
 ls.stderr.on('data', function (data) { fb.flog('err'+data);   });
 ls.on('close', function (code) { fc.guiddel(sky); fb.flog('close:'+fc.etick()); fb.log(icnt+':'+fc.etick()); fb.pagereturn(res,'ok'+fc.etick()); });
}


DBase.prototype.cmdwait = function(ss,sdat) {  var res=gres;  var ba=false; 
//{ encoding: 'utf8',timeout: 0,maxBuffer: 200*1024,killSignal: 'SIGTERM',cwd: null,  env: null }   child.exec(ss[,options,]function(err,stdout,stdin) {});
 var arg=[];
 for(var i=1;i<=fc.itemcount(sdat);i++) { arg[i-1]=fc.itemget(sdat,i); }
 var ls=child.spawn(ss,arg);
 ls.stdout.on('data', function (data) {  fb.pagereturn(res,data);   }); 
 ls.stderr.on('data', function (data) {   fb.pagereturn(res,data);  });
 ls.on('close', function (code) {   });
}



DBase.prototype.url = function(ss) {  var res=gres;  var ba=false; 
       
         
         urlrequest(ss, function (err, response, body) {
               if(err) { fb.pagereturn(res,''); }
                  else  { fb.pagereturn(res,body); }
         });
}
DBase.prototype.urlpost = function(ss,sdat) {  var res=gres;  var ba=false; 
          var options = {                       
            uri:ss,
            method:'POST',
            json:false, 
            encoding:null,
            body:fc.x64s(sdat)
          };
          urlrequest(options, function (err, response, body) {
               if(err) {  fb.pagereturn(res,''); }
                  else  { fb.pagereturn(res,body);      }
          });
}
DBase.prototype.urlpostplain = function(ss,sdat) {  var res=gres;  var ba=false; 
          var options = {                       
            uri:ss,
            method:'POST',
            json:false, 
//            encoding:"application/x-www-form-urlencoded",
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            body:sdat
          };
          urlrequest(options, function (err, response, body) {
               if(err) {  fb.pagereturn(res,''); }
                  else  { fb.pagereturn(res,body);      }
          });
}
DBase.prototype.urlpostform = function(ss,sdat) {  var res=gres;  var ba=false; 
          var options = {                       
            uri:ss,
            method:'POST',
            json:false, 
            encoding:null,
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            body:sdat
            //multipart: [{'Content-type': 'application/x-www-form-urlencoded',body: sdat}],
            //multipart: [{body: sdat}],
            //multipart: { chunked: false, [{'Content-type': 'application/x-www-form-urlencoded',body: sdat}]},
            
          };
          urlrequest(options, function (err, response, body) {
               if(err) {  fb.pagereturn(res,''); }
                  else  { fb.pagereturn(res,body);      }
          });


        //   urlrequest.post({url:ss, form: {key:sdat}}, function (err, responsec, body) {
        //       fb.log('bac...');
        //       if(err) {  fb.pagereturn(res,''); }
        //           else  { fb.pagereturn(res,body);      }
        //   });
}

DBase.prototype.urlx = function(ss) {  var ress=gres;  var ba=false; 
   //var postData=fc.x64s(sdat);  
   
   var sa=fc.xitemget(ss,3,'/');
   var options = {
      hostname: fc.xitemget(sa,1,':'),
      port: fc.xitemget(sa,2,':'),
      path: '/'+fc.xitemlast(ss,3,'/'),
      method: 'GET',
      headers: {
      'Content-Type': 'application/octet-stream'
      //'Content-Length': postData.length
     }
  };
  
  var req = http.request(options, function(res) {
    // console.log('STATUS: ' + res.statusCode);
     //console.log('HEADERS: ' + JSON.stringify(res.headers));
     //res.setEncoding('utf8');
      //res.setEncoding('binary');
     res.on('data', function (chunk) {  ba=true;  fb.pagereturn(ress,chunk);      });

  });
  req.on('error', function(e) {   fb.pagereturn(ress,'[]error');   });
  //req.write(postData);
  req.end();
}



DBase.prototype.urlpostx = function(ss,sdat) {  var ress=gres;  var ba=false; 
   var postData=fc.x64s(sdat);
   var sa=fc.xitemget(ss,3,'/');
   var options = {
      hostname: fc.xitemget(sa,1,':'),
      port: fc.xitemget(sa,2,':'),
      path: '/'+fc.xitemlast(ss,3,'/'),
      method: 'POST',
      headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': postData.length
     }
  };
  
  var req = http.request(options, function(res) {
    // console.log('STATUS: ' + res.statusCode);
     //console.log('HEADERS: ' + JSON.stringify(res.headers));
     //res.setEncoding('utf8');
      //res.setEncoding('binary');
      var sdat='';
     res.on('data', function (chunk) {  ba=true; sdat+=chunk;       });
     res.on('end', function () {  ba=true;  fb.pagereturn(ress,sdat);      });

  });
  req.on('error', function(e) {   fb.pagereturn(ress,'[]error');   });
  req.write(postData);
  req.end();
}

DBase.prototype.run=function(ss,res,saddr) {  
  var sf;
  var sret='[]';
  var st=fc.left(ss,4); // x.log(st+':'+ process.threadId); 
 //  x.log(fc.left(ss,40));
       if(st=="ZW5k") {  process.exit(0); } // end
  else if(st=="ZXhp") {  
     res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
     res.end('exit');
     process.exit(0); 
  } // end
  else if(st=='ZGJh') {   //dbase
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
     
      //x.log(fc.left(fc.strout(ss,'"'),200));
     gres=res;
     dataip=saddr+''; 
     sf=fc.xjs(ss); //console.log(ss);
     try { sret=sf(); } catch(e) { sret='[]'+e.message; }
    // wait for return
     res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
     res.end(sret);
   }
  else if(st=='Zm9y') { //fork
     ss=fc.xitemlast(fc.xs64(ss),1,'|'); //  this.flog(fc.left(fc.strout(ss,'"'),60));
     gres=res;  dataip=saddr+''; 
     sf=fc.xjs(ss); 
     try { sret=sf(); } catch(e) { 
      sret='[] '+e.message; 
      res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
      res.end(sret);
     }
     // return back fast
  } 
  else if(st=='eXJh') {   //mysql
     ss=fc.xitemlast(fc.xs64(ss),1,'|');   
     this.mysqlraw(res,ss);
//     res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
//     res.end(ss);
  } 
  else if(st=='a3Jh') { //mssql
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
     this.mssqlraw(res,ss);
  } 
  else if(st=='eHFy') { //xqraw
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  //  
     //console.log(ss);
//     ss=fc.strrepp(ss,fc.chr(92)+fc.chr(92),fc.chr(92));
     //console.log(ss);
     this.qxsqlraw(res,ss);
  } 
  else if(st=='cXJh') { //qraw
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
     this.qsqlraw(res,ss);
  } 
  else if(st=='aW1k') { //imd|
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
//     x.log('hello'+ss);
     fs.writeFileSync('temp/'+fc.daterawmil()+'.txt', ss, 'binary');
     res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
     res.end('ok');

  } 
  else {
     res.writeHead(200,{"Content-Type":'application/octet-stream'}); 
     res.end(ss);
   }
}
//********************************************** test ***************************************
//********************************************** test ***************************************
//********************************************** test ***************************************
//********************************************** test ***************************************
//********************************************** test ***************************************
DBase.prototype.test=function() { 
    
    fb.log('hi');
    return;
    var hd=0,sa=''; 
     fb.duse('./demo/'); 
     hd=fb.bopen('ccust',1); 
     
     //sa=fb.bfirst(hd);
       sa=x.bfindkey(hd,'1');
       //x.log(x.bfindequkey(hd,'1003x'));
    //if(fb.bfind(hd,'2FIX')) { sa=fb.bkey(hd); }
    //fb.log('>>'+sa);
//    if(x.bfindequ(hd,'1003')) { sa=x.bkey(hd);
    for(;;) {
     if(fb.beof(hd)) { break; }
     //fb.log(sa+fb.bdata(hd));
     fb.log(sa);
     sa=fb.bnext(hd);
    }
     fb.bclose(hd);


    return;
    fb.duse('./demo/'); 
    hd=fb.dopen('guser');
    sa=fb.dfieldsx(hd,0); 
    fb.log(hd+'hello'+sa);    
    fb.dclose(hd);
    return;
    //x.buse('.'+x.datafolder);
 //  x.bcreate('gnormal');
   this.filewrite('newx.txt','hello how are you');
   x.log('hi');
   process.exit(0);
   return;
// x.log(x.datafolder+'<<');
    var hd=x.bopen('gnormal'); //x.log(hd); 
    for(var i=1001;i<1010;i++) {
     x.binsert(hd,i+'','hello'+i);
    }
    x.bdelete(hd,'1003');
    var sb='',sa=x.bfirst(hd);
       sa=x.bfindkey(hd,'1002');
       //x.log(x.bfindequkey(hd,'1003x'));
     //    if(x.bfind(hd,'1002')) { sa=x.bkey(hd);
//    if(x.bfindequ(hd,'1003')) { sa=x.bkey(hd);
    for(;;) {
     if(x.beof(hd)) { break; }
     x.log(sa+x.bdata(hd));
     sa=x.bnext(hd);

    }
    x.bclose(hd);
}
DBase.prototype.emailread=function() { 
  var s1,s2,s3,s4,s5,s6,s7,s8,s9;
  s1=fb.datadir();
  s2=s1+'email';
  s3=s1+'emailwork';
  if(fb.fexist(s2)==false) { fb.fmkdir(s2); }
  if(fb.fexist(s3)==false) { fb.fmkdir(s3); }
  s4=fb.freaddir(s3); //delete emailwork
  s4=fc.xitemget(s4,1,'|');// fb.log(s4);
  for(var i=1;i<=fc.itemcount(s4);i++) {
      s5=fc.itemget(s4,i); if(s5=='') continue;
      fb.fdelete(s3+'/'+s5)
  }
  
  
//*********************** start testing ******************************  
function emailsub() {  
 setTimeout(function() {
  s4=fb.freaddir(s2); 
 s4=fc.xitemget(s4,1,'|'); 
  for(var i=1;i<=fc.itemcount(s4);i++) {
      s5=fc.itemget(s4,i); if(s5=='') continue;
      s6=fc.fileread(s2+'/'+s5);
      s7=fc.guidjs(); s7=s3+'/'+s5;
      s8=fc.xitemget(s6,1,'|'); //email info
      s9=fc.xitemlast(s6,1,'|'); // file attach
      if(s9!='') fc.filewrite(s7,s9);                      fb.fdelete(s2+'/'+s5)
      fb.emailsend(fc.itemget(s8,1),fc.itemget(s8,2),fc.itemget(s8,3),fc.itemget(s8,4),s7,fc.itemget(s8,5),fc.itemget(s8,6),fc.itemget(s8,7),'587','ex');
      fb.log('>:'+s2+'/'+s5);     
  }
  emailsub();
 },2000);
 
}
emailsub();
  //fb.log('finish')
 
}    

DBase.prototype.emailsend=function(sfr,sto,ssub,sbody,satt,suser,spass,shost,sport,sex) { 
var email = require('emailjs'),sfrr='',sfp=''; 
sfrr='bmssoftwarework@software601.com'; sfp='bms12345678';
sfrr='software1605@gmail.com'; sfp='bms12345678';
sfrr='imddrgulati@gmail.com'; sfp='imd123imd';
sfrr='phillipv@imdnow.com'; sfp='phillip123';
//console.log(sfr,spass);
sfrr=sfr; sfp=spass;


//************ hotmail.com
// var server  = email.server.connect({
//   user:    "username", 
//   password:"password", 
//   host:    "smtp-mail.outlook.com", 
//   tls: {ciphers: "SSLv3"}
// });
//authentication // array of preferred authentication methods (ex: email.authentication.PLAIN, email.authentication.XOAUTH2)

// var emailserv = email.server.connect({
//   user: "imd",
//   password: "tianw12tianw",
//   host: "ttt.imdemrimd.com", 
//   port:587,
//   tls:true
// });  
// var emailserv = email.server.connect({
//  user: 'imddrgulati@gmail.com',
//  password: 'imd123imd',
//  host: 'smtp.gmail.com',
//  ssl: true  
// });

var emailserv = email.server.connect({
 user: sfrr,
 password: sfp,
 host: shost,
 ssl: true,
  port:465
//  authentication: 'XOAUTH2'
});

// var emailserv = email.server.connect({
//   user: sfrr,
//   password: sfp,
//   host: 'smtpout.secureserver.net',
//     tls:true,
//   ssl:     true,
//   authentication : "login"
// });
//console.log('hier');
// var emailserv = email.server.connect({
//  user: 'phillipv@imdnow.com',
//  password: 'phillip123',
//  host: 'smtp.gmail.com',
//   port:465,
//   ssl: true
// });


// var emailserv = email.server.connect({
//  user: 'imdnowcom@gmail.com',
//  password: 'tianw12tianw',
//  host: 'smtp.gmail.com',
  
//   port:465,
//   ssl: true
// //authentication: email.authentication.XOAUTH2

// });
//console.log('xxx<<');
//console.log(email.authentication.PLAIN+'<<');
//  domain:"ttt.imdemrimd.com",
//  authentication: "PLAIN",
//  authentication: 'LOGIN',
//  authentication: 'XOAUTH2',


// var emailserv = email.server.connect({
//   user: suser,
//   password: spass,
//   host: shost, 
//   port:fc.xis(sport),
//   tls:true
// });  


var am=[];
//fb.log(satt);
if(satt!='') { 
 var san=satt;
 var ia=fc.xitemcount(satt,'/'); if(ia>1) { san=fc.xitemget(satt,ia,'/'); }
 am=[ {  data:sbody, alternative:true},  {  path: satt,type: "application/octet-stream", name: san     }   ];
} else {
 am=[ {  data:sbody, alternative:true}  ];    
}
emailserv.send({
  //text: sbody,
  from: sfrr, //sfr
  to: sto,
  cc: '',
  subject: ssub,
  attachment: am
}, function (err, message) {
  //console.log(err || message);
});
 return('OK');
}

//**********************************************************io***************************************************************************
//**********************************************************io***************************************************************************
//**********************************************************io***************************************************************************
//**********************************************************io***************************************************************************
//**********************************************************io***************************************************************************
//**********************************************************io***************************************************************************
//**********************************************************io***************************************************************************
DBase.prototype.iomysqlraw = function (res,ssa) {
        var sdb=fc.xitemget(ssa,1,'|');
        var ss=fc.xitemlast(ssa,1,'|');
        var connection = mysql.createConnection({
            host: 'localhost',
            port: 8922,
            database:sdb,
            supportBigNumbers:true,
            dateStrings:true,
            user: 'root',
//            password: 'Tub350ck'
//            password: 'tianw12tianw'
            password: ''
        }); 
        connection.connect(function (err) {
            if (err != null) {
                res('[]'); return;
            } 
        });

        connection.query(ss, function (err, rows) {
            if (err != null) {
                connection.end();
                res('[]');
            } else {
                connection.end();
                res(JSON.stringify(rows)); 
            }
        });

}



DBase.prototype.iomssqlraw = function (res,ssa) {
         if(sql===undefined) sql=require('mssql');
        var sdb=fc.xitemget(ssa,1,'|');
        var ss=fc.xitemlast(ssa,1,'|'); 
        var config = {
            user: 'sa',
            password: 'Tianw12tianw.', //'Tub350ck',
            server: '127.0.0.1',
            //stream:true,
            database: sdb,
            pool: {
                max: 300,
                min: 0,
                idleTimeoutMillis: 30000
            }
        };
        var connection = new sql.Connection(config, function (err) {
            if (err) {
                console.log('errorConnection:' + err);
                res('[]'); return;
            }

        var request = new sql.Request(connection);
        request.query(ss, function (err, rows) {
            if (err) {
                connection.close();
                console.log('errorRequest:' + err);
                res('[]');
            } else {
                connection.close();
                res(JSON.stringify(rows));
            }
        });          
        });
        
}



DBase.prototype.ioqxsqlraw = function (res,ssa) { // fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); if(sdb=='') { fb.pagereturn(res,'[]'); return; }
        var ss=fc.xitemlast(ssa,1,'|'); //ss=this.qconvto(ss);
        var db = new sqlite3.cached.Database(sdb);
    db.serialize(function() {  
       try {
         db.run(ss);  
         res('[]');
       } catch(e) { 
        res('Error:'+e.message);
       }
     }); 

}       
DBase.prototype.ioqsqlraw = function (res,ssa) { //fb.log(ssa);
        var sdb=fc.xitemget(ssa,1,'|'); 
        var ss=fc.xitemlast(ssa,1,'|');
        if(sdb=='') { fb.pagereturn(res,'[]'); return; }
        var db = new sqlite3.cached.Database(sdb);
      db.serialize(function() {  
        db.all(ss, function(err, rows) {  
             if (err != null) {
                res('[]');
                console.log(ssa+':error'+err);
            } else {
                res(JSON.stringify(rows)); 
            }
    });   
   });
}       


DBase.prototype.iorun=function(ss,res,saddr) {  
  var sf;
  var sret='[]';
  var st=fc.left(ss,4); // x.log(st+':'+ process.threadId); // x.log(fc.left(ss,40));
       if(st=="ZW5k") {  process.exit(0); } // end
  else if(st=="ZXhp") {  
     res('exit');
     process.exit(0); 
  } // end
  else if(st=='ZGJh') {   //dbase
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
     gres=res;
     dataip=saddr+''; 
     sf=fc.xjs(ss); //console.log(ss);
     try { sret=sf(); } catch(e) { sret='[]'+e.message; }
     res(sret);
   }
  else if(st=='Zm9y') { //fork
     ss=fc.xitemlast(fc.xs64(ss),1,'|'); //  this.flog(fc.left(fc.strout(ss,'"'),60));
     gres=res;  dataip=saddr+''; 
     sf=fc.xjs(ss); 
     try { sret=sf(); } catch(e) { 
      sret='[] '+e.message; 
      res(sret);
     }
     // return back fast
  } 
  else if(st=='eXJh') {   //mysql
     ss=fc.xitemlast(fc.xs64(ss),1,'|');   
     this.iomysqlraw(res,ss);
  } 
  else if(st=='a3Jh') { //mssql
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
     this.iomssqlraw(res,ss);
  } 
  else if(st=='eHFy') { //xqraw
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  //  
     this.ioqxsqlraw(res,ss);
  } 
  else if(st=='cXJh') { //qraw
     ss=fc.xitemlast(fc.xs64(ss),1,'|');  
     this.ioqsqlraw(res,ss);
  } 
  else {
      res(ss);
   }
}




  if(sinit===undefined)   { this.dinit();   } else   { this.dinitfolder(sinit);  }

}

 


//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 
//*************************************** server ******************************************************************** 

 

 var fs = require('fs'); 
 //var crypto = require('crypto'); 
 var fc=new basestr();
 var gport=8930;
 var whtt='http';
if(fc.fexist('initstart.txt')) { whtt=fc.fileread('initstart.txt')+''; 
  if(whtt!='') {  whtt=fc.strout(whtt,fc.chr(13)); 
    if(fc.xitemget(whtt,3,fc.chr(10))!='') { gport=fc.xis(fc.xitemget(whtt,3,fc.chr(10))); }
    whtt=fc.xitemget(whtt,1,fc.chr(10)); //http https
  } else { whtt='http'; }
}  
var http = require('http');
 if(whtt=='https') {
  var https = require('https');
  var options = {
    key: fs.readFileSync('./imdkey.pem'),
    cert: fs.readFileSync('./imdcert.pem')
  };
} else {
  var https = require('http');
}
var fb=new DBase();
fb.datafolder=__dirname+'/';
fb.datafolderbase=__dirname+'/';
var icnt=0,icnth=0;  
//******************************creatServer on 8001 ************************************************
process.on('SIGINT', function() { console.log('End'); process.exit(1); });
process.on('uncaughtException',function(err) {  httpserv.close(); console.log('Exception:'+err.message); process.exit(1); }); 
//******************************* server exec ********************************************************
function servervideo(req,res,sp,styp) {
  var path='.'+unescape(sp);
  var stat = fs.statSync(path);
  var total = stat.size;
    
            // console.log(':'+styp+':'+sp+':'+total);
             
  if (req.headers['range']) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total-1;
    var chunksize = (end-start)+1;

//    console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

    var file = fs.createReadStream(path, {start: start, end: end});
    res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
    file.pipe(res);
  } else {
  //  console.log('ALL: ' + total);
    res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
    fs.createReadStream(path).pipe(res);
  }
             
             
             
             
             
        //   fs.readFile('.'+unescape(sp),'binary', function(err,sdat) { //,{'Content-Type':st}
        //      if (err) {  res.writeHead(200,{'Content-Type':styp}); res.end(''); } 
        //          else {  //console.log(sdat.length+'<<');
        //              res.writeHead(200,{'Content-Type':styp});             
        //              res.end(sdat,'binary');  
        //          }  
        //   });
    
}
function serveraction(req,res)    {
        var sp=req.url.split('?')[0]; 
        //console.log(icnt+':'+sp+':..'+req.method); 
     //****************************** receive post************************************************
        if(req.method=='POST') { 
          var sdat=''; 
          req.on('data',function (ss) { sdat+=ss; }); 
          req.on('end', function ()   { 
          //  console.log(icnt+':'+sdat); 
            icnt++; 
//            console.log(icnt+'. '+req.connection.remoteAddress+' - '+fb.datefull());
//            console.log(icnt+'. '+req.connection.localAddress+':'+req.connection.localPort+' - '+fb.datefull());
       // fb.log(icnt+'. '+req.connection.remoteAddress+' - '+fb.datefull());
           fb.run(sdat,res,req.connection.remoteAddress);   
           // res.writeHead(200,{"Content-Type":'text/html'});    res.end('End session...'+req.connection.remoteAddress+' - '+fb.datefull());  
          });               
        } 
        else if(req.method=='PUT') { 
          var sdat=''; 
          req.on('data',function (ss) { sdat+=ss; }); 
          req.on('end', function ()   { 
             //console.log('>>>'+fc.left(sdat,40)); 
            icnt++; 
           var snam=fc.xitemget(sdat,2,'$');  
           if(snam.length>200) { snam='unknown.js'; }
           else if(snam.length==0) { snam='unknown.js'; }
           else { fs.writeFileSync(snam, sdat, 'binary'); }
           console.log(snam);
           res.writeHead(200,{"Content-Type":'text/html'});    res.end(''); 
          });               
        
        }
        else if(req.method=='GET') { 
     //****************************** load web files************************************************
        //console.log(icnt+'>>>'+sp);
             if((sp=='/')||(sp=='/main.dat')) {  fb.qsqlkey(res,'text/html','keyinfo',"bmsdevdb.dat|select keyinfo from js where num='main'");    } //qsqlkey
        else if(fc.itemnum('/socketio.js,/jqueryui19.js,/jqueryui.css,/ace.js,/aes.js,/pdf.js,/pdfworker.js,/genfuncandroid.js,/mode-javascript.js,/jquery182.js,/genstyle.css,/jhtmlarea18.js,/jquerytreetable18.js,/jqueryjqplot.css,/jqueryjqplot18.js',sp)>0) {    fb.qsqlkey(res,'text/javascript','keyinfo',"bmsdevdb.dat|select keyinfo from js where num='"+fc.xitemget(fc.xright(sp),1,'.')+"'");    } //qsqlkey
        else if(fc.itemnum('/favicon.ico,/bms.png,/HICF.png,/logo.png,/IMDLogows.png,/jhtmlArea.png,/back.png,/view.png,/forward.png,/musicnotes.png,/calendar.gif,/find.gif,/infobutton.png,/toggle-expand-dark.png,/toggle-expand-light.png,/toggle-collapse-dark.png,/toggle-collapse-light.png',sp)>0) {    fb.qsqlkeysource(res,'image/png','keyinfo',"bmsdevdb.dat|select keyinfo from source where num='"+fc.xright(sp)+"'");    } //qsqlkey
        else if(fc.itemnum('/jhtmlarea.css,/jquerytreetable.css',sp)>0) {    fb.qsqlkeyarea(res,req,sp,'text/javascript','keyinfo',"bmsdevdb.dat|select keyinfo from js where num='"+fc.xitemget(fc.xright(sp),1,'.')+"'");    } //qsqlkey
        else if(sp=='/') { console.log('empty.............'); }
        else if(fc.itemnum('/jxserver.js,/jxbat,/jxbat.bat',sp)>0) {    res.writeHead(200,{"Content-Type":'text/html'});    res.end('End session...'+req.connection.remoteAddress+' - '+fb.datefull());       }
        else if(sp=='/end') {    res.writeHead(200,{"Content-Type":'text/html'});    res.end('End session...'+req.connection.remoteAddress+' - '+fb.datefull());     process.exit(0);        }
        else if(sp.indexOf('ajaxcallback',0)>=0) { console.log('empty...ajax..........');} 
        else { 
        icnt++; 
//         if(sp=='/favicon.ico') sp='/faviconone.png'; //console.log(icnt+'+++++++'+st+':'+sp);
         var st=fc.lcase(fc.xitemgetback(sp,1,'.'));   
         var styp=st;
         var sn='dat,text/html,html,text/html,xml,text/xml,xsl,text/xsl,css,text/css,js,text/javascript,htm,text/html,ico,image/x-icon,png,image/png,gif,image/gif,jpg,image/jpeg,pdf,application/pdf,zip,application/zip,mp3,audio/mp3,mp4,video/mp4,csv,text/csv';
         var n=fc.itemnum(sn,st); if(n>0) { st=fc.itemget(sn,n+1); } else { st='text/plain'; }
         if((styp=='mp4')||(styp=='mp3')) { servervideo(req,res,sp,st); return; }
//         console.log(icnt+'+++++++'+st+':'+sp);
          fs.readFile('.'+unescape(sp),'binary', function(err,sdat) { //,{'Content-Type':st}
             if (err) {  res.writeHead(200,{'Content-Type':st}); res.end(''); } 
                 else {  //console.log(sdat.length+'<<');
                     res.writeHead(200,{'Content-Type':st});             
                     res.end(sdat,'binary');  
                 }  
          });
        }; //else
        } //GET
        else { //not post/put/get
             res.writeHead(200,{'Content-Type':'text/html'}); res.end('');
        } 
}
if(whtt=='https') {
var httpserv=https.createServer(options, serveraction).listen(gport, '0.0.0.0'); 
} else {
var httpserv=https.createServer(serveraction).listen(gport, '0.0.0.0');     
}
//var httpservh=http.createServer(serveraction).listen(8931, '0.0.0.0'); 
var httpservh=http.createServer(function(req,res) { //sub-server
         var sp=req.url.split('?')[0]; 
              //console.log(icnth+':'+sp+':..'+req.method); 
        if(req.method=='POST') { 
          var sdat=''; 
          req.on('data',function (ss) { sdat+=ss; }); 
          req.on('end', function ()   { 
            icnth++; 
          if(fc.guidsec(fc.xitemget(sdat,1,'|')))  {  sdat=fc.xitemlast(sdat,1,'|');
            fb.run(sdat,res,req.connection.remoteAddress);   
          } else { res.writeHead(200,{'Content-Type':'text/html'}); res.end(''); }
          });               
        } else {
             res.writeHead(200,{'Content-Type':'text/html'}); res.end('');
        }
 }).listen(gport+1, '0.0.0.0'); 

//************************************* io *********************************************************
if(false) {
var io = require('socket.io')(httpserv);
io.on('connection', function(socket){
//   console.log('a user connected');
  socket.on('message', function(msg,iocallback){    
        //socket.emitReply(response);  
      fb.iorun(msg,iocallback,'127.0.0.1')
      //iocallback(msg);
  });
  socket.on('chat', function(msg,iocallback){    
      // socket.emitReply(msg);  
      //fb.iorun(msg,iocallback,'127.0.0.1')
      iocallback(msg);
  });

  socket.on('disconnect', function(){   
      //console.log('......user disconnected');  
       
  });
});
}

//*************************************end  io *********************************************************
// var ts = require('typescript');
// //var source = ts.transpile('class Test {}', compileOptions);
// var source = ts.transpile('class Test {}');
//     fb.log('IP:'+source);

    fb.log('IP:'+fb.baseserver());
    fb.log("Node Server has started on port...."+gport);
    fb.log("Browser link:http://"+fc.itemget(fb.baseserver(),1)+':'+gport+'/main.dat');

     //fb.freaddir('D:/');
//fb.log(fb.jsformatmin('function test() { alert(1100); };')  );  
    //fb.unzip('info.zip');

//    fb.emailread();
//   if(fb.fexist('initstart.txt')==false) {
//     fb.filewrite('jx.exe',fb.fileread('jx.exe'));
//     fb.filewrite('bmsdevdb.dat',fb.fileread('bmsdevdb.dat'));
//     fb.filewrite('initstart.txt','http\n\n8940\ndemo\n');
//     fb.log('Initialize finish.')
//   }    


    fb.test();
//   console.log(__dirname+'/....xx......'+fc.chrb(fc.gb('ABC',1)));
//    fb.test(); 

//************enter*********
;


