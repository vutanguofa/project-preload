const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const salesHistoryRoutes = require('./salesHistory-routes.js');
const newTransactionRoutes = require('./newTransaction-routes.js');
const processPaymentsRoutes = require('./processPayments-routes.js');
const newAdminRoutes = require('./newAdmin-routes.js');

router.use('/', homeRoutes);
router.use('/salesHistory', salesHistoryRoutes);
router.use('/newTransaction', newTransactionRoutes);
router.use('/processPayments', processPaymentsRoutes);
router.use('/newAdmin', newAdminRoutes);
router.use('/api', apiRoutes);

module.exports = router;
