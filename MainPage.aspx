<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MainPage.aspx.cs" Inherits="MainPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
      <link rel="stylesheet" href="S.css" />
</head>

<body onload="onLoad()">
    <form id="form1" runat="server">
         <script  src='app.js'></script>
        <p id="demo"></p>
        <div>
            <input id="start" value="START" type="button" class="myButton" onclick="openQuestion()+timer(0,10)" style="position: absolute; top: 40px; right: 510px;width:300px;border-color:black" />
              <p id="timer" style="position: absolute; top: 40px; right: 210px;width:300px;border-color:black;font-size:24px"></p>
                          <p id="countAnswers" style="position: absolute; top: 40px; right: 310px;width:300px;border-color:black;font-size:24px"></p>
                                      <h1 id="congrat" style="position: absolute; top: 100px; right: 310px;width:700px;border-color:black;font-size:40px"></h1>


        </div>
    </form>
</body>
</html>
