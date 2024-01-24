export const getOrderPending = async () => {
  try {
    return 12;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total pending order.");
  }
};

export const getOrderPendingPrice = async () => {
  try {
    return 12;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total price of pending order.");
  }
};

export const getDeliveryThisMonth = async () => {
  try {
    return 12;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total delivery this month.");
  }
};

export const getDeliveryPriceThisMonth = async () => {
  try {
    return 12;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total price of delivery this month.");
  }
};
