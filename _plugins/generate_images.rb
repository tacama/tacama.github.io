
# Registers a Jekyll hook for the :site object, triggered before rendering the site (:pre_render stage).
Jekyll::Hooks.register :site, :pre_render do |site|

  # Loads the Ruby yaml library to enable reading and writing YAML files.
  require 'yaml'

  # Define the folders to process
  folders = ["./images/01-Madera/", "./images/02-Cuero/", "./images/03-Metales/", "./images/04-Telas/", "./images/05-Restauracion/", "./images/06-Pinturas/"]
  # Path to the YAML file where the image data will be saved.
  output_file = "./_data/images.yml"


  # Initialize a hash to store the images categorized hierarchically by folder and subfolder.
  images_by_folder = {}

  # Iterates through each folder defined in the folders array.
  folders.each do |folder|

    
    # Extracts a simplified name for the folder (used as a key in the hash).
    folder_key = folder.sub('./images/', '').chomp('/') # Removes the ./images/ prefix and any trailing slash from the folder name.

    # Initialize the folder's structure in the hash
    images_by_folder[folder_key] = {}

    # Collect all JPG files in the folder and its subfolders
    Dir.glob("#{folder}**/*.jpg").each do |file|
      # Converts the file path to a relative path by removing the leading ./
      relative_path = file.sub('./', '')

      current_folder = folder.sub('./', '').chomp('/')

            # Determine the subfolder structure relative to the base folder HERE IT IS THE PROBLEM

      subfolder_path = File.dirname(relative_path).chomp('/').sub(current_folder, '').sub(/^\/+/, '')
  
      # If the subfolder path is empty, it means the file is directly in the main folder
      if subfolder_path.empty?
        (images_by_folder[folder_key]['images'] ||= []) << relative_path
      else
        # Otherwise, the file belongs to a subfolder
        (images_by_folder[folder_key][subfolder_path] ||= []) << relative_path
      end
    end
  end

  # Convert the hash to YAML format
  new_content = images_by_folder.to_yaml

  # Write the YAML content only if it has changed
  if File.exist?(output_file)
    current_content = File.read(output_file)

    # Writes the new YAML data to the file only if it differs from the existing content.
    if current_content != new_content
      File.open(output_file, "w") do |file|
        file.write(new_content)
      end
      puts "Images from #{folders.join(', ')} have been written to #{output_file}"
    else
      puts "No changes detected in #{output_file}"
    end
    # Creates the file and writes the YAML data if the file doesn’t already exist.
  else
    File.open(output_file, "w") do |file|
      file.write(new_content)
    end
    puts "Images from #{folders.join(', ')} have been written to #{output_file}"
  end
end
