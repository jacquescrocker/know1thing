require 'uri'

module FrankHelpers

  def partial(*args)
    render_partial(*args)
  end

  def twitter_share(options = {})
    %{
      <a href="#{twitter_share_url(options)}" class="tweet">#{options[:label] || 'Tweet this'}</a>
    }
  end

  def twitter_share_url(options = {})
    base = "http://twitter.com/share?"
    params = []
    params << "url=#{URI.encode(options[:url])}"
    params << "text=#{URI.encode(options[:text])}"
    params << "via=#{URI.encode(options[:via])}" if options[:via]
    params << "related=#{URI.encode(options[:related])}"
    base+params.join("&")
  end

  def slidedeck
    result = []
    Pathname.new(File.dirname(__FILE__)).join("dynamic", "slidedeck").children.each do |child|
      slide_name = child.basename.to_s.gsub("_", "").gsub(".erb", "").gsub(".haml", "")
      result << render_partial("slidedeck/#{slide_name}", :slide_name => slide_name.gsub(/\d*/, ""))
    end
    result.join("\n")
  end

end