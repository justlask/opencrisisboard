module.exports = {
  DBURL : process.env.DBURL || 'mongodb://localhost:27017/reforum',

  // facebook details
  FB_APPID : process.env.FB_APPID || null,
  FB_CBURL : process.env.FB_CBURL || null,
  FB_SECRET : process.env.FB_SECRET || null,

  // twitter details
  TW_APPID : process.env.TW_APPID || null,
  TW_CBURL : process.env.TW_CBURL || null,
  TW_SECRET : process.env.TW_SECRET || null,
};
