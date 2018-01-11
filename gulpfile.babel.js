// Root configuration of the gulp.js build system, loads child modules which define specific tasks.
// Read more at: https://gulpjs.com/

import './aio/gulp/check';
import './aio/gulp/backend';
import './aio/gulp/serve';
import './aio/gulp/deploy';
// TODO: Remove/enable once required tasks are fixed
// import './build/build';
// import './build/test';
