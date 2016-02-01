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

    getPreparedTitle: -> if @document.title then " | #{@document.title}"
}

# Export the DocPad Configuration
module.exports = docpadConfig

