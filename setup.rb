Frank.server.port = 4000

Frank.static_folder = "public"

if Frank.production?
  Frank.options.prefix = "/know1thing/"
  Compass.configuration.http_images_path = "#{Frank.options.prefix}images"
else
  Compass.configuration.http_images_path = "/images"
end

