export default{
  getReputation: function (reputation){
    var rep = parseInt(reputation);
    if(rep == 0) return 25;
    if(rep > 0) return Math.floor(9*Math.log10(rep)-56);
    else return Math.ceil(106-9*Math.log10(-rep));
  },

  getTimestamp: function (created) {
    var t = new Date() - new Date(created + 'Z');
    return this.textTimeAgo(t);
  },

  textTimeAgo: function (t) {
    if (t <= 1000)
      return '1 second ago';
    if (t < 60 * 1000)
      return (t / 1000).toFixed(0) + ' seconds ago';
    if (t < 2 * 60 * 1000)
      return '1 minute ago';
    if (t < 60 * 60 * 1000)
      return (t / 1000 / 60).toFixed(0) + ' minutes ago';
    if (t < 2 * 60 * 60 * 1000)
      return '1 hour ago';
    if (t < 24 * 60 * 60 * 1000)
      return (t / 1000 / 60 / 60).toFixed(0) + ' hours ago';
    if (t < 2 * 24 * 60 * 60 * 1000)
      return 'yesterday';
    if (t < 30 * 24 * 60 * 60 * 1000)
      return (t / 1000 / 60 / 60 / 24).toFixed(0) + ' days ago';
    if (t < 2 * 30 * 24 * 60 * 60 * 1000)
      return 'last month';
    if (t < 12 * 30 * 24 * 60 * 60 * 1000)
      return (t / 1000 / 60 / 60 / 24 / 30).toFixed(0) + ' months ago';
    if (t < 2 * 12 * 30 * 24 * 60 * 60 * 1000)
      return 'last year';
    return (t / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(0) + ' years ago';
  },
  
  extractUrlProfileImage: function(metadata){
    if(typeof metadata.profile !== 'undefined' && typeof metadata.profile.profile_image !== 'undefined' ){
      var url = metadata.profile.profile_image;
      if(url.substring(0,8) == "![image]"){
        return url.substring(9, url.length - 1);
      }
      return url;
    }
    return '';
  },
  
  getQuery: function(p) {
    var path = p.split('?');
    var result = {}
    result.page = path[0];
    if(path.length > 1)
      result.params = JSON.parse("{\"" +
        path[1].replace(/\&/gi, "\",\"").replace(/\=/gi, "\":\"") +
        "\"}");
    console.log("getQuery");
    console.log(document.location.search);
    console.log(path);
    console.log(result);
    return result;
  }
}