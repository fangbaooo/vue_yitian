module.exports = file => () => import('@/page/' + file + '.vue')
// module.exports = function (file) {
// 	return function () {
// 		import('@/page/' + file + '.vue')
// 	}
// }