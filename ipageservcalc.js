var gfont=0,gifont=0,giwidth=0,gvrecalc=0,gicnt=0,gicntt=0,iwidthname=0,hdmain=0,iwidth12=0,iheight12=0; 
var dat='',g0='',g1='',g2='',g3='',g4='',g5='',glink='',gappdat='',gapp='',gstart='',gprac='',gsess='',gdataget='',gguidkey='',svismain='',spatmain='',spname='',sgender='',spdob='',gvdate='',gvall='',sgrp='',gheadkeep='',ghist='',ghistdate='',gscatid='',spagegen='',scomboinit='',svisitpat='',seditinit='',seditwork='',spagecur='',spagemain='',spagepre='',srecreate='',slabmain='',slocgen=''; 
 
function funcstr() {

    var xltick =process.hrtime(); 
    var xltim = new Date();
    var xltima = new Date();
    var ltim = Number(10); var ltimdiff = Number(10); var threadwork;
    funcstr.prototype.crr = function () { return (String.fromCharCode(13) + String.fromCharCode(10) + ''); };
    funcstr.prototype.crn = function () { return ('\r\n'); };
    funcstr.prototype.cr = function () { return ('\n'); };

    funcstr.prototype.mid = function (ss, n, m) { return (ss.substr(n - 1, m)); };
    funcstr.prototype.left = function (ss, m) { return (ss.substr(0, m)); };
    funcstr.prototype.right = function (ss, m) { return (ss.substr(ss.length - m, m)); };
    funcstr.prototype.lcase = function (ss) { return (ss.toLowerCase()); };
    funcstr.prototype.ucase = function (ss) { return (ss.toUpperCase()); };


    funcstr.prototype.chr = function (n) { return (String.fromCharCode(n)); };
    funcstr.prototype.asc = function (ss) { return (ss.fromCharCode(0)); };
    funcstr.prototype.xasc = function (ss, n) { return (ss.charCodeAt(n)); };
    funcstr.prototype.htmlstr = function (sc) { sc = this.strrep(sc, "&lt;", "<"); sc = this.strrep(sc, "&gt;", ">"); sc = this.strrep(sc, "&quot;", '"'); sc = this.strrep(sc, "&apos;", "'"); sc = this.strrep(sc, "&amp;", "&"); return (sc); }
    funcstr.prototype.strhtml = function (sc) {
        sc = this.strrep(sc, "&", this.chr(247));
        sc = this.strrep(sc, this.chr(247), '&amp;');
        sc = this.strrep(sc, '"', "&quot;");
        sc = this.strrep(sc, "'", "&apos;");
        sc = this.strrep(sc, "<", "&lt;");
        sc = this.strrep(sc, ">", "&gt;");
        return (sc);                                                                          
    }
    funcstr.prototype.isnumber = function (ss) { return (!isNaN(ss)); };
    funcstr.prototype.esc = function (ss) { return (escape(ss)); };
    funcstr.prototype.unesc = function (ss) { return (unescape(ss)); };
    funcstr.prototype.shift = function (ss) { return (ss.shift()); };
    funcstr.prototype.unshift = function (ss, sarg) { return (ss.unshift(sarg)); };
    funcstr.prototype.sortnum = function (ss) { return (ss.sort(function (a, b) { return a - b })); };
    funcstr.prototype.sortnumrev = function (ss) { return (ss.sort(function (a, b) { return b - a })); };
    funcstr.prototype.sort = function (ss) { return (ss.sort()); };
    funcstr.prototype.notdef = function (ss) { if(ss===undefined) { return(true); } else { return(false); } };
    funcstr.prototype.sortstr = function (ss,ch) { 
     var arr=[],sc=''; if(ss=='') { return(ss) }
     for(var k=1;k<=fc.xitemcount(ss,ch);k++) {  arr.push(fc.xitemget(ss,k,ch));  }
     sc=arr.sort()+'';  sc=fc.strrepp(sc,',',ch);
     return(sc);         
    }

    funcstr.prototype.concat = function (ss, sa) { return (ss.concat(sa)); };
    funcstr.prototype.split = function (ss, sa) { return (ss.split(sa)); };
    funcstr.prototype.join = function (ss, sa) { return (ss.join(sa)); };
    funcstr.prototype.pop = function (ss) { return (ss.pop()); };
    funcstr.prototype.push = function (ss, sarg) { return (ss.push(sarg)); };
    funcstr.prototype.reverse = function (ss) { return (ss.reverse()); };
    funcstr.prototype.slice = function (ss, n) { return (ss.slice(n)); };
    funcstr.prototype.xslice = function (ss, n, m) { return (ss.slice(n, m)); };
    funcstr.prototype.ar = function (ss, n) { return (ss[n]); };
    funcstr.prototype.xar = function (ss, n, sn) { ss[n] = sn; };
    funcstr.prototype.evalrun = function (ss, sn) { if(typeof(sn)=='string') { sn='"'+sn+'"'; } if(sn===undefined) sn='';  return(eval('('+ss+')('+sn+')'));     };
    funcstr.prototype.obj = function (ae) { 
     var ln=arguments.length;
       if(ln>1) {    
             if(ln==2) return(ae[arguments[1]]); 
        else if(ln==3) return(ae[arguments[1]][arguments[2]]);
        else if(ln==4) return(ae[arguments[1]][arguments[2]][arguments[3]]);
        else if(ln==5) return(ae[arguments[1]][arguments[2]][arguments[3]][arguments[4]]);
       
      }
    };
    funcstr.prototype.objput = function (ae) { 
     var ln=arguments.length;
       if(ln>1) {    ln--;
             if(ln==1) return(ae=arguments[1]); 
        else if(ln==2) return(ae[arguments[1]]=arguments[2]);
        else if(ln==3) return(ae[arguments[1]][arguments[2]]=arguments[3]);
        else if(ln==4) return(ae[arguments[1]][arguments[2]][arguments[3]]=arguments[4]);
        else if(ln==5) return(ae[arguments[1]][arguments[2]][arguments[3]][arguments[4]]=[arguments[5]]);
       
      }
    };       
funcstr.prototype.objmake = function () { 
    var sa=new Object();
    for (var i = 0; i < arguments.length; i+=2) { 
     sa[arguments[i]]=arguments[i+1]
    }
    return(sa);
};

funcstr.prototype.objrun = function () { 
    var i=arguments.length; 
    var ss=arguments[0];     if(i==1)      return(ss());
    else if(i==2) return(ss(arguments[1]));
    else if(i==3) return(ss(arguments[1],arguments[2])); 
    else if(i==4) return(ss(arguments[1],arguments[2],arguments[3]));
    else if(i==5) return(ss(arguments[1],arguments[2],arguments[3],arguments[4]));
    else if(i==6) return(ss(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]));
};
funcstr.prototype.ascb = function (ss) { var n=0; return(ss.charCodeAt(n)); };
funcstr.prototype.ascw = function (ss) { var n=0; return (ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)); };
funcstr.prototype.ascd = function (ss) { var n=0; return (ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)+(ss.charCodeAt(n+2) << 16)+(ss.charCodeAt(n+3) << 24)); };
funcstr.prototype.ascdd = function (ss) { var n=0;
  var i=ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)+(ss.charCodeAt(n+2) << 16)+(ss.charCodeAt(n+3) << 24); n=n+4;
  var j=ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)+(ss.charCodeAt(n+2) << 16)+(ss.charCodeAt(n+3) << 24);
  return (i+(j*4294967296)); 
};

funcstr.prototype.gb = function (ss, n) { n--; return(ss.charCodeAt(n)); };
funcstr.prototype.gw = function (ss, n) { n--; return (ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)); };
funcstr.prototype.gd = function (ss, n) { n--; return (ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)+(ss.charCodeAt(n+2) << 16)+(ss.charCodeAt(n+3) << 24)); };
funcstr.prototype.gdd = function (ss, n) { n--;       
  var i=ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)+(ss.charCodeAt(n+2) << 16)+(ss.charCodeAt(n+3) << 24); n=n+4;
  var j=ss.charCodeAt(n)+(ss.charCodeAt(n+1)<< 8)+(ss.charCodeAt(n+2) << 16)+(ss.charCodeAt(n+3) << 24);
  return (i+(j*4294967296)); 
};

funcstr.prototype.chrb = function (m) {  var sa=String.fromCharCode(m);  return(sa); };
funcstr.prototype.chrw = function (m) { 
  var i=m & 0x00FF; 
  var sa=String.fromCharCode(i); 
       i=m>>>8; sa+=String.fromCharCode(i);
  return(sa);
};
funcstr.prototype.chrd = function (m) {
  var i=m & 0x00FF; 
  var sa=String.fromCharCode(i); 
       i=((m & 0x0000ff00) >>> 8); sa+=String.fromCharCode(i);
       i=((m & 0x00FF0000) >>> 16); sa+=String.fromCharCode(i);
       i=((m & 0xFF000000) >>> 24); sa+=String.fromCharCode(i);
  return(sa);
};

funcstr.prototype.chrdd=function(m) {        if(m<4294967296) { 
         var sa=this.chrd(m);
         return(sa+this.chrd(0));
       }  else { 
         var MAX_UINT32 = 0x00000000FFFFFFFF;
         var high = 0;
         var signbit= m & 0xFFFFFFFF;
         var low=signbit < 0 ? (m & 0x7FFFFFFF) + 0x80000000 : signbit;
         if (m>MAX_UINT32) {   high = (m - low) / (MAX_UINT32 + 1);     } 
                  var sa=this.chrd(low);
         return(sa+''+this.chrd(high));
       }
}

funcstr.prototype.qb = function (ss, n,m) { n--;
  var sa=String.fromCharCode(m)
  return(ss.substr(0,n)+sa+ss.substring(n+1,ss.length));
};
funcstr.prototype.qw = function (ss, n,m) { n--;
  var i=m & 0x00FF; 
  var sa=String.fromCharCode(i); 
       i=m>>>8; sa+=String.fromCharCode(i);
  return(ss.substr(0,n)+sa+ss.substring(n+2,ss.length));
};
funcstr.prototype.qd = function (ss, n,m) { n--;
  var i=m & 0x00FF; 
  var sa=String.fromCharCode(i); 
       i=((m & 0x0000ff00) >>> 8); sa+=String.fromCharCode(i);
       i=((m & 0x00FF0000) >>> 16); sa+=String.fromCharCode(i);
       i=((m & 0xFF000000) >>> 24); sa+=String.fromCharCode(i);
  return(ss.substr(0,n)+sa+ss.substring(n+4,ss.length));
};
  funcstr.prototype.qdd=function(ss,n,m) { n--;
       if(m<4294967296) { 
         var sa=this.qd(ss,n,m);
         return(this.qd(sa,n+4,0));
       }
       else { 
         var MAX_UINT32 = 0x00000000FFFFFFFF;
         var high = 0;
         var signbit= m & 0xFFFFFFFF;
         var low=signbit < 0 ? (m & 0x7FFFFFFF) + 0x80000000 : signbit;
         if (m>MAX_UINT32) {   high = (m - low) / (MAX_UINT32 + 1);     } 
                  var sa=this.qd(ss,n,low);
         return(this.qd(sa,n+4,high)); 
       }
  }

  funcstr.prototype.hexbin=function(ss,mm) { 
   var hex = '', sa = '',sb='',sc='',sd='',se='',j,k=0,l,n=34,m=20;
   if(arguments.length==2) { m=mm; }
   n=m;j=0;
   for (var i = 0; i < ss.length; i++) { 
    sa=ss.charCodeAt(i).toString(16); 
    if (sa.length == 1) { sa = '0' + sa; };                                                               
    hex += sa+' '; 
    sb=ss[i]; if((sb<' ')&&(sb>'z')) { sb='.'; }
    sc+=sb;
    j++; if(j>=n) {  sd+=hex+sc; hex=''; sc=''; j=0; k++; if(k==3) { n=m+1; } else { n=m; } 
       if(k==4) { k=0; se='----'; } else {se=''; } sd+=se+'\n'; 
    
    }
   }; 
   sd+=hex+sc+'\n';        
   return sd; 
   }
    funcstr.prototype.pow = function (n,m) {return (Math.pow(n,m)); };
    funcstr.prototype.typeget = function (m) {return (typeof m); };

    funcstr.prototype.len = function (ss) { return (ss.length); };
    funcstr.prototype.instr = function (n, ss, ss1) { return (ss.toLowerCase().indexOf(ss1.toLowerCase(), n - 1) + 1) };
    funcstr.prototype.xinstr = function (n, ss, ss1) { return (ss.indexOf(ss1, n - 1) + 1) }
    funcstr.prototype.trim = function (ss) { return (ss.trim()); };
    funcstr.prototype.fil = function (sf, sdb) { if (sdb == '') return (sf); else return ('[' + sdb + '].[dbo].[' + sf + ']'); };
    funcstr.prototype.strrep = function (ss, ss1, ss2) { var sa = ss; for (; ; ) { if (this.xinstr(1, sa, ss1) > 0) { sa = sa.replace(ss1, ss2) } else { break; } } return (sa) };

    funcstr.prototype.strout = function (ss, ss1) { var sa = ss; for (; ; ) { if (this.xinstr(1, sa, ss1) > 0) { sa = sa.replace(ss1, '') } else { break; } } return (sa) };
    funcstr.prototype.strdup = function (ss, n) { var sa = ""; for (var i = 0; i < n; i++) { sa += ss; } return (sa) }
    funcstr.prototype.space = function (n)   { var sa = ""; for (var i = 0; i < n; i++)   { sa +='&nbsp'; } return (sa) }

    funcstr.prototype.strq = function (ss) { var sa = ss; for (; ; ) { if (this.xinstr(1, sa, "'") > 0) { sa = sa.replace("'", String.fromCharCode(96)); } else { break; } } return (sa); };
    funcstr.prototype.strmemo = function (ss) { var sa = ""; sa = this.strrep(ss, '\n', this.chr(255)); sa = this.strrep(sa, this.chr(255), '\r\n'); return (sa); }
    funcstr.prototype.tohex = function (ss) { var hex = '', sa = ''; for (var i = 0; i < ss.length; i++) { sa = ss.charCodeAt(i).toString(16); if (sa.length == 1) { sa = '0' + sa; }; hex += sa; }; return hex; }
    funcstr.prototype.tosend = function (ss) {
        var sa = '';
        var ch = String.fromCharCode(127);
        var cc = String.fromCharCode(126);
        var ca = String.fromCharCode(0);
        var cb = String.fromCharCode(255);
        var cd = String.fromCharCode(1);
        for (var i = 0; i < ss.length; i++) {
            if (ss[i] == cb) { sa += cc + cd; continue; }
            if (ss[i] == cc) { sa += cc + ca; continue; }
            if (ss[i] > cc) { sa += ch + String.fromCharCode(ss.charCodeAt(i) - 127); } else { sa += ss[i]; }
        }
        return (sa);
    }  

    funcstr.prototype.sendto = function (ss) {
        var sa = '';
        var ch = String.fromCharCode(127);
        var cc = String.fromCharCode(126);
        var ca = String.fromCharCode(0);
        var cb = String.fromCharCode(255);
        var cd = String.fromCharCode(1);
        var i = 0;
        for (; ; ) {
            if (i >= ss.length) break;
            if (ss[i] == ch) { i++; sa += String.fromCharCode(ss.charCodeAt(i) + 127); i++; continue; }
            if (ss[i] == cc) { i++; if (ss.charCodeAt(i) == 0) { sa += cc; } else { sa += cb; } i++; continue; }
            sa += ss[i]; i++;
        }
        return (sa);
    }  
 funcstr.prototype.xbs = function (ss) {  var bb=new Uint8Array(ss.length);    for(var i=0;i<ss.length;i++) {  bb[i]=ss.charCodeAt(i);  }  return(bb); };
 funcstr.prototype.xxsb = function (bb) {  return String.fromCharCode.apply(null, bb); };  funcstr.prototype.xsb = function (bb) {  var sa='';   for (var i=0;i<bb.length;i++) { sa+=String.fromCharCode(bb[i]); }  return(sa); }

 funcstr.prototype.xsutf8 = function(ss) {
        var ba=this.xbs(ss);  
        var j = 0, k = 0;
        var sa=''; for(var i=0;i<ba.length;i++) { sa+=ba[i]+'-'; } fc.log(sa);
        for (;;)
        {  
            if (k >= ba.length) { break; }
                        if (ba[k] == 194) { k++; }
            if (ba[k] == 195) { k++; ba[j]=(ba[k] + 64); k++; j++; continue; }
            ba[j] = ba[k]; k++; j++;
        }
     return(this.xsb(ba));
 }
 funcstr.prototype.xsutf8x = function(bytes) {
    var out = [], pos = 0, c = 0;               
  fc.log(bytes);
  fc.log(bytes+'<<'+bytes.length);
  while (pos < bytes.length) {
    var c1 = bytes[pos++];
      fc.log(c1+'......'+String.fromCharCode(c1));
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
      fc.log(c1+'...'+String.fromCharCode(c1));
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode(
          (c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  fc.log('>>>'+out.join(''));
  return out.join('');
};


    funcstr.prototype.strreppx = function (ss, ss1, ss2) {
        var n = 0;
        for (; ; ) {
            n = ss.indexOf(ss1, n); if (n < 0) break;
            ss = this.left(ss, n) + ss2 + ss.substr(n + 1, ss.length - n + 1); n = n + ss2.length;
        }
        return (ss);
    }                                                                                         
    funcstr.prototype.strreppxa = function (ss, ss1, ss2) { var n = 0, m = 0, sa = ''; for (; ; ) { n = ss.indexOf(ss1, m); if (n < 0) { sa += ss.substr(m, ss.length - m); break; } sa += ss.substring(m, n) + ss2; m = n + ss1.length; } return (sa); }
    funcstr.prototype.strqq = function (ss) {
        ss = this.strrepp(ss, String.fromCharCode(255), String.fromCharCode(255, 67));
        ss = this.strrepp(ss, String.fromCharCode(248), String.fromCharCode(255, 68));
        ss = this.strrepp(ss, String.fromCharCode(249), String.fromCharCode(255, 69));
        ss = this.strrepp(ss, '"', String.fromCharCode(255, 65));
        ss = this.strrepp(ss, '\\', String.fromCharCode(255, 66));
        return (ss);
    }                                                                                                      

    funcstr.prototype.strrepp = function (ss, ss1, ss2) {
     var n = 0, m = 0, sa = ''; 
     for (;;) {
       n = ss.indexOf(ss1, m); 
       if (n < 0) { sa += ss.substr(m, ss.length - m); break; } 
       sa += ss.substring(m, n) + ss2; 
       m = n + ss1.length; 
      } 
      return (sa); 
    }                                                      
    funcstr.prototype.strrepl = function (ss, ss1, ss2) {
     var n = 0, m = 0, sa = ''; 
     for (;;) {
       n = ss.toLowerCase().indexOf(ss1.toLowerCase(), m); 
       if (n < 0) { sa += ss.substr(m, ss.length - m); break; } 
       sa += ss.substring(m, n) + ss2; 
       m = n + ss1.length; 
      } 
      return (sa); 
    }

    funcstr.prototype.strsend = function (ss) {                                       
        var i = 0, n = 0;
        ss = this.strrepp(ss, String.fromCharCode(255), String.fromCharCode(255, 67));
        ss = this.strrepp(ss, String.fromCharCode(248), String.fromCharCode(255, 68));
        ss = this.strrepp(ss, String.fromCharCode(249), String.fromCharCode(255, 69));
        ss = this.strrepp(ss, '"', String.fromCharCode(255, 65));
        ss = this.strrepp(ss, '\\', String.fromCharCode(255, 66));
        return (ss);
    }
    funcstr.prototype.sendstr = function (ss) {
        var i = 0, n = 0;
        ss = this.strrepp(ss, String.fromCharCode(255, 68), String.fromCharCode(248));
        ss = this.strrepp(ss, String.fromCharCode(255, 69), String.fromCharCode(249));
        ss = this.strrepp(ss, String.fromCharCode(255, 67), String.fromCharCode(255));

                                                                                            

        return (ss);
    }


    funcstr.prototype.xl = function (s,ln) { if(s.length>=ln) { return(this.mid(s,1,ln)); }  return(s+this.strdup(' ',ln-s.length));   }
    funcstr.prototype.xleft = function (ss) { if (ss.length > 0) { return (ss.substring(0, ss.length - 1)); } else { return (''); } };
    funcstr.prototype.xright = function (ss) { if (ss.length > 0) { return (ss.substr(1, ss.length - 1)); } else { return (''); } };
    funcstr.prototype.rightback = function (ss, n) { if (ss.length > 0) { return (ss.substr(n - 1, ss.length - n + 1)); } else { return (''); } };
    funcstr.prototype.itemcount = function (ss) { var sxa = ss.split(','); return (sxa.length); };
    funcstr.prototype.xitemcount = function (ss, ssa) { var sxa = ss.split(ssa); return (sxa.length); };
    funcstr.prototype.itemget = function (ss, n) { var sxa = ss.split(','); if (n > sxa.length) return (""); else return (sxa[n - 1]); };
    funcstr.prototype.xitemget = function (ss, n, ssa) { var sxa = ss.split(ssa); if (n > sxa.length) return (""); else return (sxa[n - 1]); };
    funcstr.prototype.itemgetback = function (ss, n) { var sxa = ss.split(','); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };
    funcstr.prototype.xitemgetback =  function (ss, n, ssa) { var sxa = ss.split(ssa); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };
    funcstr.prototype.xitemgetfirst = function (ss, n, ssa) { var sxa = ss.split(ssa); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };
    funcstr.prototype.itemrep = function (ss, ssb, n) { var sxa = ss.split(','); sxa[n - 1] = ssb; return (sxa.join(',')); };
    funcstr.prototype.xitemrep = function (ss, ssb, n, ssa) { var sxa = ss.split(ssa); sxa[n - 1] = ssb; return (sxa.join(ssa)); };
    funcstr.prototype.itemdel = function (ss, n) { var sxa = ss.split(','); sxa.splice(n - 1, 1); return (sxa.join(',')); };
    funcstr.prototype.xitemdel = function (ss, n, ssa) { var sxa = ss.split(ssa); sxa.splice(n - 1, 1); return (sxa.join(ssa)); };
    funcstr.prototype.itemins = function (ss, sbb, n) { var sxa = ss.split(','); sxa.splice(n - 1, 0, sbb); return (sxa.join(',')); };
    funcstr.prototype.xitemins = function (ss, sbb, n, ssa) { var sxa = ss.split(ssa); sxa.splice(n - 1, 0, sbb); return (sxa.join(ssa)); };
    funcstr.prototype.itemlast = function (ss, n) { var sxb, sxa = ss.split(','); sxb = sxa.slice(n, sxa.length); return (sxb.join(',')); };
    funcstr.prototype.xitemlast = function (ss, n, ssa) { var sxb, sxa = ss.split(ssa); sxb = sxa.slice(n, sxa.length); return (sxb.join(ssa)); };
    funcstr.prototype.itemfirst = function (ss, n) { var sxb, sxa = ss.split(','); sxb = sxa.slice(0, sxa.length - n); return (sxb.join(',')); };
    funcstr.prototype.xitemfirst = function (ss, n, ssa) { var sxb, sxa = ss.split(ssa); sxb = sxa.slice(0, sxa.length - n); return (sxb.join(ssa)); };
    funcstr.prototype.itemleft = function (ss, n, ssa)   { var sxb,sxa,ln=arguments.length;  if(ln!=3)   { ssa=','; }  sxa = ss.split(ssa); sxb = sxa.slice(0, n); return (sxb.join(ssa)); };
    
    funcstr.prototype.itemnum = function (ss, sa) { var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(','); for (i = 0; i < s1.length; i++) { if (s2 == s1[i]) { j = i + 1; break; } }; return (j); };
    funcstr.prototype.xitemnum = function (ss, sa, sb)   { var j = 0,  i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(sb); for (i = 0; i < s1.length; i++) { if (s2 == s1[i]) { j = i + 1; break; } }; return (j); };
    funcstr.prototype.itemnumin = function (ss, sa, sb)  {  var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(',');  for (i = 0; i < s1.length; i++) { if (this.instr(1,s1[i],s2)>0) { j = i + 1; break; }  }; return (j);  };
    funcstr.prototype.xitemnumin = function (ss, sa, sb) {  var j = 0, i, s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(sb);  for (i = 0; i < s1.length; i++) { if (this.instr(1,s1[i],s2)>0) { j = i + 1; break; }  }; return (j);  };
    
    funcstr.prototype.tleft = function (ss, n, ssa)   { var sxb,sxa,ln=arguments.length;  if(ln!=3)   { ssa=','; }  sxa = ss.split(ssa); sxb = sxa.slice(0, n); return (sxb.join(ssa)); };
    funcstr.prototype.tget = function (ss, n, ssa) { var sxa,ln=arguments.length;  if(ln!=3) { ssa=','; } sxa = ss.split(ssa); if(n>sxa.length) return(''); else return(sxa[n-1]); }
    funcstr.prototype.tcount = function (ss, ssa) { var sxa,ln=arguments.length;  if(ln!=2) { ssa=','; }  sxa = ss.split(ssa); return (sxa.length); };
    funcstr.prototype.trep = function (ss, ssb, n, ssa) { var sxa,ln=arguments.length;  if(ln!=4) { ssa=','; }  sxa = ss.split(ssa); sxa[n - 1] = ssb; return (sxa.join(ssa)); };
    funcstr.prototype.tdel = function (ss, n, ssa) { var sxa,ln=arguments.length;  if(ln!=3) { ssa=','; }  sxa = ss.split(ssa); sxa.splice(n - 1, 1); return (sxa.join(ssa)); };
    funcstr.prototype.tins = function (ss, sbb, n, ssa) { var sxa,ln=arguments.length;  if(ln!=4) { ssa=','; }  sxa = ss.split(ssa); sxa.splice(n - 1, 0, sbb); return (sxa.join(ssa)); };
    funcstr.prototype.tlast = function (ss, n, ssa) { var sxb,sxa,ln=arguments.length;  if(ln!=3) { ssa=','; }  sxa = ss.split(ssa); sxb = sxa.slice(n, sxa.length); return (sxb.join(ssa)); };
    funcstr.prototype.tfirst = function (ss, n, ssa) { var sxb,sxa,ln=arguments.length;  if(ln!=3) { ssa=','; }  sxa = ss.split(ssa); sxb = sxa.slice(0, sxa.length - n); return (sxb.join(ssa)); };
    funcstr.prototype.tnum = function (ss, sa, sb) { var j = 0, i,s1,s2,ln=arguments.length;  if(ln!=3) { sb=','; }  s2 = sa.toLowerCase(); s1 = ss.toLowerCase().split(sb); for (i = 0; i < s1.length; i++) { if (s2 == s1[i]) { j = i + 1; break; } }; return (j); };
    funcstr.prototype.tnumin = function (ss, sa, sb) {  var j = 0, i,s1,s2,ln=arguments.length;  if(ln!=3) { sb=','; }  s2 = sa.toLowerCase(), s1 = ss.toLowerCase().split(sb);  for (i = 0; i < s1.length; i++) { if (this.instr(1,s1[i],s2)>0) { j = i + 1; break; }  }; return (j);  };
    funcstr.prototype.tgetback = function (ss, n, ssa) { var sxa,ln=arguments.length;  if(ln!=3) { ssa=','; } sxa = ss.split(ssa); var m = sxa.length; if (n > m) return (""); else return (sxa[m - n]); };


    funcstr.prototype.xsi = function (ss) { return (ss + ""); };
    funcstr.prototype.xsd = function (ss) { return (ss + ""); };
    funcstr.prototype.xsh = function (ss) { return (ss + ""); };
    funcstr.prototype.xsn = function (ss) { return (ss + ""); };
    funcstr.prototype.xsa = function (ss) { return (ss + ""); };
    funcstr.prototype.xis = function (ss) { var n=parseInt(ss); if(isNaN(n)) return(0); else return(n); };

    funcstr.prototype.xls = function (ss) { return (Number(ss)); };
        funcstr.prototype.xds = function (ss) { var n=parseFloat(ss);  if(isNaN(n)) return(0); else return(n); };
    funcstr.prototype.xhs = function (ss) { return ((ss).toString(16)); };
    funcstr.prototype.xns = function (sarg) { return (xds(sarg).toFixed(2) + ''); };
    funcstr.prototype.xnd = function (sarg) { return (sarg.toFixed(2) + ''); };
    funcstr.prototype.xas = function (sarg) { return (xds(sarg).toFixed(4) + ''); };
    funcstr.prototype.xad = function (sarg) { return (sarg.toFixed(4) + ''); };

    funcstr.prototype.x64s = function (sarg) {  var buffer;  if(sarg instanceof Buffer) { buffer=sarg; } else {  buffer=new Buffer(sarg.toString(),'binary');  }     return buffer.toString('base64');    };
    funcstr.prototype.xs64 = function (sarg) {     return new Buffer(sarg,'base64').toString('binary');    };
    funcstr.prototype.xts = function (sarg) {  var buffer;  if(sarg instanceof Buffer) { buffer=sarg; } else {  buffer=new Buffer(sarg.toString(),'binary');  }     return buffer.toString('base64');    };
    funcstr.prototype.xst = function (sarg) {     return new Buffer(sarg,'base64').toString('binary');    };
    funcstr.prototype.stick = function () {      xltick=process.hrtime(); };
    funcstr.prototype.etick = function () {  var diff=process.hrtime(xltick); return(((diff[0]*1e9+diff[1])/1e6)+''); };

    
                    funcstr.prototype.xascs = function (ss) { var sa='',ch=fc.chr(255); for(var i=0;i<ss.length;i++) { if(ss[i]>ch) { sa+=' '; } else { sa+=ss[i]; } } return(sa); };
funcstr.prototype.xhexs = function (ss) { var sa=''; for(var i=0;i<ss.length;i++) {    sa+=ss.charCodeAt(i).toString(16);    } return(sa); };


    funcstr.prototype.xsobj = function (sarg) { return (JSON.stringify(sarg)); };
    funcstr.prototype.xobjs = function (sarg) {  return (JSON.parse(sarg)); };
    funcstr.prototype.xsj = function (obj) {   return JSON.stringify(obj,function(key, value) { return (typeof value === 'function' ) ? value.toString() : value;  });  };
    funcstr.prototype.xjs = function (str) {   return JSON.parse(str,function(key, value){ if(typeof value != 'string') return value; return (value.substring(0,8) == 'function') ? eval('('+value+')') : value; }); };
    

    funcstr.prototype.xsdate = function (sa) { return ((sa.getMonth() + 1) + '/' + sa.getDate() + '/' + sa.getFullYear()); };
    funcstr.prototype.xsdatetime = function (sa) { return ((sa.getMonth() + 1) + '/' + sa.getDate() + '/' + sa.getFullYear() + ' ' + sa.getHours() + ':' + sa.getMinutes() + ':' + sa.getSeconds()); };
    funcstr.prototype.pause = function (millis) { var date = new Date(); var curDate = null; do { curDate = new Date(); } while (curDate - date < millis); };
    funcstr.prototype.sleep = function (ms) { ms += new Date().getTime(); while (new Date() < ms) { } };
    funcstr.prototype.eventgo = function () { eventgovar = setInterval("xeventgo()", 10) };

    funcstr.prototype.timer = function () { xltim = new Date(); };
    funcstr.prototype.timera = function () { xltima = new Date(); };
    funcstr.prototype.tadj = function (ss) { return (this.right('00' + ss, 2)); };
    funcstr.prototype.etimer = function () { var curDate = new Date(); return (curDate - xltim); };
    funcstr.prototype.etimera = function () { var curDate = new Date(); return (curDate - xltima); };
    funcstr.prototype.date = function () { var sa = new Date(); return (sa.getDate() + '.' + (sa.getMonth() + 1) + '.' + this.right(sa.getFullYear() + '', 2)); };
    funcstr.prototype.dateformatex = function (sarg) { var sa = new Date(sarg); return (sa.getFullYear() + '.' + this.tadj(sa.getMonth() + 1) + '.' + this.tadj(sa.getDate()) + ' ' + this.tadj(sa.getHours()) + ':' + this.tadj(sa.getMinutes()) + ':' + this.tadj(sa.getSeconds())); };
    funcstr.prototype.dateswap = function (ss) { return (this.xitemget(ss, 3, '.') + '.' + this.xitemget(ss, 2, '.') + '.' + this.xitemget(ss, 1, '.')); };
    funcstr.prototype.dateswapus = function (ss) { return (this.xitemget(ss, 2, '.') + '/' + this.xitemget(ss, 3, '.') + '/' + this.xitemget(ss, 1, '.')); };
    funcstr.prototype.zone = function (ss) { ss.setHours(ss.getHours()+(ss.getTimezoneOffset()/60)); return(ss);};
    funcstr.prototype.dateus = function () { var sa = new Date(); return (this.tadj(sa.getMonth() + 1) + '/' + this.tadj(sa.getDate()) + '/' + sa.getFullYear()); };
    funcstr.prototype.dateuse = function () { var sa = new Date(); return (sa.getFullYear()+'-'+this.tadj(sa.getMonth() + 1) + '-' + this.tadj(sa.getDate())); };
    funcstr.prototype.datetimeuse = function () { var sa = new Date(); return (sa.getFullYear()+'-'+this.tadj(sa.getMonth() + 1) + '-' + this.tadj(sa.getDate())+'T'+this.tadj(sa.getHours()) + ':' + this.tadj(sa.getMinutes()) + ':' + this.tadj(sa.getSeconds()) + '.' + this.right('000' + sa.getMilliseconds(), 3)+'Z'); };
    funcstr.prototype.dateput = function (ss) { var sa = fc.zone(new Date(ss)); return (this.tadj(sa.getMonth() + 1) + '/' + this.tadj(sa.getDate()) + '/' + sa.getFullYear()); };
    funcstr.prototype.dateget = function (ss) { var sa=fc.xitemget(ss,1,' '); return(fc.xitemget(sa,3,'/')+'-'+this.tadj(fc.xitemget(sa,1,'/'))+'-'+this.tadj(fc.xitemget(sa,2,'/'))); }
    funcstr.prototype.datetimeget = function (ss) { var sa=fc.xitemget(ss,1,' '); var sb=new Date();    return(fc.xitemget(sa,3,'/')+'-'+this.tadj(fc.xitemget(sa,1,'/'))+'-'+this.tadj(fc.xitemget(sa,2,'/'))+'T'+this.tadj(sb.getHours()) + ':' + this.tadj(sb.getMinutes()) + ':' + this.tadj(sb.getSeconds()) + '.' + this.right('000' + sb.getMilliseconds(), 3)+'Z'); }
    funcstr.prototype.datetimeput = function (ss) { var sa =fc.zone(new Date(ss)); return (this.tadj(sa.getMonth() + 1) + '/' + this.tadj(sa.getDate()) + '/' + sa.getFullYear()+' '+sa.getHours() + ':' + sa.getMinutes() + ':' + sa.getSeconds()); };
    funcstr.prototype.datetime = function () { var sa = new Date(); return ((sa.getMonth() + 1) + '/' + sa.getDate() + '/' + sa.getFullYear() + ' ' + sa.getHours() + ':' + sa.getMinutes() + ':' + sa.getSeconds()); };
    funcstr.prototype.time = function () { var sa = new Date(); return (this.tadj(sa.getHours()) + ':' + this.tadj(sa.getMinutes()) + ':' + this.tadj(sa.getSeconds()) + '.' + this.right('000' + sa.getMilliseconds(), 3)); };
    funcstr.prototype.datefull = function () { var sa = new Date(); return (sa.getFullYear() + '-' + this.tadj(sa.getMonth() + 1) + '-' + this.tadj(sa.getDate())); };
    funcstr.prototype.timefull = function () { var sa = new Date(); return (this.tadj(sa.getHours()) + '-' + this.tadj(sa.getMinutes()) + '-' + this.tadj(sa.getSeconds()) + '-' + this.right('000' + sa.getMilliseconds(), 3)); };
    funcstr.prototype.datelong = function () { var sa = new Date(); return (sa.getFullYear() + '-' + this.tadj(sa.getMonth() + 1) + '-' + this.tadj(sa.getDate())    +' '+this.tadj(sa.getHours()) + ':' + this.tadj(sa.getMinutes()) + ':' + this.tadj(sa.getSeconds())     ); };
    funcstr.prototype.datedisk = function () { var sa = new Date(); return (sa.getFullYear() + '_' + this.tadj(sa.getMonth() + 1) + '_' + this.tadj(sa.getDate())    +'_'+this.tadj(sa.getHours()) + this.tadj(sa.getMinutes())  + this.tadj(sa.getSeconds())     ); };

    funcstr.prototype.year = function () { var sa = new Date(); return (this.right(sa.getFullYear() + '', 2)); };
    funcstr.prototype.yearfull = function () { var sa = new Date(); return (sa.getFullYear()); };
    funcstr.prototype.month = function () { var sa = new Date(); return ((sa.getMonth() + 1) + ''); };
    funcstr.prototype.dateage = function (sarg) { var sa = new Date(); return (Number(sa.getFullYear()) - Number(new Date(sarg).getFullYear())); };
    funcstr.prototype.dates = function (sarg) { return (new Date(sarg)); };
    funcstr.prototype.stime = function (sa) { return (sa.getHours() + ':' + sa.getMinutes() + ':' + sa.getSeconds() + '.' + sa.getMilliseconds()); };
    funcstr.prototype.syear = function (sa) { return (sa.getFullYear()); };
    funcstr.prototype.timeout = function (ss, ms) { setTimeout(ss, ms); };
funcstr.prototype.guidjsl = function () {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });         
}
funcstr.prototype.guidjs = function () {  return(this.ucase(this.guidjsl())); }

funcstr.prototype.tosend = function (ss) {   var sa=''; 
  var ch=String.fromCharCode(127);
  var cc=String.fromCharCode(126);
  var ca=String.fromCharCode(0);
  var cb=String.fromCharCode(255);
  var cd=String.fromCharCode(1);  
  for(var i=0;i<ss.length;i++) {
   if(ss[i]==cb) { sa+=cc+cd;  continue; } 
   if(ss[i]==cc) { sa+=cc+ca;  continue; } 
   if(ss[i]>cc) { sa+=ch+String.fromCharCode(ss.charCodeAt(i)-127);  } else { sa+=ss[i]; }
  }
  return(sa);
}


}    
function funcdbase() {
    var sfdat = new Array();
    var sddat = new Array();                                      
    var sddatblock = new Array(); 
    var csep = String.fromCharCode(252); 
    var cdel = String.fromCharCode(254);  var sdel = cdel + '';
    var cblock = String.fromCharCode(253); var sblock = cblock + '';
    var db = [], dbname = [], dbfld = [], dbfldlen = [], dbcount = [], dbdata = [], dbid = 'idxx';
    var xatim=0;
    var stdat = new Array();                     
    var ihdb=new Array(500); 
    var qfiberflag=false,qip='',qipset='',qretdata='',qcurdat='',scurdat='',kcurdir='',scurdir="'./data/'";                                            
    var qbfn=false,qfnc;
    var qprac='1',qsess='1234';
    var imdbaseurl = '';
    var fs = require('fs'); 
    var urlrequest = require('request');
    var Promise = require('promise');
    funcdbase.prototype.baseget = function (n) { 
        if(n==0)  return(imdbaseurl);   
     }
    funcdbase.prototype.baseput = function (n,ss) { 
       if(n==0) {  imdbaseurl=ss;   }
    }
    funcdbase.prototype.qrawx = function (sa) { var rows=this.bcall('qraw|'+qcurdat+'|'+sa);  return(rows); }
    funcdbase.prototype.qraw = function (sa) {  var rows=this.bcall('qraw|'+qcurdat+'|'+sa);  return(rows); }
    funcdbase.prototype.qrawfn = function (sa,sfn) {  this.bcalll('qraw|'+qcurdat+'|'+sa,sfn); }
    funcdbase.prototype.qdatopen = function () { 
      var j=500;  
      if(ihdb.length==500) {
       for(var i=501;i<1000;i++) { ihdb[i]=0; }
      }                       
      for (var i=501;i<ihdb.length;i++) {
        if (ihdb[i]==0) { j = i; ihdb[i] = 1; break; }
      }             stdat[j]=''; sfdat[j]=''; sddat[j]=''; sddatblock[j]='';                
      return(j);
    };
    funcdbase.prototype.qdatclose = function (n) { ihdb[n]=0;  stdat[n]=''; sfdat[n]=''; sddat[n]=''; sddatblock[n]=''; } 
    funcdbase.prototype.qdattable = function (n,ss) { stdat[n]=ss;
      if(fc.xitemcount(ss,' ')>1) { return(ss); } else { return('select * from '+ss); }
    }
    funcdbase.prototype.qdatcount = function (n) {   if(n==0) { return(''); } else { return(' limit '+n); }  }
    funcdbase.prototype.qdatwhere = function (ss) { 
       var sa=fc.trim(ss);                                           
       if(sa=='') { return(sa); }  
       if(sa[0]=='$') {
        var sb=this.qpractice();   if (sb=="") { sb = "1"; }   sb = "PracticeId=" + sb;  sa = fc.xright(sa);
            if(fc.lcase(fc.xitemget(sa,1,' '))=='order') { return(' where '+sb+' '+sa); } else { return(' where '+sb+' and '+sa); }    
       } else {
        if(fc.lcase(fc.xitemget(sa,1,' '))=='order') { return(' '+ss); } else { return(' where '+ss); }    
       }    
    };

    funcdbase.prototype.qdatput = function (hd,rows) {        var sa='',sb='',scol='';       rows=JSON.parse(rows);         
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
    
    
    funcdbase.prototype.qdatinsert = function (hd,sex,n) { 
      var sa='',sb='',sc='',scol='';
      for(var i=1;i<=fc.itemcount(sfdat[hd]);i++) {
        sb=fc.itemget(sfdat[hd],i); 
        if(sex!='') { 
          if(n==2) { if(fc.itemnum(sex,sb)>0) {  } else { continue; } }
              else { if(fc.itemnum(sex,sb)>0) { continue;  }   }
        }
        scol+=sb+',';
                        sa+='"'+fc.xitemget(sddat[hd],i,cdel)+'",';
      }                                                                                          
      sa=' ('+fc.xleft(scol)+') values ('+fc.xleft(sa)+')';
      return(sa);
    } 
    funcdbase.prototype.qdatupdate = function (hd,sex,n) { 
      var sa='',sb='',sc='';
      for(var i=1;i<=fc.itemcount(sfdat[hd]);i++) {
        sb=fc.itemget(sfdat[hd],i); if(sex!='') { 
          if(n==2) { if(fc.itemnum(sex,sb)>0) {  } else { continue; } }
              else { if(fc.itemnum(sex,sb)>0) { continue;  }   }
        }
                        sa+=sb+'="'+fc.xitemget(sddat[hd],i,cdel)+'",';
      }
      return(fc.xleft(sa));
    }


funcdbase.prototype.qresult = function (ss) {  var hd=this.qdatopen();  
this.qdatput(hd,ss); ihdb[hd]=0; 
return(hd); 
}
funcdbase.prototype.qresultbuild = function (sf,ss) {  var hd=this.qdatopen();  
sfdat[hd]=sf;    sddatblock[hd]=ss;  return(hd); 
}

funcdbase.prototype.quse = function (ss) { var ln=arguments.length; if(ln==1) qcurdat=ss; else return(qcurdat); }
funcdbase.prototype.qopen = function (stable) { 
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
funcdbase.prototype.qclose = function (shd) { this.qdatclose(shd); };  
funcdbase.prototype.qinsert = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      var rows=this.qraw(''+sa);  return(sa+'\n'+rows);
};
funcdbase.prototype.qinsertfn = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      this.bcalllfn('xqraw|'+qcurdat+'|'+sa);
            };
funcdbase.prototype.qinsertget = function (shd, sex,sb) { 
      if(arguments.length==3) {
      var sa='insert into '+sb+this.qdatinsert(shd,sex,1); 
      return(sa)
          
      } else {
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      return(sa)
      }
      };


funcdbase.prototype.qinsertin = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,2); 
      var rows=this.qrawx(''+sa); return(sa+'\n'+rows);
};
funcdbase.prototype.qdel = function (stable, sarg) {                 
      var sa='delete from '+stable+this.qdatwhere(sarg); 
      var rows=this.qrawx(''+sa);  return(sa+'\n'+rows);
}; 
funcdbase.prototype.qdelete = function (stable, sarg) {                 
      var sa='delete from '+stable+this.qdatwhere(sarg); 
      var rows=this.qrawx(''+sa); return(sa+'\n'+rows);
}; 

funcdbase.prototype.qupdate = function (shd, sarg, sex) { 
      var sa='update '+stdat[shd]+' set '+this.qdatupdate(shd,sex,1)+this.qdatwhere(sarg)+this.qdatcount(0);
      var rows=this.qrawx(''+sa);  return(sa+'\n'+rows);
};  funcdbase.prototype.qupdatein = function (shd, sarg, sex) { 
      var sa='update '+stdat[shd]+' set '+this.qdatupdate(shd,sex,2)+this.qdatwhere(sarg)+this.qdatcount(0);
      rows=this.qrawx(''+sa);  return(sa+'\n'+rows);
};  



funcdbase.prototype.qgethd = function (stable, sno, sarg) { 
      var hd=this.qdatopen(); 
      var rows=this.qraw(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(sno));  
      if(rows=='[]') { return(hd); }  this.qdatput(hd,rows);  return(hd);
};
funcdbase.prototype.qgetfn = function (stable, sno, sarg,sfn) { 
      var hd=this.qdatopen(); ihdb[hd]=0;   
            this.qrawfn(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(sno),sfn);  
      };
funcdbase.prototype.qgetret = function (rows) { 
 var hd=this.qdatopen(); 
 ihdb[hd]=0; 
 if(rows=='[]') { return(hd); }  this.qdatput(hd,rows);  return(hd); 
}
funcdbase.prototype.qgetrethd = function (rows) { 
 var hd=this.qdatopen(); 
  if(rows=='[]') { return(hd); }  this.qdatput(hd,rows);  return(hd); 
}

funcdbase.prototype.qget = function (stable, sno, sarg) { var hd=this.qgethd(stable,sno,sarg);  ihdb[hd]=0; return(hd);  };


funcdbase.prototype.qwherehd = function (stable, sarg) {                                                   
      var hd=this.qdatopen();   
      var rows=this.qraw(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(0)); 
      if(rows=='[]') { ihdb[hd]=0; return(0); }  if(this.qdatput(hd,rows)) { ihdb[hd]=0;  return(0); } this.dnextno(hd,1); return(hd);
};
funcdbase.prototype.qwhere =  function (stable, sarg) {       var hd=this.qdatopen();   
      var rows=this.qraw(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(0)); 
       ihdb[hd]=0; if(rows=='[]') {   return(0); }  if(this.qdatput(hd,rows)) {  return(0); } this.dnextno(hd,1);  return(hd);
}      

funcdbase.prototype.qtables = function () { 
 var rows=this.qraw("SELECT * FROM sqlite_master WHERE type='table' order by name collate nocase"); 
 var sa=''; rows=JSON.parse(rows);  
      for(var i=0;i<rows.length;i++) {  
         for(var key in rows[i]) {  
            if((key+'')=='name') {     sa+=rows[i][key]+','; }
         }  
      } 
      return(fc.xleft(sa)); 
}

funcdbase.prototype.qcreate = function (sname,sarg) {       var k=0; 
      var sb=this.qtables();
      if(fc.itemnum(sb,sname)>0) { this.qrawx('DROP TABLE '+sname); }
      var sb='',sc='';
      for(var i=1;i<=fc.itemcount(sarg);i++) {
        sb=fc.itemget(sarg,i); 
        sc=sc+sb+' collate nocase,'
              }
      sc=fc.xleft(sc);
      var sa='CREATE TABLE '+sname+' ('+sc+')';
      var rows=this.qrawx(sa);  return(sa+'\n'+rows);
};
funcdbase.prototype.qcreateget = function (sname) {  var rows=this.qraw("select sql from sqlite_master where type = 'table' and name = '"+sname+"'");
 rows=JSON.parse(rows);  
 return(rows[0].sql);
}

funcdbase.prototype.qsysput = function (sk,sd) {   
    var hd=this.qwhere('select D.num from setup D',"num='"+sk+"'");  
           if(hd>0) { hd=this.qopen('setup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qupdatein(hd,"num='"+sk+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('setup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qinsert(hd,'');                         this.qclose(hd); }
}
funcdbase.prototype.qsysfind = function (sa) {  
    var hd=this.qwhere('select D.keyinfo from setup D',"num='"+sa+"'"); 
      if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
}
funcdbase.prototype.sysput = function (sk,sd) {   
    var hd=this.qwhere('select D.num from syssetup D',"$num='"+sk+"'");  
           if(hd>0) { hd=this.qopen('syssetup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qupdatein(hd,"num='"+sk+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('syssetup');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.dnput(hd,'PracticeId',this.qpractice()); this.qinsert(hd,'');                         this.qclose(hd); }
}
funcdbase.prototype.sysfind = function (sa) {  
    var hd=this.qwhere('select D.keyinfo from syssetup D',"$num='"+sa+"'"); 
      if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
}
 funcdbase.prototype.sysputtmp = function (sk,sd) {   
     var hd=this.qwhere('select D.num from systmp D',"$num='"+sk+qsess+"'");  
           if(hd>0) { hd=this.qopen('systmp');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk+qsess); this.qupdatein(hd,"num='"+sk+qsess+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('systmp');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk+qsess); this.dnput(hd,'PracticeId',this.qpractice()); this.qinsert(hd,'');                         this.qclose(hd); }
 }
 funcdbase.prototype.sysfindtmp = function (sa) {  
     var hd=this.qwhere('select D.keyinfo from systmp D',"$num='"+sa+qsess+"'"); 
       if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
 }
 funcdbase.prototype.sysputtmpreal = function (sk,sd) {       var hd=this.qwhere('select D.num from systmp D',"$num='"+sk+qsess+"'");  
           if(hd>0) { hd=this.qopen('systmp');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk+qsess); this.qupdatein(hd,"num='"+sk+qsess+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('systmp');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk+qsess); this.dnput(hd,'PracticeId',this.qpractice()); this.qinsert(hd,'');                         this.qclose(hd); }
 }
 funcdbase.prototype.sysfindtmpreal = function (sa) {     var hd=this.qwhere('select D.keyinfo from systmp D',"$num='"+sa+qsess+"'"); 
       if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
 }

funcdbase.prototype.sysputgen = function (sk,sd) {   
    var hd=this.qwhere('select D.num from sysgen D',"num='"+sk+"'");  
           if(hd>0) { hd=this.qopen('sysgen');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qupdatein(hd,"num='"+sk+"'",'keyinfo'); this.qclose(hd); }  
               else { hd=this.qopen('sysgen');  this.dnput(hd,'keyinfo',sd); this.dnput(hd,'num',sk); this.qinsert(hd,'');                         this.qclose(hd); }
}
funcdbase.prototype.sysfindgen = function (sa) {  
    var hd=this.qwhere('select D.keyinfo from sysgen D',"num='"+sa+"'"); 
      if(hd>0) { return(this.dn(hd,'keyinfo')); } else { return(''); }   
}
funcdbase.prototype.qpractice = function (sa) {   if(arguments.length>0) qprac=sa; return(qprac);}
funcdbase.prototype.qsession = function (sa) {    if(arguments.length>0) qsess=sa; return(qsess);}
funcdbase.prototype.dpractice = function () {  return(qprac);}
funcdbase.prototype.ip = function (n) {  if(qipset!='') {  qip=fc.itemget(qipset,n); }  }
funcdbase.prototype.ipset = function (ss) {  qipset=ss; }
funcdbase.prototype.ipget = function (n) { if(qipset!='') {  return(fc.itemget(qipset,n)); } else { return(''); }  }
funcdbase.prototype.iplen = function () {  return(fc.itemcount(qipset)); }
funcdbase.prototype.qfiber = function (ba) {  qfiberflag=ba; }



funcdbase.prototype.qconvto = function (ss)   {  
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
funcdbase.prototype.qconvfrom = function (ss)   { 
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

    
                                                                                                   
    funcdbase.prototype.dn = function (shd, sf) { 
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
    funcdbase.prototype.dnno = function (shd, sf) { 
        if (sf > 0) { 
         var sa=fc.xitemget(sddat[shd], sf, cdel); 
         if(fc.xinstr(1,sa,fc.chr(1))>0) {  sa=this.qconvfrom(sa);  return(sa)   } else {  return(sa) }
        } 
        else { return (""); } 
    };


    funcdbase.prototype.dnput = function (shd, sf, sd) { 
      var ia = fc.itemnum(sfdat[shd], sf); if (typeof(sd) == "undefined") { sd=''; }  
      sd=this.qconvto(sd);
            if (ia > 0) { sddat[shd] = fc.xitemrep(sddat[shd], sd, ia, sdel); }   };
    funcdbase.prototype.dset = function (shd, sf, sd) { var ia = fc.itemnum(sfdat[shd], sf); if (ia > 0) { sddat[shd] = fc.xitemrep(sddat[shd], sd, ia, sdel); }  };
    funcdbase.prototype.dnputno = function (shd, sf, sd) {if (sf > 0) { sddat[shd] =fc.xitemrep(sddat[shd], sd, sf, cdel);  } };
    funcdbase.prototype.drec = function (shd) { return (sddat[shd]); }
    funcdbase.prototype.dclear = function (shd) { sddat[shd]=fc.strdup(sdel,fc.itemcount(sfdat[shd])); return (sddat[shd]); }
    funcdbase.prototype.dblock = function (shd) { return (sddatblock[shd]); }
    funcdbase.prototype.dfields = function (shd) { return (sfdat[shd]); }
    funcdbase.prototype.dblockchange = function (shd,ss) { sddatblock[shd]=ss; }
    funcdbase.prototype.dfieldschange = function (shd,ss) { sfdat[shd]=ss; }
    funcdbase.prototype.dfieldsdata = function (sf,sdat) { var i=this.ydatopen(); sfdat[i]=sf; sddatblock[i]=sdat; ihdb[i]=0; return(i);  }
    
    funcdbase.prototype.dnextno = function (shd, sno) {
        if (sno > fc.xitemcount(sddatblock[shd], sblock)) return (1);
        sddat[shd] = fc.xitemget(sddatblock[shd], sno, sblock); if (sddat[shd] == '') { return (1) }
        return (0);
    };
    funcdbase.prototype.daudit = function (sdata) {       var sb=xatim; xatim=new Date(); 
     var sa ='';      var curDate = new Date(); xatim=curDate - xatim;
     return (sa);     
    };

    funcdbase.prototype.log = function (ss) { console.log(ss); };
    funcdbase.prototype.ubase = function (sf) {  
        var ln=arguments.length;
          var sa=fc.xsj(sf);  sa=fc.xright(fc.xleft(sa)); 
          var sb=fc.xitemget(sa,1,'('); 
          var sc='';
          sb=fc.xitemlast(sb,1,' ').trim();
          for(var i=1;i<ln;i++) { sc+="'"+arguments[i]+"',"; } if(sc=='') { sc='()'; } else { sc='('+fc.xleft(sc)+')'; }
          sb='return('+sb+sc+');';
          sa='"function dbmainfunc() {'+sa+sb+'}"';
                    return(sa);
    };
    funcdbase.prototype.xbase = function (sf) {  
        var ln=arguments.length;
          var sa=fc.xsj(sf);  sa=fc.xright(fc.xleft(sa)); 
          var sb=fc.xitemget(sa,1,'('); 
          var sc='';
          sb=fc.xitemlast(sb,1,' ').trim();
          for(var i=1;i<ln;i++) { sc+="'"+arguments[i]+"',"; } if(sc=='') { sc='()'; } else { sc='('+fc.xleft(sc)+')'; }
          sb='return('+sb+sc+');';
          sa='"function dbmainfunc() {'+sa+sb+'}"';
          return(this.bcall('dbase|'+sa));
    };
    funcdbase.prototype.xbasefn = function (sf,sfn) {  
        var ln=arguments.length;
        if(ln>0) {
          var sa=fc.xsj(sf);  sa=fc.xright(fc.xleft(sa)); 
          var sb=fc.xitemget(sa,1,'('); 
          var sc='';
          sb=fc.xitemlast(sb,1,' ').trim();
          for(var i=2;i<ln;i++) { sc+="'"+arguments[i]+"',"; } if(sc=='') { sc='()'; } else { sc='('+fc.xleft(sc)+')'; }
          sb='return('+sb+sc+');';
          sa='"function dbmainfunc() {'+sa+sb+'}"';
          return(this.bcalll('dbase|'+sa,sfn));
        }
    };
    funcdbase.prototype.xfork = function (sf) {  
        var ln=arguments.length;
          var sa=fc.xsj(sf);  sa=fc.xright(fc.xleft(sa)); 
          var sb=fc.xitemget(sa,1,'('); 
          var sc='';
          sb=fc.xitemlast(sb,1,' ').trim();
          for(var i=1;i<ln;i++) { sc+="'"+arguments[i]+"',"; } if(sc=='') { sc='()'; } else { sc='('+fc.xleft(sc)+')'; }
          sb='return('+sb+sc+');';
          sa='"function dbmainfunc() {'+sa+sb+'}"';  
          return(this.bcall('fork|'+sa));
    };
    funcdbase.prototype.xforkfn = function (sf,sfn) {  
        var ln=arguments.length; 
        if(ln>0) {
          var sa=fc.xsj(sf);  sa=fc.xright(fc.xleft(sa)); 
          var sb=fc.xitemget(sa,1,'('); 
          var sc='';
          sb=fc.xitemlast(sb,1,' ').trim();
          for(var i=2;i<ln;i++) { sc+="'"+arguments[i]+"',"; } if(sc=='') { sc='()'; } else { sc='('+fc.xleft(sc)+')'; }
          sb='return('+sb+sc+');';
          sa='"function dbmainfunc() {'+sa+sb+'}"';
          return(this.bcalll('fork|'+sa,sfn));
        }
    };



funcdbase.prototype.flog = function (ss) { fs.appendFileSync(__dirname+'/log.txt',fc.datelong()+' '+ss+'\n','binary'); };

funcdbase.prototype.bcall = function (ss) { if(qfiberflag) { return(this.bcallfiber(ss)); }
var sb,sn='',sr,surl,qretdat;  qretdat='[]';
surl=imdbaseurl+'ajaxcallback'; 
var options = {                       
            uri:surl,
            method:'POST',
            json:false, 
            encoding:null,
            body:gguidkey+'|'+fc.x64s(ss)
  };
  urlrequest(options, function (err, response, body) { 
      if(err) { qretdat='[]'; }
         else  { qretdat=body+'';  }
         fs.appendFile(__dirname+'/log.txt','','binary', function (err) { });          jxcore.utils.continue(); 
  });
    jxcore.utils.jump();
    return(qretdat)
}
funcdbase.prototype.bcalll = function (ss,sfn) {  
var sb,sn,surl; 
surl=imdbaseurl+'ajaxcallback';
var options = {                       
            uri:surl,
            method:'POST',
            json:false, 
            encoding:null,
            body:gguidkey+'|'+fc.x64s(ss)
  };
  
  urlrequest(options, function (err, response, body) {       if(err) {  sfn('[]'); }
          else  { sfn(body+'');      }
  });
}


funcdbase.prototype.bcallprom = function (ss) {  
var sb,sn,surl; 
surl=imdbaseurl+'ajaxcallback';
var options = {                       
            uri:surl,
            method:'POST',
            json:false, 
            encoding:null,
            body:gguidkey+'|'+fc.x64s(ss)
  };
  return new Promise(function (fulfill, reject) {
   urlrequest(options, function (err, response, body) {       if(err) {   reject('[]'); }
          else  { fulfill(body+'');      }
   });
  }); }

funcdbase.prototype.promstart = function () {
  return new Promise(function (fulfill, reject){
    setTimeout(function() { fulfill(''); },0);
  });
}
funcdbase.prototype.qrawprom = function (sa) {  var rows=this.bcallprom('qraw|'+qcurdat+'|'+sa);  return(rows); }

funcdbase.prototype.qgetprom = function (stable, sno, sarg) { 
      var hd=this.qdatopen(); ihdb[hd]=0;   
      var rows=this.qrawprom(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(sno));  
      return(rows);
};
funcdbase.prototype.qwhereprom = function (stable, sarg) { 
      var hd=this.qdatopen(); ihdb[hd]=0;   
      var rows=this.qrawprom(''+this.qdattable(hd,stable)+this.qdatwhere(sarg)+this.qdatcount(1));  
      return(rows);
};
funcdbase.prototype.qinsertprom = function (shd, sex) { 
      var sa='insert into '+stdat[shd]+this.qdatinsert(shd,sex,1); 
      var rows=this.qrawprom(''+sa); return(rows);
};


funcdbase.prototype.qwhereret = function (rows) { 
 var hd=this.qdatopen(); 
 ihdb[hd]=0; 
 if(rows=='[]') { ihdb[hd]=0; return(0); }  if(this.qdatput(hd,rows)) { ihdb[hd]=0;  return(0); } this.dnextno(hd,1); return(hd);
}
funcdbase.prototype.qwhererethd = function (rows) { 
 var hd=this.qdatopen(); 
 if(rows=='[]') { ihdb[hd]=0; return(0); }  if(this.qdatput(hd,rows)) { ihdb[hd]=0;  return(0); } this.dnextno(hd,1); return(hd);
}



}



function funcjquery() {
    funcjquery.prototype.print = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]+':'; } alert(sum); };
    funcjquery.prototype.jready = function (sfunc) { $(document).ready(sfunc); };
    funcjquery.prototype.jthis = function (ss) { return ($(ss)); };
    funcjquery.prototype.xid = function (ss) { return (document.getElementById(ss)); }
    funcjquery.prototype.jcanvas = function (ss) { return (document.getElementById(ss).getContext('2d')); }
    funcjquery.prototype.jcreate = function (ss) { $(ss).appendTo(document.body); }
    funcjquery.prototype.jid = function (ss) { return ($("[id$='" + ss + "']")); };
    funcjquery.prototype.jclass = function (ss) { return ($("." + ss)); };     funcjquery.prototype.jidval = function (ss) { return (jid(ss).val()); };
    funcjquery.prototype.xjidval = function (ss, sdata) { jid(ss).val(sdata); };

    funcjquery.prototype.jvalx = function (sthis) { return ($(sthis).val()); };     funcjquery.prototype.xjvalx = function (sthis, sdata) { $(sthis).val(sdata); };

    funcjquery.prototype.jval = function (sthis) { return (jid(sthis).val()); };     funcjquery.prototype.xjval = function (sthis, sdata) { jid(sthis).val(sdata); };
    funcjquery.prototype.jhtml = function (sthis) { return (jid(sthis).html()); };     funcjquery.prototype.xjhtml = function (sthis, sdata) { jid(sthis).html(sdata); };
    funcjquery.prototype.jtext = function (sthis) { return (jid(sthis).text()); };     funcjquery.prototype.xjtext = function (sthis, sdata) { jid(sthis).text(sdata); };
    funcjquery.prototype.jdroptext = function (sthis) { return ($('#'+sthis+' option:selected').text()); };     funcjquery.prototype.jattr = function (sthis, sname) { return (jid(sthis).attr(sname)); };     funcjquery.prototype.xjattr = function (sthis, sname, sdata) { jid(sthis).attr(sname, sdata); };
    funcjquery.prototype.jremoveattr = function (sthis, sname) { return (jid(sthis).removeAttr(sname)); };     funcjquery.prototype.jdata = function (sthis, sname) { return (jid(sthis).data(sname)); };
    funcjquery.prototype.xjdata = function (sthis, sname, sdata) { return (jid(sthis).data(sname, sdata)); }; 
    funcjquery.prototype.jheight = function (sthis) { return (jid(sthis).height()); };
    funcjquery.prototype.xjheight = function (sthis, sdata) { jid(sthis).height(sdata); };
    funcjquery.prototype.jwidth = function (sthis) { return (jid(sthis).width()); };
    funcjquery.prototype.xjwidth = function (sthis, sdata) { jid(sthis).width(sdata); };

    funcjquery.prototype.jshow = function (sthis) { jid(sthis).show(); };
    funcjquery.prototype.jhide = function (sthis) { jid(sthis).hide(); };
    funcjquery.prototype.jfocus = function (sthis) { jid(sthis).focus(); };

    funcjquery.prototype.jfocusout = function (sthis, sfunc) { jid(sthis).focusout(sfunc); };
    funcjquery.prototype.jfocusin = function (sthis, sfunc) { jid(sthis).focusin(sfunc); };
    funcjquery.prototype.jkeydown = function (sthis, sfunc) { jid(sthis).keydown(sfunc); };
    funcjquery.prototype.jmousedown = function (sthis, sfunc) { jid(sthis).mousedown(sfunc); };
    funcjquery.prototype.jmouseup = function (sthis, sfunc) { jid(sthis).mouseup(sfunc); };
    funcjquery.prototype.jeach = function (sthis, sfunc) { jid(sthis).each(sfunc); };
    funcjquery.prototype.jclick = function (sthis, sfunc) { jid(sthis).click(sfunc); };
    funcjquery.prototype.jbind = function (sthis, sname, sfunc) { jid(sthis).bind(sname, sdata); };

    funcjquery.prototype.jappend = function (sthis, sdata) { jid(sthis).append(sdata); };
    funcjquery.prototype.jremove = function (sthis) { jid(sthis).children().remove(); };

    funcjquery.prototype.jcss = function (sthis, sname) { return (jid(sthis).css(sname)); };
    funcjquery.prototype.xjcss = function (sthis, sname, sdata) { jid(sthis).css(sname, sdata); };
    funcjquery.prototype.ccss = function (sthis, sname) { return (sthis.css(sname)); };
    funcjquery.prototype.xccss = function (sthis, sname, sdata) { sthis.css(sname, sdata); };
    funcjquery.prototype.css = function (sthis, sname) { return (jclass(sthis).css(sname)); };
    funcjquery.prototype.xcss = function (sthis, sname, sdata) {jclass(sthis).css(sname, sdata); };
    funcjquery.prototype.jaddclass = function (sthis, sname) { 
        jid(sthis).addClass(sname); 
    
    };
    funcjquery.prototype.jremoveclass = function (sthis, sname) { jid(sthis).removeClass(sname); };
    funcjquery.prototype.jtroggleclass = function (sthis, sname) { jid(sthis).troggleClass(sname); };
    funcjquery.prototype.jhasclass = function (sthis, sname) { return (jid(sthis).hasClass(sname)); };     funcjquery.prototype.jload = function (sthis, sname) { jid(sthis).load(sname); };

    funcjquery.prototype.jlen = function (sthis) { return (jid(sthis).length()); }; 
    funcjquery.prototype.jget = function (sthis) { return (jid(sthis).get()); };     funcjquery.prototype.xjget = function (sthis, sdata) { return (jid(sthis).get(sdata)); };     funcjquery.prototype.jfind = function (sthis, sdata) { return (jid(sthis).find(sdata)); };     funcjquery.prototype.jfilter = function (sthis, sdata) { return (jid(sthis).filter(sdata)); };     funcjquery.prototype.jnext = function (sthis) { return (jid(sthis).next()); };     funcjquery.prototype.jprev = function (sthis) { return (jid(sthis).prev()); };     funcjquery.prototype.jparent = function (sthis) { return (jid(sthis).parent()); };     funcjquery.prototype.xjparent = function (sthis, sdata) { return (jid(sthis).parent(sdata)); };     funcjquery.prototype.jchild = function (sthis) { return (jid(sthis).children()); };     funcjquery.prototype.xjchild = function (sthis, sdata) { return (jid(sthis).children(sdata)); }; }

function funclayout() {

    var tempfld="";


            

    funclayout.prototype.button = function () {
        var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i] }
        return ("<input type='button' " + sum + "/>");
    };
    funclayout.prototype.at = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("~" + sum + ""); };
    funclayout.prototype.input = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input  " + sum + "/>"); };
    funclayout.prototype.password = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='password' " + sum + "/>"); };
    funclayout.prototype.checkbox = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='checkbox' " + sum + "/>"); };
    funclayout.prototype.radio = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='radio' " + sum + "/>"); };
    funclayout.prototype.url = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='url' " + sum + "/>"); };
    funclayout.prototype.hidden = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='hidden' " + sum + "/>"); };
    funclayout.prototype.fieldset = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='fieldset' " + sum + "/>"); };
    funclayout.prototype.text = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='text' " + sum + "/>"); };
    funclayout.prototype.edit = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='text' " + sum + "/>"); };
    funclayout.prototype.submit = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='submit' " + sum + "/>"); };
    funclayout.prototype.file = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<input type='file' " + sum + "/>"); };
    funclayout.prototype.img = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<img " + sum + "/>"); };
    funclayout.prototype.get = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return (sum); };
                    
        funclayout.prototype.objecttag = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<object " + att + ">" + sum + "</object>");
    };
    funclayout.prototype.table = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<table " + att + ">" + sum + "</table>");
    };
    funclayout.prototype.th = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<th " + att + ">" + sum + "</th>");
    };
    funclayout.prototype.tr = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<tr " + att + ">" + sum + "</tr>");
    };
    funclayout.prototype.td = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<td " + att + ">" + sum + "</td>");
    };
    funclayout.prototype.content = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<content " + att + ">" + sum + "</content>");
    };
    funclayout.prototype.row = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<tr " + att + ">" + sum + "</tr>");
    };
    funclayout.prototype.cell = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<td " + att + ">" + sum + "</td>");
    };                                                   

    funclayout.prototype.label = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<label " + att + ">" + sum + "</label>");
    };
    funclayout.prototype.link = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<a " + att + ">" + sum + "</a>");
    };
    funclayout.prototype.span = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<span " + att + ">" + sum + "</span>");
    };
    funclayout.prototype.div = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<div " + att + ">" + sum + "</div>");
    };
    funclayout.prototype.scriptjs = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } var ses='script'; return ("<"+ses +' type="text/javascript" '+ att + ">" + sum + "</"+ses+">");
    };


    
    funclayout.prototype.thead = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<thead " + att + ">" + sum + "</thead>");
    };
    funclayout.prototype.tbody = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<tbody " + att + ">" + sum + "</tbody>");
    };
    funclayout.prototype.canvas = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] }         return ("<canvas " + att + ">" + sum + "</canvas>");
    };
    funclayout.prototype.iframe = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<iframe " + att + ">" + sum + "</iframe>");
    };
    funclayout.prototype.form = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<form " + att + ">" + sum + "</form>");
    };

    funclayout.prototype.section = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<section " + att + ">" + sum + "</section>");
    };
    
    funclayout.prototype.blockquote = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<blockquote " + att + ">" + sum + "</blockquote>");
    };
    funclayout.prototype.memo = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<textarea " + att + ">" + sum + "</textarea>");
    };
    funclayout.prototype.textarea = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<textarea " + att + ">" + sum + "</textarea>");
    };
    funclayout.prototype.select = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<select " + att + ">" + sum + "</select>");
    };
    funclayout.prototype.option = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<option " + att + ">" + sum + "</option>");
    };
    funclayout.prototype.ul = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<ul " + att + ">" + sum + "</ul>");
    };
    funclayout.prototype.li = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<li " + att + ">" + sum + "</li>");
    };
    funclayout.prototype.para = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<p " + att + ">" + sum + "</p>");
    };
    funclayout.prototype.fonttag = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<font " + att + ">" + sum + "</font>");
    };
    funclayout.prototype.jbutton = function () {
        var sum = "", att = "", ss = "", k = 0; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) { sum = sum + arguments[i]; }
        return ("<button " + att + " >" + sum + "</button>");
    };
    
    funclayout.prototype.dropdown = function () {
        var sum = "", att = "", ss = "", sa = "", k = 0, ba = false; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) {
            ss = arguments[i];
            if (ss.length > 0) {
                if (fc.itemcount(ss) > 1) { sa = fc.itemget(ss, 1); ss = fc.itemget(ss, 2); } else { ba = true; sa = ss; }
                if (sa[0] == '*') { sa = fc.xright(sa); if (ba) ss = fc.xright(ss); sum = sum + "<option value='" + sa + "' selected='true' >" + ss + "</option>"; }
                else { sum = sum + "<option value='" + sa + "'>" + ss + "</option>"; }
            }
        }
        return ("<select " + att + ">" + sum + "</select>");
    };
    funclayout.prototype.dropdowntext = function () {         var sum = "", att = "", sn = "", ss = "", sa = "", k = 0, ba = false; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) {
            sn = arguments[i];
            for (var j = 1; j <= fc.itemcount(sn); j++) {
                ss = fc.itemget(sn, j);
                if (ss.length > 0) {
                    if (fc.itemcount(ss,'|') > 1) { sa = fc.itemget(ss, 1,'|'); ss = fc.itemget(ss, 2,'|'); } else { ba = true; sa = ss; }
                    if (sa[0] == '*') { sa = fc.xright(sa); if (ba) ss = fc.xright(ss); sum = sum + "<option value='" + sa + "' selected='true' >" + ss + "</option>"; }
                    else { sum = sum + "<option value='" + sa + "'>" + ss + "</option>"; }
                }
            }
        }
        return ("<select " + att + ">" + sum + "</select>");
    };
    funclayout.prototype.dropdowntxt = function () {         var sum = "", att = "", sn = "", ss = "", sa = "", k = 0, ba = false; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) {
            sn = arguments[i];
            for (var j = 1; j <= fc.xitemcount(sn,'|'); j++) {
                ss = fc.xitemget(sn, j,'|');
                if (ss.length > 0) {
                    if (fc.xitemcount(ss,',') > 1) { sa = fc.xitemget(ss, 1,','); ss = fc.xitemget(ss, 2,','); } else { ba = true; sa = ss; }
                    if (sa[0] == '*') {
                        sa = fc.xright(sa);  if (ba) ss = fc.xright(ss);
                        sum = sum + "<option value='" + sa + "' selected='true' >" + ss + "</option>"; 
                    }
                    else { sum = sum + "<option value='" + sa + "'>" + ss + "</option>"; }
                }
            }
        }
        return ("<select " + att + ">" + sum + "</select>");
    };

    funclayout.prototype.dropdowncall = function () {
        var sum = "", att = "", sn = "", ss = "", sa = "", k = 0, ba = false; if (arguments.length > 0) { ss = arguments[0]; if (ss.length > 0) { if (ss[0] == '~') { att = ss.substr(1, ss.length - 1); k = 1; } } }
        for (var i = k; i < arguments.length; i++) {
            sn = arguments[i];
            for (var j = 1; j <= fc.itemcount(sn); j++) {
                ss = fc.itemget(sn, j);
                if (ss.length > 0) {
                    if (fc.xitemcount(ss, '-') > 1) { sa = fc.xitemget(ss, 1, '-'); } else { ba = true; sa = ss; }
                    if (sa[0] == '*') { sa = fc.xright(sa);  ss = fc.xright(ss); sum = sum + "<option value='" + sa + "' selected='true' >" + ss + "</option>"; }
                    else { sum = sum + "<option value='" + sa + "'>" + ss + "</option>";  }
                }
            }
        }
        return ("<select " + att + ">" + sum + "</select>");
    };


    funclayout.prototype.dialogclose = function (sid) { 
        $("#"+sid).dialog('close');
    }
    funclayout.prototype.dialog = function () {         var sd = "", ia = 0, se = "";
        ia = arguments.length;
        if (ia > 2) {
            jjhtml(jid(arguments[0]), "<div id='" + arguments[1] + "' >" + arguments[2] + "</div>");
            sd = $('#' + arguments[1]).dialog({ modal: true });
            for (var i = 3; i < ia; i += 2) {
                se = arguments[i];
                if (se == 'bind') { sd.bind(arguments[i + 1], arguments[i + 2]); i++; }
                else if (se == 'method') { sd.dialog(arguments[i + 1]); }
                else { sd.dialog('option', se, arguments[i + 1]); }
            }
            sd.bind('dialogbeforeclose', function (event, ui) { edialogclose(); });
            sd.bind('dialogclose', function (event, ui) { $(this).dialog('destroy').remove(); })
        }
    }
 
    funclayout.prototype.ol = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<ol>" + sum + "</ol>"); };
    funclayout.prototype.bold = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<b>" + sum + "</b>"); };
    funclayout.prototype.small = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<small>" + sum + "</small>"); };
    funclayout.prototype.big = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<big>" + sum + "</big>"); };
    funclayout.prototype.italic = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<i>" + sum + "</i>"); };
    funclayout.prototype.under = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return("<u>" + sum + "</u>"); };
    funclayout.prototype.bi = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return("<b><i>" + sum + "</i></b>"); };
    funclayout.prototype.bu = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return("<b><u>" + sum + "</u></b>"); };
    funclayout.prototype.biu = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return("<b><i><u>" + sum + "</u></i></b>"); };
    funclayout.prototype.bui = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return("<b><i><u>" + sum + "</u></i></b>"); };
    funclayout.prototype.br = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i] } return ("<br/>"); };
    funclayout.prototype.hr = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i]; } return ("<hr "+ sum + "/>"); };
    funclayout.prototype.func = function () { var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i] } return (sum); };
    funclayout.prototype.theme = function ()   { var sum = ""; for (var i = 0; i < arguments.length; i++)   { sum = sum + arguments[i] } return("<style>" + sum + "</style>"); };
    funclayout.prototype.set = function ()   { var sum = "",sa=''; for (var i = 0; i < arguments.length; i++)   { if(i==0) sa=arguments[i]; else sum = sum + arguments[i]; } return(sa+' { '+sum+' } '); };




        funclayout.prototype.forlabel = function (ss) { return ("for='" + ss + "' "); };
    funclayout.prototype.hint = function (ss) {  return ("placeholder='" + ss + "' "); };
    funclayout.prototype.nwidth = function (ss) {  return ("width='" + ss + "px' "); };       funclayout.prototype.nheight = function (ss) {  return ("height='" + ss + "px' "); };     funclayout.prototype.ndata = function (ss) {  return ("data='" + ss + "' "); };
    funclayout.prototype.ntype = function (ss) { return ("type='" + ss + "' "); };
    funclayout.prototype.style = function (ss) { return ("style='" + ss + "' "); };
    funclayout.prototype.styletab = function (ss) { return ("<style type='text/css' >" + ss + "</style>"); };
    funclayout.prototype.id = function (ss) { return ("id='" + ss + "' "); };
    funclayout.prototype.idd = function (ss) { return ("id='" + ss + "' "); };
    funclayout.prototype.wrap = function (ss) { return ("wrap='" + ss + "' "); };
    funclayout.prototype.cols = function (ss) { return ("cols='" + ss + "' "); };
    funclayout.prototype.valign = function (ss) { return ("valign='" + ss + "' "); };
    funclayout.prototype.st = function (ss) { return (ss); };
    funclayout.prototype.styl = function (ss,sa) { return (ss+"='"+sa+"' "); };
    funclayout.prototype.multiple = function (ss) { return ("multiple "); };
    funclayout.prototype.rows = function (ss) { return ("rows='" + ss + "' "); };
    funclayout.prototype.wrap = function (ss) { return ("wrap='" + ss + "' "); };
    funclayout.prototype.value = function (ss) { return ("value='" + ss + "' "); };
    funclayout.prototype.href = function (ss) { return ("href='" + ss + "' "); };
    funclayout.prototype.name = function (ss) { return ("name='" + ss + "' "); };
    funclayout.prototype.align = function (ss) { return ("align='" + ss + "' "); };
    funclayout.prototype.checked = function (ss) { return ("checked='" + ss + "' "); };
    funclayout.prototype.maxlength = function (ss) { return ("maxlength='" + ss + "' "); };
    funclayout.prototype.placeholder = function (ss) { return ("placeholder='" + ss + "' "); };
    funclayout.prototype.size = function (ss) { return ("size='" + ss + "' "); };                                                                   
    funclayout.prototype.colortag = function (ss) { return ("color='" + ss + "' "); };
    funclayout.prototype.src = function (ss) { return ("src='" + ss + "' "); };
    funclayout.prototype.onload = function (ss) { return ("onload='" + ss + "' "); };
    funclayout.prototype.alt = function (ss) { return ("alt='" + ss + "' "); };
    funclayout.prototype.class = function (ss) { return ("class='" + ss + "' "); };
    funclayout.prototype.dir = function (ss) { return ("dir='" + ss + "' "); };
    funclayout.prototype.spellcheck = function (ss) { return ("spellcheck='" + ss + "' "); };
    funclayout.prototype.tabindex = function (ss) { return ("tabindex='" + ss + "' "); };
    funclayout.prototype.title = function (ss) { return ("title='" + ss + "' "); };
    funclayout.prototype.accesskey = function (ss) { return ("accesskey='" + ss + "' "); };
    funclayout.prototype.disabled = function (ss) { if(ss) return ("disabled='" + ss + "' "); else return(''); };
    funclayout.prototype.readonly = function (ss) { return ("readonly='" + ss + "' "); };
    funclayout.prototype.colspan = function (ss) { return ("colspan='" + ss + "' "); };
    funclayout.prototype.rowspan = function (ss) { return ("rowspan='" + ss + "' "); };
    funclayout.prototype.selected = function (ss) { return ("selected='" + ss + "' "); };
    funclayout.prototype.cellpadding = function (ss) { return ("cellpadding='" + ss + "px' "); };
    funclayout.prototype.cellspacing = function (ss) { return ("cellspacing='" + ss + "px' "); };




    funclayout.prototype.onclick = function (ss) { return ("onclick='" + ss + "' "); };
    funclayout.prototype.onblur = function (ss) { return ("onblur='" + ss + "' "); };
    funclayout.prototype.onchange = function (ss) { return ("onchange='" + ss + "' "); };
    funclayout.prototype.onfocus = function (ss) { return ("onfocus='" + ss + "' "); };
    funclayout.prototype.onselect = function (ss) { return ("onselect='" + ss + "' "); };
    funclayout.prototype.onsubmit = function (ss) { return ("onsubmit='" + ss + "' "); };
    funclayout.prototype.ondblclick = function (ss) { return ("ondblclick='" + ss + "' "); };
    funclayout.prototype.onmousedown = function (ss) { return ("onmousedown='" + ss + "' "); };
    funclayout.prototype.onmouseup = function (ss) { return ("onmouseup='" + ss + "' "); };
    funclayout.prototype.onmouseout = function (ss) { return ("onmouseout='" + ss + "' "); };
    funclayout.prototype.onmouseover = function (ss) { return ("onmouseover='" + ss + "' "); };
    funclayout.prototype.onmousemove = function (ss) { return ("onmousemove='" + ss + "' "); };
    funclayout.prototype.onkeydown = function (ss) { return ("onkeydown='" + ss + "' "); };
    funclayout.prototype.onkeyup = function (ss) { return ("onkeyup='" + ss + "' "); };
    funclayout.prototype.onkeypress = function (ss) { return ("onkeypress='" + ss + "' "); };


        funclayout.prototype.css = function () {
        var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i] }
        return ("style='" + sum + "' ");
    };
    funclayout.prototype.att = function () {
        var sum = ""; for (var i = 0; i < arguments.length; i++) { sum = sum + arguments[i] }
        return ("style='" + sum + "' ");
    };
    funclayout.prototype.color = function (ss) { return ("color:" + ss + "; "); };
    funclayout.prototype.background_color = function (ss) { return ("background-color:" + ss + "; "); };
    funclayout.prototype.opacity = function (ss) { return ("opacity:" + ss + "; "); };
    funclayout.prototype.bg = function (ss) { return ("background-color:" + ss + "; "); };
    funclayout.prototype.bgyellow = function (ss) { return ("background-color:#FFFFE0; "); };
    funclayout.prototype.bggray = function (ss) { return ("background-color:#F0F0F0; "); };
    funclayout.prototype.bgred = function (ss) { return ("background-color:#FFE0E0; "); };
    funclayout.prototype.bggreen = function (ss) { return ("background-color:#8FBC8F; "); };
    funclayout.prototype.bglgreen = function (ss) { return ("background-color:#E0FFE0; "); };
    funclayout.prototype.bgblue = function (ss) { return ("background-color:#D0D0FF; "); };
    funclayout.prototype.bgbrown = function (ss) { return ("background-color:#FFEEDD; "); };
    funclayout.prototype.font = function (ss) { return ("font:" + ss + "; "); };
    funclayout.prototype.font_family = function (ss) { return ("font-family:" + ss + "; "); };
    funclayout.prototype.font_size = function (ss) { return ("font-size:" + ss + "pt; "); };
    funclayout.prototype.font_weight = function (ss) { return ("font-weight:" + ss + "; "); };
    funclayout.prototype.height = function (ss) { return ("height:" + ss + "px; "); };
    funclayout.prototype.width = function (ss) {  return ("width:" + ss + "px; "); };
    funclayout.prototype.heightper = function (ss) { return ("height:" + ss + "%; "); };
    funclayout.prototype.widthper = function (ss) { return ("width:" + ss + "%; "); };
    funclayout.prototype.top = function (ss) { return ("top:" + ss + "px; "); };
    funclayout.prototype.bottom = function (ss) { return ("bottom:" + ss + "px; "); };
    funclayout.prototype.margin = function (ss) { return ("margin:" + ss + "; "); };
    funclayout.prototype.margin_left = function (ss) { return ("margin-left:" + ss + "px; "); };
    funclayout.prototype.margin_right = function (ss) { return ("margin-right:" + ss + "px; "); };
    funclayout.prototype.margin_top = function (ss) { return ("margin-top:" + ss + "px; "); };
    funclayout.prototype.margin_bottom = function (ss) { return ("margin-bottom:" + ss + "px; "); };
    funclayout.prototype.overflow = function (ss) { return ("overflow:" + ss + "; "); };
    funclayout.prototype.overflow_x = function (ss) { return ("overflow-x:" + ss + "; "); };
    funclayout.prototype.overflow_y = function (ss) { return ("overflow-y:" + ss + "; "); };
    funclayout.prototype.visibility = function (ss) { return ("visibility:" + ss + "; "); };
    funclayout.prototype.display = function (ss) { return ("display:" + ss + "; "); };
    funclayout.prototype.white_space = function (ss) { return ("white-space:" + ss + "; "); };
    funclayout.prototype.outline = function (ss) { return ("outline:" + ss + "; "); };
    funclayout.prototype.background = function (ss) { return ("background:" + ss + "; "); };
    funclayout.prototype.padding = function (ss) { return ("padding:" + ss + "px; "); };
    funclayout.prototype.padding_left = function (ss) { return ("padding-left:" + ss + "px; "); };
    funclayout.prototype.padding_right = function (ss) { return ("padding-right:" + ss + "px; "); };
    funclayout.prototype.padding_top = function (ss) { return ("padding-top:" + ss + "px; "); };
    funclayout.prototype.padding_bottom = function (ss) { return ("padding-bottom:" + ss + "px; "); };
    funclayout.prototype.position = function (ss) { return ("position:" + ss + "; "); };
        funclayout.prototype.border = function (ss) { return ("border:" + ss + "; "); };     funclayout.prototype.border_width = function (ss) { return ("border-width:" + ss + "; "); };
    funclayout.prototype.border_radius = function (ss) { return ("border-radius:" + ss + "; "); }; 
    funclayout.prototype.border_top = function (ss) { return ("border-top:" + ss + "; "); }; 
    funclayout.prototype.border_left = function (ss) { return ("border-left:" + ss + "; "); }; 
    funclayout.prototype.border_right = function (ss) { return ("border-right:" + ss + "; "); }; 
    funclayout.prototype.border_bottom = function (ss) { return ("border-bottom:" + ss + "; "); }; 
    funclayout.prototype.border_color = function (ss) { return ("border-color:" + ss + "; "); };
    funclayout.prototype.border_style = function (ss) { return ("border-style:" + ss + "; "); };     funclayout.prototype.border_collapse = function (ss) { return ("border-collapse:" + ss + "; "); };
    funclayout.prototype.text_align = function (ss) { return ("text-align:" + ss + "; "); };
    funclayout.prototype.text_number = function (ss) { return ("text-align:right; padding-right:5px; "); };


}


var fb = new funcdbase();
var fc = new funcstr();
var fj = new funcjquery();
var fp = new funclayout();


    
//***********getpatient**********
function getpatient(spat) {
var hd=0,hdd=0; 
var sa=''; 
hd=fb.qwhere('select M.LastName,D.Firstname,D.DOB from PatientMaster M inner join PatientDetails D on M.patientid=D.patientid',"M.patientid='"+spat+"'");
if(hd>0) { 
sa=fb.dn(hd,'LastName');
sa=
fp.span(
fp.at(fp.att(fp.font_size(gfont))),fb.dn(hd,'FirstName')+' '+sa+' - ')+
fp.span(
fp.at(fp.att(fp.font_size(gfont-2),fp.color('gray'))),fc.xitemget(fb.dn(hd,'DOB'),1,'T'));
};
return(sa);
}
//***********butstoreput**********
function butstoreput(spage,svisit,spat,s3) {
var hd=0,i=0,hdt=0; 
var sa='',se=''; 
i=800+fc.xis(spage);
se="PrescriptionID='"+svisit+"' and ConditionID="+i;
hd=fb.qopen('PrescriptionDetails');
fb.dnput(hd,'PrescriptionID',svisit);
fb.dnput(hd,'PatientID',spat);
fb.dnput(hd,'ConditionID',i+'');
fb.dnput(hd,'ConditionValueID','0');
fb.dnput(hd,'ConditionValue',s3);
hdt=fb.qwhere('select PrescriptionID from PrescriptionDetails',se);
if(hdt>0) { 
fb.qupdate(hd,se,'');
} else { 
fb.qinsert(hd,'');
};
fb.qclose(hd);
}
//***********butstoreget**********
function butstoreget(spage,svisit,spat) {
var hd=0,i=0; 
var sa=''; 
i=800+fc.xis(spage);
hd=fb.qwhere('PrescriptionDetails',"PrescriptionID='"+svisit+"' and  ConditionID="+i);
if(hd>0) { 
sa=fb.dn(hd,'ConditionValue');
};
return(sa);
}
//***********butstoreempty**********
function butstoreempty(spage,svisit) {
var hde=0; 
hde=fb.qwhere('select C.CategoryID,D.PrescriptionID from PrescriptionDetails D inner join PrescriptionCondition C on C.ConditionID=D.ConditionID',"PrescriptionID='"+svisit+"' and CategoryID="+spage);
if(hde>0) { 
return(false);
} else { 
return(true);
};
}
//***********butgetpagelong**********
function butgetpagelong(scat,svis,spat) {
var hd=0,ia=0,i=0,n=0,ic=0,hdi=0; 
var ba=false; 
var sa='',sb='',sf='',sc='',s1='',s2='',s3='',s4='',s5='',s6='',s7='',cdel='',cblock='',sn='',sm=''; 
cdel=fc.chr(254);
cblock=fc.chr(253);
sa='P.ConditionID,P.CategoryID,P.HeaderTextID,P.ConditionTypeID,P.ConditionName,P.Position,P.conditiongroupId,P.IsActive';
sa=sa+',V.ConditionPosition,V.ConditionValueID,V.ConditionValues,V.ConditionPos';
sa=sa+',D.ConditionValueID As condid,D.ConditionValue,D.patientid';
sa='select '+sa+' from PrescriptionCondition P ';
sa=sa+"left join PrescriptionConditionValue V on (V.ConditionID=P.ConditionID and V.IsActive='true') ";
sa=sa+"left join PrescriptionDetails D on (D.ConditionID=P.ConditionID and D.PrescriptionID='"+svis+"') ";
hd=fb.qget(sa,0,"P.CategoryID='"+scat+"' and P.IsActive='true' order by P.Position,V.ConditionPos");
sf=fb.dfields(hd);
s2='';
s1='';
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)) { 
break;
};
if(s2!=fb.dn(hd,'Position')) { 
if(s2!='') { 
s1=s1+sb+fc.xleft(s6)+cdel+fc.xleft(s7)+cdel+fc.xleft(s4)+cdel+cblock;
};
sb='';
s4='';
s6='';
s7='';
s2=fb.dn(hd,'Position');
for(i=1;i<=8;i++){
sb=sb+fb.dnno(hd,i)+cdel;
};
};
s5=fb.dn(hd,'condid');
if(s5=='0') { 
s5=fb.dn(hd,'ConditionValue');
s4=s4+s5+'~';
} else { 
if(fc.xitemnum(s4,s5,'~')==0) { 
s4=s4+s5+'~';
};
};
if(fc.xitemnum(s7,fb.dn(hd,'ConditionValueID'),'~')==0) { 
s7=s7+fb.dn(hd,'ConditionValueID')+'~';
};
if(fc.xitemnum(s6,fb.dn(hd,'ConditionValues'),'~')==0) { 
s6=s6+fb.dn(hd,'ConditionValues')+'~';
};
};
};
if(s2!='') { 
s1=s1+sb+fc.xleft(s6)+cdel+fc.xleft(s7)+cdel+fc.xleft(s4)+cdel+cblock;
};
s2='ConditionID,CategoryID,HeaderTextID,ConditionTypeID,ConditionName,Position,conditiongroupId,IsActive,Controls,CDetails,Details,DetailsBack';
ba=true;
if(ba) { 
hdi=fb.qresultbuild(s2,s1);
ia=0;
sa='';
if(hdi>0) { 
for(;;) {
ia++;
if(fb.dnextno(hdi,ia)) { 
break;
};
fb.dnput(hdi,'Details','');
sa=sa+fb.drec(hdi)+fc.chr(253);
};
};
fb.sysput('page_'+scat,sa);
return(sa);
};
return('');
}
//***********butgetpagecmp**********
function butgetpagecmp(sn,sm) {
var i=0,j=0,l=0,n=0; 
var ba=false; 
var s1='',s11='',s2='',s22='',s3='',s4='',cdel='',cblock=''; 
cdel=fc.chr(254);
cblock=fc.chr(253);
l=fc.xitemcount(sn,cblock);
ba=false;
for(i=1;i<=fc.xitemcount(sm,cblock);i++){
s1=fc.xitemget(sm,i,cblock);
if(s1=='') { 
continue;
};
s2=fc.xitemget(sn,i,cblock);
if(fc.xitemget(s1,1,cdel)==fc.xitemget(s2,1,cdel)) { 
} else { 
ba=true;
break;
};
};
if(ba==false) { 
return(sn);
};
for(i=1;i<=fc.xitemcount(sm,cblock);i++){
s1=fc.xitemget(sm,i,cblock);
if(s1=='') { 
continue;
};
if(n==0) { 
n=fc.xitemcount(s1,cdel)-1;
};
s11=fc.xitemget(s1,1,cdel);
ba=false;
for(j=1;j<=l;j++){
s2=fc.xitemget(sn,j,cblock);
if(s2=='') { 
continue;
};
s22=fc.xitemget(s2,1,cdel);
if(s11==s22) { 
s4=fc.xitemget(s2,n,cdel);
s1=fc.xitemrep(s1,s4,n,cdel);
s3=s3+s1+cblock;
ba=true;
break;
};
};
if(ba==false) { 
s3=s3+s1+cblock;
};
};
return(s3);
}
//***********butgetpagefast**********
function butgetpagefast(scat,svis,spat) {
var hd=0,ia=0,i=0,n=0,ic=0,hdi=0; 
var ba=false; 
var sa='',sb='',sf='',sc='',s1='',s2='',s3='',s4='',s5='',s6='',s7='',cdel='',cblock='',sn='',sm=''; 
cdel=fc.chr(254);
cblock=fc.chr(253);
sn=butstoreget((fc.xis(scat)+1200)+'',svis,spat);
if(sn!='') { 
s2='ConditionID,CategoryID,HeaderTextID,ConditionTypeID,ConditionName,Position,conditiongroupId,IsActive,Controls,CDetails,Details,DetailsBack';
hd=fb.qresultbuild(s2,sn);
return(hd);
};
return(0);
}
//***********butgetpage**********
function butgetpage(scat,svis,spat) {
var hd=0,ia=0,i=0,n=0,ic=0,hdi=0; 
var ba=false; 
var sa='',sb='',sf='',sc='',s1='',s2='',s3='',s4='',s5='',s6='',s7='',cdel='',cblock='',sn='',sm=''; 
cdel=fc.chr(254);
cblock=fc.chr(253);
sn=butstoreget((fc.xis(scat)+1200)+'',svis,spat);
sm=fb.sysfind('page_'+scat);
if(sm=='') { 
sm=butgetpagelong(scat,svis,spat);
};
if(sn!='') { 
sn=butgetpagecmp(sn,sm);
s2='ConditionID,CategoryID,HeaderTextID,ConditionTypeID,ConditionName,Position,conditiongroupId,IsActive,Controls,CDetails,Details,DetailsBack';
hd=fb.qresultbuild(s2,sn);
return(hd);
};
if(butstoreempty(scat,svis)) { 
sn=sm;
if(sn!='') { 
s2='ConditionID,CategoryID,HeaderTextID,ConditionTypeID,ConditionName,Position,conditiongroupId,IsActive,Controls,CDetails,Details,DetailsBack';
hd=fb.qresultbuild(s2,sn);
return(hd);
} else { 
ba=true;
};
} else { 
};
sa='P.ConditionID,P.CategoryID,P.HeaderTextID,P.ConditionTypeID,P.ConditionName,P.Position,P.conditiongroupId,P.IsActive';
sa=sa+',V.ConditionPosition,V.ConditionValueID,V.ConditionValues,V.ConditionPos';
sa=sa+',D.ConditionValueID As condid,D.ConditionValue,D.patientid';
sa='select '+sa+' from PrescriptionCondition P ';
sa=sa+"left join PrescriptionConditionValue V on (V.ConditionID=P.ConditionID and V.IsActive='true') ";
sa=sa+"left join PrescriptionDetails D on (D.ConditionID=P.ConditionID and D.PrescriptionID='"+svis+"') ";
hd=fb.qget(sa,0,"P.CategoryID='"+scat+"' and P.IsActive='true' order by P.Position,V.ConditionPos");
sf=fb.dfields(hd);
s2='';
s1='';
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)) { 
break;
};
if(s2!=fb.dn(hd,'Position')) { 
if(s2!='') { 
s1=s1+sb+fc.xleft(s6)+cdel+fc.xleft(s7)+cdel+fc.xleft(s4)+cdel+cblock;
};
sb='';
s4='';
s6='';
s7='';
s2=fb.dn(hd,'Position');
for(i=1;i<=8;i++){
sb=sb+fb.dnno(hd,i)+cdel;
};
};
s5=fb.dn(hd,'condid');
if(s5=='0') { 
s5=fb.dn(hd,'ConditionValue');
s4=s4+s5+'~';
} else { 
if(fc.xitemnum(s4,s5,'~')==0) { 
s4=s4+s5+'~';
};
};
if(fc.xitemnum(s7,fb.dn(hd,'ConditionValueID'),'~')==0) { 
s7=s7+fb.dn(hd,'ConditionValueID')+'~';
};
if(fc.xitemnum(s6,fb.dn(hd,'ConditionValues'),'~')==0) { 
s6=s6+fb.dn(hd,'ConditionValues')+'~';
};
};
};
if(s2!='') { 
s1=s1+sb+fc.xleft(s6)+cdel+fc.xleft(s7)+cdel+fc.xleft(s4)+cdel+cblock;
};
s2='ConditionID,CategoryID,HeaderTextID,ConditionTypeID,ConditionName,Position,conditiongroupId,IsActive,Controls,CDetails,Details,DetailsBack';
butstoreput((fc.xis(scat)+1200)+'',svis,spat,s1);
hd=fb.qresultbuild(s2,s1);
if(ba) { 
hdi=fb.qresultbuild(s2,s1);
ia=0;
sa='';
if(hdi>0) { 
for(;;) {
ia++;
if(fb.dnextno(hdi,ia)) { 
break;
};
fb.dnput(hdi,'Details','');
sa=sa+fb.drec(hdi)+fc.chr(253);
};
};
fb.sysput('page_'+scat,sa);
};
return(hd);
}
//***********butgetinfo**********
function butgetinfo(scat,svis) {
var i=0,j=0,k=0,hd=0,ia=0,n=0; 
var sa='',sb='',sc='',sd='',s1='',s2='',s3='',s4='',s5='',s6='',sv='',s7=''; 
if(svis=='') { 
sv=buthistoryvis(spatmain,scat,1);
} else { 
sv=svis;
};
hd=butgetpagefast(scat,sv,spatmain);
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)==1) { 
break;
};
s2=fb.dn(hd,'Details');
s7='';
if(s2!='') { 
s1=fb.dn(hd,'ConditionTypeID');
if((s1=='1')||(s1=='4')) { 
s3=fb.dn(hd,'cDetails');
n=fc.xitemnum(s3,s2,'~');
if(n>0) { 
s7=s2;
s2=fc.xitemget(fb.dn(hd,'Controls'),n,'~');
};
} else if(s1=='3') { 
s3=fb.dn(hd,'cDetails');
s6=fc.trim(fb.dn(hd,'Controls'));
s5='';
for(i=1;i<=fc.xitemcount(s2,'~');i++){
s4=fc.xitemget(s2,i,'~');
n=fc.xitemnum(s3,s4,'~');
if(n>0) { 
s7=s7+s4+':';
if(s6!='') { 
s5=s5+fc.xitemget(fb.dn(hd,'Controls'),n,'~')+':';
} else { 
s5=s5+' '+':';
};
};
};
s2=fc.xleft(s5);
s7=fc.xleft(s7);
};
};
s4=fb.dn(hd,'ConditionName');
if(s2!='') { 
sa=sa+fb.dn(hd,'ConditionID')+'~'+s4+'~'+s2+'~'+s7+fc.chr(10);
};
};
};
return(sa);
}
//***********butpageputinsert**********
function butpageputinsert(hdmain,spat,svisit,s66,scat) {
var i=0,j=0,k=0,l=0,hd=0,hdi=0,hdd=0,ia=0,ic=0,n=0; 
var sa='',se='',sc='',sd='',s1='',sb='',s2='',s3='',s4='',s5='',s6='',s7='',s8='',s9='',s10='',cdel='',cblock=''; 
fc.timera();
cdel=fc.chr(254);
cblock=fc.chr(253);
s3=spat;
s4=svisit;
s1=s66;
s2=fb.dblock(hdmain);
hdd=hdmain;
ia=0;
sa='';
if(hdd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hdd,ia)) { 
break;
};
fb.dnput(hdd,'Details',fc.xitemget(s66,ia,fc.chr(254)));
sa=sa+fb.drec(hdd)+fc.chr(253);
};
};
butstoreput((fc.xis(scat)+1200)+'',svismain,spatmain,sa);
return(sa);
hd=fb.qopen('PrescriptionDetails');
ia=0;
for(i=1;i<=fc.xitemcount(s2,cblock);i++){
sb=fc.xitemget(s2,i,cblock);
se=fc.xitemget(sb,4,cdel);
s6=fc.xitemget(sb,1,cdel);
s7=fc.xitemget(sb,10,cdel);
s8=fc.xitemget(sb,11,cdel);
s9=fc.xitemget(s1,i,cdel);
sc="";
hdi=fb.qgethd('PrescriptionDetails',0,"PrescriptionID='"+s4+"' and ConditionID="+s6);
ia=0;
if(hdi>0) { 
for(;;) {
ia++;
if(fb.dnextno(hdi,ia)) { 
break;
};
s5=fb.dn(hdi,"ConditionValueID");
if(s5=="0") { 
s5=fb.dn(hdi,"ConditionValue");
if(s9=="") { 
fb.qdelete('PrescriptionDetails',"PrescriptionID='"+s4+"' and ConditionID="+s6);
} else if(s9==s5) { 
s9="";
} else { 
fb.dnput(hdi,"ConditionValue",s9);
fb.qupdate(hdi,"PrescriptionID='"+s4+"' and ConditionID="+s6,'');
s9='';
};
} else { 
ic=fc.xitemnum(s9,s5,'~');
if(ic>0) { 
s9=fc.xitemrep(s9,"",ic,'~');
} else { 
sc=sc+s5+"~";
};
};
};
};
fb.qclose(hdi);
if((se=="3")||(se=="4")||(se=="1")) { 
for(k=1;k<=fc.xitemcount(sc,'~');k++){
sd=fc.xitemget(sc,k,'~');
if(sd=="") { 
continue;
};
fb.qdelete('PrescriptionDetails',"PrescriptionID='"+s4+"' and ConditionID="+s6+" and ConditionValueID="+sd,'');
};
for(k=1;k<=fc.xitemcount(s9,'~');k++){
sd=fc.xitemget(s9,k,'~');
if(sd=="") { 
continue;
};
fb.dnput(hd,"PrescriptionID",s4);
fb.dnput(hd,"PatientID",s3);
fb.dnput(hd,"ConditionID",s6);
fb.dnput(hd,"ConditionValueID",sd);
fb.dnput(hd,"ConditionValue","");
fb.qinsert(hd,'');
};
} else { 
if(s9!="") { 
fb.dnput(hd,"PrescriptionID",s4);
fb.dnput(hd,"PatientID",s3);
fb.dnput(hd,"ConditionID",s6);
fb.dnput(hd,"ConditionValueID","0");
fb.dnput(hd,"ConditionValue",s9);
fb.qinsert(hd,'');
};
};
};
fb.qclose(hd);
}
//***********butline**********
function butline(sname,stype,scond,sef,sed,see) {
var hdn=0,hdd=0,i=0,j=0,k=0,m=0,n=0,ia=0,iw=0,iwd=0,ih=0,iflag=0,iflaga=0,i1=0,i2=0,i3=0,i4=0; 
var sa='',sb='',sc='',sca='',sd='',se='',sf='',sg='',sgg='',sh='',sn='',snc='',sns='',sw='',seee='',skey='',icwidth='',icmany='',sb1='',sb2='',sb3='',sb4='',sb5='',sb6='',sb7='',sc1='',sc2='',ihid=''; 
sname=fc.xitemget(sname,1,'!');
if(stype=='3') { 
sd='0';
j=0;
snc='';
icwidth=0;
for(k=1;k<=fc.xitemcount(sef,'~');k++){
sf=fc.xitemget(sed,k,'~');
se=fc.xitemget(sef,k,'~');
sg='';
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class')(snc=
fp.class(fc.xitemlast(se,1,':')));
if(sn=='prewidth')(icwidth=fc.xis(fc.xitemlast(se,1,':')));
if(se=='repeat:hor') { 
sd='1';
};
if(se=='repeat:ver') { 
sd='2';
};
continue;
};
j++;
if(fc.xitemnum(see,sf,'~')>0) { 
sg=
fp.checked(true);
};
sc=sc+
fp.span(
fp.at(fp.att(fp.font_size(gifont-2))),
fp.checkbox(
fp.id(sf),fp.func(snc),fp.func(sg)),
fp.span(se))+' ~';
snc='';
};
sc=fc.xleft(sc);
if(sd=='0') { 
if(j<=2) { 
sd='1';
};
};
if(sd=='1') { 
sc=fc.strout(sc,'~','');
} else { 
sc=fc.strrep(sc,'~','<br/>');
};
if(icwidth>0) { 
sa=
fp.td(
fp.at(
fp.valign('top'),
fp.colspan(2)),
fp.table(
fp.tr(
fp.td(
fp.td(
fp.at(
fp.valign('top'),fp.att(fp.width(icwidth))),fp.func(sname))),
fp.td(
fp.at(
fp.class('treeblockdetail')),
fp.span(fp.func(sc))))));
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.at(
fp.class('treeblockdetail')),
fp.span(fp.func(sc)));
};
} else if(stype=='2') { 
iw=200;
iflag=0;
icwidth=0;
ihid=0;
icmany=0;
iflaga=0;
sb2='';
sb3='';
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
if(sn=='prewidth') { 
icwidth=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='width') { 
iw=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='hidden') { 
ihid=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='many') { 
icmany=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='manyhead') { 
sb2=fc.xitemlast(se,2,':');
icmany=fc.xis(fc.xitemget(se,2,':'));
iflaga=1;
};
if(sn=='span') { 
iflag=1;
};
if(sn=='table') { 
sb2=fc.xitemget(se,2,':');
sb3=fc.xitemget(se,3,':');
sb4=fc.xitemget(se,4,':');
};
continue;
};
};
sf=scond;
if(sname=='Notes') { 
sc=sc+
fp.memo(
fp.at(
fp.id(sf),fp.func(snc),fp.att(fp.font_size(gifont),fp.height(100),fp.width(360))),fp.func(see));
} else { 
if(icmany>0) { 
sb1='';
for(k=1;k<=icmany;k++){
if(k>1) { 
sb1='x'+k;
};
if(iflaga==1) { 
sc=sc+
fp.td(
fp.edit(
fp.id(sf+sb1),fp.func(snc),
fp.disabled(true),fp.att(fp.font_size(gifont),
fp.border_color('transparent'),fp.color('black'),fp.background_color('transparent'),fp.width(iw)),
fp.value(fc.xitemget(sb2,k,'.'))));
} else { 
sc=sc+
fp.td(
fp.edit(
fp.id(sf+sb1),fp.func(snc),fp.att(fp.width(iw),fp.font_size(gifont)),
fp.value(fc.xitemget(see,k,':'))));
};
};

fp.table(
fp.tr(fp.func(sc)));
} else if(sb3!='') { 
sc1='';
for(i1=1;i1<=fc.xitemcount(sb2,'.');i1++){
sc1=sc1+
fp.td(
fp.at(
fp.align('center')),fp.func(fc.xitemget(sb2,i1,'.')));
};
sc=sc+
fp.tr(fp.func(sc1));
i2=fc.xitemcount(sb2,'.')-1;
sb1='';
i4=0;
for(i1=1;i1<=fc.xitemcount(sb3,'.');i1++){
sc1=
fp.td(fc.xitemget(sb3,i1,'.'));
for(i3=1;i3<=i2;i3++){
i4++;
if(i4>1) { 
sb1='x'+i4;
};
if(sb4!='') { 
if(i4<=fc.len(sb4)) { 
sb5=fc.mid(sb4,i4,1);
} else { 
sb5='E';
};
if(sb5=='E') { 
sc1=sc1+
fp.td(
fp.edit(
fp.id(sf+sb1),fp.func(snc),fp.att(fp.width(iw),fp.font_size(gifont)),
fp.value(fc.xitemget(see,i4+2,':'))));
} else { 
if(fc.xitemget(see,i4+2,':')=='X') { 
sg=
fp.checked(true);
} else { 
sg='';
};
sc1=sc1+
fp.td(
fp.checkbox(
fp.id(sf+sb1),fp.func(snc),fp.func(sg),fp.att(fp.width(iw))));
};
} else { 
sc1=sc1+
fp.td(
fp.edit(
fp.id(sf+sb1),fp.func(snc),fp.att(fp.width(iw),fp.font_size(gifont)),
fp.value(fc.xitemget(see,i4+2,':'))));
};
};
sc=sc+
fp.tr(fp.func(sc1));
};
sc=
fp.table(fp.func(sc));
} else if(ihid>0) { 
sb7=fc.xitemget(see,2,'<');
sb7=fc.xitemlast(sb7,1,'>');
sc=sc+
fp.edit(
fp.id(sf),fp.func(snc),fp.att(
fp.display('none'),fp.font_size(gifont)),
fp.value(sb7));
} else { 
sc=sc+
fp.edit(
fp.id(sf),fp.func(snc),fp.att(fp.font_size(gifont),fp.width(iw)),
fp.value(fc.xitemget(see,1,'~')));
};
};
if(iflag==1) { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sc));
sa=sa+
fp.td();
} else { 
if(icwidth>0) { 
sa=
fp.td(
fp.at(
fp.valign('top'),
fp.colspan(2)),
fp.table(
fp.tr(
fp.td(
fp.td(
fp.at(
fp.valign('top'),fp.att(fp.width(icwidth))),fp.func(sname))),
fp.td(fp.func(sc)))));
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
};
};
} else if(stype=='4') { 
sd='0';
sns='';
snc='';
iw=70;
j=0;
icwidth=0;
for(k=1;k<=fc.xitemcount(sef,'~');k++){
sf=fc.xitemget(sed,k,'~');
se=fc.xitemget(sef,k,'~');
sg='';
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
if(sn=='prewidth') { 
icwidth=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='at') { 
sns=
fp.at(fc.xitemlast(se,1,':'));
};
if(se=='repeat:hor') { 
sd='1';
};
if(se=='repeat:ver') { 
sd='2';
};
continue;
};
j++;
if(fc.xitemnum(see,sf,'~')>0) { 
sg=
fp.checked(true);
};
sc=sc+
fp.span(
fp.radio(
fp.id(sf),fp.func(snc),fp.func(sg),
fp.name(scond),
fp.value(sf)),
fp.span(fp.func(se)))+' ~';
snc='';
};
sc=fc.xleft(sc);
if(sd=='0') { 
if(j<=4) { 
sd='1';
};
};
if(sd=='1') { 
sca='';
for(m=1;m<=fc.xitemcount(sc,'~');m++){
sca=sca+
fp.td(fp.func(sns),fc.xitemget(sc,m,'~'));
};
sc=
fp.table(
fp.at(fp.att(fp.font_size(gifont-2))),
fp.tr(fp.func(sca)));
} else { 
sca='';
for(m=1;m<=fc.xitemcount(sc,'~');m++){
sca=sca+
fp.tr(
fp.td(fp.func(sns),fc.xitemget(sc,m,'~')));
};
sc=
fp.table(
fp.at(fp.att(fp.font_size(gifont-2))),fp.func(sca));
};
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.at(
fp.class('treeblockdetail')),fp.func(sc));
if(icwidth>0) { 
sa=
fp.td(
fp.at(
fp.valign('top'),
fp.colspan(2)),
fp.table(
fp.tr(
fp.td(
fp.td(
fp.at(
fp.valign('top'),fp.att(fp.width(icwidth))),fp.func(sname))),
fp.td(
fp.at(
fp.class('treeblockdetail')),fp.func(sc)))));
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.at(
fp.class('treeblockdetail')),fp.func(sc));
};
} else if(stype=='1') { 
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
sf=fc.xitemget(sed,k,'~');
se=fc.xitemget(sef,k,'~');
sg='';
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
continue;
};
if(fc.xitemnum(see,sf,'~')>0) { 
se='*'+se;
};
sc=sc+se+',';
};
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.dropdowntext(
fp.at(
fp.id(scond),fp.func(snc),fp.att(fp.font_size(gifont))),fc.xleft('--Select--,'+sc)));
snc='';
} else if(stype=='7') { 
iw=200;
iflag=0;
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
sgg=fc.xitemlast(se,1,':');
if(sn=='class') { 
snc=
fp.class(sgg);
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
if(sn=='width') { 
iw=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='span') { 
iflag=1;
};
if(sn=='attr') { 
if(fc.xitemget(sgg,1,':')=='class') { 
snc=
fp.class(fc.xitemlast(sgg,1,':'));
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
};
continue;
};
};
sf=scond;
sc=sc+
fp.edit(
fp.id(sf),fp.func(snc),fp.att(fp.font_size(gifont),fp.width(iw)),
fp.value(fc.xitemget(see,1,'~')));
if(iflag==1) { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sc));
sa=sa+
fp.td();
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
};
} else if(stype=='12') { 
iw=850;
ih=450;
iflag=0;
sb2='';
sb3='';
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
sgg=fc.xitemlast(se,1,':');
if(sn=='class') { 
snc=
fp.class(sgg);
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
if(sn=='width') { 
iw=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='height') { 
ih=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='span') { 
iflag=1;
};
if(sn=='attr') { 
if(fc.xitemget(sgg,1,':')=='class') { 
snc=
fp.class(fc.xitemlast(sgg,1,':'));
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
};
if(sn=='table') { 
sb2=fc.xitemget(se,2,':');
sb3=fc.xitemget(se,3,':');
};
if(sn=='picture') { 
sb6=fc.xitemlast(se,1,':');
};
continue;
};
};
sf=scond;
seee=see;
seditinit=seditinit+sf+',';
if(sb3!='') { 
sc1='';
for(i1=1;i1<=fc.xitemcount(sb2,'.');i1++){
sc1=sc1+
fp.td(fp.func(fc.xitemget(sb2,i1,'.')));
};
sc=sc+
fp.tr(fp.func(sc1));
i2=fc.xitemcount(sb2,'.')-1;
sb1='';
i4=0;
for(i1=1;i1<=fc.xitemcount(sb3,'.');i1++){
sc1=
fp.td(fc.xitemget(sb3,i1,'.'));
for(i3=1;i3<=i2;i3++){
i4++;
if(i4>1) { 
sb1='x'+i4;
};
sc1=sc1+
fp.td(
fp.edit(
fp.id(sf+sb1),fp.func(snc),fp.att(fp.font_size(gifont),fp.width(iw)),
fp.value(fc.xitemget(see,i4+2,':'))));
};
sc=sc+
fp.tr(fp.func(sc1));
};
sc=
fp.table(fp.func(sc));
};
if(iwidth12!=0) { 
iw=iwidth12;
};
if(iheight12!=0) { 
ih=iheight12;
};
if(sb6!='') { 
sc=
fp.img(
fp.id(sf+'pic'),fp.att(fp.width(iw),fp.height(ih)),
fp.src(''));
sc=sc+
fp.memo(
fp.at(
fp.id(sf),fp.func(snc),fp.att(fp.font_size(gifont),
fp.display('none'))));
} else { 
if(seee=='') { 
seee='<br>';
};
seee=fc.strrep(seee,'\n','<br>');
sc=sc+
fp.memo(
fp.at(
fp.id(sf),fp.func(snc),fp.att(fp.font_size(gifont),fp.background_color('white'),fp.width(iw),fp.height(ih))),fp.func(seee));
seditinit=seditinit+sf+',';
};
sa=
fp.td(
fp.at(
fp.colspan(2),
fp.valign('top')),fp.func(sc));
} else if(stype=='13') { 
iw=200;
iflag=0;
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
sgg=fc.xitemlast(se,1,':');
if(sn=='class') { 
snc=
fp.class(sgg);
};
if(sn=='width') { 
iw=fc.xis(sgg);
};
if(sn=='span') { 
iflag=1;
};
if(sn=='value') { 
see=sgg;
};
if(sn=='widthname') { 
iwidthname=fc.xis(sgg);
};
continue;
};
};
sf=scond;
sc=sc+
fp.hidden(
fp.id(sf),fp.func(snc),fp.att(fp.width(iw)),
fp.value(see));
if(iflag==1) { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sc));
sa=sa+
fp.td();
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
};
} else if(stype=='5') { 
sf=scond;
sg='';
snc='';
iwd=100;
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=' '+fc.xitemlast(se,1,':');
};
if(sn=='width') { 
iwd=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='span') { 
iflag=1;
};
continue;
};
};
sc=sc+
fp.edit(
fp.id(sf),fp.att(
fp.bggray(),fp.width(iwd),fp.font_size(gifont)),
fp.class('cdat'+snc),
fp.value(see));
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td();
};
return(sa);
}
//***********butbook**********
function butbook(spage,svisit,spat,ihmain) {
var hd=0,hds=0,hdv=0,hdd=0,i=0,j=0,k=0,l=0,n=0,ia=0,ib=0,isg=0,ba=0; 
var sa='',sb='',stmp='',stype='',svalue='',sc='',scl='',sd='',se='',seh='',see='',sea='',sf='',sg='',sgg='',sh='',shh='',shdesc='',shd='',shda='',shb='',shc='',scond='',idc=''; 
spagecur=spage;
idc=svisit;
iwidthname=400;
seh=fb.sysfind("OFFPages-"+spage);
gheadkeep='';
hd=butgetpage(spage,idc,spat);
hdmain=hd;
stmp=fc.etimer();
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)==1) { 
break;
};
scond=fb.dn(hd,'ConditionID');
if(fc.itemnum(seh,scond)>0) { 
continue;
};
sf=fc.xitemgetback(fb.dn(hd,'ConditionName'),1,']');
stype=fb.dn(hd,'ConditionTypeID');
svalue=fb.dn(hd,'CDetails');
sgg=fb.dn(hd,'conditiongroupId');
if(sg!=sgg) { 
sg=sgg;
shdesc='';
shda='';
isg=ia;
shb=isg+'';
sb=sb+
fp.tr(
fp.at(
fp.id('node'+ia),
fp.onclick('buthead("'+'node'+ia+'","'+sf+'")')),
fp.td(
fp.at(
fp.colspan(2),fp.att(fp.font_size(gifont))),
fp.bold(fp.func(sf))))+fc.cr();
continue;
};
shh=fb.dn(hd,'HeaderTextID');
if(sh!=shh) { 
if(shh!='') { 
hds=fb.qwhere('select * from PrescriptionHeaderText','HeaderTextID='+shh);
if(hds>0) { 
shd=fb.dn(hds,'HeaderText');
shda='*';
gheadkeep=gheadkeep+shh+','+shd+',';
if((stype=='4')&&(svalue=='')) { 
for(j=1;j<=fc.xitemcount(shd,'!');j++){
if(fc.xitemget(shd,j,'!')==fc.xitemget(shdesc,j,'!')) { 
shda=shda+'*';
};
};
shdesc=shd;
sh=shh;
scl='child-of-node'+fc.xitemget(shb,fc.len(shda),'!');
sb=sb+
fp.tr(
fp.at(
fp.id('node'+ia),
fp.class(scl),
fp.onclick('buthead("'+'node'+ia+'","'+sf+'")'),fp.att(fp.font_size(gifont))),
fp.td(
fp.at(
fp.colspan(2)),fp.func(sf)))+fc.cr();
isg=ia;
shc='';
for(j=1;j<=fc.len(shda);j++){
shc=shc+fc.xitemget(shb,j,'!')+'!';
};
shb=shc+isg;
continue;
} else { 
for(j=1;j<=fc.xitemcount(shdesc,'!');j++){
if(fc.xitemget(shd,j,'!')==fc.xitemget(shdesc,j,'!')) { 
shda=shda+'*';
};
};
shdesc=shd;
sh=shh;
shc='';
for(j=1;j<=fc.len(shda);j++){
isg=fc.xitemget(shb,j,'!');
shc=shc+isg+'!';
};
shb=fc.xleft(shc);
};
};
};
};
if(shh=='') { 
shb=fc.xitemget(shb,1,'!');
isg=fc.xis(shb);
};
scond=fb.dn(hd,'ConditionID');
ib=0;
see='';
sc=butline(sf,stype,scond,fb.dn(hd,'Controls'),svalue,fb.dn(hd,'Details'));
sb=sb+
fp.tr(
fp.at(
fp.id('node'+ia),fp.att(fp.font_size(gifont)),
fp.class('child-of-node'+isg),
fp.onclick('butchild("'+'node'+ia+'","'+'child-of-node'+isg+'")')),fp.func(sc))+fc.cr();
};
};
sb=
fp.div(
fp.at(
fp.id('idtreeblock'),
fp.class('treeblock'),fp.att(
fp.overflow('auto'),fp.height(ihmain),fp.width(giwidth-8))),
fp.table(
fp.at(
fp.id('idtree'),
fp.cellspacing(4),fp.att(
fp.margin_left(15))),
fp.tr(
fp.td(
fp.at(fp.att(fp.width(iwidthname)))),
fp.td()),fp.func(sb)));
return(sb);
}
//***********butbooksave**********
function butbooksave(scat,svisit,spat) {
var hd=0,hds=0,hdv=0,hdd=0,i=0,j=0,k=0,l=0,n=0,ia=0,ib=0,isg=0,iaf=0,ba=0,i1=0,i2=0,i3=0,i4=0,iw=0,ih=0,it1=0,it2=0,it3=0,it4=0,it8=0,it9=0; 
var scatid='',s1='',s2='',s3='',s4='',s5='',s6='',stype='',seh='',scond='',sa='',sa1='',sb='',sc='',scl='',sd='',se='',see='',sea='',sf='',sg='',sgg='',sh='',shh='',shdesc='',shd='',shda='',shb='',shc='',st1='',st2='',st3='',st4='',st5='',st6='',st7='',st8='',st9=''; 
hd=hdmain;
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)==1) { 
break;
};
if(iaf==0) { 
seh=fb.sysfind("OFFPages-"+fb.dn(hd,'CategoryID'));
iaf=1;
};
scond=fb.dn(hd,'ConditionID');
if(fc.itemnum(seh,scond)>0) { 
s6=s6+fc.chr(254);
continue;
};
scatid=fb.dn(hd,'CategoryID');
gscatid=scatid;
sf=fc.xitemgetback(fb.dn(hd,'ConditionName'),1,']');
s1=fb.dn(hd,'Controls');
s2=fb.dn(hd,'CDetails');
s3=fb.dn(hd,'Details');
stype=fb.dn(hd,'ConditionTypeID');
scond=fb.dn(hd,'ConditionID');
if(stype=='3') { 
s4='';
for(i=1;i<=fc.xitemcount(s2,'~');i++){
se=fc.xitemget(s1,i,'~');
if(fc.xitemcount(se,':')>1) { 
continue;
};
sa=fc.xitemget(s2,i,'~');
if(fj.jattr(sa,'checked')) { 
s4=s4+sa+'~';
};
};
fb.dnput(hd,'DetailsBack',fc.xleft(s4));
} else if(stype=='4') { 
s4='';
for(i=1;i<=fc.xitemcount(s2,'~');i++){
se=fc.xitemget(s1,i,'~');
if(fc.xitemcount(se,':')>1) { 
continue;
};
if(se!='Off') { 
sa=fc.xitemget(s2,i,'~');
if(fj.jattr(sa,'checked')) { 
s4=s4+sa+'~';
};
};
};
fb.dnput(hd,'DetailsBack',fc.xleft(s4));
} else if(stype=='1') { 
s4='';
s5=fj.jval(scond);
for(i=1;i<=fc.xitemcount(s2,'~');i++){
se=fc.xitemget(s1,i,'~');
if(fc.xitemcount(se,':')>1) { 
continue;
};
sa=fc.xitemget(s2,i,'~');
if(s5==se) { 
s4=s4+sa+'~';
};
};
fb.dnput(hd,'DetailsBack',fc.xleft(s4));
} else if(stype=='2') { 
it9=0;
sa=scond;
i1=fc.xitemnumin(s1,'many','~');
i2=fc.xitemnumin(s1,'table','~');
if(i1>0) { 
i1=fc.xis(fc.xitemget(fc.xitemget(s1,i1,'~'),2,':'));
s4=fj.jval(sa);
for(i3=2;i3<=i1;i3++){
s4=s4+':'+fj.jval(sa+'x'+i3);
};
} else if(i2>0) { 
st1=fc.xitemget(s1,i2,'~');
st5='';
st4='';
i4=fc.xitemnumin(s1,'widthprint','~');
if(i4>0) { 
i4=fc.xitemget(fc.xitemget(s1,i4,'~'),2,':');
} else { 
i4='200';
};
st2=fc.xitemget(st1,3,':');
st7=fc.xitemget(st1,4,':');
st8=fc.xitemget(st1,5,':');
st1=fc.xitemget(st1,2,':');
st3='';
it1=fc.xis(fc.xitemcount(st1,'.')-1)*fc.xis(fc.xitemcount(st2,'.'));
for(it2=1;it2<=it1;it2++){
if(st7!='') { 
if(it2<=fc.len(st7)) { 
st6=fc.mid(st7,it2,1);
} else { 
st6='E';
};
if(it2==1) { 
if(st6=='E') { 
st3=fj.jval(sa);
} else { 
if(fj.jattr(sa,'checked')) { 
st3='X';
} else { 
st3=' ';
};
};
} else { 
if(st6=='E') { 
st3=st3+':'+fj.jval(sa+'x'+it2);
} else { 
if(fj.jattr(sa+'x'+it2,'checked')) { 
st3=st3+':X';
} else { 
st3=st3+': ';
};
};
};
} else { 
if(it2==1) { 
st3=fj.jval(sa);
} else { 
st3=st3+':'+fj.jval(sa+'x'+it2);
};
};
};
for(it1=1;it1<=fc.xitemcount(st1,'.');it1++){
st4=st4+
fp.td(fp.func(fc.xitemget(st1,it1,'.')));
};
st5=st5+
fp.tr(fp.func(st4));
it2=fc.xitemcount(st1,'.')-1;
it4=0;
for(it1=1;it1<=fc.xitemcount(st2,'.');it1++){
st4=
fp.td(fc.xitemget(st2,it1,'.'));
it8=0;
for(it3=1;it3<=it2;it3++){
it4++;
st9=fc.trim(fc.xitemget(st3,it4,':'));
st4=st4+'<td style="width:'+i4+'px">'+fp.func(st9)+'</td>';
if(st9!='') { 
it9=1;
it8=1;
};
};
if(st8!='') { 
if(it8==1) { 
st5=st5+
fp.tr(fp.func(st4));
};
} else { 
st5=st5+
fp.tr(fp.func(st4));
};
};
s4='<div style="display:none">:'+st3+':</div>';
s4=s4+'<table cellpadding="0px" cellspacing="0px" style="padding-top:0px;padding-bottom:0px" >'+st5+'</table>';
if(st7!='') { 
if(it9==0) { 
s4='';
};
};
} else { 
s4=fj.jval(sa);
};
fb.dnput(hd,'DetailsBack',s4);
} else if(stype=='5') { 
sa=scond;
s4=fj.jval(sa);
fb.dnput(hd,'DetailsBack',s4);
} else if(stype=='7') { 
sa=scond;
s4=fj.jval(sa);
fb.dnput(hd,'DetailsBack',s4);
} else if(stype=='12') { 
sa=scond;
i1=fc.xitemnumin(s1,'table','~');
i2=fc.xitemnumin(s1,'picture','~');
if(i1>0) { 
st1=fc.xitemget(s1,i1,'~');
st5='';
st4='';
st2=fc.xitemget(st1,3,':');
st1=fc.xitemget(st1,2,':');
st3=s4;
it1=fc.xis(fc.xitemcount(st1,'.')-1)*fc.xis(fc.xitemcount(st2,'.'));
for(it2=2;it2<=it1;it2++){
st3=st3+':'+fj.jval(sa+'x'+it2);
};
for(it1=1;it1<=fc.xitemcount(st1,'.');it1++){
st4=st4+
fp.td(fp.func(fc.xitemget(st1,it1,'.')));
};
st5=st5+
fp.tr(fp.func(st4));
it2=fc.xitemcount(st2,'.')-1;
it4=0;
for(it1=1;it1<=fc.xitemcount(st2,'.');it1++){
st4=
fp.td(fc.xitemget(st2,it1,'.'));
for(it3=1;it3<=it2;it3++){
it4++;
st4=st4+
fp.td(fc.xitemget(st3,it4,':'));
};
st5=st5+
fp.tr(fp.func(st4));
};
s4='<div style="display:none">:'+st3+':</div>';
s4=s4+
fp.table(fp.func(st5));
} else if(i2>0) { 
iw=800;
ih=450;
i3=fc.xitemnumin(s1,'width','~');
if(i3>0) { 
st1=fc.xitemget(s1,i3,'~');
iw=fc.xis(fc.xitemlast(st1,1,':'));
};
i3=fc.xitemnumin(s1,'height','~');
if(i3>0) { 
st1=fc.xitemget(s1,i3,'~');
ih=fc.xis(fc.xitemlast(st1,1,':'));
};
st2=fj.jval(sa);
if(fc.len(st2)>25) { 
s4='';
s4=s4+'<img src="'+st2+'" />';
} else { 
s4='';
};
} else { 
s4=fc.strout(fj.jval(sa),'\n');
if(s4=='<br>') { 
s4='';
};
};
fb.dnput(hd,'DetailsBack',s4);
} else { 
fb.dnput(hd,'DetailsBack','');
};
s6=s6+fb.dn(hd,'DetailsBack')+fc.chr(254);
};
};
sa1=butpageputinsert(hdmain,spat,svisit,s6,scat);
fb.daudit('Page Save:'+scatid+':'+fc.right(svisit,5));
return(sa1);
}
//***********getyesno**********
function getyesno(ss) {
var i=0,j=0; 
var sa='',sb='',sc='',sd='',se='',sf=''; 
j=fc.xitemcount(ss,'.')-1;
for(i=1;i<=j;i++){
sc=fc.xitemget(ss,i,'.');
sd=fc.trim(fc.xitemget(sc,1,'-'));
se=fc.xitemget(sc,2,'-');
if(se==' Yes') { 
sa=sa+sd+', ';
} else if(se==' No') { 
sb=sb+sd+', ';
} else { 
sf=sf+fc.trim(sc)+'. ';
};
};
if(sa!='') { 
sa=fc.xleft(fc.xleft(sa));
j=fc.itemcount(sa);
if(j==1) { 
sa='Has '+fc.lcase(sa)+'. ';
} else { 
sa='Has '+fc.lcase(fc.itemfirst(sa,1)+' and '+fc.itemget(sa,j))+'. ';
};
sa=
fp.bold(
fp.italic(fp.func(sa)));
};
if(sb!='') { 
sb=fc.xleft(fc.xleft(sb));
j=fc.itemcount(sb);
if(j==1) { 
sb='Denies '+fc.lcase(sb)+'. ';
} else { 
sb='Denies '+fc.lcase(fc.itemfirst(sb,1)+' and '+fc.itemget(sb,j))+'. ';
};
};
return(sa+sb+sf);
}
//***********headformat**********
function headformat(ss) {
var i=0; 
var sa='',sb=''; 
sa=fc.strrep(fc.xitemgetback(ss,1,']'));
if(fc.trim(sa)=='') { 
sa=' ';
} else { 
sa=sa+': ';
};
if(fc.xitemcount(sa,'!')>1) { 
if(fc.xitemget(sa,1,'!')==sgrp) { 
sa='!'+fc.xitemlast(sa,1,'!');
} else { 
sgrp=fc.xitemget(sa,1,'!');
};
};
if(fc.left(sa,1)=='!') { 
sa=fc.strrep(sa,'!',' -');
sa=
fp.italic(fp.func(sa));
} else { 
sb=fc.xitemget(sa,1,'!');
sa=fc.xitemlast(sa,1,'!');
sa=fc.strrep(sa,'!',' -');
if(sa!='') { 
sa=' -'+sa;
};
if(fc.left(fc.lcase(sb),7)=='comment') { 
sb='';
};
sa=
fp.italic(
fp.bold(fp.func(sb)),fp.func(sa));
};
return(sa);
}
//***********butlinecn**********
function butlinecn(sname,stype,scond,sef,sed,see,sprename) {
var hdn=0,hdd=0,i=0,j=0,k=0,m=0,n=0,ia=0,iw=0,ih=0,iflag=0; 
var sa='',sb='',sc='',sca='',sd='',se='',sf='',sg='',sgg='',sh='',sn='',snc='',sns='',sw='',seee='',skey='',s1='',s2='',s3='',s4='',s5='',s6=''; 
sname=fc.xitemget(sname,1,'!');
if(fc.left(sprename,5)=='[none') { 
return('');
};
if(stype=='3') { 
sd='0';
j=0;
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
sf=fc.xitemget(sed,k,'~');
se=fc.xitemget(sef,k,'~');
sg='';
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
if(se=='repeat:hor') { 
sd='1';
};
if(se=='repeat:ver') { 
sd='2';
};
continue;
};
j++;
if(fc.xitemnum(see,sf,'~')>0) { 
sg=
fp.checked(true);
s1=s1+se+',';
};
sc=sc+
fp.span(
fp.checkbox(
fp.id(sf),fp.func(snc),fp.func(sg)),
fp.span(se))+' ~';
snc='';
};
sc=fc.xleft(sc);
if(sd=='0') { 
if(j<=2) { 
sd='1';
};
};
if(sd=='1') { 
sc=fc.strout(sc,'~','');
} else { 
sc=fc.strrep(sc,'~','<br/>');
};
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.at(
fp.class('treeblockdetail')),
fp.span(fp.func(sc)));
if(s1!='') { 
s1=fc.xleft(s1);
if(sname=='') { 
s4='';
k=fc.itemcount(s1);
for(i=1;i<=k;i++){
if(i==k) { 
if(s4=='') { 
s4=s4+fc.itemget(s1,i)+'. ';
} else { 
s4=fc.xleft(fc.xleft(s4))+' and '+fc.itemget(s1,i)+'. ';
};
} else { 
s4=s4+fc.itemget(s1,i)+', ';
};
};
s1=s4;
} else { 
s4='';
k=fc.itemcount(s1);
if(fc.trim(s1)=='') { 
s1=sname+'. ';
} else { 
for(i=1;i<=k;i++){
if(i==k) { 
if(s4=='') { 
s4=s4+fc.itemget(s1,i)+'. ';
} else { 
s4=fc.xleft(fc.xleft(s4))+' and '+fc.itemget(s1,i)+'. ';
};
} else { 
s4=s4+fc.itemget(s1,i)+', ';
};
};
s1=s4;
s1=sname+' - '+s1;
};
};
};
} else if(stype=='4') { 
sd='0';
sns='';
snc='';
iw=70;
j=0;
for(k=1;k<=fc.xitemcount(sef,'~');k++){
sf=fc.xitemget(sed,k,'~');
se=fc.xitemget(sef,k,'~');
sg='';
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
if(sn=='at') { 
sns=
fp.at(fc.xitemlast(se,1,':'));
};
if(se=='repeat:hor') { 
sd='1';
};
if(se=='repeat:ver') { 
sd='2';
};
continue;
};
j++;
if(fc.xitemnum(see,sf,'~')>0) { 
sg=
fp.checked(true);
s1=s1+se+',';
};
sc=sc+
fp.span(
fp.radio(
fp.id(sf),fp.func(snc),fp.func(sg),
fp.name(scond),
fp.value(sf)),
fp.span(fp.func(se)))+' ~';
snc='';
};
sc=fc.xleft(sc);
if(sd=='0') { 
if(j<=4) { 
sd='1';
};
};
if(sd=='1') { 
sca='';
for(m=1;m<=fc.xitemcount(sc,'~');m++){
sca=sca+
fp.td(fp.func(sns),fc.xitemget(sc,m,'~'));
};
sc=
fp.table(
fp.tr(fp.func(sca)));
} else { 
sca='';
for(m=1;m<=fc.xitemcount(sc,'~');m++){
sca=sca+
fp.tr(
fp.td(fp.func(sns),fc.xitemget(sc,m,'~')));
};
sc=
fp.table(fp.func(sca));
};
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.at(
fp.class('treeblockdetail')),fp.func(sc));
if(s1!='') { 
s1=fc.xleft(s1);
if(sname=='') { 
s4='';
k=fc.itemcount(s1);
for(i=1;i<=k;i++){
if(i==k) { 
if(s4=='') { 
s4=s4+fc.itemget(s1,i)+'. ';
} else { 
s4=fc.xleft(fc.xleft(s4))+' and '+fc.itemget(s1,i)+'. ';
};
} else { 
s4=s4+fc.itemget(s1,i)+', ';
};
};
s1=s4;
} else { 
s4='';
k=fc.itemcount(s1);
if(fc.trim(s1)=='') { 
s1=sname+'. ';
} else { 
for(i=1;i<=k;i++){
if(i==k) { 
if(s4=='') { 
s4=s4+fc.itemget(s1,i)+'. ';
} else { 
s4=fc.xleft(fc.xleft(s4))+' and '+fc.itemget(s1,i)+'. ';
};
} else { 
s4=s4+fc.itemget(s1,i)+', ';
};
};
s1=s4;
s1=sname+' - '+s1;
};
};
};
} else if(stype=='1') { 
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
sf=fc.xitemget(sed,k,'~');
se=fc.xitemget(sef,k,'~');
sg='';
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
continue;
};
if(fc.xitemnum(see,sf,'~')>0) { 
s1=s1+se+',';
se='*'+se;
};
sc=sc+se+',';
};
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(
fp.dropdowntext(
fp.at(
fp.id(scond),fp.func(snc)),fc.xleft('--Select--,'+sc)));
snc='';
if(s1!='') { 
s1=fc.xleft(s1);
if(sname=='') { 
s1=s1+'. ';
} else { 
s1=sname+' - '+s1+'. ';
};
};
} else if(stype=='2') { 
iw=200;
iflag=0;
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
if(sn=='class') { 
snc=
fp.class(fc.xitemlast(se,1,':'));
};
if(sn=='width') { 
iw=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='span') { 
iflag=1;
};
continue;
};
};
sf=scond;
if(sname=='Notes') { 
sc=sc+
fp.memo(
fp.at(
fp.id(sf),fp.func(snc),fp.att(fp.height(100),fp.width(360))),fp.func(see));
sname='';
s1=see;
} else if(fc.left(sprename,2)=='[c') { 
sname='';
s1=fc.xitemget(see,1,'~');
} else { 
sc=sc+
fp.edit(
fp.id(sf),fp.func(snc),fp.att(fp.width(iw)),
fp.value(fc.xitemget(see,1,'~')));
s1=fc.xitemget(see,1,'~');
};
if(iflag==1) { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sc));
sa=sa+
fp.td();
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
};
if(s1!='') { 
if(sname=='') { 
s1=s1+'. ';
} else { 
s1=sname+' - '+s1+'. ';
};
};
} else if(stype=='7') { 
iw=200;
iflag=0;
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
sgg=fc.xitemlast(se,1,':');
if(sn=='class') { 
snc=
fp.class(sgg);
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
if(sn=='width') { 
iw=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='span') { 
iflag=1;
};
if(sn=='attr') { 
if(fc.xitemget(sgg,1,':')=='class') { 
snc=
fp.class(fc.xitemlast(sgg,1,':'));
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
};
continue;
};
};
sf=scond;
sc=sc+
fp.edit(
fp.id(sf),fp.func(snc),fp.att(fp.width(iw)),
fp.value(fc.xitemget(see,1,'~')));
s1=fc.xitemget(see,1,'~');
if(iflag==1) { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sc));
sa=sa+
fp.td();
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
};
if(s1!='') { 
if(sname=='') { 
s1=s1+'. ';
} else { 
s1=sname+' - '+s1+'. ';
};
};
} else if(stype=='12') { 
iw=850;
ih=450;
iflag=0;
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
sgg=fc.xitemlast(se,1,':');
if(sn=='class') { 
snc=
fp.class(sgg);
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
if(sn=='width') { 
iw=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='height') { 
ih=fc.xis(fc.xitemlast(se,1,':'));
};
if(sn=='span') { 
iflag=1;
};
if(sn=='attr') { 
if(fc.xitemget(sgg,1,':')=='class') { 
snc=
fp.class(fc.xitemlast(sgg,1,':'));
scomboinit=scomboinit+fc.xitemlast(sgg,1,':')+',';
};
};
continue;
};
};
sf=scond;
seee=see;
if(seee=='') { 
seee='<br>';
};
seee=fc.trim(seee);
if(fc.right(seee,4)=='<br>') { 
seee=fc.left(seee,fc.len(seee)-4);
};
if(sname=='Notes') { 
sname='';
s1=seee;
} else if(fc.left(sprename,2)=='[c') { 
sname='';
s1=seee;
} else { 
s1=seee;
};
sc=sc+
fp.memo(
fp.at(
fp.id(sf),fp.func(snc),fp.att(fp.background_color('white'),fp.width(iw),fp.height(ih))),fp.func(seee));
seditinit=seditinit+sf+',';
sa=
fp.td(
fp.at(
fp.colspan(2),
fp.valign('top')),fp.func(sc));
if(s1!='') { 
if(sname=='') { 
s1=s1;
} else { 
s1=sname+' - '+s1;
};
};
} else if(stype=='13') { 
iw=200;
iflag=0;
sf=scond;
sg='';
snc='';
for(k=1;k<=fc.xitemcount(sef,'~');k++){
se=fc.xitemget(sef,k,'~');
if(fc.xitemcount(se,':')>1) { 
sn=fc.xitemget(se,1,':');
sgg=fc.xitemlast(se,1,':');
if(sn=='class') { 
snc=
fp.class(sgg);
};
if(sn=='width') { 
iw=fc.xis(sgg);
};
if(sn=='span') { 
iflag=1;
};
if(sn=='value') { 
see=sgg;
};
if(sn=='widthname') { 
iwidthname=fc.xis(sgg);
};
continue;
};
};
sf=scond;
sc=sc+
fp.hidden(
fp.id(sf),fp.func(snc),fp.att(fp.width(iw)),
fp.value(see));
if(iflag==1) { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sc));
sa=sa+
fp.td();
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
};
} else if(stype=='5') { 
sf=scond;
sg='';
snc='';
sc=sc+
fp.edit(
fp.id(sf),fp.att(
fp.bggray(),fp.width(100)),
fp.class('cdat'),
fp.value(see));
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td(fp.func(sc));
s1=see;
if(s1!='') { 
if(sname=='') { 
s1=s1+'. ';
} else { 
s1=sname+' - '+s1+'. ';
};
};
} else { 
sa=
fp.td(
fp.at(
fp.valign('top')),fp.func(sname));
sa=sa+
fp.td();
};
return(s1);
}
//***********butbookcnreal**********
function butbookcnreal(spage,svisit,spat,iflag,hdnew) {
var hd=0,hds=0,hdv=0,hdd=0,i=0,j=0,k=0,l=0,n=0,ia=0,ib=0,isg=0,ba=0,bb=0,hde=0,nn=0; 
var sa='',sb='',stmp='',stype='',svalue='',sc='',scl='',sd='',se='',seh='',see='',sea='',sf='',sg='',sgg='',sh='',shh='',shdesc='',shd='',shda='',shb='',shc='',scond='',sprename='',syes='',s1='',s2='',s3='',s4='',s5='',s6='',s7='',idc=''; 
idc=svisit;
iwidthname=400;
if(iflag==1) { 
hd=butgetpage(spage,svisit,spat);
hdmain=hd;
} else { 
hd=hdnew;
hdmain=hdnew;
};
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)==1) { 
break;
};
sf=fc.xitemgetback(fb.dn(hd,'ConditionName'),1,']');
sprename=fc.xitemget(fb.dn(hd,'ConditionName'),1,']');
stype=fb.dn(hd,'ConditionTypeID');
svalue=fb.dn(hd,'CDetails');
sgg=fb.dn(hd,'conditiongroupId');
if(sg!=sgg) { 
sg=sgg;
shdesc='';
shda='';
isg=ia;
shb=isg+'';
sb=sb+
fp.tr(
fp.at(
fp.id('node'+ia),
fp.onclick('buthead("'+'node'+ia+'","'+sf+'")')),
fp.td(
fp.at(
fp.colspan(2)),fp.func(sf)))+fc.cr();
if(syes!='') { 
if(fc.trim(s1)) { 
s3=s3+
fp.br()+fp.func(s1)+': '+getyesno(syes);
s1='';
syes='';
} else { 
s3=s3+
fp.br()+getyesno(syes);
s1='';
syes='';
};
if(s2!='') { 
s3=s3+s2;
s2='';
};
};
if(s2!='') { 
if(fc.trim(s1)) { 
s3=s3+
fp.br()+fp.func(s1)+': '+s2;
s1='';
s2='';
} else { 
s3=s3+
fp.br()+s2;
s1='';
s2='';
};
};
s1=
fp.under(fp.func(sf));
s4='';
s5='';
sgrp='';
continue;
};
shh=fb.dn(hd,'HeaderTextID');
if(sh!=shh) { 
if(shh!='') { 
if(gheadkeep!='') { 
nn=fc.itemnum(gheadkeep,shh);
if(nn>0) { 
shd=fc.itemget(gheadkeep,nn+1);
if(shd=='') { 
shd=' ';
};
};
} else { 
hds=fb.qwhere('select * from PrescriptionHeaderText','HeaderTextID='+shh);
if(hds>0) { 
shd=fb.dn(hds,'HeaderText');
if(shd=='') { 
shd=' ';
};
};
};
if(shd!='') { 
shda='*';
if((stype=='4')&&(svalue=='')) { 
for(j=1;j<=fc.xitemcount(shd,'!');j++){
if(fc.xitemget(shd,j,'!')==fc.xitemget(shdesc,j,'!')) { 
shda=shda+'*';
};
};
shdesc=shd;
sh=shh;
scl='child-of-node'+fc.xitemget(shb,fc.len(shda),'!');
sb=sb+
fp.tr(
fp.at(
fp.id('node'+ia),
fp.class(scl),
fp.onclick('buthead("'+'node'+ia+'","'+sf+'")')),
fp.td(
fp.at(
fp.colspan(2)),fp.func(sf)))+fc.cr();
isg=ia;
shc='';
for(j=1;j<=fc.len(shda);j++){
shc=shc+fc.xitemget(shb,j,'!')+'!';
};
shb=shc+isg;
s4=shdesc;
continue;
} else { 
for(j=1;j<=fc.xitemcount(shdesc,'!');j++){
if(fc.xitemget(shd,j,'!')==fc.xitemget(shdesc,j,'!')) { 
shda=shda+'*';
};
};
shdesc=shd;
sh=shh;
shc='';
for(j=1;j<=fc.len(shda);j++){
isg=fc.xitemget(shb,j,'!');
shc=shc+isg+'!';
};
shb=fc.xleft(shc);
s4='';
};
};
};
};
if(shh=='') { 
s4='';
shb=fc.xitemget(shb,1,'!');
isg=fc.xis(shb);
};
scond=fb.dn(hd,'ConditionID');
ib=0;
see='';
if(spage=='24') { 
if(fc.xitemcount(sf,':')>1) { 
sf=fc.trim(fc.xitemget(sf,2,':'));
};
};
if(s4!='') { 
s5=butlinecn(sf,stype,scond,fb.dn(hd,'Controls'),svalue,fb.dn(hd,'Details'),sprename);
if((spage=='1')&&(stype=='4')) { 
syes=syes+s5;
} else { 
if(fc.trim(s5)) { 
s2=s2+headformat(s4)+s5;
if(fc.xitemcount(s4,'!')==1) { 
sgrp=s4;
};
s4='';
s5='';
};
};
} else { 
s5=butlinecn(sf,stype,scond,fb.dn(hd,'Controls'),svalue,fb.dn(hd,'Details'),sprename);
if((spage=='1')&&(stype=='4')) { 
syes=syes+s5;
} else { 
s2=s2+s5;
};
};
};
};
if(syes!='') { 
if(fc.trim(s1)) { 
s3=s3+
fp.br()+fp.func(s1)+': '+getyesno(syes);
s1='';
syes='';
} else { 
s3=s3+
fp.br()+getyesno(syes);
s1='';
syes='';
};
if(s2!='') { 
s3=s3+s2;
s2='';
};
};
if(s2!='') { 
if(fc.trim(s1)) { 
s3=s3+
fp.br()+fp.func(s1)+': '+s2+s6;
s1='';
s2='';
s6='';
} else { 
s3=s3+
fp.br()+s2+s6;
s1='';
s2='';
s6='';
};
};
return(s3);
}
//***********butbookcn**********
function butbookcn(spage,svisit,spat) {
return(butbookcnreal(spage,svisit,spat,1,0));
}
//***********butbookcnin**********
function butbookcnin(spage,svisit,spat,hd) {
return(butbookcnreal(spage,svisit,spat,2,hd));
}
//***********getstorepre**********
function getstorepre(spage,svis,spat,ihmain) {
var sa='',sb='',sc='',sd=''; 
sb=butbookcn(spage,svis,spat);
butstoreput(spage,svis,spat,sb);
sa=
fp.table(
fp.at(
fp.cellspacing(0),
fp.cellpadding(0)),
fp.tr(
fp.td(
fp.memo(
fp.at(
fp.id('ces2'),
fp.wrap('off'),fp.att(fp.width(giwidth),fp.height(ihmain-30))),fp.func(sb)))));
return(sa);
}
//***********calluppg**********
function calluppg(sn,sid) {
var hd=0; 
var ss='',se='',sa='',sb='',slab=''; 
slab='idmenuset';
fb.quse(gapp);
hd=fb.qwhere('select * from js',"num='"+sn+"'");
fb.quse(gappdat);
if(hd>0) { 
sa=fb.dn(hd,'keyinfo');
} else { 
return;
};
se='script';
ss=
fp.div(
fp.at(
fp.id(sn+'idrun')));
ss=ss+
fp.div(
fp.at(
fp.id(sn+'program')));
fj.xjhtml(slab,fp.func(ss));
fj.xjhtml(sn+'idrun','<'+se+'>'+sa+'</'+se+'>');
  sb=initfirst(sn+'program'); ;
return(sb);
}
//***********butbookpreview**********
function butbookpreview(slab,spage,svis,spat,ihmain) {
var ilprint=0; 
var sa='',sb=''; 
if(fj.jval('idbpreview')=='Preview') { 
fj.xjval('idbpreview','Page');
sb=getstorepre(spage,svismain,spatmain,ihmain);
ghistdate='';

fp.html('hookmain',sb);
fj.xjcss('hookmain','height',ihmain);

fp.htmlareainit('#ces2');
spagepre='1';
} else { 
spagepre='0';
ghistdate='';
calluppg(slab);
};
}
//***********timehist**********
function timehist() {
var i=0; 
var sa=''; 
if(ghistdate!='') { 
fj.xjval('idhistorya',fc.datetimeput(ghistdate));
};
ghist=fc.etimera()+' '+ghist;
i=fc.xitemcount(ghist,' ');
if(i>10) { 
ghist=fc.itemleft(ghist,10,' ');
};
fj.xjhtml('idsavedisplay',
fp.span(
fp.at(fp.att(fp.font_size(gfont-5))),fp.func(ghist)));
}
//***********butsavex**********
function butsavex(scat,sp,sm) {
var hd=0; 
var sa='',sb='',s2=''; 
fc.timera();
if(spagepre=='1') { 
return;
};
fj.xjval('idsave','Saving.......');
if(fc.itemget(spagegen,1)=='') { 
  $("#idtree").find("tr").removeClass("expanded").addClass("collapsed").each(function(){    $(this).collapse();    });     ;
};
setTimeout(function() {
sb=butbooksave(scat,svismain,spatmain);
s2='ConditionID,CategoryID,HeaderTextID,ConditionTypeID,ConditionName,Position,conditiongroupId,IsActive,Controls,CDetails,Details,DetailsBack';
hd=fb.qresultbuild(s2,sb);
sb=butbookcnin(scat,svismain,spatmain,hd);
if(sb=='') { 
sb=' ';
};
butstoreput(scat,svismain,spatmain,sb);
fj.xjval('idsave','Save');
timehist();
if(fc.notdef(sp)==false) { 
 callup(sp,sm); ;
};
},0);
}
//***********butsavexret**********
function butsavexret(scat,sp,sm) {
var sa=''; 
fc.timera();
if(spagepre=='1') { 
return;
};
fj.xjval('idsave','Saving....');
if(fc.itemget(spagegen,1)=='') { 
  $("#idtree").find("tr").removeClass("expanded").addClass("collapsed").each(function(){    $(this).collapse();    });     ;
};
sa=butbooksave(scat,svismain,spatmain);
butstoreput(scat,svismain,spatmain,'');
fj.xjval('idsave','Save');
timehist();
return(sa);
}
//***********buthistoryvis**********
function buthistoryvis(spat,scat,iflag) {
var hd=0,ia=0; 
var sa='',sb='',sc='',svis='',sdt=''; 
if(iflag==2) { 
if(ghistdate=='') { 
sdt=fb.sysfindtmp('pidcdate');
} else { 
sdt=ghistdate;
};
} else { 
sc='=';
sdt=fb.sysfindtmp('pidcdate');
};
sb='select D.ConditionId,P.PrescriptionID,P.CreatedDateTime from PrescriptionMaster P ';
sb=sb+'inner join PrescriptionDetails D on D.PrescriptionID=P.PrescriptionID ';
sb=sb+'left join PrescriptionCondition C on C.ConditionID=D.ConditionID';
hd=fb.qget(sb,1,"(C.CategoryID='"+scat+"' or D.ConditionId='"+(fc.xis(scat)+2000)+"') and P.PatientID='"+spat+"' and P.CreatedDateTime<"+sc+"'"+sdt+"' order by P.CreatedDateTime desc");
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)) { 
break;
};
svis=fb.dn(hd,'PrescriptionID');
if(iflag==2) { 
ghistdate=fb.dn(hd,'CreatedDateTime');
};
break;
};
};
return(svis);
}
//***********inithistauto**********
function inithistauto(slab,spat,svisit,scat,ihmain) {
var svis=''; 
fc.timera();
svis=buthistoryvis(spatmain,scat,1);
if(svis=='') { 
inithistdisplay(slab,spatmain,svismain,scat,1,ihmain);
return;
};
if(svis==svismain) { 
if(ghistdate=='') { 
} else { 
ghistdate='';
};
};
inithistdisplay(slab,spatmain,svis,scat,1,ihmain);
}
//***********inithistpre**********
function inithistpre(slab,spat,svisit,scat,ihmain) {
var svis=''; 
fc.timera();
if(spagepre=='1') { 
return;
};
svis=buthistoryvis(spatmain,scat,1);
if(svis=='') { 
inithistdisplay(slab,spatmain,svismain,scat,1,ihmain);
return;
};
if(svis==svismain) { 
if(ghistdate=='') { 
return;
} else { 
ghistdate='';
};
};
inithistdisplay(slab,spatmain,svis,scat,1,ihmain);
}
//***********inithistprea**********
function inithistprea(slab,spat,svisit,scat,ihmain) {
var svis=''; 
fc.timera();
if(spagepre=='1') { 
return;
};
svis=buthistoryvis(spatmain,scat,2);
if(svis=='') { 
return;
};
inithistdisplay(slab,spatmain,svis,scat,1,ihmain);
}
//***********butvisitdate**********
function butvisitdate(svis) {
var hd=0; 
var sa=''; 
hd=fb.qwhere('select D.CreatedDateTime from PrescriptionMaster D',"PrescriptionId='"+svis+"'");
if(hd>0) { 
sa=fb.dn(hd,'CreatedDateTime');
} else { 
sa=fc.datetimeuse();
};
return(sa);
}
//***********buthistoryvis**********
function buthistoryvis(spat,svis,scat,iflag) {
var hd=0,ia=0; 
var sa='',sb='',sc='',sdt=''; 
sdt=butvisitdate(svis);
sb='select D.ConditionId,P.PrescriptionID,P.CreatedDateTime from PrescriptionMaster P ';
sb=sb+'inner join PrescriptionDetails D on D.PrescriptionID=P.PrescriptionID ';
sb=sb+'left join PrescriptionCondition C on C.ConditionID=D.ConditionID';
hd=fb.qget(sb,1,"(C.CategoryID='"+scat+"' or D.ConditionId='"+(fc.xis(scat)+2000)+"') and P.PatientID='"+spat+"' and P.CreatedDateTime<"+sc+"'"+sdt+"' order by P.CreatedDateTime desc");
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)) { 
break;
};
svis=fb.dn(hd,'PrescriptionID');
break;
};
};
return(svis);
}
//***********butbookcnn**********
function butbookcnn(scat,svis,spat) {
var sa=''; 
if(gvrecalc==1) { 
sa=fc.xitemget(gvall,fc.xis(scat),fc.chr(252));
if(sa!='') { 
gicnt++;
if(sa==' ') { 
sa='';
};
return(sa);
};
};
if(sa=='') { 
sa=butbookcn(scat,svis,spat);
};
if(sa=='') { 
sa=' ';
};
butstoreput(scat,svismain,spat,sa);
gicntt=gicntt+scat+'-';
if(sa==' ') { 
sa='';
};
return(sa);
}
//***********dfirstnogetlastxx**********
function dfirstnogetlastxx(svis,spat,scat) {
var sa=''; 
sa=fc.xitemget(gvall,fc.xis(scat),fc.chr(252));
if(sa!='') { 
return(svis);
} else { 
return(buthistoryvis(spat,svis,scat,1));
};
}
//***********puthead**********
function puthead(ss,ia,sb) {
var sa=''; 
if(sb=='') { 
return('');
};
sa=
fp.bold(
fp.under(fp.func(ss)));
if(ia==1) { 
sa=
fp.br()+
fp.br()+fp.func(sa);
};
if(ia==2) { 
sa=
fp.br()+fp.func(sa);
};
if(ia==3) { 
sa=
fp.br()+
fp.br()+fp.func(sa)+
fp.br();
};
if(ia==4) { 
sa=
fp.br()+fp.func(sa)+
fp.br();
};
sa=sa+fp.func(sb);
return(sa);
}
//***********butcnote**********
function butcnote(spat,svis) {
var hd=0; 
var bop=false; 
var sa='',sd='',se='',scc='',scd='',sdd='',s1='',suserid='',smsend=''; 
sd='';
sa=dfirstnogetlastxx(svis,spat,27);
scd=butbookcnn(27,sa,spat);
if(fc.trim(fc.xitemget(scd,2,'-'))) { 
sa=
fp.br()+fc.trim(fc.xitemget(scd,2,'-'));
sd=sd+puthead('Referring Physician',1,sa);
};
sa=butbookcnn(14,svis,spat);
sd=sd+puthead("Reason for today's visit",1,sa);
sa=dfirstnogetlastxx(svis,spat,46);
sa=butbookcnn(46,sa,spat);
sd=sd+puthead('Stroke Evaluation',1,sa);
sa=butbookcnn(13,svis,spat);
sd=sd+puthead('History of Present Illness',1,sa);
sa=butbookcnn(32,svis,spat);
sd=sd+puthead('Previous Cardiac History',1,sa);
sa=butbookcnn(33,svis,spat);
sd=sd+puthead('Previous Cardiac Workup',1,sa);
sa=dfirstnogetlastxx(svis,spat,1);
sa=butbookcnn(1,sa,spat);
sd=sd+puthead('Review of Systems',1,sa);
sa=dfirstnogetlastxx(svis,spat,48);
sa=butbookcnn(48,sa,spat);
if(sa!='') { 
sd=sd+puthead('Past Medical History',1,sa);
};
sa=dfirstnogetlastxx(svis,spat,17);
sa=butbookcnn(17,sa,spat);
sd=sd+puthead('Past Surgical History',1,sa);
sa=dfirstnogetlastxx(svis,spat,66);
sa=butbookcn(66,sa,spat);
if(sa!='') { 
sd=sd+puthead('Family History',1,sa);
} else { 
sa=dfirstnogetlastxx(svis,spat,7);
sa=butbookcnn(7,sa,spat);
sd=sd+puthead('Family History',1,sa);
};
sa=dfirstnogetlastxx(svis,spat,29);
sa=butbookcnn(29,sa,spat);
sd=sd+puthead('Social',1,sa);
sa=dfirstnogetlastxx(svis,spat,15);
sa=butbookcnn(15,sa,spat);
sd=sd+puthead('Smoking',1,sa);
sa=dfirstnogetlastxx(svis,spat,30);
sa=butbookcnn(30,sa,spat);
sd=sd+puthead('Substance Abuse',1,sa);
sdd='';
sa=butbookcnn(24,svis,spat);
sdd=sdd+puthead('Vitals',2,sa);
sa=butbookcnn(23,svis,spat);
sdd=sdd+puthead('BMI',2,sa);
sa=butbookcnn(22,svis,spat);
sdd=sdd+puthead('General',2,sa);
if(sdd!='') { 
sd=sd+
fp.br()+
fp.br()+
fp.bold(
fp.under(fp.func('Physical Exam')))+sdd;
};
sa=butbookcnn(45,svis,spat);
sd=sd+puthead('Neurology',1,sa);
sa=butbookcnn(43,svis,spat);
sd=sd+puthead('History',1,sa);
sa=butbookcnn(42,svis,spat);
sd=sd+puthead('Measurements of Velocities',1,sa);
sa=butbookcnn(41,svis,spat);
sd=sd+puthead('Transcranial Doppler Interpretion',1,sa);
sa=butbookcnn(44,svis,spat);
sd=sd+puthead('Conclusion',1,sa);
sa=butbookcnn(18,svis,spat);
sd=sd+puthead('ECG Today',1,sa);
sa=butbookcnn(19,svis,spat);
sd=sd+puthead('CPOE Laboratory Test',1,sa);
sa=butbookcnn(20,svis,spat);
sd=sd+puthead('CPOE Radiology',1,sa);
sa=butbookcnn(21,svis,spat);
sd=sd+puthead('CPOE Cardiology',1,sa);
return(sd);
}
//***********butpagesall**********
function butpagesall() {
var hd=0,ia=0; 
var sa='',sb=''; 
gvall='';
gvall=fc.xitemrep(gvall,'x',100,fc.chr(252));
hd=fb.qget('select ConditionID,ConditionValue from PrescriptionDetails',0,"PrescriptionID='"+svismain+"' and  (ConditionID>=800 and ConditionID<=999) order by ConditionID");
if(hd>0) { 
for(;;) {
ia++;
if(fb.dnextno(hd,ia)) { 
break;
};
gvall=fc.xitemrep(gvall,fb.dn(hd,'ConditionValue'),fc.xis(fb.dn(hd,'ConditionID'))-800,fc.chr(252));
};
};
}
//***********method**********
function method() {

    console.log("this is message from thread no", process.threadId);
    console.log("this is message from thread no", process.subThread);
   // fb.log("thisxxxxx is message from thread no", process.threadId);
;
}
//***********initgen**********
function initgen() {
var ii=0; 
var sa='',sb='',sc=''; 
 glink=process.argv[2]; gappdat=process.argv[3]; gstart=process.argv[4]; gdataget=process.argv[5];  gguidkey=process.argv[6]; ;
if(glink!='') { 
sa=glink;
sb=fc.xitemget(glink,3,'/');
ii=fc.xis(fc.xitemget(sb,2,':'))+1;
glink='http://127.0.0.1:'+ii+'/';
fb.baseput(0,glink);
} else { 
return(false);
};
if(gappdat!='') { 
fb.quse(gappdat);
} else { 
return(false);
};
if(gstart!='') { 
gprac=fb.qpractice(fc.xitemget(gstart,2,'!'));
gsess=fb.qsession(fc.xitemget(gstart,3,'!'));
gstart=fc.xitemget(gstart,1,'!');
};
return(true);
}
//***********initfirst**********
function initfirst() {
var ihmain=0,jh=0,jhm=0,icat=0,i=0,hd=0,ia=0; 
var sa='',ss='',sb='',sr='',sp='',sdb=''; 
if(initgen()==false) { 
return;
};
spatmain=fc.xitemget(gdataget,1,'!');
svismain=fc.xitemget(gdataget,2,'!');
gfont=fc.xis(fc.xitemget(gdataget,3,'!'));
gifont=gfont-3;
giwidth=fc.xis(fc.xitemget(gdataget,4,'!'));
gvrecalc=1;
butpagesall();
sa=butcnote(spatmain,svismain);
return;
}
//************enter*********
;
initfirst();


