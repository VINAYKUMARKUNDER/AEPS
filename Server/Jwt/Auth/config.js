
module.exports = {
    departmentKeys: {
      fc: 'fc-secret-key',
      distributor: 'distributor-secret-key',
      retailer: 'retailer-secret-key',
    },
    modulePermissions: {
      fc: ['service', 'transaction', 'activity'],
      distributor: ['service', 'activity'],
      retailer: ['service'],
    },
  };
  