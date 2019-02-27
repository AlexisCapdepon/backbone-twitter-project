<% for (var i = 0, len = Object.keys(locals).length; i < len; i += 1) { %>
<div class="mention">
  <div class="tweetEntry"> 
    <div class="tweetEntry-content">
      <img class="tweetEntry-avatar" src="<%- locals[i].user.avatar %>">
      <strong class="tweetEntry-fullname"><%- locals[i].user.name %></strong>
      <span class="tweetEntry-timestamp"><%- locals[i].created_at %></span>
      <div class="tweetEntry-text-container">
       <p><%- locals[i].text %></p>  
      </div>
    </div>
    <div class="optionalMedia">
      <img class="optionalMedia-img" src="https://i.imgur.com/kOhhPAk.jpg">
    </div>
    <div class="tweetEntry-action-list" style="line-height:24px;color: #b1bbc3;">
      <i class="fa fa-retweet" style="width: 80px"><%- locals[i].retweetCount%></i>
      <i class="fa fa-heart" style="width: 80px"><%- locals[i].favoriteCount%></i>
      <i class="fa fa-reply" style="width: 80px;"><%- locals[i].replyCount%></i>
    </div>
  </div>
</div>
<%}%>