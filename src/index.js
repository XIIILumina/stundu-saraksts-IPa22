import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.creaeateRoot(document.getElementById("root"));
root.render(<React.StrictMode>

</React.StrictMode>)
// 1. Iegutu elementu no index.thml
const elementsNoHTML = document.getElementById("root");

//2. Parasto elementu parvers par react sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

//3. uz ekrana parada pirmo React komponenti
sakne.render(<html><head>
    <meta http-equiv="Content-Type" content="text/html;  charset=UTF-8">
    <meta name="keywords" content="Priekuļu tehnikums Profesionālās izglītības kompetences centrs profesionālā izglītība stundu saraksts">
    <meta name="robots" content="noindex">
    <link rel="stylesheet" type="text/css" href="../pt/stils_v.css">
    <link rel="stylesheet" type="text/css" href="../pt/stils_n.css">
    <link rel="shortcut icon" href="../pt/pttime_icon.png">
    <link rel="apple-touch-icon" href="../pt/pttime_icon.png">
    <title>VTDT stundu saraksts IPa22 2023-09-25</title>
    <script> 
       function post_to_url(path, params, method) {
            method = method || "post";
            var form = document.createElement("form");
    
            //Move the submit function to another variable
            //so that it doesn't get overwritten.
            form._submit_function_ = form.submit;
    
            form.setAttribute("method", method);
            form.setAttribute("action", path);
    
            for(var key in params) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }
               var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", "q");
                hiddenField.setAttribute("value", generateUUID());
                form.appendChild(hiddenField);
    
            document.body.appendChild(form);
            form._submit_function_(); //Call the renamed function.
        }
    
    function CloseWindows(){
    var win = window.open('', '_self');
    win.close();
    return false;
    }
    
    function closeWindowF() {
    window.open('','_parent','');
    window.close();
    }
    
    </script><style type="text/css" id="operaUserStyle"></style>
    </head>
    <body>
    <style>
    html { width: 100%; margin: 0 auto; overflow-x: hidden;}
    
    body {
        min-height: 100%;
        font-family: verdana, arial, Helvetica, sans-serif;
        padding: 0;
        background-image: url('');
        background-color: #FFFFFF;
        }
    
    @media print {
        .nedruka {display:none;}
        .tabulaw { width: 100%;
                display:none;}
      .tabula, .stab, .stabr {
        border: none !important;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
          }
    
        .izmanas { min-width: 140px;}
        .att {width: 94px;}
        .virsr {
            padding: 0px 0px 2px 10px;
            background-color: #FFFFFF;
            margin: 0px;
            font-weight: bolder;
            font-size: 16px;
            color: #000000;}
        .td_0, .td_1, .td_0p, .td_1p{
            background-color:transparent; 
        }
    }
    
    @media screen {
      body {
        background: #FFFFFF;
      }
        .tabulaw { width: 640px;}
        .tabula, .stab, .stabr {
        width: 640px;
        margin-left: auto;
        margin-right: auto;
        }
        
    .dbox, .dboxi {
        font-size:90%;
        width: 88px;
        height: 26px;
        display: inline-block;
    }
        .izmanas { min-width: 330px;}
        .att {width: 281px;}
        .virsr {
            background-color: #888888;
            padding: 3px 0px 2px 10px;		
            margin: 0 0 5px 0;
            font-weight: bolder;
            font-size: 16px;
            color: white;}
        .stabr {
        margin-top:8px;
        border-top: 4px solid orange;
        border-left: 3px solid orange;
        border-right: 3px solid orange;
        border-bottom: 3px solid orange;
        } 
        .stab {
        margin-top:8px;
        border-top: 2px solid #000000;
        border-left: 1px solid #777777;
        border-right: 1px solid #777777;
        border-bottom: 1px solid #777777;
        } 
        .td_0 {	
            background-color:transparent;
        }
        .td_1 {	
            background-Color:#FFC6C6;
        }
        .td_1:hover {	
            background-color:#fff59d;
        }	
        .td_1p:hover {	
            background-color:#fff59d;
            cursor: pointer;
        }
    } 
    
    @media screen and (max-width: 600px){
      .tabula, .stab, .stabr {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      
      .tabulaw {
          width: 100%;
      }
        .dbox, .dboxi {
            font-size:140%;
            width: 160px;
            height: 48px;
            display: inline-block;
        }
    }
    
    @media screen  and (max-width: 768px){
      .tabula, .stab, .stabr {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      .tabulaw { width: 100% ;}
        .dbox,.dboxi {
            font-size:140%;
            width: 160px;
            height: 48px;
            display: inline-block;
        }
        
    }
    @media screen  and (max-width: 120px){
      .tabula, .stab, .stabr {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      .tabulaw { width: 100% ;}
        .dbox, .dboxi {
            font-size:140%;
            width: 160px;
            height: 48px;
            display: inline-block;
        }
        
    }
    
    .txi {
      font-size: 9px;
      color: #666666;
      font-weight: 300;
    }
    .kraso {
        color: blue !important;
    }
    .krasop {
        color: #999999 !important;
        font-size:80%;
    }
    .txms {
      font-size: 9px;
      color: #666666;
      font-weight: 300;
      text-align: left;
      padding-left:0px;
      text-decoration:line-through;
    }
    .txns {
      font-size: 10px;
      color: #666666;
      font-weight: 300;
      text-align: left;
      padding-left:0px;
      text-decoration:line-through;
    }
    .tdh{
        line-height: 12px;
    }
    
    .dbox {
        margin: 1px;
        border: 1px solid #888888;
        text-align:center;
        padding:0px;
        text-indent:0px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .dboxi {
        margin: 1px;
        border: 1px solid #888888;
        text-align:center;
        padding:0px;
        background-color: #DDDDDD;
        text-indent:0px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .dbox:hover, .dboxi:hover {
        cursor: pointer;
        cursor: hand;
        background-color: #FF6633;
        color: white !important;
    }
    </style>
    <table class="tabula" border="0" align="center"><tbody><tr>
    <td rowspan="2" valign="bottom" style="padding: 6px 0px 3px 0px; width:50%;">
    <a href="?">
    <img class="att" border="0" src="../pt/img/pttime_m.png" alt="PT Time"></a>
    </td><td class="titl nedruka" align="center">
    <a href="http://pt.edu.lv/pt/stundas1.php">Uz veco versiju</a>
    </td></tr>
    <tr>
    
    <td valign="bottom" style="padding-bottom:3px; width:50%;">
    <div align="right" class="nedruka">
    <img src="../pt/button/drukab.png" onmouseover="this.style.cursor='pointer'; this.style.cursor='hand'" onmouseout="this.style.cursor='default'" onclick="window.print()">
    </div>
    </td>
    </tr>
    <tr><td colspan="2">
            <table width="100%"><tbody><tr><td class="virsr">
                    Vidzemes tehnoloģiju un dizaina tehnikums - STUNDU SARAKSTS
                                </td></tr>
            </tbody></table>
    
    <table id="tabulaw" class="tabulaw" border="0" align="center"><tbody><tr><td valign="top" width="50"><small>Grupas </small></td><td><a class="me2" href="?id=m&amp;g=BN20&amp;dat=2023-09-25">BN20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=DA20&amp;dat=2023-09-25">DA20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=DP20&amp;dat=2023-09-25">DP20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=EE20&amp;dat=2023-09-25">EE20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=ID20&amp;dat=2023-09-25">ID20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IP20&amp;dat=2023-09-25">IP20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=KM20&amp;dat=2023-09-25">KM20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LA20&amp;dat=2023-09-25">LA20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LM20&amp;dat=2023-09-25">LM20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MA20&amp;dat=2023-09-25">MA20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=TP20&amp;dat=2023-09-25">TP20</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=UK20&amp;dat=2023-09-25">UK20</a>&nbsp;<br><a class="me2" href="?id=m&amp;g=BA21&amp;dat=2023-09-25">BA21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BN21&amp;dat=2023-09-25">BN21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BT21&amp;dat=2023-09-25">BT21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=DA21&amp;dat=2023-09-25">DA21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=EE21&amp;dat=2023-09-25">EE21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=ID21&amp;dat=2023-09-25">ID21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IPa21&amp;dat=2023-09-25">IPa21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IPb21&amp;dat=2023-09-25">IPb21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=KM21&amp;dat=2023-09-25">KM21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LA21&amp;dat=2023-09-25">LA21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LM21&amp;dat=2023-09-25">LM21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MAa21&amp;dat=2023-09-25">MAa21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MAb21&amp;dat=2023-09-25">MAb21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MR21&amp;dat=2023-09-25">MR21</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=TP21&amp;dat=2023-09-25">TP21</a>&nbsp;<br><a class="me2" href="?id=m&amp;g=BA22&amp;dat=2023-09-25">BA22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BN22&amp;dat=2023-09-25">BN22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BT22&amp;dat=2023-09-25">BT22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=DA22&amp;dat=2023-09-25">DA22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=DP22&amp;dat=2023-09-25">DP22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=EE22&amp;dat=2023-09-25">EE22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=ID22&amp;dat=2023-09-25">ID22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IPa22&amp;dat=2023-09-25">IPa22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IPb22&amp;dat=2023-09-25">IPb22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=KD22&amp;dat=2023-09-25">KD22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=KM22&amp;dat=2023-09-25">KM22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LA22&amp;dat=2023-09-25">LA22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LM22&amp;dat=2023-09-25">LM22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MAa22&amp;dat=2023-09-25">MAa22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MAb22&amp;dat=2023-09-25">MAb22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MR22&amp;dat=2023-09-25">MR22</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=TP22&amp;dat=2023-09-25">TP22</a>&nbsp;<br><a class="me2" href="?id=m&amp;g=BA23&amp;dat=2023-09-25">BA23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BE23&amp;dat=2023-09-25">BE23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BN23&amp;dat=2023-09-25">BN23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=BT23&amp;dat=2023-09-25">BT23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=DA23&amp;dat=2023-09-25">DA23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=EA23&amp;dat=2023-09-25">EA23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=EE23&amp;dat=2023-09-25">EE23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=ID23&amp;dat=2023-09-25">ID23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IPa23&amp;dat=2023-09-25">IPa23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=IPb23&amp;dat=2023-09-25">IPb23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=KM23&amp;dat=2023-09-25">KM23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LA23&amp;dat=2023-09-25">LA23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=LM23&amp;dat=2023-09-25">LM23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MAa23&amp;dat=2023-09-25">MAa23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MAb23&amp;dat=2023-09-25">MAb23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=MR23&amp;dat=2023-09-25">MR23</a>&nbsp;•&nbsp;<a class="me2" href="?id=m&amp;g=TP23&amp;dat=2023-09-25">TP23</a>&nbsp;<br></td></tr>
    <form name="myform" action="?id=mm&amp;dat=" 2023-09-25'="" method="post"></form>
    <tr><td colspan="2" style="text-align:left;">
    <table border="0" align="center" width="100%"><tbody><tr><td style="vertical-align:middle;text-align:left;">Kabinets vai pasniedzējs: <input name="ko" value="" type="text" style="font-size:13px;font-weight:700;" autofocus="">&nbsp; </td><td style="width:100px; align:left;"><img src="../pt/button/mekleb.png" onclick="myform.submit();" onmouseover="this.style.cursor='pointer'; this.style.cursor='hand'" onmouseout="this.style.cursor='default'"></td><td style="vertical-align:middle;"><span class="info2" style="padding-left:10px"><a class="me2" href="?izm=">Izmaiņas</a></span>
    <span class="info2" style="padding-left: 10px"><a class="me2" href="?com=&amp;d=">Datorkabineti</a></span>
    </td></tr>
    </tbody></table></td></tr><tr><td valign="top" width="50"><small>Dienas </small></td><td><div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=1&amp;dat1=2023-09-25'"><b>Pirmdiena</b><br><small>25.septembris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=2&amp;dat1=2023-09-26'"><b>Otrdiena</b><br><small>26.septembris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=3&amp;dat1=2023-09-27'"><b>Trešdiena</b><br><small>27.septembris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=4&amp;dat1=2023-09-28'"><b>Ceturtdiena</b><br><small>28.septembris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=5&amp;dat1=2023-09-29'"><b>Piektdiena</b><br><small>29.septembris</small></div>
    <br><div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=1&amp;dat1=2023-10-02'"><b>Pirmdiena</b><br><small>2.oktobris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=2&amp;dat1=2023-10-03'"><b>Otrdiena</b><br><small>3.oktobris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=3&amp;dat1=2023-10-04'"><b>Trešdiena</b><br><small>4.oktobris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=4&amp;dat1=2023-10-05'"><b>Ceturtdiena</b><br><small>5.oktobris</small></div>
    <div class="dboxi" onclick="javascript:parent.location.href='?id=m&amp;d=5&amp;dat1=2023-10-06'"><b>Piektdiena</b><br><small>6.oktobris</small></div>
    <hr size="1px" color="#DDDDDD" width="75%" align="left">
    </td></tr>
    </tbody></table>
    <div align="center" class="titl">Grupa - <big>IPa22</big></div><div class="titl" style="border-top:1px solid #999999;padding-top:10px;"><small>No</small> <b>25.septembra</b> <small>līdz</small> <b>29.septembrim</b> <small> 2023.</small></div><div class="nedruka" style="text-align:right;padding-right:30px;">
    </div>
    <table class="stabr" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=1&amp;dat1=2023-09-25">Pirmdiena</a>, &nbsp;2023<small>.gada</small> <b>25.septembris</b> <span class="nedruka"><span slass="nedruka"> [šodien]</span></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Krievu valoda</td>
    <td width="35%" class="txn">C.201-D.Tarasova</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Sociālās zinības un vēsture</td>
    <td width="35%" class="txn">C.206-I.Eglīte</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_1" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_1"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=2&amp;dat1=2023-09-26">Otrdiena</a>, &nbsp;2023<small>.gada</small> <b>26.septembris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Sociālās zinības un vēsture</td>
    <td width="35%" class="txn">C.206-I.Eglīte</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Dabaszinības</td>
    <td width="35%" class="txn">C.207-M.Strade</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Matemātika</td>
    <td width="35%" class="txn">C.304-G.Upena</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Sports</td>
    <td width="35%" class="txn">C.sporta zāle-K.Puriņa</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=3&amp;dat1=2023-09-27">Trešdiena</a>, &nbsp;2023<small>.gada</small> <b>27.septembris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Datorsistēmas un datortīkli</td>
    <td width="35%" class="txn">C.110-S.Iesmiņš</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Datorsistēmas un datortīkli</td>
    <td width="35%" class="txn">C.110-S.Iesmiņš</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=4&amp;dat1=2023-09-28">Ceturtdiena</a>, &nbsp;2023<small>.gada</small> <b>28.septembris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Matemātika</td>
    <td width="35%" class="txn">C.304-G.Upena</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Latviešu valoda un literatūra</td>
    <td width="35%" class="txn">C.305-G.Jēgere</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">"Valodas, kultūras izpratne un izpausmes A"</td>
    <td width="35%" class="txn">C.206-Ž.Otersone</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=5&amp;dat1=2023-09-29">Piektdiena</a>, &nbsp;2023<small>.gada</small> <b>29.septembris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Angļu valoda</td>
    <td width="35%" class="txn">C.306-T.Stālmane</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:05-10:45 / 10:50-11:30"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Sociālās zinības un vēsture</td>
    <td width="35%" class="txn">C.206-I.Eglīte</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><div class="titl" style="border-top:1px solid #999999;padding-top:10px;"><small>Jaunais pamatsaraksts<br> no</small> <b>2.oktobra</b> <small>līdz</small> <b>6.oktobrim</b></div><div class="nedruka" style="text-align:right;padding-right:30px;">
    </div>
    <table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=1&amp;dat1=2023-10-02">Pirmdiena</a>, &nbsp;2023<small>.gada</small> <b>2.oktobris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Krievu valoda</td>
    <td width="35%" class="txn">C.201-D.Tarasova</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Sociālās zinības un vēsture</td>
    <td width="35%" class="txn">C.206-I.Eglīte</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=2&amp;dat1=2023-10-03">Otrdiena</a>, &nbsp;2023<small>.gada</small> <b>3.oktobris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Datorsistēmas un datortīkli</td>
    <td width="35%" class="txn">C.110-S.Iesmiņš</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Matemātikas speciālās nodaļas</td>
    <td width="35%" class="txn">C.205-D.Struncēna</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Matemātika</td>
    <td width="35%" class="txn">C.304-G.Upena</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Dabaszinības</td>
    <td width="35%" class="txn">C.207-M.Strade</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=3&amp;dat1=2023-10-04">Trešdiena</a>, &nbsp;2023<small>.gada</small> <b>4.oktobris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Datorsistēmas un datortīkli</td>
    <td width="35%" class="txn">C.110-S.Iesmiņš</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Datorsistēmas un datortīkli</td>
    <td width="35%" class="txn">C.110-S.Iesmiņš</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Fizika</td>
    <td width="35%" class="txn">C.401-M.Vītola</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Angļu valoda</td>
    <td width="35%" class="txn">C.306-T.Stālmane</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=4&amp;dat1=2023-10-05">Ceturtdiena</a>, &nbsp;2023<small>.gada</small> <b>5.oktobris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Sports</td>
    <td width="35%" class="txn">C.sporta zāle-K.Puriņa</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:15-10:55 / 11:00-11:40"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Klases stunda</td>
    <td width="35%" class="txn">C.209-D.Turciņa</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:50-12:30 // 13:15-13:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Sociālās zinības un vēsture</td>
    <td width="35%" class="txn">C.206-I.Eglīte</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="14:00-14:40 / 14:45-15:25"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">4</td>
    <td width="60%" class="txm">Latviešu valoda un literatūra</td>
    <td width="35%" class="txn">C.305-G.Jēgere</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table><table class="stab" border="0" cellspacing="0" cellpadding="0"><tbody><tr>
    <td style="border-top: 2px solid #000000; border-left: 1px solid #DDDDDD;border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; text-align:left;height:18px; width:60%; background-Color:#DDDDDD;">
    <span class="info2"> &nbsp; Pārst.</span>
      &nbsp; &nbsp; <a class="titl" href="?id=m&amp;d=5&amp;dat1=2023-10-06">Piektdiena</a>, &nbsp;2023<small>.gada</small> <b>6.oktobris</b> <span class="nedruka"></span></td></tr>
    <tr><td valign="top">
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="8:30-9:10 / 9:15-9:55"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">1</td>
    <td width="60%" class="txm">Sistēmu programmēšana</td>
    <td width="35%" class="txn">C.203-J.Krīgerts</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="10:05-10:45 / 10:50-11:30"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">2</td>
    <td width="60%" class="txm">Sociālās zinības un vēsture</td>
    <td width="35%" class="txn">C.206-I.Eglīte</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    <table class="td_0" width="100%" border="0" align="center" cellspacing="0" cellpadding="0" style="border-left: 1px solid #bbbbbb;border-right: 1px solid #bbbbbb;border-bottom: 1px solid #bbbbbb;" title="11:40-12:20 / 12:25-13:05"><tbody><tr class="td_0"><td rowspan="2" valign="middle" style="text-align:center; width:5%;" class="txm">3</td>
    <td width="60%" class="txm">Fizika</td>
    <td width="35%" class="txn">C.401-M.Vītola</td></tr><tr height="0"><td colspan="2"></td></tr></tbody></table>
    </td></tr></tbody></table></td></tr>
    </tbody></table>
    
    
    </body></html>);