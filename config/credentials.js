module.exports = {
  DBURL : process.env.DBURL || 'mongodb://localhost:27017/reforum',

  // facebook details
  FB_APPID : process.env.FB_APPID || null,
  FB_CBURL : process.env.FB_CBURL || null,
  FB_FIELDS : process.env.FB_FIELDS || ['id', 'displayName', 'picture.type(large)', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link'],
  FB_SECRET : process.env.FB_SECRET || null,

  // twitter details
  TW_APPID : process.env.TW_APPID || null,
  TW_CBURL : process.env.TW_CBURL || null,
  TW_SECRET : process.env.TW_SECRET || null,

  // github details
  GH_APPID : process.env.GH_APPID || null,
  GH_CBURL : process.env.GH_CBURL || null,
  GH_SECRET : process.env.GH_SECRET || null,
};
