/**
 * IDE用設定
 */
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '~': path.resolve(__dirname, 'app'),
      '@': path.resolve(__dirname, 'app'),
      '~~': path.resolve(__dirname),
      '@@': path.resolve(__dirname),
      '@srv': path.resolve(__dirname, 'server')
    }
  }
}
