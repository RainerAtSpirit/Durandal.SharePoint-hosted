<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
  
  <link rel="Stylesheet" type="text/css" href="../Content/css.min.css" />

  
  <script type="text/javascript" src="/_layouts/15/sp.runtime.debug.js"></script>
  <script type="text/javascript" src="/_layouts/15/sp.debug.js"></script>

  
  <!-- Add your JavaScript to the following file -->
  <script type="text/javascript" src="../Scripts/vendor.min.js"></script>
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

  <div id="applicationHost">
    <div class="splash">
      <div class="message">
        Durandal Starter Kit
      </div>
      <i class="icon-spinner icon-2x icon-spin active"></i>
    </div>
  </div>


  <%--<script type="text/javascript" src="../App/durandal/amd/require.js" data-main="../App/main"></script>--%>
  <script type="text/javascript" src="../App/main-built.js"></script>

</asp:Content>
