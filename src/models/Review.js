class Review {
  constructor({ reviewId, bookingId, customerId, businessId, rating, comment, createdAt }) {
    this.reviewId = reviewId;
    this.bookingId = bookingId;
    this.customerId = customerId;
    this.businessId = businessId;
    this.rating = rating;    // 1-5
    this.comment = comment;
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return { ...this };
  }
}

module.exports = Review;
