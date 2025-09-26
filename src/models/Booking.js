class Booking {
  constructor({ bookingId, customerId, businessId, serviceId, status = 'pending', bookingDate, confirmationCode, createdAt, updatedAt }) {
    this.bookingId = bookingId;
    this.customerId = customerId;
    this.businessId = businessId;
    this.serviceId = serviceId;
    this.status = status;              // pending, confirmed, cancelled, completed
    this.bookingDate = bookingDate;
    this.confirmationCode = confirmationCode;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  toJSON() {
    return { ...this };
  }
}

export default Booking;