/* global hexo */

'use strict';

const crypto = require('crypto');
const compareVersions = require('../../scripts/utils/compare-versions');

hexo.extend.helper.register('md5', function(string) {
  return crypto.createHash('md5').update(string).digest('hex');
});

hexo.extend.helper.register('require_version', function(current, require) {
  const verRe = current.match(/[@/](\d{1,2})\.?(\d{0,2})\.?(\d{0,2})/);
  if (verRe && verRe.length >= 4) {
    const ver = `${verRe[1]}.${verRe[2] || 'x'}.${verRe[3] || 'x'}`;
    return compareVersions(ver, require) >= 0;
  }
  return false;
});
