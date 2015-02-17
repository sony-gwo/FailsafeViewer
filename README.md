FailsafeViewer
==============

Failsafe data viewer. Extension for Google Chrome. If failsafe means nothing to you, please ignore this project.

## Introduction
This extension allow users to navigate the JSON data easily when failsafe mode is enabled (by adding "failsafe=true" to the query parameters).

### Installation (for developers)
1. Go to Google Chrome's extension page (<chrome://extensions/>)
2. Drag the "source" folder into the extension page screen
3. Extension should show up in your extensions bar.

### Packaging for Release (for developers)
To package your release, you will need the "FailsafeViewer.pem" and "updates.xml" files in addition to your source folder.

######FailsafeViewer.pem
This file is used by Chrome to identify the extension. When updates are released, Chrome would know which extension the release is for and replace it.
######updates.xml
This file contains the URL and version numbers to prompt Google Chrome to download a new version of the extension.

####Steps to package for release

1. Make sure to increment the version number in "manifest.json"
2. Go to Google Chrome's extension page (<chrome://extensions/>)
3. Click on "Pack extension" button
4. Provide the "source" folder as the "root directory"
5. Provide the "FailsafeViewer.pem" as "Private key file(optional)"
6. Once generated, update "update.xml" with the right version number and file name.
7. Upload both files onto the server hosting the files so users can get the newest versions





