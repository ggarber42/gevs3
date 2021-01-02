import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import "module-that-imports-styles.js"
import "styles.scss"
import "../other-styles.css"


CMS.registerMediaLibrary(cloudinary)
