class Service {
  constructor({ serviceId, businessId, title, description, price, duration, createdAt, updatedAt }) {
    this.serviceId = serviceId;
    this.businessId = businessId;
    this.title = title;
    this.description = description;
    this.price = price;        // number
    this.duration = duration;  // in minutes
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  toJSON() {
    return { ...this };
  }
}

module.exports = Service;
