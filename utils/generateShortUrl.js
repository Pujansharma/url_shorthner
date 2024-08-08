const shortid = require('shortid');
const Url = require('../models/Url');

const generateShortUrl = async () => {
  let urlCode = shortid.generate();
  let url = await Url.findOne({ urlCode });

  while (url) {
    urlCode = shortid.generate();
    url = await Url.findOne({ urlCode });
  }

  return urlCode;
};

module.exports = generateShortUrl;
