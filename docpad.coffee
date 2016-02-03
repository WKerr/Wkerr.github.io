# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  collections:
    blogPages: ->
      @getCollection("html").findAllLive({isPost:true},[{date:-1}])

  plugins:
    ghpages:
      deployRemote: 'origin'
      deployBranch: 'master'

  templateData:
    site:
      title: "WKerr House"
      #Site Production URL
      url:  "http://www.wkerrhouse.com"
    # -----------------------------
    # Helpers

    # Get the Absolute URL of a document
    getUrl: (document) ->
      return @site.url + (document.url or document.get?('url'))
    getPreparedTitle: -> if @document.title then " | #{@document.title}"
}

# Export the DocPad Configuration
module.exports = docpadConfig

